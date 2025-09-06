"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Edit, Trash2, Upload, ImageIcon, Square } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  type: string
  name: string
  length: number
  width: number
  height: number
  price: number
  description: string
  image_url?: string
  is_active: boolean
}

interface NewProduct {
  type: string
  name: string
  length: number
  width: number
  height: number
  price: number
  description: string
  image_url?: string
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [newProduct, setNewProduct] = useState<NewProduct>({
    type: "parpaing",
    name: "",
    length: 0,
    width: 0,
    height: 0,
    price: 0,
    description: "",
    image_url: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/admin/products/manage")
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products || [])
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les produits",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCreateProduct = async () => {
    if (!newProduct.name || !newProduct.price) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      })
      return
    }

    setSaving(true)
    try {
      const response = await fetch("/api/admin/products/manage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })

      if (response.ok) {
        toast({
          title: "Produit créé",
          description: "Le nouveau produit a été ajouté avec succès",
        })
        setIsCreateDialogOpen(false)
        setNewProduct({
          type: "parpaing",
          name: "",
          length: 0,
          width: 0,
          height: 0,
          price: 0,
          description: "",
          image_url: "",
        })
        fetchProducts()
      } else {
        throw new Error("Erreur création")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de créer le produit",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleUpdateProduct = async (product: Product) => {
    setSaving(true)
    try {
      const response = await fetch("/api/admin/products/manage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })

      if (response.ok) {
        toast({
          title: "Produit mis à jour",
          description: "Les modifications ont été sauvegardées",
        })
        setEditingProduct(null)
        fetchProducts()
      } else {
        throw new Error("Erreur mise à jour")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le produit",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteProduct = async (productId: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      return
    }

    try {
      const response = await fetch("/api/admin/products/manage", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId }),
      })

      if (response.ok) {
        toast({
          title: "Produit supprimé",
          description: "Le produit a été supprimé avec succès",
        })
        fetchProducts()
      } else {
        throw new Error("Erreur suppression")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le produit",
        variant: "destructive",
      })
    }
  }

  const handleImageUpload = async (file: File, isEditing = false) => {
    const formData = new FormData()
    formData.append("image", file)

    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        if (isEditing && editingProduct) {
          setEditingProduct({ ...editingProduct, image_url: data.url })
        } else {
          setNewProduct({ ...newProduct, image_url: data.url })
        }
        toast({
          title: "Image uploadée",
          description: "L'image a été uploadée avec succès",
        })
      } else {
        throw new Error("Erreur upload")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'uploader l'image",
        variant: "destructive",
      })
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "parpaing":
        return "Parpaing"
      case "pave":
        return "Pavé"
      case "bordure":
        return "Bordure"
      default:
        return type
    }
  }

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "parpaing":
        return "default"
      case "pave":
        return "secondary"
      case "bordure":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour admin
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Gestion des Produits</h1>
              <p className="text-muted-foreground mt-2">Créez et gérez tous vos produits</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Nouveau produit
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Créer un nouveau produit</DialogTitle>
                  <DialogDescription>Ajoutez un nouveau produit à votre catalogue</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Type de produit</Label>
                      <Select
                        value={newProduct.type}
                        onValueChange={(value) => setNewProduct({ ...newProduct, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parpaing">Parpaing</SelectItem>
                          <SelectItem value="pave">Pavé</SelectItem>
                          <SelectItem value="bordure">Bordure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom du produit</Label>
                      <Input
                        id="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        placeholder="Ex: Parpaing Standard 20x20x40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Longueur (cm)</Label>
                      <Input
                        id="length"
                        type="number"
                        value={newProduct.length}
                        onChange={(e) => setNewProduct({ ...newProduct, length: Number(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Largeur (cm)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={newProduct.width}
                        onChange={(e) => setNewProduct({ ...newProduct, width: Number(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Hauteur (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={newProduct.height}
                        onChange={(e) => setNewProduct({ ...newProduct, height: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Prix (FCFA)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Image du produit</Label>
                    <div className="flex items-center gap-4">
                      {newProduct.image_url ? (
                        <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
                          <img
                            src={newProduct.image_url || "/placeholder.svg"}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleImageUpload(file)
                          }}
                          className="hidden"
                          id="image-upload"
                        />
                        <Button asChild variant="outline" size="sm">
                          <label htmlFor="image-upload" className="cursor-pointer">
                            <Upload className="h-4 w-4 mr-2" />
                            Choisir une image
                          </label>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                      Annuler
                    </Button>
                    <Button onClick={handleCreateProduct} disabled={saving}>
                      {saving ? "Création..." : "Créer le produit"}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des produits</CardTitle>
            <CardDescription>Gérez tous vos produits depuis cette interface</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Chargement...</div>
            ) : products.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">Aucun produit trouvé</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Produit</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dimensions</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden">
                            {product.image_url ? (
                              <img
                                src={product.image_url || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Square className="h-6 w-6 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-sm text-muted-foreground truncate max-w-xs">{product.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getTypeBadgeVariant(product.type)}>{getTypeLabel(product.type)}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {product.length}×{product.width}×{product.height} cm
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{product.price.toLocaleString()} FCFA</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={product.is_active ? "default" : "secondary"}>
                            {product.is_active ? "Actif" : "Inactif"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setEditingProduct(product)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteProduct(product.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Edit Product Dialog */}
        {editingProduct && (
          <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Modifier le produit</DialogTitle>
                <DialogDescription>Modifiez les informations du produit</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Type de produit</Label>
                    <Select
                      value={editingProduct.type}
                      onValueChange={(value) => setEditingProduct({ ...editingProduct, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parpaing">Parpaing</SelectItem>
                        <SelectItem value="pave">Pavé</SelectItem>
                        <SelectItem value="bordure">Bordure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Nom du produit</Label>
                    <Input
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Longueur (cm)</Label>
                    <Input
                      type="number"
                      value={editingProduct.length}
                      onChange={(e) => setEditingProduct({ ...editingProduct, length: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Largeur (cm)</Label>
                    <Input
                      type="number"
                      value={editingProduct.width}
                      onChange={(e) => setEditingProduct({ ...editingProduct, width: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hauteur (cm)</Label>
                    <Input
                      type="number"
                      value={editingProduct.height}
                      onChange={(e) => setEditingProduct({ ...editingProduct, height: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Prix (FCFA)</Label>
                  <Input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Image du produit</Label>
                  <div className="flex items-center gap-4">
                    {editingProduct.image_url ? (
                      <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
                        <img
                          src={editingProduct.image_url || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleImageUpload(file, true)
                        }}
                        className="hidden"
                        id="edit-image-upload"
                      />
                      <Button asChild variant="outline" size="sm">
                        <label htmlFor="edit-image-upload" className="cursor-pointer">
                          <Upload className="h-4 w-4 mr-2" />
                          Changer l'image
                        </label>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setEditingProduct(null)}>
                    Annuler
                  </Button>
                  <Button onClick={() => handleUpdateProduct(editingProduct)} disabled={saving}>
                    {saving ? "Sauvegarde..." : "Sauvegarder"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Footer />
    </div>
  )
}
