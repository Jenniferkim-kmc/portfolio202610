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

// 커머스 포트폴리오 4쪽 기준 대표 프로젝트 3개
export const features: GrowthFeature[] = [
  {
    slug: "pims-partners",
    type: "커머스 에이전트 시스템 0→1 구축",
    team: "애딥 · 1인 기획",
    problem:
      "벤더와 사용자뿐이던 마켓에 셀러 역할을 더해 판매자 활성화 구조를 설계하고, 드롭쉬핑 공동구매와 AI 콘텐츠 제작 지원까지 혼자 0→1로 기획했습니다.",
    contributions: [
      "기획 기간 3주 → 1주: 바이브 코딩으로 화면을 먼저 만들어 합의",
      "판매자 활성화 · 벤더·셀러 분리: 재고 없는 드롭쉬핑으로 셀러 진입장벽을 낮춤",
      "AI 에이전트 콘텐츠 제작 지원: 사진 보정 · 스튜디오샷 · 상세페이지 AI 생성",
    ],
    evidence: { label: "일정 기준 · 기획 3주 → 1주", tone: "measured" },
    pics: [
      {
        src: "/work/pims/commerce-cover.png",
        width: 1600,
        height: 1013,
        alt: "PiMS Partners 공동구매 상품 조회 화면. 총 상품, 총 판매건수, 참여 셀러 수, 총 매출 카드와 상품 목록 (수치는 예시 데이터).",
      },
    ],
    fit: [
      "공급(벤더)과 판매(셀러)를 나눠 상품이 올라오고 팔리는 흐름 자체를 설계한 사례입니다.",
      "출시 전에 프로젝트가 끝나 가설은 검증하지 못했고, 다시 한다면 가설마다 확인할 지표를 먼저 정하겠습니다.",
    ],
  },
  {
    slug: "yanolja-funnel",
    type: "업셀링 · 크로스셀링 구매 퍼널 개선",
    team: "패스트캠퍼스 · 기획자 5명 팀",
    problem:
      "숙박만 예약하던 사용자가 교통·레저와 상위 객실도 함께 보도록, 예약 흐름 안의 추천 지점 4곳을 설계했습니다.",
    contributions: [
      "3개 카테고리를 모두 인지한 비율 +20.3%p: 55.1% → 75.4% · 254명 프로토타입 A/B",
      "숙박만 인지 34.5% → 7.6%: 다른 카테고리를 모르던 사용자 감소",
      "개선 흐름 만족 88.9%: 판매 데이터 없이 인지율로 검증",
    ],
    evidence: { label: "프로토타입 A/B · 254명", tone: "measured" },
    pics: [
      {
        src: "/work/yanolja-funnel/room-after.png",
        width: 640,
        height: 1309,
        alt: "개선 후 객실 상세 화면. 상위 객실 추천과 한 줄 리뷰가 있다.",
      },
      {
        src: "/work/yanolja-funnel/checkout-after.png",
        width: 640,
        height: 1309,
        alt: "개선 후 예약 직전 화면. ‘같이 예약할 수 있어요’ 교통·레저 추천이 있다.",
      },
    ],
    fit: [
      "판매 데이터가 없는 조건에서 성공 지표(카테고리 인지율)를 먼저 정하고 A/B 테스트로 확인한 사례입니다.",
      "인지가 구매로 이어지는지는 증명하지 못해, 다시 한다면 체류 시간과 구매 전환율까지 함께 보겠습니다.",
    ],
  },
  {
    slug: "daytime-delivery",
    type: "미배송 재매칭 서비스 0→1",
    team: "딜리버스 · 단독 설계",
    problem:
      "새벽배송에 실패한 네이버 제휴 물량을 같은 날 낮 회차로 다시 배차하는 서비스입니다. 라이더 앱, 운영 어드민, TMS를 단독 설계했습니다.",
    contributions: [
      "배차 매칭률 82.5%: 릴리즈 17일 · 공고 622건 중 513건",
      "배차 확정 건 배송 완료 100%: 매칭된 513건 모두 배송 완료",
      "자동 전환율 76.9%: 운영자 수기 전환은 205개로 감소",
    ],
    evidence: { label: "실측 · 배차 매칭률 82.5%", tone: "measured" },
    pics: [
      {
        src: "/work/daytime-delivery/admin-convert.png",
        width: 1880,
        height: 440,
        alt: "운영 어드민 낮배송 전환 화면. 미배송 사유·유닛·섹터코드·전환 상태가 있다.",
      },
      {
        src: "/work/daytime-delivery/admin-dispatch.png",
        width: 1825,
        height: 780,
        alt: "운영 어드민 낮배송 배차 화면. 공고 상태별 건수와 공고별 할당·보상 조건이 있다.",
      },
    ],
    fit: [
      "주문 이후 배송 단계에서, 기준이 분명한 건은 시스템이 처리하고 판단이 필요한 건만 운영자가 보도록 설계한 사례입니다.",
      "릴리즈 후 운영 데이터로 두 가정(낮 출입, 단가 두 배)을 모두 확인했습니다.",
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
      "미배송 사유를 직접 집계해 7월 1일 미배송 51건 중 22건(43%)이 공동현관 비밀번호 때문이라는 걸 특정",
      "물량 증가 효과를 빼려고 배송 1만 건당 발생 건수로 전후 비교 (9.91 → 4.54건)",
    ],
    link: { slug: "daytime-delivery", label: "낮배송 분석 보기" },
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
    link: { slug: "yanolja-funnel", label: "야놀자 보기" },
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
    link: { slug: "yanolja-funnel", label: "회고 보기" },
  },
  {
    need: "실행 속도",
    q: "AI는 어디에 쓰고, 얼마나 빨라졌나요?",
    a: "AI로 IA·정책 초안을 정리하고 동작하는 화면을 먼저 만들어, AI 없이 3주로 잡혀 있던 기획 일정을 1주로 줄였습니다.",
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
