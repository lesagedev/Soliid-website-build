import type { Metadata } from "next"
import ParpaingsPageClient from "./ParpaingsPageClient"

export const metadata: Metadata = {
  title: "Parpaings de Qualité au Cameroun | Soliid - Construction Facile",
  description:
    "Découvrez notre gamme complète de parpaings Soliid by Buildermats pour vos projets de construction au Cameroun. Standard Premium, Hydro Premium, Premium Haute Performance. Qualité garantie, livraison rapide à Douala et dans tout le Cameroun.",
  keywords:
    "parpaings, parpaing Cameroun, construction Cameroun, matériaux construction Douala, Soliid, Buildermats, construire au Cameroun, béton préfabriqué",
  openGraph: {
    title: "Parpaings de Qualité au Cameroun | Soliid",
    description:
      "Gamme complète de parpaings pour vos projets de construction. Standard Premium, Hydro Premium, Premium Haute Performance.",
    images: ["/parpaing/couverture-parpaings-2.png"],
    type: "website",
    locale: "fr_FR",
    siteName: "Soliid by Buildermats",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parpaings de Qualité au Cameroun | Soliid",
    description: "Gamme complète de parpaings pour vos projets de construction au Cameroun.",
    images: ["/parpaing/couverture-parpaings-2.png"],
  },
  alternates: {
    canonical: "/parpaings",
  },
}

export default function ParpaingsPage() {
  return <ParpaingsPageClient />
}
