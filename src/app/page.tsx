import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
