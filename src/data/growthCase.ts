// /growth 상세 페이지 내용: 커머스 포트폴리오 PDF(포트폴리오_김유정_커머스.pdf) 문구 기준
// 30초 스키밍 구조: 히어로(무엇·성과) → 30초 요약(문제·해결·결과) → 본문 섹션

export type CaseImage = { src: string; w: number; h: number; alt: string; cap?: string };

export type CaseKpi = {
  value: string;
  // 숫자 애니메이션이 필요한 값: prefix + CountUp(to) + suffix
  count?: { from: number; to: number; decimals?: number; prefix?: string; suffix?: string };
  label: string;
  basis?: string;
};

type BlockHead = { label?: string; text?: string };

export type CaseBlock =
  | (BlockHead & {
      type: "flow";
      steps: { tag?: string; title: string; text?: string }[];
      notes?: string[];
    })
  | (BlockHead & {
      type: "cards";
      cols?: 2 | 3 | 4;
      ordered?: boolean;
      items: { tag?: string; lead?: string; title?: string; text?: string; points?: string[]; foot?: string; tone?: "blue" | "plain" }[];
    })
  | (BlockHead & {
      type: "stats";
      items: { value: string; label: string; sub?: string }[];
      note?: string;
      points?: string[];
      op?: string[];
    })
  | (BlockHead & {
      type: "bars";
      items: { label: string; value: number; muted?: boolean }[];
      note?: string;
    })
  | (BlockHead & {
      /** 같은 단위 두 값을 한 축 가로 막대로 비교 + 배수 강조 */
      type: "versus";
      ratio: string;
      caption: string;
      unit: string;
      items: { label: string; value: number; muted?: boolean }[];
      points?: string[];
      note?: string;
    })
  | (BlockHead & {
      /** 전·후 막대 2개 + 우상향 화살표 + 증가 폭 */
      type: "rise";
      items: {
        label: string;
        delta: string;
        before: { x: string; v: number; text: string };
        after: { x: string; v: number; text: string };
        /** 기준이 다를 때 그래프 아래 한 줄 설명 */
        sub?: string;
      }[];
      note?: string;
    })
  | (BlockHead & {
      type: "donut";
      /** muted: 회색으로 칠할 항목(예: 사용하지 않음) */
      items: { label: string; value: number; muted?: boolean }[];
      note?: string;
    })
  | (BlockHead & { type: "callout"; tone?: "blue" | "ink" })
  | (BlockHead & {
      type: "beforeAfter";
      num: string;
      title: string;
      before: CaseImage;
      after: CaseImage;
      points: string[];
    })
  | (BlockHead & {
      type: "shots";
      items: (CaseImage & { tag: string; title: string; points: string[] })[];
    })
  | (BlockHead & { type: "compare"; head: string[]; rows: string[][]; note?: string })
  | (BlockHead & { type: "figures"; layout?: "wide" | "phones"; items: CaseImage[]; points?: string[] })
  | (BlockHead & { type: "note" })
  | (BlockHead & {
      /** 전후 구조도: 처음 구조 → 바뀐 구조를 노드와 화살표로 */
      type: "structure";
      before: StructureRow;
      after: StructureRow;
    });

export type StructureRow = { label: string; nodes: { tag: string; title: string; accent?: boolean }[] };

export type CaseSection = {
  id: string;
  badge: string;
  /** 왼쪽 미니 메뉴에 쓰는 짧은 이름 */
  nav: string;
  title: string;
  desc?: string;
  blocks: CaseBlock[];
};

export type GrowthCase = {
  slug: string;
  kicker: string;
  title: [string, string];
  lede: string;
  kpis: CaseKpi[];
  kpiNote?: string;
  meta: { k: string; v: string }[];
  heroImages: CaseImage[];
  heroLayout: "wide" | "pair" | "stack";
  summary: { tag: string; head: string; text: string; href: string }[];
  sections: CaseSection[];
};

