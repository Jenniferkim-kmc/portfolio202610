import type { Metadata } from "next";
import Image from "next/image";
import GrowthAiSection from "@/components/growth/GrowthAiSection";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import GrowthProjectCard from "@/components/growth/GrowthProjectCard";
import { BASE, CLOSING, POSTING, getPolarisFeature, polarisProjects, steps, tools } from "@/data/polarisContent";
import styles from "@/app/growth/growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 폴라리스오피스 AI 제품 기획 지원 포트폴리오",
  description: "폴라리스오피스 서비스·제품 기획 (AI 제품) 지원을 위해 만든 김유정의 개인 포트폴리오.",
};

export default function PolarisHome() {
  return (
    <div className={styles.root}>
      <GrowthHeader home base={BASE} />

      <main id="main">
        <section className={styles.hero}>
          <span className={styles.badge}>{POSTING.title} 지원 포트폴리오</span>
          <h1 className={styles.heroTitle} style={{ marginTop: 20 }}>
            업무 흐름을 나누고
            <br />
            <em>AI로 먼저 만들어 보는</em> 서비스기획자
          </h1>
          <p className={styles.heroSub}>
            AI로 동작하는 화면을 먼저 만들어 기획부터 프론트까지 3주를 1주로 줄였고,
            <br />
            운영 업무를 단계별로 나눠 자동화해 건당 10분을 3~4분으로 줄였습니다.
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className={styles.btn}>
              프로젝트 보기
            </a>
            <a href="#ai" className={`${styles.btn} ${styles.btnSoft}`}>
              AI 활용 보기
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

        <section id="work" className={`${styles.section} ${styles.grey}`}>
          <div className={styles.center}>
            <span className={styles.badge}>대표 프로젝트</span>
            <h2 className={styles.h2}>AI로 빠르게 만들고, 업무를 자동화한 경험</h2>
            <p className={styles.desc}>공고의 자격요건·우대사항과 가까운 순서로 배치했습니다. 카드마다 성과를 어디까지 말할 수 있는지 표시했습니다.</p>
          </div>
          <div className={styles.projects}>
            {polarisProjects.map((project, i) => {
              const feature = getPolarisFeature(project.slug);
              return feature ? (
                <GrowthProjectCard key={project.slug} index={i} project={project} feature={feature} basePath={BASE} />
              ) : null;
            })}
          </div>
        </section>

        <GrowthAiSection variant="root" />

        <section id="how" className={`${styles.section} ${styles.grey} ${styles.center}`}>
          <span className={styles.badge}>일하는 방식</span>
          <h2 className={styles.h2}>흐름을 나누고, AI로 만들어 보고, 숫자로 확인합니다</h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <p className={styles.stepNo}>STEP {i + 1}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.tools}>
            {tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>
      </main>

      <GrowthFooter {...CLOSING} />
    </div>
  );
}
