"use client";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  color: string;
  tags: string[];
  missions: string[];
};

const experiences: Experience[] = [
  {
    company: "Sodiaal Union",
    location: "Lyon (69)",
    role: "Stagiaire Data Science & Machine Learning",
    period: "Avril 2025 — Août 2025",
    color: "bg-accent",
    tags: ["Python", "Machine Learning", "NLP", "Power BI", "SQL", "Azure"],
    missions: [
      "Développement d'un pipeline de classification de réclamations clients par NLP (CamemBERT fine-tuning) pour automatiser le routage vers les équipes qualité",
      "Construction de dashboards Power BI interactifs pour le suivi des KPIs logistiques et de la qualité laitière",
      "Analyse statistique des causes racines de non-conformités produit (SPC, cartes de contrôle Shewhart)",
      "Déploiement d'un modèle de prédiction de la demande laitière (SARIMA + XGBoost) pour optimiser la collecte",
      "Collaboration avec les équipes métier pour la définition des exigences et la restitution des résultats",
    ],
  },
  {
    company: "Legal Quantum",
    location: "Paris (75) — Télétravail",
    role: "Alternant Data Scientist & NLP",
    period: "Septembre 2024 — Janvier 2025",
    color: "bg-purple-600",
    tags: ["Python", "NLP", "BERT", "FastAPI", "LegalTech", "Docker"],
    missions: [
      "Conception et entraînement de modèles NLP pour l'extraction automatique d'entités nommées dans des documents juridiques (contrats, jugements)",
      "Fine-tuning de modèles Transformer (CamemBERT, Legal-BERT) sur corpus juridique francophone annoté",
      "Développement d'une API FastAPI pour la classification automatique de documents légaux",
      "Mise en place d'un pipeline de prétraitement textuel (nettoyage, anonymisation RGPD, segmentation)",
      "Évaluation des performances des modèles (F1 pondéré, rapport de classification par entité)",
    ],
  },
  {
    company: "SNCF Voyageurs",
    location: "Saint-Denis (93)",
    role: "Alternant Ingénieur Data Science & IA",
    period: "Septembre 2026 — Septembre 2027",
    color: "bg-blue-600",
    tags: ["Python", "Data Science", "Intelligence Artificielle", "Maintenance ferroviaire"],
    missions: [],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Parcours Professionnel
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Expériences</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`${exp.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                  >
                    {exp.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-accent font-semibold mt-0.5">{exp.role}</p>
                      </div>
                      {exp.missions.length > 0 && (
                        <button
                          onClick={() => setExpanded(expanded === i ? null : i)}
                          className="text-gray-400 hover:text-accent transition-colors flex-shrink-0 mt-1"
                        >
                          {expanded === i ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Missions */}
              {exp.missions.length > 0 && expanded === i && (
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Missions & réalisations
                  </p>
                  <ul className="space-y-2.5">
                    {exp.missions.map((m, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
