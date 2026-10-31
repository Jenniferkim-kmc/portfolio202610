// /saas — B2B SaaS 서비스기획 포트폴리오 (쿠팡 페이지와 같은 디자인·형식, 특정 공고 없음)
// 초점: SQL로 병목 찾기 · 백오피스/파트너 어드민 기획 · 수기 운영의 자동화 · 운영 공수 절감
// 선정: 잔여배차(운영 공수 실측 절감, 파트너 셀프 등록 + 운영자 승인) → PiMS Partners(B2B 파트너 어드민 0→1, RBAC·정산·상태값)
//       → 낮배송(수기 재배송을 규칙 기반 자동 전환으로) → 공동현관(SQL로 원인 특정, 정규화 지표로 검증)
// 제외: 하우스딜(B2C 부동산 앱), 야놀자(부트캠프), 화이트머스크(마케팅)
// 수치·역할은 원본(projects.ts, growthProjects.ts)과 /logistics 상세 복사본(logisticsProjects.ts)에서만 가져옴.
import type { Feature, QA } from "@/data/coupangContent";
import { allProjects } from "@/data/allProjects";
import { logisticsDetails } from "@/data/logisticsProjects";
import type { Project } from "@/data/projects";

export const BASE = "/saas";

export const CLOSING = {
  title: ["반복되는 운영을 줄이는 제품을,", "함께 만들고 싶습니다."] as [string, string],
  text: "SQL로 병목을 찾고, 기준은 정책으로, 반복은 시스템으로 바꾸고, 결과는 숫자로 확인하겠습니다.",
};

