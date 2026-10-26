// /growth — 메인 프로젝트 카드·역량 질문 콘텐츠 (/coupang과 같은 형식)
// 모든 수치·기간·역할은 src/data/growthProjects.ts 원본에서 가져옴.
import { growthProjects } from "@/data/growthProjects";

export const EMAIL = "950426kim@naver.com";
export const PHONE = "010-5508-9646";

export type Pic = { src: string; width: number; height: number; alt: string };

export type GrowthFeature = {
  slug: string;
  type: string;
  // 카드에 보여줄 담당 범위
  team: string;
  problem: string;
  contributions: string[];
  // 성과를 어디까지 말할 수 있는지: 실측 / 측정 전
  evidence: { label: string; tone: "measured" | "pending" };
  pics: Pic[];
  fit: string[];
};

export const features: GrowthFeature[] = [
  {
    slug: "entrance-ux",
    type: "데이터 기반 지표 개선 · 라이더 앱",
    team: "라이더 앱 (딜리래빗) 개선",
    problem:
      "‘기능이 없다’는 VOC를 데이터로 다시 보니, 원인은 이미 있는 출입 정보가 보이지 않는 것이었습니다.",
    contributions: [
      "SQL로 미배송 사유를 집계해 원인의 43%가 출입 정보라는 걸 특정",
      "4개 경로로 모인 비밀번호를 우선순위대로 골라 바로 보이게 설계",
      "배포 후 지표 변동이 없는 걸 직접 확인하고, 주소 데이터 매핑 오류를 찾아 수정 요청",
    ],
    evidence: { label: "실측 · 1만 건당 9.91 → 4.54건", tone: "measured" },
    pics: [
      { src: "/work/entrance-ux/before.png", width: 820, height: 828, alt: "개선 전 배송 카드. 출입 정보가 '정보 없음'으로 표시된다." },
      { src: "/work/entrance-ux/after.png", width: 346, height: 515, alt: "개선 후 배송 카드. 비밀번호 미등록 안내와 다른 방법 찾기 버튼이 있다." },
    ],
    fit: [
      "SQL로 원인을 직접 특정하고, 물량 증가 효과를 뺀 1만 건당 지표로 개선 효과를 확인한 사례입니다.",
      "여러 개선을 한 번에 배포해 요인을 분리하지 못한 점을 회고로 남겼고, 이후 행동 지표를 기획 단계에서 먼저 정의하고 있습니다.",
    ],
  },
  {
    slug: "pims-partners",
    type: "B2B 커머스 0→1 · 파트너 어드민",
    team: "파트너 어드민 1인 기획",
    problem:
      "상품 하나가 등록부터 정산까지 상태가 계속 바뀌고, 운영자마다 할 수 있는 일이 달라야 했습니다. 기준부터 정하고 모든 화면에 같은 기준을 적용했습니다.",
    contributions: [
      "상품 등록·조회·재고·승인 관리의 화면과 정책, RBAC 운영자 권한 구조 설계",
      "첫 방문 가이드와 상품 등록 직후 광고 연결로 ‘등록 → 광고’ 활성화 흐름 설계",
      "AI로 IA·정책 초안을 정리하고 동작 화면을 먼저 만들어 기획~프론트 3주 → 1주",
    ],
    evidence: { label: "일정 기준 · 기획~프론트 3주 → 1주", tone: "measured" },
    pics: [
      {
        src: "/work/pims/screen-product-list.png",
        width: 2801,
        height: 1723,
        alt: "PiMS Partners 상품 조회 화면. 상품명 검색, 상태·분류 필터, 판매가·판매건수·총매출·재고수량·노출 토글·판매 상태가 있는 상품 목록.",
      },
    ],
    fit: [
      "활성화(첫 방문 3회까지만 가이드 노출)와 전환(등록 직후 광고 효과 안내)을 화면 흐름 안에 설계했습니다.",
      "출시 전에 프로젝트가 끝나 효과는 확인하지 못했습니다. 다시 한다면 첫 상품 등록까지 걸린 시간과 광고 전환율을 먼저 정의하겠습니다.",
    ],
  },
  {
    slug: "housedeal",
    type: "신규 서비스 0→1 · 리텐션 설계",
    team: "부동산 플랫폼 1인 기획",
    problem:
      "거래 전에도 다시 찾아올 이유가 필요했습니다. 실거래가 알림과 지역 시세 비교로 그 이유를 서비스 안에 만들었습니다.",
    contributions: [
      "시장·경쟁사·페인 포인트 분석으로 ‘거래 안정성 리포트·예상 시세’라는 차별점 정의",
      "실거래가 알림과 지역 평당가 비교로 다시 들어올 이유를 설계",
      "5개 영역의 화면을 화면 ID와 버튼별 동작이 담긴 설계서로 정리",
    ],
    evidence: { label: "설계 · 출시 성과 미포함", tone: "pending" },
    pics: [
      { src: "/work/housedeal/map.png", width: 1179, height: 2556, alt: "하우스딜 지도 기반 매물 조회 화면." },
      {
        src: "/work/housedeal/listing-detail.png",
        width: 1179,
        height: 2580,
        alt: "하우스딜 매물 상세 화면. 실거래가 알림 받기 버튼과 지역 평당가 비교 차트가 있다.",
      },
    ],
    fit: [
      "실거래가 알림과 지역 평당가 비교처럼, 거래 전에도 사용자가 다시 들어올 리텐션 장치를 설계한 사례입니다.",
      "시장·경쟁사 분석으로 차별점을 먼저 정의하고, 그 차별점이 화면 흐름 안에서 보이도록 설계했습니다.",
    ],
  },
];

