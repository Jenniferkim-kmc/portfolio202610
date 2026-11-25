import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthCase from "@/components/growth/GrowthCase";
import { getGrowthCase, growthCases } from "@/data/growthCase";
import { getGrowthProject } from "@/data/growthProjects";

export const dynamicParams = false;

export function generateStaticParams() {
  return growthCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/growth/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getGrowthProject(slug);
  const data = getGrowthCase(slug);
  if (!data) return {};
  return {
    title: `${project?.title ?? data.title.join(" ")} — 김유정 (Jennifer Kim)`,
    description: project?.summary ?? data.lede,
  };
}

export default async function GrowthWorkDetail({ params }: PageProps<"/growth/work/[slug]">) {
  const { slug } = await params;
  const data = getGrowthCase(slug);
  if (!data) notFound();
  return <GrowthCase data={data} />;
}
