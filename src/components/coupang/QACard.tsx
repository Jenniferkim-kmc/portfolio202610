import Link from "next/link";
import type { QA } from "@/data/coupangContent";
import styles from "./coupang.module.css";

// 역량 섹션: 면접관이 물어볼 질문 하나와 한 줄 답, 근거
export default function QACard({ item, index, basePath = "/coupang" }: { item: QA; index: number; basePath?: string }) {
  const tone = item.kind === "gap" ? styles.qaGap : item.kind === "plan" ? styles.qaPlan : "";
  return (
    <article className={`${styles.qa} ${tone}`}>
      <p className={styles.qaNeed}>{item.need}</p>
      <h3 className={styles.qaQ}>
        <span aria-hidden="true">Q{index + 1}.</span> {item.q}
      </h3>
      <p className={styles.qaA}>{item.a}</p>
      <ul className={styles.qaPoints}>
        {item.points.map((p) => {
          // 계획 카드는 "30일: ..." 앞부분을 굵게
          const [head, ...rest] = p.split(": ");
          return (
            <li key={p}>
              {item.kind === "plan" && rest.length > 0 ? (
                <>
                  <strong>{head}</strong>
                  <br />
                  {rest.join(": ")}
                </>
              ) : (
                p
              )}
            </li>
          );
        })}
      </ul>
      {item.link && (
        <Link href={`${basePath}/work/${item.link.slug}`} className={`${styles.textLink} ${styles.qaLink}`}>
          {item.link.label} →
        </Link>
      )}
    </article>
  );
}
