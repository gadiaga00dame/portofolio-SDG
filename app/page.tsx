import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Formation />
      <Contact />
      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Serigne Dame GADIAGA — Polytech Lyon, MAM
      </footer>
    </main>
  );
}
