(() => {
  const root = document.getElementById('gvl-homepage');
  const menu = root.querySelector('.gvl-menu');
  const nav = root.querySelector('.gvl-nav');
  const pages = root.querySelectorAll('[data-gvl-view]');
  const back = root.querySelector('.gvl-footer a');
  const portrait = root.querySelector('.gvl-portrait');
  const profileCopy = root.querySelector('.gvl-profile-prose');
  const profileViewport = window.matchMedia('(min-width: 621px)');
  function sizePortrait() {
    if (!profileViewport.matches) {
      portrait.style.removeProperty('--gvl-profile-height');
      return;
    }
    if (!profileCopy.getClientRects().length) return;
    const height = Math.ceil(profileCopy.getBoundingClientRect().height);
    if (height > 0) portrait.style.setProperty('--gvl-profile-height', height + 'px');
  }
  if ('ResizeObserver' in window) {
    new ResizeObserver(sizePortrait).observe(profileCopy);
  }
  window.addEventListener('resize', sizePortrait);
  if (document.fonts) document.fonts.ready.then(sizePortrait);
  const tops = {home:'#gvl-top',research:'#gvl-research-page-top',publications:'#gvl-publications-page-top',teaching:'#gvl-teaching-page-top',leadership:'#gvl-leadership-page-top',cv:'#gvl-cv-page-top'};
  function showPage(name) {
    root.dataset.gvlDesign = 'editorial';
    pages.forEach(page => { page.hidden = page.dataset.gvlView !== name; });
    nav.querySelectorAll('a').forEach(link => {
      const active = link.dataset.gvlTarget === name && link.getAttribute('href') === tops[name];
      link.classList.toggle('gvl-current', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    back.setAttribute('href', tops[name]);
    nav.classList.remove('gvl-open');
    menu.setAttribute('aria-expanded', 'false');
    sizePortrait();
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('gvl-open', open);
  });
  root.querySelectorAll('a[data-gvl-target]').forEach(link => {
    link.addEventListener('click', () => showPage(link.dataset.gvlTarget));
  });
  function pageFromHash() {
    const entry = Object.entries(tops).find(([, target]) => target === window.location.hash);
    return entry ? entry[0] : 'home';
  }
  window.addEventListener('hashchange', () => showPage(pageFromHash()));
  showPage(pageFromHash());
})();

