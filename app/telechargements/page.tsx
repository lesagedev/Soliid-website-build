import type { Metadata } from "next"
import TelechargementsClient from "./TelechargementsClient"

export const metadata: Metadata = {
  title: "Téléchargements Gratuits - Guides et Catalogues | Soliid Cameroun",
  description:
    "Téléchargez gratuitement nos guides de construction, catalogues produits et fiches techniques. Ressources essentielles pour vos projets de construction au Cameroun.",
  keywords:
    "guide construction, catalogue parpaings, fiche technique pavés, ressources construction Cameroun, téléchargement gratuit",
}

export default function Telechargements() {
  return <TelechargementsClient />
}
