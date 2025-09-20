"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Calculator, CheckCircle, Building, Shield, Thermometer, Zap, ArrowRight, Download} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductModal from "@/components/product-modal"
import QuoteButton from "@/components/quote-button";

export default function PavesPageClient() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedGamme, setSelectedGamme] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paves6 = [
      {
        name: "Soliid Benoue",
        dimensions: "6cm × 20cm × 10cm",
        weight: "3,3 kg",
        resistance: "3 MPa (B30)",
        description:
          "Pavé de grande dimension pour revêtement de sol (cours, trottoir). Format généreux idéal pour les particuliers.",
        features: ["Format généreux 10×20cm", "Résistance B30", "Idéal cours et trottoirs", "Pose rapide"],
        usage: "Cours de maisons, terrasses, cheminements piétons",
        image: "/paves/couverture-paves-benoue.jpg",
        images: [
          "/paves/couverture-paves-benoue.jpg",
        ],
        technicalDetails: [
          "Classe de résistance B30",
          "Résistance à la compression 3 MPa",
          "Absorption d'eau < 6%",
          "Résistance au gel-dégel",
          "Dimensions précises ±2mm",
        ],
        applications: [
          "Cours de maisons individuelles",
          "Trottoirs et cheminements piétons",
          "Terrasses et patios",
          "Zones de stationnement léger",
        ],
      },
      {
        name: "Soliid Sanaga",
        dimensions: "6cm × 23cm × 14cm",
        weight: "3,2 kg",
        resistance: "3 MPa (B30)",
        description:
          "Pavé compact pour revêtement de sol (cours, trottoir). Design moderne et pose facilitée.",
        features: ["Format compact 14×23cm", "Résistance B30", "Pose facilitée", "Design moderne"],
        usage: "Allées piétonnes, bordures décoratives, petites surfaces",
        image: "/paves/couverture-paves-sanaga.jpg",
        images: [
          "/paves/couverture-paves-sanaga.jpg",
        ],
        technicalDetails: [
          "Classe de résistance B30",
          "Résistance à la compression 3 MPa",
          "Format compact et maniable",
          "Excellent drainage",
          "Résistance aux intempéries",
        ],
        applications: [
          "Allées piétonnes",
          "Bordures décoratives",
          "Petites surfaces",
          "Aménagements paysagers",
        ],
      },
      {
        name: "Soliid Nde",
        dimensions: "6cm × 25cm × 22,7cm",
        weight: "3,8 kg",
        resistance: "3 MPa (B30)",
        description:
          "Pavé rectangulaire pour revêtement de sol (cours, trottoir). Esthétique soignée et polyvalent.",
        features: ["Format rectangulaire 22,7×25cm", "Résistance B30", "Polyvalent", "Esthétique soignée"],
        usage: "Terrasses résidentielles, espaces commerciaux, zones piétonnes",
        image: "/paves/couverture-paves-nde.jpg",
        images: [
          "/paves/couverture-paves-nde.jpg",
        ],
        technicalDetails: [
          "Classe de résistance B30",
          "Résistance à la compression 3 MPa",
          "Format rectangulaire optimisé",
          "Surface antidérapante",
          "Durabilité exceptionnelle",
        ],
        applications: [
          "Terrasses résidentielles",
          "Espaces commerciaux",
          "Zones piétonnes",
          "Aménagements urbains",
        ],
      },
      {
        name: "Soliid Wouri",
        dimensions: "6cm × 20cm × 18,6cm",
        weight: "3,3 kg",
        resistance: "3 MPa (B30)",
        description:
          "Pavé carré pour revêtement de sol (cours, trottoir). Design équilibré et pose harmonieuse.",
        features: ["Format carré 18,6×20cm", "Résistance B30", "Design équilibré", "Pose harmonieuse"],
        usage: "Cours intérieures, jardins, cheminements piétons",
        image: "/paves/couverture-paves-wouri.jpg",
        images: [
          "/paves/couverture-paves-wouri.jpg",
        ],
        technicalDetails: [
          "Classe de résistance B30",
          "Résistance à la compression 3 MPa",
          "Format carré équilibré",
          "Joints optimisés",
          "Facilité d'entretien",
        ],
        applications: [
          "Cours intérieures",
          "Jardins et espaces verts",
          "Cheminements piétons",
          "Zones de détente",
        ],
      },
    ];
  const paves8 = {
    name: "Soliid SaWa P8",
    dimensions: "8cm × 19cm × 18cm",
    weight: "3,5 kg",
    resistance: "3,6 MPa (B36)",
    description: "Pavé de route épaisseur 8cm pour revêtement routier et circulation modérée.",
    features: ["Épaisseur renforcée 8cm", "Résistance B36", "Usage routier", "Trafic modéré"],
    usage: "Routes secondaires, voies d'accès, parkings",
    image: "/paves/couverture-paves-p8.png",
    images: [
      "/paves/couverture-paves-p8.png",
      "/paves/couverture-paves-p8-2.png",
    ],
    technicalDetails: [
      "Classe de résistance B36",
      "Résistance à la compression 3,6 MPa",
      "Épaisseur routière 8cm",
      "Résistance à l'usure",
      "Stabilité dimensionnelle",
    ],
    applications: [
      "Routes secondaires",
      "Voies d'accès",
      "Parkings",
      "Zones de circulation légère",
    ],
  };
  const paves13 = {
    name: "Soliid CMR P13",
    dimensions: "13cm × 27,5cm × 25cm",
    weight: "17 kg",
    resistance: "3,6 MPa (B36)",
    description: "Pavé de route épaisseur 13cm pour revêtement routier intensif et trafic lourd.",
    features: ["Très haute résistance", "Format robuste 25×27,5cm", "Trafic intense", "Épaisseur 13cm"],
    usage: "Routes principales, zones industrielles, trafic lourd",
    image: "/paves/couverture-paves-p13.jpg",
    images: [
      "/paves/couverture-paves-p13.jpg",
    ],
    technicalDetails: [
      "Classe de résistance B36",
      "Résistance à la compression 3,6 MPa",
      "Épaisseur routière intensive 13cm",
      "Résistance au trafic lourd",
      "Longévité exceptionnelle",
    ],
    applications: [
      "Routes principales",
      "Zones industrielles",
      "Aires de stationnement poids lourds",
      "Infrastructures portuaires",
    ],
  };
  const paveTypes = [
    {
      name: "Pavés Standard Confort",
      dimensions: "Épaisseur 6cm",
      weight: "3,2 kg ~ 3,8 kg",
      resistance: "3 MPa (B30)",
      description:
        "Pavés esthétiques pour particuliers et petits promoteurs. Formes et couleurs variées pour valoriser votre patrimoine immobilier.",
      features: ["Esthétique variée", "Anti-dérapant", "Confort et sécurité", "Valorisation immobilière"],
      usage: "Cours, terrasses, allées résidentielles",
      price: "6 000 – 6 500 FCFA/m²",
      variants: paves6,
      image: "/paves/couverture-paves-pose-paves-pietonnier.jpg",
      images: [
        "/placeholder-11wsf.png",
        "/placeholder-11wsf.png",
        "/placeholder-11wsf.png",
      ],
      technicalDetails: [
        "Classe de résistance B30",
        "Absorption d'eau < 6%",
        "Résistance au gel-dégel",
        "Surface antidérapante",
        "Dimensions précises ±2mm",
      ],
      applications: [
        "Cours de maisons individuelles",
        "Terrasses et patios",
        "Allées piétonnes",
        "Zones de stationnement léger",
      ],
    },
    {
      name: "Pavés Routiers Haute Performance",
      dimensions: "Épaisseur 8cm et 13cm",
      weight: "3,5 kg ~ 17 kg",
      resistance: "3,6 MPa (B36)",
      description: "Pavés haute résistance pour trafic lourd. Conçus pour les grands projets BTP, zones industrielles et infrastructures.",
      features: [
        "Résistance au trafic lourd",
        "Longévité supérieure",
        "Sécurité garantie",
        "Fiabilité éprouvée",
      ],
      usage: "Routes, zones industrielles, entrepôts",
      price: "12 000 – 16 000 FCFA/m²",
      variants: [ paves8, paves13 ],
      image: "/paves/couverture-paves-footer.png",
      images: [
        "/placeholder-11wsf.png",
        "/placeholder-11wsf.png",
        "/placeholder-11wsf.png",
      ],
      technicalDetails: [
        "Classe de résistance B36",
        "Résistance à la compression 3,6 MPa",
        "Résistance au trafic lourd",
        "Longévité exceptionnelle",
        "Stabilité dimensionnelle",
      ],
      applications: [
        "Routes principales et secondaires",
        "Zones industrielles",
        "Aires de stationnement",
        "Infrastructures lourdes",
      ],
    },
    {
      name: "Pavés Premium Drainant",
      dimensions: "Épaisseur 6cm, 8cm et 13cm",
      weight: "3,2 kg ~ 17 kg",
      resistance: "3 à 3,6 MPa",
      description: "Pavés techniques pour projets urbains. Drainage efficace et respect des normes pour une gestion optimale des eaux pluviales.",
      features: [
        "Normes techniques respectées",
        "Drainage efficace",
        "Gestion eaux pluviales",
        "Image moderne urbaine",
      ],
      usage: "Projets urbains, municipalités, aménagements",
      price: "7 500 – 17 000 FCFA/m²",
      variants: [ ...paves6, paves8, paves13 ],
      image: "/paves/couverture-paves.jpg",
      images: [
        "/placeholder-11wsf.png",
        "/placeholder-11wsf.png",
        "/placeholder-11wsf.png",
      ],
      technicalDetails: [
        "Perméabilité élevée",
        "Gestion eaux pluviales",
        "Conformité normes urbaines",
        "Résistance adaptée à l'usage",
        "Innovation environnementale",
      ],
      applications: [
        "Projets urbains municipaux",
        "Zones piétonnes drainantes",
        "Parkings perméables",
        "Infrastructure environnementale",
      ],
    },
  ];

  const getRelatedProducts = (currentProduct: any, currentGamme: string) => {
    const gamme = paveTypes.find(g => g.name === currentGamme)
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
    if (parentName.includes('(PSC)')) return 'Standard Confort'
    if (parentName.includes('(PRHP)')) return 'Routiers Haute Performance'
    if (parentName.includes('(PPD)')) return 'Premium Drainant'
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
                  Découvrez nos 3 gammes de pavés : Standard Confort, Routiers Haute Performance et Premium Drainant. Pour tous vos projets d'aménagement extérieur et d'infrastructure urbaine.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Les Pavés Soliid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              3 gammes de pavés pour répondre à tous vos besoins d'aménagement : résidentiel, routier et urbain drainant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paveTypes.map((pave, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardHeader className="space-y-4">
                  <div
                    className="aspect-video bg-muted rounded-lg overflow-hidden"
                  >
                    <Image
                      src={pave.image || "/placeholder-11wsf.png"}
                      alt={pave.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle
                      className="text-xl text-foreground transition-colors"
                    >
                      {pave.name}
                    </CardTitle>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {pave.variants.map((variant, idx) => (
                          <Button
                            key={idx}
                            className="flex-1 text-sm border cursor-pointer border-primary bg-primary-foreground text-primary hover:text-primary-foreground"
                            size="sm"
                            onClick={() => handleProductClick(variant, pave.name)}
                          >
                            {variant.name.replace('Soliid ', '')}
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
