import styles from "@/app/growth/growth.module.css";

// 상세 페이지 마지막: 그로스 관점에서 본 이 프로젝트 (지원자의 해석)
export default function GrowthFitAside({
  points,
  title = "그로스 관점에서 본 이 프로젝트",
}: {
  points: string[];
  title?: string;
}) {
  return (
    <aside className={styles.aside} aria-labelledby="fit-title">
      <h2 id="fit-title">{title}</h2>
      <ul>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </aside>
  );
}
