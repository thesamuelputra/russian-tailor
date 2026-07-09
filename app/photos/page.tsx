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
  title: string;
  note?: string;
  photos: { src: StaticImageData; alt: string; note: string }[];
};

const sections: GallerySection[] = [
  {
    id: "in-the-shop",
    title: "In the shop",
    note: "Fittings and work in progress on View Street.",
    photos: [
      { src: irinaShop, alt: `${site.owner} at the counter of The Russian Tailor`, note: "The counter." },
      { src: fittingSuit, alt: `${site.owner} pinning a client's suit jacket during a fitting`, note: "Marking up." },
      { src: irinaCutting, alt: `${site.owner} cutting suiting fabric at the worktable`, note: "At the table." },
      { src: bridalFitting, alt: "Bride at the mirror during a wedding gown fitting", note: "A bridal fitting." },
    ],
  },
  {
    id: "menswear",
    title: "Men's tailoring",
    photos: [
      { src: suitNavy, alt: "Navy pinstripe suit with pocket square", note: "Navy pinstripe." },
      { src: suitDark, alt: "Dark suit with patterned tie", note: "Dark suiting." },
      { src: jacketGold, alt: "Tan jacket with grey pocket square", note: "A tan jacket." },
      { src: jacketPlaidBlue, alt: "Blue plaid sport jacket with khaki trousers", note: "Blue plaid." },
      { src: jacketPlaidGrey, alt: "Grey plaid sport jacket", note: "Grey plaid." },
      { src: blazerBlue, alt: "Blue blazer over a pink shirt", note: "A blazer." },
      { src: tweedOvercoat, alt: "Brown tweed three-piece suit with matching overcoat", note: "Tweed, three-piece." },
    ],
  },
  {
    id: "womenswear",
    title: "Women's & occasion",
    photos: [
      { src: womensDressSuit, alt: "Grey dress suit shown front and back", note: "A dress suit." },
      { src: womensSuitRed, alt: "Red pinstripe pantsuit", note: "Red pinstripe." },
      { src: womensVestSuit, alt: "Black vest suit with white piping", note: "A vest suit." },
      { src: womensBlazer, alt: "Black blazer suit with white shirt", note: "A black blazer." },
      { src: womensPantsuitWhite, alt: "White wide-leg pantsuit with sequined top", note: "A white pantsuit." },
      { src: dressGrey, alt: "Grey cocktail dress", note: "A cocktail dress." },
      { src: dressesTrio, alt: "Three fitted dresses in white, print, and orange", note: "Fitted dresses." },
      { src: dressPalm, alt: "Blue palm-print dress with matching jacket", note: "Palm print." },
      { src: promGroup, alt: "A group in prom and grad dresses of many styles", note: "Prom and grad." },
      { src: weddingCouple, alt: "Wedding bouquet in focus with a couple beyond", note: "The day itself." },
    ],
  },
  {
    id: "shirt-details",
    title: "Made to measure, up close",
    note: "Collar, cuff, and monogram details from made-to-measure shirts.",
    photos: [
      { src: shirtRack, alt: "Rack of finished custom shirts in stripes and solids", note: "The rack." },
      { src: shirtBlue, alt: "Light blue shirt with contrast double collar", note: "A double collar." },
      { src: shirtPurple, alt: "Purple shirt with floral-lined collar", note: "Floral lining." },
      { src: shirtsBurgundy, alt: "Burgundy band-collar shirts with monogrammed cuffs", note: "Band collars." },
      { src: shirtCufflink, alt: "White French cuff with monogram and cufflink", note: "A French cuff." },
      { src: shirtCuffWhite, alt: "White shirt cuff with red-striped lining", note: "Striped lining." },
    ],
  },
];

export default function PhotosPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <h1
          className="display rise text-center text-[length:clamp(2.6rem,10.5vw,9.5rem)]"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          The Archive
        </h1>
        <p
          className="caps rise mt-6 text-center text-ink-faint"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          The shop, the fittings, the finished work
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-28 sm:px-8 sm:pb-36">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id} className="mt-24 sm:mt-32">
            <Reveal className="flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-6">
              <h2 id={section.id} className="caps text-ink-faint">
                {section.title}
              </h2>
              {section.note && <p className="caption">{section.note}</p>}
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-10 columns-2 gap-6 md:columns-3 [&>figure]:mb-8 [&>figure]:break-inside-avoid">
                {section.photos.map((photo) => (
                  <figure key={photo.alt}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="photo-film w-full"
                    />
                    <figcaption className="caption mt-2.5">{photo.note}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </section>
        ))}

        <Reveal>
          <div className="mt-24 border-t border-line pt-10 text-center sm:mt-32">
            <p className="prose-journal mx-auto max-w-md">
              Like what you see? Call{" "}
              <a href={site.phoneHref} className="link-quiet">
                {site.phone}
              </a>{" "}
              to book an appointment.
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
}
