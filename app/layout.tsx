import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serigne Dame GADIAGA — Data Science · Modélisation Numérique · Calcul Scientifique",
  description:
    "Portfolio de Serigne Dame GADIAGA, étudiant ingénieur à Polytech Lyon spécialisé en mathématiques appliquées, data science, modélisation numérique et calcul scientifique haute performance.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Modélisation Numérique",
    "Calcul Scientifique",
    "Python",
    "C++",
    "Polytech Lyon",
    "MAM",
  ],
  openGraph: {
    title: "Serigne Dame GADIAGA — Portfolio",
    description: "Data Science · Modélisation Numérique · Calcul Scientifique",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
