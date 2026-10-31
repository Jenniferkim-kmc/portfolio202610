// 루트(/) 기본 포트폴리오 — /logistics와 같은 쿠팡 디자인. 특정 공고 없음.
// 프로젝트 원본은 allProjects(projects.ts + growthProjects.ts), 소개는 About 컴포넌트, FAQ는 이전 /growth FAQ 문구.
// 경력(Experience) 섹션은 사용자 요청으로 메인에서 뺌 (Experience.tsx 자체는 그대로 둠).
import type { Feature } from "@/data/coupangContent";
import { allProjects } from "@/data/allProjects";
import type { Project } from "@/data/projects";

export const BASE = "/";

export const LINKS = [
  { href: "#work", label: "프로젝트" },
  { href: "#ai", label: "AI 활용" },
  { href: "#about", label: "소개" },
  { href: "#faq", label: "자주 묻는 질문" },
];

// 기존 루트 푸터 문구
export const CLOSING = {
  title: ["다음 임팩트는", "함께 만들고 싶습니다."] as [string, string],
  text: "귀사와 함께하는 여정을 기대합니다.",
};

// About 컴포넌트 원문
export const ABOUT = {
  lead: "무엇이 문제인지, 왜 개선해야 하는지, 어떻게 바꿀지를 먼저 묻는 기획자입니다.",
  body: [
    "사용자가 어디서 어려움을 겪는지 인터뷰와 데이터로 확인하고, 어떻게 바뀌어야 하는지를 요구사항으로 정확히 정의해 실제 결과로 만듭니다.",
    "데이터는 SQL로 직접 뽑고, 화면은 Figma와 바이브코딩으로 직접 만듭니다. 문제 확인부터 동작하는 프로토타입까지 직접 완성하고, Claude와 GPT를 요구사항 정리·데이터 분석·화면 구현 전 과정에 활용해 같은 시간에 더 많은 것을 검증합니다. 빠른 업무 파악 능력과 AI 활용 능력으로, 어떤 팀에서든 즉시 투입되어 일할 수 있습니다.",
  ],
  skills: ["Figma", "Notion", "SQL", "VS Code", "Claude", "GPT", "바이브코딩", "스토리보드"],
};

