import Link from "next/link"
import Image from "next/image"
import {Facebook, Flame, Instagram, Linkedin, Mail, Phone} from "lucide-react"
import {borduresData, parpaingsData, pavesData} from "@/lib/product-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const popularParpaings = parpaingsData.slice(0, 3)
  const popularPaves = pavesData.slice(0, 3)

  return (
    <footer className="relative bg-muted/50 border-t border-border overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/parpaing-soliid.png"
          alt="Parpaing Soliid"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-red-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Image src="/logo/logo-soliid.png" alt="Soliid Logo" width={120} height={40} className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              Soliid™ est une marque détenue et exploitée par Buildermats Industrie SARL, immatriculée au Registre de
              Commerce sous le numéro <span className={"font-semibold"}>CM-DLA-01-2025-B1300928</span>.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/soliidcameroun" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/soliid.cameroun" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/soliid-cameroun" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@soliid.cameroun6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M16.66 1.03h4.89c.05 2.03.88 3.86 2.19 5.21 1.41 1.27 3.25 2.1 5.3 2.24v5.04c-1.91-.05-3.71-.49-5.33-1.25-.78-.38-1.45-.77-2.08-1.2-.01 3.65.01 7.3-.03 10.93-.1 1.85-.72 3.54-1.71 4.95-1.65 2.37-4.33 3.92-7.37 4.01-.12.01-.27.01-.41.01-1.73 0-3.35-.48-4.73-1.32-2.51-1.51-4.24-4.09-4.56-7.09-.03-.63-.04-1.25-.01-1.86.49-4.78 4.49-8.48 9.36-8.48.55 0 1.08.05 1.6.14.03 1.85-.05 3.7-.05 5.55-.42-.15-.91-.24-1.42-.24-1.87 0-3.46 1.19-4.05 2.86-.13.43-.21.92-.21 1.43 0 .21.01.41.04.61.33 2.05 2.09 3.59 4.2 3.59.06 0 .12 0 .18 0 1.46-.04 2.73-.83 3.45-1.99.27-.37.45-.82.51-1.31.13-2.24.08-4.46.09-6.7.01-5.03-.01-10.06.03-15.08z"/>
                </svg>
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
                    {product.slug.includes("nde") && <Flame className="h-3.5 w-3.5 text-orange-500" />}
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
              {borduresData.map((product) => (
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
