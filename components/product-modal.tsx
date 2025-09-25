"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Calculator, CheckCircle, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface RelatedProduct {
  id: string
  name: string
  data: any
}

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    dimensions: string
    weight: string
    resistance: string
    description: string
    features: string[]
    usage: string
    variants?: string[]
    images: string[]
    technicalDetails: string[]
    applications: string[]
  }
  calculatorLink: string
  relatedProducts?: RelatedProduct[]
  onProductChange?: (productData: any) => void
  currentProductName?: string
}

export default ({isOpen, onClose, product, calculatorLink, relatedProducts = [], onProductChange, currentProductName}: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleProductNavigation = (productData: any) => {
    if (onProductChange) {
      onProductChange(productData)
      setCurrentImageIndex(0)
    }
  }

  const handleDownloadTechnicalSheet = () => {
    const link = document.createElement("a")
    link.href = `/fiches-techniques/${product.name.toLowerCase().replace(/\s+/g, "-")}.pdf`
    link.download = `Fiche-technique-${product.name.replace(/\s+/g, "-")}.pdf`
    link.click()
  }

  const extractProductBaseName = (fullName: string) => {
    return fullName
      .replace(/\s+Standard Premium$/i, '')
      .replace(/\s+Standard Hydro Premium$/i, '')
      .replace(/\s+Premium Haute Performance$/i, '')
      .trim()
  }

  const isCurrentProduct = (relatedProductName: string) => {
    if (!currentProductName) return false

    const currentBaseName = extractProductBaseName(currentProductName)
    const relatedBaseName = extractProductBaseName(relatedProductName)
    const productBaseName = extractProductBaseName(product.name)

    return relatedBaseName === currentBaseName ||
      relatedBaseName === productBaseName
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 gap-0 animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-6 py-4">
          <DialogHeader className="space-y-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-foreground">{product.name}</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Image Carousel */}
            <div className="space-y-6">
              <div className="relative aspect-square bg-muted rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-all duration-300"
                />
                {(product.name.toLowerCase().includes("parpaing") || product.name.toLowerCase().includes("hourdis"))  && (
                  <div className="absolute top-2 right-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white shadow-lg"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5 text-primary" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white shadow-lg"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </Button>
                  </>
                )}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {product.images.length}
                </div>
              </div>

              {/* Image thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all duration-200 hover:scale-105 ${
                        index === currentImageIndex
                          ? "border-primary shadow-lg"
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

              {/* Product Navigation */}
              {relatedProducts.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Voir aussi dans cette gamme :</h4>
                  <div className="flex flex-wrap gap-2">
                    {relatedProducts.map((relatedProduct) => {
                      const isCurrent = isCurrentProduct(relatedProduct.data.name);

                      return !isCurrent && (
                        <Button
                          key={relatedProduct.id}
                          variant="outline"
                          onClick={() => handleProductNavigation(relatedProduct.data)}
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ArrowRight className="h-3 w-3 mr-1" />
                          {relatedProduct.name}
                        </Button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Product Details - rest remains unchanged */}
            <div className="space-y-8">
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-base px-4 py-2">
                    {product.dimensions}
                  </Badge>
                  {product.variants &&
                    product.variants.map((variant, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                        {variant}
                      </Badge>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <span className="font-semibold text-foreground block mb-1">Poids</span>
                    <p className="text-muted-foreground text-lg">{product.weight}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <span className="font-semibold text-foreground block mb-1">Résistance</span>
                    <p className="text-muted-foreground text-lg">{product.resistance}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Description</h3>
                <p className="text-muted-foreground text-justify leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
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

              {/* Technical Details */}
              {product.technicalDetails && (
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
              )}

              {/* Applications */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Applications recommandées</h3>
                <p className="text-muted-foreground mb-3">{product.usage}</p>
                {product.applications && (
                  <ul className="space-y-3">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-6 border-t">
                <Button variant="outline" asChild className="w-full h-12 text-base bg-transparent">
                  <Link href="/ressources">
                    <Download className="mr-3 h-5 w-5" />
                    Télécharger la fiche technique
                  </Link>
                </Button>
                <Button asChild className="w-full h-12 text-base">
                  <Link href={calculatorLink}>
                    <Calculator className="mr-3 h-5 w-5" />
                    Calculer mon besoin
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
