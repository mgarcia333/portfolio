import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "signal" | "onband";
export type ButtonSize = "md" | "sm";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-brand text-on-brand hover:bg-brand-hover",
  outline:
    "border border-line-strong text-fg hover:border-brand-text hover:bg-surface-hover",
  // The one neon-green call to action, for use on the deep-purple band.
  signal: "bg-signal text-on-signal hover:brightness-110",
  onband: "border border-white/30 text-on-band hover:border-white/60 hover:bg-white/10",
};

const SIZES: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-[0.95rem]",
  sm: "h-10 px-4 text-sm",
};

export function buttonClass(
  variant: ButtonVariant = "outline",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap select-none",
    "transition-[background-color,border-color,color,transform,filter] duration-150 active:scale-[0.97]",
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
