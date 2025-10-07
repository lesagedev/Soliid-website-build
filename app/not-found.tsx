import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
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
            <h1 className="text-6xl sm:text-8xl font-bold text-primary">404</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">Page introuvable</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. M.SOLIID vous aide à retrouver votre
              chemin !
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <Search className="mr-2 h-5 w-5" />
                Contactez-nous
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Liens utiles :</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/parpaings" className="text-primary hover:underline">
                Parpaings
              </Link>
              <Link href="/paves" className="text-primary hover:underline">
                Pavés
              </Link>
              <Link href="/bordures" className="text-primary hover:underline">
                Bordures
              </Link>
              <Link href="/calculateurs" className="text-primary hover:underline">
                Calculateurs
              </Link>
              <Link href="/ressources" className="text-primary hover:underline">
                Ressources
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
