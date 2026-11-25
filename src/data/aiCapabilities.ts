// ‘AI 활용 역량’ 섹션 문구 (기본·Growth·Logistics·B2B 공통, 포트폴리오별로 첫 문장과 강조 한 줄만 다름)
// 사용자가 직접 활용하는 5단계 AI 기획 워크플로우와 작업 환경. 효과 수치는 측정값이 있는 PiMS(3주 → 1주)만 씀.
export type AiVariant = "root" | "growth" | "logistics" | "b2b";

// 하나의 카드로 합친 항목: 5단계 상세는 아래 다이어그램에 있으므로 카드에는 요약만
export const AI_POINTS = [
  "회의록 분석 → 문제 정의서 → 운영 정책·운영기획서 → 화면·스토리보드까지, 앞 단계 결과를 다음 단계 입력으로 넘기는 5단계 워크플로우로 기획합니다.",
  "AI가 만든 초안은 회의 합의 여부·누락 요구사항·정책 모순을 직접 확인해 확정하고, 확정된 문서만 화면 설계로 넘깁니다.",
  "AI로 IA·정책 초안을 정리하고 동작하는 화면을 먼저 만들어, AI 없이 3주로 잡혀 있던 기획 일정을 1주로 줄였습니다 (PiMS Partners).",
  "VS Code에 노션·구글 드라이브·캘린더·리서치 툴을 MCP로 연결해 한곳에서 일하고, 이 포트폴리오도 AI 코딩 도구로 직접 만들었습니다.",
];

export const AI_VARIANTS: Record<AiVariant, { title: string; lead: string; emphasis: string }> = {
  root: {
    title: "AI에는 분석과 초안을, 판단과 승인은 기획자가",
    lead: "AI를 빠르게 쓰는 것보다, 틀린 내용이 다음 문서로 번지지 않게 일하는 방식을 만드는 데 씁니다.",
    // 기본 포트폴리오는 카드 항목과 겹치지 않도록 강조 줄 없음
    emphasis: "",
  },
  growth: {
    title: "반복 작업은 AI가, 판단은 제가 합니다",
    lead: "회의록부터 QA까지 반복되는 작성·공유·실행은 AI가 처리하고, 검토와 확정은 직접 합니다.",
    emphasis: "",
  },
  logistics: {
    title: "AI로 운영 이슈를 정책과 요구사항으로 옮깁니다",
    lead: "현장에서 나온 운영 이슈가 예외 정책과 시스템 요구사항으로 빠짐없이 이어지도록 AI를 씁니다.",
    emphasis: "Logistics 관점: 운영 회의록에서 나온 이슈를 업무 규칙·상태값·예외 시나리오로 옮기고, 기획자 검토로 현장 합의 여부를 확인합니다.",
  },
  b2b: {
    title: "AI로 문서 작성은 줄이고, 승인은 남깁니다",
    lead: "반복되는 문서 작성은 AI에 맡기고, 정책 결정과 최종 승인은 기획자에게 남기는 흐름을 만듭니다.",
    emphasis: "B2B 관점: 운영기획서 초안에 역할·권한·상태값을 먼저 정의하고, 기획자가 정책 모순을 확인한 뒤에 화면으로 넘깁니다.",
  },
};

// 커머스 포트폴리오(3쪽) 기준: 반복 작업은 AI가, 판단은 기획자가 (/growth에서 사용)
export const AI_ROWS = [
  { task: "회의록 정리·공유", ai: "작성 → 요약 → 노션 저장 → 메일 발송", tools: ["Claude", "Notion", "Gmail"], decide: "합의 내용이 맞는지 확인" },
  {
    task: "정책 회의 준비",
    ai: "회의록으로 안건 작성 → 공유 → 캘린더 초대",
    note: "↻ 회의 후 ①부터 반복",
    tools: ["Claude", "Notion", "Calendar"],
    decide: "안건 우선순위 확정",
  },
  { task: "기획서 작성", ai: "두 AI가 토론하며 빈틈을 검증", tools: ["Claude", "GPT"], decide: "정책 누락·모순 최종 확정" },
  { task: "프로토타입 생성", ai: "바이브코딩으로 동작하는 화면 제작", tools: ["Claude Code", "VS Code"], decide: "사용 흐름·예외 화면 확인" },
  { task: "QA 시나리오·실행", ai: "시나리오 작성 → 자동 테스트", tools: ["Claude Code"], decide: "결과 판정 · 배포 결정" },
];

export const AI_CORE = ["AI Agent 자동화", "MCP 연동", "바이브코딩", "자동 QA"];

export const AI_TOOLS = [
  { name: "Claude", use: "기획 초안·프로토타입" },
  { name: "GPT", use: "리서치·교차 검증" },
  { name: "Notion", use: "문서·협업" },
  { name: "Figma", use: "화면 설계" },
  { name: "SQL", use: "데이터 추출·분석" },
  { name: "GA4", use: "GAIQ · 퍼널 분석" },
  { name: "VS Code", use: "AI 코딩 환경" },
  { name: "Vercel", use: "프로토타입 배포" },
  { name: "Microsoft", use: "Excel·PPT·Word" },
  { name: "English", use: "캐나다 고교·통번역" },
];

export const AI_OUTPUTS = "회의록 · 운영 정책서 · 기능명세서 · 프로토타입 · 유저 플로우 · IA";

export const AI_DIAGRAM = {
  src: "/work/ai-workflow/workflow.png",
  width: 3200,
  height: 910,
  alt: "AI 기획 워크플로우 다이어그램. 회의록 분석, 문제 정의서 초안, 운영 정책·운영기획서 초안을 AI가 만들고, 기획자 검토·확정을 거친 뒤 화면·스토리보드 생성으로 이어진다.",
};
