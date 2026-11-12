import * as THREE from './vendor/three.module.js';

const root = document.documentElement;
const moon = document.querySelector('.night-moon');
const canvas = document.getElementById('moon-canvas');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let renderer, scene, camera, sphere, surface;
let initialized = false, ready = false, failed = false;
let frame = 0, lastPaint = 0;

const isVisible = () => root.dataset.theme === 'dark' && root.dataset.experience !== 'entered' && !document.hidden && !document.querySelector('dialog[open]');
function stop() { cancelAnimationFrame(frame); frame = 0; lastPaint = 0; }
function fallback() {
  stop(); failed = true; ready = false;
  moon.classList.remove('moon-webgl-ready');
  if (sphere) { sphere.geometry.dispose(); sphere.material.dispose(); }
  if (surface) surface.dispose();
  if (renderer) { renderer.dispose(); renderer = null; }
}
function initialize() {
  initialized = true;
  try {
    renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1.23,1.23,1.23,-1.23,.1,20);
    camera.position.z = 5;
    scene.add(new THREE.AmbientLight(0xd8e2ff,1.25));
    const light = new THREE.DirectionalLight(0xfffaf0,2.3);
    light.position.set(-1.4,1.4,6);
    scene.add(light);
    const material = new THREE.MeshStandardMaterial({roughness:1,metalness:0});
    sphere = new THREE.Mesh(new THREE.SphereGeometry(1,64,48),material);
    sphere.rotation.set(.05,Math.PI/2,-.08);
    scene.add(sphere);
    new THREE.TextureLoader().load('assets/planets/moon.jpg', texture => {
      if (failed) { texture.dispose(); return; }
      surface = texture;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(),4);
      material.map = texture;
      material.bumpMap = texture;
      material.bumpScale = .018;
      material.needsUpdate = true;
      ready = true;
      resize();
      moon.classList.add('moon-webgl-ready');
      sync();
    },undefined,fallback);
    resize();
  } catch { fallback(); }
}
function paint() { if (renderer && ready) renderer.render(scene,camera); }
function resize() {
  if (!renderer) return;
  const size = Math.round(moon.clientWidth);
  if (!size) return;
  renderer.setSize(size,size,false);
  if (isVisible()) paint();
}
function tick(now) {
  frame = 0;
  if (!isVisible() || reducedMotion.matches || !ready) { lastPaint = 0; return; }
  if (!lastPaint || now-lastPaint >= 1000/30) {
    const delta = lastPaint ? Math.min((now-lastPaint)/1000,.08) : 0;
    sphere.rotation.y += delta*.075;
    lastPaint = now;
    paint();
  }
  frame = requestAnimationFrame(tick);
}
function sync() {
  stop();
  if (!isVisible() || failed) return;
  if (!initialized) initialize();
  if (!ready) return;
  resize(); paint();
  if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
}
new ResizeObserver(resize).observe(moon);
const panelObserver = new MutationObserver(sync);
document.querySelectorAll('.site-panel').forEach(panel => panelObserver.observe(panel,{attributes:true,attributeFilter:['open']}));
window.addEventListener('portfolio:theme',sync);
window.addEventListener('portfolio:experience',sync);
document.addEventListener('visibilitychange',sync);
reducedMotion.addEventListener('change',sync);
window.addEventListener('pagehide',stop);
window.addEventListener('pageshow',sync);
canvas.addEventListener('webglcontextlost',() => { stop(); failed = true; ready = false; moon.classList.remove('moon-webgl-ready'); });
sync();
