"use client";

import styles from "./coupang.module.css";

// 브라우저 인쇄 창을 열어 PDF로 저장할 수 있게 함.
// 지연 로딩 이미지가 비어서 인쇄되지 않도록, 모든 이미지를 먼저 불러온 뒤 인쇄
// className: 다른 페이지(/growth)에서 자기 스타일로 쓸 때 지정
export default function PrintButton({ className = styles.printBtn }: { className?: string }) {
  const print = async () => {
    const images = [...document.querySelectorAll<HTMLImageElement>("main img")];
    images.forEach((img) => {
      img.loading = "eager";
    });
    await Promise.all(
      images.map((img) =>
        img.complete && img.naturalWidth > 0 ? Promise.resolve() : img.decode().catch(() => undefined),
      ),
    );
    window.print();
  };

  return (
    <button type="button" onClick={print} className={className} aria-label="이 화면 인쇄 또는 PDF로 저장">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
      <span>인쇄·PDF</span>
    </button>
  );
}
