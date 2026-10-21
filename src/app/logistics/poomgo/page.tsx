import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { growthProjects } from "@/data/growthProjects";
import { pimsOperations } from "@/data/poomgoProjects";
import {
  certifications,
  education,
  experience,
  internship,
  projectWork,
  type Entry,
} from "@/components/Experience";
import styles from "./poomgo.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 서비스 기획자 포트폴리오",
  description: "운영 어드민과 셀러 툴을 기획한 서비스 기획자 김유정(Jennifer Kim)의 포트폴리오.",
  // 특정 회사 지원용 페이지라 검색에는 노출하지 않음
  robots: { index: false },
};

const EMAIL = "950426kim@naver.com";
const PHONE = "010-5508-9646";

// 실측·설계 성과 (포트폴리오 상세 페이지와 같은 수치)
const proofs = [
  {
    who: "공동현관\nUI/UX",
    num: "출입 문제 미배송 54.2% 감소",
    text: "SQL로 미배송 원인의 43%를 찾고, 이미 있던 출입 정보를 라이더가 바로 보게 바꿔 배송 1만 건당 9.91건 → 4.54건으로 줄였어요. 배포 후 지표에 변동이 없는 걸 직접 확인했을 때는 원인인 주소 데이터 매핑 오류까지 찾아 고쳤어요.",
    note: "딜리버스 · 7월 대비 9월 실측",
  },
  {
    who: "잔여배차\n자동화",
    num: "건당 처리 10분 → 3.5분",
    text: "운영자가 수기로 하던 6단계, 7단계 구인 과정을 4단계로 줄여 평균 6.5분을 단축했어요.",
    note: "딜리버스 · 직접 측정",
  },
  {
    who: "PiMS\nPartners",
    num: "커머스 파트너 어드민 0→1 기획",
    text: "셀러·벤더가 쓰는 상품·광고·공동구매·재고·주문·배송·운영자 관리까지 베타1 범위를 처음부터 설계했어요. AI와 바이브코딩으로 화면을 먼저 만들어, 기획부터 프론트까지 3주 걸리던 과정을 1주로 줄였어요.",
    note: "애딥 · Project Leader · 베타1 설계 완료",
  },
];

// 공고(Poomgo VISE 서비스 기획자)의 자격요건·주요 업무에서 읽은 역량 × 근거
const fits = [
  {
    key: "운영 시스템 기획",
    title: "운영자가 매일 쓰는 어드민을 기획했습니다",
    mine: "라스트마일 운영 어드민·관제 서비스(TMS)·라이더 앱과, 셀러가 매일 쓰는 PiMS Partners의 재고·주문·배송·운영자 관리 화면을 기획했어요.",
  },
  {
    key: "데이터 → 배포 후 결과",
    title: "기대와 다른 결과가 나와도 원인까지 따라갑니다",
    mine: "미배송 원인 43%를 SQL로 찾아 54.2%를 줄였어요. 배포 후 지표에 변동이 없는 걸 직접 확인하고, 원인인 주소 매핑 오류를 찾아 데이터 수정과 예외 처리를 요청했어요.",
  },
  {
    key: "복잡한 흐름과 예외",
    title: "단계와 예외가 많은 업무를 정책과 화면으로 풉니다",
    mine: "PiMS에서 배송 상태 5종과 재고 상태 3단계를 바뀌는 조건까지 정의했고, 운영자 권한은 하위 권한의 수정·본인 삭제·마지막 관리자 삭제처럼 막아야 할 경우부터 정했어요.",
  },
  {
    key: "기준 문서",
    title: "정책과 예외를 기준 문서로 남깁니다",
    mine: "운영팀 인터뷰로 운영의 흐름을, SQL 쿼리로 데이터의 흐름을 읽고 정책과 예외를 미리 협의해 운영 정책서로 남겨요. 기능이 나온 뒤에는 기획팀·운영팀과 한 번 더 싱크 미팅을 열어 정책과 예외를 다듬고, 모든 결정은 문서로 기록해요.",
  },
  {
    key: "AI 활용",
    title: "AI로 리서치부터 화면까지 직접 처리합니다",
    mine: "AI로 IA·정책 초안을 정리하고 바이브코딩으로 동작하는 화면을 먼저 만들어, 와이어프레임부터 프론트까지 3주를 1주로 줄였어요. 이 포트폴리오도 직접 만들었어요.",
  },
  {
    key: "개발 협업",
    title: "데이터 구조로 개발자와 대화하고, 다른 의견을 듣습니다",
    mine: "PiMS에서 주문 노출은 PG 결제 데이터 확정 기준, 배송 상태는 택배사 API 응답 기준으로 정의했어요. 잔여배차에서는 운영팀 요구를 듣고 요구사항을 기능으로 만들었고, 각 기능은 DB 내 구조와 데이터를 고려하여 기획해 개발팀에 전달했어요.",
  },
];

