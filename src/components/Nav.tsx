export default function Nav() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-12 lg:px-20">
        <span className="text-sm font-semibold tracking-widest">PORTFOLIO</span>
        <nav className="flex gap-10 text-sm font-medium text-zinc-600">
          <a href="#work" className="transition-colors hover:text-black">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-black">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-black">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
