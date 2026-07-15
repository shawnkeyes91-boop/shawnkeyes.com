# shawnkeyes.com — Keyes Advisory

Marketing website for **Keyes Advisory** — strategy and growth consulting for
construction innovators (modern methods of construction, mass timber, and
advanced prefabrication).

Static HTML/CSS/JS — no build step. Every page is plain HTML with shared
stylesheets and small vanilla-JS enhancements.

## Structure

```
index.html          Home
about.html          About Shawn Keyes
services.html       Services
portfolio.html      Work
contact.html        Contact
404.html            Not-found page
robots.txt          Crawl rules
sitemap.xml         Sitemap
css/                tokens.css (design system), site.css (nav/footer/contact), pages.css
js/                 nav-toggle, home-marquee, about-accordion, portfolio-more, contact-form
assets/             fonts (self-hosted woff2), photos, org logos, favicon, og-cover, résumé, documents
```

## Local preview

Any static server works, e.g.:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

The repository root is the deployable site (entry point `index.html`), so it
works on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
Canonical/Open-Graph URLs are set to `https://shawnkeyes.com/`.

- **GitHub Pages:** Settings → Pages → deploy from `main` / root. Add the
  custom domain `shawnkeyes.com` (a `CNAME` file is created automatically once
  you set the custom domain in the Pages UI).
- **Netlify / Vercel:** no build command; publish directory is the repo root.

## Notes

- Fonts are self-hosted (Inter + Source Serif 4 as a stand-in for the licensed
  Sentinel display face). Swap in licensed Sentinel for production if desired.
- Analytics: a Plausible snippet is included (`data-domain="shawnkeyes.com"`);
  it starts collecting once the Plausible account for the domain exists.
- The contact form opens the visitor's email client via `mailto:`. Wire up a
  form backend (Formspree, Netlify Forms, etc.) if you want server-side capture.
