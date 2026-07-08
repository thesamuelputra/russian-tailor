import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import irinaShop from "@/public/images/irina-shop.jpg";
import fittingSuit from "@/public/images/fitting-suit.jpg";
import bridalFitting from "@/public/images/bridal-fitting.jpg";
import suitNavy from "@/public/images/suit-navy.jpg";
import shirtRack from "@/public/images/shirt-rack.jpg";
import promGroup from "@/public/images/prom-group.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
          <p className="label rise" style={{ "--stagger": 0 } as React.CSSProperties}>
            Downtown Victoria, BC
          </p>
          <h1
            className="rise mt-6 max-w-4xl font-display text-[length:var(--text-hero)] leading-[1.02] tracking-tight lg:max-w-[58%]"
            style={{ "--stagger": 1 } as React.CSSProperties}
          >
            Custom tailoring &amp;{" "}
            <em className="font-light text-thread-deep">expert alterations</em>
          </h1>
          <div
            className="rise mt-8 flex max-w-xl flex-col gap-8 lg:max-w-[55%]"
            style={{ "--stagger": 2 } as React.CSSProperties}
          >
            <p className="text-lg leading-relaxed text-ink-soft">
              The Russian Tailor is the shop of master tailor {site.owner}
              {" — "}a lifetime of craft that began in St.&nbsp;Petersburg, now{" "}
              {site.corner} in downtown Victoria. Suits, shirts, gowns, and
              everything between, made to fit.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={site.phoneHref}
                className="bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-thread-deep"
              >
                Call {site.phone} to book
              </a>
              <Link href="/contact" className="stitch-link font-medium">
                Plan your visit
              </Link>
            </div>
            <p className="text-sm text-ink-soft">
              {site.hoursSummary} · Closed Wednesdays &amp; weekends ·{" "}
              {site.address.street}
            </p>
          </div>

          {/* Shop photo — inset on mobile, offset right on large screens */}
          <div
            className="rise mt-12 lg:absolute lg:top-24 lg:right-8 lg:mt-0 lg:w-[36%] xl:right-[max(2rem,calc((100vw-72rem)/2))]"
            style={{ "--stagger": 3 } as React.CSSProperties}
          >
            <figure>
              <Image
                src={irinaShop}
                alt={`${site.owner} at the counter of The Russian Tailor in downtown Victoria`}
                priority
                sizes="(min-width: 1024px) 36vw, calc(100vw - 2.5rem)"
                className="border border-line"
              />
              <figcaption className="mt-2 text-xs text-ink-soft">
                Irina in the shop on View Street.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="tape mx-auto mb-2 max-w-6xl" aria-hidden />
      </section>

      {/* Seasonal notices — real announcements from the shop */}
      <section aria-labelledby="notices" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 id="notices" className="label">
            From the shop, 2026
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <h3 className="font-display text-2xl italic">Attention all brides</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                The wedding season of 2026 has already begun. We highly recommend
                that you don&rsquo;t bring in your dresses for alterations last
                minute. We offer high quality alterations that will make you feel
                and look stunning on your wedding day.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-display text-2xl italic">Grads, you too</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                The graduation season of 2026 has already begun. Don&rsquo;t bring
                in your dresses for alterations last minute — we offer high quality
                alterations that will make you feel and look stunning at your prom.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="mt-10">
              <a href={site.phoneHref} className="stitch-link font-semibold">
                Call {site.phone} today to book your appointment
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two services, editorial alternating layout */}
      <section aria-labelledby="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 id="services" className="sr-only">
          Services
        </h2>

        <Reveal className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <p className="label">Made for you</p>
            <h3 className="mt-4 font-display text-[length:var(--text-title)] leading-tight">
              Custom tailoring
            </h3>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              Bespoke custom, made to measure, customized off the rack, and
              favourite-clothing replication. Men&rsquo;s and women&rsquo;s suits,
              shirts, dresses, coats, and pants — with a thousand fabrics to choose
              from, including Holland &amp; Sherry and Dormeuil.
            </p>
            <Link
              href="/custom-tailoring"
              className="stitch-link mt-6 inline-block font-semibold"
            >
              Explore custom tailoring
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={suitNavy}
              alt="Custom tailored navy pinstripe suit"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="border border-line"
            />
            <Image
              src={shirtRack}
              alt="Rack of custom made shirts in many colours and stripes"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="mt-8 h-auto self-start border border-line"
            />
          </div>
        </Reveal>

        <div className="stitch-rule my-16" aria-hidden />

        <Reveal className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <Image
              src={bridalFitting}
              alt="Bride at the mirror during a wedding gown fitting"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="mt-8 border border-line"
            />
            <Image
              src={fittingSuit}
              alt={`${site.owner} pinning a suit jacket during a fitting`}
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="border border-line"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="label">Fit, first</p>
            <h3 className="mt-4 font-display text-[length:var(--text-title)] leading-tight">
              Clothing repair &amp; alteration
            </h3>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              Fit is the single most important part of looking good in your suit —
              and many gowns need at least some sort of alteration. Wedding and
              bridal dresses, prom and grad, suits, and everyday repair: no matter
              where you purchased it, bring it in for that perfect fit.
            </p>
            <Link
              href="/clothing-repair-and-alteration"
              className="stitch-link mt-6 inline-block font-semibold"
            >
              See what we alter
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Irina teaser */}
      <section aria-labelledby="the-tailor" className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <h2 id="the-tailor" className="label">
                <span className="text-paper/70">The tailor</span>
              </h2>
              <blockquote className="mt-6">
                <p className="font-display text-[length:var(--text-subtitle)] leading-snug">
                  <span aria-hidden className="mr-1 text-thread">
                    &ldquo;
                  </span>
                  This work is my love, my life. And I like people — seeing all the
                  customers, brides and bridesmaids so happy and excited is such a
                  great thing.
                  <span aria-hidden className="ml-1 text-thread">
                    &rdquo;
                  </span>
                </p>
                <footer className="mt-4 text-paper/70">— {site.owner}</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xl leading-relaxed text-paper/80">
                Taught to sew by her grandmother in St.&nbsp;Petersburg before she
                was five, Irina went from sewing college to an apprenticeship under
                a master tailor at a clothing manufacturer — and her shop is the
                culmination of that lifetime of experience.
              </p>
              <Link
                href="/about"
                className="stitch-link mt-6 inline-block font-semibold text-paper"
              >
                Read Irina&rsquo;s story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Occasion strip + visit */}
      <section aria-labelledby="visit" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <figure>
            <Image
              src={promGroup}
              alt="A group in prom and grad dresses of many styles and colours"
              sizes="(min-width: 1152px) 1088px, calc(100vw - 2.5rem)"
              className="border border-line"
            />
            <figcaption className="mt-2 text-xs text-ink-soft">
              Prom, grad, evening, and formal — dresses fitted for the big day.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <Reveal>
            <h2
              id="visit"
              className="font-display text-[length:var(--text-title)] leading-tight"
            >
              Visit the shop
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              The Russian Tailor is focused on providing high-quality service and
              customer satisfaction — we will do everything we can to meet your
              expectations. To book an appointment, call us at{" "}
              <a href={site.phoneHref} className="stitch-link font-medium text-ink">
                {site.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="stitch-link font-medium text-ink"
              >
                {site.email}
              </a>
              .
            </p>
            <address className="mt-6 not-italic leading-relaxed text-ink-soft">
              {site.address.street}, {site.address.city} {site.address.region}{" "}
              {site.address.postal}
              <br />
              At the corner of View and Government Street.
            </address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="stitch-link mt-4 inline-block font-semibold"
            >
              Get directions
            </a>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="label">Hours</h3>
            <dl className="mt-4 max-w-xs">
              {site.hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-baseline justify-between border-b border-line py-2.5"
                >
                  <dt className="text-sm">{day}</dt>
                  <dd
                    className={`text-sm ${
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
