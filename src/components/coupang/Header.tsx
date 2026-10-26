"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EMAIL } from "@/data/coupangContent";
import PrintButton from "./PrintButton";
import styles from "./coupang.module.css";

const links = [
  { href: "#how", label: "일하는 방식" },
  { href: "#work", label: "프로젝트" },
  { href: "#caps", label: "역량" },
];

// 상세 페이지에서는 앵커 앞에 /coupang을 붙여 메인으로 이동
export default function Header({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const prefix = home ? "" : "/coupang";

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
        <Link href="/coupang" className={styles.logo}>
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
          <PrintButton />
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
