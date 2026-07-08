import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Year } from "@/components/Year";
import { Shears } from "@/components/Shears";

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-green-deep text-chalk">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Shears className="h-7 w-auto text-gold" aria-hidden />
            <p className="fascia mt-4 text-xl">The Russian Tailor</p>
            <p className="mt-2 font-serif italic text-chalk-dim">
              Custom Tailoring &amp; Expert Alterations
            </p>
            <p className="mt-6 max-w-sm font-serif text-sm leading-relaxed text-chalk-dim">
              The shop of master tailor {site.owner}, trained in
              St.&nbsp;Petersburg, at the corner of View and Government Street in
              downtown Victoria.
            </p>
          </div>

          <div>
            <h2 className="tape text-gold">The shop</h2>
            <address className="mt-4 font-serif text-sm not-italic leading-relaxed text-chalk-dim">
              {site.address.street}
              <br />
              {site.address.city} {site.address.region} {site.address.postal}
            </address>
            <p className="mt-3 font-serif text-sm leading-relaxed text-chalk-dim">
              {site.hoursSummary}
              <br />
              Closed Wednesdays &amp; weekends
            </p>
            <ul className="mt-4 space-y-1.5 font-serif text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-chalk underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-bright"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-chalk underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-bright"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-bright"
                >
                  Get directions
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-bright"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="tape text-gold">Pages</h2>
            <ul className="mt-4 space-y-1.5 font-serif text-sm">
              {nav.map((item, i) => (
                <li key={item.href} className="flex items-baseline gap-3">
                  <span className="folio text-gold-dim">{i + 1}.</span>
                  <Link
                    href={item.href}
                    className="text-chalk-dim transition-colors hover:text-chalk"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* colophon */}
        <div className="mt-14 border-t border-gold/20 pt-6 sm:flex sm:items-baseline sm:justify-between">
          <p className="font-serif text-xs text-chalk-dim">
            © <Year /> The Russian Tailor. All rights reserved.
          </p>
          <p className="mt-2 font-serif text-xs italic text-chalk-dim/80 sm:mt-0">
            Set in Besley, after the Clarendon of 1845.
          </p>
        </div>
      </div>
    </footer>
  );
}