export function getGrowthFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}

// 카드 순서대로 원본 프로젝트를 정렬
export const growthCards = features
  .map((f) => growthProjects.find((p) => p.slug === f.slug))
  .filter((p) => p !== undefined);

export type QA = {
  need: string;
  q: string;
  a: string;
  points: string[];
  link?: { slug: string; label: string };
  kind?: "plan";
};

export const questions: QA[] = [
  {
    need: "데이터로 문제 정의",
    q: "데이터는 직접 다루나요?",
    a: "네. DB에서 SQL로 직접 뽑아 원인을 찾고, 비교 기준이 되는 지표를 직접 정의합니다.",
    points: [
      "분석에 쓰는 모든 데이터는 DB에서 SQL 쿼리로 직접 뽑아 씁니다",
      "미배송 사유를 직접 집계해 원인의 43%가 출입 정보라는 걸 특정",
      "물량 증가 효과를 빼려고 배송 1만 건당 발생 건수로 전후 비교 (9.91 → 4.54건)",
    ],
    link: { slug: "entrance-ux", label: "공동현관 분석 보기" },
  },
  {
    need: "활성화 · 전환",
    q: "활성화와 전환은 어떻게 설계하나요?",
    a: "사용자가 행동한 바로 그 순간에, 다음 행동을 할 이유를 보여줍니다.",
    points: [
      "주요 페이지 진입 시 처음 3회까지만 기능 가이드를 띄우고, ‘다시 보지 않기’로 익숙한 파트너에게는 숨김",
      "상품 등록이 끝나면 광고 효과를 보여주고 ‘광고 등록하기’로 바로 연결",
      "‘나중에 하기’와 ‘1일간 표시하지 않기’로 피로도까지 조절",
    ],
    link: { slug: "pims-partners", label: "PiMS Partners 보기" },
  },
  {
    need: "리텐션",
    q: "사용자를 다시 오게 만든 경험이 있나요?",
    a: "하우스딜에서 거래 전에도 다시 들어올 이유를 서비스 안에 설계했습니다.",
    points: [
      "매물 상세에 ‘새로운 실거래가 등록 시 알림 받기’로 관심 매물에 돌아올 이유를 만듦",
      "지역 평당가 비교로 가격이 적정한지 바로 판단하게 함",
      "시장·경쟁사 분석으로 ‘거래 안정성 리포트·예상 시세’라는 차별점 정의",
    ],
    link: { slug: "housedeal", label: "하우스딜 보기" },
  },
  {
    need: "측정 설계",
    q: "결과가 기대와 다르면 어떻게 하나요?",
    a: "원인까지 따라가고, 다음에는 무엇으로 확인할지 기획 단계에서 먼저 정합니다.",
    points: [
      "공동현관 배포 후 지표 변동이 없자 직접 추적해 주소 데이터 매핑 오류를 찾고 수정 요청",
      "여러 개선을 한 번에 배포해 요인을 분리하지 못한 점을 회고로 남김",
      "이후 행동 지표와 측정 이벤트를 기획 단계에서 함께 정의",
    ],
    link: { slug: "entrance-ux", label: "회고 보기" },
  },
  {
    need: "실행 속도",
    q: "AI는 어디에 쓰고, 얼마나 빨라졌나요?",
    a: "AI로 IA·정책 초안을 정리하고 동작하는 화면을 먼저 만들어, 기획~프론트를 3주에서 1주로 줄였습니다.",
    points: [
      "VS Code에 노션·구글 드라이브·캘린더·UI/UX 툴·리서치 툴을 MCP로 연결해 한 곳에서 작업",
      "동작하는 화면을 먼저 만든 뒤 정책·예외 케이스를 화면 단위로 정리해 해석 차이를 줄임",
      "이 포트폴리오도 직접 만들었습니다",
    ],
    link: { slug: "pims-partners", label: "협업 방식 보기" },
  },
  {
    need: "입사 후 포부",
    q: "입사하면 무엇을 할 수 있나요?",
    a: "데이터 분석, 활성화·전환 흐름 설계, 측정 설계를 이미 해 왔기 때문에 합류 후 바로 프로젝트에 들어갈 수 있습니다.",
    points: [
      "바로 할 수 있는 일: DB에서 SQL로 데이터를 직접 뽑아 원인을 쪼개고, 물량 영향을 뺀 기준으로 비교합니다",
      "바로 맡을 수 있는 일: 활성화·전환 흐름과 정책·예외 정의, 동작하는 프로토타입으로 개발팀과 같은 기준 맞추기",
      "만들고 싶은 결과: 행동 지표와 이벤트까지 미리 정의해, ‘왜 바뀌었는지’까지 설명할 수 있는 성장",
    ],
    kind: "plan",
  },
];
