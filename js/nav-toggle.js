(() => {
  // Scope to each header so multiple nav instances (e.g. the bundled preview)
  // each get their own working toggle.
  document.querySelectorAll('.site-nav').forEach((nav) => {
    const toggle = nav.querySelector('.site-nav__toggle');
    const menu = nav.querySelector('.site-nav__links');
    if (!toggle || !menu) return;

    const close = () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
    const open = () => { menu.classList.add('is-open'); toggle.setAttribute('aria-expanded', 'true'); };

    toggle.addEventListener('click', () => {
      toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
    });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  });
})();
