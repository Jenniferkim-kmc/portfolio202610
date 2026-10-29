import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import GrowthFitAside from "@/components/growth/GrowthFitAside";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import { BASE, CLOSING, getPolarisFeature, polarisProjects } from "@/data/polarisContent";
import styles from "@/app/growth/growth.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return polarisProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/polaris/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = polarisProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function PolarisWorkDetail({
  params,
}: PageProps<"/polaris/work/[slug]">) {
  const { slug } = await params;
  const project = polarisProjects.find((p) => p.slug === slug);
  const feature = getPolarisFeature(slug);
  if (!project?.detail || !feature) notFound();
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={polarisProjects}
        basePath={BASE}
        nav={<GrowthHeader base={BASE} />}
        footer={<GrowthFooter {...CLOSING} />}
        aside={<GrowthFitAside points={feature.fit} title="폴라리스오피스 AI 제품 기획과의 연결점" />}
      />
    </div>
  );
}
