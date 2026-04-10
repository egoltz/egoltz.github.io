# Portfolio Site — Claude Code Build Prompts

Use these prompts in order. Complete each phase before moving to the next.
Reference `PRD.md` for full spec details throughout.

---

## Phase 1 — Project Scaffold

```
Read PRD.md in full. Then scaffold a Next.js 14 project with the following setup:
- TypeScript
- Tailwind CSS
- App Router
- next export (static output)
- Google Fonts: Roboto (700, 600, 500), Inter (400), Roboto Mono (400)
- next.config.js with output: 'export' and images: { unoptimized: true }
- Tailwind config with the font families and color tokens from the PRD design system
- A /content/projects/ directory with one placeholder .mdx file using the frontmatter schema from the PRD
- A /public/images/projects/ directory with a placeholder image

Do not build any components yet. Just get the project foundation right.
```

---

## Phase 2 — Layout: Header & Footer

```
Using the PRD spec, build the Header and Footer components.

Header:
- Site name on the left (Roboto Bold), links to /
- "About / Contact" nav link on the right, links to /about
- 1px bottom border using --color-border
- Max content width 900px, centered, with responsive horizontal padding

Footer:
- Designer byline: "Designed by xomatic.studio" (link to https://xomatic.studio)
- Copyright: © [current year] [Your Name] — use a placeholder name for now
- LinkedIn SVG icon link (href placeholder for now)
- 1px top border
- Same max-width and padding as header

Wrap both in a root layout.tsx that applies them to all pages.
```

---

## Phase 3 — MDX Content Pipeline

```
Set up the MDX content pipeline:
- Install and configure next-mdx-remote (or contentlayer — pick whichever is more stable with Next.js 14 static export)
- Create a lib/projects.ts utility that:
  - Reads all .mdx files from /content/projects/
  - Parses frontmatter (title, description, thumbnail, tags, date, featured, slug)
  - Returns a sorted array of projects (by date descending, featured first)
  - Exports a getProjectBySlug(slug) function for detail pages
- Add syntax highlighting for code blocks (use shiki or rehype-highlight)

Test by logging the parsed projects array. Do not build UI yet.
```

---

## Phase 4 — Project Card & Tag Filter

```
Build the home page (app/page.tsx) with:

1. Tag Filter Bar component:
   - Reads all unique tags from the projects array
   - Shows an "All" pill first, then tags alphabetically
   - Single-select: clicking a tag filters the visible cards
   - Active tag: black bg, white text
   - Inactive tag: #F0F0F0 bg, black text
   - Pill shape, subtle hover state

2. Project Card component:
   - Desktop (≥640px): thumbnail on the left (200px wide, fixed height, object-cover), title + description + tags on the right
   - Mobile (<640px): thumbnail full width 16:9 on top, title + description + tags below
   - Entire card is clickable, links to /projects/[slug]
   - Subtle hover: slight border darkening or shadow
   - No external link icons

3. Home page layout:
   - Tag filter bar above cards
   - Filtered project card list below
   - Empty state message if no cards match: "No projects found for this tag."
   - Max-width 900px centered

Use the color tokens and typography scale from the PRD.
```

---

## Phase 5 — Project Detail Page

```
Build the dynamic project detail page at app/projects/[slug]/page.tsx:

- Generate static params from all project slugs (generateStaticParams)
- Layout:
  - "← Projects" back link at top
  - Hero image (from frontmatter thumbnail)
  - H1 title (Roboto Bold)
  - Non-interactive tag pills (same style as filter bar)
  - Date (formatted nicely, e.g. "October 2025"), gray Inter
  - Horizontal divider
  - MDX body content rendered below

- MDX body styles:
  - Headings: Roboto
  - Body text: Inter
  - Code blocks: Roboto Mono, light gray background
  - Images: full width, with optional caption below
  - Links: black, underlined

Make sure generateStaticParams works correctly for next export.
```

---

## Phase 6 — About / Contact Page

```
Build the About page at app/about/page.tsx:

- Square profile photo (use a placeholder image for now, clearly marked)
- Bio section (use placeholder text: "Bio coming soon." — mark it clearly as a placeholder)
- Links section with icons:
  - LinkedIn: SVG icon + "LinkedIn" text, links to placeholder href
  - Email: SVG icon + "Email" text, links to mailto: placeholder
- Clean, centered layout, max-width 600px
- All content uses the PRD typography and color system

Keep it simple. No form. Just the photo, bio prose, and two links.
```

---

## Phase 7 — GitHub Pages Deployment

```
Set up GitHub Pages deployment:

1. Update next.config.js:
   - Add basePath: '/[REPO_NAME]' (use a clear placeholder comment)
   - Confirm output: 'export' and images: { unoptimized: true } are set

2. Create .github/workflows/deploy.yml:
   - Trigger: push to main branch
   - Steps: checkout → setup Node 20 → npm ci → npm run build → deploy /out to gh-pages branch
   - Use actions/deploy-pages or peaceiris/actions-gh-pages

3. Add a .nojekyll file to /public/ so GitHub Pages doesn't ignore _ directories

4. Update package.json scripts:
   - "build": "next build"
   - "export": "next build" (output: export handles this automatically)

5. Add a DEPLOY.md with step-by-step instructions for:
   - Setting basePath to the actual repo name
   - Enabling GitHub Pages in repo settings (source: gh-pages branch)
   - First deploy checklist
```

---

## Phase 8 — Content & Polish

```
Final pass before launch:

1. Add the three real projects from the PRD (Section 11) as .mdx files:
   - viewshr-industrial-safety-app.mdx
   - tableau-dashboarding.mdx
   - distance-optimization.mdx
   Each with realistic placeholder body content and the suggested tags from the PRD.

2. Polish pass:
   - Check all pages on mobile (375px), tablet (768px), desktop (1280px)
   - Verify fonts load correctly (Roboto, Inter, Roboto Mono)
   - Confirm tag filtering works and empty state shows
   - Confirm all internal links work on static export
   - Confirm back link on project detail pages works

3. Accessibility check:
   - All images have alt text
   - All interactive elements are keyboard-navigable
   - Color contrast passes WCAG AA

4. Run next build and fix any export errors before marking done.
```

---

## Tips for Using These Prompts

- Run one phase at a time. Don't skip ahead.
- If Claude Code drifts from the spec, say: *"Check PRD.md section [X] and adjust accordingly."*
- After each phase, do a quick visual check before moving on.
- Log progress and blockers in `DIARY.md` as you go.
