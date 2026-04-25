import SectionHeading from '../components/SectionHeading';
import { aboutHeroStats, aboutHighlights, languages, profile, techGroups } from '../data/portfolioData';

function AboutPage() {
  return (
    <div className="section-wrap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-section rounded-[2rem] px-8 py-14">
          <div className="hero-glow" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <SectionHeading
              eyebrow="About"
              title={`${profile.name} is a senior engineer focused on scalable systems and enterprise software.`}
              description="Your best version is narrower than the student template and a little narrower than the Ataie site too. The sharper story is backend architecture, enterprise delivery, and domain experience in telecom and banking."
            />
            <div className="stats-grid !mt-0">
              {aboutHeroStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Profile</h3>
            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--muted)]">
              {aboutHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Languages</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {languages.map((language) => (
                <span key={language} className="neutral-pill px-4 py-2 text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Tech Stack"
            title="A practical stack centered on business systems and maintainable delivery."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {techGroups.map((group) => (
              <div key={group.title} className="surface-card p-6">
                <h3 className="text-xl font-semibold text-[var(--text)]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
