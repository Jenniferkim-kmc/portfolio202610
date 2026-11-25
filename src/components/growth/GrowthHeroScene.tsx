"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "@/app/growth/growth.module.css";

// 히어로 방 일러스트 (Gemini로 만든 이미지 한 장)
// 마우스를 올리면 그 방향으로 살짝 기울어짐.
// reduced-motion이면 움직임은 모두 끔.
export default function GrowthHeroScene() {
  const tiltRef = useRef<HTMLDivElement>(null);

  // 마우스 따라 살짝 기울기
  useEffect(() => {
    const el = tiltRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `perspective(1400px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translate3d(${(x * 6).toFixed(1)}px, ${(y * 6).toFixed(1)}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
      ty = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };
    const host = el.parentElement ?? el;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className={styles.heroScene}>
      <div className={styles.heroCanvas}>
        <span className={styles.heroLeave}>
          <div ref={tiltRef} className={styles.heroRoomImg}>
            <Image
              src="/work/hero-room-white.webp"
              width={900}
              height={800}
              alt="책상에 앉아 모니터 두 대로 일하는 김유정 캐릭터가 있는 방 일러스트"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>
        </span>
      </div>
    </div>
  );
}