// 우대사항과 맞는 경험
const bonus = [
  "커머스 셀러 툴 — PiMS Partners 어드민(상품·광고·공동구매·재고·주문·배송)",
  "정산·권한 — 거래·정산 구조 설계, 운영자 초대·역할·수정/삭제 제한 권한 설계",
  "Figma로 화면 초안 직접 작업",
  "물류 도메인 — 라스트마일 운영 시스템",
];

const culture = ["근본 원인을 탐구한다", "작은 만큼 큰 책임과 권한", "의문을 갖되 신뢰로 지지한다", "기술 장벽 낮추기"];

type Pic = { src: string; width: number; height: number; alt: string };

// 프로젝트별 대표 화면 2장 (흐름 순서)
const projectPics: Record<string, Pic[]> = {
  "dispatch-automation": [
    { src: "/work/dispatch-automation/admin-dispatch.png", width: 1830, height: 690, alt: "운영 백오피스 배차 공고 목록. 공고 상태별 건수, 공고 목록, 선택한 공고의 단가·프로모션 일괄 편집 영역이 있다." },
  ],
  "entrance-ux": [
    { src: "/work/entrance-ux/before.png", width: 820, height: 828, alt: "개선 전 배송 카드. 출입 정보가 '정보 없음'으로 표시된다." },
    { src: "/work/entrance-ux/after.png", width: 346, height: 515, alt: "개선 후 배송 카드. 비밀번호 미등록 안내와 다른 방법 찾기 버튼이 있다." },
  ],
  "pims-partners": [
    { src: "/work/pims/screen-ad-list.png", width: 2800, height: 1837, alt: "PiMS Partners 광고 상품 리스트 화면. 상태별 광고 수 카드와 광고 상품 목록이 있다." },
  ],
  "pims-operations": [
    { src: "/work/pims/op-inventory.png", width: 2800, height: 1640, alt: "PiMS Partners 재고 관리 화면. 품절·품절 임박 상태와 재고수정 버튼이 있다." },
  ],
};

// 물류 프로젝트 2개 + 커머스 셀러 어드민 2개(운영 기능, 활성화·광고). 상세 페이지 주소가 달라 함께 둠
const mainProjects = [
  ...projects.filter((p) => projectPics[p.slug]).map((p) => ({ ...p, href: `/logistics/work/${p.slug}` })),
  { ...pimsOperations, href: `/logistics/poomgo/work/${pimsOperations.slug}` },
  ...growthProjects
    .filter((p) => p.slug === "pims-partners")
    .map((p) => ({
      ...p,
      // 운영 기능 프로젝트와 구분되게 이 페이지에서만 제목을 구체화
      title: "커머스 파트너 어드민 〈PiMS Partners〉 활성화·광고 기획",
      href: `/growth/work/${p.slug}`,
    })),
];

