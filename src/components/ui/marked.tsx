import { Fragment } from "react";

/** Renders a string where `*phrases*` get the highlighter-marker treatment. */
export function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <mark key={index} className="marker">
            {part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
