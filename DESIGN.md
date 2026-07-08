# DESIGN.md — The Russian Tailor

## Color (strategy: Drenched dark alternating with warm paper; named reference:
## "Invisible Green shopfront, Henry Poole old gold, English ledger paper")

Every color is a documented material, not a mood:

| token | value | material source |
|---|---|---|
| `--color-green` | `oklch(23% 0.028 165)` ≈ #16241c | "Invisible Green" Victorian shopfront paint (reads almost black) |
| `--color-green-deep` | `oklch(19% 0.024 165)` | fascia block-shade tone |
| `--color-paper` | `oklch(93.5% 0.022 90)` ≈ #f0e9d8 | English ledger paper (cream) |
| `--color-paper-deep` | `oklch(90% 0.026 92)` | ledger paper, aged edge |
| `--color-ink` | `oklch(24% 0.015 75)` ≈ #2b2620 | full-density letterpress ink |
| `--color-gold` | `oklch(68% 0.075 88)` ≈ #a49160 | Henry Poole old gold / oil gilding |
| `--color-gold-bright` | `oklch(78% 0.09 92)` | gilding highlight |
| `--color-ledger-red` | `oklch(45% 0.13 30)` ≈ #a6392e | ledger cash-column doubled verticals |
| `--color-feint` | `oklch(72% 0.035 240)` ≈ #9db8cc | feint-blue ledger rules |
| `--color-chalk` | `oklch(92% 0.012 95)` | tailor's chalk on dark cloth |
| `--color-manila` | `oklch(78% 0.07 80)` ≈ #d4a96a | paper-pattern card |

Dark sections are drenched Invisible Green with chalk/gold type. Light sections
are ledger paper with ink type and real two-color ruling. Never #000/#fff.

## Typography

- **Besley** (variable 400–900 + italics) — the voice. Robert Besley designed the
  original Clarendon (1845), the definitive English trade letter. Display at
  800–900 (Victorian poster), body at 400. Fascia headings get the signwriter's
  block shade: offset text-shadow, zero blur, in a darker tone of the ground.
- **Archivo** (variable, wdth 62–125) — the tape-measure voice. Condensed
  uppercase (wdth ~68, wght 500–600, tracking 0.08–0.12em) for nav, folio marks,
  spec labels; normal width for captions and UI.
- **Caveat** (variable, Cyrillic) — the tailor's chalk hand. Annotations at 65–80%
  opacity, rotated −1.5° to −2.5°, occasionally in Russian («ателье», «мастер»).
  Chalk is notation, never texture.

Headline system (from Gieves & Hawkes): tracked caps with ONE word in italic
lowercase and a terminal full stop — "FITTED IN *Victoria*." No eyebrow labels;
sections are indexed with ledger folio marks ("No. 2 / 6") instead.

## Recurring components

- **Ledger sheet**: paper ground, feint-blue horizontal rules (8mm rhythm),
  doubled ledger-red vertical for the margin column. Services and hours live here.
- **Woven label**: satin-black ground, selvedge striping at left/right edges, gold
  stitched-look lettering; the client's words set LARGER than the house name.
- **Brass plate**: engraved roman caps, gold face with near-black infill, hairline
  rule between name and trade line. The address block.
- **Order ticket**: small paper card, punched hole, slight rotation, manila tone.
  Seasonal notices.
- **Chalk notation icons**: let-out hashtag, take-in parallels, balance-line cross
  (mobile close button), drill-hole rings as list bullets, pattern notches as
  prev/next. 1px, technical, never illustrative.

## Imagery

Two registers (both already in /public/images): tungsten-warm shop photography
(Irina at work — keep warm, slight dim) and garment photography unified with
`saturate(.85)` at rest, full color on hover. Scroll reveals use clip-path masks,
not bare opacity. No sepia, no noise overlays.

## Motion

- One choreographed hero entrance (mask reveal, <1s, stagger via CSS only)
- Scroll reveals: clip-path/translate with exponential ease-out, IO-driven
- Subtle image parallax where `animation-timeline: view()` is supported
- No scroll-jacking, no marquees, no custom cursor, no preloaders
- `prefers-reduced-motion` disables everything; content never hidden without JS

## Layout

Paper sections use the visible ledger grid as structure (strict grid as voice).
Dark sections are asymmetric with oversized Besley numerals and generous air.
Body copy capped at 65–75ch. Fluid type via clamp; scale ratio ≥1.28.
