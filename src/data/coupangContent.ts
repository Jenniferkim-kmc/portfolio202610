// /coupang — 쿠팡 [고객경험 개선 PM (주니어)] 지원용 포트폴리오 콘텐츠
// 모든 수치·기간·역할은 src/data/projects.ts, src/components/Experience.tsx 원본에서 가져옴.
// 쿠팡 관련 문장은 공개 채용공고(리멤버 311707)와 공식 리더십 원칙 기준이며, 연결 해석은 지원자의 해석임.
import type { Project } from "@/data/projects";
// 상세 내용은 원본을 복사해 공고에 맞춘 coupangProjects.ts에서 가져옴 (원본 projects.ts는 그대로)
import { coupangDetails as projects } from "@/data/coupangProjects";

export const POSTING = {
  title: "[쿠팡] 고객경험 개선 PM (주니어)",
  url: "https://career.rememberapp.co.kr/job/posting/311707",
};

export const EMAIL = "950426kim@naver.com";
export const PHONE = "010-5508-9646";

export type Pic = { src: string; width: number; height: number; alt: string };

export type Feature = {
  slug: string;
  type: string;
  // 카드에 보여줄 팀/개인 구분
  team: string;
  problem: string;
  contributions: string[];
  // 성과를 어디까지 말할 수 있는지: 실측 / 측정 전
  evidence: { label: string; tone: "measured" | "pending" };
  pics: Pic[];
  fit: string[];
};

