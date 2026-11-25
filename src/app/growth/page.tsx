import type { Metadata } from "next";
import CountUp from "@/components/growth/CountUp";
import GrowthAiSection from "@/components/growth/GrowthAiSection";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import GrowthHeroScene from "@/components/growth/GrowthHeroScene";
import GrowthIntroStage from "@/components/growth/GrowthIntroStage";
import GrowthProjectCard from "@/components/growth/GrowthProjectCard";
import GrowthReveal from "@/components/growth/GrowthReveal";
import { getGrowthFeature, growthCards } from "@/data/growthContent";
import styles from "./growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — 커머스 서비스기획 · PM",
  description:
    "셀러의 상품 등록·노출부터 고객의 구매 확장, 주문 이후 배송까지 커머스의 앞단과 뒷단을 함께 기획해 온 서비스기획자 김유정(Jennifer Kim)의 포트폴리오.",
};

// 커머스 포트폴리오 2쪽: 일하는 순서 6단계
const steps = [
  {
    title: "문제 발견",
    head: "사용자가 일하는 순서를 따라갑니다",
    text: "요청을 그대로 받지 않고, 실제 사용 흐름에서 막히는 지점을 찾음",
  },
  {
    title: "데이터로 문제의 크기 확인",
    head: "GA4와 SQL로 직접 확인합니다",
    text: "GA4로 사용자 행동 퍼널을, SQL로 주문·운영 데이터를 나눠 보며 어느 구간에서 문제가 생기는지 확인",
  },
  {
    title: "성과 지표 · 우선순위 정의",
    head: "ICE로 우선순위를 정하고 착수합니다",
    text: "Impact·Confidence·Ease 점수로 지표를 가장 크게 움직일 일부터",
  },
  {
    title: "AS-IS / TO-BE · 플로우 · IA",
    head: "What, Why, How로 합의합니다",
    text: "요구사항의 우선순위를 정해 운영·개발과 함께 합의",
  },
  {
    title: "정책서 · 기능명세서 · 프로토타입",
    head: "모든 기획 업무 프로세스를 자동화합니다",
    text: "AI Agent로 문서 작성 및 공유, 프로토타입, QA를 자동화하여 효율적으로 처리",
  },
  {
    title: "배포 후 지표 확인 · 회고",
    head: "숫자가 움직였는지로 끝냅니다",
    text: "기획 단계에서 정한 지표로 배포 후 결과를 확인하고 회고합니다.",
  },
];

const about = [
  {
    title: "지표 중심의 의사 결정",
    body: (
      <>
        마케팅에서 매출 데이터를 보고 매주 전략을 바꾸던 습관을 서비스기획으로 가져왔습니다. 판매 데이터를 얻을 수 없던
        야놀자 프로젝트에서도 무엇이 움직이면 성공인지(카테고리 인지율)를 먼저 정했고, 254명 A/B 테스트로{" "}
        <strong>55.1%에서 <CountUp from={55.1} to={75.4} decimals={1} />%</strong>로 오른 것을 확인했습니다.{" "}
        <em>기능을 만들었는지가 아니라, 숫자가 움직였는지로 일을 끝냅니다.</em>
      </>
    ),
  },
  {
    title: "빠른 학습과 실행",
    body: (
      <>
        새로운 도메인에도 빠르게 적응해, 바로 실무에 투입될 수 있는 사람으로 일합니다. <strong>마케팅에서 시작해 커머스와 물류 등 여러 도메인</strong>을 거치며 매번 빠르게 적응했고, 직전 회사인 딜리버스에서는{" "}
        <strong>입사 4일 차에 1차 잔여배차 자동화</strong>를 맡아, 건당 10분씩 걸리던 수기 업무를 반자동화해{" "}
        <strong><CountUp from={10} to={3} />분 이내</strong>로 줄였습니다. AI 역시 업무 효율을
        높이기 위해 책과 강의로 스스로 익혔고, <em>제가 감독관, AI가 실무자라는 관점으로 활용합니다.</em>
      </>
    ),
  },
  {
    title: "What·Why·How 커뮤니케이션",
    body: (
      <>
        운영·개발·제휴사처럼 입장이 다른 사람들과 일할 때는 무엇을(What), 왜(Why), 어떻게(How) 바꾸는지부터 정리해
        공유합니다. 같은 문제를 서로 다르게 이해하면 일정도 결과도 함께 흔들리기 때문입니다. 낮배송 프로젝트에서는 연관
        프로젝트를 맡은 기획자와 기준이 달라 프로젝트가 중단되기도 했지만, 무엇을·왜·어떻게 할지{" "}
        <em>기준을 다시 맞추고 회사에 가장 큰 이익이 되는 방향을 택해 일정 안에 배포</em>했습니다.
      </>
    ),
  },
];

export default function GrowthHome() {
  return (
    <div className={styles.root}>
      <GrowthReveal />
      <GrowthHeader home />

      <main id="main">
        <section className={styles.hero}>
          <span className={styles.badge}>커머스 서비스기획 · PM 포트폴리오</span>
          <h1 className={styles.heroTitle}>
            상품 등록부터 배송까지,
            <br />
            커머스 흐름 전체를
            <br />
            <em>숫자로 증명하는 기획자</em>
          </h1>
          <p className={styles.heroSub}>
            셀러 상품관리 어드민 0→1부터 낮배송 배포까지 커머스의 앞단과 뒷단을 기획했고,
            <br />
            254명 A/B 테스트로 카테고리 인지율을 55.1%에서 <CountUp from={55.1} to={75.4} decimals={1} />%로 올린 서비스기획자 김유정입니다.
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className={styles.btn}>
              프로젝트 보기
            </a>
            <a href="#how" className={`${styles.btn} ${styles.btnSoft}`}>
              자기소개 보기
            </a>
          </div>
          <GrowthHeroScene />
        </section>

        <GrowthIntroStage />

        <section id="how" className={`${styles.section} ${styles.grey}`}>
          <span className={styles.badge}>자기소개</span>
          <div className={styles.intro2}>
            <div className={styles.introFlowCol}>
              <h2 className={styles.introQuote}>
                “<em>지표</em>를 먼저 정하고, <em>데이터</em>로 확인하며
                <br />
                프로덕트를 기획합니다.”
              </h2>
              <ol className={styles.introFlow}>
                {steps.map((s, i) => (
                  <li key={s.title}>
                    <p className={styles.introFlowBox}>{s.title}</p>
                    {i < steps.length - 1 && (
                      <div className={styles.introFlowNote}>
                        <p className={styles.introFlowHead}>{s.head}</p>
                        <p>· {s.text}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.introAbout}>
              <p className={styles.introAboutTitle}>ABOUT ME</p>
              <p className={styles.introAboutSub}>지표 중심의 의사 결정, 빠른 학습과 실행, What·Why·How 커뮤니케이션</p>
              {about.map((a) => (
                <article key={a.title}>
                  <h3>
                    <span className={styles.introCheck} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 12.5 4 4 8-9" />
                      </svg>
                    </span>
                    {a.title}
                  </h3>
                  <p>{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className={styles.section}>
          <div className={styles.center}>
            <span className={styles.badge}>대표 프로젝트</span>
            <h2 className={styles.h2}>현장도, 문제도, 증명 방식도 달랐던 세 프로젝트</h2>
            <p className={styles.desc}>프로젝트마다 대표 성과만 모았습니다. 문제와 과정은 각 프로젝트 페이지에 있습니다.</p>
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

        <GrowthAiSection variant="growth" grey />
      </main>

      <GrowthFooter />
    </div>
  );
}
