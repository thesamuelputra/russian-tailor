import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact & Hours",
  description:
    "Book an appointment at The Russian Tailor: call 250-388-5543 or email russiantailor@gmail.com. #203 – 612 View Street, Victoria BC. Closed Wednesdays and weekends.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="folio rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Contact
        </p>
        <h1
          className="rowline rise mt-4 max-w-3xl text-[length:var(--text-display)] text-chalk"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Book your <em>appointment.</em>
        </h1>
        <p
          className="rise mt-7 max-w-xl font-serif text-lg leading-relaxed text-chalk-dim"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Interested in our services? The fastest way to book is by phone, or get
          in touch below and we&rsquo;ll get back to you as soon as possible.
        </p>
        <p
          className="rise mt-8"
          style={{ "--stagger": 3 } as React.CSSProperties}
        >
          <a
            href={site.phoneHref}
            className="fascia inline-block text-[length:var(--text-head)] transition-colors hover:text-gold-bright"
          >
            {site.phone}
          </a>
        </p>
        <p
          className="chalk-note rise mt-3"
          style={{ "--stagger": 4 } as React.CSSProperties}
        >
          to book an appointment, call us please
        </p>
      </section>

      <section className="ledger on-paper relative mt-16">
        <div className="ledger-margin left-6 sm:left-16 lg:left-24" aria-hidden />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-16 pl-8 sm:pl-16 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:pl-24">
            <div
              className="rise max-w-xl"
              style={{ "--stagger": 5 } as React.CSSProperties}
            >
              <h2 className="rowline-sm text-[length:var(--text-sec)] text-ink">
                Send a <em>message.</em>
              </h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div
              className="rise space-y-12"
              style={{ "--stagger": 6 } as React.CSSProperties}
            >
              <div>
                <h2 className="tape text-ink-soft">The shop</h2>
                <div className="plate mt-5 px-7 py-6">
                  <p className="text-[0.65rem] tracking-[0.3em]">The Russian Tailor</p>
                  <div className="plate-rule" aria-hidden />
                  <p className="font-semibold tracking-[0.13em]">
                    No. 203 · 612 View Street
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.26em]">
                    Victoria BC · V8W 1J5
                  </p>
                </div>
                <p className="mt-4 font-serif text-sm leading-relaxed text-ink-soft">
                  At the corner of View and Government Street.
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tape mt-3 inline-block text-ledger-red underline decoration-ledger-red/40 underline-offset-4 hover:text-ink"
                >
                  Get directions
                </a>
              </div>

              <div>
                <h2 className="tape text-ink-soft">By email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-block font-serif text-lg text-ink underline decoration-ledger-red/40 underline-offset-4 hover:text-ledger-red"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <h2 className="tape text-ink-soft">Hours</h2>
                <dl className="mt-4 max-w-xs">
                  {site.hours.map(({ day, time }) => (
                    <div
                      key={day}
                      className="ledger-line flex items-baseline justify-between"
                    >
                      <dt className="font-serif">{day}</dt>
                      <dd
                        className={`font-serif ${
                          time === "Closed"
                            ? "italic text-ink-soft"
                            : "font-medium tabular-nums"
                        }`}
                      >
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="chalk-note mt-5">closed Wednesdays, always</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
