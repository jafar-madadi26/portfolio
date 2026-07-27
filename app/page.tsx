import { ArrowDown, ArrowRight, CheckCircle2, Download, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { companies, keyAreas, profile, projects, specializations, stats } from "@/data/portfolio";

const architecturePrinciples = [
  "Clear service boundaries and maintainable domain models",
  "Secure, well-documented APIs and integrations",
  "Performance measured at the database and application layers",
  "Automated testing and delivery practices that reduce risk",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="site-container hero-grid">
        <div className="space-y-8">
          <div className="badge"><Sparkles aria-hidden="true" size={14} /> Senior Software Engineer & Software Architect</div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            I design enterprise software that turns <span className="gradient-text">complex operations into dependable systems.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            I build full-stack platforms, scalable APIs, and workflow automation for telecom, banking, and business teams - connecting architecture decisions to practical delivery.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="primary-button">View projects <ArrowDown aria-hidden="true" size={17} /></a>
            <Link href="/contact" className="secondary-button">Contact me <ArrowRight aria-hidden="true" size={17} /></Link>
            <a href="/resume.pdf" download className="text-button"><Download aria-hidden="true" size={17} /> Download CV</a>
          </div>

          <div className="grid max-w-lg grid-cols-2 gap-4 pt-2">
            {stats.map((stat) => {
              const isBlue = stat.accent === "blue";
              return (
                <div key={stat.label} className={`stat-card ${isBlue ? "stat-card-blue" : "stat-card-purple"}`}>
                  <div className="flex items-center justify-between">
                    <span className={isBlue ? "text-blue-500" : "text-purple-500"} aria-hidden="true">●</span>
                    <TrendingUp aria-hidden="true" size={16} className="text-muted-foreground" />
                  </div>
                  <p className={`mt-2 text-3xl font-bold ${isBlue ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}>{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{stat.unit}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            {keyAreas.map(({ icon: Icon, label }) => (
              <div key={label} className="key-area">
                <Icon aria-hidden="true" size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[25rem] lg:max-w-none">
          <div className="hero-image-glow" aria-hidden="true" />
          <figure className="hero-image-frame">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-muted">
              <Image
                src="/jafar-madadi-headshot.jpg"
                alt="Jafar Madadi, Senior Software Engineer and Software Architect"
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 400px, 34vw"
                className="object-cover object-[50%_35%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">{profile.title}</p>
                <p className="mt-2 text-2xl font-semibold">{profile.name}</p>
                <p className="mt-1 text-sm text-white/80">{profile.location} · Open to relocate</p>
              </figcaption>
            </div>
          </figure>
          <div className="hero-note hidden md:block">
            <p className="text-xs text-muted-foreground">Enterprise experience</p>
            <p className="mt-1 font-semibold text-blue-600 dark:text-blue-400">Telecom · Banking · Operations</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/35 py-7" aria-label="Organizations">
        <div className="site-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <span className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">Experience across</span>
          {companies.map((company) => <span key={company} className="font-semibold text-foreground/75">{company}</span>)}
        </div>
      </section>

      <section id="projects" className="site-container page-section scroll-mt-24">
        <div className="mb-10 flex items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems designed around real operational needs"
            description="A selection of enterprise and product work, with the challenge, contribution, and outcome made explicit."
          />
          <Link href="/experience" className="hidden shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block dark:text-blue-400">View experience <span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="site-container page-section">
        <SectionHeading
          eyebrow="Engineering depth"
          title="Architecture that supports delivery"
          description="I approach architecture as a set of practical decisions that make software easier to operate, change, test, and understand."
        />
        <div className="mt-10 grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
          <div className="soft-card">
            <h3 className="text-xl font-semibold">Design priorities</h3>
            <ul className="mt-6 space-y-4">
              {architecturePrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-blue-500" size={18} />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {specializations.map(({ icon: Icon, ...item }) => (
              <article key={item.title} className="soft-card last:sm:col-span-2">
                <Icon aria-hidden="true" className="mb-5 text-blue-500" size={28} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} technologies`}>
                  {item.technologies.map((technology) => <li key={technology} className="tech-pill">{technology}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
