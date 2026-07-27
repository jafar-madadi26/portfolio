import type { Metadata } from "next";
import { Download, GraduationCap, Languages, MapPin } from "lucide-react";
import Image from "next/image";
import { languages, profile, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.82fr]">
          <div>
            <div className="badge"><MapPin size={14} /> {profile.location}</div>
            <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Building systems that make <span className="gradient-text">complex work feel simple</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              I am a results-driven full-stack and systems development specialist with 5+ years of experience delivering scalable enterprise solutions in telecom, banking, sales operations, and vehicle tracking. I combine hands-on engineering with architecture, performance, documentation, and team collaboration.
            </p>
          </div>
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-xl">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src="/jafar-madadi-at-work.jpg"
                alt="Jafar Madadi working on enterprise software"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-5 pt-16 text-white">
                <p className="text-sm font-medium">Engineering reliable systems, one workflow at a time.</p>
              </div>
            </div>
          </figure>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="soft-card">
            <h2 className="text-2xl font-semibold">Technical expertise</h2>
            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}><h3 className="mb-3 text-sm font-semibold text-blue-600 dark:text-blue-400">{group.title}</h3><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="tech-pill">{skill}</span>)}</div></div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <article className="soft-card">
              <div className="mb-4 flex items-center gap-3"><GraduationCap className="text-blue-500" /><h2 className="text-xl font-semibold">Education</h2></div>
              <h3 className="font-medium">BSc in Computing Information Science</h3>
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">Kabul Polytechnic University · 2017 - 2021</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Computer science foundations with practical work in full-stack development, databases, mobile applications, networking, and security.</p>
            </article>
            <article className="soft-card">
              <div className="mb-4 flex items-center gap-3"><Languages className="text-purple-500" /><h2 className="text-xl font-semibold">Languages</h2></div>
              <div className="flex flex-wrap gap-2">{languages.map((language) => <span key={language} className="tech-pill">{language}</span>)}</div>
            </article>
          </div>
        </div>

        <div className="mt-10 text-center"><a href="/resume.pdf" target="_blank" rel="noreferrer" className="primary-button"><Download size={17} /> Download Resume</a></div>
      </div>
    </section>
  );
}
