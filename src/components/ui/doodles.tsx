import { cn } from "@/lib/utils";

/** Wobbly hand-drawn underline. Position it under a `relative inline-block` word. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      fill="none"
      className={cn("pointer-events-none absolute left-0 h-3.5 w-full text-accent", className)}
    >
      <path
        d="M2 8 C 14 1, 24 13, 38 7 S 62 2, 76 8 S 102 13, 118 6 S 146 2, 160 8 S 186 12, 198 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Loose curved arrow that ends pointing down. Flip or rotate it with classes. */
export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 90 72"
      fill="none"
      className={cn("pointer-events-none h-14 w-auto text-accent-strong", className)}
    >
      <path
        d="M4 9 C 26 -3, 68 5, 77 54"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M62 44 C 69 49, 74 53, 78 62 C 81 53, 86 47, 94 41"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A line of marker handwriting. */
export function HandNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-hand text-3xl leading-none text-accent-strong sm:text-4xl", className)}>
      {children}
    </span>
  );
}
