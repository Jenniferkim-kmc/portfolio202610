import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import GrowthFitAside from "@/components/growth/GrowthFitAside";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import { BASE, CLOSING, getIshopcareFeature, ishopcareProjects } from "@/data/ishopcareContent";
import styles from "@/app/growth/growth.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return ishopcareProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ishopcare/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = ishopcareProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function IshopcareWorkDetail({
  params,
}: PageProps<"/ishopcare/work/[slug]">) {
  const { slug } = await params;
  const project = ishopcareProjects.find((p) => p.slug === slug);
  const feature = getIshopcareFeature(slug);
  if (!project?.detail || !feature) notFound();
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={ishopcareProjects}
        basePath={BASE}
        nav={<GrowthHeader base={BASE} />}
        footer={<GrowthFooter {...CLOSING} />}
        aside={<GrowthFitAside points={feature.fit} title="아이샵케어 직무와의 연결점" />}
      />
    </div>
  );
}
