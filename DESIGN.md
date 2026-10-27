---
name: Mae's Childcare
description: A calm, licensed home childcare in San Francisco, designed as a colour card catalogue.
colors:
  cream: "#FFF9F0"
  ink: "#0A2540"
  orange: "#FF6B35"
  teal: "#2AB7CA"
  yellow: "#FED766"
  navy: "#004E89"
  sky: "#AEDFF7"
  footer-navy: "#071c33"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  button: "0.875rem"
  chip: "1.25rem"
components:
  button-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.button}"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "1.75rem"
    height: "20rem"
---

# Design System: Mae's Childcare

Source: `app/globals.css`, `app/layout.tsx`, Navbar, Footer, `app/page.tsx` (reference), `PRODUCT.md`, `.impeccable/surfaces/app-page-tsx.md`.
## Overview

**Creative North Star: "The Colour Card Catalogue"**

The four brand colours are rationed like a premium paint house. Cream ground, ink-navy text, 1px ruled lines, tall matte colour chips, photos in arched windows. Warm and calm, not loud. Premium comes from type, layout, motion and craft, not new colours. The logo (`public/images/name.png`, `logo-only.svg`) and six-colour palette are pinned. Trust facts (licence #384005044, 8 children, English + Filipino) are shown plainly; real photos only, no invented testimonials.

**Key Characteristics:** one full-strength colour field per screen; orange only for the one primary action; ink text on all brand fills; flat at rest; one authored hero load plus quiet scroll reveals.

## Colors

Tailwind `@theme` tokens (`bg-goldenYellow`, `text-ink`, ...).

- **Signal Orange** (#FF6B35): the one primary action per screen ("Book a tour"); `.link-draw` underline.
- **Matte Teal** (#2AB7CA), **Golden Yellow** (#FED766), **Sky** (#AEDFF7): chip fills (Toddler, Infant, Preschool). Yellow also: text selection, footer button, link hover on dark.
- **Brand Navy** (#004E89): accent words in headlines, 3px focus ring, `.btn-ink` hover.
- **Cream** (#FFF9F0): page ground, nav (95% + blur), text on ink.
- **Ink** (#0A2540): all text and the tour CTA field; navy darkened to pass contrast on every fill.
- **Footer Navy** (#071c33): footer ground only.
- **Rule** (`--rule`, ink at 16%): 1px dividers; on dark, cream at 15-20%.

Legacy aliases (`lightCoral`, `softTeal`, `pastelYellow`, `navyText`) exist for inner pages; avoid in new work.

**The Rationing Rule.** One full-strength colour field per screen. A second orange button on a screen is a bug.
**The Ink-On-Fill Rule.** Text on a brand fill is ink, never white or cream. Approx. contrast (hand-computed): ink on orange 5.5:1, teal 6.5:1, yellow and sky over 10:1; cream on ink about 15:1. White on orange is about 2.8:1 and fails.

## Typography

**Display:** Bricolage Grotesque (`next/font`, `--font-display`). **Body:** Figtree (`--font-body`). Both `display: swap`. A tightly set characterful grotesque over a friendly legible body.

- **Display** (700, `clamp(2.5rem, 5.2vw, 4.5rem)`, 1, -0.035em): home h1 only.
- **Headline** (600, `text-4xl sm:text-5xl lg:text-6xl`): section h2; CTA h2 goes to `lg:text-7xl`.
- **Title** (600, `text-2xl` to `text-4xl`): h3, chip names.
- **Body** (400, 1.0625rem, 1.6): `text-lg`/`text-xl` for lead copy, `text-ink/80`, measure about 34rem.
- **Label** (display face, 600, `text-sm`, `tracking-widest`, uppercase): chip age line and CTA `dt` only.

Base h1-h6: display face, 600, -0.025em, 1.05 leading, `text-wrap: balance`; `p, li` use `pretty`.

## Layout

- Container `max-w-7xl mx-auto px-5 sm:px-8`; sections `py-16 lg:py-20` (hero `pt-10 sm:pt-16 pb-14 lg:pb-20`, tour CTA `py-20 lg:py-24`).
- Two-column splits on `lg` (`1.1fr/0.9fr`, `0.9fr/1.1fr`, `0.8fr/1.2fr`); sticky heading beside a ruled list (`lg:sticky lg:top-32`).
- Chips stagger on `lg` (`mt-0 / mt-8 / mt-16`). Programs band: `bg-white/60` between two rules. Tour CTA: the ink field.
- Gallery: 12-col grid, rows `11rem` (`sm:14rem`), gap 3/4. Nav is 5rem high; mobile breakpoint `md`.

## Elevation & Depth

Flat at rest; depth comes from colour fields and rules. Shadows only on the hero arch (`0 30px 60px -30px ink/.5`), the orange button (soft glow, lifts on hover) and chip hover (`0 24px 40px -24px ink/.45`).

## Shapes

Soft geometric. Buttons 0.875rem, chips 1.25rem, photo tiles `rounded-3xl`, arch `999px 999px 1.5rem 1.5rem`. Ghost button: 1.5px inset ink ring. Focus: 3px navy outline, 3px offset.

## Components

- **Buttons** (`.btn` + variant): min 3.25rem, display face 600, `active: scale(.97)`. `btn-orange` (orange, ink text; primary only, lifts 2px on hover); `btn-ghost` (ink ring, fills ink on hover; paired secondary); `btn-ink` (hover navy); `btn-yellow` (on dark footer, hover white). Nav size: `!min-h-11 !py-2 !px-5 !text-base`.
- **Colour chip** (`.chip`): matte fill, min 20rem, padding 1.75rem, ink text. Age label on top as the catalogue code, name pinned bottom (`mt-auto`), body, `link-draw` link. Hover lifts 6px. Fill via `bg-goldenYellow | bg-brightTeal | bg-skyBlue`.
- **Arched photo** (`.arch`): hero photo, 4/5. Other photos are `.photo rounded-3xl`; the image zooms 1.04 inside the frame over 700ms, never the frame.
- **Ruled lists / dl:** `.rule-top` on `ul`, `.rule-bottom` on `li` (`py-7`, title/body two-up). Fact row 2/4 cols with vertical rules on `lg`. Contact `dl` on ink: `grid-cols-[6rem_1fr]`, cream/20 rules.
- **Nav:** sticky, cream/95 + blur, bottom rule. Logo left (name.png scaled 2.2x, clipped), `link-draw` links (underline draws from left; held for `aria-current="page"`), orange "Book a tour" right. Mobile: 44px icon button; panel animates `grid-template-rows` 0fr to 1fr over 300ms; 2xl display links split by rules; full-width orange button.
- **Footer:** Footer Navy, cream text. Logo on a cream rounded plate, display-face tagline. Columns `1.4fr/1fr/1.2fr`; small uppercase cream/60 headings; links hover yellow; yellow "Book a tour"; bottom rule row with copyright and licence.

## Motion

- **Easings:** `--ease-out-expo` `cubic-bezier(.16,1,.3,1)` for entrances and hovers; `--ease-out-quart` `cubic-bezier(.25,1,.5,1)` for button transforms.
- **Hero load, once:** `.rise` 800ms, delay `var(--i) * 90ms`, `backwards` fill (set `--i` inline); `.arch-open` clip-path 1100ms after 120ms.
- **Scroll reveal:** `.reveal` reuses `rise` with `animation-timeline: view()`, range `entry 0% entry 35%`, inside `@supports`; unsupported browsers just show content.
- **Durations:** button 180ms, nav underline 260ms, chip 300ms, photo zoom 700ms.
- **Hover** transforms only under `@media (hover: hover)`.
- **Reduced motion:** motion rules sit under `no-preference`; `reduce` sets animation and transition to 0.01ms and disables smooth scroll.
- Animate `transform` and `opacity` (plus `clip-path` on the arch) only.

## Do's and Don'ts

### Do:
- **Do** use one `btn-orange` per screen, for "Book a tour".
- **Do** set text on brand fills in ink; body copy `text-ink/80`.
- **Do** build with rules, whitespace and a single colour field rather than boxes.
- **Do** use real photos with descriptive alt text; frame the hero in `.arch`.
- **Do** keep `max-w-7xl`, `px-5 sm:px-8`, `py-16 lg:py-20`.
- **Do** put `reveal` on below-fold blocks; use `rise` + `--i` only in the hero.

### Don't:
- **Don't** use emoji or icon-in-circle decoration.
- **Don't** use gradients or rainbow cards; blur is for the nav only.
- **Don't** add eyebrow labels above headings (uppercase labels are for chip ages and `dt` only).
- **Don't** build grids of identical icon cards; vary scale, offset and fill.
- **Don't** put white or cream text on orange, teal, yellow or sky.
- **Don't** invent testimonials, ratings or other proof.
- **Don't** add brand colours or use legacy aliases in new code.
- **Don't** use `.animate-*`, `.hover-lift`, `animation-delay-*` (legacy, being removed).

## Known Gotcha

Component classes (`.btn`, `.chip`, `.arch`, `.photo`, `.link-draw`, `.rule-*`) live in `@layer components`, so Tailwind utilities override them. A `p-4` on a `.chip` replaces its padding; never expect a component rule to win over a utility on the same element. The `!` in the nav button overrides is stricter than needed.
