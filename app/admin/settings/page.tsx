import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Key, User } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { getAdminFromCookies } from "@/lib/auth"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import AdminLogoutButton from "@/components/admin-logout-button"
import PasswordChangeForm from "@/components/password-change-form"

export const metadata: Metadata = {
  title: "Paramètres - Administration Soliid",
  description: "Paramètres d'administration Soliid",
  robots: "noindex, nofollow",
}

export default async function AdminSettingsPage() {
  const admin = await getAdminFromCookies()

  if (!admin) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
              <p className="text-muted-foreground mt-2">Configuration de votre compte administrateur</p>
            </div>
            <AdminLogoutButton />
          </div>
        </div>

        <div className="space-y-6">
          {/* Account Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Informations du compte
              </CardTitle>
              <CardDescription>Détails de votre compte administrateur</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-foreground">{admin.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Rôle</label>
                  <p className="text-foreground">Administrateur</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Password Change */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                Changer le mot de passe
              </CardTitle>
              <CardDescription>Modifiez votre mot de passe administrateur</CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordChangeForm adminEmail={admin.email} />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
