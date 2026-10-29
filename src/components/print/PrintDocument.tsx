import AutoPrint from "./AutoPrint";
import styles from "./print.module.css";

// 메인 페이지와 상세 페이지를 한 문서로 이어 붙여 PDF 한 개로 인쇄하기 위한 틀.
// 페이지마다 새 쪽에서 시작하고, 상단 메뉴는 첫 페이지에만, 마무리 띠·푸터는 마지막 페이지에만 남김
export default function PrintDocument({ parts }: { parts: React.ReactNode[] }) {
  return (
    <div className={styles.doc}>
      {parts.map((part, i) => (
        <div key={i} className={styles.part}>
          {part}
        </div>
      ))}
      <AutoPrint />
    </div>
  );
}
