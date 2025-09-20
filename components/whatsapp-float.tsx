"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const whatsappNumber = "+237675887676"
  const whatsappMessage = encodeURIComponent(
    "Bonjour Buildermats, je souhaiterais obtenir des informations sur vos produits Soliid. Merci !",
  )

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        asChild
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </Button>
    </div>
  )
}
