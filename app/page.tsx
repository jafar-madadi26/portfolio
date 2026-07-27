import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { companies, keyAreas, profile, projects, specializations, stats } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="site-container flex min-h-[calc(100vh-6rem)] items-center py-16">
        <div className="max-w-4xl space-y-8">
          <div className="badge"><Sparkles size={14} /> Senior Full-Stack & Systems Developer</div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Building enterprise software and <span className="gradient-text">scalable systems that simplify operations</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I design full-stack platforms, REST APIs, and workflow automation for telecom, banking, and enterprise teams—turning complex processes into dependable software.
          </p>

          <div className="grid max-w-md grid-cols-2 gap-4 pt-2">
            {stats.map((stat) => (
              <div key={stat.label} className={`rounded-xl border p-4 ${stat.color === "blue" ? "border-blue-500/20 bg-blue-500/10" : "border-purple-500/20 bg-purple-500/10"}`}>
                <div className="flex items-center justify-between"><span className={stat.color === "blue" ? "text-blue-500" : "text-purple-500"}>●</span><TrendingUp size={16} className="text-muted-foreground" /></div>
                <p className={`mt-2 text-3xl font-bold ${stat.color === "blue" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}>{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{stat.unit}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {keyAreas.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/50 px-4 py-2">
                <Icon size={16} className="text-blue-600 dark:text-blue-400" /><span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link href="/contact" className="primary-button">Get in touch <ArrowRight size={17} /></Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="secondary-button">View resume</a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/40 pt-8 text-sm text-muted-foreground">
            <span className="uppercase tracking-wider">Worked with</span>
            {companies.map((company) => <span key={company} className="font-semibold text-foreground/70">{company}</span>)}
          </div>
        </div>
      </section>

      <section className="site-container page-section">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div><h2 className="section-title">Featured Systems</h2><p className="section-copy">Selected enterprise platforms and operational systems from my professional experience.</p></div>
          <Link href="/experience" className="hidden text-sm font-medium text-blue-600 sm:block">View experience →</Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(({ icon: Icon, ...project }) => (
            <article key={project.title} className={`group overflow-hidden rounded-2xl bg-gradient-to-br p-px ${project.tone === "blue" ? "from-blue-500/30 via-border to-purple-500/20" : "from-purple-500/30 via-border to-blue-500/20"}`}>
              <div className="h-full rounded-[calc(1rem-1px)] bg-background/95 p-6">
                <div className={`mb-6 flex aspect-[16/7] items-center justify-center rounded-lg bg-gradient-to-br ${project.tone === "blue" ? "from-blue-500/10 to-purple-500/10" : "from-purple-500/10 to-blue-500/10"}`}>
                  <Icon size={52} className={project.tone === "blue" ? "text-blue-500" : "text-purple-500"} />
                </div>
                <p className="text-xs font-medium text-muted-foreground">{project.subtitle}</p>
                <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container page-section">
        <div className="mb-12 text-center"><h2 className="section-title">Specializations</h2><p className="section-copy mx-auto">Deep experience across software engineering, enterprise delivery, and dependable systems operations.</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((item) => (
            <article key={item.title} className="soft-card">
              <div className="mb-4 flex items-center gap-3"><span className="text-2xl">{item.icon}</span><h3 className="text-lg font-semibold">{item.title}</h3></div>
              <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{item.technologies.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
