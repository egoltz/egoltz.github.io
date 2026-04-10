# Portfolio Build Diary

**Project:** Personal Portfolio Site (Next.js + MDX)  
**Started:** 2026-04-09  
**Spec:** PRD.md | **Build Plan:** BUILD_PROMPTS.md

---

## Phase 1 — Project Scaffold

**Date:** 2026-04-09  
**Status:** ✅ Complete

### Tasks
- [x] Initialize Next.js (using 16.2.3 — latest stable; 14.2.29 had a security vuln) with TypeScript, Tailwind, App Router
- [x] Configure next.config.js (output: export, images unoptimized, basePath placeholder)
- [x] Configure Tailwind with design system color tokens and font families
- [x] Set up Google Fonts via next/font (Roboto 500/600/700, Inter 400, Roboto Mono 400)
- [x] Create /content/projects/placeholder-project.mdx with correct frontmatter schema
- [x] Create /public/images/projects/ with placeholder SVG thumbnail
- [x] `npm run build` passes cleanly

### Notes
- Used Next.js 16.2.3 (latest) instead of 14 — 14.2.29 had a known security vulnerability
- Scaffolded manually (create-next-app refused due to existing files in dir)
- Tailwind config uses CSS variables for font families (`--font-roboto`, `--font-inter`, `--font-roboto-mono`)
- Lock file workspace warning is benign (parent dir has its own package-lock.json)

---

## Phase 2 — Layout: Header & Footer

**Date:** 2026-04-09  
**Status:** ✅ Complete

### Tasks
- [x] Build `components/Header.tsx` — site name left, About/Contact nav right, 1px bottom border, sticky, 900px centered
- [x] Build `components/Footer.tsx` — designer byline, copyright, LinkedIn SVG icon
- [x] Wire both into `app/layout.tsx` with `flex flex-col min-h-screen`
- [x] `npm run build` passes cleanly

### Notes
- Footer uses `new Date().getFullYear()` for dynamic year
- LinkedIn href is `#` placeholder — will need real URL from owner (PRD Open Question #2)
- "Your Name" placeholder used in both Header and Footer (PRD Open Question identity TBD)

---

## Phase 3 — MDX Content Pipeline (data layer only)

**Date:** 2026-04-09  
**Status:** ✅ Complete (built as prerequisite for Phase 4)

### Tasks
- [x] `lib/projects.ts` — reads all .mdx files, parses frontmatter via `gray-matter`
- [x] `getAllProjects()` — sorted: featured first, then date descending
- [x] `getProjectBySlug(slug)` — used by detail pages in Phase 5
- [x] `getAllTags()` — unique tags across all projects, sorted alphabetically
- [x] Added 3 real placeholder projects (viewshr, tableau-dashboarding, distance-optimization)

### Notes
- No UI built here; data layer only
- `next-mdx-remote` rendering deferred to Phase 5

---

## Phase 4 — Project Card & Tag Filter

**Date:** 2026-04-09  
**Status:** ✅ Complete

### Tasks
- [x] `components/TagFilterBar.tsx` (client) — "All" + alpha-sorted tag pills, single-select, active/inactive styles
- [x] `components/ProjectCard.tsx` — desktop: 200px thumbnail left; mobile: full-width 16:9 top; fully clickable; tag + tool pills
- [x] `components/ProjectList.tsx` (client) — owns filter state, renders TagFilterBar + cards + empty state
- [x] `app/page.tsx` — server component, fetches data, passes to ProjectList; 900px centered
- [x] `npm run build` passes cleanly

### Notes
- Split server/client cleanly: `page.tsx` fetches at build time, `ProjectList` owns runtime state
- Tags and tools both rendered as pills on cards; tools use secondary text color to differentiate
- Empty state: "No projects found for this tag."

---

## Phase 5 — Project Detail Page

**Date:** 2026-04-09  
**Status:** ✅ Complete

### Tasks
- [x] `app/projects/[slug]/page.tsx` with `generateStaticParams` (all 4 slugs pre-rendered)
- [x] `generateMetadata` for title + description per page
- [x] Back link `← Projects`, hero image, H1, tag/tool pills, formatted date, divider
- [x] MDX body rendered with `.mdx-prose` styles (headings Roboto, body Inter, code Roboto Mono)
- [x] Syntax highlighting via `rehype-highlight`
- [x] `getProjectContent(slug)` added to `lib/projects.ts` returning frontmatter + raw body
- [x] Prose styles added to `globals.css` (`.mdx-prose` class)
- [x] `npm run build` passes — 4 SSG routes generated

### Notes
- **`next-mdx-remote/rsc` dropped** — caused "older React version" prerender crash with Next.js 16. Used `evaluate()` from `@mdx-js/mdx` (already a transitive dep) instead. It uses the same `react/jsx-runtime` instance, which avoids the conflict.
- `next-mdx-remote` package left in dependencies (unused now) — can be removed later.
- Date formatted with `toLocaleDateString` using UTC timezone to prevent off-by-one date shifts.

---

## Phase 6 — About / Contact Page

**Date:** 2026-04-09  
**Status:** ✅ Complete

### Tasks
- [x] `app/about/page.tsx` — static server component, 600px centered layout
- [x] Square profile photo using `next/image` with `public/images/profile-placeholder.svg`
- [x] H1 "Your Name" placeholder + italic "Bio coming soon." bio section
- [x] LinkedIn link with SVG icon (href `#` placeholder — PRD Open Question #2)
- [x] Email link with SVG icon (`mailto:you@example.com` placeholder — PRD Open Question #3)
- [x] `npm run build` passes — `/about` added to static route table

### Notes
- `LINKEDIN_URL` and `EMAIL` declared as named constants at top of file for easy find-and-replace
- Profile photo is SVG with a simple silhouette; replace with real image at `/images/profile-placeholder.svg` or update the `src` prop
- Bio paragraph is `italic` + secondary text colour to signal it's a placeholder

---

## Log

### 2026-04-09
- Created DIARY.md
- Read PRD.md and BUILD_PROMPTS.md
- Completed Phase 1: project scaffold with all config, fonts, content dir, placeholder MDX
- Completed Phase 2: Header + Footer components wired into root layout
- Completed Phase 3 (data layer) + Phase 4 (home page, cards, tag filter)
- Completed Phase 5: project detail pages — all 4 slugs SSG, MDX rendering via @mdx-js/mdx evaluate()
- Completed Phase 6: About/Contact page — photo, bio placeholder, LinkedIn + email links
- Build passes with no errors after all phases
