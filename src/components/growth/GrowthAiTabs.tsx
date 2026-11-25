"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "@/app/growth/growth.module.css";

// AI 활용 섹션 (/growth)
// 왼쪽 미니 메뉴(사용하는 툴 · 개인 프롬프트 · 업무 자동화)는 화면에 붙어 있고,
// 스크롤해서 패널이 바뀌면 메뉴의 파란 막대가 다음 항목으로 내려감.
// reduced-motion이면 움직임 없이 바로 바뀌고, 인쇄에서는 메뉴를 숨기고 모든 내용을 펼쳐 보여 줌.

const MENU = [
  { id: "ai-tools", label: "사용하는 툴" },
  { id: "ai-prompts", label: "개인 프롬프트" },
  { id: "ai-auto", label: "업무 자동화" },
] as const;

const TOOL_GROUPS = [
  {
    group: "AI",
    items: [
      { name: "Claude", icon: "claude", use: "기획 초안 · 문서 작성" },
      { name: "Claude Code", icon: "claude", use: "프로토타입 · QA 자동화" },
      { name: "GPT", icon: "gpt", use: "리서치 · 교차 검증" },
      { name: "Gemini", icon: "gemini", use: "이미지 생성" },
    ],
  },
  {
    group: "문서 · 협업 (MCP 연동)",
    items: [
      { name: "Notion", icon: "notion", use: "문서 · 협업" },
      { name: "Slack", icon: "slack", use: "팀 커뮤니케이션" },
      { name: "Gmail", icon: "gmail", use: "회의록 발송" },
      { name: "Google Calendar", icon: "calendar", use: "회의 초대" },
      { name: "Google Drive", icon: "drive", use: "자료 관리" },
      { name: "Microsoft", icon: "microsoft", use: "Excel · PPT · Word" },
    ],
  },
  {
    group: "설계 · 개발",
    items: [
      { name: "Figma", icon: "figma", use: "화면 설계" },
      { name: "VS Code", icon: "vscode", use: "AI 코딩 환경" },
      { name: "Vercel", icon: "vercel", use: "프로토타입 배포" },
    ],
  },
  {
    group: "데이터",
    items: [
      { name: "SQL", icon: "sql", use: "데이터 추출 · 분석" },
      { name: "GA4", icon: "ga4", use: "GAIQ · 퍼널 분석" },
    ],
  },
];

// 업무 자동화: 도구 노드를 이어 붙인 흐름도 (마지막 노드는 직접 결정하는 단계)
type FlowNode = { label: string; icon?: string; emoji?: string; me?: boolean };

const AUTOS: { no: string; title: string; flow: FlowNode[] }[] = [
  {
    no: "01",
    title: "문서 작성",
    flow: [
      { icon: "notion", label: "회의 안건 작성" },
      { icon: "slack", label: "슬랙 전달" },
      { icon: "calendar", label: "회의 초대" },
      { icon: "notion", label: "회의록 요약" },
      { icon: "claude", label: "정책서/기획서 작성" },
      { icon: "gpt", label: "두 AI 교차 검증" },
      { me: true, label: "정책 최종 확정" },
    ],
  },
  {
    no: "02",
    title: "프로토타입 생성 및 배포",
    flow: [
      { icon: "claude", label: "기획서로 화면 제작" },
      { icon: "vscode", label: "바이브코딩" },
      { icon: "vercel", label: "Vercel 배포" },
      { emoji: "🔗", label: "링크 공유" },
      { me: true, label: "흐름 · 예외 확인" },
    ],
  },
  {
    no: "03",
    title: "QA 시나리오 작성 및 QA 자동화",
    flow: [
      { icon: "claude", label: "QA 시나리오 작성" },
      { emoji: "▶️", label: "자동 테스트 실행" },
      { emoji: "📋", label: "실패 항목 정리" },
      { emoji: "🗄️", label: "테스트 데이터 부여" },
      { me: true, label: "결과 판정 · 배포 결정" },
    ],
  },
];

