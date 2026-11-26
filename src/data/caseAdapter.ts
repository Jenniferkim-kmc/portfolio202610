// projects.ts 형식(Detail)을 /growth 상세 페이지 형식(GrowthCase)으로 바꾼다.
// /, /system, /logistics 상세 페이지가 /growth와 같은 틀을 쓰게 하려는 용도.

import { getGrowthFeature, type GrowthFeature } from "@/data/growthContent";
import { getGrowthCase, type CaseBlock, type CaseImage, type CaseSection, type GrowthCase } from "@/data/growthCase";
import { getGrowthProject } from "@/data/growthProjects";
import { getSiteCase } from "@/data/dispatchCase";
import type { Block, Project, Screen } from "@/data/projects";

type GetFeature = (slug: string) => GrowthFeature | undefined;

// 메인 카드: /growth에 같은 프로젝트가 있으면 /growth의 최신 문구·숫자를 쓴다
export function siteCards(projects: Project[], getFeature: GetFeature) {
  return projects.flatMap((p) => {
    const feature = getGrowthFeature(p.slug) ?? getFeature(p.slug);
    const project = getGrowthProject(p.slug) ?? p;
    return feature ? [{ project, feature }] : [];
  });
}

// 상세: /growth에 만든 상세가 있으면 그대로, 없으면 projects.ts 내용을 변환
export function siteCases(projects: Project[], getFeature: GetFeature): GrowthCase[] {
  return siteCards(projects, getFeature).flatMap(({ project, feature }, i) => {
    const base = getGrowthCase(project.slug) ?? getSiteCase(project.slug);
    const c = base
      ? { ...base, kicker: base.kicker.replace(/^\d+/, String(i + 1).padStart(2, "0")) }
      : toGrowthCase(projects.find((p) => p.slug === project.slug) ?? project, feature, i);
    return c ? [c] : [];
  });
}

// 상세 한 건: 대표 프로젝트면 siteCases 순번 그대로, 서브 프로젝트(기존 주소 유지용)는 변환만
export function siteCase(slug: string, featured: Project[], all: Project[], getFeature: GetFeature) {
  const cases = siteCases(featured, getFeature);
  const hit = cases.find((c) => c.slug === slug);
  if (hit) return { data: hit, others: cases };
  const project = all.find((p) => p.slug === slug);
  if (!project) return undefined;
  const data = getGrowthCase(slug) ?? getSiteCase(slug) ?? toGrowthCase(project, getGrowthFeature(slug) ?? getFeature(slug), cases.length);
  return data ? { data, others: cases } : undefined;
}

const img = (s: Screen): CaseImage => ({
  src: s.src,
  w: s.width,
  h: s.height,
  alt: s.alt,
  cap: s.label ? `${s.label} · ${s.caption}` : s.caption,
});

const isPortrait = (items: { w: number; h: number }[]) => items.length > 0 && items.every((i) => i.h > i.w);

function toBlocks(b: Block): CaseBlock[] {
  const out: CaseBlock[] = [];
  if (b.heading || b.body || b.bullets?.length) {
    out.push({ type: "text", label: b.heading, text: b.body, points: b.bullets });
  }
  if (b.table) out.push({ type: "compare", head: b.table.headers, rows: b.table.rows, note: b.table.note });
  if (b.flow) {
    // "Before · 화이트 지역 6단계 수기" → 배지 "Before" + 제목. 시스템이 대신 하는 단계(자동·일괄)에만 '자동' 표시
    const col = (r: { label: string; steps: string[] }, after: boolean) => {
      const [tag, ...rest] = r.label.split(" · ");
      return {
        tag: rest.length ? tag : after ? "After" : "Before",
        title: rest.length ? rest.join(" · ") : r.label,
        steps: r.steps.map((text) => ({ text, auto: after && /자동|일괄/.test(text) })),
      };
    };
    out.push({ type: "steps", before: col(b.flow.before, false), after: col(b.flow.after, true) });
  }
  if (b.chart || b.compare || b.grouped) out.push({ type: "chart", daily: b.chart, compare: b.compare, grouped: b.grouped });
  if (b.screens) {
    const items = [img(b.screens.before), img(b.screens.after)];
    out.push({ type: "figures", layout: isPortrait(items) ? "phones" : "wide", items });
  }
  // 가로 화면은 전체 폭, 폰 화면은 따로 모아 같은 크기로 (섞어 두면 폰이 전체 폭으로 늘어남)
  const pics = [...(b.image ? [b.image] : []), ...(b.gallery ?? [])].map(img);
  const wide = pics.filter((p) => p.w >= p.h);
  const phones = pics.filter((p) => p.h > p.w);
  if (wide.length) out.push({ type: "figures", layout: "wide", items: wide });
  if (phones.length) out.push({ type: "figures", layout: phones.length >= 3 ? "gallery" : "phones", items: phones });
  return out;
}

