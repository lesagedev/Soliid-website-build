"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle, Building, Shield, Thermometer, Zap, ArrowRight, Download } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import QuoteButton from "@/components/quote-button"
import { pavesData } from "@/lib/product-data"

export default function PavesPageClient() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedGamme, setSelectedGamme] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const pavesByGamme = {
    "Standard Confort": pavesData.filter((p) => p.gamme === "Standard Confort"),
    "Routiers Haute Performance": pavesData.filter((p) => p.gamme === "Routiers Haute Performance"),
  }

  const paveTypes = [
    {
      name: "Pavés Standard Confort",
      gamme: "Standard Confort",
      dimensions: "Épaisseur 6cm",
      weight: "3,2 kg ~ 3,8 kg",
      resistance: "3 MPa (B30)",
      description:
        "Pavés esthétiques pour particuliers et petits promoteurs. Formes et couleurs variées pour valoriser votre patrimoine immobilier.",
      features: ["Esthétique variée", "Anti-dérapant", "Confort et sécurité", "Valorisation immobilière"],
      usage: "Cours, terrasses, allées résidentielles",
      image: "/paves/couverture-paves-pose-paves-pietonnier.jpg",
    },
    {
      name: "Pavés Routiers Haute Performance",
      gamme: "Routiers Haute Performance",
      dimensions: "Épaisseur 8cm et 13cm",
      weight: "3,5 kg ~ 17 kg",
      resistance: "3,6 MPa (B36)",
      description:
        "Pavés haute résistance pour trafic lourd. Conçus pour les grands projets BTP, zones industrielles et infrastructures.",
      features: ["Résistance au trafic lourd", "Longévité supérieure", "Sécurité garantie", "Fiabilité éprouvée"],
      usage: "Routes, zones industrielles, entrepôts",
      image: "/paves/couverture-paves-footer.png",
    },
    {
      name: "Pavés Premium Drainant",
      gamme: "Premium Drainant",
      dimensions: "Épaisseur 6cm, 8cm et 13cm",
      weight: "3,2 kg ~ 17 kg",
      resistance: "3 à 3,6 MPa",
      description:
        "Pavés techniques pour projets urbains. Drainage efficace et respect des normes pour une gestion optimale des eaux pluviales.",
      features: [
        "Normes techniques respectées",
        "Drainage efficace",
        "Gestion eaux pluviales",
        "Image moderne urbaine",
      ],
      usage: "Projets urbains, municipalités, aménagements",
      image: "/paves/couverture-paves.jpg",
    },
  ]

  const advantages = [
    {
      icon: Building,
      title: "Gamme Complète",
      description: "3 gammes de pavés pour tous vos besoins : confort, performance routière et drainage urbain.",
    },
    {
      icon: Thermometer,
      title: "Adaptés au Climat",
      description: "Résistants aux conditions climatiques du Cameroun avec drainage optimisé.",
    },
    {
      icon: Zap,
      title: "Installation Facile",
      description: "Dimensions standardisées pour une pose rapide et un résultat professionnel.",
    },
    {
      icon: Shield,
      title: "Qualité Soliid",
      description: "Plus de 15 ans d'expertise Buildermats pour des matériaux durables et fiables.",
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
                  Pavés premium <span className="text-primary">Soliid</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Découvrez nos 3 gammes de pavés : Standard Confort, Routiers Haute Performance et Premium Drainant.
                  Pour tous vos projets d'aménagement extérieur et d'infrastructure urbaine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/ressources">
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger nos guides
                  </Link>
                </Button>
                <QuoteButton variant="outline" size="lg">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </QuoteButton>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <Image
                  src="/paves/couverture-paves.png"
                  alt="Pavés Soliid pour aménagement au Cameroun"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* M.SOLIID Mascot Overlay */}
              <div className="absolute bottom-0 right-4 w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80">
                <Image
                  src="/home/mascot-soliid-paves.png"
                  alt="M.SOLIID - Mascotte expert en parpaings"
                  width={256}
                  height={320}
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                  priority
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Les Pavés Soliid</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              3 gammes de pavés pour répondre à tous vos besoins d'aménagement : résidentiel, routier et urbain
              drainant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paveTypes.map((pave, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={pave.image || "/placeholder-11wsf.png"}
                      alt={pave.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground transition-colors">{pave.name}</CardTitle>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {pavesByGamme[pave.gamme as keyof typeof pavesByGamme]?.map((product) => (
                          <Button
                            key={product.slug}
                            asChild
                            className="flex-1 text-sm border border-primary bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                            size="sm"
                          >
                            <Link href={`/paves/${product.slug}`}>{product.name.replace("Soliid ", "")}</Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-justify">{pave.description}</CardDescription>
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
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href="/calculateurs">
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculer mes besoins
                      </Link>
                    </Button>
                  </div>
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
              Pourquoi choisir nos pavés ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Les avantages des pavés SOLIID pour tous vos projets d'aménagement.
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

      {/* Remove modal component as it's no longer needed */}
      {/* {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          calculatorLink="/calculateurs"
          relatedProducts={getRelatedProducts(selectedProduct, selectedGamme)}
          onProductChange={handleProductChange}
          currentProductName={selectedProduct.name}
        />
      )} */}

      <Footer />
    </div>
  )
}
