import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import { resolveSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Jafar Madadi's software engineering experience across telecom, banking, business operations, and vehicle tracking systems.",
  alternates: { canonical: new URL("experience", resolveSiteUrl()).toString() },
};

export default function ExperiencePage() {
  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-4xl">
        <div className="badge"><BriefcaseBusiness aria-hidden="true" size={14} /> Professional journey</div>
        <h1 className="mt-7 text-4xl font-bold tracking-tight md:text-5xl">From hands-on delivery to <span className="gradient-text">enterprise system design.</span></h1>
        <p className="section-copy text-lg">Five-plus years building, improving, and supporting production systems across telecom, banking, business operations, and vehicle tracking.</p>

        <ol className="mt-14 space-y-10" aria-label="Professional experience">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`}>
              <article className="relative border-l-2 border-blue-500/25 pl-7">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="soft-card motion-safe:hover:translate-y-0">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div><h2 className="text-xl font-semibold">{item.role}</h2><p className="mt-1 font-medium text-blue-600 dark:text-blue-400">{item.company}</p></div>
                    <span className="whitespace-nowrap text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-5 text-sm font-medium leading-6 text-foreground/85">{item.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />{bullet}</li>)}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
