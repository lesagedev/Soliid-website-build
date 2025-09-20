"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Calculator, ArrowRight, Truck, Shield, Zap, Download} from "lucide-react"
import ProductModal from "@/components/product-modal"
import Image from "next/image";
import QuoteButton from "@/components/quote-button";

export default function BorduresPageClient() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const bordures = [
    {
      name: "Bordure P1 - SOLIID",
      dimensions: "50 x 8 x 20 cm",
      weight: "23 kg",
      resistance: "6 MPa",
      description:
        "Bordure de trottoir compacte et maniable, parfaite pour les espaces restreints et les aménagements délicats. Sa taille réduite facilite la manipulation tout en conservant une résistance exceptionnelle de 6 MPa.",
      features: [
        "Format compact et maniable",
        "Résistance de 6 MPa maintenue",
        "Poids réduit de 23 kg",
        "Installation facilitée",
        "Classe B36 certifiée",
        "Polyvalence d'utilisation",
      ],
      usage: "Parfaite pour les bordures de trottoir, allées piétonnes et délimitation de jardins",
      applications: [
        "Bordures de trottoir en zones résidentielles",
        "Allées piétonnes et cheminements",
        "Délimitation d'espaces verts",
        "Aménagements paysagers",
        "Projets de rénovation urbaine",
      ],
      technicalDetails: [
        "Longueur : 50 cm pour manipulation aisée",
        "Largeur : 8 cm pour espaces restreints",
        "Hauteur : 20 cm pour délimitation claire",
        "Poids optimisé : 23 kg seulement",
        "Béton haute qualité classe B36",
        "Finition soignée et durable",
      ],
      images: [
        "/bordures/bordure-p1-allee-pietonne.jpg",
        "/bordure-p1-installation-facile.jpg",
        "/bordure-p1-allee-pietonne.jpg",
      ],
    },
    {
      name: "Bordure T2 - SOLIID",
      dimensions: "100 x 15 x 25 cm",
      weight: "70 kg",
      resistance: "6 MPa",
      description:
        "Bordure de trottoir haute résistance spécialement conçue pour les aménagements urbains exigeants. La bordure T2 SOLIID offre une stabilité exceptionnelle grâce à son poids de 70 kg et sa résistance de 6 MPa, garantissant une durabilité optimale dans le temps.",
      features: [
        "Résistance mécanique de 6 MPa",
        "Classe de béton B36 certifiée",
        "Poids de 70 kg pour stabilité maximale",
        "Dimensions optimisées 100x15x25 cm",
        "Finition lisse et esthétique",
        "Résistance aux intempéries",
      ],
      usage: "Idéale pour les bordures de trottoir, aménagements urbains et séparation de voirie",
      applications: [
        "Bordures de trottoir en milieu urbain",
        "Délimitation des voies de circulation",
        "Aménagements d'espaces publics",
        "Séparation piétons/véhicules",
        "Projets d'infrastructure routière",
      ],
      technicalDetails: [
        "Longueur : 100 cm pour faciliter la pose",
        "Largeur : 15 cm pour une emprise optimale",
        "Hauteur : 25 cm pour une délimitation efficace",
        "Béton de classe B36 haute performance",
        "Résistance à la compression : 6 MPa",
        "Conformité aux normes camerounaises",
      ],
      images: [
        "/bordures/bordure-t2-allee-pietonne.jpg",
        "/placeholder-11wsf.png",
        "/placeholder-ftxja.png",
      ],
    },
    {
      name: "Bordure A2 - SOLIID",
      dimensions: "100 x 15 x 25 cm",
      weight: "70 kg",
      resistance: "6 MPa",
      description:
        "Bordure premium de classe B60 pour les aménagements de prestige. Alliant performance technique et esthétique soignée, elle est parfaite pour les zones commerciales et espaces publics de qualité.",
      features: [
        "Classe B60 premium",
        "Finition esthétique soignée",
        "Résistance maximale 6 MPa",
        "Durabilité garantie",
        "Stabilité optimale 70 kg",
        "Qualité supérieure",
      ],
      usage: "Idéale pour les aménagements de prestige, zones commerciales et espaces publics de qualité",
      applications: [
        "Aménagements de prestige",
        "Zones commerciales et centres-villes",
        "Espaces publics de qualité",
        "Projets architecturaux exigeants",
        "Rénovations urbaines haut de gamme",
      ],
      technicalDetails: [
        "Dimensions premium : 100x15x25 cm",
        "Béton classe B60 de prestige",
        "Finition lisse et esthétique",
        "Résistance garantie 6 MPa",
        "Contrôle qualité renforcé",
        "Durabilité exceptionnelle",
      ],
      images: [
        "/bordures/bordure-a2-allee-pietonne.jpg",
        "/bordure-a2-amenagement-prestige.jpg",
        "/bordure-a2-zone-commerciale.jpg",
      ],
    },
    {
      name: "Bordure CS2 - SOLIID",
      dimensions: "100 x 25 x 13.5 cm",
      weight: "70 kg",
      resistance: "6 MPa",
      description:
        "Bordure haute performance de classe B60, conçue pour les infrastructures les plus exigeantes. Sa résistance exceptionnelle et sa durabilité en font le choix idéal pour les zones industrielles et les aménagements lourds.",
      features: [
        "Classe B60 haute performance",
        "Résistance maximale de 6 MPa",
        "Durabilité exceptionnelle",
        "Format large 25 cm",
        "Stabilité renforcée 70 kg",
        "Résistance aux charges lourdes",
      ],
      usage: "Spécialement conçue pour les infrastructures routières, zones industrielles et aménagements lourds",
      applications: [
        "Infrastructures routières principales",
        "Zones industrielles et logistiques",
        "Aménagements portuaires",
        "Aires de stationnement poids lourds",
        "Projets d'infrastructure majeurs",
      ],
      technicalDetails: [
        "Longueur : 100 cm standard",
        "Largeur : 25 cm pour stabilité maximale",
        "Hauteur : 13.5 cm optimisée",
        "Béton classe B60 ultra-résistant",
        "Résistance aux charges exceptionnelles",
        "Certification qualité supérieure",
      ],
      images: [
        "/bordures/bordure-cs2-allee-pietonne.jpg",
        "/bordure-cs2-infrastructure-routiere.jpg",
        "/bordure-cs2-zone-industrielle.jpg",
      ],
    },
  ]

  const getRelatedProducts = (currentProduct: any) => {
    return bordures
      .filter(bordure => bordure.name !== currentProduct.name)
      .map(bordure => ({
        id: bordure.name,
        name: bordure.name,
        data: bordure
      }))
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleProductChange = (productData: any) => {
    setSelectedProduct(productData)
  }

  return (
    <div className="min-h-screen bg-background">
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
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Solutions complètes de bordures en béton pour l'aménagement urbain, la délimitation d'espaces et la
                sécurisation des voiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
                  src="/bordures/couverture-bordure.jpg"
                  alt="Pavés Soliid pour aménagement au Cameroun"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>


              {/* M.SOLIID Mascot Overlay */}
              <div className="absolute bottom-0 right-4 w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80">
                <Image
                  src="/bordures/mascot-soliid-bordure.png"
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
                Conçues pour résister aux charges lourdes et aux conditions climatiques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation Rapide</h3>
              <p className="text-muted-foreground">
                Bordures droites facilitant une pose rapide et précise
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison sur palettes</h3>
              <p className="text-muted-foreground">
                Livraison rapide et sécurisée sur palettes pour une manutention aisée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Les Modèles de Bordures SOLIID</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos modèles standards de bordures : P1, A2, T2 & CS2
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bordures.map((bordure, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden" onClick={() => handleProductClick(bordure)}>
                  <img
                    src={bordure.images[0] || "/placeholder.svg"}
                    alt={bordure.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle
                      className="text-xl cursor-pointer hover:text-primary transition-colors"
                      onClick={() => handleProductClick(bordure)}
                    >
                      {bordure.name}
                    </CardTitle>
                    <Badge variant="secondary">{bordure.dimensions}</Badge>
                  </div>
                  <CardDescription className="text-base">{bordure.description.substring(0, 120)}...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Résistance:</span>
                      <p className="text-muted-foreground">{bordure.resistance}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Poids:</span>
                      <p className="text-muted-foreground">{bordure.weight}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Applications principales :</h4>
                    <div className="flex flex-wrap gap-1">
                      {bordure.applications.slice(0, 2).map((app, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                      {bordure.applications.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{bordure.applications.length - 2} autres
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => handleProductClick(bordure)} className="flex-1 cursor-pointer">
                      Voir plus
                    </Button>
                  </div>
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
            <QuoteButton  variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          calculatorLink="/calculateurs"
          relatedProducts={getRelatedProducts(selectedProduct)}
          onProductChange={handleProductChange}
          currentProductName={selectedProduct.name}
        />
      )}
    </div>
  )
}
