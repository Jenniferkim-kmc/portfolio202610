"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EMAIL } from "@/data/coupangContent";
import PrintButton from "./PrintButton";
import styles from "./coupang.module.css";

const defaultLinks = [
  { href: "#work", label: "프로젝트" },
  { href: "#ai", label: "AI 활용" },
  { href: "#how", label: "일하는 방식" },
];

// 상세 페이지에서는 앵커 앞에 base(예: /coupang, /logistics, 루트는 /)를 붙여 메인으로 이동
// links: 메뉴 항목을 페이지마다 바꿀 때 지정 (기본: 일하는 방식·프로젝트·역량)
export default function Header({
  home = false,
  base = "/coupang",
  links = defaultLinks,
}: {
  home?: boolean;
  base?: string;
  links?: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const prefix = home ? "" : base;
  const printHref = base === "/" ? "/print" : `${base}/print`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skip}>
        본문으로 건너뛰기
      </a>
      <div className={styles.headerInner}>
        <Link href={base} className={styles.logo}>
          Jennifer Kim<small>개인 포트폴리오</small>
        </Link>
        <nav className={styles.menu} aria-label="주요 메뉴">
          {links.map((link) => (
            <a key={link.href} href={`${prefix}${link.href}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.headerRight}>
          <PrintButton href={printHref} />
          <a href={`mailto:${EMAIL}`} className={`${styles.btn} ${styles.btnSmall}`}>
            메일 보내기
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className={styles.mobilePanel}
        data-open={open}
        aria-label="모바일 메뉴"
        hidden={!open}
      >
        {links.map((link) => (
          <a key={link.href} href={`${prefix}${link.href}`} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={`mailto:${EMAIL}`} onClick={() => setOpen(false)}>
          메일 보내기
        </a>
      </nav>
    </header>
  );
}
