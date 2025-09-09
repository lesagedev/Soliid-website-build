"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Calculator, CheckCircle, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
}

export default function ProductModal({ isOpen, onClose, product, calculatorLink }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleDownloadTechnicalSheet = () => {
    // Simulate PDF download
    const link = document.createElement("a")
    link.href = `/fiches-techniques/${product.name.toLowerCase().replace(/\s+/g, "-")}.pdf`
    link.download = `Fiche-technique-${product.name.replace(/\s+/g, "-")}.pdf`
    link.click()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground pr-8">{product.name}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Image thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{product.dimensions}</Badge>
                {product.variants &&
                  product.variants.map((variant, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {variant}
                    </Badge>
                  ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Poids:</span>
                  <p className="text-muted-foreground">{product.weight}</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Résistance:</span>
                  <p className="text-muted-foreground">{product.resistance}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Description</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Caractéristiques principales</h3>
              <ul className="space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Details */}
            {product.technicalDetails && (
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Détails techniques</h3>
                <ul className="space-y-1">
                  {product.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Applications recommandées</h3>
              <p className="text-sm text-muted-foreground">{product.usage}</p>
              {product.applications && (
                <ul className="space-y-1">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Button onClick={handleDownloadTechnicalSheet} variant="outline" className="w-full bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Télécharger la fiche technique
              </Button>
              <Button asChild className="w-full">
                <Link href={calculatorLink}>
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculer mon besoin
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
