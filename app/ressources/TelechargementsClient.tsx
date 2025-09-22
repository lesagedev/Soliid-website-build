"use client"

import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Download, FileText, BookOpen, Calculator, Building, Palette} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {useTally} from "@/hooks/useTally"
import {toast} from 'react-toastify'

interface DownloadItem {
  id: string
  title: string
  description: string
  type: "guide" | "catalog" | "technical"
  category: "parpaing" | "pave" | "bordure"
  fileSize: string
  pages: number
  link: string
  tags: string[]
  image: string
  popular?: boolean
}

const downloads: DownloadItem[] = [
  {
    id: "fiche-technique-parpaings-standard-premium",
    title: "Fiche technique SOLIID Parpaings Standard Premium",
    description: "Parpaings standard B40 pour élévation : caractéristiques techniques, composition et conditionnement.",
    type: "technical",
    category: "parpaing",
    fileSize: "450 KB",
    pages: 3,
    link: "/ressources/fiche-technique-parpaings-standard-premium.pdf",
    tags: ["parpaings", "construction", "élévation", "B40"],
    image: "/ressources/parpaings-standard-premium.png",
    popular: true
  },
  {
    id: "fiche-technique-parpaings-standard-hydro-premium",
    title: "Fiche technique SOLIID Parpaings Standard Hydro Premium",
    description: "Parpaings hydrofuges B40/B60 avec faible absorption d'eau (<3%) : caractéristiques techniques et conditionnement.",
    type: "technical",
    category: "parpaing",
    fileSize: "420 KB",
    pages: 2,
    link: "/ressources/fiche-technique-parpaings-standard-hydro-premium.pdf",
    tags: ["parpaings", "hydrofuge", "construction", "B40", "B60"],
    image: "/ressources/parpaings-hydro-premium.png",
    popular: false
  },
  {
    id: "fiche-technique-parpaings-haute-performance",
    title: "Fiche technique SOLIID Parpaings Haute Performance",
    description: "Parpaings haute performance B60 pour construction : caractéristiques techniques, composition hydrofuge et conditionnement.",
    type: "technical",
    category: "parpaing",
    fileSize: "480 KB",
    pages: 3,
    link: "/ressources/fiche-technique-parpaings-haute-performance.pdf",
    tags: ["parpaings", "haute-performance", "B60", "hydrofuge"],
    image: "/ressources/parpaings-haute-performance.png",
    popular: true
  },
  {
    id: "fiche-technique-pave-sawa-8cm",
    title: "Fiche technique SOLIID Pavé Haute Performance SaWa 8cm",
    description: "Pavé haute performance épaisseur 8cm : caractéristiques géométriques, mécaniques et conditionnement.",
    type: "technical",
    category: "pave",
    fileSize: "380 KB",
    pages: 3,
    link: "/ressources/fiche-technique-pave-sawa-8cm.pdf",
    tags: ["pave", "haute-performance", "extérieur", "8cm"],
    image: "/ressources/pave-sawa-8cm.png",
    popular: true
  },
  {
    id: "fiche-technique-paves-confort-6cm",
    title: "Fiche technique SOLIID Pavés Confort 6cm",
    description: "Pavés confort épaisseur 6cm pour revêtement de sol : spécifications, résistance mécanique et conditionnement.",
    type: "technical",
    category: "pave",
    fileSize: "520 KB",
    pages: 4,
    link: "/ressources/fiche-technique-paves-confort-6cm.pdf",
    tags: ["pave", "confort", "revêtement", "6cm", "trottoir"],
    image: "/ressources/paves-confort-6cm.png",
    popular: false
  },
  {
    id: "fiche-technique-paves-13cm",
    title: "Fiche technique SOLIID Pavés Haute Performance 13cm",
    description: "Pavé haute performance épaisseur 13cm : caractéristiques géométriques, mécaniques et conditionnement.",
    type: "technical",
    category: "pave",
    fileSize: "350 KB",
    pages: 2,
    link: "/ressources/fiche-technique-paves-13cm.pdf",
    tags: ["pave", "haute-performance", "cmr", "13cm"],
    image: "/ressources/paves-13cm.png",
    popular: true
  },
  {
    id: "fiche-technique-bordures",
    title: "Fiche technique SOLIID Bordures",
    description: "Gamme complète de bordures (T2, CS2, A2, P1) : spécifications géométriques, mécaniques et conditionnement.",
    type: "technical",
    category: "bordure",
    fileSize: "550 KB",
    pages: 5,
    link: "/ressources/fiche-technique-bordures.pdf",
    tags: ["bordures", "aménagement", "voirie", "NF EN 1340"],
    image: "/ressources/bordures-soliid.png",
    popular: true
  },
  {
    id: "catalogue-produits-parpaings",
    title: "Catalogue SOLIID Parpaings Premium",
    description: "Catalogue des parpaings SOLIID : standard premium, hydro premium et haute performance avec caractéristiques techniques détaillées.",
    type: "catalog",
    category: "parpaing",
    fileSize: "2.3 MB",
    pages: 5,
    link: "/ressources/catalogue-produits-parpaings.pdf",
    tags: ["catalogue", "parpaings", "premium", "hydrofuge", "haute-performance"],
    image: "/ressources/catalogue-parpaings.png",
    popular: true
  },
  {
    id: "catalogue-produits-paves",
    title: "Catalogue SOLIID Pavés",
    description: "Catalogue complet des pavés SOLIID : confort 6cm, haute performance 8cm et 13cm, caractéristiques techniques et applications.",
    type: "catalog",
    category: "pave",
    fileSize: "2.1 MB",
    pages: 5,
    link: "/ressources/catalogue-produits-paves.pdf",
    tags: ["catalogue", "paves", "confort", "haute-performance", "drainant"],
    image: "/ressources/catalogue-paves.png",
    popular: true
  },
  {
    id: "catalogue-produits-bordures",
    title: "Catalogue SOLIID Bordures",
    description: "Catalogue des bordures SOLIID : types P1, T2, A2, CS2 avec dimensions, résistance mécanique et destinations d'utilisation.",
    type: "catalog",
    category: "bordure",
    fileSize: "1.8 MB",
    pages: 4,
    link: "/ressources/catalogue-produits-bordures.pdf",
    tags: ["catalogue", "bordures", "trottoir", "voirie", "aménagement"],
    image: "/ressources/catalogue-bordures.png",
    popular: false
  },
  {
    id: "guide-parpaings-hydrofuges-milieu-humide",
    title: "Guide Parpaings Hydrofuges : Bâtir Durable en Milieu Humide",
    description: "Guide complet pour construire avec des parpaings hydrofuges en zones humides : avantages, techniques de pose et études de cas.",
    type: "guide",
    category: "parpaing",
    fileSize: "3.5 MB",
    pages: 12,
    link: "/ressources/parpaings-hydrofuges-batir-durable-en-milieu-humide.pdf",
    tags: ["guide", "hydrofuge", "construction-humide", "durabilité", "techniques"],
    image: "/ressources/guide-parpaings-hydrofuges.png",
    popular: true
  },
  {
    id: "guide-choisir-materiaux-qualite",
    title: "Guide : Comment Choisir des Matériaux de Qualité",
    description: "Guide pratique pour sélectionner les bons matériaux de construction : critères de qualité, normes et conseils d'experts.",
    type: "guide",
    category: "parpaing",
    fileSize: "2.8 MB",
    pages: 7,
    link: "/ressources/je-construis-comment-choisir-des-materiaux-de-qualite.pdf",
    tags: ["guide", "qualité", "choix-materiaux", "conseils", "normes"],
    image: "/ressources/guide-choix-materiaux.png",
    popular: true
  },
  {
    id: "guide-poser-paves-etape-par-etape",
    title: "Guide Pratique : Comment Poser les Pavés Étape par Étape",
    description: "Guide complet de pose de pavés : préparation, techniques professionnelles, finitions et entretien pour un résultat parfait.",
    type: "guide",
    category: "pave",
    fileSize: "4.2 MB",
    pages: 11,
    link: "/ressources/guide-pratique-comment-poser-les-paves-etape-par-etape.pdf",
    tags: ["guide", "pose-paves", "techniques", "tutoriel", "amenagement"],
    image: "/ressources/guide-poser-paves.png",
    popular: true
  },
  {
    id: "guide-bien-choisir-ses-paves",
    title: "Guide : Bien Choisir ses Pavés",
    description: "Guide comparatif pour choisir les pavés adaptés : types, épaisseurs, usages spécifiques et conseils techniques.",
    type: "guide",
    category: "pave",
    fileSize: "3.1 MB",
    pages: 10,
    link: "/ressources/bien-choisir-ses-paves.pdf",
    tags: ["guide", "choix-paves", "comparatif", "technique", "applications"],
    image: "/ressources/guide-choisir-paves.png",
    popular: false
  },
];

