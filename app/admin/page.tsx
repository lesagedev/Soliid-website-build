import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Package, Download, Mail, BarChart3, Settings } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { getAdminFromCookies } from "@/lib/auth"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import AdminLogoutButton from "@/components/admin-logout-button"

export const metadata: Metadata = {
  title: "Administration - Soliid",
  description: "Panneau d'administration Soliid",
  robots: "noindex, nofollow",
}

export default async function AdminPage() {
  const admin = await getAdminFromCookies()

  if (!admin) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Administration</h1>
              <p className="text-muted-foreground mt-2">Gestion de votre plateforme Soliid</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <Badge variant="secondary">Admin</Badge>
                <p className="text-sm text-muted-foreground mt-1">{admin.email}</p>
              </div>
              <AdminLogoutButton />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leads Total</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-muted-foreground">Demandes de devis</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aujourd'hui</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-muted-foreground">Nouvelles demandes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Parpaings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-muted-foreground">Demandes parpaings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pavés</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-muted-foreground">Demandes pavés</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Gestion des Leads
              </CardTitle>
              <CardDescription>Consultez et gérez les demandes de devis reçues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Visualiser toutes les demandes
                  <br />• Filtrer par type de produit
                  <br />• Exporter en CSV
                  <br />• Suivre le statut des leads
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/leads">
                  <Users className="mr-2 h-4 w-4" />
                  Gérer les leads
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Configuration Produits
              </CardTitle>
              <CardDescription>Modifiez les prix et spécifications des produits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Ajuster les prix des parpaings
                  <br />• Modifier les prix des pavés
                  <br />• Gérer les spécifications
                  <br />• Mettre à jour les descriptions
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/products">
                  <Package className="mr-2 h-4 w-4" />
                  Configurer produits
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Gestion Téléchargements
              </CardTitle>
              <CardDescription>Gérez les documents et ressources téléchargeables</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Ajouter nouveaux documents
                  <br />• Modifier les descriptions
                  <br />• Suivre les téléchargements
                  <br />• Organiser par catégorie
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/downloads">
                  <Download className="mr-2 h-4 w-4" />
                  Gérer téléchargements
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Messages Contact
              </CardTitle>
              <CardDescription>Consultez les messages reçus via le formulaire de contact</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Lire les nouveaux messages
                  <br />• Marquer comme traités
                  <br />• Répondre aux demandes
                  <br />• Archiver les anciens messages
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/messages">
                  <Mail className="mr-2 h-4 w-4" />
                  Voir messages
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Statistiques
              </CardTitle>
              <CardDescription>Analysez les performances et tendances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Évolution des demandes
                  <br />• Répartition par produit
                  <br />• Taux de conversion
                  <br />• Rapports mensuels
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/stats">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Voir statistiques
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Paramètres
              </CardTitle>
              <CardDescription>Configuration générale de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Configuration email
                  <br />• Paramètres notifications
                  <br />• Gestion utilisateurs
                  <br />• Sauvegarde données
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Paramètres
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
