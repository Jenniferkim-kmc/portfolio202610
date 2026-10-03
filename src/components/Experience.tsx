type Detail = string | { text: string; sub: string[] };

type Entry = {
  period: string;
  title: string;
  meta?: string;
  tag?: string;
  summary?: string;
  details?: Detail[];
};

const experience: Entry[] = [
  {
    period: "2026.06 — 재직중",
    title: "딜리버스",
    meta: "라스트마일 인텔리전스 기획팀 · 서비스기획",
    summary:
      "라스트마일 배송 플랫폼의 라이더·운송사·운영자 매칭 서비스 및 운영 시스템 기획",
    details: [
      {
        text: "잔여배차 처리 자동화 기획으로 주말 운영팀 처리 시간 절감 (운영팀 추정 기준)",
        sub: [
          "1단계(2026.07) 화이트 지역(직접 운영): 구인 프로세스 6단계 → 4단계 축소. 지원자 확인·기사 개별 연락·수기 배차를 클러스터 기반 공고 자동 생성과 자동 확정으로 대체해 반자동화, 건당 약 10분 → 3분 이내로 단축 (약 70% 감소)",
          "2단계(2026.09) 블루 지역(운송사 운영): 클러스터가 없어 전 과정을 수기로 처리하던 지역에 운송사 직접 신청·운영자 승인 구조를 도입해 반자동화, 건당 약 10분 → 4분 이내로 단축 (약 60% 이상 감소)",
        ],
      },
      {
        text: "네이버 제휴 신규 서비스(당일 미배송 재매칭 “낮배송”) 0→1 기획",
        sub: [
          "라이더 앱·운영 어드민·관제 서비스(TMS)까지 단독 설계, 자동 분류·자동 공고 생성으로 운영 수작업 최소화 (2026.09)",
          "미배송으로 화주사에 반납되는 물품 수 감소 기대 (2026.10 릴리즈, 성과 측정 전)",
        ],
      },
      {
        text: "미배송 사유 데이터 분석과 공동현관 비밀번호 UI/UX 개선",
        sub: [
          "미배송 원인의 43%(출입 정보 부재)를 특정하고 크라우드소싱 기반 출입 정보 추천 구조 설계",
          "릴리즈 후 2달 이내 출입 정보 부재로 인한 미배송 54.2% 감소",
        ],
      },
    ],
  },
  {
    period: "2026.03 — 2026.05",
    title: "애딥",
    meta: "Product Planning Center · Project Leader · 서비스기획",
    details: [
      "PiMS Partners 커머스 Admin 및 상품관리 시스템 기획 (상품 CRUD, 카테고리 구조, 노출 로직 설계)",
      "커머스 운영 모델(직판/벤더/공동구매) 및 거래·정산 구조 설계",
      "검수/제재/정산/CS 등 운영 정책 및 워크플로우 수립",
      "RBAC 기반 관리자 권한 시스템 및 운영툴 IA 설계",
      "상품-광고-콘텐츠 연동 구조 기획 (데이터 기반 커머스 구조 설계)",
      "AI 활용 업무 자동화로 기획 생산성 개선 (와이어프레임·스토리보드 제작·디자인·프론트 기간 3주 → 1주 단축)",
    ],
  },
  {
    period: "2024.11 — 2025.11",
    title: "로얼라이언스",
    meta: "기획팀 · 서비스기획",
    details: [
      "부동산 거래 플랫폼 하우스딜 A-Z 기획 — 사용자 정의부터 서비스 구조, 화면 흐름, 운영 정책까지 단독 설계",
      "문제 정의 및 개선 방향 도출 — 시장 조사, 5WHYs, AS-IS / TO-BE 분석 기반으로 서비스 개선안 정리",
      "사용자 행동 중심 플로우 설계 — 페르소나·유저저니·플로우차트 기반으로 매물 탐색, 거래 요청, 검증, 계약 흐름 구조화",
      "백오피스 IA 및 화면 설계 — 운영자가 거래 데이터와 검증 상태를 관리할 수 있는 구조 설계",
      "운영 정책 수립 — 거래·검증·예외 상황을 반영한 서비스 규칙 초안 작성",
      "신규 서비스 기획 산출물 작성 — 체크팀 소개서·매뉴얼 제작, 로팀 와이어프레임 역기획 수행",
    ],
  },
  {
    period: "2022.09 — 2023.07",
    title: "비에스케이코퍼레이션",
    meta: "마케팅팀 · 마케팅기획",
    details: [
      "프로젝트 리딩 — 2023.01 화이트머스크 프로모션 기획 (향수 카테고리 매출 18% 증가)",
      "제품 360도 관리 — 향수·기프트·액세서리 카테고리 판매 기획, 유통기한 임박 제품 프로모션 기획, 연/분기별 오더 수량 지정",
      "품절 감소 — 영국-필리핀-한국 배송 체이싱으로 배송 누락 제품 보고 및 요청 (영어 커뮤니케이션)",
      "SNS 콘텐츠 기획 및 관리 — 인게이지먼트·팔로워 관리(광고), 사진·문구 제작, 촬영 제품 셀렉 및 촬영 감독",
      "프로젝트 매니지먼트 — 온라인팀, 영업팀, SCM팀, 디자인팀과 소통의 중심 역할을 하며 협업",
    ],
  },
];

