"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AI_CORE, AI_OUTPUTS, AI_ROWS, AI_TOOLS } from "@/data/aiCapabilities";
import styles from "@/app/growth/growth.module.css";

// AI 작업 보드 (/growth AI 활용 섹션)
// 업무 탭을 누르면 'AI가 처리' 단계가 차례로 체크되고, '제가 결정' 카드에서 직접 확정 도장을 찍음.
// 내용은 AI_ROWS 그대로이고, 형식만 인터랙션으로 바꿈. 인쇄용 정적 표는 GrowthAiSection이 따로 렌더함.

const STEPS = AI_ROWS.map((r) => r.ai.split("→").map((s) => s.trim()));
// 행의 툴 이름 → 하단 툴 그리드 이름 (그리드에 없는 Gmail·Calendar는 칩에서만 표시)
const TOOL_MAP: Record<string, string[]> = { "Claude Code": ["Claude", "VS Code"] };
const gridTools = (tools: string[]) => new Set(tools.flatMap((t) => TOOL_MAP[t] ?? [t]));
// 행별 시그니처 모션: 3번 두 AI 토론, 4번 화면 조립, 5번 테스트 체크
const SIGNATURE: (null | "debate" | "build" | "qa")[] = [null, null, "debate", "build", "qa"];

const stepDelay = (i: number) => (STEPS[i].length === 1 ? 1900 : SIGNATURE[i] === "qa" ? 1000 : 560);

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 12.5 4 4 8-9" />
    </svg>
  );
}

function Signature({ kind }: { kind: "debate" | "build" | "qa" }) {
  if (kind === "debate") {
    return (
      <div className={styles.sigDebate} aria-hidden="true">
        {["Claude", "GPT", "Claude", "GPT"].map((who, k) => (
          <div key={k} className={styles.sigBubble} data-side={who === "GPT" ? "r" : "l"} style={{ animationDelay: `${0.15 + k * 0.38}s` }}>
            <b>{who}</b>
            <i />
            <i />
          </div>
        ))}
      </div>
    );
  }
  if (kind === "build") {
    return (
      <div className={styles.sigBuild} aria-hidden="true">
        <span className={styles.sigBar} />
        <div className={styles.sigScreen}>
          <span className={styles.sigSide} />
          <span className={styles.sigHero} />
          <span className={styles.sigCard} />
          <span className={styles.sigCard} />
          <span className={styles.sigCard} />
          <span className={styles.sigBtn} />
        </div>
      </div>
    );
  }
  return (
    <ul className={styles.sigQa} aria-hidden="true">
      {[0, 1, 2, 3].map((k) => (
        <li key={k} style={{ animationDelay: `${1.05 + k * 0.22}s` }}>
          <span style={{ animationDelay: `${1.05 + k * 0.22}s` }}>
            <Check />
          </span>
          <i style={{ animationDelay: `${0.1 + k * 0.18}s` }} />
        </li>
      ))}
    </ul>
  );
}

