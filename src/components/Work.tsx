const projects = [
  { title: "Project One", category: "Web App Design", year: "2026" },
  { title: "Project Two", category: "Brand Identity", year: "2025" },
  { title: "Project Three", category: "Mobile App", year: "2025" },
];

export default function Work() {
  return (
    <section id="work" className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-20">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          SELECTED WORK
        </p>
        <ul className="mt-14 divide-y divide-zinc-200 border-t border-zinc-200">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href="#"
                className="group flex items-center justify-between py-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold transition-opacity group-hover:opacity-70 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm font-medium text-zinc-400">
                  {project.year}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
