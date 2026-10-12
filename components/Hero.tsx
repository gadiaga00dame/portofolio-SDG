"use client";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const badges = [
  {
    icon: "🏭",
    company: "Sodiaal Union",
    role: "Stagiaire Data Science · Avr – Août 2025",
    bg: "bg-accent-light",
    text: "text-accent-mid",
  },
  {
    icon: "⚖️",
    company: "Legal Quantum",
    role: "Alternant Data Scientist · Sept. 2024 – Jan. 2025",
    bg: "bg-purple-50",
    text: "text-purple-700",
  },
  {
    icon: "🚄",
    company: "SNCF Voyageurs",
    role: "Alternant Ingénieur Data Science & IA · Sept. 2026 – Sept. 2027",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
];

const stats = [
  { n: "18+", l: "Projets GitHub" },
  { n: "3", l: "Domaines d'expertise" },
  { n: "2+", l: "Expériences entreprise" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-white via-accent-light/20 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Ingénieur · Data Scientist · Mathématicien Appliqué
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Serigne Dame
            <br />
            <span className="text-accent">GADIAGA</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            Étudiant ingénieur à <strong>Polytech Lyon</strong> (MAM) passionné
            par les mathématiques appliquées, la data science et la modélisation
            numérique. Je conçois des solutions à l'intersection du{" "}
            <em>machine learning</em>, du{" "}
            <em>calcul scientifique haute performance</em> et de la{" "}
            <em>simulation numérique</em>.
          </p>

          {/* Domain pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Data Science & ML",
              "Deep Learning",
              "Modélisation Numérique",
              "Calcul Scientifique HPC",
              "Simulation Stochastique",
              "Géospatial",
              "C++",
              "NLP",
            ].map((d) => (
              <span
                key={d}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium"
              >
                {d}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-mid transition-colors"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border-2 border-accent text-accent px-6 py-3 rounded-xl font-semibold hover:bg-accent-light transition-colors"
            >
              Me contacter
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/gadiaga00dame"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-sm font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/serigne-dame-gadiaga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-sm font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="mailto:serignedame.gadiaga@etu.univ-lyon1.fr"
              className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-sm font-medium"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* Right — profile card */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-accent-mid mx-auto mb-6 flex items-center justify-center text-5xl text-white font-bold shadow-lg">
              SDG
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="bg-white rounded-xl border border-gray-100 p-3 text-center shadow-sm"
                >
                  <div className="text-2xl font-extrabold text-accent">{s.n}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Experience badges */}
            <div className="space-y-3">
              {badges.map((b) => (
                <div
                  key={b.company}
                  className={`${b.bg} rounded-xl p-3.5 flex items-start gap-3`}
                >
                  <span className="text-2xl leading-none mt-0.5">{b.icon}</span>
                  <div>
                    <p className={`font-semibold text-sm ${b.text}`}>{b.company}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{b.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* School */}
            <div className="mt-4 bg-gray-50 rounded-xl p-3.5 border border-gray-100">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                Formation
              </p>
              <p className="text-sm font-semibold text-gray-800">
                🎓 Polytech Lyon — MAM
              </p>
              <p className="text-xs text-gray-500">Double diplôme M2 B2AI-Epi · Lyon 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
