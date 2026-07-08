"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight sm:text-2xl"
          aria-label={`${site.name} — home`}
        >
          <span className="italic font-light">The</span>{" "}
          <span className="font-semibold">Russian Tailor</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.9375rem] transition-colors ${
                  active
                    ? "font-semibold text-thread-deep underline decoration-dashed decoration-thread underline-offset-8"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="bg-ink px-4 py-2 text-[0.9375rem] font-semibold text-paper transition-colors hover:bg-thread-deep"
          >
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            aria-hidden
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper lg:hidden"
        >
          <nav aria-label="Main" className="flex flex-col px-5 py-8 sm:px-8">
            {nav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  style={{ "--stagger": i } as React.CSSProperties}
                  className={`rise border-b border-line py-5 font-display text-3xl ${
                    active ? "italic text-thread-deep" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              style={{ "--stagger": nav.length } as React.CSSProperties}
              className="rise mt-8 inline-block bg-ink px-6 py-4 text-center text-lg font-semibold text-paper"
            >
              Call {site.phone} to book
            </a>
            <p
              style={{ "--stagger": nav.length + 1 } as React.CSSProperties}
              className="rise mt-6 text-center text-sm text-ink-soft"
            >
              {site.hoursSummary} · Closed Wednesdays &amp; weekends
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
