import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthCase from "@/components/growth/GrowthCase";
import { siteCase } from "@/data/caseAdapter";
import { BASE, CLOSING, getLogisticsFeature, logisticsProjects } from "@/data/logisticsContent";
import { getLogisticsProject, logisticsDetails } from "@/data/logisticsProjects";

export const dynamicParams = false;

// 기존에 열려 있던 상세 주소(서브 프로젝트 포함)는 그대로 유지
const caseStudies = logisticsDetails.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/logistics/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getLogisticsProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function LogisticsWorkDetail({ params }: PageProps<"/logistics/work/[slug]">) {
  const { slug } = await params;
  const found = siteCase(slug, logisticsProjects, caseStudies, getLogisticsFeature);
  if (!found) notFound();
  return (
    <GrowthCase
      data={found.data}
      base={BASE}
      others={found.others}
      footer={{ ...CLOSING, role: "Logistics Product Manager" }}
    />
  );
}
