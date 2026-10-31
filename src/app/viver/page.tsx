import type { Metadata } from "next";
import Image from "next/image";
import GrowthAiSection from "@/components/growth/GrowthAiSection";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import GrowthProjectCard from "@/components/growth/GrowthProjectCard";
import GrowthQACard from "@/components/growth/GrowthQACard";
import { BASE, CLOSING, POSTING, getViverFeature, questions, steps, tools, viverProjects } from "@/data/viverContent";
import styles from "@/app/growth/growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 바이버 서비스기획 지원 포트폴리오",
  description: "바이버 서비스기획 Junior 지원을 위해 만든 김유정의 개인 포트폴리오.",
};

export default function ViverHome() {
  return (
    <div className={styles.root}>
      <GrowthHeader home base={BASE} />

      <main id="main">
        <section className={styles.hero}>
          <span className={styles.badge}>{POSTING.title} 지원 포트폴리오</span>
          <h1 className={styles.heroTitle} style={{ marginTop: 20 }}>
            거래가 믿을 수 있게 흐르도록
            <br />
            <em>흐름과 정책을 설계하는</em> 서비스기획자
          </h1>
          <p className={styles.heroSub}>
            부동산 거래 플랫폼과 커머스 파트너 어드민에서 거래·검증·정산 흐름을 1인 기획했고,
            <br />
            라스트마일 배송에서는 SQL로 원인을 찾아 숫자로 확인했습니다. 김유정입니다.
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className={styles.btn}>
              프로젝트 보기
            </a>
            <a href="#caps" className={`${styles.btn} ${styles.btnSoft}`}>
              역량 보기
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

        <section id="how" className={`${styles.section} ${styles.center}`}>
          <span className={styles.badge}>일하는 방식</span>
          <h2 className={styles.h2}>흐름을 정리하고, 화면으로 맞추고, 지표로 확인합니다</h2>
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

        <section id="work" className={`${styles.section} ${styles.grey}`}>
          <div className={styles.center}>
            <span className={styles.badge}>대표 프로젝트</span>
            <h2 className={styles.h2}>거래 흐름과 정책을 설계한 경험</h2>
            <p className={styles.desc}>공고의 주요 업무와 가까운 순서로 배치했습니다. 카드마다 성과를 어디까지 말할 수 있는지 표시했습니다.</p>
          </div>
          <div className={styles.projects}>
            {viverProjects.map((project, i) => {
              const feature = getViverFeature(project.slug);
              return feature ? (
                <GrowthProjectCard key={project.slug} index={i} project={project} feature={feature} basePath={BASE} />
              ) : null;
            })}
          </div>
        </section>

        <section id="caps" className={styles.section}>
          <div className={styles.center}>
            <span className={styles.badge}>역량</span>
            <h2 className={styles.h2}>면접관이 물어볼 질문에 미리 답합니다</h2>
            <p className={styles.desc}>공고의 자격요건마다 확인하고 싶을 질문을 뽑았습니다.</p>
          </div>
          <div className={styles.qaGrid}>
            {questions.map((item, i) => (
              <GrowthQACard key={item.q} item={item} index={i} basePath={BASE} />
            ))}
          </div>
        </section>
        <GrowthAiSection variant="root" grey />
      </main>

      <GrowthFooter {...CLOSING} />
    </div>
  );
}
