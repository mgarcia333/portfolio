"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { AccentBar } from "@/components/ui/accent-bar";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const CONTACT_HREF = "/#contact";

export function Navbar() {
  const { content } = useLanguage();
  const { nav, profile } = content;
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState("");
  // The menu is "open for" the page it was opened on, so navigating
  // anywhere closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const menuOpen = openAt === pathname;

  const desktopLinks = nav.filter((item) => item.href !== CONTACT_HREF);
  const contactLabel = nav.find((item) => item.href === CONTACT_HREF)?.label ?? "Contact";

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = nav
      .filter((item) => item.type === "anchor")
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setActiveHref(entry.isIntersecting ? `/#${entry.target.id}` : "");
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname, nav]);

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

  function isActive(item: { href: string; type: "anchor" | "route" }) {
    return item.type === "route" ? pathname === item.href : activeHref === item.href;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas">
      <AccentBar />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0 text-base font-semibold tracking-tight min-[360px]:text-lg">
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {desktopLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors hover:bg-surface-hover hover:text-fg",
                isActive(item) ? "text-fg" : "text-fg-soft"
              )}
            >
              {item.label}
              {isActive(item) ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-0.5 h-0.5 rounded-full bg-signal"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ButtonLink
            href={CONTACT_HREF}
            variant="primary"
            size="sm"
            className="mr-2 hidden lg:inline-flex"
          >
            {contactLabel}
          </ButtonLink>
          <LanguageSwitcher />
          <ThemeToggle className="hidden min-[380px]:inline-flex" />
          <button
            type="button"
            onClick={() => setOpenAt(menuOpen ? null : pathname)}
            className="inline-flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-hover lg:hidden"
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
          className="fixed inset-x-0 top-[67px] bottom-0 z-40 animate-[menu-in_0.18s_ease-out] overflow-y-auto border-t border-line bg-canvas lg:hidden"
        >
          <div className="flex min-h-full flex-col">
            <nav aria-label="Main" className="flex flex-col px-4 pt-2 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenAt(null)}
                  aria-current={isActive(item) ? "page" : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-line py-5 active:bg-surface-hover"
                >
                  <span
                    className={cn(
                      "text-2xl font-semibold tracking-tight",
                      isActive(item) && "text-brand-text"
                    )}
                  >
                    {item.label}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 px-4 py-8 sm:px-6">
              <a href={`mailto:${profile.email}`} className="link text-lg font-medium break-all">
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
