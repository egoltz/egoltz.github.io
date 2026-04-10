# Product Requirements Document
## Personal Portfolio Site

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** 2026-04-09

---

## 1. Overview

A clean, minimal, and modern static portfolio website that showcases data/software projects through filterable project cards. Project detail pages are powered by `.mdx` or `.md` files for easy content management. The site is built with React + Next.js, exported as a fully static site, and hosted on GitHub Pages.

---

## 2. Goals

- Present professional projects in a clear, scannable format
- Allow visitors to filter projects by tag/category
- Make content updates easy via Markdown/MDX files (no code changes required)
- Be fully responsive across desktop, tablet, and mobile
- Load fast as a static site with no server required

---

## 3. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | `.md` / `.mdx` files (via `next-mdx-remote` or `contentlayer`) |
| Fonts | Roboto (headlines), Inter (body), Roboto Mono (code) via Google Fonts |
| Export | `next export` → static HTML/CSS/JS |
| Hosting | GitHub Pages (via `gh-pages` branch or GitHub Actions) |

---

## 4. Design System

### 4.1 Colors

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-text` | `#000000` | Body text, headings |
| `--color-text-secondary` | `#555555` | Subtitles, meta text |
| `--color-border` | `#E5E5E5` | Card borders, dividers |
| `--color-tag-bg` | `#F0F0F0` | Tag pill background |
| `--color-tag-active` | `#000000` | Active/selected tag |
| `--color-tag-active-text` | `#FFFFFF` | Text on active tag |

### 4.2 Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Site name / H1 | Roboto | 700 | 1.5rem / 2rem |
| H2 | Roboto | 600 | 1.25rem |
| H3 | Roboto | 500 | 1rem |
| Body | Inter | 400 | 1rem |
| Caption / meta | Inter | 400 | 0.875rem |
| Code blocks | Roboto Mono | 400 | 0.9rem |

### 4.3 Spacing & Layout

- Max content width: `900px`, centered
- Page horizontal padding: `1.5rem` (mobile), `2rem` (desktop)
- Card gap: `1.5rem`
- Section spacing: `3rem`

---

## 5. Site Structure

```
/                   → Home (project card list)
/about              → About & Contact
/projects/[slug]    → Project detail page (rendered from .md/.mdx)
```

### Content Directory

```
/content/
  projects/
    viewshr-industrial-safety-app.mdx
    tableau-dashboarding.mdx
    distance-optimization.mdx
    ...
```

---

## 6. Components

### 6.1 Header

**Appears on all pages.**

| Element | Behavior |
|---|---|
| Site name (left) | Roboto Bold, links to `/` |
| Nav links (right) | "About / Contact" links to `/about` |
| Layout | Flexbox row, space-between |
| Mobile | Same layout; name and nav remain on one line |
| Border | Subtle 1px bottom border (`--color-border`) |
| Sticky | Optional: sticky top-0 with white background |

**Content TBD:** Page tagline / description (brief, below or next to name — placeholder for now).

---

### 6.2 Footer

**Appears on all pages.**

| Element | Detail |
|---|---|
| Designer byline | "Designed by [xomatic.studio](https://xomatic.studio)" |
| Copyright | `© [Year] [Your Name]` |
| LinkedIn icon | SVG icon linking to LinkedIn profile (URL TBD) |
| Layout | Flexbox row, space-between, centered vertically |
| Border | 1px top border (`--color-border`) |

---

### 6.3 Project Card

Used on the home page. Each card represents one project.

**Desktop layout (≥640px):**
```
┌────────────────────────────────────────────┐
│ [Thumbnail 200px wide] │ Project Title      │
│                        │ Brief description  │
│                        │ [tag] [tag]        |
|                        │ [tool] [tool]      |
└────────────────────────────────────────────┘
```

**Mobile layout (<640px):**
```
┌────────────────────────┐
│   [Thumbnail, full     │
│    width, 16:9 crop]   │
├────────────────────────┤
│ Project Title          │
│ Brief description      │
│ [tag] [tag]            |  
| [tool] [tool]          │
└────────────────────────┘
```

**Card fields (from frontmatter):**

| Field | Type | Description |
|---|---|---|
| `title` | string | Project title |
| `description` | string | One or two sentence summary |
| `thumbnail` | string | Path to image file |
| `tags` | string[] | e.g. `["data", "tableau", "python"]` |
| `slug` | string | URL slug (auto-derived from filename) |
| `date` | string | ISO date, used for sort order |
| `featured` | boolean | Optional: pin to top |

**Behavior:**
- Card is fully clickable, links to `/projects/[slug]`
- Subtle hover state: slight border or shadow change
- No external link icons; clean minimal style

