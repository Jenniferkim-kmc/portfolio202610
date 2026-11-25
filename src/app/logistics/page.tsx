import type { Metadata } from "next";
import GrowthHome, { type HomeHero } from "@/components/growth/GrowthHome";
import { siteCards } from "@/data/caseAdapter";
import { BASE, CLOSING, getLogisticsFeature, logisticsProjects } from "@/data/logisticsContent";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Logistics Product Manager",
  description: "물류 서비스 기획자 김유정(Jennifer Kim)의 포트폴리오.",
};

// 공동현관 UX 결과(src/data/projects.ts): 배송 예정 1만 건당 출입 불가 미배송 9.91 → 4.54건 (−54.2%, 실측)
const hero: HomeHero = {
  badge: "물류 서비스기획 · PM 포트폴리오",
  title: (
    <>
      배송 현장의 병목을
      <br />
      데이터로 쪼개고
      <br />
      <em>정책으로 고치는 기획자</em>
    </>
  ),
  sub: (
    <>
      공동현관 출입 UX 개선부터 낮배송 0→1까지 라스트마일 운영을 기획했고,
      <br />
      배송 1만 건당 출입 불가 미배송을 9.91건에서 <strong>4.54건</strong>으로 줄인 서비스기획자 김유정입니다.
    </>
  ),
};

// 물류 포트폴리오: /growth와 같은 틀, 히어로와 프로젝트만 물류 구성
export default function LogisticsHome() {
  return (
    <GrowthHome
      base={BASE}
      hero={hero}
      cards={siteCards(logisticsProjects, getLogisticsFeature)}
      footer={{ ...CLOSING, role: "Logistics Product Manager" }}
    />
  );
}
