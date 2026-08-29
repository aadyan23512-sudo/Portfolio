# Aadyan Adil — Portfolio

A React + Vite portfolio site with scroll animations, a signature
"web ↔ mobile" hero visual, and sections for skills, work, about, and contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files land in `dist/` — deploy that folder to Vercel, Netlify,
GitHub Pages, or any static host.

## What to customize

- **`src/components/Contact.jsx`** — swap in your real email and social links.
- **`src/components/Projects.jsx`** — replace the three placeholder projects
  with real ones (title, description, tags, and optionally links).
- **`src/components/About.jsx`** — update the bio and quick facts.
- **`src/components/Nav.jsx`** — the `AA` mark and `aadyan.dev` text if you
  want a different logo mark or domain.
- **Colors & type** — all design tokens live at the top of `src/index.css`
  under `:root`, so you can retheme the whole site from one place.

## Stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, hover
  states, and the parallax hero visual
- Plain CSS with custom properties (no framework, no build step for styles)