---

### 6.4 Tag Filter Bar

Appears above the project card list on the home page.

- Displays all unique tags found across projects
- Includes an "All" pill (selected by default)
- Clicking a tag filters visible cards to only those with that tag
- Multiple tag selection: TBD (start with single-select)
- Active tag: black background, white text
- Inactive tag: light gray background, black text
- Tags are sorted alphabetically, with "All" first

---

### 6.5 Project Detail Page (`/projects/[slug]`)

Rendered from an `.mdx` file in `/content/projects/`.

**Layout:**
- Back link: `← Projects` at top
- Hero image (from frontmatter `thumbnail`, or first image in MDX)
- Title (H1, Roboto Bold)
- Tag pills (same style as filter bar, non-interactive)
- Tool pills
- Date (meta, Inter, gray)
- Divider
- MDX body content

**MDX supports:**
- Standard markdown (headings, lists, bold, italic, links)
- Images with captions
- Code blocks with syntax highlighting (via `rehype-highlight` or `shiki`)
- Custom components (optional): `<Callout>`, `<ImageGrid>`, etc.

---

## 7. Pages

### 7.1 Home Page (`/`)

1. Header
2. Tag filter bar
3. Filterable grid of project cards (sorted by date descending)
4. Footer

**Empty state:** If no cards match a tag filter, show a short message: "No projects found for this tag."

---

### 7.2 About / Contact Page (`/about`)

1. Header
2. Photo (square crop; placeholder for now)
3. Bio (prose, TBD content; placeholder copy in code)
4. Links section:
   - LinkedIn icon + text link
   - Email icon + `mailto:` link
5. Footer

**Content:** Bio and photo to be filled in later. Use clearly marked placeholder text.

---

## 8. Content Management

### MDX Frontmatter Schema

```yaml
---
title: "ViewShr Industrial Safety App"
description: "A mobile app for industrial safety teams to log and analyze equipment hazard photos using AI image recognition."
thumbnail: "/images/projects/viewshr-thumb.jpg"
tags: ["mobile", "ai", "safety", "react-native"]
tools: ["python", "sql"]
date: "2025-10-01"
featured: false
---
```

### Adding a New Project

1. Create a new `.mdx` file in `/content/projects/`
2. Fill in frontmatter fields
3. Write project body in Markdown below the frontmatter
4. Add thumbnail image to `/public/images/projects/`
5. Run `npm run build` — the new card and page appear automatically

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Layout notes |
|---|---|---|
| Mobile | < 640px | Cards stack (image above, text below) |
| Tablet | 640px – 900px | Cards use horizontal layout |
| Desktop | > 900px | Full layout, centered at max-width |

---

## 10. GitHub Pages Deployment

### Export Configuration (`next.config.js`)

```js
const nextConfig = {
  output: 'export',
  basePath: '/[repo-name]',   // replace with actual GitHub repo name
  images: { unoptimized: true },
};
```

### Deployment Options

**Option A: GitHub Actions (recommended)**  
- Push to `main` triggers workflow
- Workflow runs `npm run build` → deploys `/out` to `gh-pages` branch

**Option B: Manual**  
- Run `npm run build` locally
- Push `/out` contents to `gh-pages` branch via `gh-pages` npm package

### Notes
- All internal links must use `next/link` to support static routing
- No server-side features (API routes, SSR) — static export only
- Images use `next/image` with `unoptimized: true` for static compatibility

---

## 11. Initial Projects (from screenshot)

| Project | Tags (suggested) | Status |
|---|---|---|
| ViewShr Industrial Safety App | mobile, ai, safety | Content TBD |
| Tableau Dashboarding | data, tableau, visualization | Content TBD |
| Distance Optimization | data, optimization, maps, python | Content TBD |

---

## 12. Out of Scope (v1.0)

- CMS or database integration
- Search functionality
- Dark mode
- Comments or contact form (email link only)
- Blog / non-project content
- Authentication

---

## 13. Open Questions

| # | Question | Owner | Status |
|---|---|---|---|
| 1 | What is the site tagline / brief page description for the header? | Owner | Open |
| 2 | What is the LinkedIn profile URL? | Owner | Open |
| 3 | What is the email address for the mailto link? | Owner | Open |
| 4 | What is the GitHub repo name (needed for `basePath`)? | Owner | Open |
| 5 | Photo format for About page: circular or square crop? | Owner | ✅ Square crop |
| 6 | Should tag filter support multi-select, or single-select? | Owner | Open |
| 7 | Is a "featured" project mechanic needed for v1? | Owner | Open |

---

*This document is a living spec. Update open questions and version number as decisions are made.*
