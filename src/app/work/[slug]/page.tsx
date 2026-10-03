import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DailyBarChart from "@/components/DailyBarChart";
import CompareBars from "@/components/CompareBars";
import GroupedBars from "@/components/GroupedBars";
import {
  getProject,
  projects,
  type Block,
  type Flow,
  type Screen,
} from "@/data/projects";

export const dynamicParams = false;

const caseStudies = projects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 김유정 (Jennifer Kim)`,
    description: project.summary,
  };
}

function Section({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 border-t border-zinc-200 py-16 sm:flex-row sm:gap-20">
      <div className="sm:w-40 sm:flex-none">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          {index} — {label}
        </p>
        <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex max-w-2xl flex-1 flex-col gap-8">{children}</div>
    </section>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <div key={block.heading ?? i} className="flex flex-col gap-3">
          {block.heading && (
            <h3 className="text-lg font-semibold break-keep">
              {block.heading}
            </h3>
          )}
          {block.body && (
            <p className="text-base leading-relaxed break-keep text-zinc-700 sm:text-lg">
              {block.body}
            </p>
          )}
          {block.bullets && (
            <ul className="flex flex-col gap-2 text-base leading-relaxed break-keep text-zinc-600">
              {block.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-zinc-300">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {block.flow && <FlowCompare flow={block.flow} />}
          {block.chart && <DailyBarChart chart={block.chart} />}
          {block.compare && <CompareBars chart={block.compare} />}
          {block.grouped && <GroupedBars chart={block.grouped} />}
          {block.screens && (
            <div className="mt-2">
              <ScreenCompare
                before={block.screens.before}
                after={block.screens.after}
              />
            </div>
          )}
          {block.image && (
            <figure className="mt-2 flex flex-col gap-3">
              <div className="flex justify-center rounded-xl bg-zinc-100 p-5">
                <Image
                  src={block.image.src}
                  width={block.image.width}
                  height={block.image.height}
                  alt={block.image.alt}
                  sizes="(min-width: 640px) 320px, 90vw"
                  className="h-auto w-full max-w-[320px] rounded-lg shadow-sm"
                />
              </div>
              <figcaption className="text-sm leading-relaxed break-keep text-zinc-500">
                {block.image.caption}
              </figcaption>
            </figure>
          )}
          {block.table && (
            <div className="flex flex-col gap-2">
              <div className="overflow-x-auto rounded-xl border border-zinc-200">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-zinc-50 text-xs text-zinc-500">
                    <tr>
                      {block.table.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="px-4 py-3 font-medium whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {block.table.rows.map((row, rowIndex) => (
                      <tr
                        key={row[0]}
                        className={
                          rowIndex === block.table?.highlight
                            ? "font-semibold text-zinc-900"
                            : "text-zinc-700"
                        }
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`px-4 py-3 whitespace-nowrap ${
                              cellIndex > 1 ? "tabular-nums" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.table.note && (
                <p className="text-sm leading-relaxed break-keep text-zinc-500">
                  {block.table.note}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function FlowCompare({ flow }: { flow: Flow }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[flow.before, flow.after].map((column, columnIndex) => (
        <div
          key={column.label}
          className={`rounded-xl border p-5 ${
            columnIndex === 0
              ? "border-zinc-200 bg-zinc-50"
              : "border-zinc-900 bg-white"
          }`}
        >
          <p className="text-xs font-medium tracking-[0.15em] text-zinc-500">
            {column.label}
          </p>
          <ol className="mt-4 flex flex-col gap-2">
            {column.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-zinc-300 text-[11px] text-zinc-500">
                  {i + 1}
                </span>
                <span className="break-keep text-zinc-800">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

function ScreenCompare({ before, after }: { before: Screen; after: Screen }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[
        { label: "Before", screen: before },
        { label: "After", screen: after },
      ].map(({ label, screen }) => (
        <figure key={label} className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.15em] text-zinc-500">
            {label}
          </p>
          <div className="flex flex-1 items-start justify-center rounded-xl bg-zinc-100 p-5">
            <Image
              src={screen.src}
              width={screen.width}
              height={screen.height}
              alt={screen.alt}
              sizes="(min-width: 640px) 320px, 90vw"
              className="h-auto w-full max-w-[320px] rounded-lg shadow-sm"
            />
          </div>
          <figcaption className="text-sm leading-relaxed break-keep text-zinc-500">
            {screen.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default async function WorkDetail({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) notFound();
  const { detail } = project;

  const position = caseStudies.findIndex((p) => p.slug === project.slug);
  const next = caseStudies[(position + 1) % caseStudies.length];

  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-24 lg:px-20">
          <Link
            href="/#work"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-black"
          >
            ← 전체 프로젝트
          </Link>

          <header className="mt-10">
            <p className="text-sm text-zinc-400">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight break-keep sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed break-keep text-zinc-600 sm:text-xl">
              {project.summary}
            </p>
          </header>

          <dl className="mt-12 grid gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["역할", detail.role],
              ["기간", detail.period],
              ["범위", detail.scope],
              ["산출물", detail.deliverables],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="text-xs font-medium tracking-[0.15em] text-zinc-400">
                  {term}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed break-keep text-zinc-800">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className={`mt-12 grid gap-4 ${
              detail.metrics.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            }`}
          >
            {detail.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col rounded-xl border border-zinc-200 p-6"
              >
                <span className="self-start rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">
                  {metric.basis}
                </span>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed break-keep text-zinc-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Section index="01" label="WHAT" title="무엇이 문제였나">
              <Blocks blocks={detail.what} />
            </Section>
            <Section index="02" label="WHY" title="왜 풀어야 했나">
              <Blocks blocks={detail.why} />
            </Section>
            <Section index="03" label="HOW" title="어떻게 풀었나">
              <Blocks blocks={detail.how} />
              {detail.tradeoffs.length > 0 && (
                <div className="flex flex-col gap-3 rounded-xl bg-zinc-50 p-6">
                  <h3 className="text-sm font-semibold tracking-[0.1em] text-zinc-500">
                    트레이드오프
                  </h3>
                  <ul className="flex flex-col gap-2 text-base leading-relaxed break-keep text-zinc-700">
                    {detail.tradeoffs.map((tradeoff) => (
                      <li key={tradeoff} className="flex gap-2">
                        <span className="text-zinc-300">–</span>
                        <span>{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>
            <Section index="04" label="RESULT" title="무엇이 달라졌나">
              <Blocks blocks={detail.result} />
            </Section>
            <Section index="05" label="RETRO" title="다시 한다면">
              {(Array.isArray(detail.retro)
                ? detail.retro
                : [detail.retro ?? "[회고 작성 예정]"]
              ).map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed break-keep text-zinc-500"
                >
                  {paragraph}
                </p>
              ))}
            </Section>
          </div>

          {next && next.slug !== project.slug && (
            <Link
              href={`/work/${next.slug}`}
              className="group mt-8 flex flex-col gap-2 border-t border-zinc-200 pt-12"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-zinc-400">
                NEXT PROJECT
              </span>
              <span className="text-2xl font-semibold break-keep transition-opacity group-hover:opacity-70 sm:text-3xl">
                {next.title} →
              </span>
            </Link>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
