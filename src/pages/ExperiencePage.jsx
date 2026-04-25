import SectionHeading from '../components/SectionHeading';
import { experienceTimeline } from '../data/portfolioData';

function ExperiencePage() {
  return (
    <div className="section-wrap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience across telecom, banking, and enterprise product delivery."
          description="This section takes the place of the generic student timeline from the template and gives you the same confidence boost the Ataie portfolio gets from real employers and real work."
        />

        <div className="relative mt-12 space-y-8 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-[var(--border)] md:before:left-1/2">
          {experienceTimeline.map((item, index) => (
            <div
              key={`${item.company}-${item.period}`}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`${index % 2 === 0 ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
                <article className="surface-card p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-strong)]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">{item.company}</h3>
                  <p className="mt-1 text-base font-medium text-[var(--muted)]">{item.role}</p>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-strong)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="pointer-events-none absolute left-6 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[var(--bg)] bg-[var(--brand-strong)] md:left-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
