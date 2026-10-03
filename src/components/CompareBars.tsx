import type { CompareChart } from "@/data/projects";

// 값이 가장 큰 항목만 진하게, 나머지는 연하게
const STRONG = "#18181b"; // zinc-900
const SOFT = "#a1a1aa"; // zinc-400

export default function CompareBars({ chart }: { chart: CompareChart }) {
  const max = Math.max(...chart.items.map((item) => item.value));

  return (
    <figure className="flex flex-col gap-4">
      <figcaption className="text-sm font-semibold text-zinc-800">
        {chart.title}
      </figcaption>
      <dl className="flex flex-col gap-4">
        {chart.items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[6.5rem_1fr] items-center gap-x-4 gap-y-1"
          >
            <dt className="text-sm font-medium text-zinc-700">{item.label}</dt>
            <dd className="flex items-center gap-3">
              <span
                className="h-6 rounded-r"
                style={{
                  width: `${(item.value / max) * 75}%`,
                  background: item.value === max ? STRONG : SOFT,
                }}
                aria-hidden
              />
              <span className="text-sm font-semibold tabular-nums text-zinc-900">
                {item.value.toLocaleString()}
                {chart.unit}
              </span>
            </dd>
            {item.detail && (
              <dd className="col-start-2 text-xs text-zinc-500">
                {item.detail}
              </dd>
            )}
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
