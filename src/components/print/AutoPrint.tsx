"use client";

import { useEffect } from "react";

// ?auto=1 로 열리면(인쇄 버튼이 숨은 iframe으로 불러올 때) 이미지를 모두 불러온 뒤 인쇄 창을 띄우고,
// 인쇄 창이 닫히면 부모 창에 알려 iframe을 정리하게 함
export default function AutoPrint() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("auto") !== "1") return;
    let cancelled = false;
    (async () => {
      const images = [...document.querySelectorAll<HTMLImageElement>("img")];
      images.forEach((img) => {
        img.loading = "eager";
      });
      await Promise.all([
        document.fonts.ready,
        ...images.map((img) =>
          img.complete && img.naturalWidth > 0 ? Promise.resolve() : img.decode().catch(() => undefined),
        ),
      ]);
      if (cancelled) return;
      window.print();
      window.parent.postMessage("print-done", window.location.origin);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
