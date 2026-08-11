# Architecture

## Stack
- **Framework:** React 18
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** CSS (plain or CSS Modules — TBD, no CSS framework)

## Folder Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
│
├── content/          # Static data — keeps content out of components
│   ├── projects.ts   # Project list
│   ├── skills.ts     # Skills/tools list
│   └── experience.ts # Experience and education entries
│
├── styles/           # Global styles and CSS variables
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
- No routing — single page with anchor-based scroll navigation
- No external data fetching — everything is static

## Component Breakdown

| Component      | Responsibility                                      |
|----------------|-----------------------------------------------------|
| `Navbar`       | Sticky nav with anchor links, mobile-responsive     |
| `Hero`         | Name, tagline, CTA buttons                          |
| `About`        | Bio text, optional photo                            |
| `Skills`       | Renders skill categories from `content/skills.ts`  |
| `Projects`     | Maps over `content/projects.ts`, renders cards      |
| `ProjectCard`  | Single project — screenshot, title, desc, links     |
| `Experience`   | Timeline from `content/experience.ts`               |
| `Contact`      | Email, GitHub, LinkedIn links                       |

## Conventions
- One component per file, named same as file
- Types defined in `src/types/index.ts`
- CSS custom properties for all design tokens
- No inline styles except dynamic values
- Semantic HTML throughout (`<section>`, `<nav>`, `<article>`, etc.)
