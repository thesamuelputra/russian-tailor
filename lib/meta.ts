import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetaOpts = {
  /** Page title, run through the layout's "%s · The Russian Tailor" template. */
  title?: string;
  /** Full title used verbatim (for the home page). */
  absoluteTitle?: string;
  description: string;
  /** Route path, e.g. "/about" — becomes the canonical URL and og:url. */
  path: string;
};

/**
 * Per-page metadata: canonical URL and a complete Open Graph block.
 * Next.js replaces (not merges) nested metadata objects, so each page
 * must carry the full openGraph set itself.
 */
export function pageMeta({ title, absoluteTitle, description, path }: PageMetaOpts): Metadata {
  const ogTitle = absoluteTitle ?? (title ? `${title} · ${site.name}` : site.name);
  return {
    ...(absoluteTitle ? { title: { absolute: absoluteTitle } } : title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: site.name,
      title: ogTitle,
      description,
      url: path,
    },
  };
}
