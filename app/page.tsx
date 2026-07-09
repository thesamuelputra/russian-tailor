import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import irinaShop from "@/public/images/irina-shop.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import suitNavy from "@/public/images/suit-navy.jpg";
import bridalFitting from "@/public/images/bridal-fitting.jpg";
import shirtRack from "@/public/images/shirt-rack.jpg";

export const metadata = pageMeta({
  absoluteTitle: `${site.name} · Custom Tailoring & Expert Alterations in Victoria, BC`,
  description:
    "Custom tailoring and expert alterations in downtown Victoria, BC. Master tailor Irina Sitonin: suits, shirts, bridal gowns, and formal wear. Call 250-388-5543 to book.",
  path: "/",
});

const services = [
  {
    n: "01",
    title: "Custom tailoring.",
    note: "Bespoke custom, made to measure, customized off the rack, and favourite clothing replication. Suits, shirts, dresses, coats, and pants for men and women.",
    href: "/custom-tailoring",
    link: "Custom tailoring",
  },
  {
    n: "02",
    title: "Repair & alteration.",
    note: "Fit is the single most important part of looking good in your suit: sleeves, hems, waist and seat, and everyday repair, no matter where you bought it.",
    href: "/clothing-repair-and-alteration",
    link: "What we alter",
  },
  {
    n: "03",
    title: "Bridal, prom & formal.",
    note: "Wedding and bridal gowns, prom, grad, evening and formal dresses. The premier alterations house, where a dress becomes your dream gown.",
    href: "/clothing-repair-and-alteration#bridal",
    link: "Bridal alterations",
  },
];