export default function GrowthAiBoard() {
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0); // 실행 회차: 같은 탭을 다시 눌러도 처음부터 재생
  const [step, setStep] = useState(STEPS[0].length); // 서버·JS 없음: 완료 상태
  const [viewed, setViewed] = useState<Set<number>>(() => new Set());
  const [confirmed, setConfirmed] = useState<Set<number>>(() => new Set());
  const [still, setStill] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const started = useRef(false);

  // 진입 시 1번 업무만 한 번 자동 재생
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      started.current = true;
      setViewed(new Set([0]));
      return;
    }
    setStep(0);
    const el = boardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (started.current) return;
        started.current = true;
        setRun((n) => n + 1);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 선택한 업무의 단계를 하나씩 체크
  useEffect(() => {
    if (run === 0) return;
    const total = STEPS[active].length;
    const done = () => setViewed((v) => (v.has(active) ? v : new Set(v).add(active)));
    if (still) {
      setStep(total);
      done();
      return;
    }
    setStep(0);
    const d = stepDelay(active);
    const timers = Array.from({ length: total }, (_, k) =>
      window.setTimeout(() => {
        setStep(k + 1);
        if (k + 1 === total) done();
      }, 350 + d * (k + 1) - (total === 1 ? 0 : d / 2)),
    );
    return () => timers.forEach(clearTimeout);
  }, [run, active, still]);

  const select = (i: number) => {
    started.current = true;
    setActive(i);
    setRun((n) => n + 1);
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = AI_ROWS.length;
    const next = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i - 1 + n) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
    if (next < 0) return;
    e.preventDefault();
    tabRefs.current[next]?.focus();
    select(next);
  };

  const r = AI_ROWS[active];
  const steps = STEPS[active];
  const total = steps.length;
  const isDone = step >= total;
  const isConfirmed = confirmed.has(active);
  const sig = SIGNATURE[active];
  const lit = gridTools(r.tools);
  const chipOn = (j: number) => step >= Math.ceil(((j + 1) * total) / r.tools.length);

  return (
    <>
      <div ref={boardRef} className={styles.aiBoard} data-still={still || undefined}>
        <div className={styles.aiBoardTop}>
          <div className={styles.aiTabs} role="tablist" aria-label="AI로 처리하는 업무">
            {AI_ROWS.map((row, i) => (
              <button
                key={row.task}
                ref={(b) => {
                  tabRefs.current[i] = b;
                }}
                type="button"
                role="tab"
                id={`ai-tab-${i}`}
                aria-selected={i === active}
                aria-controls="ai-panel"
                tabIndex={i === active ? 0 : -1}
                className={styles.aiTab}
                data-viewed={viewed.has(i) || undefined}
                onClick={() => select(i)}
                onKeyDown={(e) => onTabKey(e, i)}
              >
                <b>{confirmed.has(i) ? <Check /> : i + 1}</b>
                {row.task}
              </button>
            ))}
          </div>
          <p className={styles.aiProgress} aria-live="polite">
            <span className={styles.aiProgressBar} aria-hidden="true">
              <span style={{ width: `${(viewed.size / AI_ROWS.length) * 100}%` }} />
            </span>
            <span>
              <b>{viewed.size}</b>/{AI_ROWS.length} 살펴봄
            </span>
          </p>
        </div>

        <div id="ai-panel" role="tabpanel" aria-labelledby={`ai-tab-${active}`} className={styles.aiPanel}>
          <div className={styles.aiRun}>
            <div className={styles.aiPaneHead}>
              <span>AI가 처리 · 작성 · 공유 · 실행</span>
              <em data-on={isDone || undefined}>{isDone ? "처리 완료" : "처리 중"}</em>
            </div>
            <ol className={styles.aiSteps}>
              {steps.map((s, k) => (
                <li key={`${run}-${k}`} data-state={k < step ? "done" : k === step ? "run" : "wait"}>
                  <span className={styles.aiStepDot}>
                    <Check />
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            {sig && <Signature key={`${active}-${run}`} kind={sig} />}
            <div className={styles.aiChips}>
              {r.tools.map((t, j) => (
                <span key={t} data-on={chipOn(j) || undefined}>
                  {t}
                </span>
              ))}
              {r.note && <em>{r.note}</em>}
            </div>
          </div>

          <div className={styles.aiJudge} data-confirmed={isConfirmed || undefined}>
            <div className={styles.aiPaneHead}>
              <span>제가 결정 · 검토 · 확정</span>
              <em data-on={isConfirmed || undefined}>{isConfirmed ? "확정" : "검토 대기"}</em>
            </div>
            {isConfirmed ? (
              <div key={`c-${active}`} className={styles.aiDecision}>
                <p>{r.decide}</p>
                <span className={styles.aiStamp} aria-hidden="true">
                  확정
                </span>
              </div>
            ) : (
              <div className={styles.aiWaiting}>
                <p>AI가 만든 결과를 검토한 뒤, 최종 판단은 직접 합니다.</p>
                <button
                  type="button"
                  className={styles.aiConfirm}
                  disabled={!isDone}
                  onClick={() => setConfirmed((c) => new Set(c).add(active))}
                >
                  검토하고 확정
                </button>
              </div>
            )}
          </div>
        </div>

        {viewed.size === AI_ROWS.length && (
          <p className={styles.aiSummary}>
            <Check />
            5개 업무 모두, 반복 작업은 AI가 처리하고 판단은 제가 했습니다.
          </p>
        )}
      </div>

      <div className={styles.aiCore}>
        <p>핵심 역량</p>
        <ul>
          {AI_CORE.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <ul className={styles.toolGrid}>
        {AI_TOOLS.map((t) => (
          <li key={t.name} data-on={lit.has(t.name) || undefined}>
            <b>{t.name}</b>
            <span>{t.use}</span>
          </li>
        ))}
      </ul>
      <p className={styles.aiOutputs}>
        <b>기획 산출물</b>
        {AI_OUTPUTS}
      </p>
      <p className={styles.aiMade}>이 보드도 Claude Code로 직접 만들었습니다</p>
    </>
  );
}
