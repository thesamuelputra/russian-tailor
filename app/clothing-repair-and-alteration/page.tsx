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
    "Expert clothing alterations in Victoria, BC: suits, wedding and bridal gowns, prom and formal dresses. The premier alterations house where a dress becomes your dream gown.",
  path: "/clothing-repair-and-alteration",
});

const suitAlterations = [
  {
    n: "01",
    title: "Sleeves shortened.",
    body: "Many off-the-rack suits have sleeves that are many inches too long. Ideally, you should allow 1/4″ to 1/2″ of shirt cuff (known as “linen”) to show when you rest your hands at your side. For most people, the jacket should end at the bump on the pinky side of your wrist, where your arm meets your hand.",
  },
  {
    n: "02",
    title: "Pants hemmed.",
    body: "Normally, pants on off-the-rack suits are unfinished and run about 38″ long: too long for anyone to wear. You must have these hemmed.",
  },
  {
    n: "03",
    title: "The waist and seat.",
    body: "Here you have a little wiggle room. Manufacturers often leave a seam allowance in both the waist and seat so they can be let out for more room; having them taken in is no issue either. Just make sure they sit on your waist. These are not jeans, don’t wear them the same way.",
  },
];

export default function AlterationsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <h1
          className="display rise text-center text-[length:clamp(2.6rem,10.5vw,9.5rem)]"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Alterations
        </h1>
        <p
          className="prose-journal rise mx-auto mt-8 max-w-md text-center"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Without fit, even the richest man in the finest vicuña-cashmere blend
          suit comes across more as a rube than a rake. Short of having a suit
          custom made to your measurements, any off-the-rack purchase will have
          fit issues: making it fit perfectly takes a few alterations.
        </p>
        <div
          className="rise mt-10 border-t border-line sm:mt-14"
          style={{ "--stagger": 2 } as React.CSSProperties}
          aria-hidden
        />
      </section>

      {/* The three alterations, entered as a journal list */}
      <section aria-labelledby="three" className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
        <Reveal>
          <h2 id="three" className="head text-[length:var(--text-head)]">
            The three alterations every suit needs.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            {suitAlterations.map((item, i) => (
              <Reveal key={item.n} delay={i * 100}>
                <article className="border-t border-line py-8 first:border-t-0 first:pt-0">
                  <div className="grid gap-3 sm:grid-cols-[4rem_1fr]">
                    <p className="caption pt-1.5">{item.n}</p>
                    <div>
                      <h3 className="head text-2xl">{item.title}</h3>
                      <p className="prose-journal mt-3 max-w-md">{item.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <figure>
              <Image
                src={fittingSuit}
                alt={`${site.owner} pinning the shoulder of a client's suit jacket`}
                sizes="(min-width: 1024px) 30vw, 0px"
                className="photo w-full"
              />
              <figcaption className="caption mt-3">
                Above: marking up a jacket at the shop.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Women's & bridal */}
      <section
        id="bridal"
        aria-labelledby="womens-alterations"
        className="mx-auto mt-24 max-w-6xl scroll-mt-16 px-5 sm:mt-32 sm:px-8"
      >
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <figure>
              <Image
                src={bridalFitting}
                alt="Bride at the mirror while her wedding gown is fitted"
                sizes="(min-width: 1024px) 45vw, calc(100vw - 2.5rem)"
                className="photo w-full"
              />
              <figcaption className="caption mt-3">
                Above: a wedding gown at its fitting.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-16">
            <h2 id="womens-alterations" className="head text-[length:var(--text-head)]">
              Women&rsquo;s clothes alterations.
            </h2>
            <div className="prose-journal mt-6 max-w-md">
              <p>
                Many gowns need at least some sort of alteration, and your needs
                can vary greatly depending on where you got your gown and how
                many changes need to be made. With expectations in order and the
                right seamstress or tailor, you&rsquo;ll be ready for your
                wedding day with a gown that fits flawlessly.
              </p>
              <p>
                <strong>
                  No matter where you purchased your gown or dress, you can
                  bring it to us to ensure that perfect fit. The premier
                  alterations house, Russian Tailor is where a dress becomes
                  your dream gown.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Motto */}
      <section aria-labelledby="motto" className="mx-auto mt-28 max-w-6xl px-5 sm:mt-36 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="motto" className="caps text-ink-faint">
            Our motto
          </h2>
          <p className="quote mt-8 text-[length:var(--text-quote)]">
            Excellent quality, efficient service, superb workmanship, and great
            value.
          </p>
          <p className="caption mt-8">
            Our mission: real solutions to ill-fitting off-the-rack clothing,
            for all.
          </p>
        </Reveal>
      </section>

      {/* Close */}
      <section className="mx-auto mt-28 max-w-6xl px-5 pb-28 sm:mt-36 sm:px-8 sm:pb-36">
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5 lg:pt-10">
            <h2 className="head text-[length:var(--text-head)]">Bring it in.</h2>
            <p className="prose-journal mt-6 max-w-md">
              We strive to provide clothing of top-notch quality at very
              reasonable prices and excellent customer service. We also offer
              bespoke custom, made to measure, customized off the rack, and
              favourite-clothing replication services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={site.phoneHref} className="caps btn-line">
                Call {site.phone}
              </a>
              <Link href="/custom-tailoring" className="link-quiet text-sm">
                Custom tailoring
              </Link>
            </div>
          </Reveal>
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <figure>
                <Image
                  src={irinaCutting}
                  alt={`${site.owner} cutting cloth at the worktable`}
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">At the worktable.</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <figure className="sm:mt-12">
                <Image
                  src={weddingCouple}
                  alt="Wedding bouquet in focus, a couple beyond"
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">The day itself.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
