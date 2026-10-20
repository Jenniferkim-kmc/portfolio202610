import { projects, type Project } from "@/data/projects";
import { growthProjects } from "@/data/growthProjects";

// 루트(/) 포트폴리오: 물류 프로젝트 + 그로스에만 있는 프로젝트를 모두 모아 보여줌
// 같은 slug가 양쪽에 있으면 물류 쪽 내용을 사용
export const allProjects: Project[] = [
  ...projects,
  ...growthProjects.filter(
    (growth) => !projects.some((project) => project.slug === growth.slug),
  ),
];

export function getAnyProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
