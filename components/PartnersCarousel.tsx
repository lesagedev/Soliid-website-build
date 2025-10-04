"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  { name: "Partenaire 1", logo: "/partners/partner-1.jpg" },
  { name: "Partenaire 2", logo: "/partners/partner-2.jpg" },
  { name: "Partenaire 3", logo: "/partners/partner-3.jpg" },
  { name: "Partenaire 4", logo: "/partners/partner-4.jpg" },
  { name: "Partenaire 5", logo: "/partners/partner-5.jpg" },
  { name: "Partenaire 6", logo: "/partners/partner-6.jpg" },
]

export default function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed

      // Reset scroll when reaching halfway point (seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30)

    return () => clearInterval(intervalId)
  }, [])

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Nos partenaires</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ils nous font confiance pour leurs projets de construction
          </p>
        </div>

        <div ref={scrollRef} className="flex gap-12 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center p-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
