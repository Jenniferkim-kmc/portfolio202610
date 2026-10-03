export default function Hero() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-32 sm:px-12 sm:py-40 lg:px-20 lg:py-48">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          PORTFOLIO — 2026
        </p>
        <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          김유정
          <span className="mt-3 block text-3xl font-medium text-zinc-400 sm:text-4xl lg:text-5xl">
            Jennifer Kim
          </span>
        </h1>
        <p className="mt-6 text-xl font-medium text-zinc-600 sm:text-2xl">
          Product Manager
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed break-keep text-zinc-600 sm:text-lg">
          바로 투입되어, 짧은 시간 안에 임팩트를 남기는 PM.
          <br />
          기능을 내놓는 데서 끝내지 않고, 숫자로 확인되는 변화까지 책임집니다.
        </p>
        <a
          href="#work"
          className="mt-10 inline-block text-base font-semibold transition-opacity hover:opacity-70"
        >
          View Work →
        </a>
      </div>
    </section>
  );
}
