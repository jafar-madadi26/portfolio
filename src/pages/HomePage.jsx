import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { companies, featuredProjects, metrics, profile, specializations } from '../data/portfolioData';

function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <div className="hero-badge">
              <MapPin size={16} />
              {profile.location}
            </div>
            <p className="mt-8 text-base font-semibold uppercase tracking-[0.2em] text-[var(--brand-strong)]">
              {profile.role}
            </p>
            <h1 className="gradient-title mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{profile.heroSummary}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="primary-btn">
                Get in touch
                <ArrowRight size={18} />
              </Link>
              <Link to="/experience" className="secondary-btn">
                View experience
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="hero-photo-frame">
              <div className="hero-photo-card">
                <div className="hero-photo-mark">{profile.initials}</div>
                <div className="hero-photo-copy">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                    {profile.role}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">
                    Jafar Madadi
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    Enterprise-focused engineer delivering APIs, internal platforms, and scalable
                    backend workflows across telecom and banking environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="stats-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="stat-card">
                <p className="stat-value">{metric.value}</p>
                <p className="stat-label">{metric.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Previously worked with
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {companies.map((company) => (
              <div key={company.name} className="surface-card p-6">
                <p className="text-lg font-semibold text-[var(--text)]">{company.name}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{company.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected systems shaped around real operational needs."
            description="A portfolio like Abbas Ataie's works because it feels grounded in real work. For your version, the strongest story is business-critical delivery in telecom, banking, and enterprise systems."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="p-6">
                  <p className="text-sm font-medium text-[var(--brand-strong)]">{project.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {project.impact.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-strong)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specializations"
            title="Deep expertise across backend systems, enterprise delivery, and technical execution."
            description="The goal here is the same strength the Ataie portfolio has: clear positioning. Yours should lean harder into the systems work that sets you apart."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {specializations.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.items.map((tag) => (
                    <span key={tag} className="neutral-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="cta-panel">
            <SectionHeading
              eyebrow="Open to Opportunities"
              title="Available for senior backend and full-stack engineering roles in Dubai."
              description="I bring enterprise system experience, a strong backend foundation, and a practical bias toward software that performs well in production."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="primary-btn">
                Contact Jafar
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
