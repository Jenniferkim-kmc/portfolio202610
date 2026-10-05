import Link from "next/link";
import { projects, type Project } from "@/data/projects";

function ProjectRow({ project }: { project: Project }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold break-keep transition-opacity group-hover:opacity-70 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
          {project.tag && (
            <span className="rounded-full border border-zinc-300 px-2 py-0.5 text-xs font-medium text-zinc-500">
              {project.tag}
            </span>
          )}
          {project.category}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed break-keep text-zinc-600">
          {project.summary}
        </p>
        {project.detail && (
          <p className="mt-4 text-sm font-medium text-zinc-900">
            자세히 보기 →
          </p>
        )}
      </div>
      <span className="shrink-0 pl-6 text-sm font-medium text-zinc-400">
        {project.year}
      </span>
    </>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-20">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          SELECTED WORK
        </p>
        <ul className="mt-2 divide-y divide-zinc-200">
          {/* 서브 프로젝트는 대표 작업 대신 PROJECTS / INTERNSHIP에서 보여줌 */}
          {projects
            .filter((project) => project.tag !== "서브 프로젝트")
            .map((project) => (
            <li key={project.slug}>
              {project.detail ? (
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex items-center justify-between py-8"
                >
                  <ProjectRow project={project} />
                </Link>
              ) : (
                <div className="flex items-center justify-between py-8">
                  <ProjectRow project={project} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
