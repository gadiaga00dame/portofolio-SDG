// Bilingual content + data — Serigne Dame GADIAGA portfolio
export const CONTENT = {
  fr: {
    nav: { about: "À propos", experience: "Expériences", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact", cv: "Mon CV" },
    hero: {
      eyebrow: "Étudiant Ingénieur · Polytech Lyon",
      subtitle: "Étudiant ingénieur · Mathématiques Appliquées & Modélisation",
      roles: ["Data Scientist en formation", "Deep Learning & Simulation numérique", "Modélisation & Calcul Haute Performance", "Méthodes numériques & EDP", "Statistiques & Probabilités", "Disponible en alternance · sept. 2026"],
      ctaProjects: "Voir mes projets", ctaContact: "Me contacter", ctaCv: "Télécharger mon CV",
      pillLocation: "Lyon, France", pillSchool: "Polytech Lyon · 4ᵉ année", pillAvail: "Alternance dès sept. 2026"
    },
    stats: { projects: "Projets académiques", internships: "Stages en entreprise", languages: "Langages maîtrisés", years: "Années de formation" },
    about: {
      kicker: "À propos", title: "Profil & parcours",
      p1: "Étudiant en 4ᵉ année de cycle ingénieur à Polytech Lyon (Mathématiques Appliquées & Modélisation), je me spécialise dans la data science, le machine learning, la simulation numérique et l'analyse prédictive. Mon parcours allie rigueur mathématique — issu de CPGE MPSI — et compétences techniques solides en Python, R, SAS, MATLAB et SQL.",
      p2: "J'ai conduit des projets dans des domaines variés : apprentissage profond sur données géophysiques, simulation numérique d'EDP, analyse climatique sur données Météo-France, modélisation multiphysique avec COMSOL, NLP, géospatiale et inférence bayésienne.",
      p3: "Je recherche une alternance d'un an à partir de septembre 2026 (rythme 2 semaines / 2 semaines).",
      languagesTitle: "Langues", interestsTitle: "Centres d'intérêt"
    },
    experience: { kicker: "Expériences professionnelles", title: "Stages & missions" },
    projectsSec: { kicker: "Projets académiques", title: "Classés par domaine", view: "Voir le projet", problemLabel: "Problème", total: "projets" },
    skills: { kicker: "Compétences", title: "Technologies & niveaux de maîtrise", languagesTitle: "Langages" },
    education: { kicker: "Formation", title: "Parcours académique" },
    strengths: { kicker: "Atouts", title: "Ce qui me distingue" },
    contact: {
      kicker: "Contact", title: "Disponible pour une alternance dès septembre 2026",
      lead: "N'hésitez pas à me contacter pour échanger sur un poste ou mon parcours.",
      email: "Email", phone: "Téléphone", location: "Localisation", linkedin: "LinkedIn",
      refTitle: "Référence académique disponible sur demande",
      refName: "Prof. Ciuperca Ionel Sorinel — Responsable MAM, Polytech Lyon", cta: "M'écrire un email"
    },
    footer: "Polytech Lyon · Lyon, France",
    backTop: "Haut de page",
    detail: { back: "Retour au portfolio", problem: "Problème", result: "Résultat & objectif", stack: "Compétences mobilisées", resources: "Ressources du projet", resourcesNote: "Présentation, livrable ou vidéo — à ajouter prochainement.", prev: "Précédent", next: "Suivant", domain: "Domaine", date: "Période", notFound: "Projet introuvable", backLink: "Revenir aux projets" }
  },
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact", cv: "My CV" },
    hero: {
      eyebrow: "Engineering Student · Polytech Lyon",
      subtitle: "Engineering student · Applied Mathematics & Modelling",
      roles: ["Data Scientist in training", "Deep Learning & Numerical Simulation", "Modelling & High-Performance Computing", "Numerical methods & PDEs", "Statistics & Probability", "Available for apprenticeship · Sept. 2026"],
      ctaProjects: "View my projects", ctaContact: "Get in touch", ctaCv: "Download my CV",
      pillLocation: "Lyon, France", pillSchool: "Polytech Lyon · 4th year", pillAvail: "Apprenticeship from Sept. 2026"
    },
    stats: { projects: "Academic projects", internships: "Company internships", languages: "Languages mastered", years: "Years of training" },
    about: {
      kicker: "About", title: "Profile & background",
      p1: "A 4th-year engineering student at Polytech Lyon (Applied Mathematics & Modelling), I specialise in data science, machine learning, numerical simulation and predictive analysis. My path blends mathematical rigour — from CPGE MPSI preparatory classes — with solid technical skills in Python, R, SAS, MATLAB and SQL.",
      p2: "I have led projects across varied fields: deep learning on geophysical data, numerical simulation of PDEs, climate analysis on Météo-France data, multiphysics modelling with COMSOL, NLP, geospatial and Bayesian inference.",
      p3: "I am looking for a one-year apprenticeship starting September 2026 (2 weeks / 2 weeks rhythm).",
      languagesTitle: "Languages", interestsTitle: "Interests"
    },
    experience: { kicker: "Professional experience", title: "Internships & missions" },
    projectsSec: { kicker: "Academic projects", title: "Sorted by domain", view: "View project", problemLabel: "Challenge", total: "projects" },
    skills: { kicker: "Skills", title: "Technologies & proficiency levels", languagesTitle: "Languages" },
    education: { kicker: "Education", title: "Academic path" },
    strengths: { kicker: "Strengths", title: "What sets me apart" },
    contact: {
      kicker: "Contact", title: "Available for an apprenticeship from September 2026",
      lead: "Feel free to reach out to discuss a role or my background.",
      email: "Email", phone: "Phone", location: "Location", linkedin: "LinkedIn",
      refTitle: "Academic reference available on request",
      refName: "Prof. Ciuperca Ionel Sorinel — Head of MAM, Polytech Lyon", cta: "Send me an email"
    },
    footer: "Polytech Lyon · Lyon, France",
    backTop: "Back to top",
    detail: { back: "Back to portfolio", problem: "Challenge", result: "Result & objective", stack: "Skills used", resources: "Project resources", resourcesNote: "Slides, deliverable or video — to be added soon.", prev: "Previous", next: "Next", domain: "Domain", date: "Period", notFound: "Project not found", backLink: "Back to projects" }
  }
};

