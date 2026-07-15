(() => {
  const acc = document.getElementById('career-accordion');
  if (!acc) return;
  const items = Array.from(acc.querySelectorAll('.acc__item'));

  items.forEach((item) => {
    const btn = item.querySelector('.acc__btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Single-open accordion, matching the prototype's toggle behavior.
      items.forEach((it) => {
        it.classList.remove('is-open');
        it.querySelector('.acc__btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
