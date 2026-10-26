import { EMAIL, PHONE } from "@/data/coupangContent";
import styles from "./coupang.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <strong>김유정 (Jennifer Kim)</strong>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={`tel:${PHONE}`}>{PHONE}</a>
      </div>
      <p className={styles.disclaimer}>© 2026 김유정. All rights reserved.</p>
    </footer>
  );
}
