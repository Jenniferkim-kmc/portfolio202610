// 그로스 포트폴리오(/growth) 메인에 들어가는 내용
import { growthProjects } from "@/data/growthProjects";

export const EMAIL = "950426kim@naver.com";
export const PHONE = "010-5508-9646";

export const intro =
  "바로 투입되어 짧은 시간 안에 임팩트를 남기는 PM. 기능을 내놓는 데서 끝내지 않고, 숫자로 확인되는 변화까지 책임집니다.";

export const about = [
  "무엇이 문제인지, 왜 개선해야 하는지, 어떻게 바꿀지를 먼저 묻습니다. 사용자가 어디서 막히는지 인터뷰와 데이터로 확인하고, 바뀌어야 할 것을 요구사항으로 정확히 정의합니다.",
  "데이터는 SQL로 직접 뽑고, 화면은 Figma와 바이브코딩으로 직접 만듭니다. Claude와 GPT를 요구사항 정리부터 화면 구현까지 써서 같은 시간에 더 많이 검증합니다.",
];

export const tools = ["Figma", "Notion", "SQL", "VS Code", "Claude", "GPT", "바이브코딩"];

export type Pic = { src: string; width: number; height: number; alt: string; label?: string };

// 메인 첫 화면 이미지: 공동구매 상품 조회 화면(설계서 주석 없이 화면만)
export const heroPic: Pic = {
  src: "/work/pims/screen-groupbuy.png",
  width: 2800,
  height: 1773,
  alt: "PiMS Partners 공동구매 상품 조회 화면. 총 상품, 총 판매건수, 참여 셀러 수, 총 매출 카드와 상품 목록이 있다.",
};

// 프로젝트별 이미지: 한 칸에는 같은 종류만, 왼쪽→오른쪽이 설명 문장의 흐름 순서
// desktop: 데스크톱 화면 2장을 엇갈려 배치 / phone: 폰 화면 2장을 같은 높이로 / card: 카드 2장을 같은 너비로(전·후)
const looks: Record<string, { short: string; kind: "desktop" | "phone" | "card"; pics: [Pic, Pic] }> = {
  "pims-partners": {
    short: "PiMS Partners",
    kind: "desktop",
    pics: [
      {
        src: "/work/pims/screen-register-complete.png",
        width: 2453,
        height: 1415,
        alt: "상품 등록 완료 모달. 등록한 상품과 광고 효과 세 가지, 광고 등록하기 버튼이 있다.",
      },
      {
        src: "/work/pims/screen-ad-list.png",
        width: 2800,
        height: 1837,
        alt: "광고 상품 리스트 화면. 노출중·대기중·종료·총 광고 상품 카드와 광고 상품 목록이 있다.",
      },
    ],
  },
  housedeal: {
    short: "하우스딜",
    kind: "phone",
    pics: [
      {
        src: "/work/housedeal/map.png",
        width: 1179,
        height: 2556,
        alt: "하우스딜 지도 기반 매물 조회 화면.",
      },
      {
        src: "/work/housedeal/listing-detail.png",
        width: 1179,
        height: 2580,
        alt: "하우스딜 매물 상세 화면. 실거래가 알림 받기 버튼과 지역 평당가 비교 차트가 있다.",
      },
    ],
  },
  "entrance-ux": {
    short: "출입 정보 UX",
    kind: "card",
    pics: [
      {
        src: "/work/entrance-ux/before.png",
        width: 820,
        height: 828,
        alt: "개선 전 배송 카드. 출입 정보가 '정보 없음'으로 표시된다.",
        label: "개선 전",
      },
      {
        src: "/work/entrance-ux/after.png",
        width: 346,
        height: 515,
        alt: "개선 후 배송 카드. 맨 위에 비밀번호 미등록 안내와 다른 방법 찾기 버튼이 있다.",
        label: "개선 후",
      },
    ],
  },
};

export const works = growthProjects
  .filter((p) => looks[p.slug])
  .map((p) => ({
    slug: p.slug,
    href: `/growth/work/${p.slug}`,
    short: looks[p.slug].short,
    kind: looks[p.slug].kind,
    pics: looks[p.slug].pics,
    title: p.title,
    category: p.category,
    summary: p.summary,
    year: p.year,
    metric: p.detail?.metrics[0],
  }));
