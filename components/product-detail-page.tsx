"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download, Calculator, CheckCircle, ArrowLeft } from "lucide-react"
import { type ProductData, getRelatedProducts } from "@/lib/product-data"

interface ProductDetailPageProps {
  product: ProductData
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const relatedProducts = getRelatedProducts(product)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const getCategoryPath = () => {
    switch (product.category) {
      case "parpaings":
        return "/parpaings"
      case "paves":
        return "/paves"
      case "bordures":
        return "/bordures"
      default:
        return "/"
    }
  }

  const getCategoryName = () => {
    switch (product.category) {
      case "parpaings":
        return "Parpaings"
      case "paves":
        return "Pavés"
      case "bordures":
        return "Bordures"
      default:
        return "Produits"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href={getCategoryPath()} className="hover:text-foreground transition-colors">
              {getCategoryName()}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href={getCategoryPath()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux {getCategoryName().toLowerCase()}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                {product.category === "parpaings" && (
                  <div className="absolute top-4 right-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 bg-amber-700 rounded-full animate-pulse"></span>
                      Disponible à Douala à partir de Janvier 2026
                    </span>
                  </div>
                )}
                {product.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {product.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all ${
                        index === currentImageIndex
                          ? "border-primary shadow-lg scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Thumbnail ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="mt-16 hidden lg:block">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Produits similaires</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {relatedProducts.map((relatedProduct) => (
                      <Link
                        key={relatedProduct.slug}
                        href={`/${relatedProduct.category}/${relatedProduct.slug}`}
                        className="group"
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-all">
                          <div className="aspect-square relative overflow-hidden">
                            <Image
                              src={relatedProduct.images[0] || "/placeholder.svg"}
                              alt={relatedProduct.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {relatedProduct.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{relatedProduct.dimensions}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-4xl font-bold text-foreground">{product.name}</h1>
                  {product.gamme && (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {product.gamme}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-base px-4 py-2">
                    {product.dimensions}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <span className="font-semibold text-foreground block mb-1">Poids</span>
                      <p className="text-muted-foreground text-lg">{product.weight}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <span className="font-semibold text-foreground block mb-1">Résistance</span>
                      <p className="text-muted-foreground text-lg">{product.resistance}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">Description</h2>
                <p className="text-muted-foreground text-justify leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Caractéristiques principales</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Détails techniques</h3>
                <ul className="space-y-3">
                  {product.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Applications recommandées</h3>
                <p className="text-muted-foreground mb-3">{product.usage}</p>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t">
                <Button variant="outline" asChild className="w-full h-12 text-base bg-transparent">
                  <Link href="/ressources">
                    <Download className="mr-3 h-5 w-5" />
                    Télécharger la fiche technique
                  </Link>
                </Button>
                <Button asChild className="w-full h-12 text-base">
                  <Link href="/calculateurs">
                    <Calculator className="mr-3 h-5 w-5" />
                    Calculer mon besoin
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 md:hidden">
              <h2 className="text-3xl font-bold text-foreground mb-8">Produits similaires</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.slug}
                    href={`/${relatedProduct.category}/${relatedProduct.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={relatedProduct.images[0] || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{relatedProduct.dimensions}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
