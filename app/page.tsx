import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WovenLabel } from "@/components/WovenLabel";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import irinaShop from "@/public/images/irina-shop.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import fittingSuit from "@/public/images/fitting-suit.jpg";
import bridalFitting from "@/public/images/bridal-fitting.jpg";
import suitNavy from "@/public/images/suit-navy.jpg";
import shirtRack from "@/public/images/shirt-rack.jpg";
import promGroup from "@/public/images/prom-group.jpg";
import jacketGold from "@/public/images/jacket-gold.jpg";
import womensDressSuit from "@/public/images/womens-dress-suit.jpg";
import shirtBlue from "@/public/images/shirt-blue.jpg";

export const metadata = pageMeta({
  absoluteTitle: `${site.name} — Custom Tailoring & Expert Alterations in Victoria, BC`,
  description:
    "Custom tailoring and expert alterations in downtown Victoria, BC. Master tailor Irina Sitonin: suits, shirts, bridal gowns, and formal wear. Call 250-388-5543 to book.",
  path: "/",
});

const galleryStrip = [
  { src: suitNavy, alt: "Navy pinstripe suit with pocket square", note: "Custom suiting" },
  { src: bridalFitting, alt: "Bride at the mirror during a gown fitting", note: "Bridal alterations" },
  { src: shirtRack, alt: "Rack of finished custom shirts", note: "Made to measure shirts" },
  { src: womensDressSuit, alt: "Grey dress suit, front and back", note: "Women's tailoring" },
  { src: jacketGold, alt: "Tan jacket with patterned tie", note: "Custom jackets" },
  { src: shirtBlue, alt: "Contrast double collar, made to measure", note: "Collar detail" },
  { src: promGroup, alt: "A group in prom and grad dresses", note: "Prom and grad" },
];

