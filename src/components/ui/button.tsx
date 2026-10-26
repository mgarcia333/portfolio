import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ink" | "outline";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink",
  ink: "bg-ink text-paper",
  outline: "bg-card text-ink",
};

/**
 * Chunky button that physically presses in: it lifts on hover and sinks onto
 * its own shadow while the mouse is down, so every click has feedback.
 */
export function buttonClass(variant: Variant = "outline", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 border-2 border-ink px-5 py-2.5 leading-none font-bold whitespace-nowrap shadow-hard select-none",
    "transition-[transform,box-shadow] duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-x-1 active:translate-y-1 active:shadow-none",
    VARIANTS[variant],
    className
  );
}

interface CommonProps {
  variant?: Variant;
  className?: string;
}

export function ButtonLink({
  href,
  variant,
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">) {
  const classes = buttonClass(variant, className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant,
  className,
  type = "button",
  children,
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<"button">, "className">) {
  return (
    <button type={type} className={buttonClass(variant, className)} {...rest}>
      {children}
    </button>
  );
}
