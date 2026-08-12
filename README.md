# Portfolio

Personal developer portfolio built with React, TypeScript, and Vite.
Minimal black-and-white design with light/dark mode support.

## Live Site

> _Not deployed yet — link will go here_

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| CSS Modules | Scoped component styles |

No CSS framework. No UI library. Just clean, hand-written CSS.

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
portfolio/
├── public/
│   └── images/
│       └── projects/       # Project screenshots
│
├── src/
│   ├── components/         # One folder per component
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   └── Contact/
│   │
│   ├── content/            # Static data (edit this to update content)
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   │
│   ├── styles/             # Global styles and design tokens
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── types/              # Shared TypeScript interfaces
│   │   └── index.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
└── docs/                   # Project documentation
    ├── design.md
    ├── content.md
    ├── architecture.md
    └── projects.md
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, tagline, CTA buttons |
| **About** | Short bio and photo |
| **Skills** | Technologies and tools |
| **Projects** | Featured project cards with screenshots and links |
| **Experience** | Work history and education timeline |
| **Contact** | Email, GitHub, LinkedIn |

---

## Updating Content

All content is decoupled from the UI. To update:

- **Projects** → edit `src/content/projects.ts`
- **Skills** → edit `src/content/skills.ts`
- **Experience / Education** → edit `src/content/experience.ts`
- **Bio, headings, copy** → edit `src/components/<Section>/<Section>.tsx` or see `docs/content.md`

---

## Theme

Supports light and dark mode.

- Defaults to system preference (`prefers-color-scheme`)
- Toggle in the navbar persists choice to `localStorage`
- Implemented via `data-theme="dark"` on `<html>` and CSS custom properties

Design tokens are defined in `src/styles/variables.css`.

---

## Adding a Project

1. Add a screenshot to `public/images/projects/your-project.png`
2. Add an entry to `src/content/projects.ts`:

```ts
{
  title: 'Your Project',
  description: 'What it does and why you built it.',
  tech: ['React', 'TypeScript'],
  image: '/images/projects/your-project.png',
  liveUrl: 'https://your-project.com',   // optional
  githubUrl: 'https://github.com/...',   // optional
}
```

---

## Docs

| File | Contents |
|------|----------|
| [`docs/design.md`](docs/design.md) | Color palette, typography, spacing, dark mode |
| [`docs/content.md`](docs/content.md) | All copy and placeholder text |
| [`docs/architecture.md`](docs/architecture.md) | Folder structure, component breakdown, conventions |
| [`docs/projects.md`](docs/projects.md) | Project entries and screenshot guidelines |

---

## Deployment

This is a static site — it can be deployed anywhere.

**Recommended options:**

- [Vercel](https://vercel.com/) — connect GitHub repo, zero config
- [Netlify](https://netlify.com/) — same, drag-and-drop or Git
- [GitHub Pages](https://pages.github.com/) — set `base` in `vite.config.ts` if deploying to a subdirectory

Build output goes to `dist/` after running `npm run build`.
