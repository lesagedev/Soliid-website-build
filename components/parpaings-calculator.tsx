"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calculator, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ParpaingType {
  id: string
  name: string
  dimensions: string
  price: number
  coverage: number // m² par parpaing
  gamme: string
}

const parpaingTypes: ParpaingType[] = [
  // Standard Premium
  {
    id: "sp-15",
    name: "Standard Premium 15cm",
    dimensions: "50cm × 20cm × 15cm",
    price: 350,
    coverage: 0.1, // 0.5m × 0.2m = 0.1m²
    gamme: "Standard Premium",
  },
  {
    id: "sp-20",
    name: "Standard Premium 20cm",
    dimensions: "50cm × 20cm × 20cm",
    price: 400,
    coverage: 0.1,
    gamme: "Standard Premium",
  },
  {
    id: "sp-hourdis",
    name: "Standard Premium Hourdis",
    dimensions: "50cm × 20cm × Hourdis",
    price: 450,
    coverage: 0.1,
    gamme: "Standard Premium",
  },
  // Hydro Premium
  {
    id: "shp-15",
    name: "Hydro Premium 15cm",
    dimensions: "50cm × 20cm × 15cm",
    price: 380,
    coverage: 0.1,
    gamme: "Hydro Premium",
  },
  {
    id: "shp-20",
    name: "Hydro Premium 20cm",
    dimensions: "50cm × 20cm × 20cm",
    price: 430,
    coverage: 0.1,
    gamme: "Hydro Premium",
  },
  // Premium Haute Performance
  {
    id: "php-15",
    name: "Premium Haute Performance 15cm",
    dimensions: "50cm × 20cm × 15cm",
    price: 450,
    coverage: 0.1,
    gamme: "Premium Haute Performance",
  },
  {
    id: "php-20",
    name: "Premium Haute Performance 20cm",
    dimensions: "50cm × 20cm × 20cm",
    price: 500,
    coverage: 0.1,
    gamme: "Premium Haute Performance",
  },
]

export default function ParpaingsCalculator() {
  const [dimensions, setDimensions] = useState({
    length: "",
    height: "",
  })
  const [selectedType, setSelectedType] = useState<string>("")
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
  })
  const [calculation, setCalculation] = useState<{
    quantity: number
    totalCost: number
    surface: number
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const { toast } = useToast()

  const calculateParpaings = () => {
    const length = Number.parseFloat(dimensions.length)
    const height = Number.parseFloat(dimensions.height)
    const selectedParpaing = parpaingTypes.find((p) => p.id === selectedType)

    if (!length || !height || !selectedParpaing) {
      toast({
        title: "Erreur de calcul",
        description: "Veuillez remplir tous les champs requis.",
        variant: "destructive",
      })
      return
    }

    const surface = length * height
    const quantity = Math.ceil(surface / selectedParpaing.coverage)
    const totalCost = quantity * selectedParpaing.price

    setCalculation({
      quantity,
      totalCost,
      surface,
    })
    setShowLeadForm(true)
  }

  const submitLead = async () => {
    if (!leadForm.name || !leadForm.phone) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires (nom et téléphone).",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const selectedParpaing = parpaingTypes.find((p) => p.id === selectedType)
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "parpaings",
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          projectDescription: leadForm.projectDescription,
          calculationData: {
            parpaingType: selectedParpaing?.name,
            dimensions,
            quantity: calculation?.quantity,
            totalCost: calculation?.totalCost,
            surface: calculation?.surface,
          },
        }),
      })

      if (response.ok) {
        toast({
          title: "Demande envoyée !",
          description: "Nous vous contacterons dans les plus brefs délais.",
        })
        // Reset form
        setLeadForm({ name: "", email: "", phone: "", projectDescription: "" })
        setDimensions({ length: "", height: "" })
        setSelectedType("")
        setCalculation(null)
        setShowLeadForm(false)
      } else {
        throw new Error("Erreur lors de l'envoi")
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

  // Group parpaings by gamme for better organization
  const parpaingsByGamme = parpaingTypes.reduce(
    (acc, parpaing) => {
      if (!acc[parpaing.gamme]) {
        acc[parpaing.gamme] = []
      }
      acc[parpaing.gamme].push(parpaing)
      return acc
    },
    {} as Record<string, ParpaingType[]>,
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Paramètres de calcul
          </CardTitle>
          <CardDescription>Renseignez les dimensions de votre mur pour calculer vos besoins.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="length">Longueur du mur (m)</Label>
              <Input
                id="length"
                type="number"
                placeholder="Ex: 10"
                value={dimensions.length}
                onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Hauteur du mur (m)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Ex: 3"
                value={dimensions.height}
                onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Type de parpaing</Label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le type de parpaing" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(parpaingsByGamme).map(([gamme, parpaings]) => (
                  <div key={gamme}>
                    <div className="px-2 py-1 text-sm font-semibold text-muted-foreground border-b">{gamme}</div>
                    {parpaings.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{type.name}</span>
                          <Badge variant="outline" className="ml-2">
                            {type.dimensions}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateParpaings} className="w-full" size="lg">
            <Calculator className="mr-2 h-5 w-5" />
            Calculer mes besoins
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {calculation && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              Résultats du calcul
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-foreground">{calculation.quantity}</div>
                <div className="text-sm text-muted-foreground">Parpaings nécessaires</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-foreground">{calculation.surface.toFixed(1)} m²</div>
                <div className="text-sm text-muted-foreground">Surface à couvrir</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              Estimation basée sur les dimensions fournies. Demandez un devis personnalisé pour un calcul précis.
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lead Form */}
      {showLeadForm && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Obtenez votre devis personnalisé</CardTitle>
            <CardDescription>
              Laissez-nous vos coordonnées pour recevoir un devis détaillé et personnalisé.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  placeholder="+237 6XX XXX XXX"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optionnel)</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={leadForm.email}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project">Description du projet (optionnel)</Label>
              <Textarea
                id="project"
                placeholder="Décrivez brièvement votre projet de construction..."
                value={leadForm.projectDescription}
                onChange={(e) => setLeadForm({ ...leadForm, projectDescription: e.target.value })}
              />
            </div>
            <Button onClick={submitLead} disabled={isSubmitting} className="w-full" size="lg">
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? "Envoi en cours..." : "Demander mon devis gratuit"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
