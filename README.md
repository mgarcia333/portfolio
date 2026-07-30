# Portfolio — Moisés García Poveda

Personal portfolio and CV site, built as a single scrolling dossier plus a dedicated case-study page for selected projects. Available in Spanish, Catalan, and English.

**Live:** [portfolio.mgarciap.workers.dev](https://portfolio.mgarciap.workers.dev)

## Sections

- **Hero** — name, role, and a status/ticker line, framed with a boot-sequence intro animation.
- **Dossier** — short bio and a field/value profile block (location, time zone, availability).
- **Stack** — technology categories, each with its set of tools and icons.
- **Experience** — timeline of roles, with tags and status per entry.
- **Work** — featured projects on the home page, with a `/work` page listing the full set, each with description, stack, and links.
- **Contact** — direct email call-to-action and local time.

The whole layout leans into a Y2K/retro-futurist interface language: corner brackets, a custom cursor, magnetic buttons, tilt cards, and a monospace/marquee ticker running through it.

## Content and localization

There is no CMS: all copy lives in three parallel, fully-typed files — `src/i18n/content.es.ts`, `content.ca.ts`, `content.en.ts` — conforming to the shared `SiteContent` interface (`src/i18n/types.ts`). The active locale is picked via `LanguageProvider` (`src/i18n/language-context.tsx`) and persisted in `localStorage`. Editing or adding content means updating all three files; TypeScript will flag anything left out.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) / [React 19](https://react.dev) / TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for the scroll, hover, and page transitions
- Hand-rolled i18n layer, no external library

## Project structure

```
src/
├── app/                  # Routes: home, /work, metadata, icons
├── components/
│   ├── atmosphere/       # Background effects, boot sequence, custom cursor
│   ├── layout/           # Navbar, footer
│   ├── sections/         # Home page sections
│   ├── ui/               # Reusable primitives (tech chips, tilt card, magnetic button, flags...)
│   └── work/             # Project cards and the /work page content
├── hooks/                # useMagnetic, useTilt, useMediaQuery
├── i18n/                 # Locale types, provider, and per-language content
└── lib/                  # Shared utilities
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

## Deployment

Deployed as a Cloudflare Worker via the OpenNext adapter and Wrangler (`npm run deploy`); configuration lives in `wrangler.jsonc` and `open-next.config.ts`.