export default function HomePage() {
  return (
    <>
      {/* ————— Fascia hero ————— */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16 lg:pt-24 lg:pb-16">
          <div>
            <h1 className="fascia text-[length:var(--text-fascia)]">
              <span className="fascia-line" style={{ "--stagger": 0 } as React.CSSProperties}>
                The
              </span>
              <br />
              <span className="fascia-line" style={{ "--stagger": 1 } as React.CSSProperties}>
                Russian
              </span>
              <br />
              <span className="fascia-line" style={{ "--stagger": 2 } as React.CSSProperties}>
                Tailor
              </span>
            </h1>

            <p
              className="rowline rise mt-8 text-chalk"
              style={{ "--stagger": 3, fontSize: "clamp(1rem, 0.8rem + 1vw, 1.5rem)" } as React.CSSProperties}
            >
              Custom tailoring &amp; expert <em>Alterations.</em>
            </p>

            <p
              className="rise mt-7 max-w-md font-serif leading-relaxed text-chalk-dim"
              style={{ "--stagger": 4 } as React.CSSProperties}
            >
              The shop of master tailor {site.owner}: a lifetime of craft that
              began in St.&nbsp;Petersburg, now at the corner of View and
              Government Street in downtown Victoria.
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-5"
              style={{ "--stagger": 5 } as React.CSSProperties}
            >
              <a
                href={site.phoneHref}
                className="tape border border-gold px-6 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-green-deep active:scale-[0.97]"
              >
                Call {site.phone} to book
              </a>
              <Link
                href="/contact"
                className="font-serif italic text-chalk underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-bright"
              >
                Plan your visit
              </Link>
            </div>
          </div>

          <figure className="rise lg:pt-4" style={{ "--stagger": 4 } as React.CSSProperties}>
            <div className="print -rotate-1">
              <Image
                src={irinaShop}
                alt={`${site.owner} at the counter of her shop on View Street, lamplit, garments on the rails behind her`}
                priority
                sizes="(min-width: 1024px) 44vw, calc(100vw - 2.5rem)"
                className="settle"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <span className="tape text-chalk-dim">
                The shop, View Street · Victoria
              </span>
              <span className="chalk-note chalk-write" style={{ "--stagger": 5 } as React.CSSProperties}>
                by appointment · по записи
              </span>
            </figcaption>
          </figure>
        </div>

        <div
          className="rise mx-auto flex max-w-7xl items-center gap-3 px-5 pb-10 sm:px-8"
          style={{ "--stagger": 6 } as React.CSSProperties}
          aria-hidden
        >
          <span className="block h-10 w-px bg-gold/50" />
          <span className="tape text-chalk-dim">Scroll</span>
        </div>
      </section>

      {/* ————— Order tickets: the season ————— */}
      <section aria-labelledby="season" className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <p className="folio">No. 1 / 4</p>
            <h2 id="season" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-chalk">
              For the 2026 <em>season.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8">
            <Reveal>
              <article className="ticket ticket-tilt-l">
                <p className="tape text-ledger-red">Attention all brides</p>
                <p className="mt-4 font-serif leading-relaxed">
                  The wedding season of 2026 has already begun. We highly
                  recommend that you don&rsquo;t bring in your dresses for
                  alterations last minute. We offer high quality alterations that
                  will make you feel and look stunning on your wedding day.
                </p>
                <p className="chalk-note mt-5">wedding season 2026</p>
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article className="ticket ticket-tilt-r md:mt-14 md:max-w-[24rem] md:justify-self-end">
                <p className="tape text-ledger-red">Grads, you too</p>
                <p className="mt-4 font-serif leading-relaxed">
                  The graduation season of 2026 has already begun. Same advice:
                  don&rsquo;t leave your prom dress to the last minute.
                </p>
                <p className="chalk-note mt-5">grad season 2026</p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-center font-serif text-chalk-dim">
              Call{" "}
              <a
                href={site.phoneHref}
                className="text-gold-bright underline decoration-gold/50 underline-offset-4"
              >
                {site.phone}
              </a>{" "}
              today to book your appointment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— The ledger: services ————— */}
      <section aria-labelledby="services" className="ledger on-paper relative">
        <div className="ledger-margin left-6 sm:left-16 lg:left-24" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="pl-8 sm:pl-16 lg:pl-24">
            <Reveal>
              <p className="folio">No. 2 / 4</p>
              <h2 id="services" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-ink">
                Entered in the <em>ledger.</em>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
              <div>
                {[
                  {
                    n: "1",
                    title: "Custom tailoring",
                    note: "Bespoke custom, made to measure, customized off the rack, and favourite clothing replication. Suits, shirts, dresses, coats, and pants for men and women.",
                    href: "/custom-tailoring",
                    link: "Explore custom tailoring",
                  },
                  {
                    n: "2",
                    title: "Clothing repair & alteration",
                    note: "Fit is the single most important part of looking good in your suit: sleeves, hems, waist and seat, and everyday repair, no matter where you bought it.",
                    href: "/clothing-repair-and-alteration",
                    link: "See what we alter",
                  },
                  {
                    n: "3",
                    title: "Bridal, prom & formal",
                    note: "Wedding and bridal gowns, prom, grad, evening and formal dresses. The premier alterations house, where a dress becomes your dream gown.",
                    href: "/clothing-repair-and-alteration#bridal",
                    link: "Bridal alterations",
                  },
                ].map((entry, i) => (
                  <Reveal key={entry.n} delay={i * 110}>
                    <article className="relative border-b border-ink/15 py-[1.2rem] pb-[2.4rem] first:pt-0">
                      <span
                        aria-hidden
                        className="absolute -left-8 font-serif text-lg font-semibold text-ledger-red sm:-left-12"
                      >
                        {entry.n}.
                      </span>
                      <h3 className="font-serif text-2xl font-semibold leading-[var(--rule)] sm:text-3xl">
                        {entry.title}
                      </h3>
                      <p className="mt-[1.2rem] max-w-xl font-serif text-ink-soft">
                        {entry.note}
                      </p>
                      <Link
                        href={entry.href}
                        className="tape mt-4 inline-block text-ledger-red underline decoration-ledger-red/40 underline-offset-4 transition-colors hover:text-ink"
                      >
                        {entry.link}
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={150} className="hidden lg:block">
                <figure>
                  <div className="reveal-mask">
                    <div className="print rotate-[0.6deg]">
                      <Image
                        src={fittingSuit}
                        alt={`${site.owner} pinning the shoulder of a client's suit jacket during a fitting`}
                        sizes="(min-width: 1024px) 26vw, 0px"
                        className="garment"
                      />
                    </div>
                  </div>
                  <figcaption className="tape mt-3 text-ink-soft">
                    A fitting at the shop
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Woven label: the tailor's word ————— */}
      <section aria-labelledby="the-tailor">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <WovenLabel className="mx-auto max-w-3xl text-center">
              <h2 id="the-tailor" className="sr-only">
                The tailor
              </h2>
              <blockquote>
                <p className="woven-text text-[length:var(--text-head)] leading-snug">
                  &ldquo;This work is my love, my life. And I like people. Seeing
                  all the customers, brides and bridesmaids so happy and excited
                  is such a great thing.&rdquo;
                </p>
                <footer className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  <span className="chalk-note !rotate-0 text-gold-bright">Ирина</span>
                  <span className="tape text-gold">Irina Sitonin · Master Tailor</span>
                </footer>
              </blockquote>
            </WovenLabel>
          </Reveal>
        </div>
      </section>

      {/* ————— The craft ————— */}
      <section aria-labelledby="craft" className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="folio">No. 3 / 4</p>
                <h2 id="craft" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-chalk">
                  Cut by <em>hand.</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-7 max-w-md font-serif leading-relaxed text-chalk-dim">
                  Taught to sew by her grandmother before she was five, Irina went
                  from sewing college in St.&nbsp;Petersburg to an apprenticeship
                  under a master tailor at a clothing manufacturer. Her shop is
                  the culmination of that lifetime of experience.
                </p>
                <Link
                  href="/about"
                  className="tape mt-6 inline-block text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-bright"
                >
                  Read Irina&rsquo;s story
                </Link>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 items-start gap-6">
              <Reveal>
                <div className="reveal-mask">
                  <div className="print -rotate-1">
                    <Image
                      src={irinaCutting}
                      alt={`${site.owner} cutting suiting cloth at her worktable, measuring tape around her neck`}
                      sizes="(min-width: 1024px) 26vw, 45vw"
                      className="garment"
                    />
                  </div>
                </div>
                <p className="chalk-note mt-4">мастер · master tailor</p>
              </Reveal>
              <Reveal delay={130}>
                <div className="reveal-mask mt-10">
                  <div className="print rotate-[0.8deg]">
                    <Image
                      src={bridalFitting}
                      alt="Bride at the mirror while her gown is fitted"
                      sizes="(min-width: 1024px) 26vw, 45vw"
                      className="garment"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Gallery strip ————— */}
      <section aria-labelledby="gallery-strip" className="border-t border-gold/20 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="gallery-strip" className="rowline-sm text-[length:var(--text-sec)] text-chalk">
              The work, <em>up close.</em>
            </h2>
            <Link
              href="/photos"
              className="tape text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-bright"
            >
              Photo gallery
            </Link>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <ul
            className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:thin]"
            aria-label="Selected work"
          >
            {galleryStrip.map((item) => (
              <li key={item.alt} className="w-[68vw] flex-none snap-start sm:w-[38vw] lg:w-[24vw]">
                <figure className="reveal-frame relative overflow-hidden border border-gold/25">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 24vw, 68vw"
                    className="garment aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="reveal-caption tape">{item.note}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ————— Visit: the plate & the hours ————— */}
      <section aria-labelledby="visit" className="ledger on-paper relative">
        <div className="ledger-margin left-6 sm:left-16 lg:left-24" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="pl-8 sm:pl-16 lg:pl-24">
            <Reveal>
              <p className="folio">No. 4 / 4</p>
              <h2 id="visit" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-ink">
                Visit the <em>shop.</em>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <Reveal>
                <div className="plate px-8 py-7 sm:px-12">
                  <p className="text-xs tracking-[0.3em]">The Russian Tailor</p>
                  <div className="plate-rule" aria-hidden />
                  <p className="font-semibold tracking-[0.14em] text-lg sm:text-xl">
                    No. 203 · 612 View Street
                  </p>
                  <p className="mt-1 text-xs tracking-[0.28em]">
                    Victoria BC · V8W 1J5
                  </p>
                </div>
                <p className="mt-[2.4rem] max-w-md font-serif text-ink-soft">
                  We will do everything we can to meet your expectations. To book
                  an appointment, call{" "}
                  <a
                    href={site.phoneHref}
                    className="font-medium text-ink underline decoration-ledger-red/40 underline-offset-4"
                  >
                    {site.phone}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-ink underline decoration-ledger-red/40 underline-offset-4"
                  >
                    {site.email}
                  </a>
                  .
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tape mt-5 inline-block text-ledger-red underline decoration-ledger-red/40 underline-offset-4 hover:text-ink"
                >
                  Get directions
                </a>
              </Reveal>

              <Reveal delay={130}>
                <h3 className="tape text-ink-soft">Hours</h3>
                <dl className="mt-4 max-w-sm">
                  {site.hours.map(({ day, time }) => (
                    <div
                      key={day}
                      className="ledger-line flex items-baseline justify-between"
                    >
                      <dt className="font-serif">{day}</dt>
                      <dd
                        className={`font-serif ${
                          time === "Closed"
                            ? "italic text-ink-soft"
                            : "font-medium tabular-nums"
                        }`}
                      >
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="chalk-note mt-6">closed Wednesdays, always</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
