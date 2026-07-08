import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import jacketGold from "@/public/images/jacket-gold.jpg";
import jacketPlaidBlue from "@/public/images/jacket-plaid-blue.jpg";
import suitDark from "@/public/images/suit-dark.jpg";
import womensDressSuit from "@/public/images/womens-dress-suit.jpg";
import womensSuitRed from "@/public/images/womens-suit-red.jpg";
import shirtBlue from "@/public/images/shirt-blue.jpg";
import shirtsBurgundy from "@/public/images/shirts-burgundy.jpg";
import shirtRack from "@/public/images/shirt-rack.jpg";

export const metadata: Metadata = {
  title: "Custom Tailoring — Suits, Shirts & Dresses",
  description:
    "Bespoke custom, made to measure, and customized off-the-rack tailoring in Victoria, BC. A thousand fabrics including Holland & Sherry, Dormeuil, and MARZONI.",
};

const fabricHouses = [
  "MARZONI",
  "Holland & Sherry",
  "Dormeuil",
  "United Silk & Woolens",
  "Hersh Rostex",
  "Mayfair Fabrics",
];

export default function CustomTailoringPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="label rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Custom tailoring
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-display text-[length:var(--text-hero)] leading-[1.05] tracking-tight"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Suits, shirts &amp; dresses,{" "}
          <em className="font-light text-thread-deep">made to measure</em>
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Bespoke custom, made to measure, customized off the rack, and
          favourite-clothing replication — with a thousand fabrics to choose from.
        </p>
      </section>

      {/* Men's */}
      <section aria-labelledby="mens" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-start gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <h2
              id="mens"
              className="font-display text-[length:var(--text-title)] leading-tight"
            >
              Custom made men&rsquo;s clothes
            </h2>
            <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-ink-soft">
              <p>
                Men who walk confidently through the world have discovered a
                secret: they have found a custom tailor who combines exceptional
                quality and service. Their wardrobe is a perfect fit, tailored with
                the finest in custom shirts, men&rsquo;s suits, slacks, jackets,
                vests, and tuxedos.
              </p>
              <p className="font-medium text-ink">Now that pleasure can be yours.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={suitDark}
              alt="Custom tailored dark suit with pocket square"
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="border border-line"
            />
            <Image
              src={jacketPlaidBlue}
              alt="Custom blue plaid sport jacket"
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="mt-10 border border-line"
            />
          </div>
        </Reveal>
      </section>

      {/* Fabric houses */}
      <section aria-labelledby="fabrics" className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 id="fabrics" className="label">
              <span className="text-paper/70">A thousand fabrics</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-paper/80">
              We offer a thousand fabrics for custom tailoring, from houses
              including:
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {fabricHouses.map((house) => (
                <li key={house} className="font-display text-2xl italic sm:text-3xl">
                  {house}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Women's */}
      <section aria-labelledby="womens" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <Image
              src={womensSuitRed}
              alt="Red pinstripe women's pantsuit"
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="mt-10 border border-line"
            />
            <Image
              src={womensDressSuit}
              alt="Grey women's dress suit shown front and back"
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="border border-line"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2
              id="womens"
              className="font-display text-[length:var(--text-title)] leading-tight"
            >
              Custom made women&rsquo;s clothes
            </h2>
            <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-ink-soft">
              <p>
                Design your own clothing — from women&rsquo;s business suits and
                custom women&rsquo;s suits to custom-tailored women&rsquo;s dress
                shirts. Dresses, dress suits, pant suits, skirt suits, and more.
              </p>
              <p>
                Custom tailored bridal dresses, skirt suits, pantsuits, blazers,
                shirts, dresses, and evening wear — fully customized to individual
                tastes.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Made to measure shirts */}
      <section aria-labelledby="shirts" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2
              id="shirts"
              className="font-display text-[length:var(--text-title)] leading-tight"
            >
              Made to measure shirts
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              Be better with fitted dress shirts and slim-fit dress shirts custom
              made for you.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            <Image
              src={shirtBlue}
              alt="Light blue made-to-measure shirt with contrast double collar"
              sizes="(min-width: 768px) 30vw, 45vw"
              className="border border-line"
            />
            <Image
              src={shirtsBurgundy}
              alt="Burgundy band-collar shirts with red trim and monogrammed cuffs"
              sizes="(min-width: 768px) 30vw, 45vw"
              className="border border-line"
            />
            <Image
              src={shirtRack}
              alt="Rack of finished custom shirts in stripes and solids"
              sizes="(min-width: 768px) 30vw, 45vw"
              className="col-span-2 border border-line md:col-span-1"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-display text-[length:var(--text-title)] leading-tight">
              Start with a conversation
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              To book an appointment, call us at{" "}
              <a href={site.phoneHref} className="stitch-link font-medium text-ink">
                {site.phone}
              </a>{" "}
              — or send a note and we&rsquo;ll get back to you as soon as possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.phoneHref}
                className="bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-thread-deep"
              >
                Call {site.phone}
              </a>
              <Link href="/contact" className="stitch-link font-medium">
                Send a message
              </Link>
            </div>
          </div>
          <Image
            src={jacketGold}
            alt="Custom tailored tan jacket with patterned tie and pocket square"
            sizes="(min-width: 1024px) 30vw, calc(100vw - 2.5rem)"
            className="border border-line"
          />
        </Reveal>
      </section>
    </>
  );
}
