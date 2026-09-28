export default function About() {
  return (
    <section id="about" className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:flex-row sm:gap-20 sm:px-12 lg:px-20">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400 sm:w-32 sm:flex-none">
          ABOUT
        </p>
        <div className="flex flex-col gap-6">
          <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
            A short paragraph about your background, skills, and approach.
            Replace this with your real bio — two to four sentences usually
            works best.
          </p>
          <p className="text-sm text-zinc-600">
            Skills — Figma, React, TypeScript, Design Systems
          </p>
        </div>
      </div>
    </section>
  );
}
