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

  // Strategy & innovation work, mirroring the Portfolio page.
  const strategy = [
    { photo: 'assets/photos/case-studies-kbm.webp', alt: 'KBM Hogue mass timber building', meta: 'WoodWorks BC', title: 'Mass Timber Business Case Studies' },
    { photo: 'assets/photos/factory.jpg', alt: 'Robotic fabrication of prefabricated mass timber panels at the Intelligent City factory', meta: 'Intelligent City', title: 'Go-to-Market & Sales Strategy' },
    { photo: 'assets/photos/roundtable-saltriver.jpg', alt: 'Industry audience at a WoodWorks BC event', meta: 'WoodWorks BC', title: 'Mass Timber Industry Roundtable' },
    { photo: 'assets/photos/ww-network-buildex.jpg', alt: 'Audience at a WoodWorks BC BUILDEX event', meta: 'WoodWorks BC', title: 'WoodWorks BC Network', objPos: 'left center' },
    { photo: 'assets/photos/ww-strategic-plan.webp', alt: 'WoodWorks worker framing a light-frame structure', meta: 'WoodWorks BC', title: 'Strategic Plan 2023\u20132026', objPos: 'left center' },
    { photo: 'assets/photos/delivery-begbie.jpg', alt: 'Mass timber mid-rise under construction', meta: 'WoodWorks BC', title: 'Procuring Mass Timber Buildings in Canada' },
    { photo: 'assets/photos/seismic-nuframe.jpeg', alt: 'Light-frame mid-rise wood construction', meta: 'WoodWorks BC', title: 'Light-Frame Mid-Rise in High Seismic Regions' },
    { photo: 'assets/photos/speaking-buildex.jpg', alt: 'Shawn Keyes presenting at BUILDEX Vancouver', meta: 'WoodWorks BC', title: 'WoodWorks at BUILDEX' },
  ];

  // Alternate strategy / construction so the strip reads as one practice
  // rather than two separate portfolios.
  const interleave = (a, b) => {
    const out = [];
    for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
      if (a[i]) out.push(a[i]);
      if (b[i]) out.push(b[i]);
    }
    return out;
  };

  const orgs = [
    { src: 'assets/orgs/intelligent-city.png', alt: 'Intelligent City', scale: 1.4 },
    { src: 'assets/orgs/woodworks.png', alt: 'WoodWorks', scale: 1 },
    { src: 'assets/orgs/fast-epp.webp', alt: 'Fast + Epp', scale: 1.35 },
    { src: 'assets/orgs/cwc.png', alt: 'Canadian Wood Council', scale: 1 },
    { src: 'assets/orgs/canada-wood.png', alt: 'Canada Wood Group', scale: 1 },
    { src: 'assets/orgs/gov-bc.png', alt: 'Government of British Columbia', scale: 1 },
    { src: 'assets/orgs/bc-housing.webp', alt: 'BC Housing', scale: 1 },
    { src: 'assets/orgs/fii.svg', alt: 'Forestry Innovation Investment', scale: 1 },
    { src: 'assets/orgs/nrcan.png', alt: 'Natural Resources Canada', scale: 1 },
    { src: 'assets/orgs/bcit.png', alt: 'BCIT', scale: 1 },
  ];

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  const workTrack = document.getElementById('work-track');
  if (workTrack) {
    const cards = interleave(strategy, buildings)
      .map((b) => `
        <a class="work-card" href="portfolio.html">
          <figure><img src="${b.photo}" alt="${esc(b.alt)}" loading="lazy" style="object-position:${b.objPos || 'center'}"></figure>
          <div class="work-card__meta">${esc(b.meta)}</div>
          <h3 class="work-card__title">${esc(b.title)}</h3>
        </a>`)
      .join('');
    // The carousel is user-driven, so the list is shown once (no loop clone).
    workTrack.innerHTML = cards;
  }

  const trustedTrack = document.getElementById('trusted-track');
  if (trustedTrack) {
    const logos = orgs
      .map((o) => `<span><img src="${o.src}" alt="${esc(o.alt)}" style="transform:scale(${o.scale})"></span>`)
      .join('');
    trustedTrack.innerHTML = logos + logos;
  }
})();
