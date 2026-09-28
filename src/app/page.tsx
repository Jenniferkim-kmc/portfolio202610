import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}
