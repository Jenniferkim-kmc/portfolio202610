import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthCase from "@/components/growth/GrowthCase";
import { siteCase } from "@/data/caseAdapter";
import { BASE, CLOSING, getSystemFeature, getSystemProject, systemProjects } from "@/data/systemContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return systemProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/system/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getSystemProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function SystemWorkDetail({ params }: PageProps<"/system/work/[slug]">) {
  const { slug } = await params;
  const found = siteCase(slug, systemProjects, systemProjects, getSystemFeature);
  if (!found) notFound();
  return (
    <GrowthCase
      data={found.data}
      base={BASE}
      others={found.others}
      footer={{ ...CLOSING, role: "시스템 기획자" }}
    />
  );
}
