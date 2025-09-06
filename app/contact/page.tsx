import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contactez-nous - Soliid Cameroun | Devis et Conseils Gratuits",
  description:
    "Contactez Soliid pour vos projets de construction au Cameroun. Devis gratuits, conseils d'experts et support technique. Douala, Yaoundé et dans tout le Cameroun.",
  keywords: "contact Soliid, devis construction Cameroun, conseil construction, support technique, Douala, Yaoundé",
}

export default function ContactPage() {
  return <ContactPageClient />
}
