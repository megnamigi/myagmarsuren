(() => {
  const canvas = document.getElementById('galaxy-stars');
  const context = canvas.getContext('2d');
  if (!context) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stars = [];
  let width = 0;
  let height = 0;
  let frame = 0;
  let lastPaint = 0;
  let resizeTimer;
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  const finePointer = window.matchMedia("(pointer: fine)");
  let seed = 24119;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const isDark = () => document.documentElement.dataset.theme === 'dark';

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars.length = 0;
    seed = 24119;
    const count = Math.min(1100, Math.max(200, Math.floor(width * height / 1500)));
    for (let i = 0; i < count; i++) {
      stars.push({x:random() * width,y:random() * height,radius:random() < .08 ? 1.35 : .35 + random() * .65,alpha:.17 + random() * .44,phase:random() * Math.PI * 2,speed:.0003 + random() * .0004,blue:random() > .7});
    }
    // A faint diagonal cluster gives the field depth without covering the content.
    const clusterCount = Math.min(360, Math.floor(width / 4));
    for (let i = 0; i < clusterCount; i++) {
      const x = random() * width;
      const spread = (random() + random() + random() - 1.5) * height * .2;
      const y = height * .66 - (x / width) * height * .45 + spread;
      stars.push({x,y,radius:.3 + random() * .5,alpha:.1 + random() * .22,phase:random() * Math.PI * 2,speed:.0002,blue:true});
    }
    draw(0);
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    for (const star of stars) {
      const twinkle = reducedMotion.matches ? .8 : .66 + Math.sin(time * star.speed + star.phase) * .34;
      context.fillStyle = star.blue ? `rgba(124,166,255,${star.alpha * twinkle})` : `rgba(224,235,255,${star.alpha * twinkle})`;
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
      if (star.radius > 1.25) {
        context.strokeStyle = `rgba(158,192,255,${star.alpha * twinkle * .35})`;
        context.lineWidth = .5;
        context.beginPath();
        context.moveTo(star.x - 3, star.y); context.lineTo(star.x + 3, star.y);
        context.moveTo(star.x, star.y - 3); context.lineTo(star.x, star.y + 3);
        context.stroke();
      }
    }
  }

  function animate(time) {
    if (time - lastPaint > 40) {
      draw(time);
      currentX += (targetX - currentX) * .065;
      currentY += (targetY - currentY) * .065;
      document.documentElement.style.setProperty('--space-x', (currentX * 19).toFixed(2) + 'px');
      document.documentElement.style.setProperty('--space-y', (currentY * 13).toFixed(2) + 'px');
      lastPaint = time;
    }
    frame = requestAnimationFrame(animate);
  }

  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (reducedMotion.matches || !isDark()) {
      targetX = targetY = currentX = currentY = 0;
      document.documentElement.style.setProperty('--space-x', '0px');
      document.documentElement.style.setProperty('--space-y', '0px');
    }
    if (!isDark() || document.hidden) return;
    if (reducedMotion.matches) draw(0);
    else frame = requestAnimationFrame(animate);
  }

  window.addEventListener('pointermove', event => {
    if (!finePointer.matches || reducedMotion.matches || !isDark()) return;
    if (event.target instanceof Element && event.target.closest(".planet-button")) return;
    targetX = event.clientX / Math.max(window.innerWidth, 1) * 2 - 1;
    targetY = event.clientY / Math.max(window.innerHeight, 1) * 2 - 1;
  }, {passive:true});
  document.documentElement.addEventListener('pointerleave', () => { targetX = targetY = 0; });
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { resize(); sync(); }, 120); });
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', sync);
  new MutationObserver(sync).observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
  resize();
  sync();
})();
