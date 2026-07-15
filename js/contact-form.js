(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = form.elements.firstName.value.trim();
    const lastName = form.elements.lastName.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = encodeURIComponent(`Website inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      [`Name: ${firstName} ${lastName}`, `Email: ${email}`, '', message].join('\n')
    );

    window.location.href = `mailto:shawn@shawnkeyes.com?subject=${subject}&body=${body}`;
  });
})();