const pims: GrowthCase = {
  slug: "pims-partners",
  kicker: "01 · 공동구매 커머스 파트너 어드민 기획 · 애딥",
  title: ["벤더만 있던 마켓에 셀러를 더한", "공동구매 어드민 〈PiMS Partners〉"],
  lede: "상품을 공급하는 벤더와 마케팅하는 셀러로 역할을 나누고, 셀러가 재고 없이 파는 드롭쉬핑 공동구매와 AI 콘텐츠 제작 지원까지 혼자 0→1로 기획했습니다.",
  kpis: [
    {
      value: "1인 기획",
      label: "역할 설계부터 상품 등록, 정산·권한까지 서비스 기획 전 영역 담당",
      basis: "프로젝트 역할",
    },
    {
      value: "3주 → 1주",
      label: "AI 없이 3주로 잡혀 있던 기획 일정을 실제 1주에 마침",
      basis: "기획 일정 기준",
    },
  ],
  meta: [
    { k: "역할", v: "Project Leader · 서비스기획 (1인 기획)" },
    { k: "기간", v: "2026.03 — 2026.05" },
    { k: "산출물", v: "IA · UX 스토리보드 · 운영 정책 · 권한 체계 · 동작 프로토타입" },
  ],
  heroImages: [],
  heroLayout: "wide",
  summary: [
    {
      tag: "문제",
      head: "벤더와 사용자, 둘만 있는 마켓을 어떻게 움직일까",
      text: "상품이 올라와도, 그 상품을 팔리게 만드는 사람이 구조 안에 없었습니다",
      href: "#problem",
    },
    {
      tag: "해결",
      head: "벤더와 셀러의 역할을 나눠, 판매가 일어나는 구조를 설계했습니다",
      text: "벤더는 도매가로 공급하고, 셀러는 재고 없이 마케팅만 하는 드롭쉬핑 공동구매",
      href: "#solution",
    },
    {
      tag: "결과",
      head: "베타1 서비스 기획을 혼자 맡아 설계 완료",
      text: "3주 일정을 1주로 당김 · 회사 경영 악화로 출시 전 프로젝트 종료",
      href: "#result",
    },
  ],
  sections: [
    {
      id: "problem",
      badge: "01 문제",
      nav: "문제",
      title: "벤더와 사용자, 둘만 있는 마켓을 어떻게 움직일까",
      desc: "저는 기능을 더하기 전에, 이 구조에서 상품이 올라오고 팔리는 흐름을 누가 만들지부터 물었습니다.",
      blocks: [
        {
          type: "structure",
          before: {
            label: "처음 구조",
            nodes: [
              { tag: "벤더", title: "상품을 들여와 올림" },
              { tag: "사용자", title: "상품을 보고 삼" },
            ],
          },
          after: {
            label: "드롭쉬핑 공동구매",
            nodes: [
              { tag: "벤더", title: "공급 · 재고 · 배송" },
              { tag: "셀러", title: "콘텐츠 · 마케팅 · 판매", accent: true },
              { tag: "사용자", title: "상품을 보고 삼" },
            ],
          },
        },
        {
          type: "callout",
          tone: "ink",
          label: "문제",
          text: "상품이 올라와도, 그 상품을 팔리게 만드는 사람이 구조 안에 없었습니다",
        },
        {
          type: "cards",
          label: "시장조사 · 실제로 팔고 있는 사람들",
          cols: 3,
          items: [
            { text: "테무 · 알리 · 도매꾹 등에서 상품을 떼어와, 직접 사진과 상세페이지를 만들어 마케팅으로 수익을 내는 판매자가 많았음" },
            { text: "같은 상품을 파는데도 수익이 갈리는 이유는 두 가지였음: 유통 채널, 그리고 사진 · 상세페이지의 완성도" },
            { text: "상품을 구하는 일보다, 상품을 잘 보여 주는 일에서 판매가 만들어지고 있었음", tone: "blue" },
          ],
        },
      ],
    },
    {
      id: "hypothesis",
      badge: "02 가설",
      nav: "가설",
      title: "잘 보여 주는 사람을 따로 두면, 공급과 판매가 함께 늘어난다",
      desc: "시장조사에서 본 것을 세 개의 가설로 이어 정리했습니다. 앞 가설이 맞다면 다음 가설이 필요해지는 순서입니다.",
      blocks: [
        {
          type: "cards",
          cols: 3,
          items: [
            {
              tag: "가설 1 · 콘텐츠",
              title: "사진 · 상세페이지 완성도를 높이면 판매가 늘어난다",
              text: "시장조사에서 본 판매자들의 차이입니다. 쿠팡이츠가 먹음직스러운 사진과 큐레이션으로 초기 사용자를 모은 사례도 참고했습니다.",
              foot: "→ 해결 2 · AI 콘텐츠 생성",
            },
            {
              tag: "가설 2 · 역할",
              lead: "그렇다면",
              title: "그 일은 전담하는 사람이 있어야 잘된다",
              text: "상품을 싸게 들여오는 일과 잘 보여 주는 일은 다른 역량입니다. 벤더(공급)와 셀러(마케팅)로 나누면 각자 자기 역할에만 충실할 수 있다고 봤습니다.",
              foot: "→ 해결 1 · 벤더 · 셀러 역할 분리",
            },
            {
              tag: "가설 3 · 진입장벽",
              lead: "그런데",
              title: "셀러가 재고를 사야 하면 셀러가 모이지 않는다",
              text: "도매로 상품을 사 두면 재고 부담이 커지고, 물류에 초기 투자 자금이 들어가 진입장벽이 높아집니다. 재고 없이 팔 수 있어야 셀러가 들어온다고 봤습니다.",
              foot: "→ 해결 2 · 드롭쉬핑",
            },
          ],
        },
      ],
    },
    {
      id: "solution",
      badge: "03 해결 (1/2) · 가설 2",
      nav: "해결 · 역할 분리",
      title: "벤더와 셀러의 역할을 나눠, 판매가 일어나는 구조를 설계했습니다",
      blocks: [
        {
          type: "flow",
          label: "벤더 (공급 · 재고 · 배송) ↔ 셀러 (콘텐츠 · 마케팅 · 판매)",
          steps: [
            { tag: "벤더", title: "원본 상품 등록", text: "URL 불러오기 · 엑셀 대량 등록 · ERP 재고 연결" },
            { tag: "셀러", title: "이름 검색", text: "원본 상품 정보를 그대로 불러옴" },
            { tag: "셀러", title: "AI 콘텐츠 생성", text: "AI 스튜디오로 사진 · 상세페이지 제작" },
            { tag: "셀러", title: "판매가 설정 후 판매", text: "셀러가 직접 정하는 것은 판매가 하나" },
            { tag: "벤더", title: "배송 · 주문 관리", text: "주문이 들어오면 출고 · 배송 · 주문 처리는 다시 벤더가 맡음" },
          ],
        },
      ],
    },
    {
      id: "solution-entry",
      badge: "03 해결 (2/2) · 가설 1 · 3",
      nav: "해결 · 진입장벽",
      title: "재고 · 콘텐츠 · 광고, 셀러가 판매를 시작하는 진입장벽을 낮췄습니다",
      blocks: [
        {
          type: "stats",
          label: "① 재고 부담 없이 · 드롭쉬핑 구조",
          items: [
            { value: "1,000원", label: "도매가" },
            { value: "1,500원", label: "판매가" },
            { value: "500원", label: "셀러 차액" },
          ],
          op: ["→", "="],
          note: "구조 설명용 숫자",
          points: [
            "물건값은 벤더가, 셀러는 차액만 · 마케팅을 잘하면 벤더로 직접 판매도 가능",
            "원본을 벤더 한 곳에 두어, 셀러가 몇 명 붙어도 상품 · 재고 · 정산 기준은 하나",
          ],
        },
        {
          type: "cards",
          label: "② 실력이 없어도 · AI 콘텐츠 생성 (크리에이티브 스튜디오 AI Agent)",
          text: "촬영 · 디자인 실력이 없어도 누구나 콘텐츠 품질을 올리도록",
          cols: 3,
          items: [
            { title: "사진 보정", text: "벤더 원본 사진을 판매용으로 AI 보정" },
            { title: "스튜디오샷", text: "촬영 없이 제품 연출 컷 제작" },
            { title: "상세페이지", text: "디자인 역량 없이 AI로 상세페이지 제작" },
          ],
        },
        {
          type: "cards",
          label: "③ 손쉽게 · 광고로 바로 연결",
          cols: 2,
          items: [
            { title: "등록 직후 바로 광고", text: "상품 등록을 마치면 첫 광고 할인과 함께 바로 광고로 이어짐 · 강요하지 않음" },
            { title: "다시 입력하지 않음", text: "등록한 상품을 광고 관리 시스템(AMS)이 그대로 가져감" },
          ],
        },
        {
          type: "note",
          text: "크리에이티브 스튜디오 · URL 불러오기 · 엑셀 등록은 기획 · 설계 범위입니다.",
        },
      ],
    },
    {
      id: "result",
      badge: "04 결과 · 회고",
      nav: "결과 · 회고",
      title: "화면을 먼저 만들고 문서를 붙여, 3주를 1주로",
      blocks: [
        {
          type: "cards",
          label: "결과",
          cols: 3,
          items: [
            {
              tone: "blue",
              text: "벤더 · 셀러 역할 분리, 드롭쉬핑 정산, AI 크리에이티브 스튜디오까지 베타1 서비스 기획을 혼자 맡아 설계 완료",
            },
            { text: "그 밖에 RBAC 권한(초대 · 역할 · 예외), 검수 · 제재 · CS 운영 정책을 함께 설계" },
            { text: "회사 경영 악화로 베타1 설계까지 마치고 출시 전 프로젝트 종료" },
          ],
        },
        {
          type: "flow",
          steps: [
            {
              tag: "배경",
              title: "말로는 구조가 전달되지 않았음",
              text: "공동구매 구조를 사람마다 다르게 이해해, 회의마다 처음부터 다시 설명하는 비효율적인 회의가 반복됐습니다. 기획서 → 디자인 → 프론트로 문서를 넘기는 기존 방식으로는 3주가 잡혀 있었습니다.",
            },
            {
              tag: "계기",
              title: "화면을 보여 주자 그제서야 이해",
              text: "벤더와 셀러 각자의 입장에서 보는 화면을 만들어 역할을 화면으로 설명하자, 그제서야 모두가 같은 구조를 이해했습니다. 말보다 화면이 훨씬 빠르게 전달된다는 것을 배웠습니다.",
            },
            {
              tag: "선택",
              title: "화면 먼저, 문서는 화면 단위로",
              text: "화면을 먼저 만들기 위해 이때 처음 바이브 코딩을 배웠습니다. AI로 동작하는 화면을 먼저 만들고 정책 · 예외 케이스를 화면 단위로 붙여, 3주 일정을 1주로 당겼습니다.",
            },
          ],
        },
        {
          type: "callout",
          tone: "ink",
          label: "회고",
          text: "출시 전에 끝나 가설을 검증하지 못했습니다. 무엇으로 검증할지를 설계 단계에서 정해 두지 않은 것이 더 아쉬웠습니다. 다시 한다면 가설마다 확인할 지표를 먼저 정하고 이벤트까지 명세하겠습니다.",
        },
        {
          type: "cards",
          label: "다시 한다면 · 가설별 검증 지표",
          cols: 3,
          items: [
            { tag: "가설 1 지표", text: "AI 스튜디오로 만든 상세페이지와 아닌 상세페이지의 구매 전환율" },
            { tag: "가설 2 지표", text: "벤더 상품 등록 수, 상품별 참여 셀러 수" },
            { tag: "가설 3 지표", text: "가입한 셀러가 첫 공동구매 상품을 등록하기까지의 비율" },
          ],
        },
      ],
    },
  ],
};

