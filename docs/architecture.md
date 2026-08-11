# Architecture

## Stack
- **Framework:** React 18
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** CSS Modules (one `.module.css` per component)

## Folder Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.css
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.css
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   └── Skills.module.css
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   ├── Projects.module.css
│   │   ├── ProjectCard.tsx
│   │   └── ProjectCard.module.css
│   ├── Experience/
│   │   ├── Experience.tsx
│   │   └── Experience.module.css
│   └── Contact/
│       ├── Contact.tsx
│       └── Contact.module.css
│
├── content/          # Static data — keeps content out of components
│   ├── projects.ts   # Project list (2 entries)
│   ├── skills.ts     # Skills/tools list
│   └── experience.ts # Experience and education entries
│
├── styles/           # Global styles only
│   ├── global.css    # Reset, base styles, CSS custom properties
│   └── variables.css # Design tokens (colors, spacing, typography)
│
├── types/            # Shared TypeScript interfaces
│   └── index.ts      # Project, Skill, Experience types
│
├── App.tsx           # Root component — assembles all sections
└── main.tsx          # Entry point
```

```
public/
└── images/
    └── projects/     # Project screenshots (e.g. project-1.png)
```

```
docs/                 # Project documentation (this folder)
├── design.md
├── content.md
├── architecture.md
└── projects.md
```

## Data Flow

- Content lives in `src/content/*.ts` as typed arrays/objects
- Components receive data as props — no global state needed
- Theme state (`light` | `dark`) lives in `App.tsx`, passed down to `Navbar`
- Theme persisted in `localStorage`, applied as `data-theme` on `<html>`
- No routing — single page with anchor-based scroll navigation
- No external data fetching — everything is static

## Component Breakdown

| Component      | Responsibility                                           |
|----------------|----------------------------------------------------------|
| `Navbar`       | Sticky nav with anchor links, theme toggle, mobile menu  |
| `Hero`         | Name, tagline, CTA buttons                               |
| `About`        | Bio text, optional photo                                 |
| `Skills`       | Renders skill categories from `content/skills.ts`        |
| `Projects`     | Maps over `content/projects.ts`, renders 2 cards         |
| `ProjectCard`  | Single project — screenshot, title, desc, links          |
| `Experience`   | Timeline from `content/experience.ts`                    |
| `Contact`      | Placeholder — email, GitHub, LinkedIn links              |

## Conventions
- One component per folder: `ComponentName/ComponentName.tsx` + `ComponentName.module.css`
- Types defined in `src/types/index.ts`
- CSS custom properties for all design tokens — never hardcode colors or spacing
- Theme tokens defined on `:root` (light) and `[data-theme="dark"]` in `variables.css`
- No inline styles except dynamic values
- Semantic HTML throughout (`<section>`, `<nav>`, `<article>`, etc.)
