(() => {
  const image = document.getElementById('github-activity-image');
  const status = document.getElementById('github-activity-status');
  if (!image || !status) return;
  let state = 'loading';
  function update() {
    const mn = document.documentElement.lang === 'mn';
    image.alt = mn ? 'megnamigi-ийн сүүлийн нэг жилийн GitHub contributions' : 'megnamigi’s GitHub contributions over the past year';
    image.hidden = state !== 'loaded';
    status.hidden = state === 'loaded';
    status.textContent = state === 'failed'
      ? (mn ? 'График одоогоор ачаалагдсангүй. GitHub профайлаас үзээрэй.' : 'The graph is unavailable right now. View activity on GitHub.')
      : (mn ? 'GitHub activity ачаалж байна…' : 'Loading GitHub activity…');
  }
  image.addEventListener('load', () => { state = 'loaded'; update(); });
  image.addEventListener('error', () => { state = 'failed'; update(); });
  window.addEventListener('portfolio:language', update);
  if (image.complete) state = image.naturalWidth > 0 ? 'loaded' : 'failed';
  update();
})();
