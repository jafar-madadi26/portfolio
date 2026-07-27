"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-container flex items-center justify-between gap-4">
        <Link href="/" className="brand group" onClick={() => setOpen(false)} aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            <span>{profile.initials[0]}</span>
            <span>{profile.initials[1]}</span>
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium text-foreground/70 group-hover:text-foreground">{profile.name}</span>
            <span className="hidden truncate text-xs text-muted-foreground min-[360px]:block">{profile.tagline}</span>
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="external-link">Resume <span aria-hidden="true">↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="external-link">LinkedIn <span aria-hidden="true">↗</span></a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
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
        <>
          <button
            type="button"
            className="mobile-menu-backdrop md:hidden"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <aside id="mobile-navigation" className="mobile-menu-panel md:hidden" aria-label="Mobile navigation">
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold">{profile.name}</p>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button"
                aria-label="Close navigation menu"
                onClick={() => {
                  setOpen(false);
                  menuButtonRef.current?.focus();
                }}
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
          <nav className="flex flex-col" aria-label="Mobile navigation links">
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
            <div className="mt-6 flex flex-col items-start gap-4 border-t border-border pt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="external-link">Resume <span aria-hidden="true">↗</span></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="external-link">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
          </aside>
        </>
      )}
    </header>
  );
}
