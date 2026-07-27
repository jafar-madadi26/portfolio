import Link from "next/link";
import { navigation, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-blue-200/20 py-10 dark:border-blue-800/20">
      <div className="site-container flex flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="external-link">{item.label}</Link>
          ))}
        </nav>
        <p className="text-sm text-blue-600/80 dark:text-blue-400/80">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">
          Designing dependable systems, simplifying complex workflows, and building software that lasts.
        </p>
      </div>
    </footer>
  );
}
