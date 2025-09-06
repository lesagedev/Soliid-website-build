import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calculator,
  Download,
  Phone,
  CheckCircle,
  Building,
  Truck,
  Shield,
  Clock,
  Users,
  MapPin,
  Star,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Soliid™ - Une marque Buildermats
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Vos projets, nos solutions de <span className="text-primary">préfabrication</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Parpaings, pavés et bordures de qualité supérieure pour tous vos projets de construction au Cameroun.
                  Soliid™, une marque Buildermats - Construire facile.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/calculateurs">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculer vos besoins
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Demander un devis
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Qualité garantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Livraison rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">15 ans d'expérience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Building className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Chantier de construction</h3>
                  <p className="text-muted-foreground">Parpaings et pavés Soliid</p>
                </div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projets réalisés</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Ans d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Buildermats, votre partenaire construction depuis 2009
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soliid™ est la marque phare de Buildermats, société camerounaise spécialisée dans la préfabrication de
                  matériaux de construction. Depuis plus de 15 ans, nous accompagnons les professionnels et particuliers
                  dans leurs projets de construction avec des solutions innovantes et durables.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">2009</div>
                  <div className="text-sm text-muted-foreground">Année de création</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Employés</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Made in Cameroun</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Truck className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Usine de production</h3>
                  <p className="text-muted-foreground">Buildermats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Nos solutions de préfabrication
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Des matériaux de construction de haute qualité pour tous vos projets, du résidentiel au commercial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Parpaings Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <Building className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Parpaings</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Parpaings de différentes dimensions pour tous vos murs porteurs et cloisons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Dimensions standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Résistance élevée
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Isolation optimale
                  </li>
                </ul>
                <div className="flex gap-2 pt-4">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/parpaings">Voir plus</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/calculateurs">
                      <Calculator className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pavés Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1 p-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                    <div className="w-8 h-8 bg-primary/70 rounded"></div>
                    <div className="w-8 h-8 bg-primary/70 rounded"></div>
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">Pavés</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Pavés décoratifs et fonctionnels pour vos allées, terrasses et espaces extérieurs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Formes variées
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Résistance au trafic
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Entretien minimal
                  </li>
                </ul>
                <div className="flex gap-2 pt-4">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/paves">Voir plus</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/calculateurs">
                      <Calculator className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bordures Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-4 bg-primary rounded-sm"></div>
                    <div className="w-16 h-4 bg-primary/70 rounded-sm"></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">Bordures</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Bordures en béton pour l'aménagement urbain et la délimitation d'espaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Aménagement urbain
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Installation facile
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Durabilité garantie
                  </li>
                </ul>
                <div className="flex gap-2 pt-4">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/bordures">Voir plus</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/calculateurs">
                      <Calculator className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Ce que disent nos clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellente qualité des parpaings et livraison respectée. Buildermats est devenu notre fournisseur de
                  référence pour tous nos chantiers."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Jean-Paul Mbarga</div>
                    <div className="text-sm text-muted-foreground">Entrepreneur BTP</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Les pavés Soliid ont transformé notre terrasse. Qualité exceptionnelle et rendu esthétique parfait.
                  Je recommande vivement !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Marie Fotso</div>
                    <div className="text-sm text-muted-foreground">Particulier</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Service client exceptionnel et produits conformes aux normes. Les bordures ont donné un aspect
                  professionnel à notre projet urbain."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Alain Nkomo</div>
                    <div className="text-sm text-muted-foreground">Architecte</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Pourquoi choisir Soliid ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Notre expertise et notre engagement qualité font de nous le partenaire idéal pour vos projets de
              construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Qualité Premium</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Matériaux conformes aux normes internationales avec contrôle qualité rigoureux.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Livraison Rapide</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Délais de livraison respectés partout au Cameroun avec notre réseau logistique.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Outils Pratiques</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Calculateurs en ligne pour estimer précisément vos besoins en matériaux.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Support Expert</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Accompagnement technique et conseils personnalisés pour vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Notre zone de couverture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nous livrons nos produits dans tout le Cameroun avec un réseau logistique optimisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Douala</h3>
              <p className="text-sm text-muted-foreground">Siège social et usine principale</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Yaoundé</h3>
              <p className="text-sm text-muted-foreground">Dépôt et centre de distribution</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Bafoussam</h3>
              <p className="text-sm text-muted-foreground">Point de vente régional</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Garoua</h3>
              <p className="text-sm text-muted-foreground">Livraison Grand Nord</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Utilisez nos calculateurs gratuits pour estimer vos besoins ou contactez-nous pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/calculateurs">
                <Calculator className="mr-2 h-5 w-5" />
                Calculer mes besoins
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/telechargements">
                <Download className="mr-2 h-5 w-5" />
                Télécharger nos guides
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
