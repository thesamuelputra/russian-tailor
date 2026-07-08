import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="label">Page not found</p>
      <h1 className="mt-6 max-w-3xl font-display text-[length:var(--text-hero)] leading-[1.05] tracking-tight">
        This page didn&rsquo;t <em className="font-light text-thread-deep">make the cut</em>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Head back to the
        home page, or call {site.phone} if you were trying to reach the shop.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-thread-deep"
        >
          Back to home
        </Link>
        <a href={site.phoneHref} className="stitch-link font-medium">
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
