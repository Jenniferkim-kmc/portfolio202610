import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/coupang/Footer";
import Header from "@/components/coupang/Header";
import styles from "@/components/coupang/coupang.module.css";
import { BASE, CLOSING, getSaasProject, saasProjects } from "@/data/saasContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return saasProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/saas/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getSaasProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function SaasWorkDetail({
  params,
}: PageProps<"/saas/work/[slug]">) {
  const { slug } = await params;
  const project = getSaasProject(slug);
  if (!project?.detail) notFound();
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={saasProjects}
        basePath={BASE}
        nav={<Header base={BASE} />}
        footer={<Footer {...CLOSING} />}
      />
    </div>
  );
}
