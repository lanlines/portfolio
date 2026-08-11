# Design

## Reference
- https://www.bryllim.com/

## Vibe
Black, white, minimal. Clean typography, lots of whitespace, no decorative clutter.
Sharp and professional — lets the content speak.
Supports light and dark mode via a toggle in the navbar.

## Color Palette

### Light Mode (default)
| Token        | Value     | Usage                        |
|--------------|-----------|------------------------------|
| `--bg`       | `#ffffff` | Page background              |
| `--bg-alt`   | `#fafafa` | Alternate section background |
| `--fg`       | `#0a0a0a` | Primary text                 |
| `--muted`    | `#6b6b6b` | Secondary text, labels       |
| `--border`   | `#e5e5e5` | Dividers, card borders       |
| `--accent`   | `#0a0a0a` | Buttons, links, highlights   |
| `--accent-fg`| `#ffffff` | Text on accent backgrounds   |

### Dark Mode (`[data-theme="dark"]`)
| Token        | Value     | Usage                        |
|--------------|-----------|------------------------------|
| `--bg`       | `#0a0a0a` | Page background              |
| `--bg-alt`   | `#111111` | Alternate section background |
| `--fg`       | `#f5f5f5` | Primary text                 |
| `--muted`    | `#888888` | Secondary text, labels       |
| `--border`   | `#2a2a2a` | Dividers, card borders       |
| `--accent`   | `#f5f5f5` | Buttons, links, highlights   |
| `--accent-fg`| `#0a0a0a` | Text on accent backgrounds   |

## Theme Toggle
- Toggle button in the navbar (sun/moon icon or text)
- Persisted in `localStorage` under key `theme`
- Applied as `data-theme="dark"` on `<html>` element
- Defaults to system preference via `prefers-color-scheme`

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
- Sections alternate between `var(--bg)` and `var(--bg-alt)` for visual separation
- Theme toggle: minimal icon button, top-right of navbar
