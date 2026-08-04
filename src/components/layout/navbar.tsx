"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
          <Link href="/" data-cursor-hover className="group flex items-center">
            <span className="text-tag flex size-8 items-center justify-center border border-outline text-[11px] text-primary transition-colors group-hover:border-primary">
              MG
            </span>
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
          <MagneticButton href="/#contact" variant="outline" className="px-4 py-2 text-xs">
            {contactLabel}
          </MagneticButton>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher className="mr-2" />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="-m-2.5 p-2.5 text-on-surface"
            aria-label={content.menuToggle}
            aria-expanded={menuOpen}
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
            className="bg-grid fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-outline-variant bg-surface lg:hidden"
          >
            <div className="flex min-h-full flex-col">
              <nav className="flex flex-col px-6 pt-4">
                {nav.map((item, index) => {
                  const isActive =
                    item.type === "route" ? pathname === item.href : activeHref === item.href;
                  const linkClassName = cn(
                    "group flex items-center justify-between gap-4 border-b border-outline-variant py-5 transition-colors"
                  );
                  const inner = (
                    <>
                      <span className="flex items-baseline gap-4">
                        <span
                          className={cn(
                            "text-tag text-xs",
                            isActive ? "text-primary" : "text-on-surface-muted"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-2xl",
                            isActive ? "text-primary" : "text-on-surface"
                          )}
                        >
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "size-4 transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-on-surface-muted group-hover:text-primary"
                        )}
                      />
                    </>
                  );

                  return item.type === "route" ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      data-cursor-hover
                      className={linkClassName}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      data-cursor-hover
                      className={linkClassName}
                    >
                      {inner}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-6 border-t border-outline-variant px-6 py-8">
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setMenuOpen(false)}
                  data-cursor-hover
                  className="font-display text-lg break-all text-on-surface transition-colors hover:text-primary"
                >
                  {profile.email}
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {content.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        data-cursor-hover
                        className="text-on-surface-muted transition-colors hover:text-primary"
                      >
                        <social.icon className="size-4" />
                      </a>
                    ))}
                  </div>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
