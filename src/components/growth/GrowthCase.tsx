import Link from "next/link";
import CountUp from "@/components/growth/CountUp";
import GrowthCaseNav from "@/components/growth/GrowthCaseNav";
import GrowthFooter from "@/components/growth/GrowthFooter";
import GrowthHeader from "@/components/growth/GrowthHeader";
import GrowthReveal from "@/components/growth/GrowthReveal";
import ZoomableImage from "@/components/ZoomableImage";
import type { CaseBlock, CaseImage, GrowthCase as Case } from "@/data/growthCase";
import { growthCases } from "@/data/growthCase";
import gs from "@/app/growth/growth.module.css";
import s from "./growthCase.module.css";

function Shot({ img, phone, sizes }: { img: CaseImage; phone?: boolean; sizes?: string }) {
  return (
    <figure className={`${s.figure} ${phone ? s.figurePhone : ""}`}>
      <div className={s.frame}>
        <ZoomableImage
          src={img.src}
          alt={img.alt}
          width={img.w}
          height={img.h}
          sizes={sizes ?? "(max-width: 900px) 100vw, 1080px"}
          className="h-auto w-full"
        />
      </div>
      {img.cap && <figcaption className={s.cap}>{img.cap}</figcaption>}
    </figure>
  );
}

function Points({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`${s.points} ${ordered ? s.pointsOrdered : ""}`}>
      {items.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </Tag>
  );
}

