import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BorduresPageClient from "./BorduresPageClient"

export const metadata: Metadata = {
  title: "Bordures en Béton - Soliid | Aménagement et Délimitation",
  description:
    "Découvrez notre gamme de bordures en béton pour l'aménagement urbain et la délimitation d'espaces. Qualité professionnelle, livraison au Cameroun.",
  keywords: "bordures béton, aménagement urbain, délimitation, trottoirs, Cameroun, construction",
  openGraph: {
    title: "Bordures en Béton - Soliid | Aménagement Urbain",
    description: "Gamme complète de bordures en béton pour aménagement urbain et délimitation d'espaces au Cameroun.",
    images: ["/bordures/couverture-bordure.jpg"],
    type: "website",
    locale: "fr_FR",
    siteName: "Soliid by Buildermats",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bordures en Béton - Soliid",
    description: "Bordures en béton pour aménagement urbain au Cameroun.",
    images: ["/bordures/couverture-bordure.jpg"],
  },
  alternates: {
    canonical: "/bordures",
  },
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
