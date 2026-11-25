"use client";

import { useEffect, useState } from "react";
import s from "./growthCase.module.css";

type Item = { id: string; label: string };

/** 상세 페이지 왼쪽 미니 메뉴: 지금 읽는 섹션을 표시하고 바로 이동 */
export default function GrowthCaseNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((it) => document.getElementById(it.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let cur = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) cur = el.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return (
    <nav className={s.toc} aria-label="이 프로젝트 목차">
      <p className={s.tocTitle}>목차</p>
      <ol className={s.tocList}>
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`${s.tocLink} ${active === it.id ? s.tocActive : ""}`}
              aria-current={active === it.id ? "location" : undefined}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