export default function GrowthAiTabs() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  // 화면 가운데에 걸친 패널을 현재 메뉴로
  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const el = panelRefs.current[i];
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className={styles.aiSpy} style={{ "--ai-active": active } as CSSProperties}>
      <nav className={styles.aiNav} aria-label="AI 활용 메뉴">
        <span className={styles.aiNavBar} aria-hidden="true" />
        <ol>
          {MENU.map((m, i) => (
            <li key={m.id}>
              <button
                type="button"
                className={styles.aiNavItem}
                aria-current={active === i ? "true" : undefined}
                onClick={() => go(i)}
              >
                <span className={styles.aiNavNo}>0{i + 1}</span>
                {m.label}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className={styles.aiPanels}>
        {/* 01 사용하는 툴 */}
        <section
          id={MENU[0].id}
          ref={(el) => {
            panelRefs.current[0] = el;
          }}
          data-idx={0}
          data-on={active === 0 || undefined}
          className={styles.aiSpyPanel}
          aria-labelledby="ai-tools-h"
        >
          <p className={styles.aiPanelNo}>01</p>
          <h3 id="ai-tools-h" className={styles.aiPanelTitle}>
            사용하는 툴
          </h3>
          <div className={styles.aiToolGroups}>
            {TOOL_GROUPS.map((g) => (
              <div key={g.group} className={styles.aiToolGroup}>
                <p className={styles.aiToolGroupName}>{g.group}</p>
                <ul>
                  {g.items.map((t) => (
                    <li key={t.name}>
                      <Image src={`/work/tools/${t.icon}.svg`} alt="" width={28} height={28} />
                      <div>
                        <b>{t.name}</b>
                        <span>{t.use}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 02 개인 프롬프트 */}
        <section
          id={MENU[1].id}
          ref={(el) => {
            panelRefs.current[1] = el;
          }}
          data-idx={1}
          data-on={active === 1 || undefined}
          className={styles.aiSpyPanel}
          aria-labelledby="ai-prompts-h"
        >
          <p className={styles.aiPanelNo}>02</p>
          <h3 id="ai-prompts-h" className={styles.aiPanelTitle}>
            개인 프롬프트
          </h3>
          <p className={styles.aiPanelLead}>
            자주 하는 일은 노션에 프롬프트로 저장해 두고 씁니다. 모든 프롬프트는 <b>역할 · 맥락 · 지시 · 형식 · 제약</b>으로 써서
            할루시네이션과 검토 시간을 줄입니다.
          </p>

          <div className={styles.promptView}>
            <figure className={styles.promptImage}>
              <Image
                src="/work/prompts/notion-prompt-board.webp"
                width={1458}
                height={618}
                alt="노션 '기획 프롬프트' 모음집: 공통 · 리서치 · 문제정의·전략 · 기획 · 협업·보고 · QA·출시 · 출시 후 단계별 프롬프트 보드"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </figure>
          </div>
        </section>

        {/* 03 업무 자동화 */}
        <section
          id={MENU[2].id}
          ref={(el) => {
            panelRefs.current[2] = el;
          }}
          data-idx={2}
          data-on={active === 2 || undefined}
          className={styles.aiSpyPanel}
          aria-labelledby="ai-auto-h"
        >
          <p className={styles.aiPanelNo}>03</p>
          <h3 id="ai-auto-h" className={styles.aiPanelTitle}>
            업무 자동화
          </h3>
          <ol className={styles.autoList}>
            {AUTOS.map((a) => (
              <li key={a.no} className={styles.autoCard}>
                <div className={styles.autoHead}>
                  <span className={styles.autoNo}>{a.no}</span>
                  <h4>{a.title}</h4>
                </div>
                <ol className={styles.autoSteps} aria-label={`${a.title} 흐름`}>
                  {a.flow.map((n, i) => (
                    <li
                      key={n.label}
                      className={n.me ? styles.autoMe : undefined}
                      style={{ transitionDelay: `${0.08 + i * 0.1}s` }}
                    >
                      <span className={styles.autoNode} aria-hidden="true">
                        {n.me ? (
                          <Image className={styles.autoMeImg} src="/work/tools/me.webp" alt="" width={52} height={52} />
                        ) : n.icon ? (
                          <Image src={`/work/tools/${n.icon}.svg`} alt="" width={26} height={26} />
                        ) : (
                          n.emoji
                        )}
                      </span>
                      <span className={styles.autoLabel}>{n.me ? <b>직접 {n.label}</b> : n.label}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
