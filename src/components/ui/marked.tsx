import { Fragment } from "react";

/** Renders a string where `*phrases*` are emphasised (bold). */
export function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-fg">
            {part}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
