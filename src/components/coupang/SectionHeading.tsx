import styles from "./coupang.module.css";

export default function SectionHeading({
  label,
  title,
  lead,
}: {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className={styles.sectionHead}>
      <p className={styles.sectionLabel}>{label}</p>
      <h2 className={styles.h2}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
