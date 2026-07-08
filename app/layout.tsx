import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://russian-tailor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Custom Tailoring & Expert Alterations in Victoria, BC`,
    template: `%s — ${site.name}`,
  },
  description:
    "Custom tailoring and expert alterations in downtown Victoria, BC. Master tailor Irina Sitonin — suits, shirts, bridal gowns, and formal wear. Call 250-388-5543 to book.",
  keywords: [
    "tailor Victoria BC",
    "clothing alterations Victoria",
    "wedding dress alterations Victoria",
    "custom suits Victoria BC",
    "The Russian Tailor",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Custom Tailoring & Expert Alterations in Victoria, BC`,
    description:
      "Master tailor Irina Sitonin. Suits, shirts, bridal gowns, and formal wear — made to fit, in downtown Victoria.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ea",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Custom tailoring and expert clothing alterations: suits, shirts, dresses, coats, pants, bridal and wedding dresses, prom, grad, evening, and formal wear.",
  url: siteUrl,
  telephone: "+1-250-388-5543",
  email: site.email,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: "203 – 612 View Street",
    addressLocality: "Victoria",
    addressRegion: "BC",
    postalCode: "V8W 1J5",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "17:30",
    },
  ],
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
