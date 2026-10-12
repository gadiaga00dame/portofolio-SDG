"use client";

const formations = [
  {
    school: "Polytech Lyon — Université Claude Bernard Lyon 1",
    degree: "Diplôme d'Ingénieur — Mathématiques Appliquées & Modélisation (MAM)",
    period: "2022 — 2027",
    location: "Lyon (69)",
    color: "bg-accent",
    icon: "🏛️",
    details: [
      "Spécialisation : Data Science, Modélisation Numérique, Calcul Scientifique Haute Performance",
      "Double diplôme en cours — M2 B2AI-Epi (Biostatistiques, IA, Épidémiologie) · Université Lyon 1 (mention obtenue)",
      "Projets académiques : C++, MATLAB, Python, R, Analyse Numérique, EDP/EDO, Optimisation",
      "Alternance Ingénieur IA & Data Science — SNCF Voyageurs (2026–2027)",
    ],
  },
  {
    school: "ESMT / ESIGELEC — Dakar, Sénégal",
    degree: "Classes Préparatoires aux Grandes Écoles — MPSI",
    period: "2020 — 2022",
    location: "Dakar, Sénégal",
    color: "bg-amber-500",
    icon: "📐",
    details: [
      "Filière Mathématiques, Physique et Sciences de l'Ingénieur (MPSI)",
      "Préparation intensive aux concours des grandes écoles d'ingénieurs",
      "Solides fondamentaux en analyse, algèbre, mécanique et physique",
      "Intégré à Polytech Lyon sur concours national",
    ],
  },
];

export default function Formation() {
  return (
    <section id="formation" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Parcours Académique
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Formation</h2>
        </div>

        <div className="space-y-8">
          {formations.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`${f.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                >
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{f.school}</h3>
                    <div className="flex flex-col items-end gap-1 text-sm text-gray-500">
                      <span className="font-medium">{f.period}</span>
                      <span>📍 {f.location}</span>
                    </div>
                  </div>
                  <p className="text-accent font-semibold mb-4">{f.degree}</p>
                  <ul className="space-y-2">
                    {f.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
