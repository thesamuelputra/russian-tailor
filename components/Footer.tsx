import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Year } from "@/components/Year";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl">
              <span className="italic font-light">The</span>{" "}
              <span className="font-semibold">Russian Tailor</span>
            </p>
            <p className="mt-2 max-w-xs text-ink-soft">{site.tagline}</p>
            <p className="mt-6 text-sm text-ink-soft">
              Master tailor {site.owner}
              {" — "}trained in St.&nbsp;Petersburg, tailoring in
              downtown Victoria {site.corner}.
            </p>
          </div>

          <div>
            <h2 className="label">Visit</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ink-soft">
              {site.address.street}
              <br />
              {site.address.city} {site.address.region} {site.address.postal}
            </address>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {site.hoursSummary}
              <br />
              Closed Wednesdays &amp; weekends
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="stitch-link mt-3 inline-block text-sm font-medium text-ink"
            >
              Get directions
            </a>
          </div>

          <div>
            <h2 className="label">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="stitch-link font-medium">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="stitch-link">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stitch-link"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <nav aria-label="Footer" className="mt-6">
              <ul className="space-y-1.5 text-sm text-ink-soft">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="stitch-rule--ink stitch-rule mt-12" aria-hidden />
        <p className="mt-6 text-xs text-ink-soft">
          © <Year /> The Russian Tailor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
