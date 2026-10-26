import styles from "./coupang.module.css";

// 상세 페이지 마지막: 이 프로젝트가 지원 직무와 어떻게 이어지는지 (지원자의 해석)
export default function FitAside({ points }: { points: string[] }) {
  return (
    <aside className={styles.aside} aria-labelledby="fit-title">
      <h2 id="fit-title">지원 직무와의 연결점</h2>
      <ul>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </aside>
  );
}
