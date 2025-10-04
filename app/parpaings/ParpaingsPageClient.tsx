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
import { parpaingsData } from "@/lib/product-data"
import ProductModal from "@/components/ProductModal" // Import ProductModal

export default function ParpaingsPageClient() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedGamme, setSelectedGamme] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const parpaingsByGamme = {
    "Standard Premium": parpaingsData.filter((p) => p.gamme === "Standard Premium"),
    "Standard Hydro Premium": parpaingsData.filter((p) => p.gamme === "Standard Hydro Premium"),
    "Premium Haute Performance": parpaingsData.filter((p) => p.gamme === "Premium Haute Performance"),
  }

  const parpaingTypes = [
    {
      name: "Standard Premium (SP)",
      gamme: "Standard Premium",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "21,60 kg ~ 25,60 kg",
      resistance: "4 MPa",
      description:
        "Idéal pour les murs porteurs et structures principales, Les parpaings Standard Premium de la marque SOLIID allient résistance, précision et durabilité.",
      features: ["Résistance élevée 4 Mpa", "Durabilité garantie", "Finition régulière et esthétique"],
      usage: "Fondations, murs porteurs, cloisons",
      image: "/parpaing/couverture-parpaings.png",
    },
    {
      name: "Standard Hydro Premium (SHP)",
      gamme: "Standard Hydro Premium",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "21,60 kg ~ 25,60 kg",
      resistance: "4 MPa",
      description:
        "Les parpaings Standard Hydro Premium SOLIID sont spécialement conçus pour offrir une résistance renforcée à l'humidité et aux intempéries.",
      features: ["Hydrofuge", "Résistance élevée 4 Mpa", "Durabilité garantie"],
      usage: "Fondations, murs exterieurs, salle d'eau",
      image: "/parpaing/couverture-parpaings-3.png",
    },
    {
      name: "Premium Haute Performance (PHP)",
      gamme: "Premium Haute Performance",
      dimensions: "50cm × 20cm × 15cm",
      weight: "25,60 kg",
      resistance: "6 MPa",
      description:
        "Les parpaings Premium Haute Performance SOLIID sont conçus avec une résistance mécanique exceptionnelle et une resistance à l'humidité ",
      features: ["Haute performance 6 Mpa", "Hydrofuge", "Utilisable en zone sismique"],
      usage: "Projets exigeants",
      image: "/parpaing/couverture-parpaings-4.png",
    },
  ]

  const getRelatedProducts = (currentProduct: any, currentGamme: string) => {
    const gamme = parpaingTypes.find((g) => g.name === currentGamme)
    if (!gamme) return []

    return gamme.variants
      .filter((variant) => variant.name !== currentProduct.name)
      .map((variant) => {
        const gammeName = getGammeName(currentGamme)
        return {
          id: `${variant.name}-${currentGamme}`,
          name: variant.name,
          data: {
            ...variant,
            name: `${variant.name} ${gammeName}`,
          },
        }
      })
  }

  const getGammeName = (parentName: string) => {
    if (parentName.includes("(SP)")) return "Standard Premium"
    if (parentName.includes("(SHP)")) return "Standard Hydro Premium"
    if (parentName.includes("(PHP)")) return "Premium Haute Performance"
    return ""
  }

  const handleProductClick = (product: any, parentGamme: string) => {
    const gammeName = getGammeName(parentGamme)

    const productWithGamme = {
      ...product,
      name: `${product.name} ${gammeName}`,
    }

    setSelectedProduct(productWithGamme)
    setSelectedGamme(parentGamme)
    setIsModalOpen(true)
  }

  const handleProductChange = (productData: any) => {
    setSelectedProduct(productData)
  }

  const advantages = [
    {
      icon: Building,
      title: "Résistance Exceptionnelle",
      description:
        "Nos parpaings résistent aux contraintes mécaniques éleveées et respectent les normes internationales.",
    },
    {
      icon: Thermometer,
      title: "Blocs Hydrofuges",
      description: "Adaptés aux climats humides, ",
    },
    {
      icon: Zap,
      title: "Pose Rapide",
      description: "Dimensions standardisées, réduction du temps de pose et de l'épaisseur du crépissage.",
    },
    {
      icon: Shield,
      title: "Durabilité Garantie",
      description: "Matériaux de qualité supérieure pour des constructions qui durent dans le temps.",
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
                  Parpaings premium <span className="text-primary">Soliid</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Découvrez nos 3 gammes de parpaings : Standard Premium, Standard Hydro Premium et Premium Haute
                  Performance, Pour vos projets de construction de résidences individuelles, immeubles, projets
                  immobiliers divers.
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
                  src="/parpaing/couverture-parpaings-2.png"
                  alt="Parpaings Soliid pour construction au Cameroun"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* M.SOLIID Mascot Overlay */}
              <div className="absolute bottom-0 right-4 w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80">
                <Image
                  src="/home/mascot-soliid.png"
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

      {/* Preorder Section */}
      {/*<section className="py-8 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-semibold text-amber-900">
                  Précommandez dès maintenant !
                </h3>
              </div>
              <p className="text-amber-800 max-w-2xl">
                Nos parpaings SOLIID seront disponibles à partir de Janvier 2026.
                <span className="font-medium"> Précommandez maintenant et bénéficiez d'une réduction exclusive !</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white shadow-md"
              >
                <Link href="/precommande">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Précommander maintenant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Product Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Les Parpaings Soliid</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Parpaings 15 en 50 cm, Parpaings 20 en 50 cm, Hourdis épaisseur 15 en 50 cm pour répondre à tous vos
              besoins de construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {parpaingTypes.map((parpaing, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                    <Image
                      src={parpaing.image || "/placeholder.svg"}
                      alt={parpaing.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 bg-amber-700 rounded-full animate-pulse"></span>
                        Disponible à Douala à partir de Janvier 2026
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground transition-colors">{parpaing.name}</CardTitle>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {parpaingsByGamme[parpaing.gamme as keyof typeof parpaingsByGamme]?.map((product) => (
                          <Button
                            key={product.slug}
                            asChild
                            className="flex-1 text-sm border border-primary bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                            size="sm"
                          >
                            <Link href={`/parpaings/${product.slug}`}>
                              {product.name.replace(` ${parpaing.gamme}`, "")}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-justify">
                    {parpaing.description}
                  </CardDescription>
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
              Pourquoi choisir nos parpaings ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Les avantages des parpaings SOLIID.
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

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          calculatorLink="/calculateurs"
          relatedProducts={getRelatedProducts(selectedProduct, selectedGamme)}
          onProductChange={handleProductChange}
          currentProductName={selectedProduct.name}
        />
      )}

      <Footer />
    </div>
  )
}
