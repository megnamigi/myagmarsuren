/* The full sentence remains available to screen readers throughout the reveal. */
(() => {
  const invitation = document.querySelector('.entry-invitation');
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let characters = [], position = 0, timer = 0, text, caret;
  const visible = () => root.dataset.experience !== 'entered' && !invitation.hidden && !document.hidden && !document.querySelector('dialog[open]');
  function stop() { clearTimeout(timer); timer = 0; }
  function finish() {
    stop(); position = characters.length;
    text.textContent = characters.join('');
    caret.classList.add('is-done');
    invitation.dataset.typing = 'false';
  }
  function step() {
    timer = 0;
    if (!visible()) return;
    position++;
    text.textContent = characters.slice(0,position).join('');
    if (position >= characters.length) { finish(); return; }
    const last = characters[position-1];
    timer = setTimeout(step,/[.!?]/.test(last) ? 180 : last === ' ' ? 40 : 28);
  }
  function sync() {
    stop();
    if (reducedMotion.matches) { finish(); return; }
    if (visible() && position < characters.length) timer = setTimeout(step,position ? 40 : 320);
  }
  function prepare() {
    stop();
    const sentence = invitation.textContent.trim();
    characters = Array.from(sentence); position = 0;
    const copy = document.createElement('span');
    copy.className = 'typewriter-copy'; copy.textContent = sentence;
    const output = document.createElement('span');
    output.className = 'typewriter-output'; output.setAttribute('aria-hidden','true');
    text = document.createElement('span');
    caret = document.createElement('i'); caret.className = 'typewriter-caret';
    output.append(text,caret);
    invitation.replaceChildren(copy,output);
    invitation.classList.add('typewriter-ready');
    invitation.dataset.typing = 'true';
    sync();
  }
  window.addEventListener('portfolio:language',prepare);
  window.addEventListener('portfolio:experience',sync);
  document.addEventListener('visibilitychange',sync);
  reducedMotion.addEventListener('change',sync);
  const observer = new MutationObserver(sync);
  document.querySelectorAll('.site-panel').forEach(panel => observer.observe(panel,{attributes:true,attributeFilter:['open']}));
  window.addEventListener('pagehide',stop);
  window.addEventListener('pageshow',sync);
  prepare();
})();
