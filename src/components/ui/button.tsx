import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "solid" | "outline" | "text" | "signal" | "onband";
export type ButtonSize = "md" | "sm";

const VARIANTS: Record<ButtonVariant, string> = {
  solid: "bg-ink text-paper hover:bg-accent",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  // Just an underlined line of text with an arrow, for secondary actions.
  text: "px-0 underline decoration-2 underline-offset-[6px] hover:text-accent hover:decoration-accent",
  signal: "bg-signal text-on-signal hover:brightness-95",
  onband: "border border-on-band/40 text-on-band hover:bg-on-band hover:text-band",
};

const SIZES: Record<ButtonSize, string> = {
  md: "h-12 px-6",
  sm: "h-10 px-4 text-sm",
};

export function buttonClass(
  variant: ButtonVariant = "outline",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[2px] font-semibold whitespace-nowrap select-none",
    "transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px",
    SIZES[size],
    VARIANTS[variant],
    className
  );
}

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">) {
  const classes = buttonClass(variant, size, className);

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
  size,
  className,
  type = "button",
  children,
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<"button">, "className">) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
