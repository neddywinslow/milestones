# Milestones Programs for Children

This is the official repository for the **Milestones Programs for Children** website, rebuilt as a modern, accessible, and high-performance static site.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Deployment Strategy:** Static HTML (Ready for Vercel, Netlify, or GitHub Pages)

## 📂 Project Structure

- `src/pages/`: Contains all routing and static pages (e.g., `index.astro`, `locations.astro`).
- `src/components/`: Reusable UI components (e.g., `Header.astro`, `Footer.astro`, `ProgramCard.astro`).
- `src/layouts/`: Base layouts shared across pages (`MainLayout.astro`, `MarkdownLayout.astro`).
- `src/content/news/`: Markdown content collection for all news and announcements.
- `src/data/`: JSON data files for managing link lists (e.g., parent resources).
- `public/assets/`: Static untouched assets such as images, PDFs, and SVGs.

## 🛠️ Local Development Workflow

To work on the site locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The local development site will automatically be available at `http://localhost:4322/`.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The command will generate fully static assets in the `dist/` directory, ready to be deployed to any static host.

## 📝 Managing Content

### Adding News & Announcements
News posts are driven by an Astro Content Collection. To publish a new announcement, simply create a new Markdown (`.md`) file inside the `src/content/news/` directory using the following frontmatter:

```markdown
---
title: "Your Article Title"
date: "YYYY-MM-DD"
summary: "A short snippet that appears on the news index and homepage."
category: "General"
---

Write your full markdown content here...
```

### Managing Parent Resources
Parent resource PDFs and links are managed centrally via a data file so the UI updates automatically. Edit the JSON list found at:
`src/data/resources.json`.

## 🎨 Design System

The site's visual identity relies on strict Tailwind CSS tokens configured in `tailwind.config.mjs`:
- **Brand Navy:** `#1F3A68` (Primary Headings)
- **Brand Red:** `#B4372A` (Action Buttons, Interactions)
- **Sky Blue:** `#4D7FBF` (Secondary Accents, Hover States)
- **Typography:** `Poppins` (Display Headings) and `Inter` (Body Copy).

---
*Maintained by the Milestones Programs for Children team.*
