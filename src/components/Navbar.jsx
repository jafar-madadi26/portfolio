import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/portfolioData';
import ThemeMenu from './ThemeMenu';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--nav-bg)]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="brand-mark">{profile.initials}</div>
          <div>
            <p className="text-base font-semibold tracking-tight text-[var(--text)]">{profile.name}</p>
            <p className="text-sm text-[var(--muted)]">{profile.brandSubtitle}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <a href={profile.resumeHref} target="_blank" rel="noreferrer" className="nav-external-link-inline">
            Resume
            <ExternalLink size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="nav-external-link-inline">
            LinkedIn
            <ExternalLink size={14} />
          </a>
          <ThemeMenu inline />
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="theme-trigger md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--border)] bg-[color:var(--surface)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="nav-external-link justify-center"
            >
              Resume
              <ExternalLink size={14} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="nav-external-link justify-center"
            >
              LinkedIn
              <ExternalLink size={14} />
            </a>
            <ThemeMenu />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
