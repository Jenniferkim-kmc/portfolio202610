import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/coupang/Footer";
import Header from "@/components/coupang/Header";
import styles from "@/components/coupang/coupang.module.css";
import { BASE, CLOSING, logisticsProjects } from "@/data/logisticsContent";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

// 기존에 열려 있던 상세 주소(서브 프로젝트 포함)는 그대로 유지
const caseStudies = projects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/logistics/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

export default async function LogisticsWorkDetail({
  params,
}: PageProps<"/logistics/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) notFound();
  return (
    <div className={`${styles.root} flex flex-1 flex-col`}>
      <CaseStudy
        project={{ ...project, detail: project.detail }}
        caseStudies={logisticsProjects}
        basePath={BASE}
        nav={<Header base={BASE} />}
        footer={<Footer {...CLOSING} />}
      />
    </div>
  );
}
