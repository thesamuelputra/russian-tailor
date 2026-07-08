import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import irinaShop from "@/public/images/irina-shop.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import fittingSuit from "@/public/images/fitting-suit.jpg";

export const metadata: Metadata = {
  title: "About Irina Sitonin",
  description:
    "Master tailor Irina Sitonin was taught to sew in St. Petersburg before she was five. Her Victoria shop is the culmination of a lifetime of tailoring experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="label rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          The tailor
        </p>
        <h1
          className="rise mt-6 max-w-3xl font-display text-[length:var(--text-hero)] leading-[1.05] tracking-tight"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          A lifetime of craft,{" "}
          <em className="font-light text-thread-deep">from St. Petersburg to View Street</em>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div
          className="rise grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          <figure>
            <Image
              src={irinaShop}
              alt={`${site.owner} at the counter of her shop, garments and fitting rails behind her`}
              priority
              sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
              className="border border-line"
            />
            <figcaption className="mt-2 text-xs text-ink-soft">
              {site.owner} in her shop {site.corner}.
            </figcaption>
          </figure>
          <div className="space-y-5 leading-relaxed text-ink-soft">
            <p>
              The premises of &ldquo;The Russian Tailor&rdquo;, situated{" "}
              {site.corner}, is the culmination of {site.owner}&rsquo;s lifetime of
              experience.
            </p>
            <p>
              Come visit Irina&rsquo;s shop, where she specializes in alterations,
              custom-designed bridal and formal gowns, suits, and shirts.
              Her lifelong dream has been realized in her tailoring business, in
              which she is delighted to share her gift and passion for tailoring
              beautiful custom clothing with her clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={irinaCutting}
                  alt={`${site.owner} cutting suiting fabric at her worktable, measuring tape around her neck`}
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="border border-line"
                />
                <Image
                  src={fittingSuit}
                  alt={`${site.owner} pinning the shoulder of a client's suit jacket during a fitting`}
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="mt-10 border border-line"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <h2 className="font-display text-[length:var(--text-title)] leading-tight">
                Taught by her grandmother, before she was five
              </h2>
              <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Growing up in St.&nbsp;Petersburg, Russia, Irina was taught to sew
                  by her grandmother before she was five. By the fifth grade in
                  Russian public school, she was taking sewing lessons twice a week.
                  By Grade&nbsp;8, she had attended sewing college in
                  St.&nbsp;Petersburg and finished her high school education over
                  the same four-year period.
                </p>
                <p>
                  She went on to apprentice under a master tailor at a clothing
                  manufacturer in St.&nbsp;Petersburg. Her business, the
                  &ldquo;Russian Tailor&rdquo;, is the culmination of a lifetime of
                  experience, a creative and discerning eye, and a love of quality
                  apparel.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <blockquote className="max-w-3xl">
            <p className="font-display text-[length:var(--text-subtitle)] leading-snug">
              <span aria-hidden className="mr-1 text-thread">
                &ldquo;
              </span>
              This work is my love, my life. And I like people. Seeing all the
              customers, brides and bridesmaids so happy and excited is such a
              great thing.
              <span aria-hidden className="ml-1 text-thread">
                &rdquo;
              </span>
            </p>
            <footer className="mt-4 text-ink-soft">
              — the vivacious red-headed Irina
            </footer>
          </blockquote>
        </Reveal>
        <Reveal delay={120}>
          <div className="stitch-rule mt-14 mb-10" aria-hidden />
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Visit Irina and experience for yourself the artistry that an expert
            tailor can bring to your wardrobe.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.phoneHref}
              className="bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-thread-deep"
            >
              Call {site.phone} to book
            </a>
            <Link href="/contact" className="stitch-link font-medium">
              Hours &amp; directions
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
