import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParpaingsCalculator from "@/components/parpaings-calculator"
import PavesCalculator from "@/components/paves-calculator"
import { Calculator, Building, Palette } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Calculateurs Gratuits - Parpaings et Pavés | Soliid Cameroun",
  description:
    "Calculez gratuitement vos besoins en parpaings et pavés pour vos projets de construction au Cameroun. Estimation précise des quantités et des coûts. Devis personnalisé gratuit.",
  keywords:
    "calculateur parpaings, calculateur pavés, estimation construction, devis gratuit Cameroun, calcul matériaux construction",
}

export default function CalculateursPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Calculator className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Calculateur <span className="text-primary">gratuits</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estimez précisément vos besoins en matériaux de construction. Calculez les quantités et obtenez un devis
            personnalisé pour votre projet au Cameroun.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="parpaings" className="w-full">
            <TabsList className="grid w-full grid-cols-1 max-w-md mx-auto mb-12">
              <TabsTrigger value="parpaings" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Parpaings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="parpaings" className="space-y-8">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl font-bold text-foreground">Calculateur Parpaings</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Calculez le nombre de parpaings nécessaire pour vos murs et obtenez une estimation des coûts.
                </p>
              </div>
              <ParpaingsCalculator />
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
