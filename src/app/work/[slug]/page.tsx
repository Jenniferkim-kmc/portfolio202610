import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { allProjects, getAnyProject } from "@/data/allProjects";

export const dynamicParams = false;

const caseStudies = allProjects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getAnyProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function WorkDetail({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getAnyProject(slug);
  if (!project?.detail) notFound();
  return (
    <CaseStudy
      project={{ ...project, detail: project.detail }}
      caseStudies={caseStudies}
    />
  );
}
