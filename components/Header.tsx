"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { Shears } from "@/components/Shears";

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
      // the site footer; blockquote <footer>s inside #main are already inert
      document.querySelector("body > footer"),
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
    <header className="sticky top-0 z-50 bg-bone lg:static">
      {/* Utility line: the credential on one side, the telephone on the other */}
      <div className="hidden border-b border-line lg:block">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-8">
          <p className="caps text-ink-faint">
            Master tailor · Trained in St.&nbsp;Petersburg
          </p>
          <a href={site.phoneHref} className="caps text-ink-faint transition-colors hover:text-ink">
            {site.phone}
          </a>
        </div>
      </div>

      {/* The maison block: mark, wordmark, nav — all centred */}
      <div className="hidden border-b border-line lg:block">
        <div className="mx-auto max-w-6xl px-8 pt-10 pb-0 text-center">
          <Shears className="mx-auto h-4 w-auto text-ink" aria-hidden />
          <Link href="/" aria-label={`${site.name}, home`} className="mt-5 inline-block">
            <span className="display text-[1.7rem] tracking-[0.32em]">
              The Russian Tailor
            </span>
          </Link>
          <nav aria-label="Main" className="mt-8 flex items-center justify-center gap-10 pb-5">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`caps transition-colors ${
                    active
                      ? "text-ink underline decoration-1 underline-offset-[0.5em]"
                      : "text-ink-faint hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Compact bar under lg */}
      <div className="border-b border-line lg:hidden">
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <a
            href={site.phoneHref}
            className="caps -ml-3 flex h-11 items-center px-3 text-ink-faint transition-colors hover:text-ink"
          >
            Book
          </a>
          <Link href="/" aria-label={`${site.name}, home`}>
            <span className="display text-[0.95rem] tracking-[0.28em] sm:text-[1.05rem]">
              The Russian Tailor
            </span>
          </Link>
          <button
            type="button"
            ref={toggleRef}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative -mr-3 flex h-11 w-11 items-center justify-center"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden
              className={`absolute block h-px w-6 bg-ink transition-transform duration-300 motion-reduce:transition-none ${
                open ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              aria-hidden
              className={`absolute block h-px w-6 bg-ink transition-transform duration-300 motion-reduce:transition-none ${
                open ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bone lg:hidden"
        >
          <nav aria-label="Main" className="flex flex-col px-6 py-12 sm:px-10">
            {nav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  style={{ "--stagger": i } as React.CSSProperties}
                  className="rise border-b border-line py-6"
                >
                  <span
                    className={`head text-3xl ${
                      active ? "italic text-ink" : "text-ink-mid"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              onClick={closeMenu}
              style={{ "--stagger": nav.length } as React.CSSProperties}
              className="rise caps btn-line mt-12 text-center"
            >
              Call {site.phone} to book
            </a>
            <p
              style={{ "--stagger": nav.length + 1 } as React.CSSProperties}
              className="rise caption mt-8 text-center"
            >
              {site.hoursSummary} · Closed Wednesdays &amp; weekends
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
