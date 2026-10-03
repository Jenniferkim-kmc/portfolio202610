import type { GroupedChart } from "@/data/projects";

// 첫 번째 그룹은 진하게, 두 번째 그룹은 연하게
const FILL = ["#18181b", "#a1a1aa"]; // zinc-900, zinc-400

export default function GroupedBars({ chart }: { chart: GroupedChart }) {
  const max = Math.max(...chart.rows.flatMap((row) => row.values));

  return (
    <figure className="flex flex-col gap-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <figcaption className="text-sm font-semibold text-zinc-800">
          {chart.title}
        </figcaption>
        <div className="flex gap-4 text-xs text-zinc-500">
          {chart.series.map((name, i) => (
            <span key={name} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ background: FILL[i] }}
              />
              {name}
            </span>
          ))}
        </div>
      </div>
      <dl className="flex flex-col gap-4">
        {chart.rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[8.5rem_1fr] items-center gap-x-4"
          >
            <dt className="text-sm font-medium break-keep text-zinc-700">
              {row.label}
            </dt>
            <dd className="flex flex-col gap-1.5">
              {row.values.map((value, i) => (
                <div key={chart.series[i]} className="flex items-center gap-2">
                  <span
                    className="h-3.5 rounded-r"
                    style={{
                      width: `${Math.max((value / max) * 75, 0.5)}%`,
                      background: FILL[i],
                    }}
                    aria-hidden
                  />
                  <span className="text-xs font-semibold tabular-nums text-zinc-800">
                    <span className="sr-only">{chart.series[i]} </span>
                    {value.toLocaleString("ko-KR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                    {chart.unit}
                  </span>
                </div>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      {chart.note && (
        <p className="text-sm leading-relaxed break-keep text-zinc-500">
          {chart.note}
        </p>
      )}
    </figure>
  );
}
