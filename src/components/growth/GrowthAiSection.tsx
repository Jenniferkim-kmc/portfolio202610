import ZoomableImage from "@/components/ZoomableImage";
import GrowthAiTabs from "@/components/growth/GrowthAiTabs";
import {
  AI_DIAGRAM,
  AI_POINTS,
  AI_VARIANTS,
  type AiVariant,
} from "@/data/aiCapabilities";
import styles from "@/app/growth/growth.module.css";

// AI 활용 역량 (/growth 디자인)
// growth: 왼쪽 미니 메뉴(사용하는 툴 · 개인 프롬프트 · 업무 자동화) + 스크롤 패널
// 그 외: 카드 하나와 5단계 다이어그램
export default function GrowthAiSection({ variant, grey = false }: { variant: AiVariant; grey?: boolean }) {
  const v = AI_VARIANTS[variant];
  return (
    <section id="ai" className={`${styles.section} ${grey ? styles.grey : ""}`}>
      <div className={styles.center}>
        <span className={styles.badge}>{variant === "growth" ? "AI 활용 · 도구" : "AI 활용 역량"}</span>
        <h2 className={styles.h2}>{v.title}</h2>
        <p className={styles.desc}>{v.lead}</p>
      </div>
      {variant === "growth" ? (
        <GrowthAiTabs />
      ) : (
        <>
          <article className={`${styles.aiCard} ${styles.aiSingle}`}>
            <div className={styles.aiCardHead}>
              <h3>AI로 기획하는 방식</h3>
              <span className={`${styles.evidence} ${styles.measured}`}>직접 활용</span>
            </div>
            <ul className={styles.contribs}>
              {AI_POINTS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {v.emphasis && <p className={styles.aiEmphasis}>{v.emphasis}</p>}
          </article>
          <figure className={styles.aiDiagram}>
            <ZoomableImage
              src={AI_DIAGRAM.src}
              width={AI_DIAGRAM.width}
              height={AI_DIAGRAM.height}
              alt={AI_DIAGRAM.alt}
              sizes="(max-width: 900px) 100vw, 1080px"
              buttonClassName="block w-full"
            />
            <figcaption>AI 기획 워크플로우 5단계 · 누르면 크게 보기</figcaption>
          </figure>
        </>
      )}
    </section>
  );
}
