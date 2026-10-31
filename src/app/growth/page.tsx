import type { Metadata } from "next";
import Image from "next/image";
import GrowthAiSection from "@/components/growth/GrowthAiSection";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import GrowthProjectCard from "@/components/growth/GrowthProjectCard";
import GrowthQACard from "@/components/growth/GrowthQACard";
import { getGrowthFeature, growthCards, questions } from "@/data/growthContent";
import styles from "./growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Growth Product Manager",
  description: "Growth Product Manager 김유정(Jennifer Kim)의 포트폴리오.",
};

const steps = [
  {
    title: "문제를 정의합니다",
    text: "사용자가 어디서 막히는지 인터뷰로 듣고, SQL로 데이터를 직접 뽑아 원인을 숫자로 확인합니다.",
  },
  {
    title: "정책과 화면으로 풉니다",
    text: "예외까지 정책으로 정하고, Figma와 바이브코딩으로 동작하는 화면을 먼저 만들어 같은 기준으로 협업합니다.",
  },
  {
    title: "숫자로 확인합니다",
    text: "무엇으로 성과를 확인할지 기획 단계에서 정하고, 배포 후 지표와 VOC로 결과와 원인을 확인합니다.",
  },
];

export default function GrowthHome() {
  return (
    <div className={styles.root}>
      <GrowthHeader home />

      <main id="main">
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
          <h2 className={styles.h2}>문제부터 숫자까지 직접 확인합니다</h2>
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
            {["SQL", "Figma", "Notion", "VS Code", "Claude", "GPT", "바이브코딩", "스토리보드"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>

        <section id="work" className={`${styles.section} ${styles.grey}`}>
          <div className={styles.center}>
            <span className={styles.badge}>대표 프로젝트</span>
            <h2 className={styles.h2}>문제를 쪼갠 과정과 확인한 결과</h2>
            <p className={styles.desc}>카드마다 성과를 어디까지 말할 수 있는지 근거를 표시했습니다.</p>
          </div>
          <div className={styles.projects}>
            {growthCards.map((project, i) => {
              const feature = getGrowthFeature(project.slug);
              return feature ? (
                <GrowthProjectCard key={project.slug} index={i} project={project} feature={feature} />
              ) : null;
            })}
          </div>
        </section>

        <section id="caps" className={styles.section}>
          <div className={styles.center}>
            <span className={styles.badge}>역량</span>
            <h2 className={styles.h2}>면접관이 물어볼 질문에 미리 답합니다</h2>
            <p className={styles.desc}>이 포트폴리오를 면접관 입장에서 읽고 더 확인하고 싶을 질문을 뽑았습니다.</p>
          </div>
          <div className={styles.qaGrid}>
            {questions.map((item, i) => (
              <GrowthQACard key={item.q} item={item} index={i} />
            ))}
          </div>
        </section>
        <GrowthAiSection variant="growth" grey />
      </main>

      <GrowthFooter />
    </div>
  );
}
