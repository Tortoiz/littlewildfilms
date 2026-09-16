# Markdown Content System Verification

**Date:** 2026-09-16

## Content model

Astro content collections are defined in `src/content.config.ts` using the `glob` loader. The `films` collection validates production metadata, film status, logline, hero/poster imagery, credits, gallery stills, related Journal posts, and SEO description. The `journal` collection validates title, publication date, category, excerpt, cover imagery, reading time, related film, draft state, and SEO description.

## Routes verified

- `/films` renders the collection-driven archive.
- `/films/the-lantern-in-the-orchard` renders the reusable film detail template.
- `/journal` renders the collection-driven Journal archive.
- `/journal/building-a-forest-that-feels-remembered` renders the reusable Journal article template.

The routes were verified in the managed preview at `1440x900` and `390x844`. The film hero, Journal cover, Markdown prose, related-film link, credits, metadata, navigation, mobile menu, and responsive crops render without a 404 after the managed Astro restart.

## Build verification

- `pnpm check` passes.
- `pnpm build` passes.
- Astro generates seven static routes, including both sample detail pages.

## Authoring flow

Future content authors can add one Markdown file under `src/content/films/` or `src/content/journal/`, fill the frontmatter contract, and write the body in Markdown. The archive and dynamic route are generated automatically; drafts are filtered from the public Journal archive.
