# Insights article artwork

Drop article images here using these filenames and they appear automatically —
no HTML changes needed.

## Current article: Switching Costs (insights/switching-costs-mmc-adoption.html)

| File                          | Used for                        | Recommended size    |
|-------------------------------|---------------------------------|---------------------|
| `switching-costs-hero.jpg`    | Article hero + Insights card    | 2000 × 1333 (3:2)   |

**Currently a stand-in.** `switching-costs-hero.jpg` is a copy of
`assets/photos/p-halsa-lift.jpg`. Replace it with the LinkedIn header photo
(the modular unit being craned) at the same path and filename.

The two fact-sheet graphics from the LinkedIn post are NOT images on this site —
they are rebuilt as live HTML in the article (`.factsheet` components in
`css/insights.css`). That keeps them sharp on every screen, readable on a phone,
selectable as text, and automatically on-brand. If you would rather use the
flat image exports, drop them here and swap the `<figure>` blocks for `<img>`.

## Adding a new article

1. Copy `insights/switching-costs-mmc-adoption.html` as a starting point.
2. Add art here as `<slug>-hero.jpg`.
3. Add a card to the grid in `insights.html`.
4. Add the new URL to `sitemap.xml`.
