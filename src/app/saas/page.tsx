import type { Metadata } from "next";
import AiSection from "@/components/coupang/AiSection";
import Badge from "@/components/coupang/Badge";
import Footer from "@/components/coupang/Footer";
import Header from "@/components/coupang/Header";
import ProjectCard from "@/components/coupang/ProjectCard";
import SectionHeading from "@/components/coupang/SectionHeading";
import styles from "@/components/coupang/coupang.module.css";
import { BASE, CLOSING, getSaasFeature, saasProjects, steps, tools } from "@/data/saasContent";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — B2B SaaS Product Manager",
  description: "SQL로 병목을 찾고 백오피스를 자동화해 운영 공수를 줄여 온 서비스기획자 김유정(Jennifer Kim)의 포트폴리오.",
};

// 잔여배차 건당 처리 시간 (src/data/projects.ts 결과, 직접 측정)
const proof = [
  { label: "기존 수기", value: 10, note: "" },
  { label: "블루 지역", value: 4, note: "운송사 신청·승인" },
  { label: "화이트 지역", value: 3, note: "자동 생성·확정" },
];

export default function SaasHome() {
  return (
    <div className={styles.root}>
      <Header home base={BASE} />

      <main id="main">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>B2B SaaS Product Manager 포트폴리오</p>
            <h1 className={styles.heroTitle}>
              반복되는 운영을
              <br />
              <em>시스템으로 바꿔</em>
              <br />
              운영 공수를 줄입니다
            </h1>
            <p className={styles.heroSub}>
              커머스 파트너 어드민과 라스트마일 운영 백오피스를 기획하며, SQL로 병목을 찾고 수기 업무를 자동화해 운영
              공수를 줄여 온 서비스기획자 김유정입니다.
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
                  잔여배차 공고 1건 처리 시간
                </p>
                <p className={styles.proofSub}>운영 백오피스 반자동화 · 딜리버스</p>
              </div>
              <Badge tone="measured">실측 · 월 환산</Badge>
            </div>
            <p className={styles.proofBig}>월 266시간↓</p>
            <ul className={styles.proofBars}>
              {proof.map((p, i) => (
                <li key={p.label}>
                  <span>
                    {p.label}
                    {p.note && ` · ${p.note}`}
                  </span>
                  <span
                    className={`${styles.bar} ${i === proof.length - 1 ? styles.barStrong : ""}`}
                    style={{ width: `${(p.value / proof[0].value) * 100}%` }}
                    aria-hidden="true"
                  />
                  <span>{p.value}분</span>
                </li>
              ))}
            </ul>
            <figcaption className={styles.proofNote}>
              9월 물량(화이트 지원 인원 2,458명) 기준, 건당 평균 3.5분으로 잡으면 기존 10분 대비 월 약 266시간의 운영
              공수를 줄인 셈입니다. 하루 운영자 1명분 이상의 업무 시간입니다.
            </figcaption>
          </figure>
        </section>

        <section id="work" className={`${styles.section} ${styles.surface}`}>
          <SectionHeading
            label="대표 프로젝트"
            title="운영 공수를 줄이고 프로세스를 바꾼 경험"
            lead="운영 자동화와 백오피스 기획에 가까운 순서로 배치했습니다. 카드마다 성과를 어디까지 말할 수 있는지 근거를 표시했습니다."
          />
          <div className={styles.projects}>
            {saasProjects.map((project, i) => {
              const feature = getSaasFeature(project.slug);
              return feature ? (
                <ProjectCard key={project.slug} index={i} project={project} feature={feature} basePath={BASE} />
              ) : null;
            })}
          </div>
        </section>

        <AiSection variant="saas" />

        <section id="how" className={`${styles.section} ${styles.surface}`}>
          <SectionHeading label="일하는 방식" title="병목을 찾고, 반복을 시스템으로 옮깁니다" />
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
