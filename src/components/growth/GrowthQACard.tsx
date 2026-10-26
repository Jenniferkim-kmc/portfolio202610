import Link from "next/link";
import type { QA } from "@/data/growthContent";
import styles from "@/app/growth/growth.module.css";

// 역량 섹션: 면접관이 물어볼 질문 하나와 한 줄 답, 근거
export default function GrowthQACard({
  item,
  index,
  basePath = "/growth",
}: {
  item: QA;
  index: number;
  basePath?: string;
}) {
  return (
    <article className={`${styles.qa} ${item.kind === "plan" ? styles.qaPlan : ""}`}>
      <p className={styles.qaNeed}>{item.need}</p>
      <h3 className={styles.qaQ}>
        <span aria-hidden="true">Q{index + 1}.</span> {item.q}
      </h3>
      <p className={styles.qaA}>{item.a}</p>
      <ul className={styles.qaPoints}>
        {item.points.map((p) => {
          // 포부 카드는 "바로 할 수 있는 일: ..." 앞부분을 굵게
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
