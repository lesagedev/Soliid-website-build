import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { getAdminFromCookies } from "@/lib/auth"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import AdminLogoutButton from "@/components/admin-logout-button"
import CalculatorConfigForm from "@/components/calculator-config-form"

export const metadata: Metadata = {
  title: "Configuration Calculateurs - Administration Soliid",
  description: "Configuration des calculateurs Soliid",
  robots: "noindex, nofollow",
}

export default async function AdminCalculatorsPage() {
  const admin = await getAdminFromCookies()

  if (!admin) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <h1 className="text-3xl font-bold text-foreground">Configuration Calculateurs</h1>
              <p className="text-muted-foreground mt-2">Gérez les paramètres des calculateurs de matériaux</p>
            </div>
            <AdminLogoutButton />
          </div>
        </div>

        <div className="space-y-8">
          {/* Calculator Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Paramètres des Calculateurs
              </CardTitle>
              <CardDescription>
                Configurez les prix, dimensions et paramètres de calcul pour chaque type de matériau
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CalculatorConfigForm />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
