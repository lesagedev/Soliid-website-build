"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building, Palette, Square, Save, Plus, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CalculatorConfig {
  id: string
  type: "parpaings" | "paves" | "bordures"
  name: string
  dimensions: string
  price: number
  coverage: number
  description?: string
}

export default function CalculatorConfigForm() {
  const [configs, setConfigs] = useState<CalculatorConfig[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [editingConfig, setEditingConfig] = useState<CalculatorConfig | null>(null)
  const [newConfig, setNewConfig] = useState<Partial<CalculatorConfig>>({
    type: "parpaings",
    name: "",
    dimensions: "",
    price: 0,
    coverage: 0,
    description: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchConfigs()
  }, [])

  const fetchConfigs = async () => {
    try {
      const response = await fetch("/api/admin/calculator-config")
      if (response.ok) {
        const data = await response.json()
        setConfigs(data)
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les configurations.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const saveConfig = async (config: CalculatorConfig) => {
    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/calculator-config", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      })

      if (response.ok) {
        toast({
          title: "Configuration sauvegardée",
          description: "Les paramètres ont été mis à jour avec succès.",
        })
        fetchConfigs()
        setEditingConfig(null)
      } else {
        throw new Error("Erreur lors de la sauvegarde")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder la configuration.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const addConfig = async () => {
    if (!newConfig.name || !newConfig.dimensions || !newConfig.price || !newConfig.coverage) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/calculator-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConfig),
      })

      if (response.ok) {
        toast({
          title: "Configuration ajoutée",
          description: "Le nouveau matériau a été ajouté avec succès.",
        })
        fetchConfigs()
        setNewConfig({
          type: "parpaings",
          name: "",
          dimensions: "",
          price: 0,
          coverage: 0,
          description: "",
        })
      } else {
        throw new Error("Erreur lors de l'ajout")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter la configuration.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const deleteConfig = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette configuration ?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/calculator-config?id=${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast({
          title: "Configuration supprimée",
          description: "La configuration a été supprimée avec succès.",
        })
        fetchConfigs()
      } else {
        throw new Error("Erreur lors de la suppression")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la configuration.",
        variant: "destructive",
      })
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "parpaings":
        return <Building className="h-4 w-4" />
      case "paves":
        return <Palette className="h-4 w-4" />
      case "bordures":
        return <Square className="h-4 w-4" />
      default:
        return <Building className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "parpaings":
        return "bg-blue-100 text-blue-800"
      case "paves":
        return "bg-green-100 text-green-800"
      case "bordures":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return <div className="text-center py-8">Chargement des configurations...</div>
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="existing" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="existing">Configurations existantes</TabsTrigger>
          <TabsTrigger value="new">Ajouter nouveau</TabsTrigger>
        </TabsList>

        <TabsContent value="existing" className="space-y-6">
          <div className="grid gap-6">
            {configs.map((config) => (
              <Card key={config.id} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {getTypeIcon(config.type)}
                      {config.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(config.type)}>{config.type}</Badge>
                      <Button variant="outline" size="sm" onClick={() => setEditingConfig(config)}>
                        Modifier
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => deleteConfig(config.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{config.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {editingConfig?.id === config.id ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Nom</Label>
                          <Input
                            value={editingConfig.name}
                            onChange={(e) => setEditingConfig({ ...editingConfig, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Dimensions</Label>
                          <Input
                            value={editingConfig.dimensions}
                            onChange={(e) => setEditingConfig({ ...editingConfig, dimensions: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Prix (FCFA)</Label>
                          <Input
                            type="number"
                            value={editingConfig.price}
                            onChange={(e) => setEditingConfig({ ...editingConfig, price: Number(e.target.value) })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Couverture (m²)</Label>
                          <Input
                            type="number"
                            step="0.001"
                            value={editingConfig.coverage}
                            onChange={(e) => setEditingConfig({ ...editingConfig, coverage: Number(e.target.value) })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          value={editingConfig.description || ""}
                          onChange={(e) => setEditingConfig({ ...editingConfig, description: e.target.value })}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => saveConfig(editingConfig)} disabled={isSaving}>
                          <Save className="h-4 w-4 mr-2" />
                          {isSaving ? "Sauvegarde..." : "Sauvegarder"}
                        </Button>
                        <Button variant="outline" onClick={() => setEditingConfig(null)}>
                          Annuler
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Dimensions:</span>
                        <p>{config.dimensions}</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Prix:</span>
                        <p>{config.price.toLocaleString()} FCFA</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Couverture:</span>
                        <p>{config.coverage} m²</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Prix/m²:</span>
                        <p>{Math.round(config.price / config.coverage).toLocaleString()} FCFA</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Ajouter une nouvelle configuration
              </CardTitle>
              <CardDescription>Créez une nouvelle configuration de matériau pour les calculateurs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Type de matériau</Label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newConfig.type}
                    onChange={(e) => setNewConfig({ ...newConfig, type: e.target.value as any })}
                  >
                    <option value="parpaings">Parpaings</option>
                    <option value="paves">Pavés</option>
                    <option value="bordures">Bordures</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Nom *</Label>
                  <Input
                    placeholder="Ex: Parpaing 20x20x40"
                    value={newConfig.name}
                    onChange={(e) => setNewConfig({ ...newConfig, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Dimensions *</Label>
                  <Input
                    placeholder="Ex: 40cm × 20cm × 20cm"
                    value={newConfig.dimensions}
                    onChange={(e) => setNewConfig({ ...newConfig, dimensions: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Prix (FCFA) *</Label>
                  <Input
                    type="number"
                    placeholder="350"
                    value={newConfig.price}
                    onChange={(e) => setNewConfig({ ...newConfig, price: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Couverture (m²) *</Label>
                  <Input
                    type="number"
                    step="0.001"
                    placeholder="0.08"
                    value={newConfig.coverage}
                    onChange={(e) => setNewConfig({ ...newConfig, coverage: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Description du matériau..."
                  value={newConfig.description}
                  onChange={(e) => setNewConfig({ ...newConfig, description: e.target.value })}
                />
              </div>
              <Button onClick={addConfig} disabled={isSaving} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                {isSaving ? "Ajout en cours..." : "Ajouter la configuration"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
