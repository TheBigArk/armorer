# The Holy Bible

**An Arc.Logos project**

**Website:** https://thefreeholybible.com

The Holy Bible is a free, offline-capable Bible reading website featuring the King James Version (1769). It is designed for simple, comfortable reading across desktop and mobile devices.

## Features

- All 66 books and 1,189 chapters of the King James Version
- Continuous scrolling between chapters
- Search across Bible passages
- Offline reading after scripture content has been saved
- Mobile-friendly reading experience
- Shareable chapter and verse URLs
- Light and dark themes
- Search-engine-accessible chapter pages

## Technology

The website is built using:

- Preact and preact-iso
- TypeScript
- Vite
- MiniSearch
- IndexedDB and service workers
- Cloudflare Pages

## Development

Requires Node.js 22.12 or newer.

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Build the production website:

```bash
npm run build
```

The build generates scripture data, the sitemap, the web application, prerendered pages, and the offline service worker.

## Search engine indexing

The production build prerenders HTML for the homepage, 66 book pages, and 1,189 chapter pages.

Chapter URLs use the format:

`https://thefreeholybible.com/genesis/1/`

Sitemap:

https://thefreeholybible.com/sitemap.xml

## Offline reading

The website uses a service worker and IndexedDB to store application resources and Bible content.

Once the required content has been saved, visitors can continue reading without an internet connection.

The offline system includes content validation, update handling, and recovery mechanisms.

## Bible translation

**King James Version (1769)**

The website uses the standardized 1769 KJV text. Copyright and publication rules may differ by jurisdiction.

## Testing

Available project commands:

```bash
npm test
npm run typecheck
npm run test:e2e
```

These cover automated tests, TypeScript checking, and browser-based testing.

## Deployment

The website is hosted on Cloudflare Pages.

- `main` — production branch
- `thefreeholybible-preview` — preview branch
- Build command: `npm run build`
- Output directory: `dist`

Changes should be tested on the preview branch before merging into production.

## Project information

**Brand / Publisher:** Arc.Logos

**Website:** The Holy Bible

**Contact:** arc.logos@proton.me

**Privacy Policy:** https://sites.google.com/view/the-free-holy-bible-privacy/

This project builds upon earlier open-source scripture-reader software. Original third-party attribution and licensing obligations remain applicable.