const projectWork: Entry[] = [
  {
    period: "2024.08 — 2024.11",
    title: "시니어 AI 컨시어지 서비스 기획 (딸래미)",
    tag: "프로젝트",
    details: [
      "0→1 기획, 온보딩·상담·요청 흐름과 IA·화면설계서 작성",
      "AI 챗봇 대화 흐름과 백오피스 구조 설계",
      "외주 개발·디자인 협업 리드, QA·일정 관리",
    ],
  },
  {
    period: "2024.05 — 2024.07",
    title: "K-pop 투표 플랫폼 리뉴얼 기획 (스타덤, K탑스타)",
    tag: "프로젝트",
    details: [
      "투표·랭킹·이벤트 흐름과 백오피스 구조 설계",
      "구매 플로우 개선으로 전환율 25% 이상 향상",
      "개발·디자인 협업 리드, 외부 파트너사 커뮤니케이션",
    ],
  },
];

const internship: Entry[] = [
  {
    period: "2022.05 — 2022.08",
    title: "더블유더블유디코리아",
    tag: "인턴십",
    meta: "마케팅팀 · 인턴",
    details: [
      "SNS(인스타그램·블로그) 인게이지먼트 관리",
      "SNS 콘텐츠 기획 및 제작",
    ],
  },
];

const education: Entry[] = [
  {
    period: "2023.08 — 2024.01",
    title: "야놀자 X 패스트캠퍼스 PM 부트캠프",
    meta: "5.5개월 과정 수료 · 우수수료생",
    details: [
      "첫 실습 프로젝트 우수사례 수상 (멍냥제)",
      "야놀자 미니 프로젝트 — 업셀링·크로스셀링 판매 전략 기획",
      "야놀자 파이널 프로젝트 — 여행 여정 공유 플랫폼 〈위플플〉 기획",
    ],
  },
  {
    period: "2016.03 — 2020.08",
    title: "동국대학교(서울)",
    meta: "영어통번역학과 · 졸업",
  },
];

const certifications: Entry[] = [
  { period: "2024.03", title: "TOEIC", meta: "875점" },
  { period: "2024.03", title: "OPIc", meta: "Advanced Low" },
  {
    period: "2024.03",
    title: "GAIQ",
    meta: "Google Analytics Individual Qualification · Google",
  },
];

function Group({
  label,
  entries,
  divider,
  muted,
}: {
  label: string;
  entries: Entry[];
  // 위쪽에 구분선을 넣을지
  divider?: boolean;
  // 경력보다 덜 중요한 그룹: 글씨를 작고 연하게
  muted?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-8 sm:flex-row sm:gap-20 ${
        divider ? "border-t border-zinc-200 pt-20" : ""
      }`}
    >
      <p className="text-xs font-medium tracking-[0.2em] text-zinc-400 sm:w-32 sm:flex-none">
        {label}
      </p>
      <ul className="flex-1 divide-y divide-zinc-200">
        {entries.map((entry) => (
          <li
            key={`${entry.period}-${entry.title}`}
            className={`flex flex-col gap-2 first:pt-0 sm:flex-row sm:gap-10 ${
              muted ? "py-5" : "py-6"
            }`}
          >
            <div className="flex flex-col gap-1 sm:w-40 sm:flex-none">
              <span className="text-sm text-zinc-400">{entry.period}</span>
              {entry.tag && (
                <span className="text-xs text-zinc-400">{entry.tag}</span>
              )}
            </div>
            <div className="flex-1">
              <h3
                className={`flex flex-wrap items-center gap-2 ${
                  muted
                    ? "text-base font-medium text-zinc-700"
                    : "text-lg font-semibold"
                }`}
              >
                {entry.title}
              </h3>
              {entry.meta && (
                <p className="mt-1 text-sm text-zinc-400">{entry.meta}</p>
              )}
              {entry.summary && (
                <p className="mt-3 text-base leading-relaxed font-medium break-keep text-zinc-800">
                  {entry.summary}
                </p>
              )}
              {entry.details && (
                <ul
                  className={`flex flex-col leading-relaxed break-keep ${
                    muted
                      ? "mt-2 gap-1 text-sm text-zinc-500"
                      : "mt-3 gap-2 text-base text-zinc-600"
                  }`}
                >
                  {entry.details.map((detail) =>
                    typeof detail === "string" ? (
                      <li key={detail} className="flex gap-2">
                        <span className="text-zinc-300">–</span>
                        <span>{detail}</span>
                      </li>
                    ) : (
                      <li key={detail.text} className="flex gap-2">
                        <span className="text-zinc-300">–</span>
                        <div>
                          <span className="font-medium text-zinc-800">
                            {detail.text}
                          </span>
                          <ul className="mt-1 flex flex-col gap-1 text-sm leading-relaxed text-zinc-500">
                            {detail.sub.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="text-zinc-300">·</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-24 sm:px-12 lg:px-20">
        <Group label="EXPERIENCE" entries={experience} />
        <Group
          label="PROJECTS / INTERNSHIP"
          entries={[...projectWork, ...internship]}
          divider
          muted
        />
        <Group label="EDUCATION" entries={education} divider muted />
        <Group label="CERTIFICATION" entries={certifications} divider muted />
      </div>
    </section>
  );
}
