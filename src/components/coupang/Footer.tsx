import { EMAIL, PHONE } from "@/data/coupangContent";
import styles from "./coupang.module.css";

// 푸터 위 마무리 띠. 다른 페이지(/logistics)는 문구를 넘겨서 사용
export default function Footer({
  title = ["고객이 불편을 말하기 전에 먼저 찾아 고치는 일,", "쿠팡에서 함께 하고 싶습니다."],
  text = "데이터로 원인을 쪼개고, 유관 부서와 같은 기준을 맞추고, 결과는 끝까지 숫자로 확인하겠습니다.",
}: {
  title?: [string, string];
  text?: string;
}) {
  return (
    <>
      <section className={styles.closing}>
        <p className={styles.closingTitle}>
          {title[0]}
          <br />
          {title[1]}
        </p>
        <p className={styles.closingText}>
          {text}
        </p>
        <a href={`mailto:${EMAIL}`} className={styles.btn}>
          메일로 이야기 나누기
        </a>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <strong>김유정 (Jennifer Kim)</strong>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={`tel:${PHONE}`}>{PHONE}</a>
        </div>
        <p className={styles.disclaimer}>© 2026 김유정. All rights reserved.</p>
      </footer>
    </>
  );
}
