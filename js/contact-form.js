/* Submits the site's forms to their configured endpoint over fetch, so the
   visitor gets an inline confirmation instead of being bounced to the form
   provider's own thank-you page. Falls back to a normal browser POST if
   fetch is unavailable or the endpoint hasn't been swapped in yet. */
(() => {
  const PLACEHOLDER = /YOUR_\w*FORM_ID/;

  const enhance = (form) => {
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    const endpoint = form.getAttribute('action') || '';

    const say = (msg, state) => {
      if (!status) return;
      status.textContent = msg;
      status.dataset.state = state;
    };

    form.addEventListener('submit', async (e) => {
      // Endpoint not wired up yet — let the browser do whatever it would do,
      // rather than silently swallowing the submission.
      if (!endpoint || PLACEHOLDER.test(endpoint)) {
        e.preventDefault();
        say('This form isn’t connected yet. Email shawn@shawnkeyes.com in the meantime.', 'error');
        return;
      }
      if (!window.fetch) return; // native POST handles it

      e.preventDefault();
      const original = button ? button.textContent : '';
      if (button) { button.disabled = true; button.textContent = 'Sending…'; }
      say('', '');

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.reset();
          say(form.dataset.successMessage || 'Thanks — your message is on its way. I’ll be in touch shortly.', 'ok');
        } else {
          const data = await res.json().catch(() => ({}));
          const detail = data.errors && data.errors.length ? data.errors.map((x) => x.message).join(', ') : '';
          say(detail || 'Something went wrong. Please email shawn@shawnkeyes.com directly.', 'error');
        }
      } catch (err) {
        say('Network error. Please email shawn@shawnkeyes.com directly.', 'error');
      } finally {
        if (button) { button.disabled = false; button.textContent = original; }
      }
    });
  };

  document.querySelectorAll('#contact-form, #subscribe-form').forEach(enhance);
})();
