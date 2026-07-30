"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { content } = useLanguage();
  const { nav, profile } = content;
  const contactLabel = nav.find((item) => item.href === "/#contact")?.label ?? "Contact";
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = nav
      .filter((item) => item.type === "anchor")
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`/#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname, nav]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-outline-variant bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/" className="font-display text-tag text-sm text-on-surface" data-cursor-hover>
            [ M_G ]
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const isActive =
              item.type === "route" ? pathname === item.href : activeHref === item.href;
            const linkClassName = cn(
              "text-tag text-xs transition-colors",
              isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
            );

            if (item.type === "route") {
              return (
                <Link key={item.href} href={item.href} data-cursor-hover className={linkClassName}>
                  {item.label}
                </Link>
              );
            }

            return (
              <a key={item.href} href={item.href} data-cursor-hover className={linkClassName}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="text-tag flex items-center gap-2 text-[11px] text-on-surface-muted">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {profile.status}
          </span>
          <MagneticButton href="/#contact" variant="outline" className="px-4 py-2 text-xs">
            {contactLabel}
          </MagneticButton>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-on-surface"
            aria-label={content.menuToggle}
            data-cursor-hover
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-outline-variant bg-surface lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-10">
              {nav.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display py-3 text-2xl text-on-surface"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display py-3 text-2xl text-on-surface"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