// 기존 루트 Selected Work 순서 (물류 3개 → 그로스 2개), 서브 프로젝트(야놀자)는 기존처럼 목록에서 제외
export const features: Feature[] = [
  {
    slug: "dispatch-automation",
    type: "운영 시스템 기획 · 백오피스·라이더 앱",
    team: "배차 라이더앱, 백오피스 개선",
    problem:
      "물량이 늘어도 운영 인원을 늘릴 수 없어, 한 건을 처리하는 데 드는 시간 자체를 줄여야 했습니다.",
    contributions: [
      "수기 6~7단계 구인 프로세스를 분해해 판단이 필요 없는 구간을 자동화 대상으로 정의",
      "블루 지역은 운송사 신청 + 운영자 승인 구조로 바꾸고 단가·프로모션은 운영자가 관리",
      "운영팀 요구를 ‘이번 범위’와 ‘다음 업데이트’로 나눠 개발팀과 합의",
    ],
    evidence: { label: "실측 · 건당 10분 → 3~4분", tone: "measured" },
    pics: [
      {
        src: "/work/dispatch-automation/admin-dispatch.png",
        width: 1830,
        height: 690,
        alt: "운영 백오피스 배차 공고 목록. 공고 상태별 건수와 공고 목록, 선택한 공고의 일괄 편집 패널이 있다.",
      },
    ],
    fit: [],
  },
  {
    slug: "daytime-delivery",
    type: "0→1 신규 서비스 · 앱·어드민·TMS",
    team: "라이더앱, 백오피스, TMS 개선",
    problem:
      "늘어나는 미배송을 회차·사유별로 나눠 보니, 새벽배송 미배송의 대부분은 낮에는 풀리는 출입 문제였습니다.",
    contributions: [
      "1만 건당 미배송 비교로 새벽배송이 당일배송의 약 3.7배임을 확인",
      "차이의 약 4분의 3이 출입 사유임을 근거로 낮 시간대 별도 회차를 결정",
      "사유별 자동 전환 기준과 라이더 앱·운영 어드민·관제 화면 흐름, 운영 정책 설계",
    ],
    evidence: { label: "2026.10.26 릴리즈 · 성과 측정 전", tone: "pending" },
    pics: [
      {
        src: "/work/daytime-delivery/rider-job-detail.png",
        width: 375,
        height: 1160,
        alt: "라이더 앱 낮배송 공고 상세 화면. 근무 가능 시간대, 배송 구역 지도, 건당 단가와 총 보상이 표시된다.",
      },
      {
        src: "/work/daytime-delivery/rider-list.png",
        width: 375,
        height: 833,
        alt: "라이더 앱 낮배송 공고 목록. 유닛·섹터별 공고에 최대 보상 금액과 예상 건수가 표시된다.",
      },
    ],
    fit: [],
  },
  {
    slug: "entrance-ux",
    type: "데이터 기반 문제 해결 · 라이더 앱",
    team: "라이더 앱 (딜리래빗) 개선",
    problem:
      "‘기능이 없다’는 VOC를 데이터로 다시 보니, 원인은 이미 있는 출입 정보가 보이지 않는 것이었습니다.",
    contributions: [
      "미배송 사유를 집계해 원인의 43%가 공동현관 비밀번호임을 특정",
      "4개 경로의 비밀번호를 우선순위대로 골라 카드 상단에 노출하도록 설계",
      "배포 후 지표 변화가 없자 주소 데이터 매핑 오류를 찾아 화주사·개발팀에 수정 요청",
    ],
    evidence: { label: "실측 · 1만 건당 9.91 → 4.54건", tone: "measured" },
    pics: [
      {
        src: "/work/entrance-ux/before.png",
        width: 820,
        height: 828,
        alt: "개선 전 배송 카드. 출입 정보가 고객 정보 아래 텍스트로 묻혀 있다.",
      },
      {
        src: "/work/entrance-ux/after.png",
        width: 346,
        height: 515,
        alt: "개선 후 배송 카드. 주소 바로 아래 출입 정보 상태 버튼과 다른 방법 찾기 버튼이 있다.",
      },
    ],
    fit: [],
  },
  {
    slug: "pims-partners",
    type: "B2B 파트너 어드민 0→1 · RBAC·정산",
    team: "파트너 어드민 1인 기획",
    problem:
      "셀러·벤더가 상품을 올리고 승인받아 정산받기까지 상태가 계속 바뀌고, 운영자마다 할 수 있는 일이 달라야 했습니다.",
    contributions: [
      "상품 등록·조회·재고·승인 관리 화면과 상태값 기준, RBAC 운영자 권한 구조 설계",
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
    fit: [],
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
    fit: [],
  },
];

export function getRootFeature(slug: string) {
  return features.find((feature) => feature.slug === slug);
}

export const rootProjects: Project[] = features
  .map((feature) => allProjects.find((project) => project.slug === feature.slug))
  .filter((project): project is Project => Boolean(project?.detail));

// 이전 /growth 자주 묻는 질문 원문
export const faqs = [
  {
    q: "데이터는 어떻게 다루나요?",
    a: "SQL로 직접 뽑습니다. 공동현관 프로젝트에서는 미배송 사유를 직접 집계해 원인의 43%를 찾았고, 물량이 늘어난 효과를 빼려고 배송 1만 건당 발생 건수로 전후를 비교했어요.",
  },
  {
    q: "결과가 기대와 다르면 어떻게 하나요?",
    a: "원인까지 따라갑니다. 공동현관 배포 후 데이터 지표를 직접 확인해 보니 변동이 없었어요. 원인을 추적해 주소 1·2가 잘못 매핑되는 데이터 문제를 찾았고, 데이터 수정과 예외 처리를 요청했어요. 이후에는 행동 지표를 기획 단계에서 함께 정의해요.",
  },
  {
    q: "AI는 어디에 쓰나요?",
    a: "요구사항 정리부터 화면 구현까지 씁니다. VS Code에 노션, 구글 드라이브, 캘린더, UI/UX 툴, 리서치 툴, 기획 툴 등을 MCP로 연결해 두고 한 곳에서 일해요. 애딥에서는 AI로 IA와 정책 초안을 정리하고 바이브코딩으로 동작하는 화면을 먼저 만들어, 와이어프레임부터 프론트까지 3주 걸리던 과정을 1주로 줄였어요.",
  },
  {
    q: "개발·운영팀과는 어떻게 협업하나요?",
    a: "요구사항을 ‘이번 범위’와 ‘다음 업데이트’로 나눠 합의합니다. 잔여배차에서는 기존 관리 화면을 확장해 개발 범위를 줄였고, 일정이 급해도 기획안을 운영팀과 다시 맞춰본 뒤 개발에 넘기는 걸 원칙으로 삼고 있어요.",
  },
];
