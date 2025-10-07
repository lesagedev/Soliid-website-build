"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw, Mail } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Error occurred:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* M.SOLIID Mascot */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <Image
              src="/home/mascot-soliid-paves.png"
              alt="M.SOLIID - Mascotte Soliid"
              width={256}
              height={256}
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-bold text-destructive">Oups !</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">Une erreur s'est produite</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
            Quelque chose s'est mal passé. Ne vous inquiétez pas, M.SOLIID est là pour vous aider !
          </p>
          {error.digest && (
            <p className="text-sm text-muted-foreground font-mono bg-muted px-4 py-2 rounded-lg inline-block">
              Code d'erreur : {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg" className="bg-primary hover:bg-primary/90">
            <RefreshCcw className="mr-2 h-5 w-5" />
            Réessayer
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contactez-nous
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Si le problème persiste, n'hésitez pas à{" "}
            <Link href="/contact" className="text-primary hover:underline">
              nous contacter
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
