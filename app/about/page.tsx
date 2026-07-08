import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WovenLabel } from "@/components/WovenLabel";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import irinaShop from "@/public/images/irina-shop.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import fittingSuit from "@/public/images/fitting-suit.jpg";

export const metadata = pageMeta({
  title: "About Irina Sitonin",
  description:
    "Master tailor Irina Sitonin was taught to sew in St. Petersburg before she was five. Her Victoria shop is the culmination of a lifetime of tailoring experience.",
  path: "/about",
});

const chapters = [
  {
    numeral: "i.",
    title: "Her grandmother's lessons",
    body: "Growing up in St. Petersburg, Russia, Irina was taught to sew by her grandmother before she was five. By the fifth grade in Russian public school, she was taking sewing lessons twice a week.",
  },
  {
    numeral: "ii.",
    title: "Sewing college",
    body: "By Grade 8, she had attended sewing college in St. Petersburg and finished her high school education over the same four-year period.",
  },
  {
    numeral: "iii.",
    title: "The apprenticeship",
    body: "She went on to apprentice under a master tailor at a clothing manufacturer in St. Petersburg: a creative and discerning eye, trained the old way.",
  },
  {
    numeral: "iv.",
    title: "View Street",
    body: "The premises of The Russian Tailor, situated at the corner of View and Government Street, is the culmination of Irina Sitonin's lifetime of experience. Her lifelong dream, realized.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="folio rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          The tailor
        </p>
        <h1
          className="rowline rise mt-4 max-w-4xl text-[length:var(--text-display)] text-chalk"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          A lifetime of <em>craft.</em>
        </h1>
        <p
          className="rise mt-7 max-w-xl font-serif text-lg leading-relaxed text-chalk-dim"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Come visit Irina&rsquo;s shop, where she specializes in alterations,
          custom-designed bridal and formal gowns, suits, and shirts. She is
          delighted to share her gift and passion for tailoring beautiful custom
          clothing with her clients.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div
          className="rise grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16"
          style={{ "--stagger": 3 } as React.CSSProperties}
        >
          <figure>
            <div className="print -rotate-1">
              <Image
                src={irinaShop}
                alt={`${site.owner} at the counter of her lamplit shop, garments and fitting rails behind her`}
                priority
                sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                className="settle"
              />
            </div>
            <figcaption className="tape mt-3 text-chalk-dim">
              {site.owner} · the shop on View Street
            </figcaption>
          </figure>
          <div className="lg:pt-8">
            <p className="chalk-note">ателье · atelier</p>
            <p className="mt-6 max-w-md font-serif leading-relaxed text-chalk-dim">
              &ldquo;Irina&rsquo;s business, the Russian Tailor, is the
              culmination of a lifetime of experience, a creative and discerning
              eye and a love of quality apparel.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The chapters, entered like a ledger */}
      <section aria-labelledby="chapters" className="ledger on-paper relative">
        <div className="ledger-margin left-6 sm:left-16 lg:left-24" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="pl-8 sm:pl-16 lg:pl-24">
            <Reveal>
              <h2 id="chapters" className="rowline-sm text-[length:var(--text-sec)] text-ink">
                From St. Petersburg to <em>Victoria.</em>
              </h2>
            </Reveal>
            <div className="mt-12 max-w-2xl">
              {chapters.map((ch, i) => (
                <Reveal key={ch.numeral} delay={i * 100}>
                  <article className="relative border-b border-ink/15 py-8 first:pt-0 last:border-b-0">
                    <span
                      aria-hidden
                      className="absolute -left-8 top-8 font-serif text-lg font-semibold italic text-ledger-red first:top-0 sm:-left-12"
                    >
                      {ch.numeral}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold">{ch.title}</h3>
                    <p className="mt-3 font-serif leading-relaxed text-ink-soft">
                      {ch.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The tailor's word, woven */}
      <section aria-labelledby="her-word">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 id="her-word" className="sr-only">
            In her words
          </h2>
          <Reveal>
            <WovenLabel className="mx-auto max-w-3xl text-center">
              <blockquote>
                <p className="woven-text text-[length:var(--text-head)] leading-snug">
                  &ldquo;This work is my love, my life. And I like people. Seeing
                  all the customers, brides and bridesmaids so happy and excited
                  is such a great thing.&rdquo;
                </p>
                <footer className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  <span className="chalk-note !rotate-0 text-gold-bright">Ирина</span>
                  <span className="tape text-gold">
                    the vivacious red-headed Irina
                  </span>
                </footer>
              </blockquote>
            </WovenLabel>
          </Reveal>
        </div>
      </section>

      {/* At the table */}
      <section className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div className="grid grid-cols-2 items-start gap-5">
              <Reveal>
                <div className="reveal-mask"><div className="print -rotate-1">
                  <Image
                    src={irinaCutting}
                    alt={`${site.owner} cutting suiting cloth at the worktable`}
                    sizes="(min-width: 1024px) 24vw, 45vw"
                    className="garment"
                  />
                </div></div>
              </Reveal>
              <Reveal delay={120}>
                <div className="reveal-mask mt-10"><div className="print rotate-[0.9deg]">
                  <Image
                    src={fittingSuit}
                    alt={`${site.owner} pinning the shoulder of a client's suit jacket`}
                    sizes="(min-width: 1024px) 24vw, 45vw"
                    className="garment"
                  />
                </div></div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h2 className="rowline-sm text-[length:var(--text-sec)] text-chalk">
                  See it for <em>yourself.</em>
                </h2>
                <p className="mt-6 max-w-md font-serif leading-relaxed text-chalk-dim">
                  Visit Irina and experience for yourself the artistry that an
                  expert tailor can bring to your wardrobe.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href={site.phoneHref}
                    className="tape border border-gold px-6 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-green-deep"
                  >
                    Call {site.phone} to book
                  </a>
                  <Link
                    href="/contact"
                    className="font-serif italic text-chalk underline decoration-gold/50 underline-offset-4 hover:text-gold-bright"
                  >
                    Hours &amp; directions
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
