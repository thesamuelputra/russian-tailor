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
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <h1
          className="display rise text-center text-[length:clamp(2.4rem,9vw,8.5rem)]"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Made to Measure
        </h1>
        <p
          className="prose-journal rise mx-auto mt-8 max-w-md text-center"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Bespoke custom, made to measure, customized off the rack, and
          favourite-clothing replication: with a thousand fabrics to choose
          from.
        </p>
        <div
          className="rise mt-10 border-t border-line sm:mt-14"
          style={{ "--stagger": 2 } as React.CSSProperties}
          aria-hidden
        />
      </section>

      {/* Men's: text left, two placements right */}
      <section aria-labelledby="mens" className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5 lg:pt-16">
            <p className="caption">01</p>
            <h2 id="mens" className="head mt-4 text-[length:var(--text-head)]">
              Custom made men&rsquo;s clothes.
            </h2>
            <div className="prose-journal mt-6 max-w-md">
              <p>
                Men who walk confidently through the world have discovered a
                secret: they have found a custom tailor who combines exceptional
                quality and service. Their wardrobe is a perfect fit, tailored
                with the finest in custom shirts, men&rsquo;s suits, slacks,
                jackets, vests, and tuxedos.
              </p>
              <p>
                <strong>Now that pleasure can be yours.</strong>
              </p>
            </div>
          </Reveal>
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:col-span-7">
            <Reveal>
              <figure>
                <Image
                  src={suitDark}
                  alt="Custom tailored dark suit with pocket square"
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">Dark suiting.</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure className="sm:mt-14">
                <Image
                  src={jacketPlaidBlue}
                  alt="Custom blue plaid sport jacket"
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">A plaid sport jacket.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The cloth: a ruled register of houses */}
      <section aria-labelledby="fabrics" className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <Reveal className="border-y border-line py-10 text-center sm:py-12">
          <h2 id="fabrics" className="caps text-ink-faint">
            A thousand fabrics for custom tailoring
          </h2>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-baseline justify-center gap-x-10 gap-y-4">
            {fabricHouses.map((house) => (
              <li key={house} className="display text-xl tracking-[0.12em] sm:text-2xl">
                {house}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Women's: placements left, text right */}
      <section aria-labelledby="womens" className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 grid items-start gap-6 sm:grid-cols-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <figure className="sm:mt-14">
                <Image
                  src={womensSuitRed}
                  alt="Red pinstripe women's pantsuit"
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">A red pinstripe pantsuit.</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure>
                <Image
                  src={womensDressSuit}
                  alt="Grey women's dress suit shown front and back"
                  sizes="(min-width: 1024px) 28vw, 45vw"
                  className="photo w-full"
                />
                <figcaption className="caption mt-3">A dress suit, front and back.</figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={100} className="order-1 lg:order-2 lg:col-span-5 lg:pt-16">
            <p className="caption">02</p>
            <h2 id="womens" className="head mt-4 text-[length:var(--text-head)]">
              Custom made women&rsquo;s clothes.
            </h2>
            <div className="prose-journal mt-6 max-w-md">
              <p>
                Design your own clothing: from women&rsquo;s business suits and
                custom women&rsquo;s suits to custom-tailored women&rsquo;s
                dress shirts. Dresses, dress suits, pant suits, skirt suits, and
                more.
              </p>
              <p>
                Custom tailored bridal dresses, skirt suits, pantsuits, blazers,
                shirts, dresses, and evening wear, fully customized to
                individual tastes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Made to measure shirts */}
      <section aria-labelledby="shirts" className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <Reveal className="border-t border-line pt-6">
          <p className="caption">03</p>
          <h2 id="shirts" className="head mt-4 text-[length:var(--text-head)]">
            Made to measure shirts.
          </h2>
          <p className="prose-journal mt-4 max-w-md">
            Be better with fitted dress shirts and slim-fit dress shirts custom
            made for you.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
          <Reveal>
            <figure>
              <Image
                src={shirtBlue}
                alt="Light blue made-to-measure shirt with contrast double collar"
                sizes="(min-width: 768px) 30vw, 45vw"
                className="photo w-full"
              />
              <figcaption className="caption mt-3">A contrast double collar.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <figure className="md:mt-14">
              <Image
                src={shirtsBurgundy}
                alt="Burgundy band-collar shirts with red trim and monogrammed cuffs"
                sizes="(min-width: 768px) 30vw, 45vw"
                className="photo w-full"
              />
              <figcaption className="caption mt-3">Monogrammed cuffs.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={220} className="col-span-2 md:col-span-1">
            <figure>
              <Image
                src={shirtRack}
                alt="Rack of finished custom shirts in stripes and solids"
                sizes="(min-width: 768px) 30vw, 90vw"
                className="photo h-full w-full object-cover"
              />
              <figcaption className="caption mt-3">The finished rack.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-6xl px-5 pb-28 sm:mt-32 sm:px-8 sm:pb-36">
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5 lg:pt-10">
            <h2 className="head text-[length:var(--text-head)]">
              Start with a conversation.
            </h2>
            <p className="prose-journal mt-6 max-w-md">
              To book an appointment, call us at{" "}
              <a href={site.phoneHref} className="link-quiet">
                {site.phone}
              </a>
              , or send a note and we&rsquo;ll get back to you as soon as
              possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={site.phoneHref} className="caps btn-line">
                Call {site.phone}
              </a>
              <Link href="/contact" className="link-quiet text-sm">
                Send a message
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <figure>
              <Image
                src={jacketGold}
                alt="Custom tailored tan jacket with patterned tie and pocket square"
                sizes="(min-width: 1024px) 45vw, calc(100vw - 2.5rem)"
                className="photo w-full"
              />
              <figcaption className="caption mt-3">
                A tan jacket, tie, and pocket square.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}
