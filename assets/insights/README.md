# Insights article artwork

Drop article images here using these filenames and they appear automatically —
no HTML changes needed.

## Current article: Switching Costs (insights/switching-costs-mmc-adoption.html)

| File                          | Used for                     | Source size |
|-------------------------------|------------------------------|-------------|
| `switching-costs-hero.jpg`    | Article hero + Insights card | 1136 × 758  |
| `switching-costs-fig1.png`    | "The 3 types" fact sheet     | 2160 × 2700 |
| `switching-costs-fig2.png`    | "Five strategies" fact sheet | 3840 × 2160 |

All three are the real exports from the LinkedIn post. `fig2` is a 16:9 slide
with three columns of small type, so the article gives it extra width
(`.art-figure--wide` in `css/insights.css`) to keep it readable.

## Adding a new article

1. Copy `insights/switching-costs-mmc-adoption.html` as a starting point.
2. Add art here as `<slug>-hero.jpg` (3:2 works best) plus any figures.
3. Add a card to the grid in `insights.html`.
4. Add the new URL to `sitemap.xml`.
