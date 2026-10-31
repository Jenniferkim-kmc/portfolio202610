import type { Metadata } from "next";
import PrintDocument from "@/components/print/PrintDocument";
import { saasProjects } from "@/data/saasContent";
import Home from "../page";
import Detail from "../work/[slug]/page";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — B2B SaaS PM 포트폴리오 전체",
  robots: { index: false },
};

// 인쇄·PDF 버튼용: 메인과 상세 페이지 전체를 한 문서로 이어 붙임 (각 페이지 컴포넌트를 그대로 재사용)
export default function SaasPrint() {
  return (
    <PrintDocument
      parts={[
        <Home key="home" />,
        ...saasProjects.map((p) => p.slug).map((slug) => (
          <Detail key={slug} params={Promise.resolve({ slug })} searchParams={Promise.resolve({})} />
        )),
      ]}
    />
  );
}
