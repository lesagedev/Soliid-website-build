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

interface PaveType {
  id: string
  name: string
  dimensions: string
  price: number
  coverage: number // m² par pavé
}

const paveTypes: PaveType[] = [
  {
    id: "20x10",
    name: "Pavé Rectangulaire 20x10",
    dimensions: "20cm × 10cm × 6cm",
    price: 450,
    coverage: 0.02, // 0.2m × 0.1m = 0.02m²
  },
  {
    id: "20x20",
    name: "Pavé Carré 20x20",
    dimensions: "20cm × 20cm × 6cm",
    price: 800,
    coverage: 0.04, // 0.2m × 0.2m = 0.04m²
  },
  {
    id: "20x17",
    name: "Pavé Hexagonal 20x17",
    dimensions: "20cm × 17cm × 6cm",
    price: 650,
    coverage: 0.034, // approximation pour forme hexagonale
  },
]

export default function PavesCalculator() {
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    area: "",
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

  const calculatePaves = () => {
    let surface = 0

    // Calculate surface based on input method
    if (dimensions.area) {
      surface = Number.parseFloat(dimensions.area)
    } else if (dimensions.length && dimensions.width) {
      surface = Number.parseFloat(dimensions.length) * Number.parseFloat(dimensions.width)
    }

    const selectedPave = paveTypes.find((p) => p.id === selectedType)

    if (!surface || !selectedPave) {
      toast({
        title: "Erreur de calcul",
        description: "Veuillez renseigner la surface et sélectionner un type de pavé.",
        variant: "destructive",
      })
      return
    }

    // Add 10% for cuts and waste
    const quantity = Math.ceil((surface / selectedPave.coverage) * 1.1)
    const totalCost = quantity * selectedPave.price

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
      const selectedPave = paveTypes.find((p) => p.id === selectedType)
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "paves",
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          projectDescription: leadForm.projectDescription,
          calculationData: {
            paveType: selectedPave?.name,
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
        setDimensions({ length: "", width: "", area: "" })
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

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Paramètres de calcul
          </CardTitle>
          <CardDescription>
            Renseignez les dimensions de votre surface à paver pour calculer vos besoins.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="text-sm font-medium text-foreground">Méthode de calcul :</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="font-medium text-sm">Option 1: Longueur × Largeur</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="length">Longueur (m)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="Ex: 10"
                      value={dimensions.length}
                      onChange={(e) => setDimensions({ ...dimensions, length: e.target.value, area: "" })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Largeur (m)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="Ex: 5"
                      value={dimensions.width}
                      onChange={(e) => setDimensions({ ...dimensions, width: e.target.value, area: "" })}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="font-medium text-sm">Option 2: Surface directe</div>
                <div className="space-y-2">
                  <Label htmlFor="area">Surface totale (m²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Ex: 50"
                    value={dimensions.area}
                    onChange={(e) => setDimensions({ ...dimensions, area: e.target.value, length: "", width: "" })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Type de pavé</Label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le type de pavé" />
              </SelectTrigger>
              <SelectContent>
                {paveTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{type.name}</span>
                      <Badge variant="outline" className="ml-2">
                        {type.price} FCFA
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculatePaves} className="w-full" size="lg">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-foreground">{calculation.quantity}</div>
                <div className="text-sm text-muted-foreground">Pavés nécessaires</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-foreground">{calculation.surface.toFixed(1)} m²</div>
                <div className="text-sm text-muted-foreground">Surface à paver</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">{calculation.totalCost.toLocaleString()} FCFA</div>
                <div className="text-sm text-muted-foreground">Coût estimé</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              Prix indicatifs incluant 10% pour les chutes. Hors transport et pose. Demandez un devis personnalisé.
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
                placeholder="Décrivez brièvement votre projet d'aménagement..."
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