export default function TelechargementsClient() {
  const {openPopup, closePopup} = useTally('wzlEPE')

  const handleDownloadClick = (download: DownloadItem) => {
    openPopup({
      layout: 'modal',
      width: 600,
      hideTitle: true,
      overlay: true,
      hiddenFields: {
        ref: 'downloads',
        productType: download.category,
        document: download.title,
        file: download.id,
        mediaURL: `https://crm.buildermats.com/media/public${download.link}`,
        downloadTitle: `Télécharger ${download.title}`,
        fileType: getTypeLabel(download.type),
        category: getCategoryLabel(download.category)
      },
      onSubmit: () => {
        closePopup();

        const message = `Votre document "${download.title}" vous sera envoyé par WhatsApp dans quelques instants.`;

        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
    })
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "guide":
        return BookOpen
      case "catalog":
        return FileText
      case "technical":
        return Calculator
      default:
        return FileText
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "parpaings":
        return Building
      case "paves":
        return Palette
      default:
        return FileText
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "parpaings":
        return "Parpaings"
      case "paves":
        return "Pavés"
      default:
        return "Général"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "guide":
        return "Guide"
      case "catalog":
        return "Catalogue"
      case "technical":
        return "Fiche Technique"
      default:
        return "Document"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation/>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Download className="h-10 w-10 text-primary"/>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ressources <span className="text-primary">gratuites</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Téléchargez nos guides, catalogues et fiches techniques pour réussir vos projets de construction.
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((download) => {
              const Icon = getIcon(download.type)
              const CategoryIcon = getCategoryIcon(download.category)

              return (
                <Card key={download.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                  <CardHeader className="space-y-4">
                    <div className="bg-muted rounded-lg overflow-hidden relative">
                      <Image
                        src={download.image || "/placeholder.svg"}
                        alt={download.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {download.popular && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Populaire</Badge>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CategoryIcon className="h-3 w-3"/>
                          {getCategoryLabel(download.category)}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Icon className="h-3 w-3"/>
                          {getTypeLabel(download.type)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground leading-tight">{download.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{download.pages} pages</span>
                      <span>{download.fileSize}</span>
                    </div>
                    <Button
                      className="w-full cursor-pointer"
                      onClick={() => handleDownloadClick(download)}
                    >
                      <Download className="mr-2 h-4 w-4"/>
                      Télécharger gratuitement
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-balance">Besoin d'aide pour votre projet ?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Nos experts sont là pour vous accompagner dans la réalisation de vos projets de construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">
                <Calculator className="mr-2 h-5 w-5"/>
                Contacter un expert
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
