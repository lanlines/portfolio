# Design

## Reference
- https://www.bryllim.com/

## Vibe
Black, white, minimal. Clean typography, lots of whitespace, no decorative clutter.
Sharp and professional — lets the content speak.

## Color Palette

| Token       | Value     | Usage                        |
|-------------|-----------|------------------------------|
| `--bg`      | `#ffffff` | Page background              |
| `--fg`      | `#0a0a0a` | Primary text                 |
| `--muted`   | `#6b6b6b` | Secondary text, labels       |
| `--border`  | `#e5e5e5` | Dividers, card borders       |
| `--accent`  | `#0a0a0a` | Buttons, links, highlights   |

> Dark mode: invert bg/fg, keep muted and border adjusted.

## Typography

- **Font**: System stack or a clean sans-serif (e.g. Inter, Geist)
- **Heading scale**: 4xl → 3xl → 2xl → xl
- **Body**: 16px base, 1.6 line-height
- **Weight**: 400 body, 600 subheadings, 700 headings

## Spacing
- Section padding: `80px` vertical (desktop), `48px` (mobile)
- Container max-width: `1100px`, centered
- Card gap: `24px`

## Layout
- Single-page scroll with anchor nav
- Responsive: mobile-first, breakpoint at `768px`
- No sidebars — full-width sections

## Components Style
- Buttons: solid black fill, white text, no border-radius or subtle radius (2–4px)
- Cards: white bg, thin border (`1px solid var(--border)`), subtle hover shadow
- Nav: sticky top, minimal, links only — no hamburger icon unless mobile
- Sections alternate between white and off-white (`#fafafa`) for visual separation
