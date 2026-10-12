"use client";
import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-accent text-lg tracking-tight"
        >
          SDG
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-accent transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/CV_DataScience_ML_Serigne_Dame_GADIAGA.docx"
            download
            className="flex items-center gap-1.5 text-sm bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-mid transition-colors font-medium"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-700 hover:text-accent font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/CV_DataScience_ML_Serigne_Dame_GADIAGA.docx"
            download
            className="flex items-center gap-1.5 text-sm bg-accent text-white px-4 py-2 rounded-lg w-fit font-medium"
          >
            <Download size={14} />
            CV
          </a>
        </div>
      )}
    </header>
  );
}