export const INTERESTS = {
  fr: ["Football", "Scrabble", "Projets data personnels"],
  en: ["Football", "Scrabble", "Personal data projects"]
};

export const LANGUAGES_SPOKEN = [
  { label: { fr: "Français", en: "French" }, level: { fr: "C2 · maternel", en: "C2 · native" }, value: 100, flag: "🇫🇷" },
  { label: { fr: "Anglais", en: "English" }, level: { fr: "B2 · avancé", en: "B2 · advanced" }, value: 72, flag: "🇬🇧" }
];

export const STAT_VALUES = { projects: 37, internships: 2, languages: 7, years: 4 };

export const EXPERIENCES = [
  {
    company: "Sodiaal Union", place: "Lyon",
    role: { fr: "Stagiaire Data Science", en: "Data Science Intern" },
    period: { fr: "Août 2025 — Février 2026", en: "Aug 2025 — Feb 2026" },
    bullets: {
      fr: [
        "Revue bibliographique sur le stress thermique et la production laitière (indices THI, ETIC, CCI, HLI)",
        "Traitement de données climatiques Météo-France (SAFRAN, ~8 Go) et collecte laitière (~9 000 éleveurs)",
        "Analyse statistique de l'impact du changement climatique sur le bien-être animal",
        "Modélisation prédictive ML du risque climatique à l'horizon 2050 (scénarios DRIAS)"
      ],
      en: [
        "Literature review on heat stress and milk production (THI, ETIC, CCI, HLI indices)",
        "Processing of Météo-France climate data (SAFRAN, ~8 GB) and dairy collection (~9,000 farmers)",
        "Statistical analysis of climate change impact on animal welfare",
        "Predictive ML modelling of climate risk to 2050 (DRIAS scenarios)"
      ]
    }
  },
  {
    company: "Legal Quantum", place: "Lyon",
    role: { fr: "Stagiaire Data Science & Développement Web", en: "Data Science & Web Development Intern" },
    period: { fr: "Octobre 2024 — Décembre 2024", en: "October 2024 — December 2024" },
    bullets: {
      fr: [
        "Collecte et structuration de données juridiques (licenciements, contentieux prud'homaux)",
        "Anonymisation et classification de données sensibles (RGPD)",
        "Conception d'une base de données relationnelle sous PostgreSQL",
        "Analyse exploratoire et premiers modèles prédictifs des montants d'accords"
      ],
      en: [
        "Collection and structuring of legal data (dismissals, labour-court litigation)",
        "Anonymisation and classification of sensitive data (GDPR)",
        "Design of a relational database in PostgreSQL",
        "Exploratory analysis and first predictive models of settlement amounts"
      ]
    }
  }
];

