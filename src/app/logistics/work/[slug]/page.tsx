import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

const caseStudies = projects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/logistics/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function LogisticsWorkDetail({
  params,
}: PageProps<"/logistics/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) notFound();
  return (
    <CaseStudy
      project={{ ...project, detail: project.detail }}
      caseStudies={caseStudies}
      basePath="/logistics"
    />
  );
}
