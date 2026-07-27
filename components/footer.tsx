import Link from "next/link";
import { navigation, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-blue-200/20 py-10 dark:border-blue-800/20">
      <div className="site-container grid gap-7 text-center md:grid-cols-[1fr_auto] md:items-end md:text-left">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Designing dependable systems, simplifying complex workflows, and building software that lasts.
          </p>
          <p className="mt-3 text-sm text-blue-600/80 dark:text-blue-400/80">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="external-link">{item.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
