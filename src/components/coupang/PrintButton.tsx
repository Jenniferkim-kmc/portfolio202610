"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./coupang.module.css";

// 메인 + 상세 페이지 전체를 이어 붙인 인쇄용 페이지(href, 예: /coupang/print)를 숨은 iframe으로 불러와
// 브라우저 인쇄 창을 띄움. 이미지 로딩과 인쇄 호출은 인쇄용 페이지의 AutoPrint가 맡음
// className: 다른 페이지(/growth)에서 자기 스타일로 쓸 때 지정
export default function PrintButton({ href, className = styles.printBtn }: { href: string; className?: string }) {
  const [loading, setLoading] = useState(false);
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin || e.data !== "print-done") return;
      frameRef.current?.remove();
      frameRef.current = null;
      setLoading(false);
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      frameRef.current?.remove();
    };
  }, []);

  const print = () => {
    if (loading) return;
    setLoading(true);
    const frame = document.createElement("iframe");
    frame.src = `${href}?auto=1`;
    frame.title = "인쇄용 전체 페이지";
    frame.setAttribute("aria-hidden", "true");
    frame.style.cssText = "position:fixed;left:-10000px;top:0;width:1200px;height:900px;border:0;";
    document.body.appendChild(frame);
    frameRef.current = frame;
  };

  return (
    <button
      type="button"
      onClick={print}
      className={className}
      aria-label="메인과 상세 페이지 전체를 인쇄 또는 PDF로 저장"
      aria-busy={loading}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
      <span>{loading ? "준비 중…" : "인쇄·PDF"}</span>
    </button>
  );
}
