"use client";

const domains = [
  {
    icon: "🤖",
    title: "Data Science & ML",
    description:
      "Classification, régression, clustering, NLP. Du prétraitement jusqu'au déploiement de modèles en production.",
    color: "from-accent to-accent-mid",
  },
  {
    icon: "🔢",
    title: "Modélisation Numérique",
    description:
      "Résolution d'EDO/EDP par méthodes numériques (Euler, RK4, différences finies). Analyse de stabilité et convergence.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "⚡",
    title: "Calcul Scientifique HPC",
    description:
      "Optimisation algorithmique, solveurs linéaires itératifs, simulation Monte Carlo haute performance.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: "🗺️",
    title: "Data Géospatiale",
    description:
      "Analyse de données spatiales, cartographie interactive, API OGC, télédétection satellitaire.",
    color: "from-blue-500 to-cyan-500",
  },
];

const skillGroups = [
  {
    title: "Langages de Programmation",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "MATLAB", level: 75 },
      { name: "SQL", level: 78 },
      { name: "SAS", level: 65 },
      { name: "R", level: 70 },
    ],
  },
  {
    title: "Machine Learning & IA",
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow / Keras", level: 82 },
      { name: "PyTorch", level: 72 },
      { name: "Transformers (HuggingFace)", level: 76 },
      { name: "XGBoost / LightGBM", level: 88 },
      { name: "NLTK / SpaCy", level: 75 },
    ],
  },
  {
    title: "Analyse Numérique",
    skills: [
      { name: "NumPy / SciPy", level: 92 },
      { name: "Méthodes itératives (Jacobi, GS)", level: 85 },
      { name: "Schémas EDO (Euler, RK4)", level: 88 },
      { name: "Monte Carlo & simulation", level: 84 },
      { name: "Optimisation numérique", level: 78 },
    ],
  },
  {
    title: "Données & Infrastructure",
    skills: [
      { name: "Pandas / Polars", level: 93 },
      { name: "GeoPandas / Folium", level: 80 },
      { name: "Power BI / Matplotlib", level: 82 },
      { name: "Docker", level: 68 },
      { name: "Azure / Cloud", level: 65 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Compétences</h2>
        </div>

        {/* Domain cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {domains.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center text-lg mb-4`}
              >
                {d.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-wide">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent-mid rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
