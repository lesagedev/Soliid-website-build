import PavesPageClient from "./PavesPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pavés Soliid au Cameroun | Buildermats - Aménagement Extérieur",
  description:
    "Découvrez notre collection complète de pavés Soliid by Buildermats pour allées, terrasses et espaces extérieurs au Cameroun. Pavés 6cm, 8cm et 13cm. Résistance et esthétique garanties. Livraison Douala et tout le Cameroun.",
  keywords:
    "pavés, pavé Cameroun, pavage Douala, terrasse pavée, allée pavée, pavés Soliid, Buildermats, aménagement extérieur Cameroun, pavé béton",
  openGraph: {
    title: "Pavés Soliid au Cameroun | Buildermats",
    description:
      "Collection complète de pavés pour allées, terrasses et espaces extérieurs. Standard Confort, Routiers Haute Performance, Premium Drainant.",
    images: ["/paves/couverture-paves.png"],
    type: "website",
    locale: "fr_FR",
    siteName: "Soliid by Buildermats",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavés Soliid au Cameroun | Buildermats",
    description: "Collection complète de pavés pour aménagement extérieur au Cameroun.",
    images: ["/paves/couverture-paves.png"],
  },
  alternates: {
    canonical: "/paves",
  },
}

export default function PavesPage() {
  return <PavesPageClient />
}
