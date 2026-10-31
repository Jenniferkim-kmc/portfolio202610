import type { Metadata } from "next";
import Image from "next/image";
import GrowthAiSection from "@/components/growth/GrowthAiSection";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import GrowthProjectCard from "@/components/growth/GrowthProjectCard";
import { BASE, CLOSING, POSTING, getIshopcareFeature, steps, tools, ishopcareProjects } from "@/data/ishopcareContent";
import styles from "@/app/growth/growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 아이샵케어 Product Manager 지원 포트폴리오",
  description: "아이샵케어 Product Manager 지원을 위해 만든 김유정의 개인 포트폴리오.",
};

export default function IshopcareHome() {
  return (
    <div className={styles.root}>
      <GrowthHeader home base={BASE} />

      <main id="main">
        <section className={styles.hero}>
          <span className={styles.badge}>{POSTING.title} 지원 포트폴리오</span>
          <h1 className={styles.heroTitle} style={{ marginTop: 20 }}>
            사람이 반복하던 운영을
            <br />
            <em>제품으로 바꾸는</em> PM
          </h1>
          <p className={styles.heroSub}>
            라스트마일 배송 플랫폼의 운영 백오피스와 커머스 파트너 어드민에서
            <br />
            운영 흐름을 쪼개 자동화하고, 결과는 숫자로 확인해 온 김유정입니다.
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
              src="/work/dispatch-automation/admin-dispatch.png"
              width={1830}
              height={690}
              alt="운영 백오피스 배차 공고 목록. 상단에 공고 상태별 건수, 가운데 클러스터·회차·프로모션·예상 총보상이 담긴 공고 목록, 오른쪽에 선택한 공고의 일괄 편집 패널이 있다."
              priority
              sizes="(max-width: 1000px) 100vw, 960px"
            />
          </figure>
        </section>

        <section id="work" className={`${styles.section} ${styles.grey}`}>
          <div className={styles.center}>
            <span className={styles.badge}>대표 프로젝트</span>
            <h2 className={styles.h2}>운영 프로세스를 제품으로 바꾼 경험</h2>
            <p className={styles.desc}>공고의 주요 업무와 가까운 순서로 배치했습니다. 카드마다 성과를 어디까지 말할 수 있는지 표시했습니다.</p>
          </div>
          <div className={styles.projects}>
            {ishopcareProjects.map((project, i) => {
              const feature = getIshopcareFeature(project.slug);
              return feature ? (
                <GrowthProjectCard key={project.slug} index={i} project={project} feature={feature} basePath={BASE} />
              ) : null;
            })}
          </div>
        </section>

        <GrowthAiSection variant="root" />

        <section id="how" className={`${styles.section} ${styles.grey} ${styles.center}`}>
          <span className={styles.badge}>일하는 방식</span>
          <h2 className={styles.h2}>현장의 흐름을 쪼개고, 제품으로 풀고, 숫자로 확인합니다</h2>
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
