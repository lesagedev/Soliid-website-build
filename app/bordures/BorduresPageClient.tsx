"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Truck, Shield, Zap, Download } from "lucide-react"
import Image from "next/image"
import QuoteButton from "@/components/quote-button"
import { trackEvent } from "@/lib/analytics"
import { borduresData } from "@/lib/product-data"

export default function BorduresPageClient() {
  useEffect(() => {
    trackEvent.pageView("Bordures")
  }, [])

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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Bordures en Béton</h1>
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
                <QuoteButton variant="outline" size="lg">
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
              <p className="text-muted-foreground">Bordures droites facilitant une pose rapide et précise</p>
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
            {borduresData.map((bordure) => (
              <Card key={bordure.slug} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <Link href={`/bordures/${bordure.slug}`}>
                  <div className="aspect-[4/3] relative overflow-hidden cursor-pointer">
                    <Image
                      src={bordure.images[0] || "/placeholder.svg"}
                      alt={bordure.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/bordures/${bordure.slug}`}>
                      <CardTitle className="text-xl cursor-pointer hover:text-primary transition-colors">
                        {bordure.name}
                      </CardTitle>
                    </Link>
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
                    <Button asChild className="flex-1">
                      <Link href={`/bordures/${bordure.slug}`}>Voir plus</Link>
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
            <QuoteButton
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </QuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}
