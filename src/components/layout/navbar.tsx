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
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={profile.name}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="display flex size-10 -rotate-3 items-center justify-center border-2 border-ink bg-accent text-2xl text-accent-ink shadow-hard-sm transition-transform group-hover:rotate-2">
            {profile.initials}
          </span>
          <span className="hidden text-lg leading-none font-bold sm:block">
            {profile.nameLines[0]}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item) ? "page" : undefined}
              className={cn(
                "py-2 font-bold decoration-accent decoration-[3px] underline-offset-[6px] hover:underline",
                isActive(item) && "underline"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            href={CONTACT_HREF}
            variant="primary"
            className="hidden min-h-10 px-4 text-sm lg:inline-flex"
          >
            {contactLabel}
          </ButtonLink>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpenAt(menuOpen ? null : pathname)}
            className="inline-flex size-10 items-center justify-center border-2 border-ink bg-ink text-paper lg:hidden"
            aria-label={menuOpen ? content.menuClose : content.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 animate-[menu-in_0.18s_ease-out] overflow-y-auto border-t-2 border-ink bg-paper lg:hidden"
        >
          <div className="flex min-h-full flex-col">
            <nav aria-label="Main" className="flex flex-col px-4 pt-2 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenAt(null)}
                  aria-current={isActive(item) ? "page" : undefined}
                  className="group flex items-center justify-between gap-4 border-b-2 border-ink py-5 active:bg-highlight active:text-highlight-ink"
                >
                  <span
                    className={cn(
                      "display text-5xl decoration-accent decoration-[6px] underline-offset-[8px]",
                      isActive(item) && "underline"
                    )}
                  >
                    {item.label}
                  </span>
                  <ArrowUpRight className="size-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 px-4 py-8 sm:px-6">
              <a href={`mailto:${profile.email}`} className="link text-xl font-bold break-all">
                {profile.email}
              </a>
              <div className="flex flex-wrap items-center gap-3">
                <CopyEmail email={profile.email} className="min-w-44" />
                {content.socials.map((social) => (
                  <ButtonLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="px-3.5"
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
