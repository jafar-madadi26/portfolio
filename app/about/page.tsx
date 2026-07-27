import type { Metadata } from "next";
import { Award, Download, GraduationCap, Languages, MapPin, PlaySquare } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { education, languages, profile, recognition, skillGroups } from "@/data/portfolio";
import { resolveSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Jafar Madadi's software engineering background, architecture expertise, education, languages, and professional recognition.",
  alternates: { canonical: new URL("about", resolveSiteUrl()).toString() },
};

export default function AboutPage() {
  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.82fr]">
          <div>
            <div className="badge"><MapPin aria-hidden="true" size={14} /> {profile.location}</div>
            <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Engineering systems that make <span className="gradient-text">complex work feel clear.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              I am a Senior Software Engineer and Software Architect with 5+ years of experience delivering enterprise applications across telecommunications, banking, business operations, and vehicle tracking.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              My work connects hands-on full-stack delivery with system design, integration, testing, documentation, performance, and cross-functional collaboration. I care about architecture that remains understandable after launch.
            </p>
          </div>
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-xl">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src="/jafar-madadi-at-work.jpg"
                alt="Jafar Madadi working at a computer"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-5 pb-5 pt-16 text-sm font-medium text-white">
                Building reliable systems, one workflow at a time.
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Technical expertise"
            description="A broad full-stack toolkit grounded in backend engineering, data, cloud delivery, and software architecture."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.title} className="soft-card" aria-labelledby={`skills-${group.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 id={`skills-${group.title.toLowerCase().replace(/\s+/g, "-")}`} className="text-lg font-semibold text-blue-600 dark:text-blue-400">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <li key={skill} className="tech-pill">{skill}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
          <article className="soft-card">
            <div className="mb-5 flex items-center gap-3"><GraduationCap aria-hidden="true" className="text-blue-500" /><h2 className="text-xl font-semibold">Education</h2></div>
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">{education.institution} · {education.period}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{education.description}</p>
          </article>
          <article className="soft-card">
            <div className="mb-5 flex items-center gap-3"><Languages aria-hidden="true" className="text-purple-500" /><h2 className="text-xl font-semibold">Languages</h2></div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {languages.map((language) => <li key={language}>{language}</li>)}
            </ul>
          </article>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Growth & contribution"
            title="Recognition and knowledge sharing"
            description="Formal milestones and community work that complement day-to-day engineering practice."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {recognition.map((item) => (
              <article key={item.title} className="soft-card">
                <Award aria-hidden="true" className="text-blue-500" size={24} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.year}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
          <article className="soft-card mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              <PlaySquare aria-hidden="true" className="mt-1 shrink-0 text-purple-500" size={25} />
              <div>
                <h3 className="font-semibold">Jafar Explains</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Educational videos about technology, future skills, personal growth, health, business, and community development.</p>
              </div>
            </div>
            <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="secondary-button shrink-0">Visit channel <span aria-hidden="true">↗</span></a>
          </article>
        </div>

        <div className="mt-12 text-center"><a href="/resume.pdf" download className="primary-button"><Download aria-hidden="true" size={17} /> Download CV</a></div>
      </div>
    </section>
  );
}
