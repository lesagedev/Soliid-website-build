"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds()
      }
    }

    return () => {
      // Nettoyer le script lors du démontage
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          projectType: "",
        })
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

  const whatsappNumber = "+237675887676"
  const whatsappMessage = encodeURIComponent(
    "Bonjour Buildermats, je souhaiterais obtenir des informations sur vos produits Soliid (parpaings, pavés, bordures). Merci !",
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Contactez <span className="text-primary">nos experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nous sommes là pour vous accompagner dans tous vos projets de construction au Cameroun. Devis gratuits et
            conseils personnalisés.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Envoyez-nous un message</h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                </p>
              </div>

              <Card className={"border-primary"}>
                <CardHeader>
                  <CardTitle>Formulaire de contact</CardTitle>
                  <CardDescription>Tous les champs marqués d'un * sont obligatoires</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <iframe
                      data-tally-src="https://tally.so/embed/3q6Gd2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      loading="lazy"
                      width="100%"
                      height="589"
                      frameBorder={0}
                      marginHeight={0}
                      marginWidth={0}
                      title="Formulaire de contact"
                      className="w-full min-h-[589px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Nos coordonnées</h2>
                <p className="text-muted-foreground">Plusieurs moyens de nous contacter selon vos préférences.</p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Téléphone</h3>
                        <p className="text-muted-foreground">Appelez-nous directement</p>
                        <div className="space-y-1">
                          <a href="tel:+237675887676" className="font-medium hover:underline">+237 675 887 676</a><br/>
                          <a href="tel:+237656770009" className="font-medium hover:underline">+237 656 770 009</a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-foreground">WhatsApp</h3>
                        <p className="text-muted-foreground">Contactez-nous via WhatsApp pour une réponse rapide</p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">+237 675 887 676</p>
                          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                            <a
                              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Ouvrir WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">Écrivez-nous directement</p>
                        <div className="space-y-1">
                          <p className="font-medium">contact@buildermats.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/*<Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Adresse</h3>
                        <p className="text-muted-foreground">Venez nous rendre visite</p>
                        <div className="space-y-1">
                          <p className="font-medium">Akwa, Rue Drout Face collège</p>
                          <p className="font-medium">Emilie SAKER, Douala Cameroun</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Horaires</h3>
                        <p className="text-muted-foreground">Nos heures d'ouverture</p>
                        <div className="space-y-1 text-sm">
                          <p>
                            <strong>Lun - Ven:</strong> 08h00 - 17h00
                          </p>
                          <p>
                            <strong>Samedi:</strong> 08h00 - 12h00
                          </p>
                          <p>
                            <strong>Dimanche:</strong> Fermé
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>*/}
              </div>

              {/* Map placeholder */}
              {/*<Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Localisation+Buildermats+Douala"
                      alt="Localisation Buildermats Douala"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>*/}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
