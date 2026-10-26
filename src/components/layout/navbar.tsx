"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { content } = useLanguage();
  const { nav, profile } = content;
  const pathname = usePathname();
  // The menu is "open for" the page it was opened on, so navigating
  // anywhere closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const menuOpen = openAt === pathname;

  // Home link is a monogram, not the name: "Moisés García" -> "MG".
  const monogram = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenAt(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={content.ui.home}
          title={content.ui.home}
          className="display shrink-0 text-[2rem] leading-none transition-colors hover:text-accent"
        >
          {monogram}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "py-2 text-[0.95rem] font-medium underline-offset-[10px] decoration-2 transition-colors hover:text-accent",
                  isActive ? "text-ink underline" : "text-ink-soft"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle className="hidden min-[380px]:inline-flex" />
          <button
            type="button"
            onClick={() => setOpenAt(menuOpen ? null : pathname)}
            className="inline-flex size-10 items-center justify-center text-ink lg:hidden"
            aria-label={menuOpen ? content.menuClose : content.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 animate-[menu-in_0.18s_ease-out] overflow-y-auto border-t border-ink bg-paper lg:hidden"
        >
          <div className="flex min-h-full flex-col">
            <nav aria-label="Main" className="flex flex-col px-4 sm:px-6">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenAt(null)}
                    aria-current={isActive ? "page" : undefined}
                    className="group flex items-center justify-between gap-4 border-b border-line py-5"
                  >
                    <span
                      className={cn(
                        "display text-[2.5rem] transition-colors group-active:text-accent",
                        isActive && "text-accent"
                      )}
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-ink-muted" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-5 px-4 py-8 sm:px-6">
              <a
                href={`mailto:${profile.email}`}
                className="text-lg font-semibold break-all underline decoration-2 underline-offset-4"
              >
                {profile.email}
              </a>
              <ThemeToggle withLabel className="self-start min-[380px]:hidden" />
              <div className="flex flex-wrap items-center gap-3">
                <CopyEmail email={profile.email} />
                {content.socials.map((social) => (
                  <ButtonLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-12 px-0"
                  >
                    <social.icon className="size-5" />
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
