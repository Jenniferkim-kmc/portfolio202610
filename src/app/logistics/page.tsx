import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Logistics Product Manager",
  description: "물류 서비스 기획자 김유정(Jennifer Kim)의 포트폴리오.",
};

// 물류 포트폴리오: 기본 포트폴리오(/)와 같은 내용을 /logistics 주소로 제공
export default function LogisticsHome() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <Nav basePath="/logistics" />
      <main className="flex-1">
        <Hero />
        <About />
        <Work basePath="/logistics" />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
