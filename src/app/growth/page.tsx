import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { growthProjects } from "@/data/growthProjects";
import {
  certifications,
  education,
  experience,
  internship,
  projectWork,
  type Entry,
} from "@/components/Experience";
import styles from "./growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Growth Product Manager",
  description: "Growth Product Manager 김유정(Jennifer Kim)의 포트폴리오.",
};

const EMAIL = "950426kim@naver.com";
const PHONE = "010-5508-9646";

type Pic = { src: string; width: number; height: number; alt: string };

// 프로젝트 소개: 라벨, 한 줄 제목, 핵심 포인트, 대표 화면 (각 케이스 스터디 내용 기준)
const features: Record<string, { badge: string; title: string[]; points: string[]; pics: Pic[]; tint: boolean }> = {
  "pims-partners": {
    badge: "활성화 · 전환",
    title: ["등록에서 멈추던 파트너를", "광고까지 이어지게"],
    points: [
      "처음 3회만 뜨는 기능 가이드로 핵심 기능을 먼저 익히게 설계",
      "상품 등록 직후 광고 효과를 보여주고 광고 등록으로 바로 연결",
      "AI·바이브코딩으로 기획부터 프론트까지 3주 → 1주",
    ],
    pics: [
      {
        src: "/work/pims/screen-register-complete.png",
        width: 2453,
        height: 1415,
        alt: "PiMS Partners 상품 등록 완료 모달. 등록한 상품과 광고 효과 세 가지, 광고 등록하기 버튼이 있다.",
      },
    ],
    tint: true,
  },
  housedeal: {
    badge: "0→1 · 리텐션",
    title: ["거래 전에도 다시 찾아오게 만든", "부동산 거래 플랫폼"],
    points: [
      "시장·경쟁사·페인 포인트 분석으로 ‘거래 안정성 리포트·예상 시세’라는 차별점 정의",
      "실거래가 알림과 지역 평당가 비교로 다시 들어올 이유를 설계",
      "5개 영역의 화면을 화면 ID와 버튼별 동작이 담긴 설계서로 정리",
    ],
    pics: [
      { src: "/work/housedeal/map.png", width: 1179, height: 2556, alt: "하우스딜 지도 기반 매물 조회 화면." },
      {
        src: "/work/housedeal/listing-detail.png",
        width: 1179,
        height: 2580,
        alt: "하우스딜 매물 상세 화면. 실거래가 알림 받기 버튼과 지역 평당가 비교 차트가 있다.",
      },
    ],
    tint: false,
  },
  "entrance-ux": {
    badge: "데이터 기반 개선",
    title: ["이미 있던 정보를 찾게 했더니", "미배송 54.2% 감소"],
    points: [
      "SQL로 미배송 원인의 43%가 출입 정보라는 걸 특정",
      "4개 경로로 모인 비밀번호를 우선순위대로 골라 바로 보이게 설계",
      "배포 후 지표 변동이 없는 걸 직접 확인하고, 원인인 주소 데이터 매핑 오류까지 찾아 수정 요청",
    ],
    pics: [
      { src: "/work/entrance-ux/before.png", width: 820, height: 828, alt: "개선 전 배송 카드. 출입 정보가 '정보 없음'으로 표시된다." },
      { src: "/work/entrance-ux/after.png", width: 346, height: 515, alt: "개선 후 배송 카드. 비밀번호 미등록 안내와 다른 방법 찾기 버튼이 있다." },
    ],
    tint: true,
  },
};

const projects = growthProjects.filter((p) => features[p.slug]);

const numbers = [
  { value: "54.2%↓", label: "출입 문제 미배송", note: "딜리버스 · 7월 대비 9월 실측" },
  { value: "3주 → 1주", label: "기획부터 프론트까지", note: "애딥 · 프로젝트 일정 기준" },
  { value: "0 → 1", label: "새 서비스 2개 기획", note: "PiMS Partners · 하우스딜" },
];

