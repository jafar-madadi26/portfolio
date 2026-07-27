"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

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

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-container flex items-center justify-between">
        <Link href="/" className="brand group" onClick={() => setOpen(false)}>
          <motion.div className="brand-mark" whileHover={{ scale: 1.05, rotate: 5 }} whileTap={{ scale: 0.95 }}>
            <span>{profile.initials[0]}</span>
            <motion.span animate={{ y: [0, -2, 0], rotate: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              {profile.initials[1]}
            </motion.span>
          </motion.div>
          <span className="flex flex-col">
            <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground">{profile.name}</span>
            <span className="text-xs text-muted-foreground">{profile.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}>
                {item.label}
                {pathname === item.href && <motion.span layoutId="activeTab" className="active-tab" />}
              </Link>
            ))}
          </nav>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="external-link">Resume ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="external-link">LinkedIn ↗</a>
          <ThemeToggle />
        </div>

        <button type="button" className="icon-button md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mobile-menu md:hidden">
            <nav className="site-container flex flex-col py-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`mobile-link ${pathname === item.href ? "text-blue-500" : ""}`} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-5 border-t border-border pt-4">
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="external-link">Resume ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="external-link">LinkedIn ↗</a>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
