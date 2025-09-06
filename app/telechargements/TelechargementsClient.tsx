"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, FileText, BookOpen, Calculator, Building, Palette } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

interface DownloadItem {
  id: string
  title: string
  description: string
  type: "guide" | "catalog" | "technical"
  category: "parpaings" | "paves" | "general"
  fileSize: string
  pages: number
  image: string
  popular?: boolean
}

const downloads: DownloadItem[] = [
  {
    id: "guide-construction-parpaings",
    title: "Guide Complet de Construction avec Parpaings",
    description:
      "Tout ce que vous devez savoir pour construire avec des parpaings au Cameroun. Techniques, conseils et bonnes pratiques.",
    type: "guide",
    category: "parpaings",
    fileSize: "2.5 MB",
    pages: 24,
    image: "/guide-construction-parpaings-cameroun.png",
    popular: true,
  },
  {
    id: "catalogue-parpaings-2024",
    title: "Catalogue Parpaings 2024",
    description: "Notre gamme complète de parpaings avec spécifications techniques, dimensions et prix actualisés.",
    type: "catalog",
    category: "parpaings",
    fileSize: "1.8 MB",
    pages: 16,
    image: "/catalogue-parpaings-soliid-2024.png",
  },
  {
    id: "guide-pavage-terrasses",
    title: "Guide de Pavage pour Terrasses et Allées",
    description: "Méthodes professionnelles pour réussir vos projets de pavage. De la préparation à la finition.",
    type: "guide",
    category: "paves",
    fileSize: "3.1 MB",
    pages: 32,
    image: "/guide-pavage-terrasses-allees.png",
    popular: true,
  },
  {
    id: "catalogue-paves-decoratifs",
    title: "Catalogue Pavés Décoratifs",
    description: "Découvrez notre collection de pavés avec exemples d'applications et conseils d'aménagement.",
    type: "catalog",
    category: "paves",
    fileSize: "2.2 MB",
    pages: 20,
    image: "/catalogue-paves-decoratifs-soliid.png",
  },
  {
    id: "fiches-techniques-parpaings",
    title: "Fiches Techniques Parpaings",
    description: "Spécifications détaillées, résistances et caractéristiques techniques de tous nos parpaings.",
    type: "technical",
    category: "parpaings",
    fileSize: "0.8 MB",
    pages: 8,
    image: "/fiches-techniques-parpaings.png",
  },
  {
    id: "guide-calcul-materiaux",
    title: "Guide de Calcul des Matériaux",
    description:
      "Apprenez à calculer précisément vos besoins en matériaux pour éviter le gaspillage et optimiser votre budget.",
    type: "guide",
    category: "general",
    fileSize: "1.5 MB",
    pages: 12,
    image: "/guide-calcul-materiaux-construction.png",
  },
]

export default function TelechargementsClient() {
  const [selectedDownload, setSelectedDownload] = useState<DownloadItem | null>(null)
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

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

  const handleDownload = async () => {
    if (!selectedDownload) return

    if (!leadForm.name || !leadForm.email) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir au minimum votre nom et email.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/downloads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          downloadId: selectedDownload.id,
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          company: leadForm.company,
        }),
      })

      if (response.ok) {
        toast({
          title: "Téléchargement démarré !",
          description: "Le document va être téléchargé et vous recevrez un email de confirmation.",
        })

        // Simulate file download
        const link = document.createElement("a")
        link.href = `/documents/${selectedDownload.id}.pdf`
        link.download = `${selectedDownload.title}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Reset form
        setLeadForm({ name: "", email: "", phone: "", company: "" })
        setSelectedDownload(null)
      } else {
        throw new Error("Erreur lors du téléchargement")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Download className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ressources <span className="text-primary">gratuites</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Téléchargez nos guides, catalogues et fiches techniques pour réussir vos projets de construction au
            Cameroun.
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
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                      <Image
                        src={download.image || "/placeholder.svg"}
                        alt={download.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {download.popular && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Populaire</Badge>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CategoryIcon className="h-3 w-3" />
                          {getCategoryLabel(download.category)}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Icon className="h-3 w-3" />
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" onClick={() => setSelectedDownload(download)}>
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger gratuitement
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Télécharger {selectedDownload?.title}</DialogTitle>
                          <DialogDescription>
                            Renseignez vos informations pour accéder gratuitement à ce document.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Nom *</Label>
                              <Input
                                id="name"
                                placeholder="Votre nom"
                                value={leadForm.name}
                                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="votre@email.com"
                                value={leadForm.email}
                                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Téléphone</Label>
                              <Input
                                id="phone"
                                placeholder="+237 6XX XXX XXX"
                                value={leadForm.phone}
                                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Entreprise</Label>
                              <Input
                                id="company"
                                placeholder="Nom de l'entreprise"
                                value={leadForm.company}
                                onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                              />
                            </div>
                          </div>
                          <Button onClick={handleDownload} disabled={isSubmitting} className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            {isSubmitting ? "Téléchargement..." : "Télécharger maintenant"}
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">
                            En téléchargeant, vous acceptez de recevoir nos communications sur nos produits et services.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
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
              <a href="/calculateurs">
                <Calculator className="mr-2 h-5 w-5" />
                Calculer mes besoins
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/contact">Contacter un expert</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
