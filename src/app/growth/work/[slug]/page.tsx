import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import GrowthFitAside from "@/components/growth/GrowthFitAside";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import { getGrowthFeature, growthCards } from "@/data/growthContent";
import { getGrowthProject, growthProjects } from "@/data/growthProjects";
import styles from "../../growth.module.css";

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
  const feature = getGrowthFeature(slug);
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={growthCards}
        basePath="/growth"
        nav={<GrowthHeader />}
        footer={<GrowthFooter />}
        aside={feature ? <GrowthFitAside points={feature.fit} /> : undefined}
      />
    </div>
  );
}
