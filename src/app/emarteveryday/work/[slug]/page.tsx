import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import FitAside from "@/components/coupang/FitAside";
import Footer from "@/components/coupang/Footer";
import Header from "@/components/coupang/Header";
import styles from "@/components/coupang/coupang.module.css";
import { BASE, CLOSING, emartEverydayProjects, getEmartEverydayFeature } from "@/data/emarteverydayContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return emartEverydayProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/emarteveryday/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = emartEverydayProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function EmartEverydayWorkDetail({
  params,
}: PageProps<"/emarteveryday/work/[slug]">) {
  const { slug } = await params;
  const project = emartEverydayProjects.find((p) => p.slug === slug);
  const feature = getEmartEverydayFeature(slug);
  if (!project?.detail || !feature) notFound();
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={emartEverydayProjects}
        basePath={BASE}
        nav={<Header base={BASE} />}
        footer={<Footer {...CLOSING} />}
        aside={<FitAside points={feature.fit} />}
      />
    </div>
  );
}
