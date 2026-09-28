export default function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Let&apos;s work together
        </h2>
        <a
          href="mailto:hello@yourname.com"
          className="mt-6 inline-block text-lg font-medium transition-opacity hover:opacity-70 sm:text-xl"
        >
          hello@yourname.com
        </a>
        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <a
              href="mailto:hello@yourname.com"
              className="transition-colors hover:text-black"
            >
              Email
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-black">
              LinkedIn
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-black">
              GitHub
            </a>
          </div>
          <p>© 2026 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
