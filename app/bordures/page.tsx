import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BorduresPageClient from "./BorduresPageClient"

export const metadata: Metadata = {
  title: "Bordures en Béton - Soliid | Aménagement et Délimitation",
  description:
    "Découvrez notre gamme de bordures en béton pour l'aménagement urbain et la délimitation d'espaces. Qualité professionnelle, livraison au Cameroun.",
  keywords: "bordures béton, aménagement urbain, délimitation, trottoirs, Cameroun, construction",
}

export default function BorduresPage() {
  return (
    <>
      <Navigation />
      <BorduresPageClient />
      <Footer />
    </>
  )
}
