# Projects

Detailed entries for each featured project.
These map directly to the data in `src/content/projects.ts`.

---

## How many to include?
**2 projects** for now. Can expand later by adding entries to `src/content/projects.ts`.

## Screenshot guidelines
- Place images in `public/images/projects/`
- Recommended size: `1200×750px` or `16:10` ratio
- Format: `.png` or `.webp`
- Naming: `project-slug.png` (e.g. `ecommerce-app.png`)

---

## Project Template

```ts
{
  title: 'Project Name',
  description: 'Short description — what it does and why it matters.',
  tech: ['React', 'TypeScript', 'Node.js'],
  image: '/images/projects/project-slug.png',
  liveUrl: 'https://...',   // optional
  githubUrl: 'https://...',  // optional
  featured: true,            // show on homepage
}
```

---

## Entries

### Project 1
- **Title:** [placeholder]
- **Description:** [placeholder]
- **Tech:** [placeholder]
- **Screenshot:** `public/images/projects/project-1.png` — [placeholder]
- **Live URL:** [placeholder or N/A]
- **GitHub:** [placeholder]
- **Featured:** yes

### Project 2
- **Title:** [placeholder]
- **Description:** [placeholder]
- **Tech:** [placeholder]
- **Screenshot:** `public/images/projects/project-2.png` — [placeholder]
- **Live URL:** [placeholder or N/A]
- **GitHub:** [placeholder]
- **Featured:** yes

---

## Notes
- Start with 2, add more later by appending to `src/content/projects.ts` — no component changes needed
- If a project has no live URL (e.g. private/internal), just show GitHub
- Screenshots can be replaced with a styled placeholder card until ready
- Recommended screenshot size: `1200×750px` (16:10), `.png` or `.webp`
