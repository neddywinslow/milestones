# Milestones Programs for Children

This is the official repository for the **Milestones Programs for Children** website, rebuilt as a modern, accessible, and high-performance static site.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Deployment Strategy:** Static HTML (Ready for Vercel, Netlify, or GitHub Pages)

## 📂 Project Structure

- `src/pages/`: All routing and page templates. Pages are thin wrappers that fetch content from collections — no hardcoded copy.
- `src/components/`: Reusable UI components (e.g., `Header.astro`, `Footer.astro`, `ProgramCard.astro`).
- `src/layouts/`: Base layouts shared across pages (`MainLayout.astro`, `MarkdownLayout.astro`).
- `src/content/`: **All editable site content lives here** (see below).
- `src/data/`: JSON data files for structured lists (locations, resources).
- `public/assets/`: Static assets such as images, PDFs, and SVGs.

## 📝 Managing Content

This site uses a **content-driven architecture**. All copy that non-technical staff may need to edit is stored in Markdown (`.md`) or JSON files — no touching `.astro` components required.

### Content Collections (`src/content/`)

| Collection | Location | What it controls |
|---|---|---|
| `programs` | `src/content/programs/*.md` | Each program card and detail page (early-childhood, kindergarten, school-age, summer-camps) |
| `pages` | `src/content/pages/*.md` | Body copy for static pages: mission, enrollment, tuition, careers |
| `news` | `src/content/news/*.md` | News posts and announcements |
| `testimonials` | `src/content/testimonials/*.json` | Parent testimonial quotes on the homepage |

**Frontmatter for programs:**
```markdown
---
title: "Early Childhood"
description: "Short description shown on cards."
ages: "2 months – 5 years"
color: "sky"   # navy | sky | red
---

Full Markdown body shown on the program detail page...
```

**Frontmatter for news:**
```markdown
---
title: "Your Article Title"
date: 2024-01-15
summary: "Short summary shown on the news index."
pinned: false
---

Write your full article content here...
```

**Frontmatter for pages (mission, enrollment, etc.):**
```markdown
---
title: "Page Title"
---

Full Markdown body rendered on the page...
```

### Data Files (`src/data/`)

| File | What it controls |
|---|---|
| `locations.json` | All site locations (Early Childhood + School Age sites) shown on the Locations page |
| `resources.json` | Parent resource PDF cards shown on the Parent Resources page |

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Available at `http://localhost:4322/`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Outputs fully static assets to `dist/`.

## 🎨 Design System

Visual identity tokens configured in `tailwind.config.mjs`:
- **Brand Navy:** `#1F3A68` — Primary headings
- **Brand Red:** `#B4372A` — Action buttons, interactions
- **Sky Blue:** `#4D7FBF` — Secondary accents, hover states
- **Typography:** `Poppins` (display headings) · `Inter` (body copy)

---
*Maintained by the Milestones Programs for Children team.*