const caps = [
  {
    key: "데이터로 문제 정의",
    title: "SQL로 직접 뽑아 원인부터 찾습니다",
    text: "미배송 사유를 직접 집계해 원인의 43%를 찾았고, 물량 변화를 빼려고 1만 건당 지표로 성과를 확인했어요.",
  },
  {
    key: "활성화",
    title: "처음 온 사용자가 핵심 기능을 먼저 익히게 합니다",
    text: "PiMS Partners에서 주요 페이지에 처음 3회까지만 기능 가이드를 띄우고, 익숙한 파트너에게는 숨겼어요.",
  },
  {
    key: "전환",
    title: "행동한 순간에 다음 행동의 이유를 보여줍니다",
    text: "상품 등록이 끝나면 광고 효과를 보여주고 광고 등록으로 연결했어요. ‘나중에 하기’로 피로도도 조절했어요.",
  },
  {
    key: "리텐션",
    title: "다시 찾아올 이유를 서비스 안에 만듭니다",
    text: "하우스딜에서 새 실거래가 알림과 지역 평당가 비교로 거래 전에도 다시 들어올 이유를 만들었어요.",
  },
  {
    key: "측정 설계",
    title: "무엇으로 확인할지 기획 단계에서 정합니다",
    text: "결과 지표만으로는 무엇이 효과를 냈는지 알 수 없다는 회고로, 행동 지표와 측정 이벤트를 먼저 정의해요.",
  },
  {
    key: "AI 활용",
    title: "AI로 리서치부터 화면까지 직접 처리합니다",
    text: "AI로 IA·정책 초안을 정리하고 바이브코딩으로 화면을 먼저 만들어 3주를 1주로 줄였어요. 이 포트폴리오도 직접 만들었어요.",
  },
];

