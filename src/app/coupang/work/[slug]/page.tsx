import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import FitAside from "@/components/coupang/FitAside";
import Footer from "@/components/coupang/Footer";
import Header from "@/components/coupang/Header";
import styles from "@/components/coupang/coupang.module.css";
import { coupangProjects, getFeature } from "@/data/coupangContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return coupangProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/coupang/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = coupangProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function CoupangWorkDetail({
  params,
}: PageProps<"/coupang/work/[slug]">) {
  const { slug } = await params;
  const project = coupangProjects.find((p) => p.slug === slug);
  const feature = getFeature(slug);
  if (!project?.detail || !feature) notFound();
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={coupangProjects}
        basePath="/coupang"
        nav={<Header />}
        footer={<Footer />}
        aside={<FitAside points={feature.fit} />}
      />
    </div>
  );
}
