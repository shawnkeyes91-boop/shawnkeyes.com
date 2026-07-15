(() => {
  document.querySelectorAll('.pf-more-btn').forEach((btn) => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    btn.addEventListener('click', () => {
      const nowHidden = target.classList.toggle('is-hidden');
      const expanded = !nowHidden;
      btn.setAttribute('aria-expanded', String(expanded));
      btn.querySelector('.label').textContent = expanded ? 'Show fewer' : 'View more projects';
      btn.querySelector('.chev').textContent = expanded ? '↑' : '↓';
    });
  });
})();
