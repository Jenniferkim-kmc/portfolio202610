export default function About() {
  return (
    <section id="about" className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:flex-row sm:gap-20 sm:px-12 lg:px-20">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400 sm:w-32 sm:flex-none">
          ABOUT
        </p>
        <div className="flex flex-col gap-6">
          <p className="max-w-2xl text-lg leading-relaxed break-keep sm:text-xl">
            무엇이 문제인지, 왜 개선해야 하는지, 어떻게 바꿀지를 먼저 묻는
            기획자입니다. 사용자가 어디서 어려움을 겪는지 인터뷰와 데이터로 확인하고,
            어떻게 바뀌어야 하는지를 요구사항으로 정확히 정의해 실제 결과로
            만듭니다.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed break-keep sm:text-xl">
            데이터는 SQL로 직접 뽑고, 화면은 Figma와 바이브코딩으로 직접
            만듭니다. 문제 확인부터 동작하는 프로토타입까지 직접 완성하고,
            Claude와 GPT를 요구사항 정리·데이터 분석·화면 구현 전 과정에 활용해 같은
            시간에 더 많은 것을 검증합니다. 빠른 업무 파악 능력과 AI 활용 능력으로,
            어떤 팀에서든 즉시 투입되어 일할 수 있습니다.
          </p>
          <p className="text-sm text-zinc-600">
            Skills — Figma, Notion, SQL, VS Code, Claude, GPT, 바이브코딩,
            스토리보드
          </p>
        </div>
      </div>
    </section>
  );
}
