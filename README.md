# Portfolio — Moisés García

Personal portfolio and CV site: a single scrolling home plus a page each for work, about, stack and experience. Available in Spanish, Catalan and English.

**Live:** [portfolio.mgarciap.workers.dev](https://portfolio.mgarciap.workers.dev)

## Sections

- **Hero** — the positioning statement as the headline (the name is just a small byline), the two main actions (see the work / email me) and a short list with the basics.
- **Work** — the six featured projects on the home page as a ruled grid, three over three; `/work` lists all of them in the same grid, with a filter by type.
- **About** — short bio; `/about` has the long version next to the list with the basics.
- **Stack** — every technology laid out by layer; `/stack` adds why each layer looks the way it does.
- **Experience** — roles and education; `/experience` adds highlights and the tech used.
- **Contact** — its own page (`/contact`) with the email (mailto and copy-to-clipboard), GitHub, LinkedIn and base; the home page closes with a short version of it.

## Design

A printed-page look, on purpose the opposite of the usual dark-gradient-and-cards portfolio template: bone paper, violet-black ink, hairline rules, a single sans family (Archivo) set heavy and condensed in upper case for headlines and plain for text, a two-column editorial grid (title on the left, content on the right). No cards, chips, icons-in-boxes, pills, glow, glass or rounded corners.

The palette is taken from EVA-01: violet-black ink, the unit's purple as the only accent, and its neon green in micro-doses (text selection, the active project row, the one CTA on the contact band). Light is the default theme; the dark theme swaps paper and ink. The contact band and footer stay dark in both.

Projects are a gapless, ruled grid (three across) where the hovered or focused cell inverts to ink, on the home page and on `/work`. The headline is a statement, not the name, which stays small; the home link in the navbar is a monogram.

Deliberately **not** in here: boot screens, custom cursors, noise/scanline overlays, tilt/magnetic effects, sticky notes, handwriting, rotated stickers, marker highlights, hard shadows, numbered mono kickers, greetings, availability badges. Everything that needs a hover also works without one; motion is a single entrance on load.

Usability details worth keeping: the whole project cell is one click target with the GitHub link as a separate real link, copy-email button with feedback, `/work` filters announced to screen readers, skip link, visible focus rings, mobile menu closes on Escape / navigation, no horizontally-scrolling lists.

## SEO

- Every page has its own title, description and canonical URL, plus matching Open Graph and Twitter tags and the share image (`src/lib/seo.ts`, `app/opengraph-image.tsx`). Page-level `openGraph` replaces the layout's, so the image is named explicitly there.
- Structured data: a schema.org `WebSite` + `Person` graph (`src/components/seo/json-ld.tsx`), without the email.
- `app/robots.ts` and `app/sitemap.ts` (six pages), and a custom, `noindex` 404 page.
- One `h1` per page and no skipped heading levels (project and role titles are `h3` on the home page and `h2` on their own pages); project previews carry a descriptive `alt`.
- The interface language is chosen on the client, so there is one URL per page and the metadata is in the default language (Spanish). Separate language URLs with `hreflang` would be the next step if search traffic in Catalan or English matters.

## Content and localization

There is no CMS: all copy lives in three parallel, fully-typed files — `src/i18n/content.es.ts`, `content.ca.ts`, `content.en.ts` — conforming to the shared `SiteContent` interface (`src/i18n/types.ts`). The active locale is picked via `LanguageProvider` (`src/i18n/language-context.tsx`) and persisted in `localStorage`. Editing or adding content means updating all three files; TypeScript will flag anything left out.

Wrap a phrase in `*asterisks*` in any string that goes through `<Marked>` (hero tagline, bios) to render it bold.

### Projects

Project metadata (URLs, stack, preview image, repo, category) lives once in `src/i18n/shared.ts`; titles and descriptions per language live in the content files. The order of `projectsShared` is the order shown on `/work`, and the entries flagged `featured: true` are the ones shown on the home page, in that order.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) / [React 19](https://react.dev) / TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- Hand-rolled i18n layer, no external library
- Plain CSS for all motion (no animation library)

## Project structure

```
src/
├── app/                  # Routes: home, /work, /about, /stack, /experience, metadata, icons
├── components/
│   ├── layout/           # Navbar, footer, page header, skip link
│   ├── sections/         # Home page sections
│   ├── ui/               # Primitives (button, section, marked text, copy-email, toggles...)
│   ├── work/             # Project grid and the /work page content
│   ├── contact/          # The /contact page content
│   ├── seo/              # JSON-LD
│   ├── about/            # Fact list and the /about page content
│   ├── stack/            # Stack list and the /stack page content
│   └── experience/       # Experience list and the /experience page content
├── i18n/                 # Locale types, provider, shared project data and per-language content
├── lib/                  # Utilities (class merging, SEO helpers, OG font loader)
└── theme/                # Light/dark theme context
```

## Getting started

Requires Node 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                       |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the local dev server           |
| `npm run build`  | Production build                      |
| `npm run start`  | Serve the production build locally    |
| `npm run lint`   | Run ESLint                            |

The Open Graph image and icons are generated at build time and fetch Archivo Black from Google Fonts for the heavy weight; if that request fails they fall back to the default font.

## Deployment

Deployed as a Cloudflare Worker via the OpenNext adapter and Wrangler (`npm run deploy`); configuration lives in `wrangler.jsonc` and `open-next.config.ts`.
