"use client";
import { useState } from "react";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const filters: { key: Project["category"] | "all"; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "ml", label: "Machine Learning" },
  { key: "dl", label: "Deep Learning" },
  { key: "nlp", label: "NLP" },
  { key: "numerical", label: "Modélisation Numérique" },
  { key: "geospatial", label: "Géospatial" },
  { key: "cpp", label: "C++" },
  { key: "sas", label: "SAS" },
];

const tagClass: Record<Project["category"], string> = {
  ml: "tag-accent",
  dl: "bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-medium",
  numerical: "tag-amber",
  nlp: "tag-purple",
  geospatial: "tag-blue",
  cpp: "bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium",
  sas: "bg-pink-50 text-pink-700 text-xs px-2.5 py-1 rounded-full font-medium",
};

const categoryLabel: Record<Project["category"], string> = {
  ml: "Machine Learning",
  dl: "Deep Learning",
  nlp: "NLP",
  numerical: "Modélisation Numérique",
  geospatial: "Géospatial",
  cpp: "C++",
  sas: "SAS Analytics",
};

export default function Projects() {
  const [active, setActive] = useState<Project["category"] | "all">("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Réalisations
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Projets</h2>
          <p className="text-gray-600 max-w-2xl">
            {projects.length} projets couvrant trois domaines : Data Science &amp; Machine
            Learning, Modélisation Numérique et Calcul Scientifique.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setActive(f.key);
                setExpanded(null);
              }}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-all ${
                active === f.key
                  ? "bg-accent text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-accent/40 hover:text-accent"
              }`}
            >
              {f.label}
              {f.key !== "all" && (
                <span className="ml-1.5 opacity-60 text-xs">
                  ({projects.filter((p) => p.category === f.key).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const globalIdx = projects.indexOf(project);
            const isOpen = expanded === globalIdx;
            return (
              <div
                key={globalIdx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-md hover:border-accent/30 transition-all duration-200"
              >
                {/* Card header */}
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={tagClass[project.category]}>
                      {categoryLabel[project.category]}
                    </span>
                    {project.year && (
                      <span className="text-xs text-gray-400 font-medium">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights toggle */}
                {project.highlights.length > 0 && (
                  <>
                    <button
                      onClick={() => setExpanded(isOpen ? null : globalIdx)}
                      className="flex items-center justify-between px-5 py-3 border-t border-gray-100 text-sm text-gray-500 hover:text-accent hover:bg-gray-50 transition-colors w-full text-left"
                    >
                      <span className="font-medium">
                        {isOpen ? "Masquer les détails" : "Voir les détails"}
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 bg-gray-50 border-t border-gray-100">
                        <ul className="space-y-2 mt-3">
                          {project.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 border-t border-gray-100 text-sm text-gray-500 hover:text-accent hover:bg-gray-50 transition-colors"
                  >
                    <Github size={14} />
                    <span>Code source</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
