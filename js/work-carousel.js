/* Selected-work carousel.
   Deliberately no autoplay — the standard for AEC and consulting portfolios,
   where a reader scanning project names shouldn't have the row move under
   them. Motion happens only on intent: arrow click, edge hover, drag, swipe,
   keyboard, or a trackpad scroll. The track is a native overflow-x scroller,
   so touch swipe, shift+wheel and screen-reader navigation work for free. */
(() => {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;

  const track = root.querySelector('.carousel__track');
  const buttons = Array.from(document.querySelectorAll('.carousel__btn[data-dir]'));
  const edges = Array.from(root.querySelectorAll('.carousel__edge[data-dir]'));
  if (!track) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // One "page" is as many whole cards as currently fit, so the row never
  // stops with a card sliced in half.
  const step = () => {
    const card = track.querySelector('.work-card');
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || '24') || 24;
    const unit = card.getBoundingClientRect().width + gap;
    return Math.max(unit, Math.floor(track.clientWidth / unit) * unit);
  };

  const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);

  const syncButtons = () => {
    const x = track.scrollLeft;
    const max = maxScroll();
    buttons.forEach((b) => {
      const atEnd = Number(b.dataset.dir) < 0 ? x <= 1 : x >= max - 1;
      b.disabled = atEnd || max === 0;
    });
    root.classList.toggle('is-start', x <= 1);
    root.classList.toggle('is-end', x >= max - 1 || max === 0);
  };

  buttons.forEach((b) => {
    b.addEventListener('click', () => {
      track.scrollBy({ left: Number(b.dataset.dir) * step(), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  // Edge hover: a slow continuous nudge, stopped the moment the pointer leaves.
  let raf = null;
  const glide = (dir) => {
    const tick = () => {
      const before = track.scrollLeft;
      track.scrollLeft = before + dir * 6;
      if (track.scrollLeft === before) { raf = null; return; } // hit the end
      raf = requestAnimationFrame(tick);
    };
    if (raf === null) raf = requestAnimationFrame(tick);
  };
  const stop = () => { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } };

  edges.forEach((edge) => {
    const dir = Number(edge.dataset.dir);
    edge.addEventListener('mouseenter', () => { if (!reduceMotion) glide(dir); });
    edge.addEventListener('mouseleave', stop);
    // The edges sit over the track, so a click there should still page.
    edge.addEventListener('click', () => {
      track.scrollBy({ left: dir * step(), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });
  root.addEventListener('mouseleave', stop);

  // Click-and-drag on desktop, the way an image strip behaves.
  // Capture is taken only once the pointer has actually travelled: capturing
  // on pointerdown would retarget the click to the track and stop a plain
  // click from ever opening the project.
  const DRAG_THRESHOLD = 6;
  let down = false, dragging = false, startX = 0, startLeft = 0, moved = 0, pid = null;

  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return; // native swipe is better
    down = true; dragging = false; moved = 0; pid = e.pointerId;
    startX = e.clientX; startLeft = track.scrollLeft;
  });

  track.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.abs(dx);
    if (!dragging && moved <= DRAG_THRESHOLD) return;
    if (!dragging) {
      dragging = true;
      track.classList.add('is-dragging');
      try { track.setPointerCapture(pid); } catch (err) { /* older browsers */ }
    }
    track.scrollLeft = startLeft - dx;
  });

  const endDrag = () => {
    if (!down) return;
    down = false;
    if (dragging) {
      track.classList.remove('is-dragging');
      try { track.releasePointerCapture(pid); } catch (err) { /* already released */ }
    }
    dragging = false;
  };
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  // Swallow the click that ends a drag so it doesn't also open a project.
  track.addEventListener('click', (e) => {
    if (moved > DRAG_THRESHOLD) { e.preventDefault(); e.stopPropagation(); moved = 0; }
  }, true);

  track.addEventListener('scroll', syncButtons, { passive: true });
  window.addEventListener('resize', syncButtons);
  // Cards are injected by home-marquee.js, so measure once that has run.
  requestAnimationFrame(syncButtons);
  window.addEventListener('load', syncButtons);
})();
