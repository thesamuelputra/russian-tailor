import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
      <h1 className="display text-[length:clamp(4rem,18vw,12rem)]">
        404<span className="sr-only"> · Page not found</span>
      </h1>
      <p className="caps mt-6 text-ink-faint" aria-hidden>
        Page not found
      </p>
      <p className="prose-journal mx-auto mt-8 max-w-sm">
        This page isn&rsquo;t on the rail. Head back to the front of the shop,
        or call {site.phone} if you were trying to reach us.
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        <Link href="/" className="caps btn-line">
          Back to the shop
        </Link>
        <a href={site.phoneHref} className="link-quiet text-sm">
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
