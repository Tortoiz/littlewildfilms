# Astro Shell Verification

**Date:** 2026-09-16  
**Reference baseline:** `visual-system-v0.md` / checkpoint `d0e00693`

## What changed

The project now runs on Astro 7.3.2 with static output. The legacy Vite configuration was moved to `vite.config.legacy.ts` so it cannot override Astro's root or dev-server settings. The Astro dev server is configured for port `3000`, matching the managed WebDev preview.

The shell includes a shared `BaseLayout`, `SiteNav`, and `SiteFooter`, with homepage and primary shell routes for `/films`, `/journal`, `/studio`, and `/contact`. The approved v0 composition, token system, typography, responsive behavior, and motion rules were ported into `src/styles/global.css` without changing the public design direction.

## Visual verification

The managed preview was checked at `1440x900` and `390x844` for `/`, `/films`, `/journal`, `/studio`, and `/contact`.

- The homepage retains the left-weighted cinematic hero, large Instrument Serif headline, gold italic emphasis, dark scrim, and supplied logo.
- The uploaded logo and original film stills load through the restored Manus storage proxy.
- Light shell routes use the Bone canvas with Moss display emphasis and dark navigation contrast.
- Mobile routes collapse into a compact details-based menu and preserve the approved narrative hierarchy.
- Primary headings do not clip at the verified desktop or mobile widths.

## Build verification

- `pnpm check` passes.
- `pnpm build` passes.
- Astro generates five static routes: `/`, `/films/`, `/journal/`, `/studio/`, and `/contact/`.

## Deliberate scope boundary

The Films and Journal routes are shell placeholders only. Markdown content collections, schemas, film detail routes, journal post routes, and representative content migration remain the next phase. The current shell is intended to prove the design/runtime boundary before introducing content data.
