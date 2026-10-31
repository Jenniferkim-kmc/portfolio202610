import type { Metadata } from "next";
import AiSection from "@/components/coupang/AiSection";
import Badge from "@/components/coupang/Badge";
import Footer from "@/components/coupang/Footer";
import Header from "@/components/coupang/Header";
import ProjectCard from "@/components/coupang/ProjectCard";
import SectionHeading from "@/components/coupang/SectionHeading";
import styles from "@/components/coupang/coupang.module.css";
import {
  BASE,
  CLOSING,
  getLogisticsFeature,
  logisticsProjects,
  steps,
  tools,
} from "@/data/logisticsContent";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Logistics Product Manager",
  description: "물류 서비스 기획자 김유정(Jennifer Kim)의 포트폴리오.",
};

// 공동현관 UX 결과 표(src/data/projects.ts)의 1만 건당 출입 불가 미배송
const proof = [
  { month: "7월", value: 9.91, note: "배포 전" },
  { month: "8월", value: 8.74, note: "" },
  { month: "9월", value: 4.54, note: "" },
];

// 물류 포트폴리오: /coupang과 같은 디자인, 공고와 무관한 일반 물류 서비스기획 버전
export default function LogisticsHome() {
  return (
    <div className={styles.root}>
      <Header home base={BASE} />

      <main id="main">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Logistics Product Manager 포트폴리오</p>
            <h1 className={styles.heroTitle}>
              물류 현장의 문제를
              <br />
              <em>데이터로 쪼개고</em>, 고친 뒤
              <br />
              숫자로 확인합니다
            </h1>
            <p className={styles.heroSub}>
              라스트마일 배송 플랫폼에서 미배송의 원인을 데이터로 특정하고, 라이더 앱·운영 어드민·관제 서비스와 운영
              정책을 바꿔 배송 1만 건당 지표로 효과를 검증해 온 서비스기획자 김유정입니다.
            </p>
            <div className={styles.heroActions}>
              <a href="#work" className={styles.btn}>
                프로젝트 보기
              </a>
              <a href="#ai" className={`${styles.btn} ${styles.btnLine}`}>
                AI 활용 보기
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

        <section id="work" className={`${styles.section} ${styles.surface}`}>
          <SectionHeading
            label="대표 프로젝트"
            title="문제를 쪼갠 과정과 확인한 결과"
            lead="카드마다 성과를 어디까지 말할 수 있는지 근거를 표시했습니다."
          />
          <div className={styles.projects}>
            {logisticsProjects.map((project, i) => {
              const feature = getLogisticsFeature(project.slug);
              return feature ? (
                <ProjectCard key={project.slug} index={i} project={project} feature={feature} basePath={BASE} />
              ) : null;
            })}
          </div>
        </section>

        <AiSection variant="logistics" />

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
            {tools.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer {...CLOSING} />
    </div>
  );
}