function Block({ b }: { b: CaseBlock }) {
  const head =
    b.type !== "callout" && b.type !== "note" && (b.label || b.text) ? (
      <div className={s.blockHead}>
        {b.label && <h3 className={s.blockLabel}>{b.label}</h3>}
        {b.text && <p className={s.blockText}>{b.text}</p>}
      </div>
    ) : null;

  switch (b.type) {
    case "flow":
      return (
        <div className={s.block}>
          {head}
          <ol className={s.flow} style={{ ["--n" as string]: b.steps.length }}>
            {b.steps.map((st, i) => (
              <li key={st.title + i} className={s.flowStep} data-role={st.tag}>
                <span className={s.flowNo}>{String(i + 1).padStart(2, "0")}</span>
                {st.tag ? (
                  <span className={s.tag}>{st.tag}</span>
                ) : (
                  b.steps.some((x) => x.tag) && (
                    <span className={`${s.tag} ${s.tagGhost}`} aria-hidden="true">
                      00:00
                    </span>
                  )
                )}
                <p className={s.flowTitle}>{st.title}</p>
                {st.text && <p className={s.flowText}>{st.text}</p>}
              </li>
            ))}
          </ol>
          {b.notes && (
            <ul className={s.flowNotes}>
              {b.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
        </div>
      );
    case "cards":
      return (
        <div className={s.block}>
          {head}
          <div className={s.cards} data-cols={b.cols ?? 3}>
            {b.items.map((c, i) => (
              <article key={i} className={`${s.card} ${c.tone === "blue" ? s.cardBlue : ""}`}>
                {c.tag && <span className={s.tag}>{c.tag}</span>}
                {c.lead && <p className={s.cardLead}>{c.lead}</p>}
                {c.title && <p className={s.cardTitle}>{c.title}</p>}
                {c.text && <p className={s.cardText}>{c.text}</p>}
                {c.points && <Points items={c.points} ordered={b.ordered} />}
                {c.foot && <p className={s.cardFoot}>{c.foot}</p>}
              </article>
            ))}
          </div>
        </div>
      );
    case "rise": {
      const BASE = 150;
      const MAXH = 80;
      const bar = (cx: number, h: number) => {
        const x = cx - 24;
        const y = BASE - h;
        const r = Math.min(4, h);
        return `M${x} ${BASE}V${y + r}Q${x} ${y} ${x + r} ${y}H${x + 48 - r}Q${x + 48} ${y} ${x + 48} ${y + r}V${BASE}Z`;
      };
      return (
        <div className={s.block}>
          {head}
          <div className={s.rises}>
            {b.items.map((it, i) => {
              const hb = (it.before.v / it.after.v) * MAXH;
              // 화살표는 두 막대 꼭대기를 같은 간격(10)만큼 띄워 그대로 잇는다 → 기울기가 실제 증가와 같다
              const yStart = BASE - hb - 10;
              const yEnd = BASE - MAXH - 10;
              return (
                <div key={it.label + i} className={`${s.stat} ${s.rise}`}>
                  <p className={s.statLabel}>{it.label}</p>
                  <svg
                    viewBox="0 0 240 190"
                    className={s.riseChart}
                    role="img"
                    aria-label={`${it.label}: ${it.before.x} ${it.before.text}에서 ${it.after.x} ${it.after.text}로 ${it.delta}`}
                  >
                    <defs>
                      <marker id={`riseHead${i}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M0 0L10 5L0 10Z" style={{ fill: "var(--blue)" }} />
                      </marker>
                    </defs>
                    <path d={bar(80, hb)} fill="#d1d6db" />
                    <path d={bar(160, MAXH)} style={{ fill: "var(--blue)" }} />
                    <line x1="40" x2="200" y1={BASE} y2={BASE} stroke="#e5e8eb" strokeWidth="1" />
                    <path
                      d={`M80 ${yStart}L156 ${yStart + (yEnd - yStart) * 0.95}`}
                      fill="none"
                      style={{ stroke: "var(--blue)" }}
                      strokeWidth="3"
                      strokeLinecap="round"
                      markerEnd={`url(#riseHead${i})`}
                    />
                    <text x="118" y={Math.min(yStart, yEnd) - 14} textAnchor="middle" className={s.riseDelta}>
                      {it.delta}
                    </text>
                    <text x="80" y="170" textAnchor="middle" className={s.riseX}>{it.before.x}</text>
                    <text x="80" y="186" textAnchor="middle" className={s.riseV}>{it.before.text}</text>
                    <text x="160" y="170" textAnchor="middle" className={s.riseX}>{it.after.x}</text>
                    <text x="160" y="186" textAnchor="middle" className={s.riseV}>{it.after.text}</text>
                  </svg>
                  {it.sub && <p className={`${s.statSub} ${s.riseSub}`}>{it.sub}</p>}
                </div>
              );
            })}
          </div>
          {b.note && <p className={s.note}>{b.note}</p>}
        </div>
      );
    }
    case "donut": {
      const colors = ["var(--blue)", "#8fc0ff", "#c9e0ff"];
      let acc = 0;
      let ci = 0;
      const segs = b.items.map((it) => {
        const seg = { ...it, start: acc, color: it.muted ? "#d1d6db" : colors[ci++ % colors.length] };
        acc += it.value;
        return seg;
      });
      const top = b.items[0];
      return (
        <div className={s.block}>
          {head}
          <div className={s.donutWrap}>
            <div className={s.donutChart}>
              <svg viewBox="0 0 120 120" role="img" aria-label={b.items.map((it) => `${it.label} ${it.value}%`).join(", ")}>
                <g transform="rotate(-90 60 60)">
                  {segs.map((sg) => (
                    <circle
                      key={sg.label}
                      cx="60"
                      cy="60"
                      r="46"
                      fill="none"
                      stroke={sg.color}
                      strokeWidth="20"
                      pathLength={100}
                      strokeDasharray={`${Math.max(sg.value - 0.4, 0.15)} ${100}`}
                      strokeDashoffset={-sg.start}
                    >
                      <title>{`${sg.label} ${sg.value}%`}</title>
                    </circle>
                  ))}
                </g>
              </svg>
              <div className={s.donutCenter} aria-hidden="true">
                <span>{top.label}</span>
                <strong>{top.value}%</strong>
              </div>
            </div>
            <ul className={s.donutLegend}>
              {segs.map((sg) => (
                <li key={sg.label} className={sg.muted ? s.donutMuted : undefined}>
                  <span className={s.donutSwatch} style={{ background: sg.color }} aria-hidden="true" />
                  <span className={s.donutLabel}>{sg.label}</span>
                  <span className={s.donutValue}>{sg.value}%</span>
                </li>
              ))}
            </ul>
          </div>
          {b.note && <p className={s.note}>{b.note}</p>}
        </div>
      );
    }
    case "bars":
      return (
        <div className={s.block}>
          {head}
          <div className={s.bars}>
            {b.items.map((it) => (
              <div key={it.label} className={s.barRow} title={`${it.label} ${it.value}%`}>
                <span className={s.barLabel}>{it.label}</span>
                <span className={s.barTrack} aria-hidden="true">
                  <span
                    className={s.barFill}
                    style={{ width: `${it.value}%`, ...(it.muted ? { background: "#d1d6db" } : {}) }}
                  />
                </span>
                <span className={s.barValue}>{it.value}%</span>
              </div>
            ))}
          </div>
          {b.note && <p className={s.note}>{b.note}</p>}
        </div>
      );
    case "stats":
      return (
        <div className={s.block}>
          {head}
          <div className={s.stats}>
            {b.items.map((it, i) => (
              <div key={it.label + i} className={s.statWrap}>
                <div className={s.stat}>
                  <p className={s.statValue}>{it.value}</p>
                  <p className={s.statLabel}>{it.label}</p>
                  {it.sub && <p className={s.statSub}>{it.sub}</p>}
                </div>
                {b.op?.[i] && i < b.items.length - 1 && (
                  <span className={s.statOp} aria-hidden="true">
                    {b.op[i]}
                  </span>
                )}
              </div>
            ))}
          </div>
          {b.points && <Points items={b.points} />}
          {b.note && <p className={s.note}>{b.note}</p>}
        </div>
      );
    case "versus": {
      const max = Math.max(...b.items.map((it) => it.value));
      return (
        <div className={s.block}>
          {head}
          <div className={s.versus}>
            <div className={s.versusHead}>
              <p className={s.versusRatio}>{b.ratio}</p>
              <p className={s.versusCaption}>{b.caption}</p>
            </div>
            <div className={s.versusBars}>
              {b.items.map((it) => (
                <div key={it.label} className={s.versusRow} title={`${it.label} ${it.value}${b.unit}`}>
                  <span className={s.barLabel}>{it.label}</span>
                  <span className={s.versusTrack} aria-hidden="true">
                    <span
                      className={s.barFill}
                      style={{ width: `${(it.value / max) * 100}%`, ...(it.muted ? { background: "#d1d6db" } : {}) }}
                    />
                  </span>
                  <span className={s.versusValue}>
                    {it.value}
                    {b.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {b.points && <Points items={b.points} />}
          {b.note && <p className={s.note}>{b.note}</p>}
        </div>
      );
    }
    case "callout":
      return (
        <div className={`${s.callout} ${b.tone === "ink" ? s.calloutInk : ""}`}>
          {b.label && <p className={s.calloutLabel}>{b.label}</p>}
          {b.text && <p className={s.calloutText}>{b.text}</p>}
        </div>
      );
    case "beforeAfter":
      return (
        <div className={`${s.block} ${s.ba}`}>
          <div className={s.baHead}>
            <span className={s.baNum}>{b.num}</span>
            <h3 className={s.baTitle}>{b.title}</h3>
          </div>
          <div className={s.baBody}>
            <div className={s.baPhones}>
              <div>
                <span className={`${s.tag} ${s.tagGray}`}>BEFORE</span>
                <Shot img={b.before} phone sizes="(max-width: 900px) 45vw, 260px" />
              </div>
              <div>
                <span className={s.tag}>AFTER</span>
                <Shot img={b.after} phone sizes="(max-width: 900px) 45vw, 260px" />
              </div>
            </div>
            <Points items={b.points} />
          </div>
        </div>
      );
    case "shots":
      return (
        <div className={s.block}>
          {head}
          <div className={s.shots}>
            {b.items.map((it) => (
              <article key={it.src} className={s.shot}>
                <Shot img={it} sizes="(max-width: 900px) 100vw, 360px" />
                <span className={s.tag}>{it.tag}</span>
                <p className={s.cardTitle}>{it.title}</p>
                <Points items={it.points} />
              </article>
            ))}
          </div>
        </div>
      );
    case "compare":
      return (
        <div className={s.block}>
          {head}
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  {b.head.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i} className={i === r.length - 1 ? s.tdDiff : undefined}>{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && <p className={s.note}>{b.note}</p>}
        </div>
      );
    case "figures":
      return (
        <div className={s.block}>
          {head}
          {b.layout === "phones" ? (
            <div className={s.phoneRow}>
              {b.points && <Points items={b.points} />}
              <div className={s.baPhones}>
                {b.items.map((img) => (
                  <Shot key={img.src} img={img} phone sizes="(max-width: 900px) 45vw, 260px" />
                ))}
              </div>
            </div>
          ) : (
            <>
              {b.items.map((img) => (
                <Shot key={img.src} img={img} />
              ))}
              {b.points && <Points items={b.points} />}
            </>
          )}
        </div>
      );
    case "note":
      return <p className={s.note}>{b.text}</p>;
    case "structure":
      return (
        <div className={`${s.block} ${s.structure}`}>
          {[b.before, b.after].map((row, r) => (
            <div key={row.label} className={`${s.stRow} ${r === 1 ? s.stRowAfter : ""}`}>
              <p className={s.stLabel}>{row.label}</p>
              <ol className={s.stNodes}>
                {row.nodes.map((n, i) => (
                  <li key={n.tag + i} className={s.stItem}>
                    {i > 0 && (
                      <span className={s.stArrow} aria-hidden="true">
                        →
                      </span>
                    )}
                    <div className={`${s.stNode} ${n.accent ? s.stNodeAccent : ""}`} data-role={r === 1 ? n.tag : undefined}>
                      <span className={`${s.tag} ${r === 0 ? s.tagGray : ""}`}>{n.tag}</span>
                      <p className={s.stTitle}>{n.title}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      );
  }
}

export default function GrowthCase({ data }: { data: Case }) {
  const others = growthCases.filter((c) => c.slug !== data.slug);
  return (
    <div className={`${gs.root} ${s.page}`}>
      <GrowthReveal />
      <GrowthHeader />

      <main id="main">
        {/* 히어로: 무엇을 했고, 어떤 성과인지 */}
        <section className={s.hero}>
          <Link href="/growth#work" className={s.back}>
            ← 대표 프로젝트
          </Link>
          <span className={gs.badge}>{data.kicker}</span>
          <h1 className={s.title}>
            {data.title[0]}
            <br />
            <em>{data.title[1]}</em>
          </h1>
          <p className={s.lede}>{data.lede}</p>

          <div className={s.kpis} data-n={data.kpis.length}>
            {data.kpis.map((k) => (
              <div key={k.label} className={s.kpi}>
                <p className={s.kpiValue}>
                  {k.count ? (
                    <>
                      {k.count.prefix}
                      <CountUp from={k.count.from} to={k.count.to} decimals={k.count.decimals ?? 0} />
                      {k.count.suffix}
                    </>
                  ) : (
                    k.value
                  )}
                </p>
                <p className={s.kpiLabel}>{k.label}</p>
                {k.basis && <p className={s.kpiBasis}>{k.basis}</p>}
              </div>
            ))}
          </div>
          {data.kpiNote && <p className={s.kpiNote}>{data.kpiNote}</p>}

          <dl className={s.meta}>
            {data.meta.map((m) => (
              <div key={m.k}>
                <dt>{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </dl>

          {data.heroImages.length > 0 && (
            <div className={s.heroMedia} data-layout={data.heroLayout}>
              {data.heroImages.map((img) => (
                <Shot
                  key={img.src}
                  img={img}
                  phone={data.heroLayout === "pair"}
                  sizes={data.heroLayout === "pair" ? "(max-width: 900px) 45vw, 300px" : undefined}
                />
              ))}
            </div>
          )}
        </section>

        {/* 30초 요약: 문제 · 해결 · 결과 */}
        <GrowthCaseNav items={[{ id: "summary", label: "30초 요약" }, ...data.sections.map((sec) => ({ id: sec.id, label: sec.nav }))]} />

        <section id="summary" className={`${s.summarySec} ${s.sec} ${gs.grey}`} aria-label="30초 요약">
          <div className={s.summary}>
            {data.summary.map((it, i) => (
              <a key={it.tag} href={it.href} className={s.sumCard}>
                <span className={s.sumStep}>
                  {String(i + 1).padStart(2, "0")} {it.tag}
                </span>
                <p className={s.sumHead}>{it.head}</p>
                <p className={s.sumText}>{it.text}</p>
                <span className={s.sumMore}>자세히 보기 ↓</span>
              </a>
            ))}
          </div>
        </section>

        {data.sections.map((sec, i) => (
          <section key={sec.id} id={sec.id} className={`${gs.section} ${s.sec} ${i % 2 === 1 ? gs.grey : ""}`}>
            <div className={gs.center}>
              <span className={gs.badge}>{sec.badge}</span>
              <h2 className={gs.h2}>{sec.title}</h2>
              {sec.desc && <p className={`${gs.desc} ${s.secDesc}`}>{sec.desc}</p>}
            </div>
            <div className={s.blocks}>
              {sec.blocks.map((b, j) => (
                <Block key={j} b={b} />
              ))}
            </div>
          </section>
        ))}

        <section className={`${s.next} ${data.sections.length % 2 === 1 ? gs.grey : ""}`} aria-label="다른 프로젝트">
          <p className={s.nextLabel}>다른 프로젝트</p>
          <div className={s.nextGrid}>
            {others.map((o) => (
              <Link key={o.slug} href={`/growth/work/${o.slug}`} className={s.nextCard}>
                <span className={s.nextKicker}>{o.kicker}</span>
                <span className={s.nextTitle}>
                  {o.title[0]} {o.title[1]}
                </span>
                <span className={s.sumMore}>보기 →</span>
              </Link>
            ))}
          </div>
          <Link href="/growth#work" className={s.back}>
            ← 대표 프로젝트로 돌아가기
          </Link>
        </section>
      </main>

      <GrowthFooter />
    </div>
  );
}
