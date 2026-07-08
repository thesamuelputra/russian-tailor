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
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-md">
        <div className="ticket ticket-tilt-l">
          <p className="tape text-ledger-red">Pattern not found</p>
          <p className="mt-4 font-serif text-2xl font-semibold">
            No. 404
          </p>
          <p className="mt-3 font-serif leading-relaxed text-ink-soft">
            This page isn&rsquo;t on the rail. Head back to the front of the
            shop, or call {site.phone} if you were trying to reach us.
          </p>
          <p className="chalk-note mt-5">cut away, long ago</p>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="tape border border-gold px-6 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-green-deep"
          >
            Back to the shop
          </Link>
          <a
            href={site.phoneHref}
            className="font-serif italic text-chalk underline decoration-gold/50 underline-offset-4 hover:text-gold-bright"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
