import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle, Palette, Shield, Droplets, Wrench, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pavés Décoratifs et Fonctionnels au Cameroun | Soliid",
  description:
    "Découvrez notre collection de pavés pour allées, terrasses et espaces extérieurs au Cameroun. Pavés rectangulaires, carrés, hexagonaux. Résistance et esthétique garanties. Livraison Douala et tout le Cameroun.",
  keywords:
    "pavés, pavé Cameroun, pavage Douala, terrasse pavée, allée pavée, pavés décoratifs, aménagement extérieur Cameroun, pavé béton",
}

export default function PavesPage() {
  const paveTypes = [
    {
      name: "Pavé Rectangulaire 20x10",
      dimensions: "20cm × 10cm × 6cm",
      price: "450 FCFA",
      description: "Classique et polyvalent pour allées et terrasses",
      features: ["Design intemporel", "Pose en chevrons", "Résistant au trafic"],
      usage: "Allées piétonnes, terrasses, cours résidentielles",
      image: "/pave-rectangulaire-20x10-classic.png",
    },
    {
      name: "Pavé Carré 20x20",
      dimensions: "20cm × 20cm × 6cm",
      price: "800 FCFA",
      description: "Élégant et moderne pour espaces décoratifs",
      features: ["Format généreux", "Aspect contemporain", "Facilité de pose"],
      usage: "Terrasses, espaces de détente, entrées principales",
      image: "/pave-carre-20x20-modern.png",
    },
    {
      name: "Pavé Hexagonal 20x17",
      dimensions: "20cm × 17cm × 6cm",
      price: "650 FCFA",
      description: "Design unique pour créer des motifs originaux",
      features: ["Forme originale", "Motifs créatifs", "Esthétique premium"],
      usage: "Espaces décoratifs, jardins, zones d'accueil",
      image: "/pave-hexagonal-20x17-creative.png",
    },
  ]

  const advantages = [
    {
      icon: Palette,
      title: "Esthétique Remarquable",
      description: "Designs variés pour créer des espaces extérieurs uniques et attrayants.",
    },
    {
      icon: Shield,
      title: "Résistance Exceptionnelle",
      description: "Conçus pour résister au trafic intense et aux conditions climatiques du Cameroun.",
    },
    {
      icon: Droplets,
      title: "Drainage Optimal",
      description: "Joints perméables permettant l'évacuation naturelle des eaux de pluie.",
    },
    {
      icon: Wrench,
      title: "Entretien Minimal",
      description: "Surface lisse et résistante nécessitant peu d'entretien au fil des années.",
    },
  ]

  const applications = [
    {
      title: "Allées et Chemins",
      description: "Créez des passages durables et esthétiques",
      image: "/paved-walkways-allees-pavees.png",
    },
    {
      title: "Terrasses et Patios",
      description: "Aménagez des espaces de vie extérieurs élégants",
      image: "/paved-terraces-patios-pavees.png",
    },
    {
      title: "Cours et Parkings",
      description: "Solutions résistantes pour zones de stationnement",
      image: "/paved-courtyards-parking-areas.png",
    },
    {
      title: "Espaces Commerciaux",
      description: "Pavage professionnel pour entreprises et commerces",
      image: "/commercial-paved-spaces.png",
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
                  Aménagement Extérieur
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                  Pavés décoratifs pour vos <span className="text-primary">espaces extérieurs</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Transformez vos allées, terrasses et cours avec notre gamme de pavés résistants et esthétiques.
                  Qualité et design pour tous vos projets d'aménagement au Cameroun.
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
                  src="/paves-decoratifs-amenagement-cameroun.png"
                  alt="Pavés décoratifs Soliid pour aménagement au Cameroun"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Notre collection de pavés</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Trois formats distincts pour créer des aménagements extérieurs uniques et durables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paveTypes.map((pave, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={pave.image || "/placeholder.svg"}
                      alt={pave.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">{pave.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{pave.dimensions}</Badge>
                      <span className="text-lg font-semibold text-primary">{pave.price}</span>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">{pave.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Avantages :</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {pave.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Applications :</h4>
                    <p className="text-sm text-muted-foreground">{pave.usage}</p>
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

      {/* Applications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Applications et réalisations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Découvrez les multiples possibilités d'aménagement avec nos pavés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={application.image || "/placeholder.svg"}
                    alt={application.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{application.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{application.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Pourquoi choisir nos pavés ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Des avantages concrets pour vos projets d'aménagement extérieur au Cameroun.
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

      {/* Technical Info */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Spécifications techniques
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Nos pavés respectent les normes de qualité les plus strictes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Caractéristiques</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Résistance à la compression :</strong> Minimum 35 MPa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Absorption d'eau :</strong> Maximum 6%
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Résistance à l'usure :</strong> Classe 4 (trafic intense)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Résistance au gel :</strong> Adaptée au climat tropical
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Épaisseur standard :</strong> 6cm pour usage piétonnier
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Installation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pose sur lit de sable compacté</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Joints sablés pour stabilité optimale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Possibilité de dépose et repose</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <Image
                  src="/technical-specifications-paves-quality.png"
                  alt="Spécifications techniques pavés Soliid"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Prêt à calculer vos besoins en pavés ?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Utilisez notre calculateur gratuit pour estimer précisément la quantité de pavés nécessaire pour votre
            projet d'aménagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/calculateurs">
                <Calculator className="mr-2 h-5 w-5" />
                Calculateur pavés
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