const faqs = [
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

export default function GrowthHome() {
  return (
    <div className={styles.root}>
      <header className={styles.gnb}>
        <Link href="/growth" className={styles.logo}>
          Jennifer Kim<span>.</span>
        </Link>
        <nav className={styles.menu}>
          <a href="#work">프로젝트</a>
          <a href="#numbers">성과</a>
          <a href="#caps">역량</a>
          <a href="#experience">경력</a>
          <a href="#faq">자주 묻는 질문</a>
        </nav>
        <div className={styles.gnbRight}>
          <a href={`mailto:${EMAIL}`} className={`${styles.btn} ${styles.btnSmall}`}>
            메일 보내기
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          데이터로 문제를 찾고
          <br />
          <em>숫자로 증명하는</em> 그로스 PM
        </h1>
        <p className={styles.heroSub}>
          바로 투입되어 짧은 시간 안에 임팩트를 남기는 PM, 김유정입니다.
          <br />
          기능을 내놓는 데서 끝내지 않고, 숫자로 확인되는 변화까지 책임집니다.
        </p>
        <div className={styles.heroActions}>
          <a href="#work" className={styles.btn}>
            프로젝트 보기
          </a>
          <a href={`mailto:${EMAIL}`} className={`${styles.btn} ${styles.btnSoft}`}>
            메일 보내기
          </a>
        </div>
        <figure className={styles.heroShot}>
          <Image
            src="/work/pims/screen-groupbuy.png"
            width={2800}
            height={1773}
            alt="PiMS Partners 공동구매 상품 조회 화면. 총 상품, 총 판매건수, 참여 셀러 수, 총 매출 카드와 상품 목록이 있다."
            priority
            sizes="(max-width: 1000px) 100vw, 960px"
          />
        </figure>
      </section>

      <section id="work" className={styles.section}>
        {projects.map((p, i) => {
          const f = features[p.slug];
          return (
            <article key={p.slug} className={`${styles.feature} ${i % 2 === 1 ? styles.featureReverse : ""}`}>
              <div className={styles.featureText}>
                <span className={styles.badge}>{f.badge}</span>
                <span className={styles.category}>{p.category} · {p.year}</span>
                <h2 className={styles.h2}>
                  {f.title[0]}
                  <br />
                  {f.title[1]}
                </h2>
                <p className={styles.desc}>{p.summary}</p>
                <ul className={styles.points}>
                  {f.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className={styles.featureActions}>
                  <Link href={`/growth/work/${p.slug}`} className={styles.btn}>
                    케이스 스터디 보기
                  </Link>
                </div>
              </div>
              <div className={`${styles.shot} ${f.tint ? styles.shotBlue : ""}`}>
                {f.pics.map((pic) => (
                  <Image key={pic.src} src={pic.src} width={pic.width} height={pic.height} alt={pic.alt} sizes="(max-width: 900px) 90vw, 560px" />
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section id="numbers" className={`${styles.section} ${styles.center}`} style={{ paddingTop: 0 }}>
        <span className={styles.badge}>성과</span>
        <h2 className={styles.h2}>숫자로 확인한 변화</h2>
        <div className={styles.numbers}>
          {numbers.map((n) => (
            <div key={n.label} className={styles.number}>
              <p className={styles.numberValue}>{n.value}</p>
              <p className={styles.numberLabel}>{n.label}</p>
              <p className={styles.numberNote}>{n.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="caps" className={`${styles.section} ${styles.grey} ${styles.center}`}>
        <span className={styles.badge}>역량</span>
        <h2 className={styles.h2}>
          데려오고, 머물게 하고,
          <br />
          다시 오게 하는 기획
        </h2>
        <div className={styles.cards}>
          {caps.map((c) => (
            <article key={c.key} className={styles.card}>
              <p className={styles.cardKey}>{c.key}</p>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardText}>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.center}`}>
        <span className={styles.badge}>일하는 방식</span>
        <h2 className={styles.h2}>문제부터 숫자까지 직접 확인합니다</h2>
        <ol className={styles.steps}>
          <li>
            <p className={styles.stepNo}>STEP 1</p>
            <h3>문제를 정의합니다</h3>
            <p>사용자가 어디서 막히는지 인터뷰로 듣고, SQL로 데이터를 직접 뽑아 원인을 숫자로 확인합니다.</p>
          </li>
          <li>
            <p className={styles.stepNo}>STEP 2</p>
            <h3>정책과 화면으로 풉니다</h3>
            <p>예외까지 정책으로 정하고, Figma와 바이브코딩으로 동작하는 화면을 먼저 만들어 같은 기준으로 협업합니다.</p>
          </li>
          <li>
            <p className={styles.stepNo}>STEP 3</p>
            <h3>숫자로 확인합니다</h3>
            <p>무엇으로 성과를 확인할지 기획 단계에서 정하고, 배포 후 지표와 VOC로 결과와 원인을 확인합니다.</p>
          </li>
        </ol>
        <div className={styles.tools}>
          {["Figma", "Notion", "SQL", "VS Code", "Claude", "GPT", "바이브코딩", "스토리보드"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      <section id="experience" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.center}>
          <span className={styles.badge}>경력</span>
          <h2 className={styles.h2}>지나온 일</h2>
        </div>
        <CareerGroup title="Experience" entries={experience} />
        <CareerGroup title="Projects / Internship" entries={[...projectWork, ...internship]} />
        <CareerGroup title="Education" entries={education} />
        <CareerGroup title="Certification" entries={certifications} />
      </section>

      <section id="faq" className={`${styles.section} ${styles.grey} ${styles.center}`}>
        <span className={styles.badge}>자주 묻는 질문</span>
        <h2 className={styles.h2}>이런 점이 궁금하실 수 있어요</h2>
        <div className={styles.faq}>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                <span>
                  <span className={styles.q}>Q.</span>
                  {f.q}
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.h2}>
          다음 성장 지표를
          <br />
          함께 만들고 싶습니다
        </h2>
        <p className={styles.desc}>메일이나 전화로 편하게 연락 주세요.</p>
        <div className={styles.heroActions}>
          <a href={`mailto:${EMAIL}`} className={styles.btn}>
            메일 보내기
          </a>
          <a href={`tel:${PHONE}`} className={`${styles.btn} ${styles.btnSoft}`} style={{ background: "#fff" }}>
            전화하기
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerName}>김유정 (Jennifer Kim) · Growth Product Manager</p>
        <div className={styles.footerRow}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={`tel:${PHONE}`}>{PHONE}</a>
        </div>
        <p style={{ marginTop: 16 }}>© 2026 김유정. All rights reserved.</p>
      </footer>
    </div>
  );
}
