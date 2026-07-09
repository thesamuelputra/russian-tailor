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
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <h1
          className="display rise text-center text-[length:clamp(2.4rem,9.5vw,9rem)]"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Appointments
        </h1>
        <p
          className="prose-journal rise mx-auto mt-8 max-w-md text-center"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Interested in our services? The fastest way to book is by phone, or
          get in touch below and we&rsquo;ll get back to you as soon as
          possible.
        </p>
        <p
          className="rise mt-8 text-center"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          <a
            href={site.phoneHref}
            className="head link-quiet text-[length:var(--text-head)]"
          >
            {site.phone}
          </a>
        </p>
        <div
          className="rise mt-10 border-t border-line sm:mt-14"
          style={{ "--stagger": 3 } as React.CSSProperties}
          aria-hidden
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-10 pb-28 sm:px-8 sm:pb-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div
            className="rise lg:col-span-6"
            style={{ "--stagger": 4 } as React.CSSProperties}
          >
            <h2 className="head text-[length:var(--text-head)]">
              Send a message.
            </h2>
            <div className="mt-10 max-w-lg">
              <ContactForm />
            </div>
          </div>

          <div
            className="rise space-y-12 lg:col-span-4 lg:col-start-8"
            style={{ "--stagger": 5 } as React.CSSProperties}
          >
            <div>
              <h2 className="caps text-ink-faint">The shop</h2>
              <address className="prose-journal mt-4 not-italic">
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
                className="link-quiet mt-3 inline-block text-sm"
              >
                Get directions
              </a>
            </div>

            <div>
              <h2 className="caps text-ink-faint">By email</h2>
              <a
                href={`mailto:${site.email}`}
                className="link-quiet mt-3 inline-block text-[0.9375rem]"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h2 className="caps text-ink-faint">Hours</h2>
              <dl className="mt-5">
                {site.hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-baseline justify-between border-b border-line py-2.5 text-sm"
                  >
                    <dt>{day}</dt>
                    <dd className={time === "Closed" ? "italic text-ink-faint" : "tabular-nums"}>
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="caption mt-4">Closed Wednesdays and weekends.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
