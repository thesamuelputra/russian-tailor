import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Year } from "@/components/Year";
import { Shears } from "@/components/Shears";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <Shears className="mx-auto h-4 w-auto text-ink" aria-hidden />
          <p className="display mt-5 text-[1.15rem] tracking-[0.3em]">
            The Russian Tailor
          </p>
          <p className="caps mt-3 text-ink-faint">
            Custom tailoring · Expert alterations
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h2 className="caps text-ink-faint">The shop</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ink-mid">
              {site.address.street}
              <br />
              {site.address.city} {site.address.region} {site.address.postal}
            </address>
            <p className="mt-2 text-sm leading-relaxed text-ink-mid">
              At the corner of View and Government Street.
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet mt-3 inline-block text-sm"
            >
              Get directions
            </a>
          </div>

          <div>
            <h2 className="caps text-ink-faint">Hours &amp; appointments</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-mid">
              {site.hoursSummary}
              <br />
              Closed Wednesdays &amp; weekends
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a href={site.phoneHref} className="link-quiet">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-quiet">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="caps text-ink-faint">Pages</h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-mid transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="caption mt-14 border-t border-line pt-6 text-center sm:flex sm:items-baseline sm:justify-between sm:text-left">
          <p>
            © <Year /> The Russian Tailor. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">Set in Italiana and Newsreader.</p>
        </div>
      </div>
    </footer>
  );
}
