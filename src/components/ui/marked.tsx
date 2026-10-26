import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface MarkedProps {
  text: string;
  /** `strong` renders bold (body copy); `accent` colours the phrase (headlines). */
  tone?: "strong" | "accent";
}

/** Renders a string where `*phrases*` are emphasised. */
export function Marked({ text, tone = "strong" }: MarkedProps) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className={cn(tone === "accent" ? "text-accent" : "font-semibold text-ink")}>
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
