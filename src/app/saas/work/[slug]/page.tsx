import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrowthCase from "@/components/growth/GrowthCase";
import { siteCase } from "@/data/caseAdapter";
import { BASE, CLOSING, getSaasFeature, getSaasProject, saasProjects } from "@/data/saasContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return saasProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/saas/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getSaasProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function SaasWorkDetail({ params }: PageProps<"/saas/work/[slug]">) {
  const { slug } = await params;
  const found = siteCase(slug, saasProjects, saasProjects, getSaasFeature);
  if (!found) notFound();
  return (
    <GrowthCase
      data={found.data}
      base={BASE}
      others={found.others}
      footer={{ ...CLOSING, role: "B2B SaaS Product Manager" }}
    />
  );
}
