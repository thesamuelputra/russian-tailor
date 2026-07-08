import type { Metadata, Viewport } from "next";
import { Besley, Archivo, Caveat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const besley = Besley({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-besley",
});

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://russian-tailor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Custom Tailoring & Expert Alterations in Victoria, BC`,
    template: `%s — ${site.name}`,
  },
  description:
    "Custom tailoring and expert alterations in downtown Victoria, BC. Master tailor Irina Sitonin: suits, shirts, bridal gowns, and formal wear. Call 250-388-5543 to book.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#16241c",
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
    <html
      lang="en-CA"
      className={`${besley.variable} ${archivo.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Marks JS as live before first paint; .reveal only hides under html.js */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-gold focus:px-4 focus:py-2 focus:text-green-deep"
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
