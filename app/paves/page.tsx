import PavesPageClient from "./PavesPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pavés Soliid au Cameroun | Buildermats - Aménagement Extérieur",
  description:
    "Découvrez notre collection complète de pavés Soliid by Buildermats pour allées, terrasses et espaces extérieurs au Cameroun. Pavés 6cm, 8cm et 13cm. Résistance et esthétique garanties. Livraison Douala et tout le Cameroun.",
  keywords:
    "pavés, pavé Cameroun, pavage Douala, terrasse pavée, allée pavée, pavés Soliid, Buildermats, aménagement extérieur Cameroun, pavé béton",
}

export default function PavesPage() {
  return <PavesPageClient />
}
