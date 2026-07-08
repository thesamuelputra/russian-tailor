import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import irinaShop from "@/public/images/irina-shop.jpg";
import irinaCutting from "@/public/images/irina-cutting.jpg";
import fittingSuit from "@/public/images/fitting-suit.jpg";
import bridalFitting from "@/public/images/bridal-fitting.jpg";
import suitNavy from "@/public/images/suit-navy.jpg";
import suitDark from "@/public/images/suit-dark.jpg";
import jacketGold from "@/public/images/jacket-gold.jpg";
import jacketPlaidBlue from "@/public/images/jacket-plaid-blue.jpg";
import jacketPlaidGrey from "@/public/images/jacket-plaid-grey.jpg";
import blazerBlue from "@/public/images/blazer-blue.jpg";
import tweedOvercoat from "@/public/images/tweed-overcoat.jpg";
import womensVestSuit from "@/public/images/womens-vest-suit.jpg";
import womensBlazer from "@/public/images/womens-blazer.jpg";
import womensPantsuitWhite from "@/public/images/womens-pantsuit-white.jpg";
import womensSuitRed from "@/public/images/womens-suit-red.jpg";
import womensDressSuit from "@/public/images/womens-dress-suit.jpg";
import dressGrey from "@/public/images/dress-grey.jpg";
import dressesTrio from "@/public/images/dresses-trio.jpg";
import dressPalm from "@/public/images/dress-palm.jpg";
import promGroup from "@/public/images/prom-group.jpg";
import weddingCouple from "@/public/images/wedding-couple.jpg";
import shirtRack from "@/public/images/shirt-rack.jpg";
import shirtBlue from "@/public/images/shirt-blue.jpg";
import shirtPurple from "@/public/images/shirt-purple.jpg";
import shirtsBurgundy from "@/public/images/shirts-burgundy.jpg";
import shirtCufflink from "@/public/images/shirt-cufflink.jpg";
import shirtCuffWhite from "@/public/images/shirt-cuff-white.jpg";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photos from The Russian Tailor in Victoria, BC — the shop, fittings in progress, custom menswear and womenswear, and made-to-measure shirt details.",
};

type GallerySection = {
  id: string;
  title: string;
  note?: string;
  photos: { src: StaticImageData; alt: string }[];
};

const sections: GallerySection[] = [
  {
    id: "in-the-shop",
    title: "In the shop",
    note: "Fittings and work in progress on View Street.",
    photos: [
      { src: irinaShop, alt: `${site.owner} at the counter of The Russian Tailor` },
      { src: fittingSuit, alt: `${site.owner} pinning a client's suit jacket during a fitting` },
      { src: irinaCutting, alt: `${site.owner} cutting suiting fabric at the worktable` },
      { src: bridalFitting, alt: "Bride at the mirror during a wedding gown fitting" },
    ],
  },
  {
    id: "menswear",
    title: "Menswear",
    photos: [
      { src: suitNavy, alt: "Navy pinstripe suit with pocket square" },
      { src: suitDark, alt: "Dark suit with patterned tie" },
      { src: jacketGold, alt: "Tan jacket with grey pocket square" },
      { src: jacketPlaidBlue, alt: "Blue plaid sport jacket with khaki trousers" },
      { src: jacketPlaidGrey, alt: "Grey plaid sport jacket" },
      { src: blazerBlue, alt: "Blue blazer over a pink shirt" },
      { src: tweedOvercoat, alt: "Brown tweed three-piece suit with matching overcoat" },
    ],
  },
  {
    id: "womenswear",
    title: "Womenswear & occasion",
    photos: [
      { src: womensDressSuit, alt: "Grey dress suit shown front and back" },
      { src: womensSuitRed, alt: "Red pinstripe pantsuit" },
      { src: womensVestSuit, alt: "Black vest suit with white piping" },
      { src: womensBlazer, alt: "Black blazer suit with white shirt" },
      { src: womensPantsuitWhite, alt: "White wide-leg pantsuit with sequined top" },
      { src: dressGrey, alt: "Grey cocktail dress" },
      { src: dressesTrio, alt: "Three fitted dresses in white, print, and orange" },
      { src: dressPalm, alt: "Blue palm-print dress with matching jacket" },
      { src: promGroup, alt: "A group in prom and grad dresses of many styles" },
      { src: weddingCouple, alt: "Wedding bouquet in focus with a couple beyond" },
    ],
  },
  {
    id: "shirt-details",
    title: "Made-to-measure details",
    note: "Collars, cuffs, and monograms from the shirt workshop.",
    photos: [
      { src: shirtRack, alt: "Rack of finished custom shirts in stripes and solids" },
      { src: shirtBlue, alt: "Light blue shirt with contrast double collar" },
      { src: shirtPurple, alt: "Purple shirt with floral-lined collar" },
      { src: shirtsBurgundy, alt: "Burgundy band-collar shirts with monogrammed cuffs" },
      { src: shirtCufflink, alt: "White French cuff with monogram and cufflink" },
      { src: shirtCuffWhite, alt: "White shirt cuff with red-striped lining" },
    ],
  },
];

export default function PhotosPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="label rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Gallery
        </p>
        <h1
          className="rise mt-6 max-w-3xl font-display text-[length:var(--text-hero)] leading-[1.05] tracking-tight"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          The work, <em className="font-light text-thread-deep">up close</em>
        </h1>
      </section>

      <div className="mx-auto max-w-6xl px-5 pt-6 pb-20 sm:px-8">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id} className="mt-14">
            <Reveal>
              <h2 id={section.id} className="label">
                {section.title}
              </h2>
              {section.note && (
                <p className="mt-3 text-sm text-ink-soft">{section.note}</p>
              )}
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 columns-2 gap-4 md:columns-3 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
                {section.photos.map((photo) => (
                  <figure key={photo.alt}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="border border-line"
                    />
                  </figure>
                ))}
              </div>
            </Reveal>
          </section>
        ))}

        <Reveal>
          <div className="stitch-rule mt-20 mb-10" aria-hidden />
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Like what you see? Call{" "}
            <a href={site.phoneHref} className="stitch-link font-medium text-ink">
              {site.phone}
            </a>{" "}
            to book an appointment.
          </p>
        </Reveal>
      </div>
    </>
  );
}
