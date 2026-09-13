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
insights.html       Insights index (article cards + subscribe)
insights/           One HTML file per article
contact.html        Contact
404.html            Not-found page
robots.txt          Crawl rules
sitemap.xml         Sitemap
css/                tokens.css (design system), site.css (nav/footer/contact/forms),
                    pages.css, insights.css
js/                 nav-toggle, home-marquee, about-accordion, portfolio-more, contact-form
assets/             fonts (self-hosted woff2), photos, org logos, favicon, og-cover, résumé,
                    documents, insights/ (article artwork — see assets/insights/README.md)
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
- **Forms need a Formspree endpoint before launch.** Both the contact form
  (`contact.html`) and the Insights subscribe form (`insights.html` and every
  article page) post to Formspree over `fetch`, so the visitor gets an inline
  confirmation instead of leaving the site. Create two forms at
  [formspree.io](https://formspree.io) and replace the placeholders:

  | Placeholder                 | Files                                        |
  |-----------------------------|----------------------------------------------|
  | `YOUR_CONTACT_FORM_ID`      | `contact.html`                               |
  | `YOUR_SUBSCRIBE_FORM_ID`    | `insights.html`, `insights/*.html`           |

  Until they are swapped, the forms show "This form isn't connected yet" rather
  than silently dropping a submission. `js/contact-form.js` handles both, plus a
  honeypot field and a no-JS fallback to a plain browser POST.

- **Adding an Insights article:** see `assets/insights/README.md`.