const first = (blocks: Block[]) => blocks.find((b) => b.heading || b.body);

export function toGrowthCase(project: Project, feature: GrowthFeature | undefined, index: number): GrowthCase | undefined {
  const d = project.detail;
  if (!d) return undefined;
  const NO_HERO_IMAGES = new Set(["dispatch-automation"]);

  const evidence = feature?.evidence.label ?? "";
  const evidenceShort = evidence.includes(" · ") ? evidence.split(" · ").slice(1).join(" · ") : evidence;
  // 상세 상단(역할·기간 아래) 사진을 빼는 프로젝트. 메인 카드 사진은 그대로 둔다.
  const heroImages: CaseImage[] = NO_HERO_IMAGES.has(project.slug) ? [] : (feature?.pics ?? []).map((p) => ({ src: p.src, w: p.width, h: p.height, alt: p.alt }));
  const problem = first(d.what);
  const solve = first(d.how);
  const result = first(d.result);

  const sections: CaseSection[] = [
    { id: "what", badge: "문제", nav: "문제", title: "무엇이 문제였나", blocks: d.what.flatMap(toBlocks) },
    { id: "why", badge: "원인", nav: "원인", title: "왜 그런 문제가 생겼나", blocks: d.why.flatMap(toBlocks) },
    { id: "how", badge: "해결", nav: "해결", title: "어떻게 풀었나", blocks: d.how.flatMap(toBlocks) },
  ];
  if (d.tradeoffs.length) {
    sections.push({
      id: "tradeoffs",
      badge: "선택과 포기",
      nav: "선택과 포기",
      title: "무엇을 고르고 무엇을 포기했나",
      blocks: [
        {
          type: "cards",
          cols: d.tradeoffs.length >= 3 ? 3 : 2,
          ordered: true,
          items: d.tradeoffs.map((t) => ({ text: t, tone: "plain" as const })),
        },
      ],
    });
  }
  const resultBlocks = d.result.flatMap(toBlocks);
  const retro = d.retro ? (Array.isArray(d.retro) ? d.retro : [d.retro]) : [];
  retro.forEach((t, i) => resultBlocks.push({ type: "callout", tone: "ink", label: i === 0 ? "회고" : undefined, text: t }));
  sections.push({ id: "result", badge: "결과", nav: "결과", title: "무엇이 바뀌었나", blocks: resultBlocks });

  return {
    slug: project.slug,
    kicker: `${String(index + 1).padStart(2, "0")} · ${project.category}`,
    title: [project.title, evidenceShort || project.summary],
    lede: feature?.problem ?? project.summary,
    kpis: d.metrics.map((m) => ({ value: m.value, label: m.label, basis: m.basis })),
    meta: [
      { k: "역할", v: d.role },
      { k: "기간", v: d.period },
      { k: "범위", v: d.scope },
      { k: "산출물", v: d.deliverables },
    ],
    heroImages,
    heroLayout: heroImages.length > 1 && isPortrait(heroImages) ? "pair" : "wide",
    summary: [
      { tag: "문제", head: problem?.heading ?? "문제", text: problem?.body ?? feature?.problem ?? project.summary, href: "#what" },
      { tag: "해결", head: solve?.heading ?? "해결", text: solve?.body ?? project.summary, href: "#how" },
      { tag: "결과", head: result?.heading ?? "결과", text: result?.body ?? evidence, href: "#result" },
    ],
    sections: sections.filter((s) => s.blocks.length),
  };
}
