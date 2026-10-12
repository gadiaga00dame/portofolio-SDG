"use client";
import { Mail, Linkedin, Github, MapPin, GraduationCap } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "Email académique",
    value: "serignedame.gadiaga@etu.univ-lyon1.fr",
    href: "mailto:serignedame.gadiaga@etu.univ-lyon1.fr",
    color: "bg-accent-light text-accent",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/serigne-dame-gadiaga",
    href: "https://linkedin.com/in/serigne-dame-gadiaga",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/gadiaga00dame",
    href: "https://github.com/gadiaga00dame",
    color: "bg-gray-100 text-gray-700",
  },
  {
    icon: <MapPin size={20} />,
    label: "Localisation",
    value: "Lyon, France",
    href: null,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Restons en contact
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 max-w-xl">
            Disponible pour des opportunités en data science, modélisation numérique ou
            calcul scientifique — stage, alternance, collaboration académique ou projet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contacts.map((c) =>
            c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">{c.label}</p>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-accent transition-colors break-all">
                    {c.value}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={c.label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">{c.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{c.value}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Référence académique */}
        <div className="bg-accent-light rounded-2xl p-6 border border-accent/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                Référence Académique
              </p>
              <p className="font-bold text-gray-900">Prof. Ciuperca Gabriela</p>
              <p className="text-sm text-gray-600">
                Maître de Conférences — Mathématiques Appliquées & Statistiques
              </p>
              <p className="text-sm text-gray-500">
                Université Claude Bernard Lyon 1 · Polytech Lyon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
