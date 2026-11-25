import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthCase from "@/components/growth/GrowthCase";
import { allProjects, getAnyProject } from "@/data/allProjects";
import { siteCase } from "@/data/caseAdapter";
import { BASE, CLOSING, getRootFeature, rootProjects } from "@/data/rootContent";

export const dynamicParams = false;

// 기존에 열려 있던 상세 주소(서브 프로젝트 포함)는 그대로 유지
const caseStudies = allProjects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getAnyProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function WorkDetail({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const found = siteCase(slug, rootProjects, caseStudies, getRootFeature);
  if (!found) notFound();
  return (
    <GrowthCase data={found.data} base={BASE} others={found.others} footer={{ ...CLOSING, role: "Product Manager" }} />
  );
}
