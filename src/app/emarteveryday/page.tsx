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
  POSTING,
  emartEverydayProjects,
  getEmartEverydayFeature,
  steps,
  tools,
} from "@/data/emarteverydayContent";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 이마트에브리데이 서비스기획 지원 포트폴리오",
  description:
    "이마트에브리데이 서비스기획 경력사원 지원을 위해 만든 김유정의 개인 포트폴리오. 이마트에브리데이 공식 사이트가 아닙니다.",
};

// 공동현관 UX 결과 표(src/data/projects.ts)의 1만 건당 출입 불가 미배송
const proof = [
  { month: "7월", value: 9.91, note: "배포 전" },
  { month: "8월", value: 8.74, note: "" },
  { month: "9월", value: 4.54, note: "" },
];

// 이마트에브리데이 지원 포트폴리오: /coupang과 같은 디자인
export default function EmartEverydayHome() {
  return (
    <div className={styles.root}>
      <Header home base={BASE} />

      <main id="main">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>{POSTING.title} 지원 포트폴리오</p>
            <h1 className={styles.heroTitle}>
              운영자가 매일 쓰는 화면과
              <br />
              <em>이벤트·프로모션을</em> 기획하고
              <br />
              숫자로 확인합니다
            </h1>
            <p className={styles.heroSub}>
              커머스 파트너 어드민과 라스트마일 운영 백오피스를 기획하고, 마케팅팀에서는 매장·자사몰·제휴몰
              프로모션을 리딩해 온 서비스기획자 김유정입니다.
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
            title="운영 화면, 프로모션, 서비스 개선"
            lead="공고의 직무 내용과 우대사항에 가까운 순서로 배치했습니다. 카드마다 성과를 어디까지 말할 수 있는지 근거를 표시했습니다."
          />
          <div className={styles.projects}>
            {emartEverydayProjects.map((project, i) => {
              const feature = getEmartEverydayFeature(project.slug);
              return feature ? (
                <ProjectCard key={project.slug} index={i} project={project} feature={feature} basePath={BASE} />
              ) : null;
            })}
          </div>
        </section>

        <AiSection variant="root" />

        <section id="how" className={`${styles.section} ${styles.surface}`}>
          <SectionHeading label="일하는 방식" title="개선사항에서 숫자까지 직접 확인합니다" />
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
