"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Calculator, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/product-data"
import { useState } from "react"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
  calculatorLink: string
  relatedProducts?: Array<{
    id: string
    name: string
    data: Product
  }>
  onProductChange?: (product: Product) => void
  currentProductName?: string
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
  calculatorLink,
  relatedProducts = [],
  onProductChange,
  currentProductName,
}: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold pr-8">{product.name}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />

            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-video bg-muted rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                    index === currentImageIndex ? "border-primary shadow-md" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Miniature ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Product Info */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Dimensions</p>
                <p className="font-semibold">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Poids</p>
                <p className="font-semibold">{product.weight}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Résistance</p>
                <p className="font-semibold">{product.resistance}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gamme</p>
                <p className="font-semibold">{product.gamme}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground text-justify">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Caractéristiques</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Usage recommandé</h3>
              <p className="text-muted-foreground text-sm">{product.usage}</p>
            </div>

            {product.technicalDetails && product.technicalDetails.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Détails techniques</h3>
                <ul className="space-y-1">
                  {product.technicalDetails.map((detail, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="secondary">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Produits de la même gamme</h3>
              <div className="flex gap-2 flex-wrap">
                {relatedProducts.map((relatedProduct) => (
                  <Button
                    key={relatedProduct.id}
                    variant={currentProductName === relatedProduct.data.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => onProductChange?.(relatedProduct.data)}
                  >
                    {relatedProduct.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button asChild className="flex-1">
              <Link href={calculatorLink}>
                <Calculator className="mr-2 h-4 w-4" />
                Calculer mes besoins
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