const selectedWork = [
  {
    src: suitNavy,
    alt: "Navy pinstripe suit with pocket square",
    caption: "Custom suiting, cut to measure.",
  },
  {
    src: bridalFitting,
    alt: "Bride at the mirror during a gown fitting",
    caption: "A wedding gown at its fitting.",
  },
  {
    src: shirtRack,
    alt: "Rack of finished custom shirts",
    caption: "Finished shirts on the rail.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* The one loud element: the name, set like a fascia in a journal */}
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <h1
          className="display rise text-center text-[length:clamp(2.4rem,8.6vw,8.25rem)]"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          The Russian Tailor
        </h1>
        <div
          className="rise mt-10 border-t border-line sm:mt-14"
          style={{ "--stagger": 1 } as React.CSSProperties}
          aria-hidden
        />

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-14">
          <figure
            className="rise lg:col-span-7"
            style={{ "--stagger": 2 } as React.CSSProperties}
          >
            <Image
              src={irinaShop}
              alt={`${site.owner} at the counter of her shop on View Street, garments on the rails behind her`}
              priority
              sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
              className="photo w-full"
            />
            <figcaption className="caption mt-3">
              Above: {site.owner} at the counter of her shop on View Street.
            </figcaption>
          </figure>

          <div
            className="rise flex flex-col justify-end pb-8 lg:col-span-5"
            style={{ "--stagger": 3 } as React.CSSProperties}
          >
            <p className="caps text-ink-faint">
              Custom tailoring &amp; expert alterations · Victoria, B.C.
            </p>
            <p className="prose-journal mt-6 max-w-sm">
              The shop of master tailor {site.owner}: a lifetime of craft that
              began in St.&nbsp;Petersburg, now at the corner of View and
              Government Street in downtown Victoria.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={site.phoneHref} className="caps btn-line">
                Call {site.phone}
              </a>
              <Link href="/contact" className="link-quiet text-sm">
                Plan your visit
              </Link>
            </div>
            <p className="caption mt-6">{site.hoursSummary}</p>
          </div>
        </div>
      </section>

      {/* Services: a ruled grid, nothing raised, nothing boxed */}
      <section aria-labelledby="services" className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <Reveal>
          <h2 id="services" className="sr-only">
            Services
          </h2>
          <div className="grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line max-md:divide-y max-md:divide-line">
            {services.map((s) => (
              <article key={s.n} className="flex flex-col py-10 md:px-10 md:first:pl-0 md:last:pr-0">
                <p className="caption">{s.n}</p>
                <h3 className="head mt-4 text-2xl">{s.title}</h3>
                <p className="prose-journal mt-4 max-w-xs flex-1">{s.note}</p>
                <p className="mt-6">
                  <Link href={s.href} className="caps link-quiet">
                    {s.link}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* The season: a journal notice, set narrow and centred */}
      <section aria-labelledby="season" className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 id="season" className="caps text-ink-faint">
            For the 2026 season
          </h2>
          <div className="prose-journal mt-8 text-left sm:text-center">
            <p>
              The wedding season of 2026 has already begun. We highly recommend
              that you don&rsquo;t bring in your dresses for alterations last
              minute. We offer high quality alterations that will make you feel
              and look stunning on your wedding day.
            </p>
            <p>
              The graduation season of 2026 has already begun. Same advice:
              don&rsquo;t leave your prom dress to the last minute.
            </p>
          </div>
          <p className="mt-8 text-sm text-ink-mid">
            Call{" "}
            <a href={site.phoneHref} className="link-quiet">
              {site.phone}
            </a>{" "}
            today to book your appointment.
          </p>
        </Reveal>
      </section>

      {/* Her word, given room */}
      <section aria-labelledby="her-word" className="mx-auto mt-28 max-w-6xl px-5 sm:mt-36 sm:px-8">
        <h2 id="her-word" className="sr-only">
          In her words
        </h2>
        <Reveal>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="quote text-[length:var(--text-quote)]">
              &ldquo;This work is my love, my life. And I like people. Seeing
              all the customers, brides and bridesmaids so happy and excited is
              such a great thing.&rdquo;
            </p>
            <footer className="caps mt-8 text-ink-faint">
              Irina Sitonin · Master tailor
            </footer>
          </blockquote>
        </Reveal>
      </section>

      {/* The craft: asymmetric journal spread */}
      <section aria-labelledby="craft" className="mx-auto mt-28 max-w-6xl px-5 sm:mt-36 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <figure>
              <Image
                src={irinaCutting}
                alt={`${site.owner} cutting suiting cloth at her worktable, measuring tape around her neck`}
                sizes="(min-width: 1024px) 45vw, calc(100vw - 2.5rem)"
                className="photo w-full"
              />
              <figcaption className="caption mt-3">
                Above: at the worktable, cutting suiting cloth.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-24">
            <h2 id="craft" className="head text-[length:var(--text-head)]">
              Cut by hand.
            </h2>
            <p className="prose-journal mt-6 max-w-md">
              Taught to sew by her grandmother before she was five, Irina went
              from sewing college in St.&nbsp;Petersburg to an apprenticeship
              under a master tailor at a clothing manufacturer. Her shop is the
              culmination of that lifetime of experience.
            </p>
            <p className="mt-8">
              <Link href="/about" className="caps link-quiet">
                Read Irina&rsquo;s story
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selected work: three placements, staggered like a lookbook page */}
      <section aria-labelledby="selected" className="mx-auto mt-28 max-w-6xl px-5 sm:mt-36 sm:px-8">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6">
          <h2 id="selected" className="caps text-ink-faint">
            Selected work
          </h2>
          <Link href="/photos" className="caps link-quiet">
            View the gallery
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {selectedWork.map((item, i) => (
            <Reveal key={item.alt} delay={i * 120} className={i === 1 ? "sm:mt-16" : i === 2 ? "sm:mt-32" : ""}>
              <figure>
                <Image
                  src={item.src}
                  alt={item.alt}
                  sizes="(min-width: 640px) 30vw, calc(100vw - 2.5rem)"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section aria-labelledby="visit" className="mx-auto mt-28 max-w-6xl px-5 pb-28 sm:mt-36 sm:px-8 sm:pb-36">
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <h2 id="visit" className="head text-[length:var(--text-head)]">
              Visit the shop.
            </h2>
            <p className="prose-journal mt-6 max-w-md">
              {site.address.street}, {site.address.city}{" "}
              {site.address.region}&nbsp;{site.address.postal}, at the corner of
              View and Government Street. We will do everything we can to meet
              your expectations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={site.phoneHref} className="caps btn-line">
                Call {site.phone}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet text-sm"
              >
                Get directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <h3 className="caps text-ink-faint">Hours</h3>
            <dl className="mt-5 max-w-sm">
              {site.hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-baseline justify-between border-b border-line py-2.5 text-sm"
                >
                  <dt>{day}</dt>
                  <dd className={time === "Closed" ? "italic text-ink-faint" : "tabular-nums"}>
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
