import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthCase from "@/components/growth/GrowthCase";
import { siteCase } from "@/data/caseAdapter";
import { BASE, CLOSING, getB2bFeature, getB2bProject, b2bProjects } from "@/data/b2bContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return b2bProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/b2b/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getB2bProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function B2bWorkDetail({ params }: PageProps<"/b2b/work/[slug]">) {
  const { slug } = await params;
  const found = siteCase(slug, b2bProjects, b2bProjects, getB2bFeature);
  if (!found) notFound();
  return (
    <GrowthCase
      data={found.data}
      base={BASE}
      others={found.others}
      footer={{ ...CLOSING, role: "B2B Product Manager" }}
    />
  );
}
