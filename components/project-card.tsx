import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isBlue = project.accent === "blue";

  return (
    <article className="project-shell">
      <div className="h-full p-6 md:p-7">
        <div className="flex items-start justify-between gap-5">
          <span className={`project-icon ${isBlue ? "text-blue-500" : "text-purple-500"}`}>
            <Icon aria-hidden="true" size={28} />
          </span>
          <span className="text-xs font-semibold text-muted-foreground">{project.period}</span>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {project.context}
        </p>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <dl className="mt-5 space-y-4 text-sm leading-6">
          <div>
            <dt className="font-semibold text-foreground">Challenge</dt>
            <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Contribution</dt>
            <dd className="mt-1 text-muted-foreground">{project.contribution}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Outcome</dt>
            <dd className="mt-1 text-muted-foreground">{project.outcome}</dd>
          </div>
        </dl>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="tech-pill">{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
