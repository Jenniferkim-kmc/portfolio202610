import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getGrowthProject, growthProjects } from "@/data/growthProjects";

export const dynamicParams = false;

const caseStudies = growthProjects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/growth/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getGrowthProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function GrowthWorkDetail({
  params,
}: PageProps<"/growth/work/[slug]">) {
  const { slug } = await params;
  const project = getGrowthProject(slug);
  if (!project?.detail) notFound();
  return (
    <CaseStudy
      project={{ ...project, detail: project.detail }}
      caseStudies={caseStudies}
      basePath="/growth"
    />
  );
}
