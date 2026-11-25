"use client";

import { useEffect } from "react";
import styles from "@/app/growth/growth.module.css";

// 스크롤 등장 모션: 첫 화면에 보이는 요소는 바로 슬며시, 나머지는 스크롤해 화면에 들어올 때 하나씩.
// 숨김은 CSS(@media scripting)가 첫 페인트부터 걸고, 여기서는 화면에 들어온 요소에 data-shown만 붙임.
const TARGETS = [
  `.${styles.hero} > *`,
  `.${styles.section} > .${styles.badge}`,
  `.${styles.section} > .${styles.center}`,
  `.${styles.introQuote}`,
  `.${styles.introFlow} > li`,
  `.${styles.introAboutTitle}`,
  `.${styles.introAboutSub}`,
  `.${styles.introAbout} article`,
  `.${styles.project}`,
  `.${styles.aiRowHead}`,
  `.${styles.aiRow}`,
  `.${styles.aiCore}`,
  `.${styles.toolGrid}`,
  `.${styles.aiOutputs}`,
  `.${styles.aiBoard}`,
  `.${styles.aiMade}`,
].join(",");

export default function GrowthReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`.${styles.root}`);
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // data-motion: 3초 fallback 애니메이션을 끄고 전환 효과를 켬
    root.setAttribute("data-motion", "");

    const io = new IntersectionObserver(
      (entries) => {
        let k = 0;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(k++, 6) * 90}ms`;
          el.setAttribute("data-shown", "");
          // 등장이 끝나면 지연값을 지워 hover 같은 이후 전환이 늦게 반응하지 않게 함
          el.addEventListener("transitionend", () => (el.style.transitionDelay = ""), { once: true });
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    root.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
