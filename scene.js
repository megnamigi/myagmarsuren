import * as THREE from './vendor/three.module.js';

const root = document.documentElement;
const stage = document.querySelector('.cosmos-stage');
const canvas = document.getElementById('solar-canvas');
const controls = document.querySelector('.planet-controls');
const announcement = document.getElementById('planet-announcement');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const pointer = {targetX:0,targetY:0,x:0,y:0};
let panelOpen = false;
const labels = {
  en:{sun:'Sun',mercury:'Mercury',venus:'Venus',earth:'Earth',mars:'Mars',jupiter:'Jupiter',saturn:'Saturn',uranus:'Uranus',neptune:'Neptune'},
  mn:{sun:'Нар',mercury:'Буд',venus:'Сугар',earth:'Дэлхий',mars:'Ангараг',jupiter:'Бархасбадь',saturn:'Санчир',uranus:'Тэнгэрийн ван',neptune:'Далайн ван'}
};
// Illustration, not a scale model. Positions keep every body distinct on small screens.
const definitions = [
  ['sun','sun.jpg',[.17,.51,.21],[.23,.27,.155],0],
  ['mercury','mercury.jpg',[.33,.37,.026],[.49,.16,.025],.02],
  ['venus','venus_atmosphere.jpg',[.405,.27,.05],[.70,.21,.043],.03],
  ['earth','earth_daymap.jpg',[.50,.23,.067],[.87,.34,.055],.41],
  ['mars','mars.jpg',[.60,.30,.037],[.86,.49,.035],.44],
  ['jupiter','jupiter.jpg',[.62,.61,.145],[.35,.61,.115],.05],
  ['saturn','saturn.jpg',[.845,.50,.098],[.76,.70,.083],.46],
  ['uranus','uranus.jpg',[.77,.83,.055],[.21,.88,.046],1.7],
  ['neptune','neptune.jpg',[.925,.80,.059],[.53,.89,.052],.49]
];
const bodies = definitions.map(([id,file,wide,narrow,tilt],i) => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'planet-button';
  button.dataset.planet = id; button.setAttribute('aria-pressed','false');
  const surface = document.createElement('span'); surface.className = 'planet-surface'; surface.setAttribute('aria-hidden','true');
  surface.style.backgroundImage = `url('assets/planets/${file}')`;
  const tag = document.createElement('span'); tag.className = 'planet-tag'; tag.setAttribute('aria-hidden','true');
  button.append(surface,tag); controls.append(button);
  const body = {id,file,wide,narrow,tilt,button,tag,i,scale:1,selected:false,hover:false,focus:false,anchor:null,x:0,y:0};
  button.addEventListener('pointerenter',() => { body.hover = true; wake(); });
  button.addEventListener('pointerleave',() => { body.hover = false; wake(); });
  button.addEventListener('focus',() => { body.focus = button.matches(':focus-visible'); wake(); });
  button.addEventListener('blur',() => { body.focus = false; wake(); });
  button.addEventListener('click',() => {
    const selected = !body.selected;
    bodies.forEach(b => { b.selected = false; b.button.setAttribute('aria-pressed','false'); });
    body.selected = selected; button.setAttribute('aria-pressed',String(selected));
    announcement.textContent = selected ? button.getAttribute('aria-label') : '';
    wake();
  });
  return body;
});
function updateLabels() {
  const lang = root.lang === 'mn' ? 'mn' : 'en';
  bodies.forEach(b => { b.tag.textContent = labels[lang][b.id]; b.button.setAttribute('aria-label',labels[lang][b.id]); });
  const selected = bodies.find(b => b.selected);
  announcement.textContent = selected ? labels[lang][selected.id] : '';
  stage.setAttribute('aria-label',lang === 'mn' ? 'Нар ба найман гариг' : 'Sun and eight planets');
  document.querySelector('[data-return-home]').setAttribute('aria-label',lang === 'mn' ? 'Нүүр рүү буцах' : 'Return home');
}
let renderer, scene, camera, frame = 0, previous = 0, elapsed = 0, width = 1, height = 1;
let initialized = false;
const geometry = new THREE.SphereGeometry(1,64,40);
const textureLoader = new THREE.TextureLoader();
const texture = file => { const t = textureLoader.load('assets/planets/'+file, wake); t.colorSpace = THREE.SRGBColorSpace; return t; };
function initialize() {
  initialized = true;
  try {
    renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-10,10,5,-5,.1,100); camera.position.z = 30;
    scene.add(new THREE.AmbientLight(0xb8d3ff,.7));
    const sunlight = new THREE.PointLight(0xffe6bd,2.6,0,0); sunlight.position.set(-15,6,15); scene.add(sunlight);
    const fill = new THREE.DirectionalLight(0x4a7bc0,.5); fill.position.set(10,-4,5); scene.add(fill);
    for (const b of bodies) {
      b.group = new THREE.Group(); b.group.rotation.z = b.tilt;
      const material = b.id === 'sun' ? new THREE.MeshBasicMaterial({map:texture(b.file),toneMapped:false}) : new THREE.MeshPhongMaterial({map:texture(b.file),shininess:b.id === 'earth' ? 12 : 2,specular:0x20252d});
      b.mesh = new THREE.Mesh(geometry,material); b.mesh.rotation.y = b.id === 'earth' ? 2.8 : .5;
      b.group.add(b.mesh); scene.add(b.group);
      if (b.id === 'earth') {
        const cloudMap = texture('earth_clouds.jpg');
        b.clouds = new THREE.Mesh(geometry,new THREE.MeshPhongMaterial({map:cloudMap,alphaMap:cloudMap,transparent:true,opacity:.65,depthWrite:false}));
        b.clouds.scale.setScalar(1.008); b.group.add(b.clouds);
      }
      if (b.id === 'saturn') {
        const ringGeometry = new THREE.RingGeometry(1.28,2.1,128);
        const positions = ringGeometry.attributes.position, uv = ringGeometry.attributes.uv;
        for (let v=0;v<positions.count;v++) uv.setXY(v,(Math.hypot(positions.getX(v),positions.getY(v))-1.28)/.82,.5);
        const rings = new THREE.Mesh(ringGeometry,new THREE.MeshPhongMaterial({map:texture('saturn_ring_alpha.png'),transparent:true,side:THREE.DoubleSide,depthWrite:false,opacity:.9}));
        rings.rotation.x = 1.14; b.group.add(rings);
      }
      if (b.id === 'sun') {
        const glowCanvas = document.createElement('canvas'); glowCanvas.width = glowCanvas.height = 256;
        const ctx = glowCanvas.getContext('2d');
        const glow = ctx.createRadialGradient(128,128,55,128,128,128);
        glow.addColorStop(0,'rgba(255,193,74,.35)'); glow.addColorStop(.3,'rgba(255,143,32,.16)'); glow.addColorStop(.65,'rgba(255,101,25,.035)'); glow.addColorStop(1,'rgba(255,101,25,0)');
        ctx.fillStyle = glow; ctx.fillRect(0,0,256,256);
        const halo = new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(glowCanvas),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
        halo.scale.set(3.3,3.3,1); halo.position.z = -.1; b.group.add(halo);
      }
    }
    stage.classList.add('webgl-ready');
  } catch {
    renderer = null;
    stage.classList.add('flat-fallback');
  }
}
function resize() {
  if (stage.hidden) return;
  // Measure layout size, not the scaled entrance animation rectangle.
  width = stage.clientWidth; height = stage.clientHeight;
  if(!width||!height)return;
  bodies.forEach(b => { b.anchor=null; b.x=0; b.y=0; });
  if (renderer) {
    renderer.setSize(width,height,false);
    const halfWidth = width/height*5;
    camera.left=-halfWidth; camera.right=halfWidth; camera.top=5; camera.bottom=-5; camera.updateProjectionMatrix();
  }
  paint(0);
}
function paint(delta) {
  const day = root.dataset.theme === 'light';
  const narrow = width/height < 1.65;
  const ease = reducedMotion.matches ? 1 : 1-Math.exp(-delta*4.5);
  pointer.x += (pointer.targetX-pointer.x)*ease; pointer.y += (pointer.targetY-pointer.y)*ease;
  const rotation = {sun:.018,mercury:.035,venus:-.025,earth:.075,mars:.06,jupiter:.11,saturn:.09,uranus:-.05,neptune:.07};
  for (const b of bodies) {
    const visible = !day || b.id === 'earth';
    b.button.hidden = !visible; if (b.group) b.group.visible = visible;
    if (!visible) continue;
    const [nx,ny,size] = day ? [.58,.47,.32] : narrow ? b.narrow : b.wide;
    const floating = !reducedMotion.matches;
    const amplitude = Math.min(narrow ? 9 : 22,height*(narrow ? .015 : .027));
    const depth = b.id === 'sun' ? .25 : .6 + b.i*.095;
    const driftX = floating ? Math.sin(elapsed*(.27+b.i*.017)+b.i*1.7)*amplitude*depth : 0;
    const driftY = floating ? Math.cos(elapsed*(.34+b.i*.011)+b.i*.9)*amplitude*1.15*depth : 0;
    const parallax = floating && finePointer.matches ? Math.min(23,width*.022)*depth : 0;
    const radius = day ? Math.min(size*height,width*.39) : Math.min(size*height,width*(b.id==='sun' ? .22 : b.id==='saturn' ? .11 : .19));
    const freeX = nx*width+driftX+pointer.x*parallax;
    const freeY = ny*height+driftY+pointer.y*parallax*.7;
    const locked = b.hover||b.focus||b.selected;
    if (locked && !b.anchor) b.anchor={x:b.x||freeX,y:b.y||freeY};
    if (!locked) b.anchor=null;
    const marginX = radius*(b.id==='saturn' ? 2.38 : 1.14)+3;
    const marginY = radius*(b.id==='saturn' ? 1.5 : 1.14)+3;
    const clamp = (v,min,max) => Math.max(min,Math.min(max,v));
    const x = clamp(b.anchor?.x ?? freeX,marginX,width-marginX);
    const y = clamp(b.anchor?.y ?? freeY,marginY,height-marginY);
    b.x=x; b.y=y;
    const targetScale = b.hover||b.focus||b.selected ? 1.12 : 1;
    b.scale = reducedMotion.matches ? targetScale : b.scale+(targetScale-b.scale)*Math.min(1,delta*7);
    const hit = Math.max(44,radius*2);
    b.button.style.left = x+'px'; b.button.style.top = y+'px'; b.button.style.width = hit+'px'; b.button.style.height = hit+'px';
    b.button.style.setProperty('--planet-scale',b.scale);
    if (b.group) {
      b.group.position.set((x-width/2)/height*10,(height/2-y)/height*10,0);
      b.group.scale.setScalar(radius/height*10*b.scale);
      b.group.rotation.z = b.tilt+(floating ? Math.sin(elapsed*.17+b.i)*.018 : 0);
      if (floating) { b.mesh.rotation.y += delta*rotation[b.id]; if(b.clouds)b.clouds.rotation.y += delta*.087; }
    }
  }
  if (renderer) renderer.render(scene,camera);
}
function animate(time) {
  frame = 0;
  const delta = Math.min((time-previous)/1000,.05); previous = time;
  elapsed += delta; paint(delta);
  if (!reducedMotion.matches && !document.hidden && !stage.hidden && !panelOpen) frame = requestAnimationFrame(animate);
}
function wake() {
  if (stage.hidden||document.hidden||panelOpen) return;
  if (!initialized) initialize();
  if (reducedMotion.matches) paint(0);
  else if(!frame) { previous=performance.now(); frame=requestAnimationFrame(animate); }
}
window.addEventListener('portfolio:experience',() => { cancelAnimationFrame(frame); frame=0; if(!stage.hidden){ if(!initialized)initialize(); resize(); wake(); } });
window.addEventListener('portfolio:theme',() => { bodies.forEach(b => { b.selected=false; b.anchor=null; b.button.setAttribute('aria-pressed','false'); }); announcement.textContent=''; wake(); });
window.addEventListener('portfolio:language',updateLabels);
document.addEventListener('visibilitychange',() => { cancelAnimationFrame(frame); frame=0; wake(); });
reducedMotion.addEventListener('change',() => { cancelAnimationFrame(frame); frame=0; wake(); });
new ResizeObserver(resize).observe(stage);
window.addEventListener('pointermove',event => {
  if(stage.hidden||panelOpen||reducedMotion.matches||!finePointer.matches||event.pointerType==='touch') return;
  const rect=stage.getBoundingClientRect();
  pointer.targetX=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));
  pointer.targetY=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));
},{passive:true});
function centerPointer(){pointer.targetX=pointer.targetY=0;}
document.documentElement.addEventListener('pointerleave',centerPointer);
window.addEventListener('blur',centerPointer);
const panelObserver = new MutationObserver(() => {
  panelOpen=!!document.querySelector('dialog[open]');
  cancelAnimationFrame(frame); frame=0; centerPointer(); wake();
});
document.querySelectorAll('dialog').forEach(panel => panelObserver.observe(panel,{attributes:true,attributeFilter:['open']}));
canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); cancelAnimationFrame(frame); frame=0; stage.classList.remove('webgl-ready'); stage.classList.add('flat-fallback'); });
canvas.addEventListener('webglcontextrestored',() => location.reload());
updateLabels();

// A fast entrance click can occur before this module finishes downloading.
if(!stage.hidden){if(!initialized)initialize();resize();wake();}
