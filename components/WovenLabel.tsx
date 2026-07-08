import type { ReactNode } from "react";

/**
 * A woven bespoke label: satin ground, stitched selvedge on all four edges.
 * The convention, borrowed from real bespoke labels, sets the wearer's words
 * larger than the house's name.
 */
export function WovenLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`woven ${className}`}>
      <span className="woven-stitch-x top-[7px]" aria-hidden />
      <span className="woven-stitch-x bottom-[7px]" aria-hidden />
      {children}
    </div>
  );
}