export const SKILLS = {
  languages: [
    { name: "Python", value: 90 }, { name: "R", value: 85 }, { name: "MATLAB", value: 82 },
    { name: "SQL", value: 80 }, { name: "SAS", value: 75 }
  ],
  groups: [
    { title: { fr: "ML / IA", en: "ML / AI" }, items: ["Scikit-learn", "Keras", "PyTorch", "XGBoost", "Random Forest", "SVM", "AdamW", "SSIM Loss"] },
    { title: { fr: "Deep Learning", en: "Deep Learning" }, items: ["ResUNet", "CBAM", "CNN", "Skip connections", "MC Dropout", "TensorBoard"] },
    { title: { fr: "NLP & Vision", en: "NLP & Vision" }, items: ["TF-IDF", "Embeddings", "Naïve Bayes", "NLTK"] },
    { title: { fr: "Simulation numérique", en: "Numerical simulation" }, items: ["Volumes Finis", "Éléments Finis", "Différences Finies", "GMRES / Krylov", "Crank-Nicolson", "Schéma de Roe", "COMSOL", "FreeFEM++"] },
    { title: { fr: "Statistiques & Proba", en: "Statistics & Probability" }, items: ["ARIMA/SARIMA", "MCMC / Metropolis-Hastings", "Bayes", "Chaînes de Markov", "Files M/M/1", "Séries temporelles"] },
    { title: { fr: "Données & BDD", en: "Data & DB" }, items: ["PostgreSQL", "Pandas", "data.table", "ETL", "GeoDataFrame"] },
    { title: { fr: "Visualisation", en: "Visualization" }, items: ["Power BI", "Metabase", "Matplotlib", "Seaborn", "Folium"] }
  ]
};

export const EDUCATION = [
  {
    school: "Polytech Lyon",
    degree: { fr: "Cycle Ingénieur — Mathématiques Appliquées & Modélisation", en: "Engineering Degree — Applied Mathematics & Modelling" },
    period: { fr: "Sept. 2023 — Juil. 2027 · Lyon, France", en: "Sep 2023 — Jul 2027 · Lyon, France" },
    note: { fr: "ML, analyse de données, modélisation numérique, EDP, volumes finis, éléments finis, stochastique", en: "ML, data analysis, numerical modelling, PDEs, finite volumes, finite elements, stochastic methods" }
  },
  {
    school: "ESMT-ESIGELEC — Collège Sacré Cœur",
    degree: { fr: "Classes Préparatoires Scientifiques — MPSI", en: "Scientific Preparatory Classes — MPSI" },
    period: { fr: "Sept. 2021 — Sept. 2023 · Dakar, Sénégal", en: "Sep 2021 — Sep 2023 · Dakar, Senegal" },
    note: { fr: "Mathématiques, Physique, Sciences de l'Ingénieur", en: "Mathematics, Physics, Engineering Sciences" }
  }
];

export const STRENGTHS = [
  { icon: "spark", title: { fr: "Autonomie", en: "Autonomy" }, desc: { fr: "Conduite de projets de A à Z avec supervision minimale", en: "Driving projects end to end with minimal supervision" } },
  { icon: "team", title: { fr: "Travail en équipe", en: "Teamwork" }, desc: { fr: "Collaboration avec des équipes multidisciplinaires", en: "Collaboration with multidisciplinary teams" } },
  { icon: "compass", title: { fr: "Rigueur scientifique", en: "Scientific rigour" }, desc: { fr: "Culture de la preuve, CPGE MPSI + cycle ingénieur", en: "A culture of proof, from CPGE MPSI to engineering school" } },
  { icon: "globe", title: { fr: "Adaptabilité", en: "Adaptability" }, desc: { fr: "Parcours international, aisance dans des contextes variés", en: "International background, at ease in varied contexts" } }
];

export const PROJECTS_TOTAL = 37;

export const CATS = {
  ml: { label: { fr: "Machine Learning", en: "Machine Learning" }, color: "#2A4B9B" },
  dl: { label: { fr: "Deep Learning", en: "Deep Learning" }, color: "#C0392B" },
  nlp: { label: { fr: "NLP / Text Mining", en: "NLP / Text Mining" }, color: "#7D3C98" },
  geo: { label: { fr: "Géospatial", en: "Geospatial" }, color: "#1A6B3A" },
  num: { label: { fr: "Méthodes numériques", en: "Numerical methods" }, color: "#A35415" },
  num2: { label: { fr: "Simulation numérique & EDP", en: "Numerical simulation & PDEs" }, color: "#0E7490" },
  comsol: { label: { fr: "Multiphysique & Éléments Finis", en: "Multiphysics & Finite Elements" }, color: "#6D28D9" },
  stoch: { label: { fr: "Stochastique & Simulation", en: "Stochastic & Simulation" }, color: "#B45309" },
  sas: { label: { fr: "SAS / Analytics", en: "SAS / Analytics" }, color: "#1A5276" }
};

export const FILTERS = [
  { id: "all", label: { fr: "Tous", en: "All" } },
  { id: "ml", label: { fr: "Machine Learning", en: "Machine Learning" } },
  { id: "dl", label: { fr: "Deep Learning", en: "Deep Learning" } },
  { id: "nlp", label: { fr: "NLP", en: "NLP" } },
  { id: "geo", label: { fr: "Géospatial", en: "Geospatial" } },
  { id: "num", label: { fr: "Méthodes num.", en: "Numerical" } },
  { id: "num2", label: { fr: "Simulation & EDP", en: "Simulation & PDEs" } },
  { id: "comsol", label: { fr: "Multiphysique & FEM", en: "Multiphysics & FEM" } },
  { id: "stoch", label: { fr: "Stochastique", en: "Stochastic" } },
  { id: "sas", label: { fr: "SAS / Analytics", en: "SAS / Analytics" } }
];

