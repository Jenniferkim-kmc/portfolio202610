import { EMAIL, PHONE } from "@/data/growthContent";
import styles from "@/app/growth/growth.module.css";

export type FooterProps = {
  title?: [string, string];
  text?: string;
  role?: string;
  // bold: 짙은 남색 마무리 섹션 (/growth, /, /saas, /logistics). 기본값은 기존 연한 파랑.
  variant?: "soft" | "bold";
  // bold 전용 색: dark(기본, 짙은 남색) · light(흰 바탕 히어로와 같은 색 — /saas)
  tone?: "dark" | "light";
};

// /growth 기본 마무리 문장
const GROWTH_TITLE: [string, string] = ["무엇이 움직이면 성공인지부터 정하고,", "그 숫자를 끝까지 움직이겠습니다"];

export default function GrowthFooter(props: FooterProps) {
  if (props.variant === "bold") return <BoldFooter {...props} />;
  const {
    title = ["다음 성장 지표를", "함께 만들고 싶습니다"],
    text = "데이터로 문제를 찾고, 활성화·전환 흐름을 설계하고, 결과는 끝까지 숫자로 확인하겠습니다.",
    role = "Growth Product Manager",
  } = props;
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

// 위 본문과 겹치지 않게 숫자·목록 없이 한 문장 + 연락만 둔다
function BoldFooter(props: FooterProps) {
  const { title = GROWTH_TITLE, role = "Growth Product Manager", tone = "dark" } = props;
  return (
    <section
      className={tone === "light" ? `${styles.closing} ${styles.closingLight}` : styles.closing}
      aria-labelledby="closing-title"
    >
      <div className={styles.closingInner}>
        <div className={styles.closingText}>
          <p className={styles.closingStatus}>
            <i aria-hidden="true" />
            함께 일할 팀을 찾고 있습니다
          </p>
          <h2 id="closing-title" className={styles.closingTitle}>
            <span>{title[0]}</span> <span className={styles.closingAccent}>{title[1]}</span>
          </h2>
          {tone === "dark" && <p className={styles.closingSign}>— 김유정 드림</p>}
        </div>

        <div className={styles.closingActions}>
          <a href={`mailto:${EMAIL}`} className={styles.closingBtn}>
            메일로 연락하기
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href={`tel:${PHONE}`} className={`${styles.closingBtn} ${styles.closingBtnGhost}`}>
            {PHONE}
          </a>
          {tone === "light" && (
            <a href={`mailto:${EMAIL}`} className={styles.closingMail}>
              {EMAIL}
            </a>
          )}
        </div>
      </div>

      <footer className={styles.closingFoot}>
        <p>
          <b>김유정 (Jennifer Kim)</b> · {role}
        </p>
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span aria-hidden> · </span>© 2026 김유정
        </p>
      </footer>
    </section>
  );
}
