# Portfolio — Moisés García Poveda

Personal portfolio and CV site: a single scrolling home plus a page each for work, about, stack and experience. Available in Spanish, Catalan and English.

**Live:** [portfolio.mgarciap.workers.dev](https://portfolio.mgarciap.workers.dev)

## Sections

- **Hero** — name, role, availability and the two main actions (see the work / email me).
- **Work** — the six featured projects on the home page; `/work` lists all of them with a filter by type.
- **About** — short bio plus an index-card "ficha" with the basics; `/about` has the long version.
- **Stack** — every technology laid out by layer; `/stack` adds why each layer looks the way it does.
- **Experience** — roles and education; `/experience` adds highlights and the tech used.
- **Contact** — email (mailto and copy-to-clipboard), GitHub/LinkedIn, local time in Barcelona.

## Design

Paper and ink: warm off-white (or warm black in dark mode), 2px rules, hard offset shadows, one loud orange-red accent and a yellow highlighter. Headlines are a heavy condensed upper-case Archivo (the width axis of the variable font); small handwritten notes use Reenie Beanie. Buttons and cards physically press in on click.

Deliberately **not** in here: boot screens, custom cursors, noise/scanline overlays, glow, glass, tilt/magnetic effects, numbered mono kickers. Everything that needs a hover also works without one.

Usability details worth keeping: the whole project card is one click target with the GitHub link as a separate real link, copy-email button with feedback, `/work` filters announced to screen readers, skip link, visible focus rings, mobile menu closes on Escape / navigation, no horizontally-scrolling lists, theme follows the OS until you pick one.

## Content and localization

There is no CMS: all copy lives in three parallel, fully-typed files — `src/i18n/content.es.ts`, `content.ca.ts`, `content.en.ts` — conforming to the shared `SiteContent` interface (`src/i18n/types.ts`). The active locale is picked via `LanguageProvider` (`src/i18n/language-context.tsx`) and persisted in `localStorage`. Editing or adding content means updating all three files; TypeScript will flag anything left out.

Wrap a phrase in `*asterisks*` in any string that goes through `<Marked>` (hero tagline, bios) to get the highlighter-marker treatment.

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
│   ├── ui/               # Primitives (button, doodles, marked text, copy-email, chips, toggles...)
│   ├── work/             # Project card and the /work page content
│   ├── about/            # Index-card note and the /about page content
│   ├── stack/            # Stack list and the /stack page content
│   └── experience/       # Experience list and the /experience page content
├── i18n/                 # Locale types, provider, shared project data and per-language content
├── lib/                  # Utilities (class merging, OG font loader)
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
