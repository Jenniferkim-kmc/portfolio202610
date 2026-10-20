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

// list·basePath를 넘기면 그로스 포트폴리오처럼 다른 프로젝트 목록을 보여줌
// showSubProjects: 서브 프로젝트도 목록 맨 아래에 보여줌 (기본 포트폴리오는 숨기고 PROJECTS / INTERNSHIP에서 보여줌)
export default function Work({
  list = projects,
  basePath = "",
  showSubProjects = false,
}: {
  list?: Project[];
  basePath?: string;
  showSubProjects?: boolean;
}) {
  const isSub = (project: Project) => project.tag === "서브 프로젝트";
  const shown = showSubProjects
    ? [...list.filter((p) => !isSub(p)), ...list.filter(isSub)]
    : list.filter((p) => !isSub(p));
  return (
    <section id="work" className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-20">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          SELECTED WORK
        </p>
        {list.length === 0 && (
          <p className="mt-6 text-base text-zinc-400">프로젝트를 준비하고 있습니다.</p>
        )}
        <ul className="mt-2 divide-y divide-zinc-200">
          {shown.map((project) => (
            <li key={project.slug}>
              {project.detail ? (
                <Link
                  href={`${basePath}/work/${project.slug}`}
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