function CareerGroup({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div className={styles.careerGroup}>
      <h3 className={styles.careerHead}>{title}</h3>
      <ul className={styles.careerList}>
        {entries.map((e) => (
          <li key={`${e.period}-${e.title}`} className={styles.careerRow}>
            <div className={styles.careerWhen}>
              <span>{e.period}</span>
              {e.tag && <span>{e.tag}</span>}
            </div>
            <div>
              <h4 className={styles.careerTitle}>
                {e.href ? <Link href={e.href}>{e.title}</Link> : e.title}
              </h4>
              {e.meta && <p className={styles.careerMeta}>{e.meta}</p>}
              {e.note && <p className={styles.careerMeta}>{e.note}</p>}
              {e.summary && <p className={styles.careerSummary}>{e.summary}</p>}
              {e.details && (
                <ul className={styles.careerDetails}>
                  {e.details.map((d) =>
                    typeof d === "string" ? (
                      <li key={d}>{d}</li>
                    ) : (
                      <li key={d.text}>
                        <strong>{d.text}</strong>
                        <ul>
                          {d.sub.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
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

export default function PoomgoPortfolio() {
  return (
    <div className={styles.root}>
      <header className={styles.top}>
        <Link href="/logistics/poomgo" className={styles.logo}>
          Jennifer Kim&apos;s Portfolio<span>.</span>
        </Link>
        <nav className={styles.nav}>
          <a href="#proof">성과</a>
          <a href="#fit">역량</a>
          <a href="#work">프로젝트</a>
          <a href="#experience">경력</a>
          <a href={`mailto:${EMAIL}`} className={styles.pill}>
            메일 보내기
          </a>
        </nav>
      </header>

      <section className={styles.hero}>
        <span className={`${styles.heroShape} ${styles.hs1}`} aria-hidden />
        <span className={`${styles.heroShape} ${styles.hs2}`} aria-hidden />
        <span className={`${styles.heroShape} ${styles.hs3}`} aria-hidden />
        <span className={`${styles.heroShape} ${styles.hs4}`} aria-hidden />
        <div className={styles.heroInner}>
          <p className={styles.label}>Service Planner · 김유정</p>
          <h1 className={styles.heroTitle}>
            운영자가 매일 쓰는 시스템을
            <br />
            정책과 화면으로 설계합니다
          </h1>
          <p className={styles.heroSub}>
            라스트마일 운영 어드민과 커머스 셀러 어드민을 기획하며, 재고·주문·배송 같은 상태값과
            복잡한 예외를 정책과 화면으로 풀었습니다. 데이터로 문제를 찾고, 배포 뒤 결과가 기대와
            다를 때는 원인까지 따라갔습니다.
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className={`${styles.pill} ${styles.pillLime}`}>
              프로젝트 보기
            </a>
            <a href={`mailto:${EMAIL}`} className={`${styles.pill} ${styles.pillGhost}`}>
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <section id="proof" className={`${styles.section} ${styles.mist}`}>
        <p className={styles.label}>성과</p>
        <h2 className={styles.h2}>숫자로 확인한 변화</h2>
        <div className={styles.bubbles}>
          {proofs.map((p) => (
            <div key={p.num} className={styles.bubbleRow}>
              <div className={styles.avatar} style={{ whiteSpace: "pre-line" }}>
                {p.who}
              </div>
              <div className={styles.bubble}>
                <p className={styles.bubbleNum}>{p.num}</p>
                <p className={styles.bubbleText}>{p.text}</p>
                <p className={styles.bubbleWho}>{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="fit" className={`${styles.section} ${styles.dark}`}>
        <p className={styles.label} style={{ color: "var(--lime)" }}>
          품고가 찾는 사람
        </p>
        <h2 className={styles.h2}>Poomgo VISE 서비스 기획자 공고에서 읽은 역량,</h2>
        <p className={styles.sub}>그리고 제가 가진 근거입니다.</p>
        <div className={styles.fitGrid}>
          {fits.map((f) => (
            <article key={f.key} className={styles.fitCard}>
              <p className={styles.fitKey}>{f.key}</p>
              <h3 className={styles.fitTitle}>{f.title}</h3>
              <p className={styles.fitMine}>{f.mine}</p>
            </article>
          ))}
        </div>
        <div className={styles.bonus}>
          <p className={styles.fitKey}>우대사항과 맞는 경험</p>
          <ul>
            {bonus.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className={styles.culture} aria-label="두핸즈 Tech 조직문화">
          {culture.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section id="work" className={styles.section}>
        <p className={styles.label}>프로젝트</p>
        <h2 className={styles.h2}>운영 화면을 바꾼 네 가지 기획</h2>
        <div className={styles.projects}>
          {mainProjects.map((p) => (
            <Link key={p.slug} href={p.href} className={styles.project}>
              <div className={styles.projectText}>
                <p className={styles.label}>
                  {p.category} · {p.year}
                </p>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectSummary}>{p.summary}</p>
                {p.detail && p.detail.metrics.length > 0 && (
                  <div className={styles.chips}>
                    {p.detail.metrics.slice(0, 2).map((m) => (
                      <span key={m.value}>{m.value}</span>
                    ))}
                  </div>
                )}
                <span className={styles.more}>케이스 스터디 보기 →</span>
              </div>
              <div className={styles.projectPics}>
                {projectPics[p.slug].map((pic) => (
                  <Image key={pic.src} src={pic.src} width={pic.width} height={pic.height} alt={pic.alt} sizes="(max-width: 900px) 45vw, 260px" />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.mist}`}>
        <p className={styles.label}>일하는 방식</p>
        <h2 className={styles.h2}>문제부터 숫자까지 직접 확인합니다</h2>
        <div className={styles.aboutGrid}>
          <p>
            무엇이 문제인지, 왜 개선해야 하는지, 어떻게 바꿀지를 먼저 묻습니다. 사용자가
            어디서 막히는지 인터뷰와 데이터로 확인하고, 바뀌어야 할 것을 요구사항으로 정확히
            정의합니다.
          </p>
          <p>
            데이터는 SQL로 직접 뽑고, 화면은 Figma와 바이브코딩으로 직접 만듭니다. Claude와
            GPT를 요구사항 정리부터 화면 구현까지 써서 같은 시간에 더 많이 검증합니다.
          </p>
        </div>
        <div className={styles.tools}>
          {["Figma", "Notion", "SQL", "VS Code", "Claude", "GPT", "바이브코딩", "스토리보드"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <p className={styles.label}>경력</p>
        <h2 className={styles.h2}>지나온 일</h2>
        <div style={{ marginTop: 48 }}>
          <CareerGroup title="Experience" entries={experience} />
          <CareerGroup title="Projects / Internship" entries={[...projectWork, ...internship]} />
          <CareerGroup title="Education" entries={education} />
          <CareerGroup title="Certification" entries={certifications} />
        </div>
      </section>

      <section className={styles.cta}>
        <span className={`${styles.ctaShape} ${styles.cs1}`} aria-hidden />
        <span className={`${styles.ctaShape} ${styles.cs2}`} aria-hidden />
        <span className={`${styles.ctaShape} ${styles.cs3}`} aria-hidden />
        <h2>
          품고 나우에서 VISE로,
          <br />
          VISE의 다음은 함께 만들고 싶습니다
        </h2>
        <p>메일이나 전화로 편하게 연락 주세요.</p>
        <div className={styles.ctaActions}>
          <a href={`mailto:${EMAIL}`} className={`${styles.pill} ${styles.pillLime}`}>
            {EMAIL}
          </a>
          <a href={`tel:${PHONE}`} className={`${styles.pill} ${styles.pillGhost}`}>
            {PHONE}
          </a>
        </div>
      </section>

      <footer className={styles.foot}>
        <span>© 2026 김유정 (Jennifer Kim)</span>
      </footer>
    </div>
  );
}
