/**
 * Tailor's shears, drawn as a thin technical mark (the tailor's trade symbol
 * on pre-revolutionary Petersburg signboards). Stroke-only, never illustrative.
 */
export function Shears({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="7" cy="8" r="4.4" />
      <circle cx="7" cy="20" r="4.4" />
      <path d="M11 9.5 58 22" />
      <path d="M11 18.5 58 6" />
      <path d="M56 4.6 61 6.9 58.5 12" />
      <path d="M56 23.4 61 21.1 58.5 16" />
    </svg>
  );
}
