export default function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-20">
        <h2 className="max-w-3xl text-3xl font-semibold break-keep sm:text-4xl">
          다음 임팩트는 함께 만들고 싶습니다.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed break-keep text-zinc-600 sm:text-lg">
          귀사와 함께하는 여정을 기대합니다.
        </p>
        <a
          href="mailto:950426kim@naver.com"
          className="mt-6 inline-block text-lg font-medium transition-opacity hover:opacity-70 sm:text-xl"
        >
          950426kim@naver.com
        </a>
        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <a
              href="mailto:950426kim@naver.com"
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
          <p>© 2026 김유정 (Jennifer Kim). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
