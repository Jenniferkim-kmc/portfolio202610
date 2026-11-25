"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/growth/growth.module.css";

// 히어로 아래 소개: 거쳐 온 도메인 4개
// 화면에 들어오면 도메인이 차례로 올라오며 나타남. reduced-motion·인쇄에서는 처음부터 다 보임.

const DOMAINS = [
  { label: "화장품 마케팅 기획", src: "/work/domains/cosmetics.webp" },
  { label: "프롭테크", src: "/work/domains/proptech.webp" },
  { label: "커머스 어드민", src: "/work/domains/commerce-admin.webp" },
  { label: "물류", src: "/work/domains/logistics.webp" },
];

export default function GrowthIntroStage() {
  const secRef = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={secRef} className={styles.introStage} data-shown={shown || undefined} aria-labelledby="intro-domains-title">
      <div className={styles.introInner}>
        <div className={styles.introDomainsCol}>
          <p className={styles.introCardLabel}>DOMAINS</p>
          <h2 id="intro-domains-title" className={styles.introDomainsTitle}>
            거쳐 온 도메인
          </h2>
          <ul className={styles.introDomains}>
            {DOMAINS.map((d, i) => (
              <li key={d.label} style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
                <span className={styles.heroDomainIcon}>
                  <Image src={d.src} width={400} height={400} alt="" sizes="128px" />
                </span>
                {d.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
