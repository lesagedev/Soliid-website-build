import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-soliid-slr3MBUIxiYuUJXz5xOLDtHSAYxyIe.png"
              alt="Soliid Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Soliid™ est une marque exploitée par la société Buildermats. Votre partenaire de confiance pour la
              préfabrication au Cameroun.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Nos Produits</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/parpaings" className="text-muted-foreground hover:text-primary transition-colors">
                  Parpaings
                </Link>
              </li>
              <li>
                <Link href="/paves" className="text-muted-foreground hover:text-primary transition-colors">
                  Pavés
                </Link>
              </li>
              <li>
                <Link href="/bordures" className="text-muted-foreground hover:text-primary transition-colors">
                  Bordures
                </Link>
              </li>
              <li>
                <Link href="/calculateurs" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculateurs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Autres Produits</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Produits sur mesure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Éléments décoratifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Solutions spéciales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Akwa, Rue Drout Face collège Emilie SAKER, Douala Cameroun
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>+237 675 887 676</div>
                  <div>+237 656 770 009</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>contact@buildermats.com</div>
                  <div>ventes@buildermats.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Soliid™ - Buildermats. Tous droits réservés. Construire facile au Cameroun.</p>
        </div>
      </div>
    </footer>
  )
}