const yf = (name: string) => `/work/yanolja-funnel/${name}.png`;
const phone = (name: string, alt: string, cap: string): CaseImage => ({ src: yf(name), w: 640, h: 1309, alt, cap });

const yanolja: GrowthCase = {
  slug: "yanolja-funnel",
  kicker: "02 · 구매 퍼널 기획 · 패스트캠퍼스 PM 부트캠프",
  title: ["야놀자 업셀링·크로스셀링", "구매 퍼널 개선"],
  lede: "기획자 5명 팀에서 서비스 기획·UI 설계·검증을 맡아, 숙박만 예약하던 사용자가 교통·레저와 상위 객실도 함께 보도록 숙박 예약 흐름 안에 추천 지점을 설계하고 254명 대상 프로토타입 A/B 테스트로 검증했습니다.",
  kpis: [
    {
      value: "+20.3%p",
      count: { from: 0, to: 20.3, decimals: 1, prefix: "+", suffix: "%p" },
      label: "숙박·교통·레저 3개 카테고리를 모두 인지한 비율",
      basis: "55.1% → 75.4%",
    },
    {
      value: "−26.9%p",
      count: { from: 0, to: 26.9, decimals: 1, prefix: "−", suffix: "%p" },
      label: "숙박 상품만 인지한 비율",
      basis: "34.5% → 7.6%",
    },
    {
      value: "88.9%",
      count: { from: 0, to: 88.9, decimals: 1, suffix: "%" },
      label: "개선된 구매 흐름에 만족한 응답자 비율",
      basis: "응답자 254명 중",
    },
  ],
  meta: [
    { k: "역할", v: "서비스기획 (서비스 기획 · UI 설계 · 검증)" },
    { k: "팀", v: "기획자 5명 팀 프로젝트" },
    { k: "기간", v: "2023.11.06 — 2023.11.24 (3주)" },
  ],
  heroImages: [],
  heroLayout: "pair",
  summary: [
    {
      tag: "문제",
      head: "교통·레저는 필요 없어서가 아니라, 몰라서 안 쓰였습니다",
      text: "교통·레저를 쓰지 않은 이유: “있는지 몰랐다” 교통 46.7%, 레저 40%",
      href: "#problem",
    },
    {
      tag: "해결",
      head: "숙박 예약 흐름은 그대로 두고, 지나가는 지점마다 보이게 했습니다",
      text: "객실 상세 · 숙소 지도 · 예약 직전 · 예약 완료, 네 지점에 상위 객실과 교통·레저 추천",
      href: "#how",
    },
    {
      tag: "결과",
      head: "숙박 외 카테고리까지 모두 인지한 사용자, 55.1% → 75.4%",
      text: "254명 대상 프로토타입 A/B 테스트 · 응답자의 88.9%가 개선된 흐름에 만족",
      href: "#result",
    },
  ],
  sections: [
    {
      id: "problem",
      badge: "01 WHAT · WHY",
      nav: "문제",
      title: "교통·레저는 필요 없어서가 아니라, 몰라서 안 쓰였습니다",
      blocks: [
        {
          type: "donut",
          label: "사용자는 대부분 숙박만 이용하고 있었습니다",
          text: "야놀자에는 교통·레저 상품과 묶음 상품이 있었지만, 설문에서 최근 이용 상품은 대부분 숙박이었습니다.",
          items: [
            { label: "숙박", value: 73.3 },
            { label: "교통", value: 6.7 },
            { label: "레저", value: 0.1 },
            { label: "사용하지 않음", value: 19.9, muted: true },
          ],
        },
        {
          type: "bars",
          label: "교통·레저를 쓰지 않은 이유: “있는지 몰랐다”",
          items: [
            { label: "교통", value: 46.7 },
            { label: "레저", value: 40 },
            { label: "필요없음", value: 13.3, muted: true },
          ],
          note: "설문 응답 기준",
        },
        {
          type: "callout",
          tone: "ink",
          label: "원인: 구매 흐름이 카테고리마다 끊겨 있었습니다",
          text: "상품이 없거나 매력이 없는 것이 아니라, 숙박을 예약하는 흐름 안에서 다른 카테고리가 보이지 않는 것이 문제였습니다.",
        },
        {
          type: "cards",
          cols: 2,
          items: [
            { tag: "문제 1", text: "크로스셀이 가능한 묶음 상품이 있었지만, 그 혜택이 거의 노출되지 않음" },
            { tag: "문제 2", text: "숙박·교통·레저 페이지에 들어갈 때마다 지역·날짜 조건을 다시 설정해 검색해야 함" },
            { tag: "문제 3", text: "숙소 상세페이지 지도에서 숙소 주변 상품을 확인하기 어려움" },
            { tag: "문제 4", text: "같은 숙소 안에서 객실 옵션을 비교하기 어렵고, 상위 옵션의 장점이 드러나지 않음" },
          ],
        },
        {
          type: "cards",
          cols: 3,
          items: [
            {
              tag: "WHY",
              title: "새 고객 없이도 한 번의 예약에서 거래 규모를 키울 수 있습니다",
              text: "이미 숙박을 예약하려는 사용자에게 상위 객실과 교통·레저를 함께 보여주는 업셀링·크로스셀링이 과제였음",
            },
            {
              tag: "가설",
              title: "몰라서 안 썼다면, 보이기만 해도 구매로 이어질 수 있습니다",
              points: [
                "① 교통·레저 인지가 오르면 크로스셀 판매율이 늘어난다",
                "② 상위 객실의 혜택을 정리해 보여주면 상위 객실 판매율이 늘어난다",
              ],
            },
            {
              tag: "성공 지표",
              tone: "blue",
              title: "판매 데이터가 없어, 인지율을 성공 지표로 정했습니다",
              text: "내부 판매 데이터를 얻을 수 없어, 판매율 대신 숙박 외 카테고리를 인지하는 비율로 성공을 판단",
            },
          ],
        },
      ],
    },
    {
      id: "how",
      badge: "02 HOW (1/2)",
      nav: "해결 · 예약 흐름",
      title: "숙박 예약 흐름은 그대로 두고, 지나가는 지점마다 보이게 했습니다",
      blocks: [
        {
          type: "beforeAfter",
          num: "①",
          title: "상위 객실의 장점을 한 줄 리뷰로 (업셀링)",
          before: phone("room-before", "객실 상세 개선 전", "객실 정보와 가격만 표시"),
          after: phone("room-after", "객실 상세 개선 후", "상위 객실 추천 + 한 줄 리뷰"),
          points: [
            "상위 객실 투숙객의 긍정 리뷰를 한 줄로 뽑아, 광고 문구 대신 실제 후기로 설득",
            "팝업 대신 객실 옵션 목록 안에 제안을 넣어, 예약 흐름은 끊지 않고 선택은 고객에게 맡김",
            "차액과 추가 혜택을 나란히 보여 줘, 업그레이드 판단을 '얼마 더'에서 '무엇을 더'로 바꿈",
            "같은 숙소 안에서 옵션 비교가 어렵던 문제를 해결",
          ],
        },
        {
          type: "beforeAfter",
          num: "②",
          title: "숙소 지도에서 주변 레저를 바로 구매 (크로스셀링)",
          before: phone("map-before", "숙소 지도 개선 전", "지도에 주변 숙소만 표시"),
          after: phone("map-after", "숙소 지도 개선 후", "주변 레저 아이콘과 상품 목록"),
          points: [
            "숙소를 고른 사용자가 '근처에서 뭐 하지?'를 고민하는 바로 그 화면, 숙소 지도에 주변 레저를 아이콘으로 표시",
            "지도에서 목록 보기, 구매까지 바로 연결해 레저를 찾으러 앱 밖으로 나가는 길을 없앰",
            "숙소 위치가 정해진 순간을 활용해, '가까워서'라는 자연스러운 구매 이유를 만듦",
          ],
        },
      ],
    },
    {
      id: "how-2",
      badge: "02 HOW (2/2)",
      nav: "해결 · 결제·완료",
      title: "결제 직전과 예약 완료 후, 한 번 더 다른 카테고리를 꺼냈습니다",
      blocks: [
        {
          type: "beforeAfter",
          num: "③",
          title: "예약 직전, 숙소 조건에 맞춘 교통·레저 추천",
          before: phone("checkout-before", "예약 직전 개선 전", "숙박 예약 정보만 표시"),
          after: phone("checkout-after", "예약 직전 개선 후", "같이 예약할 수 있어요"),
          points: [
            "결제 직전, 구매 의지가 가장 높은 순간에 '숙소까지 어떻게 가지?'라는 다음 질문에 먼저 답함",
            "기차·고속버스·렌터카와 여행지 인기 놀거리를 할인 정보와 함께 보여 줘, 있어도 보이지 않던 묶음 혜택을 꺼냄",
            "숙소의 지역·날짜를 그대로 이어받아, 조건을 다시 입력하지 않고 한 번에 담아 결제",
            "추천은 선택 사항으로 두어, 숙박 결제 흐름은 막지 않음",
          ],
        },
        {
          type: "beforeAfter",
          num: "④",
          title: "예약 완료 후에도 교통·레저를 다시 노출",
          before: phone("complete-before", "예약 완료 개선 전", "예약·혜택 정보만 표시"),
          after: phone("complete-after", "예약 완료 개선 후", "교통 추천과 주변 놀거리"),
          points: [
            "결제를 끝내 지출 부담이 사라지고 여행 준비로 마음이 넘어간 순간, ‘숙소까지 어떻게 가세요?’로 교통과 주변 놀거리를 제안",
            "예약한 모든 사용자가 반드시 지나는 화면이라, 결제 직전 추천을 지나친 고객에게도 한 번 더 기회를 만듦",
            "이번에 사지 않더라도 숙박 외 카테고리가 있다는 것을 남겨, 다음 여행에서 야놀자의 교통·레저를 떠올리게 함",
          ],
        },
      ],
    },
    {
      id: "result",
      badge: "03 RESULT · RETRO",
      nav: "결과 · 회고",
      title: "숙박 외 카테고리까지 모두 인지한 사용자, 55.1% → 75.4%",
      blocks: [
        {
          type: "compare",
          head: ["지표", "A · 기존안", "B · 개선안", "차이"],
          rows: [
            ["숙박·교통·레저를 모두 인지한 비율", "55.1%", "75.4%", "+20.3%p"],
            ["숙박 상품만 인지한 비율", "34.5%", "7.6%", "−26.9%p"],
          ],
          note: "기존안(A)과 개선안(B)을 프로토타입으로 만들어 254명을 대상으로 A/B 테스트 (2023.11.21 — 11.23, 3일). 내부 판매 데이터 없이 진행해, 판매율이 아닌 카테고리 인지율을 성공 지표로 삼았습니다.",
        },
        {
          type: "callout",
          tone: "blue",
          label: "응답자의 88.9%가 개선된 흐름에 만족했습니다",
          text: "만족한 응답자 중 40.9%가 이유로 ‘편리함 및 시간 절약’을 꼽았습니다. 조건을 다시 입력하지 않고 한 흐름으로 숙박·교통·레저를 고를 수 있게 한 설계가 체감된 부분입니다.",
        },
        {
          type: "cards",
          label: "회고",
          cols: 2,
          items: [
            {
              tag: "회고 1",
              text: "인지율이 오른 것은 확인했지만, 그것이 실제 구매로 이어지는지는 증명하지 못했습니다. 다시 한다면 새 화면의 체류 시간과 구매 전환율까지 함께 보는 지표를 설계해, 인지 단계에서 멈추지 않고 행동까지 확인하겠습니다.",
            },
            {
              tag: "회고 2",
              text: "의견이 갈릴 때 다수결로 넘어간 뒤 팀원 한 명이 이탈해 기획 리소스가 부족해졌습니다. 이후로는 각자 왜 동의하거나 반대하는지를 충분히 나누고, 서비스의 목표에 어떤 의견이 더 맞는지 함께 판단합니다.",
            },
          ],
        },
      ],
    },
  ],
};

