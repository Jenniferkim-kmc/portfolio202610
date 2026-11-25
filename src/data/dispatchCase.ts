// /, /b2b, /logistics 전용 상세(손으로 쓴 케이스). /growth 목록(growthCases)에는 넣지 않는다.
// 원본 수치·문구: src/data/projects.ts dispatch-automation. 새 숫자를 만들지 않음.
import { entranceCase } from "@/data/entranceCase";
import type { GrowthCase } from "@/data/growthCase";

const da = (f: string) => `/work/dispatch-automation/${f}`;

const dispatch: GrowthCase = {
  slug: "dispatch-automation",
  kicker: "01 · 운영 시스템 기획 · 딜리버스",
  title: ["잔여배차 처리 자동화", "지원자 1명당 10분 → 3~4분"],
  lede: "물량이 늘어도 운영 인원을 늘릴 수 없어, 지원자 1명을 처리하는 데 드는 시간 자체를 줄여야 했습니다.",
  kpis: [
    { value: "10분 → 3분", label: "화이트 지역 · 지원자 1명당 처리 시간", basis: "실측 · 약 70%↓" },
    { value: "10분 → 4분", label: "블루 지역 · 지원자 1명당 처리 시간", basis: "실측 · 약 60%↓" },
    { value: "약 266시간", count: { from: 0, to: 266, prefix: "약 ", suffix: "시간" }, label: "9월 한 달 운영 공수 절감", basis: "9월 지원 인원으로 환산" },
  ],
  kpiNote: "처리 시간은 개선 전후 직접 측정 · 266시간은 측정값을 9월 지원 인원(2,458명)에 곱한 환산값",
  meta: [
    { k: "역할", v: "서비스기획 (요구사항 정의 · 운영 정책 · 기능명세서)" },
    { k: "기간", v: "2026.06 — 2026.09 (1단계 07월 · 2단계 09월 배포)" },
    { k: "범위", v: "라이더 앱 · 운영 백오피스 · 운송사 공고 등록" },
    { k: "산출물", v: "기능명세서 · 운영 정책 · 바이브코딩 동작 화면" },
  ],
  heroImages: [],
  heroLayout: "stack",
  summary: [
    { tag: "문제", head: "지원자는 한 달 만에 2.4배, 운영 인원은 그대로", text: "지원자 1명마다 6~7단계 수기 처리, 약 10분", href: "#problem" },
    { tag: "해결", head: "판단이 필요 없는 단계는 시스템이, 승인·단가는 운영자가", text: "화이트 6 → 4단계 · 블루 7 → 4단계", href: "#white" },
    { tag: "결과", head: "지원자 1명당 10분 → 3~4분", text: "9월 물량으로 환산하면 한 달 약 266시간 절감", href: "#result" },
  ],
  sections: [
    {
      id: "problem",
      badge: "01 WHAT · WHY",
      nav: "문제",
      title: "지원자는 한 달 만에 2.4배, 운영 인원은 그대로였습니다",
      blocks: [
        {
          type: "versus",
          label: "화주사 물량이 거의 2배로 늘면서 잔여배차 구인도 급증했습니다",
          ratio: "2.4배",
          caption: "일 평균 잔여배차 지원 인원이 8월 34.0명에서 9월 81.9명으로 늘었습니다",
          unit: "명",
          items: [
            { label: "9월", value: 81.9 },
            { label: "8월", value: 34.0, muted: true },
          ],
          note: "1·2차 지역 합계 · 추석 연휴(9/24~26)를 빼면 9월 평균 89.4명(약 2.6배)",
        },
        {
          type: "flow",
          label: "그런데 지원자 1명마다 운영자가 약 10분씩 손으로 처리했습니다",
          steps: [
            { tag: "구글시트", title: "미배차 지역 확인" },
            { tag: "구글폼", title: "공고 입력" },
            { tag: "앱", title: "푸시 발송" },
            { tag: "입차시트", title: "지원자 옮겨 적기" },
            { tag: "전화", title: "기사 개별 연락" },
            { tag: "수기", title: "박스 부여(배차)" },
          ],
          notes: ["화이트 지역 6단계 기준 · 블루 지역은 채널톡 요청·슬랙 확인·연락처 중계가 더해져 7단계"],
        },
        { type: "callout", tone: "blue", text: "→ 사람을 늘릴 수 없다면, 1명을 처리하는 시간을 줄여야 했습니다" },
      ],
    },
    {
      id: "white",
      badge: "02 HOW (1/3) · 화이트 지역",
      nav: "해결 · 화이트",
      title: "판단이 필요 없는 단계는 시스템이 맡게 했습니다",
      blocks: [
        {
          type: "steps",
          before: {
            tag: "Before",
            title: "화이트 지역 6단계 수기",
            steps: [
              { text: "구글시트에서 미배차 지역 확인" },
              { text: "구글폼에 지역·인원·프로모션 입력" },
              { text: "앱 푸시 발송" },
              { text: "지원자를 입차시트에 수기 입력" },
              { text: "확정·미확정 기사에 개별 연락" },
              { text: "박스 부여 (배차)" },
            ],
          },
          after: {
            tag: "After",
            title: "화이트 지역 4단계 반자동화",
            steps: [
              { text: "클러스터 기준 공고 자동 생성", auto: true },
              { text: "프로모션 금액 일괄 입력", auto: true },
              { text: "앱 푸시 발송" },
              { text: "자동 확정·배차, 결과 팝업 안내", auto: true },
            ],
          },
        },
        { type: "callout", tone: "blue", text: "→ 운영자에게는 모집 상태 전환과 예외 처리만 남겼습니다" },
        {
          type: "figures",
          layout: "wide",
          items: [
            {
              src: da("admin-dispatch.png"),
              w: 1830,
              h: 690,
              alt: "운영 백오피스 배차 공고 목록. 공고 상태별 건수, 클러스터·회차·프로모션·예상 총보상이 담긴 공고 목록, 선택한 공고의 일괄 편집 패널이 있다.",
              cap: "운영 백오피스: 공고 상태를 한눈에 보고, 단가·프로모션 일괄 편집과 Push 발송까지 한 화면에서",
            },
          ],
        },
        {
          type: "figures",
          layout: "gallery",
          items: [
            { src: da("rider-list.png"), w: 375, h: 815, alt: "라이더 앱 잔여 배차 공고 목록", cap: "공고 목록: 지역별 공고와 최대 보상 확인" },
            { src: da("rider-apply.png"), w: 375, h: 798, alt: "잔여 배차 신청 확인 바텀시트", cap: "신청: 시간·유닛·예상 보상을 보고 신청" },
            { src: da("rider-confirmed.png"), w: 375, h: 798, alt: "배차 확정 안내 팝업", cap: "자동 확정: 운영자 연락 없이 바로 안내" },
            { src: da("rider-closed.png"), w: 375, h: 798, alt: "배차 마감 안내 팝업과 다른 공고 보기 버튼", cap: "마감 안내: 다른 공고로 바로 연결" },
          ],
        },
      ],
    },
    {
      id: "blue",
      badge: "02 HOW (2/3) · 블루 지역",
      nav: "해결 · 블루",
      title: "운송사는 신청하고, 운영자는 승인과 단가만 지킵니다",
      blocks: [
        {
          type: "steps",
          before: {
            tag: "Before",
            title: "블루 지역 7단계 수기",
            steps: [
              { text: "운송사가 채널톡으로 인원 요청" },
              { text: "운영팀이 슬랙으로 확인" },
              { text: "구글폼에 지역·인원·프로모션 입력" },
              { text: "구인 푸시 발송" },
              { text: "구글폼에서 신청자 확인" },
              { text: "확정자 개별 연락·박스 매칭 (배차)" },
              { text: "운송사에 확정자 연락처 전달" },
            ],
          },
          after: {
            tag: "After",
            title: "블루 지역 4단계 반자동화",
            steps: [
              { text: "운송사가 직접 공고 등록" },
              { text: "운영팀 승인" },
              { text: "프로모션 입력" },
              { text: "라이더 신청 시 자동 확정·배차", auto: true },
            ],
          },
        },
        {
          type: "cards",
          label: "클러스터가 없는 지역이라, 지역 사정을 가장 잘 아는 운송사가 직접 신청하게 했습니다",
          cols: 2,
          items: [
            { tag: "운송사가 입력", title: "지역 · 회차 · 인원 · 예상 건수 · 사유", text: "확정된 라이더도 앱에서 보고 직접 연락" },
            { tag: "운영자가 관리", tone: "blue", title: "승인 · 단가 · 프로모션", text: "승인 전에는 라이더에게 노출되지 않음" },
          ],
        },
        {
          type: "figures",
          layout: "gallery",
          items: [
            { src: da("carrier-form.png"), w: 375, h: 812, alt: "운송사용 잔여배차 공고 등록 화면", cap: "운송사 등록: 회차·인원·사유만 입력" },
            { src: da("carrier-submitted.png"), w: 375, h: 812, alt: "공고 등록 완료 토스트, 승인 후 노출 안내", cap: "승인 게이트: 운영팀 승인 후 노출" },
            { src: da("rider-carrier-post.png"), w: 375, h: 812, alt: "운송사 공고가 함께 표시된 라이더 앱 목록", cap: "라이더 노출: 기존 목록에 함께 표시" },
            { src: da("carrier-confirmed.png"), w: 375, h: 812, alt: "운송사 화면의 확정 라이더 목록", cap: "확정 확인: 운송사가 바로 연락" },
          ],
        },
      ],
    },
    {
      id: "decide",
      badge: "02 HOW (3/3) · 결정",
      nav: "해결 · 결정",
      title: "속도는 높이되, 통제와 일정은 지켰습니다",
      blocks: [
        {
          type: "cards",
          cols: 3,
          ordered: true,
          items: [
            { tag: "권한", title: "등록은 운송사, 단가는 운영자", text: "운송사에 공고 등록 권한을 주되 단가·프로모션은 운영자에게 남김" },
            { tag: "화면", title: "새 화면 대신 기존 화면 확장", text: "개발 범위와 운영자가 새로 익혀야 할 부담을 함께 줄임" },
            { tag: "협업", title: "이번 범위와 다음 업데이트로", text: "최대 자동화를 원한 운영팀과 일정이 빠듯한 개발팀 사이에서 범위를 나눠 합의" },
          ],
        },
      ],
    },
    {
      id: "result",
      badge: "03 RESULT · RETRO",
      nav: "결과 · 회고",
      title: "지원자 1명당 처리 시간을 10분에서 3~4분으로 줄였습니다",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "3분", label: "화이트 지역 1명당 처리 시간", sub: "10분 → 3분 이내, 약 70%↓ (2026.07)" },
            { value: "4분", label: "블루 지역 1명당 처리 시간", sub: "10분 → 4분 이내, 약 60%↓ (2026.09)" },
            { value: "약 266시간", label: "9월 한 달 절감 (환산)", sub: "하루 약 8.9시간, 운영자 1명의 하루 근무시간 이상" },
          ],
          note: "처리 시간은 개선 전후 직접 측정 · 환산: 9월 지원 인원 2,458명(하루 평균 81.9명) × 1명당 평균 6.5분 절감",
        },
        {
          type: "cards",
          label: "회고",
          cols: 2,
          items: [
            { tag: "놓친 것", text: "일정이 급해 운영팀과 기획안을 다시 맞춰보는 중간 검토를 건너뛰었고, 그사이 생긴 요구사항을 놓쳐 다음 업데이트로 넘겼습니다." },
            { tag: "다음에는", tone: "blue", text: "중간 검토는 재작업을 가장 적은 비용으로 막는 확인 지점입니다. 일정이 급해도 짧게라도 운영팀과 다시 맞춘 뒤 개발에 넘기겠습니다." },
          ],
        },
      ],
    },
  ],
};

const siteOnlyCases: GrowthCase[] = [dispatch, entranceCase];

export function getSiteCase(slug: string) {
  return siteOnlyCases.find((c) => c.slug === slug);
}
