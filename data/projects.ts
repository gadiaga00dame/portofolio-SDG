export type Project = {
  title: string;
  category: "ml" | "dl" | "nlp" | "numerical" | "geospatial" | "cpp" | "sas";
  tags: string[];
  description: string;
  highlights: string[];
  github?: string;
  year?: string;
};

export const projects: Project[] = [
  // ── Machine Learning ────────────────────────────────────────────────
  {
    title: "Prédiction Élections Présidentielles",
    category: "ml",
    tags: ["Python", "Scikit-learn", "Random Forest", "GBoost", "Pandas"],
    year: "2024",
    description:
      "Modélisation et prédiction des résultats électoraux à partir de données socio-économiques départementales françaises. Comparaison de plusieurs algorithmes supervisés.",
    highlights: [
      "Collecte et nettoyage de données électorales et socio-économiques (INSEE)",
      "Comparaison Random Forest, Gradient Boosting, SVM, Régression logistique",
      "Analyse d'importance des variables (Gini, SHAP)",
      "Validation croisée k-fold et optimisation des hyperparamètres",
      "Visualisations cartographiques des prédictions par département",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Classification Risque Assurances",
    category: "ml",
    tags: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering"],
    year: "2024",
    description:
      "Prédiction du risque client dans le secteur assurantiel. Sélection de variables, traitement des déséquilibres de classes et évaluation par métriques métier.",
    highlights: [
      "Traitement des valeurs manquantes et encodage des variables catégorielles",
      "Techniques de rééchantillonnage (SMOTE, undersampling) pour classes déséquilibrées",
      "Optimisation F1-score et AUC-ROC selon les contraintes métier",
      "Pipeline Scikit-learn complet avec GridSearchCV",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Titanic — Survie des Passagers",
    category: "ml",
    tags: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
    year: "2023",
    description:
      "Prédiction de la survie des passagers du Titanic. Projet fondateur de data science avec ingénierie de features avancée et ensemble methods.",
    highlights: [
      "Analyse exploratoire approfondie (EDA) avec visualisations Seaborn/Matplotlib",
      "Feature engineering : extraction du titre, taille famille, tarif/classe",
      "Comparaison Logistic Regression, Decision Tree, Random Forest, KNN",
      "Score Kaggle Top 15% avec ensemble voting classifier",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Régression Prix Immobiliers",
    category: "ml",
    tags: ["Python", "Scikit-learn", "Ridge", "Lasso", "ElasticNet"],
    year: "2023",
    description:
      "Prédiction des prix de vente immobiliers (Housing Prices). Régularisation L1/L2, sélection de features, gestion de la multicolinéarité.",
    highlights: [
      "80+ variables : nettoyage, imputation, encodage ordinal/one-hot",
      "Ridge, Lasso et ElasticNet pour contrôler la multicolinéarité",
      "Stacking d'estimateurs (XGBoost + Ridge + SVR)",
      "Log-transformation de la cible pour normaliser la distribution des prix",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Classification Iris de Fisher",
    category: "ml",
    tags: ["Python", "Scikit-learn", "PCA", "KNN", "SVM"],
    year: "2023",
    description:
      "Classification des espèces d'iris par les méthodes classiques. Étude comparative des frontières de décision et réduction dimensionnelle PCA.",
    highlights: [
      "Visualisation des distributions et corrélations inter-espèces",
      "ACP 2D pour visualisation de la séparabilité des classes",
      "Comparaison KNN, SVM (noyaux RBF/poly/linéaire), Naive Bayes",
      "Analyse des matrices de confusion et rapports de classification",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Sur-apprentissage & Régularisation",
    category: "ml",
    tags: ["Python", "Scikit-learn", "Régularisation", "Bias-Variance"],
    year: "2023",
    description:
      "Étude expérimentale du compromis biais-variance et des techniques de régularisation. Validation des courbes d'apprentissage pour diagnostiquer le sur-ajustement.",
    highlights: [
      "Génération de données synthétiques pour illustrer overfitting/underfitting",
      "Courbes d'apprentissage (train vs validation score)",
      "Comparaison L1/L2/ElasticNet sur des données bruitées",
      "Analyse du ratio complexité du modèle / taille de l'échantillon",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Analyse Performance Football",
    category: "ml",
    tags: ["Python", "Pandas", "Clustering", "K-Means", "Matplotlib"],
    year: "2024",
    description:
      "Analyse et clustering des performances de joueurs de football. Profilage tactique par clustering non supervisé et visualisations interactives.",
    highlights: [
      "Collecte de données Fbref / Understat et normalisation par position",
      "K-Means et DBSCAN pour identifier des profils de joueurs",
      "Radar charts et scatter plots interactifs par cluster",
      "Analyse des métriques offensives/défensives par style de jeu",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },

  // ── Deep Learning ────────────────────────────────────────────────────
  {
    title: "Fashion MNIST — CNN Zalando",
    category: "dl",
    tags: ["Python", "TensorFlow/Keras", "CNN", "Data Augmentation"],
    year: "2024",
    description:
      "Classification des vêtements Zalando par réseau convolutif. Optimisation de l'architecture CNN et techniques de régularisation pour images 28×28.",
    highlights: [
      "Architecture CNN : Conv2D + BatchNorm + MaxPooling + Dropout",
      "Data augmentation (rotation, flip, zoom) pour améliorer la généralisation",
      "Callbacks : EarlyStopping, ReduceLROnPlateau, ModelCheckpoint",
      "Accuracy finale > 93% sur le jeu de test",
      "Visualisation des feature maps et filtres appris",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Reconnaissance Vocale — RNN/LSTM",
    category: "dl",
    tags: ["Python", "TensorFlow", "LSTM", "MFCC", "Librosa"],
    year: "2024",
    description:
      "Système de reconnaissance vocale de commandes courtes par réseaux LSTM sur spectrogrammes MFCC. Entraîné sur le dataset Speech Commands de Google.",
    highlights: [
      "Extraction de features MFCC, Mel-spectrogram avec Librosa",
      "Architecture BiLSTM avec couche d'attention",
      "Augmentation audio : pitch shift, time stretch, bruit additif",
      "Accuracy > 89% sur 35 classes de commandes",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },

  // ── NLP ──────────────────────────────────────────────────────────────
  {
    title: "Analyse de Polarité des Opinions",
    category: "nlp",
    tags: ["Python", "NLTK", "TF-IDF", "BERT", "Sentiment Analysis"],
    year: "2024",
    description:
      "Analyse de sentiment sur des avis clients e-commerce. Pipeline complet du prétraitement textuel jusqu'au fine-tuning d'un modèle Transformer.",
    highlights: [
      "Prétraitement NLP : tokenisation, stemming, lemmatisation, stopwords",
      "Vectorisation TF-IDF + régression logistique (baseline)",
      "Fine-tuning CamemBERT sur corpus francophone d'avis",
      "Comparaison lexicale (VADER) vs apprentissage supervisé",
      "Interface de démo avec prédiction en temps réel",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },

  // ── Modélisation Numérique ────────────────────────────────────────────
  {
    title: "OCS MATLAB — Systèmes Dynamiques",
    category: "numerical",
    tags: ["MATLAB", "EDO", "Euler", "Lotka-Volterra", "Modélisation"],
    year: "2023",
    description:
      "Résolution numérique d'équations différentielles ordinaires : oscillateur harmonique, proie-prédateur (Lotka-Volterra), modèle SIR épidémique et zombie apocalypse.",
    highlights: [
      "Schémas d'Euler explicite/implicite et méthode de Runge-Kutta d'ordre 4",
      "Analyse de la stabilité numérique selon le pas de temps",
      "Modèle proie-prédateur Lotka-Volterra avec portraits de phase",
      "Extension créative : modélisation d'une épidémie zombie (SZR model)",
      "Comparaison des erreurs d'approximation selon l'ordre de la méthode",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Méthodes Itératives — Jacobi & Gauss-Seidel",
    category: "numerical",
    tags: ["Python", "NumPy", "Algèbre Linéaire", "Jacobi", "Gauss-Seidel"],
    year: "2023",
    description:
      "Implémentation et comparaison des méthodes itératives classiques pour la résolution de systèmes linéaires creux de grande taille.",
    highlights: [
      "Implémentation from scratch Jacobi, Gauss-Seidel, SOR (sur-relaxation)",
      "Critère de convergence et analyse spectrale du rayon spectral",
      "Application à la discrétisation d'EDP par différences finies (Laplacien 2D)",
      "Comparaison des taux de convergence et du nombre d'itérations",
      "Tests sur matrices creuses issues de maillages structurés",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Simulation Aléatoire — Monte Carlo",
    category: "numerical",
    tags: ["Python", "NumPy", "Monte Carlo", "Probabilités", "Statistiques"],
    year: "2023",
    description:
      "Méthodes de Monte Carlo pour l'estimation de π, le calcul d'intégrales multidimensionnelles et la simulation de processus stochastiques.",
    highlights: [
      "Estimation de π par la méthode des aiguilles de Buffon et du cercle unité",
      "Intégration Monte Carlo avec réduction de variance (variables antithétiques)",
      "Simulation de marches aléatoires et processus de Wiener discret",
      "Modèle de Black-Scholes : simulation de trajectoires d'actifs financiers",
      "Analyse de la convergence en N^(-1/2) et intervalles de confiance",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },

  // ── Géospatial ──────────────────────────────────────────────────────
  {
    title: "GeoData RSSI — Cartographie Indoor",
    category: "geospatial",
    tags: ["Python", "GeoPandas", "Folium", "WiFi", "Localisation"],
    year: "2024",
    description:
      "Collecte et traitement de données RSSI WiFi pour la localisation indoor. Modélisation du signal radio et cartographie des zones de couverture.",
    highlights: [
      "Collecte de mesures RSSI sur campus avec triangulation multi-AP",
      "Interpolation spatiale (krigeage, IDW) pour la carte de couverture",
      "Visualisation Folium + GeoPandas des heatmaps de signal",
      "Algorithme de positionnement par fingerprinting RSSI",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Géolocalisation Cinémas Parisiens",
    category: "geospatial",
    tags: ["Python", "GeoPandas", "Overpass API", "Folium", "OpenStreetMap"],
    year: "2024",
    description:
      "Extraction et analyse géospatiale de tous les cinémas parisiens via l'API Overpass (OpenStreetMap). Carte interactive avec filtres par arrondissement.",
    highlights: [
      "Requêtes Overpass QL pour l'extraction des POI cinéma à Paris",
      "Géocodage et enrichissement avec données INSEE",
      "Carte interactive Folium avec clustering et popups détaillés",
      "Analyse de la densité par arrondissement et accessibilité transports",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "OGC-API-EDR — API Météo Standards",
    category: "geospatial",
    tags: ["Python", "OGC", "REST API", "GeoJSON", "Données Météo"],
    year: "2024",
    description:
      "Client Python pour l'API OGC Environmental Data Retrieval. Interrogation standardisée de données météorologiques géoréférencées et visualisation.",
    highlights: [
      "Implémentation d'un client OGC-API-EDR conforme aux standards ISO",
      "Requêtes par position, rayon et polygone géographique",
      "Parsing GeoJSON et conversion en DataFrames Pandas",
      "Visualisation temporelle et spatiale des séries météo",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
  {
    title: "Sketchbook Earth SDG",
    category: "geospatial",
    tags: ["Python", "Earth Engine", "Satellite", "SDG", "Cartographie"],
    year: "2024",
    description:
      "Analyse d'images satellitaires pour le suivi des Objectifs de Développement Durable (SDGs). Détection de changements terrestres et indicateurs environnementaux.",
    highlights: [
      "Traitement d'images Sentinel-2 et Landsat via Google Earth Engine",
      "Calcul d'indices végétation (NDVI, EVI) et eau (NDWI) multi-temporels",
      "Détection de déforestation et d'urbanisation par classification supervisée",
      "Visualisations cartographiques des dynamiques environnementales",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },

  // ── C++ / Génie Logiciel ────────────────────────────────────────────
  {
    title: "Génie Logiciel C++ — TP1 à TP7",
    category: "cpp",
    tags: ["C++", "POO", "STL", "Design Patterns", "CMake"],
    year: "2023",
    description:
      "Série de travaux pratiques couvrant les fondamentaux du génie logiciel en C++ : programmation orientée objet, STL, gestion mémoire et design patterns.",
    highlights: [
      "POO avancée : héritage multiple, polymorphisme, classes abstraites",
      "Conteneurs STL, itérateurs et algorithmes génériques",
      "Gestion mémoire : RAII, smart pointers (unique_ptr, shared_ptr)",
      "Design patterns : Factory, Observer, Singleton, Strategy",
      "Build system CMake et tests unitaires avec Catch2",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },

  // ── SAS / Analytics ────────────────────────────────────────────────
  {
    title: "Gradient Boosting SAS — Marketing",
    category: "sas",
    tags: ["SAS", "SAS Viya", "Gradient Boosting", "CRM", "Scoring"],
    year: "2024",
    description:
      "Modèle de scoring marketing par Gradient Boosting sous SAS Viya. Prédiction de l'appétence client pour une campagne de fidélisation.",
    highlights: [
      "Préparation des données CRM dans SAS Studio (jointures, imputation)",
      "Entraînement d'un modèle Gradient Boosting avec SAS Visual ML",
      "Optimisation du seuil de classification selon le gain métier",
      "Analyse Lift curve et ROC pour évaluation du modèle de scoring",
      "Rapport de performance et recommandations stratégiques ciblage",
    ],
    github: "https://github.com/gadiaga00dame/PROJETS",
  },
];
