import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getPoomgoProject, poomgoProjects } from "@/data/poomgoProjects";

export const dynamicParams = false;

const caseStudies = poomgoProjects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/logistics/poomgo/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getPoomgoProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
    robots: { index: false },
  };
}

export default async function PoomgoWorkDetail({
  params,
}: PageProps<"/logistics/poomgo/work/[slug]">) {
  const { slug } = await params;
  const project = getPoomgoProject(slug);
  if (!project?.detail) notFound();
  return (
    <CaseStudy
      project={{ ...project, detail: project.detail }}
      caseStudies={caseStudies}
      basePath="/logistics/poomgo"
    />
  );
}
