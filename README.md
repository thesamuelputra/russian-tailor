# The Russian Tailor — russiantailor.ca redesign

A modern redesign of [russiantailor.ca](https://www.russiantailor.ca) — the shop of
master tailor Irina Sitonin in downtown Victoria, BC. Built with Next.js
(App Router), TypeScript, and Tailwind CSS v4.

## Content policy

Every fact, sentence, and photo on this site comes from the original Wix site or
the shop's public listings — nothing invented. `CONTENT.md` is the scraped
source-of-truth inventory; conflicting facts on the old site (postal code, hours)
were resolved against the shop's Yelp listing:

- Postal code **V8W 1J5** (old homepage had a typo, V8W 1J6)
- Hours **Mon/Tue/Thu/Fri 10:00–5:30, closed Wed + weekends** (old contact page was stale)

## Stack & practices

- **Next.js 16** App Router, all pages statically rendered
- **Tailwind CSS v4** with an OKLCH design-token theme (warm paper/ink,
  thread-crimson accent taken from Irina's pincushion)
- **Fraunces + Instrument Sans** via `next/font` (self-hosted, zero layout shift)
- **`next/image`** with static imports — original photos from the shop's media
  library, properly sized and lazy-loaded (hero image `priority`)
- **SEO**: per-page metadata, Open Graph image (generated), `sitemap.xml`,
  `robots.txt`, JSON-LD `LocalBusiness` with verified address/hours
- **Accessibility**: semantic landmarks, skip link, focus-visible styles,
  keyboard-friendly mobile nav, `prefers-reduced-motion` respected, no-JS fallback
- **URL parity** with the old site (`/about`, `/custom-tailoring`,
  `/clothing-repair-and-alteration`, `/photos`, `/contact`) so existing links and
  search results keep working after a domain cutover
- **Contact form** composes an email in the visitor's mail app (`mailto:`) — no
  backend, no message data ever stored; phone remains the primary booking channel

## Develop

```bash
npm install
npm run dev
```

## Deploy

Deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL (e.g.
`https://www.russiantailor.ca` after a domain cutover) so canonical URLs,
sitemap, and structured data point at the right host.
