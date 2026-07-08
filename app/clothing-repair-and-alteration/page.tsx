import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WovenLabel } from "@/components/WovenLabel";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import fittingSuit from "@/public/images/fitting-suit.jpg";
import bridalFitting from "@/public/images/bridal-fitting.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import weddingCouple from "@/public/images/wedding-couple.jpg";

export const metadata = pageMeta({
  title: "Clothing Repair & Alteration",
  description:
    "Expert clothing alterations in Victoria, BC: suits, wedding and bridal gowns, prom and formal dresses. The premier alterations house where a dress becomes your dream gown.",
  path: "/clothing-repair-and-alteration",
});

/* Real chalk notation: parallel take-in lines, the let-out hashtag, balance cross */
function TakeInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M15 6 13 34" />
      <path d="M27 6 25 34" />
    </svg>
  );
}

function LetOutMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M14 6 13 34" />
      <path d="M27 6 26 34" />
      <path d="M6 15 34 14" />
      <path d="M6 26 34 25" />
    </svg>
  );
}

function BalanceMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M6 20 34 20" />
      <path d="M20 8 20 32" />
    </svg>
  );
}

const suitAlterations = [
  {
    n: "1",
    mark: BalanceMark,
    title: "Sleeves shortened",
    body: "Many off-the-rack suits have sleeves that are many inches too long. Ideally, you should allow 1/4″ to 1/2″ of shirt cuff (known as “linen”) to show when you rest your hands at your side. For most people, the jacket should end at the bump on the pinky side of your wrist, where your arm meets your hand.",
  },
  {
    n: "2",
    mark: TakeInMark,
    title: "Pants hemmed",
    body: "Normally, pants on off-the-rack suits are unfinished and run about 38″ long: too long for anyone to wear. You must have these hemmed.",
  },
  {
    n: "3",
    mark: LetOutMark,
    title: "The waist and seat",
    body: "Here you have a little wiggle room. Manufacturers often leave a seam allowance in both the waist and seat so they can be let out for more room; having them taken in is no issue either. Just make sure they sit on your waist. These are not jeans, don’t wear them the same way.",
  },
];

