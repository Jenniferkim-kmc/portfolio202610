import type { Metadata } from "next";
import Badge from "@/components/coupang/Badge";
import Header from "@/components/coupang/Header";
import Footer from "@/components/coupang/Footer";
import ProjectCard from "@/components/coupang/ProjectCard";
import QACard from "@/components/coupang/QACard";
import SectionHeading from "@/components/coupang/SectionHeading";
import styles from "@/components/coupang/coupang.module.css";
import {
  POSTING,
  coupangProjects,
  extras,
  getFeature,
  questions,
  steps,
} from "@/data/coupangContent";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 쿠팡 고객경험 개선 PM 지원 포트폴리오",
  description:
    "쿠팡 고객경험 개선 PM (주니어) 지원을 위해 만든 김유정의 개인 포트폴리오. 쿠팡 공식 사이트가 아닙니다.",
};

// 공동현관 UX 결과 표(src/data/projects.ts)의 1만 건당 출입 불가 미배송
const proof = [
  { month: "7월", value: 9.91, note: "배포 전" },
  { month: "8월", value: 8.74, note: "" },
  { month: "9월", value: 4.54, note: "" },
];

export default function CoupangHome() {
  return (
    <div className={styles.root}>
      <Header home />

      <main id="main">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>{POSTING.title} 지원 포트폴리오</p>
            <h1 className={styles.heroTitle}>
              고객이 받지 못한 주문을
              <br />
              <em>데이터로 쪼개고</em>, 고친 뒤
              <br />
              숫자로 확인합니다
            </h1>
            <p className={styles.heroSub}>
              라스트마일 배송 플랫폼에서 미배송의 원인을 데이터로 특정하고, 라이더 앱·운영 어드민·운영 정책을 바꿔
              배송 1만 건당 지표로 효과를 검증해 온 서비스기획자 김유정입니다.
            </p>
            <div className={styles.heroActions}>
              <a href="#work" className={styles.btn}>
                프로젝트 보기
              </a>
              <a href="#caps" className={`${styles.btn} ${styles.btnLine}`}>
                역량 보기
              </a>
            </div>
          </div>

          <figure className={styles.proof} aria-labelledby="proof-title">
            <div className={styles.proofHead}>
              <div>
                <p id="proof-title" className={styles.proofTitle}>
                  출입 정보 부재로 인한 미배송
                </p>
                <p className={styles.proofSub}>배송 예정 물품 1만 건당 · 딜리버스 공동현관 UX 개선</p>
              </div>
              <Badge tone="measured">실측</Badge>
            </div>
            <p className={styles.proofBig}>−54.2%</p>
            <ul className={styles.proofBars}>
              {proof.map((p, i) => (
                <li key={p.month}>
                  <span>
                    {p.month}
                    {p.note && ` ${p.note}`}
                  </span>
                  <span
                    className={`${styles.bar} ${i === proof.length - 1 ? styles.barStrong : ""}`}
                    style={{ width: `${(p.value / proof[0].value) * 100}%` }}
                    aria-hidden="true"
                  />
                  <span>{p.value.toFixed(2)}건</span>
                </li>
              ))}
            </ul>
            <figcaption className={styles.proofNote}>
              같은 기간 배송 예정 물품은 595,456건 → 706,679건으로 늘었지만, 출입 불가 미배송은 590건 → 321건으로
              줄었습니다. 여러 개선을 한 번에 배포해 요인별 효과는 분리하지 못했습니다.
            </figcaption>
          </figure>
        </section>

        <section id="how" className={`${styles.section} ${styles.surface}`}>
          <SectionHeading label="일하는 방식" title="현상에서 숫자까지 직접 확인합니다" />
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.tools} aria-label="사용 도구">
            {["SQL", "Figma", "Notion", "기능명세서", "운영 정책서", "바이브코딩 프로토타입", "VS Code", "Claude", "GPT"].map(
              (t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ),
            )}
          </div>
        </section>

        <section id="work" className={styles.section}>
          <SectionHeading
            label="대표 프로젝트"
            title="문제를 쪼갠 과정과 확인한 결과"
            lead="지원 직무와 직접 연결되는 순서로 배치했습니다. 카드마다 성과를 어디까지 말할 수 있는지 근거를 표시했습니다."
          />
          <div className={styles.projects}>
            {coupangProjects.map((project, i) => {
              const feature = getFeature(project.slug);
              return feature ? (
                <ProjectCard key={project.slug} index={i} project={project} feature={feature} />
              ) : null;
            })}
          </div>
        </section>

        <section id="caps" className={`${styles.section} ${styles.surface}`}>
          <SectionHeading
            label="역량"
            title="면접관이 물어볼 질문에 미리 답합니다"
            lead="이 포트폴리오를 면접관 입장에서 읽고 더 확인하고 싶을 질문을 뽑았습니다."
          />
          <div className={styles.qaGrid}>
            {questions.map((item, i) => (
              <QACard key={item.q} item={item} index={i} />
            ))}
          </div>
          <p className={styles.source}>
            {extras}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
