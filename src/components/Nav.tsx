import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-12 lg:px-20">
        <Link href="/" className="text-sm font-semibold tracking-widest">PORTFOLIO</Link>
        <nav className="flex gap-10 text-sm font-medium text-zinc-600">
          <Link href="/#about" className="transition-colors hover:text-black">
            About
          </Link>
          <Link href="/#work" className="transition-colors hover:text-black">
            Work
          </Link>
          <Link href="/#experience" className="transition-colors hover:text-black">
            Experience
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-black">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
