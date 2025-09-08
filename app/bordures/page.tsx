import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, ArrowRight, CheckCircle, Truck, Shield, Zap } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Bordures en Béton - Soliid | Aménagement et Délimitation",
  description:
    "Découvrez notre gamme de bordures en béton pour l'aménagement urbain et la délimitation d'espaces. Qualité professionnelle, livraison au Cameroun.",
  keywords: "bordures béton, aménagement urbain, délimitation, trottoirs, Cameroun, construction",
}

export default function BorduresPage() {
  const bordures = [
    {
      name: "Bordure T2 - SOLIID",
      dimensions: "100 x 15 x 25 cm",
      description: "Bordure de trottoir haute résistance pour aménagements urbains",
      applications: ["Bordures de trottoir", "Aménagements urbains", "Séparation voirie"],
      advantages: ["Résistance 6 MPa", "Classe B36", "Poids 70 kg pour stabilité maximale"],
      specifications: {
        resistance: "6 MPa",
        classe: "B36",
        poids: "70 kg",
        usage: "Bordure de trottoir",
      },
      image: "/concrete-curb-t2-reinforced-road-border.png",
    },
    {
      name: "Bordure P1 - SOLIID",
      dimensions: "50 x 8 x 20 cm",
      description: "Bordure de trottoir compacte pour espaces restreints",
      applications: ["Bordures de trottoir", "Allées piétonnes", "Délimitation jardins"],
      advantages: ["Format compact", "Résistance 6 MPa", "Installation facilitée"],
      specifications: {
        resistance: "6 MPa",
        classe: "B36",
        poids: "23 kg",
        usage: "Bordure de trottoir",
      },
      image: "/concrete-curb-t1-standard-sidewalk-border.png",
    },
    {
      name: "Bordure CS2 - SOLIID",
      dimensions: "100 x 25 x 13.5 cm",
      description: "Bordure haute performance pour infrastructures exigeantes",
      applications: ["Infrastructures routières", "Zones industrielles", "Aménagements lourds"],
      advantages: ["Classe B60 haute performance", "Résistance 6 MPa", "Durabilité exceptionnelle"],
      specifications: {
        resistance: "6 MPa",
        classe: "B60",
        poids: "70 kg",
        usage: "Bordure de trottoir",
      },
      image: "/decorative-concrete-garden-border-planter.png",
    },
    {
      name: "Bordure A2 - SOLIID",
      dimensions: "100 x 15 x 25 cm",
      description: "Bordure premium pour aménagements de prestige",
      applications: ["Aménagements de prestige", "Zones commerciales", "Espaces publics"],
      advantages: ["Classe B60 premium", "Finition soignée", "Résistance maximale 6 MPa"],
      specifications: {
        resistance: "6 MPa",
        classe: "B60",
        poids: "70 kg",
        usage: "Bordure de trottoir",
      },
      image: "/concrete-curbs-urban-development-construction-site.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted/50 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Aménagement Urbain
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Bordures en Béton
                <span className="text-primary block">Professionnelles</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Solutions complètes de bordures en béton pour l'aménagement urbain, la délimitation d'espaces et la
                sécurisation des voiries au Cameroun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/calculateurs">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculer mes besoins
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/concrete-curbs-urban-development-construction-site.png"
                alt="Bordures en béton pour aménagement urbain"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pourquoi choisir nos bordures ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions durables et esthétiques pour tous vos projets d'aménagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Résistance Exceptionnelle</h3>
              <p className="text-muted-foreground">
                Conçues pour résister aux charges lourdes et aux conditions climatiques du Cameroun
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation Rapide</h3>
              <p className="text-muted-foreground">
                Système de pose optimisé pour une installation efficace et professionnelle
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Garantie</h3>
              <p className="text-muted-foreground">
                Livraison rapide et sécurisée dans tout le Cameroun avec notre réseau logistique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Notre Gamme de Bordures SOLIID</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatre modèles de bordures adaptés à tous vos besoins d'aménagement urbain et paysager
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bordures.map((bordure, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={bordure.image || "/placeholder.svg"}
                    alt={bordure.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{bordure.name}</CardTitle>
                    <Badge variant="secondary">{bordure.dimensions}</Badge>
                  </div>
                  <CardDescription className="text-base">{bordure.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Résistance:</span>
                      <p className="text-muted-foreground">{bordure.specifications.resistance}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Classe:</span>
                      <p className="text-muted-foreground">{bordure.specifications.classe}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Poids:</span>
                      <p className="text-muted-foreground">{bordure.specifications.poids}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Usage:</span>
                      <p className="text-muted-foreground">{bordure.specifications.usage}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Applications :</h4>
                    <div className="flex flex-wrap gap-1">
                      {bordure.applications.map((app, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Avantages :</h4>
                    <ul className="space-y-1">
                      {bordure.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/calculateurs">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculer mes besoins
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Utilisez notre calculateur pour estimer vos besoins en bordures ou contactez-nous pour un devis
            personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/calculateurs">
                <Calculator className="mr-2 h-5 w-5" />
                Calculateur de bordures
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
