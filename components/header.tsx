"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-container flex items-center justify-between gap-4">
        <Link href="/" className="brand group" onClick={() => setOpen(false)} aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            <span>{profile.initials[0]}</span>
            <span>{profile.initials[1]}</span>
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground">{profile.name}</span>
            <span className="text-xs text-muted-foreground">{profile.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex items-center gap-1" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && <span className="active-tab" aria-hidden="true" />}
                </Link>
              );
            })}
          </nav>
          <a href="/resume.pdf" download className="external-link">Download CV</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="external-link">LinkedIn <span aria-hidden="true">↗</span></a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="mobile-menu md:hidden">
          <nav className="site-container flex flex-col py-4" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-link ${active ? "mobile-link-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-wrap items-center gap-5 border-t border-border pt-4">
              <a href="/resume.pdf" download className="external-link">Download CV</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="external-link">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
