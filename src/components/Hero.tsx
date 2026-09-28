export default function Hero() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-32 sm:px-12 sm:py-40 lg:px-20 lg:py-48">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          PORTFOLIO — 2026
        </p>
        <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Your Name
        </h1>
        <p className="mt-6 text-xl font-medium text-zinc-600 sm:text-2xl">
          Product Designer &amp; Developer
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          A short one-line description of what you do and who you help —
          replace this with your own positioning statement.
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
