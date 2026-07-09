import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
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
    title: "Her grandmother's lessons.",
    body: "Growing up in St. Petersburg, Russia, Irina was taught to sew by her grandmother before she was five. By the fifth grade in Russian public school, she was taking sewing lessons twice a week.",
    offset: "",
  },
  {
    title: "Sewing college.",
    body: "By Grade 8, she had attended sewing college in St. Petersburg and finished her high school education over the same four-year period.",
    offset: "sm:ml-[10%]",
  },
  {
    title: "The apprenticeship.",
    body: "She went on to apprentice under a master tailor at a clothing manufacturer in St. Petersburg: a creative and discerning eye, trained the old way.",
    offset: "sm:ml-[20%]",
  },
  {
    title: "View Street.",
    body: "The premises of The Russian Tailor, situated at the corner of View and Government Street, is the culmination of Irina Sitonin's lifetime of experience. Her lifelong dream, realized.",
    offset: "sm:ml-[30%]",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <h1
          className="display rise text-center text-[length:clamp(2.6rem,10.5vw,9.5rem)]"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Irina Sitonin
        </h1>
        <p
          className="caps rise mt-6 pl-[0.24em] text-center text-ink-faint"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Master tailor · Trained in St.&nbsp;Petersburg
        </p>
        <div
          className="rise mt-10 border-t border-line sm:mt-14"
          style={{ "--stagger": 2 } as React.CSSProperties}
          aria-hidden
        />
      </section>

      {/* Journal spread: portrait right, opening text left */}
      <section className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div
            className="rise order-2 lg:order-1 lg:col-span-5 lg:pt-20"
            style={{ "--stagger": 3 } as React.CSSProperties}
          >
            <h2 className="head text-[length:var(--text-head)]">
              A lifetime of craft.
            </h2>
            <div className="prose-journal mt-6 max-w-md">
              <p>
                Come visit Irina&rsquo;s shop, where she specializes in
                alterations, custom-designed bridal and formal gowns, suits, and
                shirts. She is delighted to share her gift and passion for
                tailoring beautiful custom clothing with her clients.
              </p>
              <p>
                Irina&rsquo;s business, the Russian Tailor, is the culmination
                of a lifetime of experience, a creative and discerning eye and a
                love of quality apparel.
              </p>
            </div>
          </div>
          <figure
            className="rise order-1 lg:order-2 lg:col-span-7"
            style={{ "--stagger": 2 } as React.CSSProperties}
          >
            <Image
              src={irinaShop}
              alt={`${site.owner} at the counter of her lamplit shop, garments and fitting rails behind her`}
              priority
              sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
              className="photo w-full"
            />
            <figcaption className="caption mt-3">
              {`Above: ${site.owner} in the shop at № 203, 612 View Street.`}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The chapters, staggered down the page like a journal */}
      <section
        aria-labelledby="chapters"
        className="mx-auto mt-20 max-w-6xl px-5 sm:mt-36 sm:px-8"
      >
        <Reveal className="border-t border-line pt-6">
          <h2 id="chapters" className="caps text-ink-faint">
            From St.&nbsp;Petersburg to Victoria
          </h2>
        </Reveal>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 sm:space-y-20">
          {chapters.map((ch) => (
            <Reveal key={ch.title} className={ch.offset}>
              <article className="max-w-md">
                <h3 className="head text-2xl">{ch.title}</h3>
                <p className="prose-journal mt-4">{ch.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Her word */}
      <section aria-labelledby="her-word" className="mx-auto mt-20 max-w-6xl px-5 sm:mt-36 sm:px-8">
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
            <footer className="caps mt-8 pl-[0.24em] text-ink-faint">
              Irina Sitonin · Master tailor
            </footer>
          </blockquote>
        </Reveal>
      </section>

      {/* At the table */}
      <section className="mx-auto mt-20 max-w-6xl px-5 pb-28 sm:mt-36 sm:px-8 sm:pb-36">
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-14">
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:col-span-7">
            <Reveal>
              <figure>
                <Image
                  src={irinaCutting}
                  alt={`${site.owner} cutting suiting cloth at the worktable`}
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">At the worktable.</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure className="sm:mt-12">
                <Image
                  src={fittingSuit}
                  alt={`${site.owner} pinning the shoulder of a client's suit jacket`}
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">Marking up a fitting.</figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9 lg:pt-16">
            <h2 className="head text-[length:var(--text-head)]">
              See it for yourself.
            </h2>
            <p className="prose-journal mt-6">
              Visit Irina and experience for yourself the artistry that an
              expert tailor can bring to your wardrobe.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={site.phoneHref} className="caps btn-line">
                Call {site.phone}
              </a>
              <Link href="/contact" className="link-quiet text-sm">
                Hours &amp; directions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
