import Link from "next/link";
import { profile } from "@/data/portfolio";

const links = [
  ["/", "Home"], ["/about", "About"], ["/experience", "Experience"], ["/contact", "Contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-200/20 py-8 dark:border-blue-800/20">
      <div className="site-container flex flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map(([href, label]) => <Link key={href} href={href} className="external-link">{label}</Link>)}
        </nav>
        <p className="text-sm text-blue-600/80 dark:text-blue-400/80">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="max-w-md text-sm text-muted-foreground">Building dependable systems, simplifying complex workflows, and creating software that lasts.</p>
      </div>
    </footer>
  );
}
