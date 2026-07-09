# DESIGN.md — The Russian Tailor

## Lane: "Atelier Journal"

Quiet, light, editorial minimalism, set by the owner's reference images
(Flattered, QASIMI, BAINA): warm ivory ground, photography first, hairline
rules as the only ornament, one oversized display moment per page, everything
else small and letterspaced. Whitespace is the luxury. Never dark themes,
never skeuomorphic artifacts, never decorative color.

## Color (strategy: Restrained monochrome; warm neutrals only)

| token | value | role |
|---|---|---|
| `--color-bone` | `oklch(96.8% 0.008 90)` ≈ #f7f4ec | page ground, warm ivory |
| `--color-bone-deep` | `oklch(94.2% 0.01 88)` | quiet fills (status boxes) |
| `--color-ink` | `oklch(23% 0.01 80)` ≈ #26221b | warm near-black text |
| `--color-ink-mid` | `oklch(38% 0.01 80)` | body copy |
| `--color-ink-faint` | `oklch(46% 0.01 80)` | captions, tiny caps (AA at 11px) |
| `--color-line` | ink @ 16% | hairline rules |
| `--color-line-strong` | ink @ 42% | field underlines, buttons |

No accent color. Emphasis comes from scale, weight, and air. Never #000/#fff.

## Typography

- **Italiana** (400 only) — the single loud voice. High-contrast condensed serif
  caps for the one display moment per page (page title, wordmark, fabric-house
  names). Tracking 0.04em at display size, up to 0.32em for the wordmark.
- **Newsreader** (variable + italics, opsz) — everything else. Body at
  0.9375rem/1.8 in narrow journal columns; section heads sentence-case with a
  terminal period; pull quotes italic; tiny tracked caps (11px / 0.24em) for
  nav, labels, and buttons; archival captions ("Above: …") at 11px.

Voices (globals.css, @layer components): `.display`, `.caps`, `.caption`,
`.head`, `.quote`, `.prose-journal`, `.link-quiet`, `.btn-line`.

## Photography

- Journal pages run **black and white with a faint warm cast**: `.photo` =
  grayscale + sepia(.08) + contrast lift, one emulsion across snapshots and
  stock alike (the great equalizer for mixed sources). Under a cursor the
  cloth slowly returns to colour (1.1s filter ease, hover devices only).
- **The signature moment**: the home hero carries `.photo-develop` and
  develops from silver into colour ~1.4s after load, like a print coming up
  in the tray. One page, one develop.
- The archive (/photos) keeps **muted film colour**: `.photo-film`.
- Captions are tiny archival notes below each placement. The page's lead
  figure takes the full "Above: …" form, once per page; all other figures
  take a short note ("Dark suiting.").
- **Respect source resolution**: the 960px-wide photos (irina-shop,
  prom-group, wedding-couple) may run full container width as cinematic
  crops (aspect 21/9 or 21/8, object-cover); the ~330px fitting shots must
  stay under ~450px displayed width or they go soft.
- No mats, no frames, no rotation.

## Layout

- Container max-w-6xl; grids on 12 columns with asymmetric placements
  (col-span-5 text against col-span-7 image, offsets via col-start and top
  padding). Staggered figure pairs (one dropped by mt-12/14).
- Hairline rules structure the page: under the display title, `border-y`
  around the services register, `border-t` opening each late section.
- The services grid is QASIMI-style ruled cells (divide-x), not cards:
  no fills, no shadows, no radius anywhere.
- Body columns cap near 65ch (`max-w-md` at 15px).

## Motion

- One CSS-only page-load stagger (`.rise`, 14px fade-up, expo ease).
- Scroll reveals are opacity + 12px translate only (`.reveal`), JS-gated via
  `html.js`, IntersectionObserver in components/Reveal.tsx.
- Cross-document view transitions: 0.3s root cross-fade where supported
  (`@view-transition`), off under reduced motion.
- Nav hairlines draw in under the cursor (`.link-draw`, background-size).
- One functional exception: the mobile menu toggle's two bars cross into an X
  (45° transform, disabled under reduced motion). Nothing else moves.
  `prefers-reduced-motion` disables all of it.

## Never

Dark grounds, gradients, cards, shadows, border radius, decorative blur,
rotated content (the menu toggle's X is the one functional exception),
skeuomorphs (tickets/plates/labels), display-serif-plus-eyebrow formula,
em dashes in copy, invented facts.
