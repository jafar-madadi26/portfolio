import { profile } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[color:var(--bg)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-medium text-[var(--text)]">{profile.name}</p>
          <p>{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--text)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
