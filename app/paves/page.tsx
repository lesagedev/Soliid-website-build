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
  title: "Pavés Soliid au Cameroun | Buildermats - Aménagement Extérieur",
  description:
    "Découvrez notre collection complète de pavés Soliid by Buildermats pour allées, terrasses et espaces extérieurs au Cameroun. Pavés 6cm, 8cm et 13cm. Résistance et esthétique garanties. Livraison Douala et tout le Cameroun.",
  keywords:
    "pavés, pavé Cameroun, pavage Douala, terrasse pavée, allée pavée, pavés Soliid, Buildermats, aménagement extérieur Cameroun, pavé béton",
}

export default function PavesPage() {
  const paveTypes = [
    {
      name: "Soliid Benoue",
      dimensions: "100cm × 200cm × 6cm",
      weight: "3,3 kg",
      resistance: "3 MPa (B30)",
      description: "Pavé de grande dimension pour revêtement de sol (cours, trottoir)",
      features: ["Format généreux", "Résistance B30", "Idéal cours et trottoirs"],
      usage: "Revêtement de sol, cours, trottoirs",
      image: "/placeholder.svg?key=benoue",
    },
    {
      name: "Soliid Sanaga",
      dimensions: "14cm × 23cm × 6cm",
      weight: "3,2 kg",
      resistance: "3 MPa (B30)",
      description: "Pavé compact pour revêtement de sol (cours, trottoir)",
      features: ["Format compact", "Résistance B30", "Pose facilitée"],
      usage: "Revêtement de sol, cours, trottoirs",
      image: "/placeholder.svg?key=sanaga",
    },
    {
      name: "Soliid Nde",
      dimensions: "22,7cm × 25cm × 6cm",
      weight: "3,8 kg",
      resistance: "3 MPa (B30)",
      description: "Pavé rectangulaire pour revêtement de sol (cours, trottoir)",
      features: ["Format rectangulaire", "Résistance B30", "Polyvalent"],
      usage: "Revêtement de sol, cours, trottoirs",
      image: "/placeholder.svg?key=nde",
    },
    {
      name: "Soliid Wouri",
      dimensions: "18,6cm × 20cm × 6cm",
      weight: "3,3 kg",
      resistance: "3 MPa (B30)",
      description: "Pavé carré pour revêtement de sol (cours, trottoir)",
      features: ["Format carré", "Résistance B30", "Design équilibré"],
      usage: "Revêtement de sol, cours, trottoirs",
      image: "/placeholder.svg?key=wouri",
    },
    {
      name: "Soliid P8",
      dimensions: "18cm × 19cm × 8cm",
      weight: "3,5 kg",
      resistance: "3,6 MPa (B36)",
      description: "Pavé de route épaisseur 8cm pour revêtement routier",
      features: ["Épaisseur renforcée", "Résistance B36", "Usage routier"],
      usage: "Revêtement de route, zones de circulation",
      image: "/placeholder.svg?key=p8",
    },
    {
      name: "Soliid P13",
      dimensions: "25cm × 27,5cm × 13cm",
      weight: "17 kg",
      resistance: "3,6 MPa (B36)",
      description: "Pavé de route épaisseur 13cm pour revêtement routier intensif",
      features: ["Très haute résistance", "Format robuste", "Trafic intense"],
      usage: "Revêtement de route, trafic lourd",
      image: "/placeholder.svg?key=p13",
    },
  ]

  const advantages = [
    {
      icon: Palette,
      title: "Gamme Complète Soliid",
      description: "6 modèles différents adaptés à tous vos besoins d'aménagement extérieur.",
    },
    {
      icon: Shield,
      title: "Résistance Exceptionnelle",
      description: "Conçus pour résister au trafic et aux conditions climatiques du Cameroun.",
    },
    {
      icon: Droplets,
      title: "Qualité Buildermats",
      description: "Plus de 15 ans d'expertise dans la préfabrication de matériaux de construction.",
    },
    {
      icon: Wrench,
      title: "Entretien Minimal",
      description: "Surface résistante nécessitant peu d'entretien au fil des années.",
    },
  ]

  const applications = [
    {
      title: "Pavés 6cm - Piétonnier",
      description: "Benoue, Sanaga, Nde, Wouri pour cours et trottoirs",
      image: "/placeholder.svg?key=piet6cm",
    },
    {
      title: "Pavés 8cm - Route Légère",
      description: "P8 pour revêtement de route et circulation modérée",
      image: "/placeholder.svg?key=route8cm",
    },
    {
      title: "Pavés 13cm - Route Intensive",
      description: "P13 pour revêtement routier et trafic lourd",
      image: "/placeholder.svg?key=route13cm",
    },
    {
      title: "Aménagements Mixtes",
      description: "Combinaisons créatives pour projets sur mesure",
      image: "/placeholder.svg?key=mixte",
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
                  Pavés Soliid pour vos <span className="text-primary">espaces extérieurs</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Transformez vos allées, terrasses et routes avec notre gamme complète de 6 pavés Soliid. De 6cm à 13cm
                  d'épaisseur pour tous vos projets d'aménagement au Cameroun.
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
                  src="/placeholder.svg?key=paveshero"
                  alt="Pavés Soliid pour aménagement au Cameroun"
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
              Notre gamme complète de pavés Soliid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              6 modèles de pavés pour tous vos besoins : piétonnier (6cm), route légère (8cm) et route intensive (13cm).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline">{pave.dimensions}</Badge>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Poids:</span> {pave.weight} |{" "}
                        <span className="font-medium">Résistance:</span> {pave.resistance}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">{pave.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Caractéristiques :</h4>
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
                    <h4 className="font-medium text-foreground">Usage recommandé :</h4>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Applications par épaisseur</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Chaque épaisseur de pavé Soliid correspond à un usage spécifique.
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
              Pourquoi choisir nos pavés Soliid ?
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
                  Spécifications techniques Soliid
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Nos pavés Soliid respectent les normes de qualité les plus strictes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Caractéristiques par gamme</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Pavés 6cm (Benoue, Sanaga, Nde, Wouri) :</strong> 3 MPa - Classe B30
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Pavés route (P8, P13) :</strong> 3,6 MPa - Classe B36
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Usage piétonnier :</strong> Épaisseur 6cm pour cours et trottoirs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Usage routier :</strong> Épaisseurs 8cm et 13cm pour circulation
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
                  src="/placeholder.svg?key=techpaves"
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