export const features: Feature[] = [
  {
    slug: "dispatch-automation",
    type: "운영 자동화 · 백오피스·파트너 셀프 등록",
    team: "운영 백오피스·라이더 앱 개선",
    problem:
      "구인 한 건마다 구글시트·구글폼·채널톡·슬랙을 오가며 운영자가 6~7단계를 손으로 처리했고, 건당 약 10분이 걸렸습니다.",
    contributions: [
      "운영 프로세스를 단계별로 분해해 지원자 확인·개별 연락·수기 배차를 자동화 대상으로 정의",
      "파트너(운송사)가 직접 공고를 등록하고 운영자가 승인하는 구조로 중계 업무 제거, 단가·프로모션 권한은 운영자에게 유지",
      "새 화면 대신 기존 관리 화면을 확장하고, 요구사항을 ‘이번 범위 / 다음 업데이트’로 나눠 단계 배포",
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
    slug: "pims-partners",
    type: "B2B 파트너 어드민 0→1 · RBAC·정산",
    team: "파트너 어드민 1인 기획",
    problem:
      "셀러·벤더가 상품을 올리고 승인받아 정산받기까지 상태가 계속 바뀌고, 운영자마다 할 수 있는 일이 달라야 했습니다.",
    contributions: [
      "상품 등록·조회·재고·승인 관리 화면과 상태값 기준, RBAC 운영자 권한 구조 설계",
      "직판·벤더·공동구매별 거래·정산 구조와 검수·제재·정산·CS 운영 정책 수립",
      "첫 방문 3회 기능 가이드로 운영팀 개별 안내 없이 핵심 기능을 익히게 하고, AI로 기획~프론트 3주 → 1주",
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
    slug: "daytime-delivery",
    type: "규칙 기반 자동화 · 운영 어드민·TMS",
    team: "라이더앱, 백오피스, TMS 개선",
    problem:
      "미배송 건을 다시 배송하려면 운영팀이 물품마다 사유 확인·후속 절차·실물 확인·회차 전환을 손으로 거쳐야 했습니다.",
    contributions: [
      "SQL로 회차·사유별 1만 건당 미배송을 비교해 새벽배송이 당일배송의 약 3.7배임을 확인",
      "기준이 분명한 사유 5종은 자동 전환, 판단이 필요한 8종만 운영자 검토로 나눔",
      "전환·공고 생성·마감 시각을 시스템에 고정하고, 운영 어드민·관제 화면을 같은 기준으로 설계",
    ],
    evidence: { label: "2026.10.26 릴리즈 · 성과 측정 전", tone: "pending" },
    pics: [
      {
        src: "/work/daytime-delivery/admin-convert.png",
        width: 1880,
        height: 440,
        alt: "운영 어드민 낮배송 전환 페이지. 운영자 검토 대상만 모아 보여주고, 11:00까지 전환해야 당일 낮배송에 포함된다는 기준을 상단에 고정했다.",
      },
    ],
    fit: [],
  },
  {
    slug: "entrance-ux",
    type: "SQL 분석 · 데이터 기반 개선",
    team: "라이더 앱 (딜리래빗) 개선",
    problem:
      "‘기능이 없다’는 VOC를 SQL로 다시 보니, 원인은 이미 있는 정보가 보이지 않는 것이었습니다.",
    contributions: [
      "미배송 사유를 SQL로 집계해 원인의 43%가 출입 정보 부재임을 특정",
      "물량 증가 효과를 뺀 1만 건당 지표로 개선 효과를 검증",
      "배포 후 지표가 움직이지 않자 데이터를 추적해 주소 매핑 오류를 찾고 화주사·개발팀에 수정 요청",
    ],
    evidence: { label: "실측 · 1만 건당 9.91 → 4.54건", tone: "measured" },
    pics: [
      {
        src: "/work/entrance-ux/after.png",
        width: 346,
        height: 515,
        alt: "개선 후 배송 카드. 주소 바로 아래 출입 정보 상태 버튼과 다른 방법 찾기 버튼이 있다.",
      },
    ],
    fit: [],
  },
];

export function getSaasFeature(slug: string) {
  return features.find((feature) => feature.slug === slug);
}

// 딜리버스 프로젝트는 시스템 흐름·지표 설계 표가 추가된 /logistics 복사본, PiMS는 원본을 사용
export const saasProjects: Project[] = features
  .map(
    (feature) =>
      logisticsDetails.find((p) => p.slug === feature.slug && p.detail) ??
      allProjects.find((p) => p.slug === feature.slug),
  )
  .filter((project): project is Project => Boolean(project?.detail));

export function getSaasProject(slug: string) {
  return saasProjects.find((project) => project.slug === slug);
}

export const questions: QA[] = [
  {
    need: "SQL · 데이터로 병목 찾기",
    q: "데이터는 직접 다루나요?",
    a: "네. 분석에 쓰는 데이터는 DB에서 SQL로 직접 뽑고, 비교 기준이 되는 지표도 직접 정의합니다.",
    points: [
      "미배송 사유를 집계해 원인의 43%가 출입 정보 부재임을 특정",
      "회차별 1만 건당 미배송을 비교해 새벽 58.1건 vs 당일 15.8건 (약 3.7배)을 확인하고 재배송 시간대를 결정",
      "물량 증가 효과를 빼려고 1만 건당 발생 건수로 전후를 비교 (9.91 → 4.54건)",
    ],
    link: { slug: "entrance-ux", label: "SQL 분석 보기" },
  },
  {
    need: "운영 공수 절감",
    q: "운영 공수를 실제로 줄여 본 경험이 있나요?",
    a: "잔여배차 구인 업무를 단계별로 분해해, 판단이 필요 없는 구간을 백오피스와 앱이 대신하게 했습니다.",
    points: [
      "화이트 지역 6단계 → 4단계, 건당 약 10분 → 3분 이내 (직접 측정)",
      "블루 지역은 운송사 직접 신청 + 운영자 승인 구조로 건당 약 10분 → 4분 이내 (직접 측정)",
      "9월 물량 기준 월 약 266시간, 하루 운영자 1명분 이상의 업무 시간 절감",
    ],
    link: { slug: "dispatch-automation", label: "잔여배차 보기" },
  },
  {
    need: "백오피스 · 권한 설계",
    q: "B2B 어드민의 권한과 상태는 어떻게 설계하나요?",
    a: "상태값·권한·정산 기준을 먼저 정하고, 모든 화면에 같은 기준을 적용합니다.",
    points: [
      "PiMS Partners: 상품 등록·승인·노출·주문·정산으로 바뀌는 상태 기준과 RBAC 운영자 권한 구조 설계",
      "낮은 권한이 높은 권한을 수정하거나 마지막 관리자를 삭제하는 경우까지 막는 규칙 정의",
      "판매건수·총매출은 교환·환불·반품을 뺀 값으로 정의해 파트너가 숫자를 믿을 수 있게 함",
    ],
    link: { slug: "pims-partners", label: "PiMS Partners 보기" },
  },
  {
    need: "자동화 기준",
    q: "무엇을 자동화하고, 무엇을 사람에게 남기나요?",
    a: "기준이 분명한 건은 시스템이, 판단이 필요한 건만 운영자가 처리하도록 나눕니다.",
    points: [
      "낮배송: 출입 불가·비밀번호 미입력 등 5종은 10:20에 자동 전환, 고객 요청·주소 불일치 등 8종은 운영자 검토",
      "잔여배차: 운송사에 공고 등록 권한을 주되 단가·프로모션은 운영자가 계속 관리",
      "수기 공고는 5가지 검증 조건과 사유별 오류 메시지로 운영자가 원인을 따로 찾지 않게 설계",
    ],
    link: { slug: "daytime-delivery", label: "낮배송 보기" },
  },
  {
    need: "실행 속도 · 협업",
    q: "개발·운영팀과는 어떻게 같은 기준을 맞추나요?",
    a: "동작하는 화면을 먼저 만들고, 요구사항은 ‘이번 범위 / 다음 업데이트’로 나눠 합의합니다.",
    points: [
      "AI로 IA·정책 초안을 정리하고 동작 화면을 먼저 만들어 기획~프론트 3주 → 1주",
      "최대 자동화를 원한 운영팀과 일정 안에 다 만들 수 없다는 개발팀 사이에서 범위를 나눠 단계 배포",
      "회고: 일정이 급해 중간 검토를 건너뛰었다가 요구사항을 놓친 뒤, 짧게라도 다시 맞춰보는 것을 원칙으로 삼음",
    ],
    link: { slug: "pims-partners", label: "협업 방식 보기" },
  },
  {
    need: "입사 후 포부",
    q: "입사하면 무엇을 할 수 있나요?",
    a: "SQL 분석, 백오피스·권한 설계, 운영 자동화를 이미 해 왔기 때문에 합류 후 바로 프로젝트에 들어갈 수 있습니다.",
    points: [
      "바로 할 수 있는 일: SQL로 운영 데이터를 쪼개 반복 업무와 병목이 어디서 생기는지 숫자로 찾기",
      "바로 맡을 수 있는 일: 상태값·권한·예외 정책을 정의하고, 동작하는 프로토타입으로 개발·운영팀과 기준 맞추기",
      "만들고 싶은 결과: 고객사 운영자가 같은 일을 더 적은 손으로 끝내는 흐름을 지표로 확인하며 개선",
    ],
    kind: "plan",
  },
];

export const steps = [
  {
    title: "병목을 숫자로 찾습니다",
    text: "운영자가 실제로 일하는 순서를 단계별로 나누고, SQL로 데이터를 뽑아 시간이 새는 지점을 확인합니다.",
  },
  {
    title: "기준은 정책으로, 반복은 시스템으로",
    text: "상태값·권한·예외를 운영 정책으로 정하고, 판단이 필요 없는 구간부터 백오피스와 앱이 대신하게 설계합니다.",
  },
  {
    title: "공수로 확인합니다",
    text: "건당 처리 시간처럼 무엇으로 효과를 볼지 미리 정하고, 배포 후 직접 측정해 결과와 다음 개선점을 확인합니다.",
  },
];

export const tools = ["SQL", "Figma", "Notion", "기능명세서", "운영 정책서", "IA", "바이브코딩 프로토타입", "VS Code", "Claude", "GPT"];
