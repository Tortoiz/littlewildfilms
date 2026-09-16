# Little Wild Films — Frozen Visual System v0

**Status:** Baseline locked before content architecture migration  
**Reference project:** `little-wild-films-v2`  
**Reference checkpoint:** `225b87d2`  
**Purpose:** Preserve the approved visual language while migrating the site to a Markdown-first Astro architecture.

## 1. Design intent

Little Wild Films is presented as an independent production house for animated, live-action, and AI-assisted cinema. The visual language is a **kinetic editorial film studio**: cinematic, sparse, emotionally grounded, and visibly authored rather than tool-led.

The site should feel like the opening sequence of an ambitious independent film. It should communicate taste before explaining process. The website is not an AI SaaS interface, not a generic creative agency, and not a children’s animation portfolio.

## 2. Non-negotiable brand ideas

The site must preserve the following ideas across every page:

- **Human authorship:** AI appears as part of the process, never as the product.
- **Atmosphere before explanation:** imagery, scale, negative space, and rhythm lead the experience.
- **Small studio, large possibility:** the voice is confident and intimate rather than corporate.
- **Animation and live action can coexist:** the system must support both without splitting into separate identities.
- **Almost-real cinema:** strange, warm, slightly speculative, and emotionally legible.

## 3. Visual tokens

### Colors

| Token | Value | Use |
|---|---|---|
| Night | `#101310` | Primary dark canvas, footer, hero base |
| Night soft | `#171B17` | Secondary dark surfaces |
| Bone | `#F1EBDD` | Light canvas and primary light text |
| Bone muted | `#BDB8AA` | Secondary text on dark surfaces |
| Moss | `#536A4A` | Studio section, secondary emphasis, italic text on light canvas |
| Signal gold | `#D5A941` | Hero accent, active signal, metadata, selected emphasis |
| Ember reserve | `#B85D46` | Reserved for future archive/status accent only |

Do not introduce new hues without updating this table. Avoid purple-to-blue gradients, neon cyber colors, glassmorphism, and generic AI blue.

### Typography

| Role | Family | Rules |
|---|---|---|
| Display | Instrument Serif | Large, editorial, high contrast; normal and italic used together |
| Body | DM Sans | Clear, quiet, readable; avoid excessive weight variation |
| Metadata | DM Mono | Uppercase, tracked, small; used for labels, dates, statuses, counters |

Display type is the primary recognition device after imagery. Headings should use generous scale contrast against body copy. The heading/body ratio should remain visibly dramatic.

### Spacing

Use an 8px base rhythm. Primary section spacing uses large intentional pauses: approximately `10vh` to `15vh` vertical padding on desktop and `8vh` to `12vh` on mobile. Do not fill empty space with extra copy or decorative cards.

### Shape and surfaces

- Prefer sharp corners or lightly rounded media containers.
- Do not introduce soft SaaS-style cards or excessive rounded pills.
- Use hairline rules, image crops, editorial alignment, and controlled overlays for hierarchy.
- Grain/noise is allowed as a low-opacity atmospheric layer, never as a dominant texture.

## 4. Layout rules

### Global navigation

Desktop navigation is sparse and centered, with the logo left and contact action right. Mobile navigation collapses into a compact menu with full-width row targets. Navigation remains readable against variable imagery through contrast control.

### Hero

The hero is full viewport height or near-full viewport height. It uses a cinematic still with a dark left-side scrim, large serif headline, compact eyebrow, short supporting paragraph, and one primary text-link CTA. The left side must retain enough dark negative space for legibility.

The hero headline is currently:

> Stories from the edge of what’s possible.

The italic emphasis is gold. Do not replace the hero with a centered marketing block or a multi-card introduction.

### Studio introduction

Light Bone section with large serif statement on the left and a compact explanatory copy column on the right. The section should feel like a pause after the dark hero.

### Films

Dark section with a staggered/asymmetric film grid. Film media carries more visual weight than metadata. Each film card has a clear title, short description, format/status line, and optional play affordance. Placeholder imagery must be labeled honestly until real project media is supplied.

### Manifesto

Moss section with oversized serif statement and restrained orbit lines. It is a tonal transition, not a feature list.

### Contact

Light Bone closing section with a large question and one strong email CTA. Avoid form-heavy contact layouts until inquiry volume warrants them.

## 5. Motion rules

Motion is cinematic, not decorative.

- Hero image drift: very slow, low-amplitude, optional.
- Section and text entrances: opacity plus vertical translation only.
- Hover states: small gap, color, or scale changes under 300ms.
- Play controls: responsive scale and color change, no bounce.
- Keep animation driven by hierarchy, focus, or narrative.
- Respect `prefers-reduced-motion`; remove non-essential image drift and entry motion.
- Never use aggressive glitch effects, looping particle fields, or constant cursor spectacle.

## 6. Responsive invariants

The mobile version must preserve the same narrative order:

1. Brand/navigation
2. Hero statement
3. Studio statement
4. Selected films
5. Manifesto
6. Contact
7. Footer

On small screens, grids become a single column, metadata becomes left-aligned, and the menu becomes a visible toggle. Typography remains dramatic but must not clip or create awkward orphan lines.

## 7. Content/design boundary

Markdown will control editorial content only:

- titles
- loglines
- descriptions
- dates and statuses
- credits
- captions
- journal body copy
- related-film references
- image references and alt text

Astro components and CSS will control:

- layout
- typography
- color
- responsive behavior
- card structure
- gallery behavior
- motion
- image treatment
- navigation and footer

A content author must not need to edit template code to add a film or Journal post.

## 8. Migration acceptance criteria

The Astro migration is visually accepted only if:

1. Desktop hero composition retains the same left-weighted hierarchy and cinematic image treatment.
2. Mobile hero preserves the headline, logo, and CTA without clipping.
3. Film cards retain the editorial image-first relationship.
4. Bone, Night, Moss, and Signal gold remain the dominant palette.
5. Instrument Serif / DM Sans / DM Mono maintain their roles.
6. No generic component library styling leaks into public pages.
7. New Markdown entries render through the same templates without one-off design edits.
8. Reduced-motion behavior remains available.
9. The homepage and representative Film/Journal detail pages pass keyboard and contrast review.

## 9. Baseline references

The v0 visual reference is the live WebDev checkpoint `225b87d2`. Capture desktop and mobile screenshots before migration and compare the migrated Astro build against them.

## 10. Change control

Any proposed visual change during migration must be classified as one of:

- **Content-only:** no design review required.
- **Template behavior:** review against this system and representative content.
- **Token or layout change:** update this document and recapture the baseline.
- **Brand change:** requires explicit design review before implementation.
