"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PrintButton from "@/components/coupang/PrintButton";
import { EMAIL } from "@/data/growthContent";
import styles from "@/app/growth/growth.module.css";

// /growth: 자기소개 → 프로젝트 → AI 활용 순서
const growthLinks = [
  { href: "#how", label: "자기소개" },
  { href: "#work", label: "프로젝트" },
  { href: "#ai", label: "AI 활용" },
];

// 회사별 페이지(/viver 등)는 기존 메뉴 그대로
const companyLinks = [
  { href: "#how", label: "일하는 방식" },
  { href: "#ai", label: "AI 활용" },
  { href: "#work", label: "프로젝트" },
];

// 상세 페이지에서는 앵커 앞에 base(예: /growth, /viver)를 붙여 메인으로 이동
export default function GrowthHeader({ home = false, base = "/growth" }: { home?: boolean; base?: string }) {
  const [open, setOpen] = useState(false);
  // 루트("/")는 "/#how", "/print"처럼 슬래시가 두 번 붙지 않게 처리
  const root = base === "/" ? "" : base;
  const prefix = home ? "" : root || "/";
  // 공용 포트폴리오(/growth, /, /system, /logistics)는 자기소개 메뉴, 회사별 페이지는 기존 메뉴
  const links = ["/growth", "/", "/system", "/logistics"].includes(base) ? growthLinks : companyLinks;

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
          <PrintButton href={`${root}/print`} className={styles.printBtn} />
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
