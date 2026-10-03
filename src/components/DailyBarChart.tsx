"use client";

import { useState } from "react";
import type { DailyChart } from "@/data/projects";

const W = 720;
const H = 260;
const PAD = { top: 28, right: 12, bottom: 28, left: 36 };
// 보조 그래프(위쪽 작은 패널) 높이
const CH = 110;
const CPAD = { top: 22, bottom: 6 };

// 월별 색: 이전 달은 연한 톤, 마지막 달은 진한 톤
const MONTH_FILL = ["#a1a1aa", "#18181b"]; // zinc-400, zinc-900

export default function DailyBarChart({ chart }: { chart: DailyChart }) {
  const [hover, setHover] = useState<number | null>(null);
  const { points } = chart;

  const months = [...new Set(points.map(([d]) => d.slice(0, 2)))];
  const monthIndex = (d: string) => months.indexOf(d.slice(0, 2));
  const averages = months.map((m) => {
    const values = points.filter(([d]) => d.startsWith(m)).map(([, v]) => v);
    return values.reduce((a, b) => a + b, 0) / values.length;
  });

  const max = Math.max(...points.map(([, v]) => v));
  const yMax = Math.ceil(max / 20) * 20;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const slot = innerW / points.length;
  const barW = Math.max(slot - 2, 1);
  const x = (i: number) => PAD.left + i * slot + (slot - barW) / 2;
  const y = (v: number) => PAD.top + innerH - (v / yMax) * innerH;
  const ticks = Array.from({ length: yMax / 20 + 1 }, (_, i) => i * 20);

  const indexOf = (d: string) => points.findIndex(([p]) => p === d);
  const hovered = hover !== null ? points[hover] : null;

  const companion = chart.companion;
  const cMax = companion
    ? Math.ceil(Math.max(...companion.values) / 10000) * 10000
    : 0;
  const cInnerH = CH - CPAD.top - CPAD.bottom;
  const cy = (v: number) => CPAD.top + cInnerH - (v / cMax) * cInnerH;
  const fmtK = (v: number) =>
    v >= 10000 ? `${(v / 10000).toLocaleString()}만` : v.toLocaleString();

  return (
    <figure className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <figcaption className="text-sm font-semibold text-zinc-800">
          {chart.title}
        </figcaption>
        <div className="flex gap-4 text-xs text-zinc-500">
          {months.map((m, i) => (
            <span key={m} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ background: MONTH_FILL[Math.min(i, MONTH_FILL.length - 1)] }}
              />
              {Number(m)}월 · 평균 {averages[i].toFixed(1)}
              {chart.unit}
            </span>
          ))}
        </div>
      </div>

      <div className="relative" onMouseLeave={() => setHover(null)}>
        {companion && (
          <svg
            viewBox={`0 0 ${W} ${CH}`}
            className="h-auto w-full"
            role="img"
            aria-label={`${companion.title}, 최대 ${Math.max(...companion.values).toLocaleString()}${companion.unit}`}
          >
            <text
              x={PAD.left}
              y={12}
              className="fill-zinc-500 text-[11px] font-medium"
            >
              {companion.title}
            </text>
            {[0, cMax].map((t) => (
              <g key={t}>
                <line
                  x1={PAD.left}
                  x2={W - PAD.right}
                  y1={cy(t)}
                  y2={cy(t)}
                  stroke="#e4e4e7"
                  strokeWidth={1}
                />
                <text
                  x={PAD.left - 6}
                  y={cy(t)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-zinc-400 text-[10px]"
                >
                  {fmtK(t)}
                </text>
              </g>
            ))}
            {/* 총 물량은 선으로: 아래 막대(미배송)보다 가볍게 보이도록 */}
            <path
              d={companion.values
                .map((v, i) => `${i === 0 ? "M" : "L"}${x(i) + barW / 2},${cy(v)}`)
                .join(" ")}
              fill="none"
              stroke="#71717a"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {hover !== null && (
              <circle
                cx={x(hover) + barW / 2}
                cy={cy(companion.values[hover])}
                r={4}
                fill="#71717a"
                stroke="#ffffff"
                strokeWidth={2}
              />
            )}
            {companion.values.map((_, i) => (
              <rect
                key={i}
                x={PAD.left + i * slot}
                y={CPAD.top}
                width={slot}
                height={cInnerH}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
              />
            ))}
          </svg>
        )}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`${chart.title}. ${months
            .map((m, i) => `${Number(m)}월 일 평균 ${averages[i].toFixed(1)}${chart.unit}`)
            .join(", ")}`}
        >
          {ticks.map((t) => (
            <g key={t}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(t)}
                y2={y(t)}
                stroke="#e4e4e7"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 6}
                y={y(t)}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-zinc-400 text-[10px]"
              >
                {t}
              </text>
            </g>
          ))}

          {chart.annotations?.map((a) => {
            const from = indexOf(a.from);
            const to = indexOf(a.to);
            if (from < 0 || to < 0) return null;
            return (
              <g key={a.label}>
                <rect
                  x={PAD.left + from * slot}
                  y={PAD.top}
                  width={(to - from + 1) * slot}
                  height={innerH}
                  fill="#f4f4f5"
                />
                <text
                  x={PAD.left + (from + (to - from + 1) / 2) * slot}
                  y={PAD.top - 8}
                  textAnchor="middle"
                  className="fill-zinc-500 text-[10px]"
                >
                  {a.label}
                </text>
              </g>
            );
          })}

          {points.map(([d, v], i) => {
            const top = y(v);
            const h = PAD.top + innerH - top;
            const r = Math.min(2, barW / 2, h);
            const fill = MONTH_FILL[Math.min(monthIndex(d), MONTH_FILL.length - 1)];
            return (
              <g key={d}>
                <path
                  d={`M${x(i)},${top + h} V${top + r} Q${x(i)},${top} ${x(i) + r},${top} H${x(i) + barW - r} Q${x(i) + barW},${top} ${x(i) + barW},${top + r} V${top + h} Z`}
                  fill={fill}
                  opacity={hover === null || hover === i ? 1 : 0.45}
                />
                {/* 마우스 hit 영역은 막대보다 넓게 */}
                <rect
                  x={PAD.left + i * slot}
                  y={PAD.top}
                  width={slot}
                  height={innerH}
                  fill="transparent"
                  onMouseEnter={() => setHover(i)}
                />
              </g>
            );
          })}

          {months.map((m, i) => {
            const idx = points
              .map(([d], j) => (d.startsWith(m) ? j : -1))
              .filter((j) => j >= 0);
            const x1 = PAD.left + idx[0] * slot;
            const x2 = PAD.left + (idx[idx.length - 1] + 1) * slot;
            return (
              <g key={m} pointerEvents="none">
                <line
                  x1={x1}
                  x2={x2}
                  y1={y(averages[i])}
                  y2={y(averages[i])}
                  stroke="#18181b"
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                />
                <text
                  x={x1 + 4}
                  y={y(averages[i]) - 6}
                  stroke="#ffffff"
                  strokeWidth={3}
                  paintOrder="stroke"
                  className="fill-zinc-700 text-[11px] font-semibold"
                >
                  {Number(m)}월 평균 {averages[i].toFixed(1)}
                  {chart.unit}
                </text>
              </g>
            );
          })}

          {months.map((m) => {
            const first = points.findIndex(([d]) => d.startsWith(m));
            return (
              <text
                key={m}
                x={PAD.left + first * slot}
                y={H - 8}
                className="fill-zinc-400 text-[10px]"
              >
                {Number(m)}/1
              </text>
            );
          })}
        </svg>

        {hovered && hover !== null && (
          <div
            className="pointer-events-none absolute top-0 rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-xs shadow-sm"
            style={{
              left: `${((x(hover) + barW / 2) / W) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <span className="text-zinc-500">
              {Number(hovered[0].slice(0, 2))}/{Number(hovered[0].slice(3))}
            </span>{" "}
            <span className="font-semibold tabular-nums text-zinc-900">
              {hovered[1]}
              {chart.unit}
            </span>
            {companion && (
              <span className="text-zinc-500">
                {" "}
                / 총 {companion.values[hover].toLocaleString()}
                {companion.unit}
              </span>
            )}
          </div>
        )}
      </div>

      {chart.note && (
        <p className="text-sm leading-relaxed break-keep text-zinc-500">
          {chart.note}
        </p>
      )}

      <table className="sr-only">
        <caption>{chart.title}</caption>
        <thead>
          <tr>
            <th scope="col">날짜</th>
            <th scope="col">값 ({chart.unit})</th>
            {companion && <th scope="col">{companion.title}</th>}
          </tr>
        </thead>
        <tbody>
          {points.map(([d, v], i) => (
            <tr key={d}>
              <td>{d}</td>
              <td>{v}</td>
              {companion && <td>{companion.values[i]}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
