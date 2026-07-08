"use client";

/**
 * Current year, evaluated in the visitor's browser so the fully static site
 * never shows a stale copyright year. suppressHydrationWarning covers the
 * window where the prerendered year differs from the client's.
 */
export function Year() {
  const year = new Date().getFullYear();
  return (
    <time dateTime={String(year)} suppressHydrationWarning>
      {year}
    </time>
  );
}
