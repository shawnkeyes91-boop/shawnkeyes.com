(() => {
  // Selected-work marquee: mirrors the Portfolio "Construction Projects" list.
  const buildings = [
    { photo: 'assets/photos/p-halsa.jpg', alt: "Hälsa, Ontario's tallest mass timber residential building, Toronto", meta: 'Intelligent City', title: 'Hälsa, 230 Royal York Rd' },
    { photo: 'assets/photos/p-coronation.jpg', alt: 'Coronation Park Sports and Recreation Centre at dusk, Edmonton', meta: 'Fast + Epp', title: 'Coronation Park Sports and Recreation Centre' },
    { photo: 'assets/photos/p-metis-int.jpg', alt: 'Heavy timber interior of the Métis Crossing Cultural Gathering Centre', meta: 'Fast + Epp', title: 'Métis Crossing Cultural Gathering Centre' },
    { photo: 'assets/photos/p-saddlelake.jpg', alt: 'Timber-framed learning commons interior at Saddle Lake Onchaminahos Elementary School', meta: 'Fast + Epp', title: 'Saddle Lake Onchaminahos School' },
    { photo: 'assets/photos/p-clg.jpg', alt: 'Aerial view of the Chief Leonard George Building, Vancouver', meta: 'Intelligent City', title: 'Chief Leonard George Building' },
    { photo: 'assets/photos/p-portwood.jpg', alt: 'Aerial view of the Portwood master-planned community, Port Moody', meta: 'Fast + Epp', title: 'Portwood — Phase I' },
    { photo: 'assets/photos/p-fortedmonton.png', alt: 'Fort Edmonton Park entrance pavilion', meta: 'Fast + Epp', title: 'Fort Edmonton Entrance Pavilion' },
    { photo: 'assets/photos/p-southhaven.jpg', alt: 'South Haven Centre for Remembrance in winter', meta: 'Fast + Epp', title: 'South Haven Centre for Remembrance' },
    { photo: 'assets/photos/p-kashgek.jpg', alt: "Aerial view of the Kashgêk' Building for Kwanlin Dün First Nation, Whitehorse, Yukon", meta: 'Fast + Epp', title: 'Kashgêk’ Building', objPos: 'center 78%' },
    { photo: 'assets/photos/p-saltriver.jpg', alt: 'Timber boardroom at the Salt River First Nation community facility', meta: 'Fast + Epp', title: 'Salt River First Nation Community Facility' },
    { photo: 'assets/photos/p-valleyline.jpg', alt: 'Rendering of an elevated mass timber station on the Edmonton Valley Line West LRT', meta: 'Fast + Epp', title: 'Edmonton Valley Line West LRT' },
  ];

  const orgs = [
    { src: 'assets/orgs/intelligent-city.png', alt: 'Intelligent City', scale: 1.4 },
    { src: 'assets/orgs/woodworks.png', alt: 'WoodWorks', scale: 1 },
    { src: 'assets/orgs/fast-epp.webp', alt: 'Fast + Epp', scale: 1.35 },
    { src: 'assets/orgs/cwc.png', alt: 'Canadian Wood Council', scale: 1 },
    { src: 'assets/orgs/gov-bc.png', alt: 'Government of British Columbia', scale: 1 },
    { src: 'assets/orgs/bc-housing.webp', alt: 'BC Housing', scale: 1 },
    { src: 'assets/orgs/fii.svg', alt: 'Forestry Innovation Investment', scale: 1 },
    { src: 'assets/orgs/nrcan.png', alt: 'Natural Resources Canada', scale: 1 },
    { src: 'assets/orgs/bcit.png', alt: 'BCIT', scale: 1 },
  ];

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  const workTrack = document.getElementById('work-track');
  if (workTrack) {
    const cards = buildings
      .map((b) => `
        <a class="work-card" href="portfolio.html">
          <figure><img src="${b.photo}" alt="${esc(b.alt)}" loading="lazy" style="object-position:${b.objPos || 'center'}"></figure>
          <div class="work-card__meta">${esc(b.meta)}</div>
          <h3 class="work-card__title">${esc(b.title)}</h3>
        </a>`)
      .join('');
    // Desktop auto-marquee needs a duplicated track so the -50% translate loops
    // seamlessly. Touch devices swipe through the strip manually, so a single
    // set of cards is shown (no repeats).
    const autoScrolls = window.matchMedia('(hover: hover)').matches;
    workTrack.innerHTML = autoScrolls ? cards + cards : cards;
  }

  const trustedTrack = document.getElementById('trusted-track');
  if (trustedTrack) {
    const logos = orgs
      .map((o) => `<span><img src="${o.src}" alt="${esc(o.alt)}" style="transform:scale(${o.scale})"></span>`)
      .join('');
    trustedTrack.innerHTML = logos + logos;
  }
})();
