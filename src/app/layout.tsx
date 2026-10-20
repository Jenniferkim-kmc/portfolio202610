import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// GA4 측정 ID (공개 값). 로컬 개발 중 방문은 집계하지 않음
const GA_ID = "G-1Z20S70VWD";
const isProduction = process.env.NODE_ENV === "production";

// 사이트 전체 글꼴: Pretendard (가변 글꼴 한 파일, 45~920 굵기)
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Product Manager",
  description: "Product Manager 김유정(Jennifer Kim)의 포트폴리오.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {isProduction && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