const dd = (name: string) => `/work/daytime-delivery/${name}`;

const daytime: GrowthCase = {
  slug: "daytime-delivery",
  kicker: "03 · 신규 서비스 기획 · 딜리버스",
  title: ["네이버 제휴 미배송 재매칭", "서비스 “낮배송” 0→1"],
  lede: "미배송된 물량을 낮 시간대에 다시 배차하는 서비스를 라이더 앱, 운영 어드민, 관제 대시보드(TMS)까지 단독 설계했습니다.",
  kpis: [
    { value: "82.5%", count: { from: 0, to: 82.5, decimals: 1, suffix: "%" }, label: "배차 매칭률", basis: "공고 622건 중 513건" },
    { value: "100%", count: { from: 0, to: 100, suffix: "%" }, label: "배차 확정 건 재배송 완료율", basis: "확정 513건 모두 배송 완료" },
    { value: "76.9%", count: { from: 0, to: 76.9, decimals: 1, suffix: "%" }, label: "자동 전환율", basis: "수기 전환 205개로 감소" },
  ],
  kpiNote: "릴리즈 17일(2026.10.26 ~ 11.11) 운영 데이터",
  meta: [
    { k: "역할", v: "서비스기획 (0→1 단독 설계)" },
    { k: "기여도", v: "기획 100%" },
    { k: "기간", v: "2026.08.01 — 2026.09.15 (2026.10.26 릴리즈)" },
    { k: "범위", v: "라이더 앱(딜리래빗) · 운영 어드민 · 관제 대시보드(TMS)" },
    { k: "산출물", v: "기능명세서 · 운영 정책 · 바이브코딩 동작 화면" },
  ],
  heroImages: [],
  heroLayout: "stack",
  summary: [
    {
      tag: "문제",
      head: "물량이 늘면서 미배송도 함께 늘었습니다",
      text: "처리할 별도 회차가 없어, 미배송 물품마다 운영팀이 수기로 처리",
      href: "#problem",
    },
    {
      tag: "해결",
      head: "기준이 분명한 건은 시스템이, 판단이 필요한 건만 운영자가",
      text: "건당 단가를 두 배로 높인 별도 낮 회차 · 사유별 자동 전환 · 하루 타임라인 고정",
      href: "#decide",
    },
    {
      tag: "결과",
      head: "릴리즈 17일, 낮배송 공고 82.5%가 배차되고 배차 건은 모두 배송 완료됐습니다",
      text: "운영자 수기 전환 887개 → 205개 (77%↓)",
      href: "#result",
    },
  ],
  sections: [
    {
      id: "problem",
      badge: "01 WHAT · WHY",
      nav: "문제",
      title: "물량이 늘면서 미배송도 함께 늘었습니다",
      blocks: [
        {
          type: "rise",
          label: "8월 대비 9월, 미배송이 물량을 따라 늘었습니다",
          items: [
            {
              label: "하루 평균 배송 물량",
              delta: "+38%",
              before: { x: "8월", v: 21254, text: "21,254건" },
              after: { x: "9월", v: 29410, text: "29,410건" },
            },
            {
              label: "하루 평균 미배송",
              delta: "+25%",
              before: { x: "8월", v: 55.4, text: "55.4건" },
              after: { x: "9월", v: 69.5, text: "69.5건" },
            },
            {
              label: "하루 80건 이상 미배송된 날",
              delta: "3배",
              before: { x: "8월", v: 3, text: "3일" },
              after: { x: "9월", v: 9, text: "9일" },
              sub: "8월은 31일 중 3일, 9월은 22일 중 9일",
            },
          ],
          note: "8월 대비 9월(1~22일)",
        },
        {
          type: "flow",
          label: "처리할 별도 회차가 없어, 물품마다 수기로 처리했습니다",
          steps: [{ title: "사유 확인" }, { title: "OB콜" }, { title: "실물 확인" }, { title: "회차 수기 전환" }],
          notes: ["미배송 물품 한 건마다 운영팀이 반복한 절차"],
        },
        {
          type: "cards",
          label: "그대로 두면 생기는 딜레마",
          cols: 2,
          items: [
            { tag: "처리하자니", title: "운영 공수가 감당되지 않음" },
            { tag: "두자니", title: "반납으로 이어져 화주사 SLA와 배송 수익 손실" },
          ],
        },
        { type: "callout", tone: "blue", text: "→ 미배송 건을 따로 처리할 회차와 흐름이 필요했습니다" },
      ],
    },
    {
      id: "decide",
      badge: "02 HOW (1/3) · 결정",
      nav: "해결 · 결정",
      title: "미배송 건을 언제, 어떤 회차로 다시 보낼지 먼저 정했습니다",
      blocks: [
        {
          type: "versus",
          label: "결정 1 · 언제 — 전날 미배송 건은 모두 낮에 다시 배송",
          ratio: "3.7배",
          caption: "새벽배송은 당일배송보다 1만 건당 미배송이 3.7배 많았습니다",
          unit: "건",
          items: [
            { label: "새벽배송", value: 58.1 },
            { label: "당일배송", value: 15.8, muted: true },
          ],
          note: "2026.08.01 ~ 09.22, 배송예정일 기준 (회수·픽업 제외)",
          points: ["새벽배송은 전체 배송 예정 물량의 21%였지만, 전체 미배송 건의 50%를 차지했습니다."],
        },
        {
          type: "cards",
          label: "왜 새벽에만 많았을까 — SQL로 회차·사유별 미배송을 집계하고 VOC를 살펴봤습니다",
          text: "1만 건당 차이 42.3건 중 약 4분의 3이 출입 문제였고, 막힌 곳은 크게 세 곳이었습니다",
          cols: 3,
          items: [
            { tag: "공공기관", text: "새벽엔 건물 폐쇄, 낮엔 출입 가능" },
            { tag: "공동현관", text: "새벽엔 진입 불가, 낮엔 거주자와 동반 진입" },
            { tag: "아파트 단지", text: "새벽엔 경비 부재, 낮엔 경비실 확인 후 출입" },
          ],
        },
        { type: "callout", tone: "blue", text: "→ 세 곳 모두 낮에는 풀리는 문제라, 전날 미배송 건은 출입이 가장 수월한 낮에 다시 배송" },
        {
          type: "cards",
          label: "결정 2 · 어떤 회차로 — 기존 당일배송 대신 별도 낮 회차",
          cols: 2,
          items: [
            { tag: "검토한 대안", title: "기존 당일배송 회차에 태우기", points: ["운영팀의 물품별 수기 절차를 매번 거쳐야 함", "당일배송 회차에 태운다고 해도 배송에 성공한다는 보장이 없음"] },
            {
              tag: "선택",
              tone: "blue",
              title: "별도 낮 회차",
              points: [
                "건당 단가를 2,500원에서 5,000원으로 두 배 높인 별도 낮 회차를 만들어 라이더에게 확실한 동기 부여",
                "다른 배송 중 덤으로 얹는 물량이 아니라 따로 배송하는 물량이라, 시간이 여유로워 배송 성공률이 높음",
              ],
            },
          ],
        },
        { type: "callout", tone: "ink", text: "→ 목표는 미배송을 줄이는 것이 아니라 아예 없애는 것" },
      ],
    },
    {
      id: "design",
      badge: "02 HOW (2/3) · 설계",
      nav: "해결 · 설계",
      title: "기준이 분명한 건은 시스템이, 판단이 필요한 건만 운영자가",
      blocks: [
        {
          type: "cards",
          cols: 2,
          items: [
            {
              tag: "설계 1",
              title: "사유별 자동 선별",
              points: ["자동 전환 5종: 출입 불가, 비밀번호 미입력·불일치, 기상 악화, 고객 부재", "운영자 검토 8종: 고객 요청, 주소 불일치, 파손·분실 등"],
            },
            {
              tag: "설계 2",
              title: "하루 타임라인 고정",
              points: ["10:20 조건 충족 건 자동 전환", "10:30 공고 일괄 생성, 11:00 운영자 처리분 2차 갱신", "16:00 공고 마감, 17:00 배송·반납 마감"],
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              src: dd("timeline.webp"),
              w: 2000,
              h: 951,
              alt: "낮배송 하루 운영 타임라인",
              cap: "하루 운영 타임라인: 시스템·라이더·PO 역할 분담",
            },
          ],
        },
        {
          type: "figures",
          label: "설계 3 · 라이더가 감당할 만큼만 배정",
          layout: "phones",
          points: [
            "첫 신청은 즉시 확정",
            "배송 중 추가 신청하면, 진행 중인 물량 + 신규 물량의 ETA가 남은 가용시간(17:00 − 픽업 1시간 − 현재 시각) 안일 때만 확정",
            "ETA 계산 방식과 예외 처리는 직접 정의하고, 머신러닝 기반 ETA 계산은 로지테크 파트가 구현",
            "1시간 안 미픽업 시 자동 취소 후 재공고",
          ],
          items: [
            { src: dd("rider-job-detail.png"), w: 375, h: 1160, alt: "라이더 앱 낮배송 공고 상세", cap: "공고 상세: 단가·프로모션·총 보상" },
            { src: dd("rider-pending.png"), w: 375, h: 807, alt: "라이더 앱 추가 신청 완료 안내", cap: "추가 신청: 5분 안에 결과 안내" },
          ],
        },
        {
          type: "callout",
          label: "설계 4 · 운영 어드민·TMS도 같은 기준으로",
          text: "라이더 앱과 같은 배정 기준을 운영 어드민·TMS에도 적용하고, 반납 물량을 따로 볼 수 있도록 TMS에 반납 탭을 새로 만들었습니다.",
        },
      ],
    },
    {
      id: "system",
      badge: "02 HOW (3/3) · 시스템",
      nav: "해결 · 시스템",
      title: "앱·어드민·TMS가 같은 상태값을 보게 했습니다",
      blocks: [
        {
          type: "flow",
          steps: [
            { title: "미배송" },
            { tag: "10:20", title: "자동 전환" },
            { title: "낮배송 대상" },
            { tag: "10:30", title: "공고" },
            { title: "배차 확정" },
            { title: "픽업·출차" },
            { title: "배송 완료" },
            { tag: "17:00", title: "반납" },
          ],
        },
        {
          type: "cards",
          cols: 3,
          items: [
            {
              tag: "기준 값",
              title: "물품 단위 상태값",
              points: [
                "배송 구분은 물품의 service_window로 판단 (A 낮배송 · B 당일 · C 새벽)",
                "미배송(deliveryincomplete) + 유닛 도착(storage_bin=1) + 포함 사유면 10:20에 A로 자동 전환",
                "그 외 사유는 운영자가 전환 페이지에서 건별 검토 후 수기 전환, 전환 이력에 자동·수기와 처리자 기록",
                "TMS 배송 구분 필터도 날짜·시간 범위 대신 service_window를 직접 참조",
              ],
            },
            {
              tag: "흐름",
              title: "공고와 박스 상태 흐름",
              points: [
                "10:30·11:00 유닛+섹터코드별 박스 1개 = 공고 1개 생성 (박스 unit_arrived, 물품 readyfordelivery)",
                "라이더 신청 → 배차 확정 (중복 신청은 최대 5분 심사)",
                "유닛에서 박스 스캔 → claimed, 출차 → outfordelivery",
                "배송 완료 deliverycomplete / 미배송 deliveryincomplete",
                "미배송 건 반납 → storage_bin=1, 박스 unit_returned. TMS 반납 탭에서 반납 전·중·완료 관제",
              ],
            },
            {
              tag: "예외",
              title: "예외·실패 처리",
              points: [
                "확정 후 1시간 안에 픽업(claimed)하지 않으면 자동 배차 취소, 공고 재노출, 미배차 사유 기록",
                "중복 신청 심사 API 실패 시 5분간 재시도, 그래도 실패하면 “운영센터로 문의” Push",
                "심사 중 또 신청하면 수락 불가 팝업으로 차단",
                "11:00 2차 배치: 진행 중 공고에는 건수만 합산, 마감된 공고면 새 공고 생성",
                "수기 공고 등록 시 운송장을 5가지(존재·미배송·유닛 도착·중복 포함·낮배송 대상)로 검증하고 실패 사유별로 안내",
              ],
            },
          ],
        },
        {
          type: "figures",
          items: [
            { src: dd("tms-return.png"), w: 1440, h: 1060, alt: "TMS 반납 탭 화면", cap: "TMS 반납 탭: 반납 전·중·완료 관제" },
          ],
        },
      ],
    },
    {
      id: "result",
      badge: "03 RESULT · RETRO",
      nav: "결과 · 회고",
      title: "릴리즈 17일, 낮배송 공고 82.5%가 배차되고 배차 건은 모두 배송 완료됐습니다",
      blocks: [
        {
          type: "cards",
          cols: 2,
          ordered: true,
          items: [
            {
              tag: "BEFORE · 수기 재배송",
              points: ["미배송 발생, 처리할 별도 회차 없음", "물품마다 사유 확인 후 OB콜·화주사 확인", "유닛에 실물이 있는지 확인", "회차 수기 전환, 못 하면 반납"],
            },
            {
              tag: "AFTER · 낮배송",
              tone: "blue",
              points: [
                "10:20 조건 충족 건 자동 전환",
                "10:30 공고 일괄 자동 생성, 11:00 2차 갱신",
                "라이더 신청·확정 자동, 가용 시간 안에서만 배정",
                "17:00 배송 및 반납 마감",
              ],
            },
          ],
        },
        {
          type: "stats",
          label: "운영자 수기 전환 887개 → 205개 (77%↓)",
          text: "기존에는 미배송 물품마다 사유 확인 → OB콜 → 실물 확인 → 회차 수기 전환 4단계를 손으로 거쳤습니다. 이제 기준이 분명한 건은 자동 전환율 76.9%로 시스템이 처리하고, 운영자는 판단이 필요한 205개만 백오피스에서 검토해 전환합니다.",
          items: [
            { value: "82.5%", label: "배차 매칭률", sub: "공고 622건 중 513건 확정" },
            { value: "100%", label: "재배송 완료율", sub: "배차 확정 513건 전부 배송 완료" },
            { value: "76.9%", label: "자동 전환율", sub: "전환 물품 887개 기준" },
          ],
          note: "2026.10.26 ~ 11.11 운영 데이터, 공고(컨테이너) 기준 · 11/11은 추출 시점까지 · 배차 시도 중 36건은 설계한 규칙대로 차단(1시간 미픽업 자동 취소 19, ETA 초과 17) · 측정 예정: 릴리즈 전후 화주사 반납 물품 수",
        },
        {
          type: "cards",
          label: "회고",
          cols: 2,
          items: [
            {
              tag: "회고 1",
              text: "낮배송은 ‘새벽에 막힌 출입은 낮에 풀린다’와 ‘단가를 두 배로 올리면 라이더가 충분히 지원한다’는 두 가정 위에 설계됐습니다. 릴리즈 후 매칭률 82.5%, 배차 건 100% 배송 완료로 두 가정 모두 확인했지만, 설계 당시에는 데이터와 CS 내역만 있었고 현장에서 확인한 것은 아니었습니다.",
            },
            {
              tag: "회고 2",
              text: "0→1 기획에서는 설계를 완성하기 전에 가장 큰 가정부터 확인해야 한다는 것을 배웠습니다. 이후에는 일부 유닛에서 수기로 먼저 돌려 출입 성공률과 지원율을 확인한 뒤 시스템 설계를 이어가겠습니다.",
            },
          ],
        },
      ],
    },
  ],
};

export const growthCases: GrowthCase[] = [pims, yanolja, daytime];

export function getGrowthCase(slug: string) {
  return growthCases.find((c) => c.slug === slug);
}