// 직무 적합도 순서: 원인 분석 → 효과 검증이 모두 있는 사례부터
export const features: Feature[] = [
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
    fit: [
      "공고의 ‘현상을 원인/가설/데이터로 나누어 정리’와 ‘분석 → 실행 → 개선 효과 검증’을 한 프로젝트 안에서 끝까지 수행한 사례입니다.",
      "물량 증가 효과를 빼기 위해 1만 건당 지표로 비교했고, 효과를 낸 요인을 분리하지 못한 한계도 함께 기록했습니다.",
      "배포 후 지표가 움직이지 않을 때 원인을 데이터 품질에서 찾은 경험은 ‘진행 중 문제를 데이터로 파악하고 개선 포인트 도출’과 맞닿아 있다고 봅니다.",
    ],
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
      "사유별 자동 전환 기준과 운영 어드민·관제 화면 흐름, 운영 정책 설계",
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
    fit: [
      "고객이 상품을 받지 못하는 상황(미배송)을 회차·사유별로 쪼개 원인을 특정하고, 그 근거로 해결 방향을 정한 사례입니다.",
      "성과는 아직 측정 전이라, 측정할 지표(반납 물품 수, 재배송 완료율)를 미리 정의해 두었습니다.",
      "‘단가를 두 배로 올리면 라이더가 충분히 지원한다’는 가정을 현장에서 먼저 확인하지 못한 점을 회고로 남겼습니다. 다음에는 일부 유닛 파일럿으로 가정부터 확인하려 합니다.",
    ],
  },
  {
    slug: "dispatch-automation",
    type: "운영 효율화 · 백오피스·라이더 앱",
    team: "배차 라이더앱, 백오피스 개선",
    problem:
      "물량이 늘어도 운영 인원을 늘릴 수 없어, 한 건을 처리하는 데 드는 시간 자체를 줄여야 했습니다.",
    contributions: [
      "수기 6~7단계 프로세스를 분해해 판단이 필요 없는 구간을 자동화 대상으로 정의",
      "운송사 지역은 운송사 신청 + 운영자 승인 구조로 바꾸고 단가는 운영자가 관리",
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
    fit: [
      "공고의 ‘유관 부서와의 커뮤니케이션을 통해 업무 조율’과 ‘요구사항 정리 및 진행 현황 관리’에 해당하는 경험입니다.",
      "일정이 급해 중간 검토를 건너뛴 결과 요구사항을 놓친 경험을 회고로 남겼고, 이후 짧게라도 다시 맞춰보는 것을 원칙으로 삼고 있습니다.",
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((feature) => feature.slug === slug);
}

// 상세 페이지가 있는 프로젝트만, 위 순서대로
export const coupangProjects: Project[] = features
  .map((feature) => projects.find((project) => project.slug === feature.slug))
  .filter((project): project is Project => Boolean(project?.detail));

// 역량 섹션: 면접관 관점 리뷰(content/coupang-interviewer-review-prompt.md)에서 나온 질문에 미리 답함.
// 근거는 모두 상세 페이지 원본 데이터에 있는 사실·수치만 사용. need는 연결되는 공고 문구
export type QA = {
  need: string;
  q: string;
  a: string;
  points: string[];
  link?: { slug: string; label: string };
  kind?: "gap" | "plan";
};

export const questions: QA[] = [
  {
    need: "숫자와 지표 · SQL (우대)",
    q: "데이터는 직접 다루나요?",
    a: "미배송 사유를 SQL로 직접 집계하고, 비교 기준이 되는 지표를 직접 정의했습니다.",
    points: [
      "분석에 쓰는 모든 데이터는 DB에서 SQL 쿼리로 직접 뽑아 씁니다",
      "회차별 1만 건당 미배송을 비교해 새벽 58.1건 vs 당일 15.8건 (약 3.7배)을 확인 (2026.08.01~09.22, 물량 1,305,912건)",
      "새벽배송이 전체 물량의 21%지만 미배송의 50%를 차지한다는 것을 찾아 재배송 시간대를 결정",
      "배포 후 지표를 직접 확인하다 주소 데이터 매핑 오류를 발견",
    ],
    link: { slug: "daytime-delivery", label: "낮배송 분석 보기" },
  },
  {
    need: "분석 → 실행 → 개선 효과 검증",
    q: "54.2%는 어떻게 쟀고, 믿을 수 있나요?",
    a: "물량 증가 효과를 빼기 위해 배송 예정 물품 1만 건당 발생 건수로 7월과 9월을 비교했습니다.",
    points: [
      "배송 예정 물품은 595,456건 → 706,679건으로 늘었지만, 출입 불가 미배송은 590건 → 321건으로 감소 (1만 건당 9.91 → 4.54건)",
      "문제를 발견한 ‘43%’는 7월 1일 미배송 51건 기준이고, 효과는 월 전체 물량으로 측정",
      "한계: 여러 개선을 한 번에 배포해 무엇이 감소를 이끌었는지는 분리하지 못했습니다",
    ],
    link: { slug: "entrance-ux", label: "측정 방식 보기" },
  },
  {
    need: "고객 관점에서 고객 경험을 재설계",
    q: "라이더 앱 개선이 고객경험과 어떻게 이어지나요?",
    a: "미배송은 주문한 고객이 상품을 받지 못하는 경험이라, 라이더가 문 앞에서 막히는 지점을 고객 문제로 봤습니다.",
    points: [
      "미배송 건은 기한 안에 다시 배송하지 못하면 화주사로 반납되고, 고객은 상품을 받지 못합니다",
      "공동현관 개선은 출입 불가 미배송을, 낮배송은 반납을 줄이는 것을 목표로 했습니다",
      "고객 화면을 직접 바꾼 경험은 아닙니다. 쿠팡에서는 같은 방식을 고객 여정 전체로 넓히고 싶습니다",
    ],
    link: { slug: "entrance-ux", label: "공동현관 개선 보기" },
  },
  {
    need: "유관 부서 조율 · 요구사항 정리",
    q: "의견이 부딪히면 어떻게 정리하나요?",
    a: "요구를 ‘이번 범위’와 ‘다음 업데이트’로 나눠, 양쪽이 합의할 수 있는 선을 만듭니다.",
    points: [
      "잔여배차: 최대한 자동화를 원한 운영팀과 일정 안에 다 만들 수 없다는 개발팀 사이에서 범위를 나눠 합의",
      "운송사에는 공고 등록 권한을 주되, 단가·프로모션은 운영자가 계속 관리하도록 권한을 나눔",
      "낮배송과 물품 반납 기획의 기준이 어긋났을 때, 반납 기준과 흐름을 다시 정리해 일정 안에 마무리",
    ],
    link: { slug: "dispatch-automation", label: "잔여배차 보기" },
  },
  {
    need: "완벽하지 않아도 끝까지 실행",
    q: "결과가 아직 없거나, 틀렸던 적은 있나요?",
    a: "있습니다. 낮배송은 성과 측정 전이고, 잔여배차에서는 중간 검토를 건너뛰어 요구사항을 놓쳤습니다.",
    points: [
      "낮배송(2026.10.26 릴리즈): 반납 물품 수와 재배송 완료율로 측정 예정. ‘단가를 두 배로 올리면 라이더가 충분히 지원한다’는 가정을 현장에서 먼저 확인하지 못한 것이 가장 큰 리스크",
      "잔여배차: 일정이 급해 기획안을 운영팀과 다시 맞춰보지 않고 개발로 넘겼고, 새 요구사항을 다음 업데이트로 넘김",
      "다음에는 확인되지 않은 가정을 일부 유닛 파일럿으로 먼저 확인하고, 짧게라도 중간 검토를 거치려 합니다",
    ],
    link: { slug: "daytime-delivery", label: "회고 보기" },
  },
  {
    need: "입사 후 포부",
    q: "입사하면 무엇을 할 수 있나요?",
    a: "공고의 주요 업무인 데이터 분석, 요구사항 정리, 유관 부서 조율을 이미 해 왔기 때문에 합류 후 바로 프로젝트에 들어갈 수 있습니다.",
    points: [
      "바로 할 수 있는 일: DB에서 SQL로 데이터를 직접 뽑아 현상을 사유·단위별로 쪼개고, 물량 영향을 뺀 기준으로 비교합니다",
      "바로 맡을 수 있는 일: 요구사항 정리, 기능명세서·운영 정책서 작성, 프로토타입으로 개발·운영팀과 같은 기준을 맞추는 일",
      "만들고 싶은 결과: 개선 전에 행동 지표까지 정의해, ‘줄었다’를 넘어 ‘왜 줄었는지’까지 설명할 수 있는 고객경험 개선",
    ],
    kind: "plan",
  },
];

// 그 밖의 우대 요건
export const extras = "영어 회화 (우대): 영어통번역학과 졸업 · OPIc AL · TOEIC 875 · 해외 본사·물류 파트너와 배송 이슈 영어 커뮤니케이션";

export const steps = [
  {
    title: "현상을 쪼갭니다",
    text: "VOC와 데이터를 함께 보고, 현상을 원인·가설·확인할 데이터로 나눠 문제를 다시 정의합니다.",
  },
  {
    title: "정책과 화면으로 풉니다",
    text: "예외까지 운영 정책으로 정하고, 동작하는 프로토타입과 기능명세서로 개발·운영팀과 같은 기준을 맞춥니다.",
  },
  {
    title: "숫자로 확인합니다",
    text: "무엇으로 효과를 볼지 미리 정하고, 배포 후 정규화한 지표로 결과와 원인을 확인합니다.",
  },
];
