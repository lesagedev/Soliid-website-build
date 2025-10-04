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
import Image from "next/image"
import QuoteButton from "@/components/quote-button"
import PartnersCarousel from "@/components/PartnersCarousel"

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
                  Soliid™ - Une marque Buildermats Industrie
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Vos projets, nos solutions de <span className="text-primary">préfabrication</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Nous disposons de la plus grosse <span className={"font-medium"}>capacité de production</span> de
                  parpaings, pavés et bordures Premium{" "}
                  <span className={"font-medium"}> au Cameroun et en Afrique Centrale</span> pour tous vos projets de
                  construction.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/ressources">
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger nos guides
                  </Link>
                </Button>
                <QuoteButton variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Demander un devis
                </QuoteButton>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Disponibilité</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Livraison rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Solidité</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img
                  src="/home/20190912_155144.jpg"
                  alt="Parpaings Soliid Buildermats pour la construction au Cameroun"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-2xl border border-border backdrop-blur-sm">
                <div className="flex items-center gap-6">
                  {/* Mascot Image */}
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 p-1 shadow-lg">
                      <Image
                        src="/home/mascot-soliid-paves.png"
                        alt="Mascotte M.SOLIID - Expert en construction"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain rounded-full"
                        priority
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3500+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Projets réalisés</div>
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Ans d'expérience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mascot Introduction Section */}
      <section className="pt-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="mr-2">🏗️</span>
                  Echangez avec un expert 24h/24
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Votre expert en <span className="text-primary">construction</span>
                </h2>
                <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                  <span className="text-primary font-semibold">M. SOLIID</span>, notre expert, vous accompagne dans tous
                  vos projets de construction. Avec son expérience et sa passion pour la qualité, il veille à ce que
                  chaque parpaing, pavé et bordure réponde aux plus hauts standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'expertise</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction garantie</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Parler à un expert
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/home/mascot-soliid-paves.png"
                  alt="M.SOLIID - Mascotte experte en construction Buildermats"
                  width={600}
                  height={800}
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-white p-3 rounded-full shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Expert disponible</span>
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
                <h2 className="text-3xl lg:text-4xl font-medium text-foreground text-balance">
                  <span className={"font-bold text-primary"}>Soliid™</span>, la référence des éléments prefabriquées en
                  beton
                </h2>
                <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                  Buildermats Industrie est une entreprise spécialisée dans la préfabrication industrielle entre autres
                  de Parpaings premium, Pavés et Bordures en beton, pour tous vos projets de construction au Cameroun.
                  Grâce à un savoir-faire approuvé et à une exigence constante en matière de qualité, nos produits mis à
                  disposition sous la marque SOLIID, sont indispensables pour bâtir des infrastructures durables et
                  esthétiques.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Ans d'experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">3500+</div>
                  <div className="text-sm text-muted-foreground">Projets Réalisés</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Employés</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Made in Cameroun</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src="/home/parpaing-soliid.png"
                  alt="Parpaings Soliid Buildermats pour la construction au Cameroun"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section id={"solutions"} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Nos solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Des matériaux de construction de Haute Qualité pour tous vos projets : résidentiels, commerciaux,
              industriels & travaux publics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Parpaings Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center relative">
                  <img
                    src="/parpaing/couverture-parpaings-2.png"
                    alt="Parpaings Soliid Buildermats pour la construction au Cameroun"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 bg-amber-700 rounded-full animate-pulse"></span>
                      Disponible à Douala à partir de Janvier 2026
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">Parpaings</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Parpaings de qualité premium de 15 cm, 20 cm & Hourdis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Capacité de production 20 000 parpaings/Jr
                  </li>
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
                    Hydrofuge
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
                  <img
                    src="/paves/couverture-paves.png"
                    alt="Parpaings Soliid Buildermats pour la construction au Cameroun"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">Pavés</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Pavés décoratifs et fonctionnels pour les cours, places, trottoirs & routes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Capacité de production 900m² de pavés/Jr
                  </li>
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
                    Drainant
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
                  <img
                    src="/bordures/couverture-bordure.jpg"
                    alt="Parpaings Soliid Buildermats pour la construction au Cameroun"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">Bordures</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Bordures en béton pour l'aménagement urbain et la délimitation d'espaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Capacité de production 2 000 ml bordures/Jr
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    Travaux routiers
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
              <h3 className="text-xl font-semibold text-foreground">Solidité</h3>
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
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Support Expert</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Accompagnement technique et conseils personnalisés pour vos projets.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto notranslate">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Douala</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Yaoundé</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Kribi</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Limbé</h3>
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
              <QuoteButton variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Obtenir un devis
              </QuoteButton>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <PartnersCarousel />

      <Footer />
    </div>
  )
}
