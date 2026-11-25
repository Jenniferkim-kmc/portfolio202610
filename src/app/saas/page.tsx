import type { Metadata } from "next";
import GrowthHome, { type HomeHero } from "@/components/growth/GrowthHome";
import { siteCards } from "@/data/caseAdapter";
import { BASE, CLOSING, getSaasFeature, saasProjects } from "@/data/saasContent";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — B2B SaaS Product Manager",
  description: "SQL로 병목을 찾고 백오피스를 자동화해 운영 공수를 줄여 온 서비스기획자 김유정(Jennifer Kim)의 포트폴리오.",
};

// 잔여배차 수치: 지원자 1명당 10분 → 3~4분 (src/data/projects.ts 결과, 직접 측정)
const hero: HomeHero = {
  badge: "B2B SaaS 서비스기획 · PM 포트폴리오",
  title: (
    <>
      반복되는 운영을
      <br />
      시스템으로 바꿔
      <br />
      <em>운영 공수를 줄이는 기획자</em>
    </>
  ),
  sub: (
    <>
      커머스 파트너 어드민 0→1부터 라스트마일 운영 백오피스까지, SQL로 병목을 찾아 기획했고,
      <br />
      잔여배차 처리를 반자동화해 지원자 1명당 10분 걸리던 수기 업무를 <strong>3~4분</strong>으로 줄인 서비스기획자 김유정입니다.
    </>
  ),
};

// B2B SaaS 포트폴리오: /growth와 같은 틀, 히어로와 프로젝트만 운영 자동화 중심
export default function SaasHome() {
  return (
    <GrowthHome
      base={BASE}
      hero={hero}
      cards={siteCards(saasProjects, getSaasFeature)}
      footer={{ ...CLOSING, role: "B2B SaaS Product Manager" }}
    />
  );
}
