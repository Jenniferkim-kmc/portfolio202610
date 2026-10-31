"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PrintButton from "@/components/coupang/PrintButton";
import { EMAIL } from "@/data/growthContent";
import styles from "@/app/growth/growth.module.css";

const links = [
  { href: "#work", label: "프로젝트" },
  { href: "#ai", label: "AI 활용" },
  { href: "#how", label: "일하는 방식" },
];

// 상세 페이지에서는 앵커 앞에 base(예: /growth, /viver)를 붙여 메인으로 이동
export default function GrowthHeader({ home = false, base = "/growth" }: { home?: boolean; base?: string }) {
  const [open, setOpen] = useState(false);
  const prefix = home ? "" : base;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.gnbWrap}>
      <div className={styles.gnb}>
        <Link href={base} className={styles.logo}>
          Jennifer Kim<span>.</span>
        </Link>
        <nav className={styles.menu} aria-label="주요 메뉴">
          {links.map((link) => (
            <a key={link.href} href={`${prefix}${link.href}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.gnbRight}>
          <PrintButton href={`${base}/print`} className={styles.printBtn} />
          <a href={`mailto:${EMAIL}`} className={`${styles.btn} ${styles.btnSmall} ${styles.gnbMail}`}>
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
