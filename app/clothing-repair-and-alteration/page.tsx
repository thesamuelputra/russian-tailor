import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import fittingSuit from "@/public/images/fitting-suit.jpg";
import bridalFitting from "@/public/images/bridal-fitting.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import weddingCouple from "@/public/images/wedding-couple.jpg";

export const metadata = pageMeta({
  title: "Clothing Repair & Alteration",
  description:
    "Expert clothing alterations in Victoria, BC — suits, wedding and bridal gowns, prom and formal dresses. The premier alterations house where a dress becomes your dream gown.",
  path: "/clothing-repair-and-alteration",
});

const suitAlterations = [
  {
    title: "Sleeves shortened",
    body: "Many off-the-rack suits have sleeves that are many inches too long. Ideally, you should allow 1/4″ to 1/2″ of shirt cuff (known as “linen”) to show when you rest your hands at your side — for most people, the jacket should end at the bump on the pinky side of your wrist, where your arm meets your hand.",
  },
  {
    title: "Pants hemmed",
    body: "Normally, pants on off-the-rack suits are unfinished and run about 38″ long — too long for anyone to wear. You must have these hemmed.",
  },
  {
    title: "The waist and seat",
    body: "Here you have a little wiggle room. Manufacturers often leave a seam allowance in both the waist and seat so they can be let out for more room; having them taken in is no issue either. Just make sure they sit on your waist — these are not jeans, don’t wear them the same way.",
  },
];

export default function AlterationsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="label rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Repairs &amp; alterations
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-display text-[length:var(--text-hero)] leading-[1.05] tracking-tight"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Fit is <em className="font-light text-thread-deep">everything</em>
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Without fit, even the richest man in the finest vicuña-cashmere blend
          suit comes across more as a rube than a rake. Short of having a suit
          custom made to your measurements, any off-the-rack purchase will have
          fit issues — making it fit perfectly takes a few alterations.
        </p>
      </section>

      {/* The three alterations */}
      <section
        aria-labelledby="three-alterations"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <Reveal>
            <h2
              id="three-alterations"
              className="font-display text-[length:var(--text-title)] leading-tight"
            >
              The three alterations every suit needs
            </h2>
            <figure className="mt-10 hidden lg:block">
              <Image
                src={fittingSuit}
                alt={`${site.owner} pinning the shoulder of a client's suit jacket`}
                sizes="(min-width: 1024px) 30vw, 0px"
                className="border border-line"
              />
              <figcaption className="mt-2 text-xs text-ink-soft">
                A fitting at the shop.
              </figcaption>
            </figure>
          </Reveal>
          <div>
            {suitAlterations.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex gap-6 border-b border-line py-8 first:pt-0">
                  <span
                    aria-hidden
                    className="font-display text-5xl font-light italic text-thread"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Women's & bridal */}
      <section aria-labelledby="womens-alterations" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <figure>
              <Image
                src={bridalFitting}
                alt="Bride at the mirror while her wedding gown is fitted"
                sizes="(min-width: 1024px) 35vw, calc(100vw - 2.5rem)"
                className="border border-line"
              />
              <figcaption className="mt-2 text-xs text-ink-soft">
                A bridal gown fitting.
              </figcaption>
            </figure>
            <div>
              <h2
                id="womens-alterations"
                className="font-display text-[length:var(--text-title)] leading-tight"
              >
                Women&rsquo;s clothes alterations
              </h2>
              <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Many gowns need at least some sort of alteration — and your
                  alteration needs can vary greatly depending on where you got your
                  gown and how many changes need to be made. With expectations in
                  order and the right seamstress or tailor, you&rsquo;ll be ready
                  for your wedding day with a gown that fits flawlessly.
                </p>
                <p className="font-medium text-ink">
                  No matter where you purchased your gown or dress, you can bring
                  it to us to ensure that perfect fit. The premier alterations
                  house, Russian Tailor is where a dress becomes your dream gown.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Motto */}
      <section aria-labelledby="motto" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <Reveal>
            <h2 id="motto" className="label">
              Our motto
            </h2>
            <p className="mt-6 max-w-2xl font-display text-[length:var(--text-subtitle)] leading-snug">
              Excellent quality, efficient service, superb workmanship, and{" "}
              <em className="text-thread-deep">great value</em>.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              Our mission? To provide real solutions to ill-fitting off-the-rack
              clothing for all. We strive to provide clothing of top-notch quality
              at very reasonable prices and excellent customer service — and we
              also offer bespoke custom, made to measure, customized off the rack,
              and favourite-clothing replication services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.phoneHref}
                className="bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-thread-deep"
              >
                Call {site.phone} to book
              </a>
              <Link href="/custom-tailoring" className="stitch-link font-medium">
                Custom tailoring
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={irinaCutting}
                alt={`${site.owner} cutting fabric at the worktable`}
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="border border-line"
              />
              <Image
                src={weddingCouple}
                alt="Wedding bouquet in focus with a couple beyond"
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="mt-10 border border-line"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
