"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Calculator, CheckCircle, Building, Shield, Thermometer, Zap, ArrowRight, Eye, Download} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductModal from "@/components/product-modal"
import QuoteButton from "@/components/quote-button";

export default function ParpaingsPageClient() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedGamme, setSelectedGamme] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const parpaingTypes = [
    {
      name: "Standard Premium (SP)",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "21,60 kg ~ 25,60 kg",
      resistance: "4 MPa",
      description:
        "Idéal pour les murs porteurs et structures principales, Les parpaings Standard Premium de la marque SOLIID allient résistance, précision et durabilité.",
      features: ["Résistance élevée 4 Mpa", "Durabilité garantie", "Finition régulière et esthétique"],
      usage: "Fondations, murs porteurs, cloisons",
      variants: [
        {
          name: "Parpaing 15",
          dimensions: "15cm × 20cm × 50cm",
          weight: "25,60 kg",
          resistance: "4 MPa",
          description:
            "Idéal pour les murs porteurs et structures principales, Les parpaings Standard Premium de la marque SOLIID allient résistance, précision et durabilité.",
          features: ["Résistance élevée 4 Mpa", "Durabilité garantie", "Finition régulière et esthétique"],
          usage: "Murs porteurs, fondations, structures principales, cloisons",
          image: "/parpaing/couverture-parpaings.png",
          images: [
            "/parpaing/parpaing-1550.png",
            "/parpaing/parpaing-1550-util.jpeg",
          ],
          technicalDetails: [
            "Conformité aux normes NF EN 771-3",
            "Absorption d'eau < 10%",
            "Résistance au gel-dégel",
            "Conductivité thermique λ = 0,9 W/m.K",
            "Densité : 1800 kg/m³",
          ],
          applications: [
            "Construction de maisons individuelles",
            "Bâtiments collectifs et commerciaux",
            "Murs de soutènement",
            "Fondations et soubassements",
          ],
        },
        {
          name: "Parpaing 20",
          dimensions: "20cm × 20cm × 50cm",
          weight: "25,60 kg",
          resistance: "4 MPa",
          description:
            "Idéal pour les murs porteurs et structures principales, Les parpaings Standard Premium de la marque SOLIID allient résistance, précision et durabilité.",
          features: ["Résistance élevée", "Isolation thermique", "Durabilité garantie", "Finition régulière et esthétique"],
          usage: "Murs porteurs, fondations, structures principales, cloisons",
          image: "/parpaing/couverture-parpaings.png",
          images: [
            "/parpaing/parpaing-2050.jpg",
            "/parpaing/parpaing-2050-util.jpeg"
          ],
          technicalDetails: [
            "Conformité aux normes NF EN 771-3",
            "Absorption d'eau < 10%",
            "Résistance au gel-dégel",
            "Conductivité thermique λ = 0,9 W/m.K",
            "Densité : 1800 kg/m³",
          ],
          applications: [
            "Construction de maisons individuelles",
            "Bâtiments collectifs et commerciaux",
            "Murs de soutènement",
            "Fondations et soubassements",
          ],
        },
        {
          name: "Hourdis",
          dimensions: "20cm × 20cm × 50cm",
          weight: "21,60 kg",
          resistance: "4 MPa",
          description:
            "Idéal pour les murs porteurs et structures principales, Les parpaings Standard Premium de la marque SOLIID allient résistance, précision et durabilité.",
          features: ["Résistance élevée", "Isolation thermique", "Durabilité garantie", "Finition régulière et esthétique"],
          usage: "Murs porteurs, fondations, structures principales, cloisons",
          image: "/parpaing/couverture-parpaings.png",
          images: [
            "/parpaing/hourdis.png",
            "/parpaing/hourdis-util.png",
          ],
          technicalDetails: [
            "Conformité aux normes NF EN 771-3",
            "Absorption d'eau < 10%",
            "Résistance au gel-dégel",
            "Conductivité thermique λ = 0,9 W/m.K",
            "Densité : 1800 kg/m³",
          ],
          applications: [
            "Construction de maisons individuelles",
            "Bâtiments collectifs et commerciaux",
            "Murs de soutènement",
            "Fondations et soubassements",
          ],
        },
      ],
      image: "/parpaing/couverture-parpaings.png",
      images: [
        "/parpaings-standard-premium-soliid-construction.jpg",
        "/parpaings-soliid-buildermats-construction-cameroun.jpg",
        "/specifications-techniques-parpaings-soliid-qualite.jpg",
      ],
      technicalDetails: [
        "Conformité aux normes NF EN 771-3",
        "Absorption d'eau < 10%",
        "Résistance au gel-dégel",
        "Conductivité thermique λ = 0,9 W/m.K",
        "Densité : 1800 kg/m³",
      ],
      applications: [
        "Construction de maisons individuelles",
        "Bâtiments collectifs et commerciaux",
        "Murs de soutènement",
        "Fondations et soubassements",
      ],
    },
    {
      name: "Standard Hydro Premium (SHP)",
      dimensions: "50cm × 20cm × 15cm / 20cm",
      weight: "21,60 kg ~ 25,60 kg",
      resistance: "4 MPa",
      description: "Les parpaings Standard Hydro Premium SOLIID sont spécialement conçus pour offrir une résistance renforcée à l'humidité et aux intempéries.",
      features: [
        "Hydrofuge",
        "Résistance élevée 4 Mpa",
        "Durabilité garantie",
      ],
      usage: "Fondations, murs exterieurs, salle d'eau",
      variants: [
        {
          name: "Parpaing 15",
          dimensions: "20cm × 20cm × 50cm",
          weight: "21,60 kg",
          resistance: "4 MPa",
          description: "Les parpaings Standard Hydro Premium SOLIID sont spécialement conçus pour offrir une résistance renforcée à l'humidité et aux intempéries.",
          features: [
            "Protection hydrofuge intégrée",
            "Résistance aux intempéries",
            "Longévité accrue",
            "Protection contre l'infiltration d'eau",
          ],
          usage: "Cloisons intérieures, séparations, murs non porteurs, zones humides",
          image: "/parpaing/couverture-parpaings-3.png",
          images: [
            "/parpaing/parpaing-1550.png",
            "/parpaing/parpaing-1550-util.jpeg",
          ],
          technicalDetails: [
            "Traitement hydrofuge dans la masse",
            "Résistance à l'humidité renforcée",
            "Protection anti-remontées capillaires",
            "Perméabilité à la vapeur d'eau optimisée",
            "Résistance aux cycles humidification-séchage",
          ],
          applications: [
            "Salles de bains et cuisines",
            "Caves et sous-sols",
            "Murs exposés aux intempéries",
            "Zones à forte humidité",
          ],
        },
        {
          name: "Parpaing 20",
          dimensions: "20cm × 20cm × 50cm",
          weight: "25,60 kg",
          resistance: "4 MPa",
          description: "Les parpaings Standard Hydro Premium SOLIID sont spécialement conçus pour offrir une résistance renforcée à l'humidité et aux intempéries.",
          features: [
            "Protection hydrofuge intégrée",
            "Résistance aux intempéries",
            "Longévité accrue",
            "Protection contre l'infiltration d'eau",
          ],
          usage: "Cloisons intérieures, séparations, murs non porteurs, zones humides",
          image: "/parpaing/couverture-parpaings-3.png",
          images: [
            "/parpaing/parpaing-2050.jpg",
            "/parpaing/parpaing-2050-util.jpeg"
          ],
          technicalDetails: [
            "Traitement hydrofuge dans la masse",
            "Résistance à l'humidité renforcée",
            "Protection anti-remontées capillaires",
            "Perméabilité à la vapeur d'eau optimisée",
            "Résistance aux cycles humidification-séchage",
          ],
          applications: [
            "Salles de bains et cuisines",
            "Caves et sous-sols",
            "Murs exposés aux intempéries",
            "Zones à forte humidité",
          ],
        },
      ],
      image: "/parpaing/couverture-parpaings-3.png",
      images: [
        "/parpaings-hydro-premium-soliid-resistance-humidite.jpg",
        "/parpaings-soliid-buildermats-construction-cameroun.jpg",
        "/specifications-techniques-parpaings-soliid-qualite.jpg",
      ],
      technicalDetails: [
        "Traitement hydrofuge dans la masse",
        "Résistance à l'humidité renforcée",
        "Protection anti-remontées capillaires",
        "Perméabilité à la vapeur d'eau optimisée",
        "Résistance aux cycles humidification-séchage",
      ],
      applications: [
        "Salles de bains et cuisines",
        "Caves et sous-sols",
        "Murs exposés aux intempéries",
        "Zones à forte humidité",
      ],
    },
    {
      name: "Premium Haute Performance (PHP)",
      dimensions: "50cm × 20cm × 15cm",
      weight: "25,60 kg",
      resistance: "6 MPa",
      description: "Les parpaings Premium Haute Performance SOLIID sont conçus avec une résistance mécanique exceptionnelle et une resistance à l'humidité ",
      features: [
        "Haute performance 6 Mpa",
        "Hydrofuge",
        "Utilisable en zone sismique",
      ],
      usage: "Projets exigeants",
      variants: [
        {
          name: "Parpaing 15",
          dimensions: "15cm × 20cm × 50cm",
          weight: "25,60 kg",
          resistance: "6 MPa",
          description: "Les parpaings Premium Haute Performance SOLIID sont conçus avec une résistance mécanique exceptionnelle et une durabilité accrue.",
          features: [
            "Solidité supérieure",
            "Haute performance thermique et acoustique",
            "Finition soignée",
            "Précision dimensionnelle optimale",
          ],
          usage: "Projets exigeants, ouvrages robustes et sûrs, constructions haute performance",
          image: "/parpaing/couverture-parpaings-4.png",
          images: [
            "/parpaing/parpaing-1550.png",
            "/parpaing/parpaing-1550-util.jpeg",
          ],
          technicalDetails: [
            "Résistance mécanique exceptionnelle 6 MPa",
            "Isolation thermique renforcée",
            "Isolation acoustique supérieure",
            "Précision dimensionnelle ±1mm",
            "Durabilité garantie 50 ans",
          ],
          applications: [
            "Bâtiments haute performance énergétique",
            "Constructions parasismiques",
            "Ouvrages d'art et infrastructures",
            "Projets architecturaux exigeants",
          ],
        },
        {
          name: "Parpaing 20",
          dimensions: "20cm × 20cm × 50cm",
          weight: "30,20 kg",
          resistance: "6 MPa",
          description: "Les parpaings Premium Haute Performance SOLIID sont conçus avec une résistance mécanique exceptionnelle et une durabilité accrue.",
          features: [
            "Solidité supérieure",
            "Haute performance thermique et acoustique",
            "Finition soignée",
            "Précision dimensionnelle optimale",
          ],
          usage: "Projets exigeants, ouvrages robustes et sûrs, constructions haute performance",
          image: "/parpaing/couverture-parpaings-4.png",
          images: [
            "/parpaing/parpaing-2050.jpg",
            "/parpaing/parpaing-2050-util.jpeg"
          ],
          technicalDetails: [
            "Résistance mécanique exceptionnelle 6 MPa",
            "Isolation thermique renforcée",
            "Isolation acoustique supérieure",
            "Précision dimensionnelle ±1mm",
            "Durabilité garantie 50 ans",
          ],
          applications: [
            "Bâtiments haute performance énergétique",
            "Constructions parasismiques",
            "Ouvrages d'art et infrastructures",
            "Projets architecturaux exigeants",
          ],
        },
        {
          name: "Hourdis",
          dimensions: "15cm × 20cm × 50cm",
          weight: "25,60 kg",
          resistance: "6 MPa",
          description: "Les parpaings Premium Haute Performance SOLIID sont conçus avec une résistance mécanique exceptionnelle et une durabilité accrue.",
          features: [
            "Solidité supérieure",
            "Haute performance thermique et acoustique",
            "Finition soignée",
            "Précision dimensionnelle optimale",
          ],
          usage: "Projets exigeants, ouvrages robustes et sûrs, constructions haute performance",
          image: "/parpaing/couverture-parpaings-4.png",
          images: [
            "/parpaing/hourdis.png",
            "/parpaing/hourdis-util.png",
          ],
          technicalDetails: [
            "Résistance mécanique exceptionnelle 6 MPa",
            "Isolation thermique renforcée",
            "Isolation acoustique supérieure",
            "Précision dimensionnelle ±1mm",
            "Durabilité garantie 50 ans",
          ],
          applications: [
            "Bâtiments haute performance énergétique",
            "Constructions parasismiques",
            "Ouvrages d'art et infrastructures",
            "Projets architecturaux exigeants",
          ],
        },
      ],
      image: "/parpaing/couverture-parpaings-4.png",
      images: [
        "/parpaings-premium-haute-performance-soliid-excelle.jpg",
        "/parpaings-soliid-buildermats-construction-cameroun.jpg",
        "/specifications-techniques-parpaings-soliid-qualite.jpg",
      ],
      technicalDetails: [
        "Résistance mécanique exceptionnelle 6 MPa",
        "Isolation thermique renforcée",
        "Isolation acoustique supérieure",
        "Précision dimensionnelle ±1mm",
        "Durabilité garantie 50 ans",
      ],
      applications: [
        "Bâtiments haute performance énergétique",
        "Constructions parasismiques",
        "Ouvrages d'art et infrastructures",
        "Projets architecturaux exigeants",
      ],
    },
  ];

  const getRelatedProducts = (currentProduct: any, currentGamme: string) => {
    const gamme = parpaingTypes.find(g => g.name === currentGamme)
    if (!gamme) return []

    return gamme.variants
      .filter(variant => variant.name !== currentProduct.name)
      .map(variant => {
        const gammeName = getGammeName(currentGamme)
        return {
          id: `${variant.name}-${currentGamme}`,
          name: variant.name,
          data: {
            ...variant,
            name: `${variant.name} ${gammeName}`
          }
        }
      })
  }

  const getGammeName = (parentName: string) => {
    if (parentName.includes('(SP)')) return 'Standard Premium'
    if (parentName.includes('(SHP)')) return 'Standard Hydro Premium'
    if (parentName.includes('(PHP)')) return 'Premium Haute Performance'
    return ''
  }

  const handleProductClick = (product: any, parentGamme: string) => {
    const gammeName = getGammeName(parentGamme)

    const productWithGamme = {
      ...product,
      name: `${product.name} ${gammeName}`
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
      description: "Nos parpaings résistent aux contraintes mécaniques éleveées et respectent les normes internationales.",
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
                  Découvrez nos 3 gammes de parpaings : Standard Premium, Standard Hydro Premium et Premium Haute Performance, Pour vos projets de construction de résidences individuelles, immeubles, projets immobiliers divers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/ressources">
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger nos guides
                  </Link>
                </Button>
                <QuoteButton  variant="outline" size="lg">
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

      {/* Product Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Les Parpaings Soliid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Parpaings 15 en 50 cm, Parpaings 20 en 50 cm, Hourdis épaisseur 15 en 50 cm  pour répondre à tous vos besoins de
              construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {parpaingTypes.map((parpaing, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardHeader className="space-y-4">
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden"
                  >
                    <Image
                      src={parpaing.image || "/placeholder.svg"}
                      alt={parpaing.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle
                      className="text-xl text-foreground transition-colors"
                    >
                      {parpaing.name}
                    </CardTitle>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {parpaing.variants.map((variant, idx) => (
                          <Button
                            key={idx}
                            className="flex-1 text-sm border cursor-pointer border-primary bg-primary-foreground text-primary hover:text-primary-foreground"
                            size="sm"
                            onClick={() => handleProductClick(variant, parpaing.name)}
                          >
                            {variant.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-justify">{parpaing.description}</CardDescription>
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
