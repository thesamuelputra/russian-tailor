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
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="label rise" style={{ "--stagger": 0 } as React.CSSProperties}>
          Contact
        </p>
        <h1
          className="rise mt-6 max-w-3xl font-display text-[length:var(--text-hero)] leading-[1.05] tracking-tight"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Book your <em className="font-light text-thread-deep">appointment</em>
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          Interested in our services? The fastest way to book is by phone — or get
          in touch below and we&rsquo;ll get back to you as soon as possible.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div
            className="rise space-y-10"
            style={{ "--stagger": 3 } as React.CSSProperties}
          >
            <div>
              <h2 className="label">By phone</h2>
              <a
                href={site.phoneHref}
                className="mt-3 inline-block font-display text-3xl font-semibold tracking-tight hover:text-thread-deep sm:text-4xl"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-ink-soft">
                To book an appointment, call us please.
              </p>
            </div>

            <div>
              <h2 className="label">By email</h2>
              <a
                href={`mailto:${site.email}`}
                className="stitch-link mt-3 inline-block text-lg font-medium"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h2 className="label">The shop</h2>
              <address className="mt-3 not-italic leading-relaxed text-ink-soft">
                {site.address.street}
                <br />
                {site.address.city} {site.address.region} {site.address.postal}
                <br />
                At the corner of View and Government Street.
              </address>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="stitch-link mt-3 inline-block font-medium"
              >
                Get directions
              </a>
            </div>

            <div>
              <h2 className="label">Hours</h2>
              <dl className="mt-4 max-w-xs">
                {site.hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-baseline justify-between border-b border-line py-2.5"
                  >
                    <dt className="text-sm">{day}</dt>
                    <dd
                      className={`text-sm ${
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
            </div>
          </div>

          <div className="rise" style={{ "--stagger": 4 } as React.CSSProperties}>
            <h2 className="font-display text-[length:var(--text-subtitle)] leading-tight">
              Send a message
            </h2>
            <div className="mt-8 max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
