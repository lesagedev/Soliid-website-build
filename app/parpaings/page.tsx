import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle, Building, Shield, Thermometer, Zap, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parpaings de Qualité au Cameroun | Soliid - Construction Facile",
  description:
    "Découvrez notre gamme complète de parpaings Soliid by Buildermats pour vos projets de construction au Cameroun. Standard Premium, Hydro Premium, Premium Haute Performance. Qualité garantie, livraison rapide à Douala et dans tout le Cameroun.",
  keywords:
    "parpaings, parpaing Cameroun, construction Cameroun, matériaux construction Douala, Soliid, Buildermats, construire au Cameroun, béton préfabriqué",
}

export default function ParpaingsPage() {
  const parpaingTypes = [
    {
      name: "Standard Premium (SP)",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "21,60 kg ~ 25,60 kg",
      resistance: "4 MPa",
      description:
        "Idéal pour les murs porteurs, fondations et structures principales. Allient résistance, précision et durabilité.",
      features: ["Résistance élevée", "Isolation thermique", "Durabilité garantie", "Finition régulière et esthétique"],
      usage: "Murs porteurs, fondations, structures principales, cloisons",
      variants: ["15cm", "20cm", "Hourdis"],
      image: "/parpaings-standard-premium-soliid-construction.jpg",
    },
    {
      name: "Hydro Premium (SHP)",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "21,60 kg ~ 25,60 kg",
      resistance: "4 MPa",
      description: "Spécialement conçus pour offrir une résistance renforcée à l'humidité et aux intempéries.",
      features: [
        "Protection hydrofuge intégrée",
        "Résistance aux intempéries",
        "Longévité accrue",
        "Protection contre l'infiltration d'eau",
      ],
      usage: "Cloisons intérieures, séparations, murs non porteurs, zones humides",
      variants: ["15cm", "20cm"],
      image: "/parpaings-hydro-premium-soliid-resistance-humidite.jpg",
    },
    {
      name: "Premium Haute Performance (PHP)",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "25,60 kg ~ 30,20 kg",
      resistance: "6 MPa",
      description: "L'excellence en matière de construction. Technologie avancée et matériaux de qualité supérieure.",
      features: [
        "Solidité supérieure",
        "Haute performance thermique et acoustique",
        "Finition soignée",
        "Précision dimensionnelle optimale",
      ],
      usage: "Projets exigeants, ouvrages robustes et sûrs, constructions haute performance",
      variants: ["15cm", "20cm"],
      image: "/parpaings-premium-haute-performance-soliid-excelle.jpg",
    },
  ]

  const advantages = [
    {
      icon: Building,
      title: "Résistance Exceptionnelle",
      description: "Nos parpaings résistent aux contraintes mécaniques et aux intempéries du climat camerounais.",
    },
    {
      icon: Thermometer,
      title: "Isolation Thermique",
      description: "Excellente isolation pour maintenir une température confortable dans vos constructions.",
    },
    {
      icon: Shield,
      title: "Durabilité Garantie",
      description: "Matériaux de qualité supérieure pour des constructions qui durent dans le temps.",
    },
    {
      icon: Zap,
      title: "Pose Rapide",
      description: "Dimensions standardisées pour une construction efficace et des économies de temps.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Soliid by Buildermats
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                  Parpaings Soliid de qualité pour vos <span className="text-primary">constructions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Découvrez nos 3 gammes de parpaings Soliid adaptés à tous vos projets de construction au Cameroun.
                  Standard Premium, Hydro Premium et Premium Haute Performance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/calculateurs">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculer mes besoins
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <Image
                  src="/parpaings-soliid-buildermats-construction-cameroun.jpg"
                  alt="Parpaings Soliid pour construction au Cameroun"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Nos 3 gammes de parpaings Soliid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Standard Premium, Hydro Premium et Premium Haute Performance pour répondre à tous vos besoins de
              construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {parpaingTypes.map((parpaing, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={parpaing.image || "/placeholder.svg"}
                      alt={parpaing.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">{parpaing.name}</CardTitle>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline">{parpaing.dimensions}</Badge>
                      <div className="flex gap-2 flex-wrap">
                        {parpaing.variants.map((variant, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {variant}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Poids:</span> {parpaing.weight} |{" "}
                      <span className="font-medium">Résistance:</span> {parpaing.resistance}
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">{parpaing.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Caractéristiques :</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {parpaing.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Usage recommandé :</h4>
                    <p className="text-sm text-muted-foreground">{parpaing.usage}</p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href="/calculateurs">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculer la quantité
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Pourquoi choisir nos parpaings ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Des avantages concrets pour vos projets de construction au Cameroun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Spécifications techniques Soliid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nos parpaings Soliid respectent les normes internationales de construction et sont adaptés au climat
              camerounais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Caractéristiques par gamme</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Standard Premium :</strong> 4 MPa - Murs porteurs et fondations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Hydro Premium :</strong> 4 MPa - Protection hydrofuge intégrée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Premium Haute Performance :</strong> 6 MPa - Excellence et durabilité
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Format standard :</strong> 50cm de longueur pour une pose optimisée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Qualité Buildermats :</strong> Plus de 15 ans d'expertise
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Avantages construction</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pose rapide grâce aux dimensions standardisées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Excellente adhérence avec les mortiers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Résistance aux termites et insectes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Incombustible et résistant au feu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <Image
                  src="/specifications-techniques-parpaings-soliid-qualite.jpg"
                  alt="Spécifications techniques parpaings Soliid"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Prêt à calculer vos besoins en parpaings ?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Utilisez notre calculateur gratuit pour estimer précisément la quantité de parpaings nécessaire pour votre
            projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/calculateurs">
                <Calculator className="mr-2 h-5 w-5" />
                Calculateur parpaings
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">
                Demander un devis personnalisé
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
