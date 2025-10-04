import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Linkedin, Flame } from "lucide-react"
import { parpaingsData, pavesData, borduresData } from "@/lib/product-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const popularParpaings = parpaingsData.slice(0, 3)
  const popularPaves = pavesData.slice(0, 3)
  const popularBordures = borduresData.slice(0, 2)

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Image src="/logo/logo-soliid.png" alt="Soliid Logo" width={120} height={40} className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              Soliid™ est une marque détenue et exploitée par Buildermats Industrie SARL, immatriculée au Registre de
              Commerce sous le numéro <span className={"font-semibold"}>CM-DLA-01-2025-B1300928</span>.
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

          {/* Products - Parpaings */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Parpaings</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/parpaings"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Tous les parpaings
                </Link>
              </li>
              {popularParpaings.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/parpaings/${product.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    {product.name
                      .replace(" Standard Premium", "")
                      .replace(" Standard Hydro Premium", "")
                      .replace(" Premium Haute Performance", "")}
                    {product.slug.includes("parpaing-15") && <Flame className="h-3.5 w-3.5 text-orange-500" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Pavés */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Pavés</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/paves" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Tous les pavés
                </Link>
              </li>
              {popularPaves.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/paves/${product.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    {product.name.replace("Soliid ", "")}
                    {product.slug.includes("pave-6cm") && <Flame className="h-3.5 w-3.5 text-orange-500" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Bordures */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Bordures</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/bordures"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Toutes les bordures
                </Link>
              </li>
              {popularBordures.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/bordures/${product.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {product.name.replace("Soliid ", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Liens Utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculateurs" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculateurs
                </Link>
              </li>
              <li>
                <Link
                  href="https://tally.so/r/waWV4W"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Obtenir un devis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <div>
                    <a href="tel:+237675887676" className="hover:underline">
                      +237 675 887 676
                    </a>
                  </div>
                  <div>
                    <a href="tel:+237656770009" className="hover:underline">
                      +237 656 770 009
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <a href="mailto:contact@buildermats.com" className="hover:underline">
                    contact@buildermats.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Soliid™ - Tous droits réservés. Préfabriqués Industriels.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
