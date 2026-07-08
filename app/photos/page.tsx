import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/meta";
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

export const metadata = pageMeta({
  title: "Photo Gallery",
  description:
    "Photos from The Russian Tailor in Victoria, BC: the shop, fittings in progress, custom menswear and womenswear, and made-to-measure shirt details.",
  path: "/photos",
});

type GallerySection = {
  id: string;
  numeral: string;
  title: React.ReactNode;
  note?: string;
  photos: { src: StaticImageData; alt: string; note: string }[];
};

const sections: GallerySection[] = [
  {
    id: "in-the-shop",
    numeral: "i.",
    title: (
      <>
        In the <em>shop.</em>
      </>
    ),
    note: "Fittings and work in progress on View Street.",
    photos: [
      { src: irinaShop, alt: `${site.owner} at the counter of The Russian Tailor`, note: "The counter" },
      { src: fittingSuit, alt: `${site.owner} pinning a client's suit jacket during a fitting`, note: "Marking up" },
      { src: irinaCutting, alt: `${site.owner} cutting suiting fabric at the worktable`, note: "At the table" },
      { src: bridalFitting, alt: "Bride at the mirror during a wedding gown fitting", note: "Bridal fitting" },
    ],
  },
  {
    id: "menswear",
    numeral: "ii.",
    title: (
      <>
        Men&rsquo;s <em>tailoring.</em>
      </>
    ),
    photos: [
      { src: suitNavy, alt: "Navy pinstripe suit with pocket square", note: "Navy pinstripe" },
      { src: suitDark, alt: "Dark suit with patterned tie", note: "Dark suiting" },
      { src: jacketGold, alt: "Tan jacket with grey pocket square", note: "Tan jacket" },
      { src: jacketPlaidBlue, alt: "Blue plaid sport jacket with khaki trousers", note: "Blue plaid" },
      { src: jacketPlaidGrey, alt: "Grey plaid sport jacket", note: "Grey plaid" },
      { src: blazerBlue, alt: "Blue blazer over a pink shirt", note: "Blazer" },
      { src: tweedOvercoat, alt: "Brown tweed three-piece suit with matching overcoat", note: "Tweed, three-piece" },
    ],
  },
  {
    id: "womenswear",
    numeral: "iii.",
    title: (
      <>
        Women&rsquo;s &amp; <em>occasion.</em>
      </>
    ),
    photos: [
      { src: womensDressSuit, alt: "Grey dress suit shown front and back", note: "Dress suit" },
      { src: womensSuitRed, alt: "Red pinstripe pantsuit", note: "Red pinstripe" },
      { src: womensVestSuit, alt: "Black vest suit with white piping", note: "Vest suit" },
      { src: womensBlazer, alt: "Black blazer suit with white shirt", note: "Black blazer" },
      { src: womensPantsuitWhite, alt: "White wide-leg pantsuit with sequined top", note: "White pantsuit" },
      { src: dressGrey, alt: "Grey cocktail dress", note: "Cocktail dress" },
      { src: dressesTrio, alt: "Three fitted dresses in white, print, and orange", note: "Fitted dresses" },
      { src: dressPalm, alt: "Blue palm-print dress with matching jacket", note: "Palm print" },
      { src: promGroup, alt: "A group in prom and grad dresses of many styles", note: "Prom and grad" },
      { src: weddingCouple, alt: "Wedding bouquet in focus with a couple beyond", note: "The day itself" },
    ],
  },
  {
    id: "shirt-details",
    numeral: "iv.",
    title: (
      <>
        Made to measure, <em>up close.</em>
      </>
    ),
    note: "Collar, cuff, and monogram details from made-to-measure shirts.",
    photos: [
      { src: shirtRack, alt: "Rack of finished custom shirts in stripes and solids", note: "The rack" },
      { src: shirtBlue, alt: "Light blue shirt with contrast double collar", note: "Double collar" },
      { src: shirtPurple, alt: "Purple shirt with floral-lined collar", note: "Floral lining" },
      { src: shirtsBurgundy, alt: "Burgundy band-collar shirts with monogrammed cuffs", note: "Band collar" },
      { src: shirtCufflink, alt: "White French cuff with monogram and cufflink", note: "French cuff" },
      { src: shirtCuffWhite, alt: "White shirt cuff with red-striped lining", note: "Striped lining" },
    ],
  },
];

export default function PhotosPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="folio rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          The archive
        </p>
        <h1
          className="rowline rise mt-4 max-w-3xl text-[length:var(--text-display)] text-chalk"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          The work, <em>up close.</em>
        </h1>
      </section>

      <div className="mx-auto max-w-7xl px-5 pt-4 pb-20 sm:px-8">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id} className="mt-16">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="folio">{section.numeral}</span>
                <h2
                  id={section.id}
                  className="rowline-sm text-[length:var(--text-sec)] text-chalk"
                >
                  {section.title}
                </h2>
              </div>
              {section.note && (
                <p className="mt-3 font-serif text-sm italic text-chalk-dim">
                  {section.note}
                </p>
              )}
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 columns-2 gap-5 md:columns-3 [&>figure]:mb-5 [&>figure]:break-inside-avoid">
                {section.photos.map((photo) => (
                  <figure
                    key={photo.alt}
                    className="reveal-frame relative overflow-hidden border border-gold/25"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="garment"
                    />
                    <figcaption className="reveal-caption tape">{photo.note}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </section>
        ))}

        <Reveal>
          <div className="chalk-stroke mt-20 mb-10" aria-hidden />
          <p className="max-w-xl font-serif text-lg leading-relaxed text-chalk-dim">
            Like what you see? Call{" "}
            <a
              href={site.phoneHref}
              className="text-gold-bright underline decoration-gold/50 underline-offset-4"
            >
              {site.phone}
            </a>{" "}
            to book an appointment.
          </p>
        </Reveal>
      </div>
    </>
  );
}
