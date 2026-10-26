import { EMAIL, PHONE } from "@/data/growthContent";
import styles from "@/app/growth/growth.module.css";

// 푸터 위 마무리 문장(연한 파란 띠)과 연락처. 기업별 페이지는 문구를 넘겨서 사용
export default function GrowthFooter({
  title = ["다음 성장 지표를", "함께 만들고 싶습니다"],
  text = "데이터로 문제를 찾고, 활성화·전환 흐름을 설계하고, 결과는 끝까지 숫자로 확인하겠습니다.",
  role = "Growth Product Manager",
}: {
  title?: [string, string];
  text?: string;
  role?: string;
}) {
  return (
    <>
      <section className={styles.cta}>
        <h2 className={styles.h2}>
          {title[0]}
          <br />
          {title[1]}
        </h2>
        <p className={styles.desc}>{text}</p>
        <div className={styles.heroActions}>
          <a href={`mailto:${EMAIL}`} className={styles.btn}>
            메일로 이야기 나누기
          </a>
          <a href={`tel:${PHONE}`} className={`${styles.btn} ${styles.btnSoft}`} style={{ background: "#fff" }}>
            전화하기
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerName}>김유정 (Jennifer Kim) · {role}</p>
        <div className={styles.footerRow}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={`tel:${PHONE}`}>{PHONE}</a>
        </div>
        <p style={{ marginTop: 16 }}>© 2026 김유정. All rights reserved.</p>
      </footer>
    </>
  );
}