export default function AlterationsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="folio rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Repairs &amp; alterations
        </p>
        <h1
          className="rowline rise mt-4 max-w-4xl text-[length:var(--text-display)] text-chalk"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Fit is <em>everything.</em>
        </h1>
        <p
          className="rise mt-7 max-w-xl font-serif text-lg leading-relaxed text-chalk-dim"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Without fit, even the richest man in the finest vicuña-cashmere blend
          suit comes across more as a rube than a rake. Short of having a suit
          custom made to your measurements, any off-the-rack purchase will have
          fit issues: making it fit perfectly takes a few alterations.
        </p>
      </section>

      {/* The three alterations, chalk-marked */}
      <section aria-labelledby="three" className="ledger on-paper relative mt-16">
        <div className="ledger-margin left-6 sm:left-16 lg:left-24" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="pl-8 sm:pl-16 lg:pl-24">
            <Reveal>
              <h2 id="three" className="rowline-sm text-[length:var(--text-sec)] text-ink">
                The three alterations every suit <em>needs.</em>
              </h2>
              <p className="chalk-note mt-4">marked in chalk, pressed out with steam</p>
            </Reveal>

            <div className="mt-12 grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
              <div>
                {suitAlterations.map((item, i) => (
                  <Reveal key={item.n} delay={i * 100}>
                    <article className="relative border-b border-ink/15 py-8 first:pt-0 last:border-b-0">
                      <span
                        aria-hidden
                        className="absolute -left-8 top-8 font-serif text-lg font-semibold text-ledger-red first:top-0 sm:-left-12"
                      >
                        {item.n}.
                      </span>
                      <div className="flex items-start gap-5">
                        <item.mark className="mt-1 h-9 w-9 flex-none text-ledger-red/80" />
                        <div>
                          <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
                          <p className="mt-3 max-w-xl font-serif leading-relaxed text-ink-soft">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={150} className="hidden lg:block">
                <figure>
                  <div className="reveal-mask overflow-hidden">
                    <Image
                      src={fittingSuit}
                      alt={`${site.owner} pinning the shoulder of a client's suit jacket`}
                      sizes="(min-width: 1024px) 26vw, 0px"
                      className="garment"
                    />
                  </div>
                  <figcaption className="tape mt-3 text-ink-soft">
                    Marking up at the shop
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Women's & bridal */}
      <section id="bridal" aria-labelledby="womens-alterations" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8">
        <Reveal className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <figure>
            <div className="reveal-mask"><div className="print -rotate-[0.7deg]">
              <Image
                src={bridalFitting}
                alt="Bride at the mirror while her wedding gown is fitted"
                sizes="(min-width: 1024px) 34vw, calc(100vw - 2.5rem)"
                className="garment"
              />
            </div></div>
            <figcaption className="chalk-note mt-4">
              свадебное платье · the wedding gown
            </figcaption>
          </figure>
          <div>
            <h2 id="womens-alterations" className="rowline-sm text-[length:var(--text-sec)] text-chalk">
              Women&rsquo;s clothes <em>alterations.</em>
            </h2>
            <div className="mt-7 max-w-xl space-y-5 font-serif leading-relaxed text-chalk-dim">
              <p>
                Many gowns need at least some sort of alteration, and your needs
                can vary greatly depending on where you got your gown and how many
                changes need to be made. With expectations in order and the right
                seamstress or tailor, you&rsquo;ll be ready for your wedding day
                with a gown that fits flawlessly.
              </p>
              <p className="font-medium text-chalk">
                No matter where you purchased your gown or dress, you can bring it
                to us to ensure that perfect fit. The premier alterations house,
                Russian Tailor is where a dress becomes your dream gown.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Motto, woven */}
      <section aria-labelledby="motto">
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <Reveal>
            <WovenLabel className="mx-auto max-w-3xl text-center">
              <h2 id="motto" className="tape text-gold">
                Our motto
              </h2>
              <p className="woven-text mt-5 text-[length:var(--text-head)] leading-snug">
                Excellent quality, efficient service, superb workmanship, and
                great value.
              </p>
              <p className="tape mt-6 text-gold">
                Our mission: real solutions to ill-fitting off-the-rack clothing,
                for all
              </p>
            </WovenLabel>
          </Reveal>
        </div>
      </section>

      {/* Close */}
      <section className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal>
              <h2 className="rowline-sm text-[length:var(--text-sec)] text-chalk">
                Bring it <em>in.</em>
              </h2>
              <p className="mt-6 max-w-lg font-serif leading-relaxed text-chalk-dim">
                We strive to provide clothing of top-notch quality at very
                reasonable prices and excellent customer service. We also offer
                bespoke custom, made to measure, customized off the rack, and
                favourite-clothing replication services.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={site.phoneHref}
                  className="tape border border-gold px-6 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-green-deep"
                >
                  Call {site.phone} to book
                </a>
                <Link
                  href="/custom-tailoring"
                  className="font-serif italic text-chalk underline decoration-gold/50 underline-offset-4 hover:text-gold-bright"
                >
                  Custom tailoring
                </Link>
              </div>
            </Reveal>
            <Reveal delay={130}>
              <div className="grid grid-cols-2 items-start gap-5">
                <div className="reveal-mask"><div className="print -rotate-[0.7deg]">
                  <Image
                    src={irinaCutting}
                    alt={`${site.owner} cutting cloth at the worktable`}
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    className="garment"
                  />
                </div></div>
                <div className="reveal-mask mt-10"><div className="print rotate-[0.9deg]">
                  <Image
                    src={weddingCouple}
                    alt="Wedding bouquet in focus, a couple beyond"
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    className="garment"
                  />
                </div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
