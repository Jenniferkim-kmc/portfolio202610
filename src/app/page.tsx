import GrowthHome, { type HomeHero } from "@/components/growth/GrowthHome";
import { siteCards } from "@/data/caseAdapter";
import { BASE, CLOSING, getRootFeature, rootProjects } from "@/data/rootContent";

// 도메인 공통 PM 히어로: 커머스(A/B 테스트)와 물류(1만 건당 미배송) 대표 성과를 하나씩
const hero: HomeHero = {
  badge: "서비스기획 · PM 포트폴리오",
  title: (
    <>
      기능 출시에서 멈추지 않고
      <br />
      숫자가 움직이는 데까지
      <br />
      <em>책임지는 기획자</em>
    </>
  ),
  sub: (
    <>
      커머스 셀러 어드민부터 라스트마일 운영까지 기획하며, 254명 A/B 테스트로 카테고리 인지율을
      <br />
      55.1%에서 <strong>75.4%</strong>로 올리고, 배송 1만 건당 출입 불가 미배송을 54.2% 줄인 서비스기획자 김유정입니다.
    </>
  ),
};

// 기본 포트폴리오: /growth와 같은 틀, 히어로와 프로젝트만 루트 구성
export default function Home() {
  return (
    <GrowthHome
      base={BASE}
      hero={hero}
      cards={siteCards(rootProjects, getRootFeature)}
      footer={{ ...CLOSING, role: "Product Manager" }}
    />
  );
}
