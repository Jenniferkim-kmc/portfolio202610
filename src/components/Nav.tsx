import Link from "next/link";

// basePath: 기본 포트폴리오는 "", 그로스 포트폴리오는 "/growth"
export default function Nav({ basePath = "" }: { basePath?: string }) {
  const home = basePath || "/";
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-12 lg:px-20">
        <Link href={home} className="text-sm font-semibold tracking-widest">PORTFOLIO</Link>
        <nav className="flex gap-10 text-sm font-medium text-zinc-600">
          <Link href={`${home}#about`} className="transition-colors hover:text-black">
            About
          </Link>
          <Link href={`${home}#work`} className="transition-colors hover:text-black">
            Work
          </Link>
          <Link href={`${home}#experience`} className="transition-colors hover:text-black">
            Experience
          </Link>
          <Link href={`${home}#contact`} className="transition-colors hover:text-black">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
