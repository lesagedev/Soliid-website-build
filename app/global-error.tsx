"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Global error occurred:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl font-bold text-destructive">500</h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">Erreur serveur</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
                Une erreur critique s'est produite. Nos équipes ont été notifiées et travaillent à résoudre le problème.
              </p>
            </div>

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
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
