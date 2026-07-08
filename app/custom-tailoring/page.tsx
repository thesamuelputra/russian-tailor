import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import jacketGold from "@/public/images/jacket-gold.jpg";
import jacketPlaidBlue from "@/public/images/jacket-plaid-blue.jpg";
import suitDark from "@/public/images/suit-dark.jpg";
import womensDressSuit from "@/public/images/womens-dress-suit.jpg";
import womensSuitRed from "@/public/images/womens-suit-red.jpg";
import shirtBlue from "@/public/images/shirt-blue.jpg";
import shirtsBurgundy from "@/public/images/shirts-burgundy.jpg";
import shirtRack from "@/public/images/shirt-rack.jpg";

export const metadata = pageMeta({
  title: "Custom Tailoring · Suits, Shirts & Dresses",
  description:
    "Bespoke custom, made to measure, and customized off-the-rack tailoring in Victoria, BC. A thousand fabrics including Holland & Sherry, Dormeuil, and MARZONI.",
  path: "/custom-tailoring",
});

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
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="folio rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Custom tailoring
        </p>
        <h1
          className="rowline rise mt-4 max-w-4xl text-[length:var(--text-display)] text-chalk"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Made to <em>measure.</em>
        </h1>
        <p
          className="rise mt-7 max-w-xl font-serif text-lg leading-relaxed text-chalk-dim"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Bespoke custom, made to measure, customized off the rack, and
          favourite-clothing replication: with a thousand fabrics to choose from.
        </p>
        <p
          className="chalk-note rise mt-6"
          style={{ "--stagger": 3 } as React.CSSProperties}
        >
          примерка · the fitting
        </p>
      </section>

      {/* i. Men's */}
      <section aria-labelledby="mens" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="folio">No. 1 / 3</p>
            <h2 id="mens" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-chalk">
              Custom made <em>men&rsquo;s clothes.</em>
            </h2>
            <div className="mt-7 max-w-xl space-y-5 font-serif leading-relaxed text-chalk-dim">
              <p>
                Men who walk confidently through the world have discovered a
                secret: they have found a custom tailor who combines exceptional
                quality and service. Their wardrobe is a perfect fit, tailored
                with the finest in custom shirts, men&rsquo;s suits, slacks,
                jackets, vests, and tuxedos.
              </p>
              <p className="font-medium text-chalk">
                Now that pleasure can be yours.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-start gap-5">
            <div className="reveal-mask"><div className="print rotate-[0.6deg]">
              <Image
                src={suitDark}
                alt="Custom tailored dark suit with pocket square"
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="garment"
              />
            </div></div>
            <div className="reveal-mask mt-10"><div className="print rotate-[0.9deg]">
              <Image
                src={jacketPlaidBlue}
                alt="Custom blue plaid sport jacket"
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="garment"
              />
            </div></div>
          </div>
        </Reveal>
      </section>

      {/* The cloth: a thousand fabrics */}
      <section aria-labelledby="fabrics" className="woven mx-5 sm:mx-8">
        <div className="mx-auto max-w-6xl py-6 text-center">
          <Reveal>
            <h2 id="fabrics" className="tape text-gold">
              A thousand fabrics for custom tailoring
            </h2>
            <ul className="mt-8 flex flex-wrap items-baseline justify-center gap-x-10 gap-y-4">
              {fabricHouses.map((house) => (
                <li
                  key={house}
                  className="woven-text text-2xl sm:text-3xl"
                >
                  {house}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ii. Women's */}
      <section aria-labelledby="womens" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="order-2 grid grid-cols-2 items-start gap-5 lg:order-1">
            <div className="reveal-mask mt-10"><div className="print rotate-[0.9deg]">
              <Image
                src={womensSuitRed}
                alt="Red pinstripe women's pantsuit"
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="garment"
              />
            </div></div>
            <div className="reveal-mask"><div className="print rotate-[0.6deg]">
              <Image
                src={womensDressSuit}
                alt="Grey women's dress suit shown front and back"
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="garment"
              />
            </div></div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="folio">No. 2 / 3</p>
            <h2 id="womens" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-chalk">
              Custom made <em>women&rsquo;s clothes.</em>
            </h2>
            <div className="mt-7 max-w-xl space-y-5 font-serif leading-relaxed text-chalk-dim">
              <p>
                Design your own clothing: from women&rsquo;s business suits and
                custom women&rsquo;s suits to custom-tailored women&rsquo;s dress
                shirts. Dresses, dress suits, pant suits, skirt suits, and more.
              </p>
              <p>
                Custom tailored bridal dresses, skirt suits, pantsuits, blazers,
                shirts, dresses, and evening wear, fully customized to individual
                tastes.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* iii. Made to measure shirts */}
      <section aria-labelledby="shirts" className="ledger on-paper relative">
        <div className="ledger-margin left-6 sm:left-16 lg:left-24" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="pl-8 sm:pl-16 lg:pl-24">
            <Reveal>
              <p className="folio">No. 3 / 3</p>
              <h2 id="shirts" className="rowline-sm mt-3 text-[length:var(--text-sec)] text-ink">
                Made to measure <em>shirts.</em>
              </h2>
              <p className="mt-6 max-w-xl font-serif leading-relaxed text-ink-soft">
                Be better with fitted dress shirts and slim-fit dress shirts
                custom made for you.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
              <figure className="reveal-frame relative overflow-hidden border border-ink/20">
                <Image
                  src={shirtBlue}
                  alt="Light blue made-to-measure shirt with contrast double collar"
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="garment"
                />
                <figcaption className="reveal-caption tape">Contrast double collar</figcaption>
              </figure>
              <figure className="reveal-frame relative overflow-hidden border border-ink/20">
                <Image
                  src={shirtsBurgundy}
                  alt="Burgundy band-collar shirts with red trim and monogrammed cuffs"
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="garment"
                />
                <figcaption className="reveal-caption tape">Monogrammed cuffs</figcaption>
              </figure>
              <figure className="reveal-frame relative col-span-2 overflow-hidden border border-ink/20 md:col-span-1">
                <Image
                  src={shirtRack}
                  alt="Rack of finished custom shirts in stripes and solids"
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="garment h-full object-cover"
                />
                <figcaption className="reveal-caption tape">The finished rack</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 className="rowline-sm text-[length:var(--text-sec)] text-chalk">
              Start with a <em>conversation.</em>
            </h2>
            <p className="mt-6 max-w-lg font-serif leading-relaxed text-chalk-dim">
              To book an appointment, call us at{" "}
              <a
                href={site.phoneHref}
                className="text-gold-bright underline decoration-gold/50 underline-offset-4"
              >
                {site.phone}
              </a>
              , or send a note and we&rsquo;ll get back to you as soon as
              possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={site.phoneHref}
                className="tape border border-gold px-6 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-green-deep"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="font-serif italic text-chalk underline decoration-gold/50 underline-offset-4 hover:text-gold-bright"
              >
                Send a message
              </Link>
            </div>
          </div>
          <div className="reveal-mask"><div className="print rotate-[0.6deg]">
            <Image
              src={jacketGold}
              alt="Custom tailored tan jacket with patterned tie and pocket square"
              sizes="(min-width: 1024px) 32vw, calc(100vw - 2.5rem)"
              className="garment"
            />
          </div></div>
        </Reveal>
      </section>
    </>
  );
}
