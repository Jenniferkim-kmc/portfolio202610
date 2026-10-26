import styles from "./coupang.module.css";

// 성과 근거 표시: 실측 / 측정 전
export default function Badge({
  tone,
  children,
}: {
  tone: "measured" | "pending";
  children: React.ReactNode;
}) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
