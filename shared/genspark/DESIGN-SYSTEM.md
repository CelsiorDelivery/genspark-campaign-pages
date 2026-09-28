# GenSpark Static Design System

## Purpose

This directory is the canonical design foundation for new static GenSpark campaign pages and landing pages in this repository.

New pages should reuse this system rather than independently recreating GenSpark's visual language.

Existing production pages are not automatically migrated to this system.

---

## Source of Truth

This design system was derived from:

1. The original GenSpark WordPress theme.
2. The original theme CSS, JavaScript and SCSS source where available.
3. Rendered pages from the live GenSpark website.
4. Five preserved static page references under `/genspark-reference/`.

The reference pages are study material. The reusable files under `/shared/genspark/` are the canonical implementation layer.

---

## Core Brand Foundation

Primary typeface:

- Barlow

Core colors:

- Dark green: `#13322B`
- Green: `#36765F`
- Deep green: `#2C5E4C`
- Soft green: `#B3D1C7`
- Black: `#101015`
- Charcoal: `#1C1C1C`
- Warm cream: `#FEFCF4`
- Light neutral: `#DDDDDA`
- Neutral: `#B2B1AB`

Use the variables in:

`/shared/genspark/css/genspark-tokens.css`

Do not create slightly different substitutes for established brand colors unless a page genuinely requires a new semantic color.

---

## Shared CSS

New pages should load:

`/shared/genspark/vendor/bootstrap/css/bootstrap.min.css`

`/shared/genspark/vendor/theme/app.min.css`

`/shared/genspark/css/genspark-base.css`

`/shared/genspark/css/genspark-components.css`

Page-specific CSS should remain isolated to that page.

Prefer namespacing custom page styles beneath `.gs-page`.

Do not redefine global typography, navbar, footer or shared components in page-specific CSS.

---

## Shared JavaScript

New pages should load:

`/shared/genspark/vendor/bootstrap/js/bootstrap.bundle.min.js`

`/shared/genspark/vendor/theme/app.min.js`

`/shared/genspark/js/genspark.js`

Page-specific JavaScript should be kept separate.

---

## Canonical Navbar and Footer

Canonical components:

`/shared/genspark/components/navbar.html`

`/shared/genspark/components/footer.html`

Pages should mount them using:

`<div id="genspark-navbar"></div>`

and:

`<div id="genspark-footer"></div>`

Then load:

`/shared/genspark/js/genspark.js`

Do not copy, redesign or independently maintain the navbar/footer inside each new page.

---

## Layout

Default maximum container width:

`1320px`

Standard section spacing:

- Desktop: 96px
- Tablet: 72px
- Mobile: 48px

Use `.gs-container` for standard page content.

Use `.gs-container--narrow` where a deliberately narrower reading width is appropriate.

Use the shared responsive system rather than fixed desktop-only dimensions.

---

## Typography

Use Barlow throughout unless an approved GenSpark source explicitly establishes another typeface for a particular asset.

Headings should follow the scale and weights established in `genspark-base.css` and the original GenSpark theme.

Do not introduce arbitrary fonts, decorative typography or unrelated design-system conventions.

---

## Components

Reusable components currently include:

- Buttons
- Section headers
- Responsive grids
- Cards
- Dark cards
- Soft-green cards
- Stats
- CTA sections
- Navbar
- Footer

Check `genspark-components.css` before creating a new component.

If a pattern will recur across multiple pages, promote it into the shared component layer instead of duplicating it.

---

## Reference Library

Real GenSpark page references are stored under:

`/genspark-reference/site-reference/`

Current references:

- Homepage
- Workforce Upskilling
- AI Adoption
- Hire-Train-Deploy
- Resources

Untouched captures of the original rendered HTML are stored under:

`/genspark-reference/raw-captures/`

Localized visual assets are stored under:

`/genspark-reference/assets/wp-content/`

These pages are visual and structural references, not starter templates and not production clones.

Study them to understand:

- hierarchy
- whitespace
- section rhythm
- image treatment
- typography
- cards
- CTA patterns
- content density
- responsive behavior

---

## Starter Template

Start new campaign pages from:

`/templates/genspark-landing-page/`

It already includes:

- canonical GenSpark CSS
- canonical navbar/footer mounts
- canonical JavaScript
- isolated page CSS
- isolated page JavaScript

Do not start a new GenSpark page from an empty HTML document unless there is a specific technical reason.

---

## AI-Assisted Page Creation

Before designing or coding a new GenSpark page, an AI assistant should study:

1. `/shared/genspark/DESIGN-SYSTEM.md`
2. `/shared/genspark/css/`
3. `/shared/genspark/components/`
4. `/genspark-reference/site-reference/`
5. `/templates/genspark-landing-page/`

Instruction for AI assistants:

> Use the existing GenSpark design system as the visual source of truth. Study the real GenSpark reference pages before designing. Reuse the canonical navbar, footer, typography, colors, spacing and shared components. Do not invent a new visual language. Page-specific creativity is welcome within the established GenSpark system.

---

## Page-Specific Design

Consistency does not mean every page should look identical.

A campaign page may introduce:

- a distinct hero composition
- campaign-specific imagery
- custom diagrams
- new content arrangements
- new reusable section patterns

But these should still feel like GenSpark through typography, spacing, color, controls, shell and overall visual rhythm.

---

## Responsive QA

Before publishing a new page, check:

- desktop
- tablet
- mobile
- navbar behavior
- mobile menu
- footer behavior
- image scaling
- text wrapping
- CTA sizing
- horizontal overflow
- broken local assets
- browser console errors

Do not approve a page based only on desktop appearance.

---

## Existing Production Pages

Do not automatically migrate or rewrite existing production pages when updating this design system.

In particular, existing campaign pages should remain untouched unless a migration is explicitly requested.

Design-system improvements should be backward-safe wherever practical.

---

## Principle

The goal is not to make every GenSpark page identical.

The goal is to make every new page recognizably GenSpark while allowing the content and campaign objective to determine the page composition.
