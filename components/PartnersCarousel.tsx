"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const partners = [
  { name: "Communauté Urbaine de Yaoundé", logo: "/partners/logo_communaute_urbaine_yaounde.png" },
  { name: "Port Autonome de Douala", logo: "/partners/logo_pad-800x800-nobg.png" },
  { name: "Port Autonome de Kribi", logo: "/partners/logo_pak.png" },
]

export default function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [shouldDuplicate, setShouldDuplicate] = useState(false)

  useEffect(() => {
    const checkIfDuplicationNeeded = () => {
      if (!scrollRef.current) return

      const containerWidth = scrollRef.current.offsetWidth
      const itemWidth = 160 + 48 // w-40 (160px) + gap-12 (48px)
      const visibleItems = Math.floor(containerWidth / itemWidth)

      setShouldDuplicate(visibleItems < partners.length)
    }

    checkIfDuplicationNeeded()
    window.addEventListener("resize", checkIfDuplicationNeeded)

    return () => window.removeEventListener("resize", checkIfDuplicationNeeded)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || !shouldDuplicate) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [shouldDuplicate])

  const displayedPartners = shouldDuplicate ? [...partners, ...partners] : partners

  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ils nous font confiance pour leurs projets
          </p>
        </div>

        <div
          ref={scrollRef}
          className={`flex gap-6 sm:gap-8 md:gap-12 ${shouldDuplicate ? "overflow-x-hidden" : "overflow-x-auto justify-center"}`}
          style={{ scrollBehavior: "smooth" }}
        >
          {displayedPartners.map((partner, index) => (
            <div
              key={index}
              title={partner.name}
              className="flex-shrink-0 w-32 h-20 sm:w-36 sm:h-22 md:w-40 md:h-24 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full flex items-center justify-center">
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