export const PROJECTS = [
  // ── MACHINE LEARNING ──
  { id: "qualite-air", cat: "ml", date: { fr: "Mars–Juin 2025", en: "Mar–Jun 2025" }, title: { fr: "Qualité de l'air : analyse & prévision des polluants urbains", en: "Air quality: urban pollutant analysis & forecasting" }, problem: { fr: "Anticiper les pics de pollution en milieu urbain.", en: "Anticipate urban pollution peaks." }, result: { fr: "Notebooks comparant les stratégies de prévision avec cartes.", en: "Notebooks comparing forecasting strategies with maps." }, skills: ["ARIMA", "Prophet", "GBM", "Folium", "Python"] },
  { id: "elections", cat: "ml", date: { fr: "Juin 2024", en: "Jun 2024" }, title: { fr: "Prédiction d'élections présidentielles", en: "Presidential election prediction" }, problem: { fr: "Estimer le score d'élections à partir d'historiques.", en: "Estimate election scores from historical data." }, result: { fr: "Pipeline réplicable + notebook clair.", en: "Replicable pipeline + clear notebook." }, skills: ["LogReg", "SVM", "Random Forest", "Python"] },
  { id: "housing", cat: "ml", date: { fr: "Mai 2024", en: "May 2024" }, title: { fr: "Pricing de l'immobilier (Housing Prices)", en: "Real-estate pricing (Housing Prices)" }, problem: { fr: "Prédire les prix de vente à partir de caractéristiques structurées.", en: "Predict sale prices from structured features." }, result: { fr: "Modèle de pricing reproductible.", en: "Reproducible pricing model." }, skills: ["Ridge", "Lasso", "XGBoost", "Pipeline", "Python"] },
  { id: "iris", cat: "ml", date: { fr: "Jan.–Fév. 2024", en: "Jan–Feb 2024" }, title: { fr: "Classification Iris de Fisher", en: "Fisher's Iris classification" }, problem: { fr: "Classifier des espèces d'iris à partir de mesures.", en: "Classify iris species from measurements." }, result: { fr: "Benchmark pédagogique biais/variance.", en: "Pedagogical bias/variance benchmark." }, skills: ["KNN", "SVM", "GridSearchCV", "Python"] },
  { id: "surapprentissage", cat: "ml", date: { fr: "Déc. 2023", en: "Dec 2023" }, title: { fr: "Sur-apprentissage & échantillonnage", en: "Overfitting & sampling" }, problem: { fr: "Comprendre l'overfitting et l'impact des splits.", en: "Understand overfitting and the impact of splits." }, result: { fr: "Recommandations pratiques sur la taille d'échantillon.", en: "Practical recommendations on sample size." }, skills: ["Learning curves", "Validation croisée", "Python"] },
  { id: "assurance", cat: "ml", date: { fr: "Août–Sept. 2025", en: "Aug–Sep 2025" }, title: { fr: "Assurance — classification & scoring de risque", en: "Insurance — risk classification & scoring" }, problem: { fr: "Prédire un événement (sinistre, souscription ou churn).", en: "Predict an event (claim, subscription or churn)." }, result: { fr: "Scorecard simple et interprétable.", en: "Simple, interpretable scorecard." }, skills: ["Régression logistique", "Boosting", "AUC/Gini", "SAS"] },

  // ── DEEP LEARNING ──
  { id: "resunet-soussol", cat: "dl", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Reconstruction du sous-sol par apprentissage profond — ResUNet + CBAM", en: "Subsurface reconstruction with deep learning — ResUNet + CBAM" }, problem: { fr: "Reconstruire des cartes de vitesse sismique à partir d'enregistrements de surface.", en: "Reconstruct seismic velocity maps from surface recordings." }, result: { fr: "RMSE = 134,47 m/s · Corrélation = 0,9512 · 33,5M paramètres · 100 époques.", en: "RMSE = 134.47 m/s · Correlation = 0.9512 · 33.5M params · 100 epochs." }, skills: ["PyTorch", "ResUNet", "CBAM", "AdamW", "SSIM Loss", "Kaggle"] },
  { id: "fashion-mnist", cat: "dl", date: { fr: "Jan. 2024", en: "Jan 2024" }, title: { fr: "CNN — Fashion MNIST (Zalando)", en: "CNN — Fashion MNIST (Zalando)" }, problem: { fr: "Classer des images de vêtements avec CNN.", en: "Classify clothing images with a CNN." }, result: { fr: "Amélioration nette vs baseline.", en: "Clear improvement over baseline." }, skills: ["CNN", "PyTorch", "Keras", "TensorBoard"] },
  { id: "intro-cnn", cat: "dl", date: { fr: "Nov. 2023", en: "Nov 2023" }, title: { fr: "Deep Learning : Introduction aux CNN", en: "Deep Learning: Introduction to CNNs" }, problem: { fr: "Construire une boîte à outils pédagogique pour CNN.", en: "Build a pedagogical CNN toolbox." }, result: { fr: "Support de référence pour les CNN.", en: "Reference material for CNNs." }, skills: ["PyTorch", "Keras", "Convolution"] },
  { id: "computer-vision", cat: "dl", date: { fr: "2024", en: "2024" }, title: { fr: "Computer Vision — Classification d'images", en: "Computer Vision — Image classification" }, problem: { fr: "Classification d'images par réseaux convolutifs.", en: "Image classification with convolutional networks." }, result: { fr: "Évaluation complète (précision, rappel, F1).", en: "Full evaluation (precision, recall, F1)." }, skills: ["Keras", "CNN", "Python"] },

  // ── NLP ──
  { id: "opinions-polarite", cat: "nlp", date: { fr: "Juil.–Août 2025", en: "Jul–Aug 2025" }, title: { fr: "Exploration d'opinions & détection de polarité", en: "Opinion mining & polarity detection" }, problem: { fr: "Analyser le sentiment dans des textes.", en: "Analyse sentiment in text." }, result: { fr: "Classifieur baseline fiable et déployable.", en: "Reliable, deployable baseline classifier." }, skills: ["TF-IDF", "Embeddings", "Naïve Bayes", "SVM", "Python"] },
  { id: "reconnaissance-vocale", cat: "nlp", date: { fr: "Août 2025", en: "Aug 2025" }, title: { fr: "Reconnaissance vocale (prototype)", en: "Speech recognition (prototype)" }, problem: { fr: "Chaîne audio → texte/commande.", en: "Audio → text/command chain." }, result: { fr: "Base technique pour projet ASR.", en: "Technical base for an ASR project." }, skills: ["recvoc", "I/O audio", "Python"] },
  { id: "spam", cat: "nlp", date: { fr: "2025", en: "2025" }, title: { fr: "Détection de commentaires malveillants (spam)", en: "Malicious comment (spam) detection" }, problem: { fr: "Classifier des commentaires spam.", en: "Classify spam comments." }, result: { fr: "Random Forest avec validation croisée.", en: "Random Forest with cross-validation." }, skills: ["NLP", "TF-IDF", "Random Forest", "Python"] },

  // ── GÉOSPATIAL ──
  { id: "geodonnees", cat: "geo", date: { fr: "Avr.–Mai 2025", en: "Apr–May 2025" }, title: { fr: "Géodonnées — Classification & cartographie", en: "Geodata — Classification & mapping" }, problem: { fr: "Analyser des phénomènes spatiaux.", en: "Analyse spatial phenomena." }, result: { fr: "Notebook étude géo + modèles.", en: "Geo study notebook + models." }, skills: ["GeoDataFrame", "Folium", "CRS", "Python"] },
  { id: "cinemas", cat: "geo", date: { fr: "Mai 2025", en: "May 2025" }, title: { fr: "Localisation des cinémas (Geo data)", en: "Cinema location mapping (geo data)" }, problem: { fr: "Manipuler un jeu géographique pour analyses simples.", en: "Handle a geographic dataset for simple analyses." }, result: { fr: "Cartes lisibles et réutilisables.", en: "Readable, reusable maps." }, skills: ["Projection CRS", "Cartes de densité", "Folium"] },

  // ── MÉTHODES NUMÉRIQUES ──
  { id: "proies-predateurs", cat: "num", date: { fr: "Mai–Juin 2025", en: "May–Jun 2025" }, title: { fr: "Dynamiques proies–prédateurs avec ressource", en: "Predator–prey dynamics with resource" }, problem: { fr: "Comprendre les régimes d'un système avec ressource limitée.", en: "Understand regimes of a system with limited resource." }, result: { fr: "Scénarios, seuils critiques et conditions d'équilibre.", en: "Scenarios, critical thresholds and equilibrium conditions." }, skills: ["Lotka-Volterra", "EDO", "Python", "MATLAB"] },
  { id: "dynamique-populations", cat: "num", date: { fr: "Avr. 2024", en: "Apr 2024" }, title: { fr: "Modèles de dynamique des populations", en: "Population dynamics models" }, problem: { fr: "Simuler systèmes non linéaires (prédateur-proie).", en: "Simulate non-linear systems (predator-prey)." }, result: { fr: "Notebooks pédagogiques.", en: "Pedagogical notebooks." }, skills: ["EDO", "Intégration numérique", "MATLAB"] },
  { id: "euler-stabilite", cat: "num", date: { fr: "Fév.–Mars 2024", en: "Feb–Mar 2024" }, title: { fr: "Schémas d'Euler & stabilité", en: "Euler schemes & stability" }, problem: { fr: "Résoudre numériquement des EDO.", en: "Numerically solve ODEs." }, result: { fr: "Illustrations des limites de chaque schéma.", en: "Illustration of each scheme's limits." }, skills: ["EDO", "Schémas numériques", "MATLAB"] },
  { id: "solveurs-iteratifs", cat: "num", date: { fr: "Avr.–Mai 2024", en: "Apr–May 2024" }, title: { fr: "Solveurs itératifs (Jacobi, Gauss-Seidel)", en: "Iterative solvers (Jacobi, Gauss-Seidel)" }, problem: { fr: "Résoudre Ax=b pour grandes matrices creuses.", en: "Solve Ax=b for large sparse matrices." }, result: { fr: "Base de comparaison pour Analyse Numérique.", en: "Comparison basis for Numerical Analysis." }, skills: ["Algorithmes itératifs", "MATLAB"] },

  // ── SIMULATION & EDP ──
  { id: "solveurs-grande-echelle", cat: "num2", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Solveurs linéaires à grande échelle — Gradient Conjugué vs méthodes directes", en: "Large-scale linear solvers — Conjugate Gradient vs direct methods" }, problem: { fr: "Comparer les performances de solveurs directs et itératifs sur des systèmes issus de la discrétisation du Laplacien en 1D, 2D et 3D (jusqu'à N ≈ 10⁶ inconnues).", en: "Compare direct and iterative solvers on systems from the Laplacian in 1D/2D/3D (up to N ≈ 10⁶ unknowns)." }, result: { fr: "Analyse de scalabilité et de conditionnement — avantage du CG préconditionné à grande échelle.", en: "Scalability and conditioning analysis — preconditioned CG wins at large scale." }, skills: ["Gradient Conjugué", "UMFPACK", "Matrices creuses", "Produit de Kronecker", "MATLAB"] },
  { id: "chaleur-stabilite", cat: "num2", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Équation de la chaleur — Stabilité et convergence des schémas aux différences finies", en: "Heat equation — Stability and convergence of finite-difference schemes" }, problem: { fr: "Résoudre numériquement l'équation parabolique de la chaleur et étudier la stabilité des schémas selon la condition CFL.", en: "Numerically solve the parabolic heat equation and study scheme stability via the CFL condition." }, result: { fr: "Validation par solution analytique (séries de Fourier) — convergence ordre 2 avec Crank-Nicolson.", en: "Validated against the analytical (Fourier) solution — order-2 convergence with Crank-Nicolson." }, skills: ["Euler explicite", "Crank-Nicolson", "CFL", "Différences finies", "Python", "MATLAB"] },
  { id: "frequences-pont", cat: "num2", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Fréquences propres d'une structure de pont par méthodes de Krylov", en: "Natural frequencies of a bridge structure via Krylov methods" }, problem: { fr: "Calculer les premiers modes de vibration d'une structure élastique 2D/3D par algorithme d'Arnoldi avec stratégie Shift-and-Invert.", en: "Compute the first vibration modes of an elastic 2D/3D structure by solving an eigenvalue problem with Arnoldi and Shift-and-Invert." }, result: { fr: "Extraction des 5 premiers modes propres — visualisation des déformées de flexion et torsion.", en: "Extraction of the first 5 modes — bending and torsion shapes visualised." }, skills: ["Arnoldi", "Shift-and-Invert", "GMRES", "ILU", "Équations de Navier", "MATLAB/Python"] },
  { id: "ondes-chocs", cat: "num2", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Propagation d'ondes et chocs — Schémas volumes finis pour lois de conservation", en: "Wave propagation and shocks — Finite-volume schemes for conservation laws" }, problem: { fr: "Résoudre numériquement des lois de conservation hyperboliques scalaires par des schémas volumes finis et analyser dissipation et dispersion.", en: "Numerically solve scalar hyperbolic conservation laws with finite-volume schemes and analyse dissipation/dispersion." }, result: { fr: "Comparaison Lax-Friedrichs, Lax-Wendroff, Upwind — mise en évidence des chocs et oscillations.", en: "Comparison of Lax-Friedrichs, Lax-Wendroff, Upwind — shocks and oscillations highlighted." }, skills: ["Volumes Finis", "Lax-Wendroff", "Upwind", "Burgers", "Python", "MATLAB"] },
  { id: "trafic-godunov", cat: "num2", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Modélisation du trafic routier par schémas de Godunov et Roe", en: "Road-traffic modelling with Godunov and Roe schemes" }, problem: { fr: "Simuler l'écoulement de véhicules sur une route par une loi de conservation non-linéaire avec flux de Greenshields.", en: "Simulate vehicle flow on a road via a non-linear conservation law with a Greenshields flux." }, result: { fr: "Schéma de Roe converge avec précision sur la formation d'embouteillages.", en: "The Roe scheme accurately captures traffic-jam formation." }, skills: ["Schéma de Godunov", "Schéma de Roe", "Trafic routier", "Loi non-linéaire", "MATLAB"] },
  { id: "gaz-isotherme", cat: "num2", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Simulation d'un gaz isotherme — Schéma de Roe vectoriel", en: "Isothermal gas simulation — Vectorial Roe scheme" }, problem: { fr: "Résoudre un système non-linéaire 2×2 de lois de conservation (gaz isotherme) par décomposition en valeurs propres de la matrice de Roe.", en: "Solve a non-linear 2×2 system of conservation laws (isothermal gas) via eigen-decomposition of the Roe matrix." }, result: { fr: "Propagation correcte des deux ondes caractéristiques — validation sur données analytiques.", en: "Correct propagation of both characteristic waves — validated on analytical data." }, skills: ["Schéma de Roe vectoriel", "Système 2×2", "Décomposition spectrale", "Python", "MATLAB"] },
  { id: "chaleur-neumann", cat: "num2", date: { fr: "Juin 2025", en: "Jun 2025" }, title: { fr: "Équation de la chaleur 1D — Conditions de Neumann", en: "1D heat equation — Neumann conditions" }, problem: { fr: "Implémenter des schémas d'Euler progressif avec conditions de Neumann d'ordre 2 et analyser la stabilité.", en: "Implement forward-Euler schemes with order-2 Neumann conditions and analyse stability." }, result: { fr: "Condition de stabilité ∆t/h² ≤ 0,5 validée numériquement.", en: "Stability condition ∆t/h² ≤ 0.5 verified numerically." }, skills: ["Euler progressif", "Neumann", "Différences finies", "Stabilité", "MATLAB"] },

  // ── MULTIPHYSIQUE & FEM ──
  { id: "navier-stokes", cat: "comsol", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Écoulements de Navier-Stokes — Canal avec marche descendante", en: "Navier-Stokes flow — Channel with backward-facing step" }, problem: { fr: "Modéliser un écoulement laminaire incompressible dans un canal avec singularité géométrique et analyser l'influence du nombre de Reynolds.", en: "Model an incompressible laminar flow in a channel with a geometric singularity and analyse the Reynolds influence." }, result: { fr: "Champ de vitesses et pression simulés — identification du point de recollement.", en: "Velocity and pressure fields simulated — flow reattachment point identified." }, skills: ["Navier-Stokes", "CFD", "Reynolds", "COMSOL", "Éléments Finis"] },
  { id: "contraintes-fem", cat: "comsol", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Analyse des contraintes dans une structure mécanique par éléments finis", en: "Stress analysis of a mechanical structure by finite elements" }, problem: { fr: "Calculer déplacements, déformées et distribution des contraintes (Von Mises) dans une pièce en acier, en 2D et 3D.", en: "Compute displacements, deformation and stress distribution (Von Mises) in a steel part, in 2D and 3D." }, result: { fr: "Champs de contraintes et déformations résolus — extension 3D par extrusion B-Rep.", en: "Stress and strain fields solved — 3D extension via B-Rep extrusion." }, skills: ["Élastostatique", "Plane stress", "Von Mises", "COMSOL", "3D B-Rep"] },
  { id: "poisson-singulier", cat: "comsol", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "EDP elliptiques sur domaines singuliers — Équation de Poisson 2D", en: "Elliptic PDEs on singular domains — 2D Poisson equation" }, problem: { fr: "Résoudre l'équation de Poisson sur un disque tronqué de différents angles et étudier la régularité de la solution.", en: "Solve the Poisson equation on a truncated disk of varying angle and study solution regularity." }, result: { fr: "Perte de régularité visualisée — gradient de plus en plus singulier quand α → 0.", en: "Regularity loss visualised — gradient increasingly singular as α → 0." }, skills: ["Poisson 2D", "Singularité", "Éléments Finis", "COMSOL", "FreeFEM++"] },
  { id: "multiphysique-variationnel", cat: "comsol", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Modélisation multiphysique par formulation variationnelle", en: "Multiphysics modelling by variational formulation" }, problem: { fr: "Résoudre des problèmes couplés (potentiel électrique, diffusion thermique, convection-diffusion) via les formes faible et générale de COMSOL.", en: "Solve coupled problems (electric potential, thermal diffusion, convection-diffusion) via COMSOL weak and general forms." }, result: { fr: "Validation cross-formulation — potentiel électrique et flux thermique restitués avec précision.", en: "Cross-formulation validation — electric potential and thermal flux accurately reproduced." }, skills: ["Forme faible", "Forme générale", "Couplage multiphysique", "COMSOL", "EDP couplées"] },

  // ── STOCHASTIQUE ──
  { id: "files-mm1", cat: "stoch", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Files d'attente et processus de Poisson — Système M/M/1", en: "Queues and Poisson processes — M/M/1 system" }, problem: { fr: "Simuler un processus de Poisson par deux méthodes, puis modéliser une file M/M/1 par la méthode des horloges et étudier son équilibre.", en: "Simulate a Poisson process by two methods, then model an M/M/1 queue with the clock method and study its equilibrium." }, result: { fr: "Distribution stationnaire et temps de séjour validés — instabilité visible pour µ < λ.", en: "Stationary distribution and sojourn time validated — instability visible for µ < λ." }, skills: ["Processus de Poisson", "File M/M/1", "Méthode des horloges", "Simulation", "Python"] },
  { id: "mcmc-metropolis", cat: "stoch", date: { fr: "2025–2026", en: "2025–2026" }, title: { fr: "Inférence bayésienne par MCMC — Metropolis-Hastings", en: "Bayesian inference by MCMC — Metropolis-Hastings" }, problem: { fr: "Estimer une loi a posteriori par Metropolis-Hastings avec prior de Jeffreys et comparer à la densité analytique.", en: "Estimate a posterior law with Metropolis-Hastings using a Jeffreys prior and compare to the analytical density." }, result: { fr: "Convergence de l'échantillon MCMC (N=50 000) vers la loi a posteriori théorique.", en: "MCMC sample (N=50,000) converges to the theoretical posterior." }, skills: ["MCMC", "Metropolis-Hastings", "Prior de Jeffreys", "Inférence bayésienne", "R", "Python"] },

  // ── SAS / ANALYTICS ──
  { id: "target-gift", cat: "sas", date: { fr: "Mai 2025", en: "May 2025" }, title: { fr: "Target Gift Flag — Gradient Boosting", en: "Target Gift Flag — Gradient Boosting" }, problem: { fr: "Classer des donateurs potentiels.", en: "Classify potential donors." }, result: { fr: "Gain de précision vs baseline.", en: "Accuracy gain over baseline." }, skills: ["Gradient Boosting", "SAS", "Excel"] },
  { id: "organics", cat: "sas", date: { fr: "Mai 2024", en: "May 2024" }, title: { fr: "Organics — Régression logistique", en: "Organics — Logistic regression" }, problem: { fr: "Prédire la probabilité d'achat de produits biologiques.", en: "Predict the probability of buying organic products." }, result: { fr: "Score interprétable pour ciblage marketing.", en: "Interpretable score for marketing targeting." }, skills: ["Régression logistique", "AUC/Gini", "SAS", "Excel"] }
];

export const CONTACT_LINKS = {
  emailValue: "gadiaga00dame@gmail.com",
  phoneValue: "+33 7 67 54 50 88",
  locationValue: { fr: "Lyon, France", en: "Lyon, France" },
  linkedinValue: "serigne-dame-gadiaga",
  linkedinUrl: "https://www.linkedin.com/in/serigne-dame-gadiaga/",
  cvUrl: "CV_Serigne_Dame_GADIAGA.pdf",
  photoUrl: "photo.jpg"
};

export const CVS = {
  ui: {
    fr: { kicker: "Mon CV", title: "Je m'adapte à votre secteur — choisissez votre profil", lead: "Trois expertises. Un seul ingénieur. À vous de choisir.", download: "Télécharger ce CV", back: "Retour au portfolio" },
    en: { kicker: "My résumé", title: "I adapt to your field — pick your profile", lead: "Three expertises. One engineer. Your call.", download: "Download this CV", back: "Back to portfolio" }
  },
  items: [
    { id: "data", icon: "chart", title: { fr: "Data Science & IA", en: "Data Science & AI" }, desc: { fr: "Machine learning, deep learning, NLP et analyse de données.", en: "Machine learning, deep learning, NLP and data analysis." }, tags: ["Python", "Machine Learning", "Deep Learning", "NLP"], url: "CV_DataScience_ML_Serigne_Dame_GADIAGA.docx" },
    { id: "simu", icon: "wave", title: { fr: "Simulation Numérique & Modélisation", en: "Numerical Simulation & Modelling" }, desc: { fr: "Méthodes numériques, EDP, volumes & éléments finis, COMSOL.", en: "Numerical methods, PDEs, finite volumes & elements, COMSOL." }, tags: ["EDP", "Volumes Finis", "COMSOL", "MATLAB"], url: "CV_Simulation_Modelisation_Serigne_Dame_GADIAGA.docx" },
    { id: "hpc", icon: "cpu", title: { fr: "Calcul Haute Performance", en: "High-Performance Computing" }, desc: { fr: "Solveurs à grande échelle, Krylov, calcul parallèle et optimisation.", en: "Large-scale solvers, Krylov methods, parallel computing and optimisation." }, tags: ["Krylov / GMRES", "Gradient Conjugué", "Matrices creuses", "C / C++"], url: "CV_HPC_Calcul_Scientifique_Serigne_Dame_GADIAGA.docx" }
  ]
};
