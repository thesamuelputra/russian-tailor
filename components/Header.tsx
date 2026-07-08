"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    const inertTargets = [
      document.getElementById("main"),
      document.querySelector("footer"),
    ].filter(Boolean) as HTMLElement[];

    inertTargets.forEach((el) => el.setAttribute("inert", ""));
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";
    const toggle = toggleRef.current;

    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onBreakpoint);
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
      toggle?.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-green">
      {/* Utility bar: the credential worn like an Est. date */}
      <div className="border-b border-gold/25">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href={`mailto:${site.email}`}
            className="tape hidden text-chalk-dim transition-colors hover:text-gold-bright md:block"
          >
            {site.email}
          </a>
          <p className="tape text-gold">
            Master tailor · Trained in St.&nbsp;Petersburg
          </p>
          <a
            href={site.phoneHref}
            className="tape hidden text-chalk-dim transition-colors hover:text-gold-bright md:block"
          >
            {site.phone}
          </a>
        </div>
      </div>

      {/* Fascia band */}
      <div className="border-b border-gold/25 bg-green">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label={`${site.name}, home`}>
            <span className="fascia text-[1.05rem] tracking-[0.09em] sm:text-[1.2rem]">
              The Russian Tailor
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`tape flex items-center gap-2 py-2 transition-colors ${
                    active ? "text-gold-bright" : "text-chalk-dim hover:text-chalk"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="inline-block h-2 w-2 rounded-full border-[1.5px] border-current"
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              className="tape border border-gold px-4 py-2.5 text-gold transition-colors hover:bg-gold hover:text-green-deep"
            >
              Book · {site.phone}
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={site.phoneHref}
              className="tape border border-gold px-3 py-2 text-gold transition-colors hover:bg-gold hover:text-green-deep"
            >
              Book
            </a>
            <button
              type="button"
              ref={toggleRef}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex h-11 w-11 items-center justify-center"
            >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {/* balance-line cross when open, twin chalk strokes when closed */}
            <span
              aria-hidden
              className={`absolute block h-0.5 w-6 bg-chalk transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              aria-hidden
              className={`absolute block h-0.5 w-6 bg-chalk transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[6.5rem] bottom-0 z-40 overflow-y-auto bg-green lg:hidden"
        >
          <nav aria-label="Main" className="flex flex-col px-6 py-10 sm:px-10">
            {nav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  style={{ "--stagger": i } as React.CSSProperties}
                  className="rise flex items-baseline justify-between border-b border-gold/20 py-5"
                >
                  <span
                    className={`font-serif text-3xl font-medium ${
                      active ? "text-gold-bright italic" : "text-chalk"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="folio">No. {i + 1}</span>
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              onClick={closeMenu}
              style={{ "--stagger": nav.length } as React.CSSProperties}
              className="rise tape mt-10 border border-gold px-6 py-4 text-center text-base text-gold"
            >
              Call {site.phone} to book
            </a>
            <p
              style={{ "--stagger": nav.length + 1 } as React.CSSProperties}
              className="rise mt-6 text-center font-serif text-sm text-chalk-dim"
            >
              {site.hoursSummary} · Closed Wednesdays &amp; weekends
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
