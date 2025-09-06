import { type NextRequest, NextResponse } from "next/server"
import { getMessages, saveMessages } from "@/lib/json-storage"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message, projectType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 })
    }

    const messages = await getMessages()
    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      company: company || "",
      subject: subject || "",
      message,
      project_type: projectType || "",
      status: "new",
      created_at: new Date().toISOString(),
    }

    messages.push(newMessage)
    await saveMessages(messages)

    // Send notification email to admin
    try {
      await sendEmail({
        to: process.env.NOTIFICATION_EMAIL || "contact@soliid.cm",
        subject: `Nouveau message de contact${subject ? ` - ${subject}` : ""}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Entreprise:</strong> ${company || "Non renseignée"}</p>
          <p><strong>Type de projet:</strong> ${projectType || "Non spécifié"}</p>
          ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ""}
          
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
          
          <p><em>Message reçu le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Douala" })}</em></p>
        `,
      })

      // Send confirmation email to user
      await sendEmail({
        to: email,
        subject: "Confirmation de réception - Soliid",
        html: `
          <h2>Merci pour votre message !</h2>
          <p>Bonjour ${name},</p>
          <p>Nous avons bien reçu votre message et nous vous remercions de votre intérêt pour Soliid.</p>
          <p>Notre équipe va étudier votre demande et vous contacter dans les plus brefs délais${phone ? ` au ${phone}` : ""}.</p>
          
          <h3>Récapitulatif de votre message:</h3>
          ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ""}
          <p><strong>Message:</strong> ${message}</p>
          
          <p>À bientôt,<br>L'équipe Soliid</p>
          <p><em>Construire facile</em></p>
        `,
      })
    } catch (emailError) {
      console.error("Erreur envoi email contact:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json({ success: true, messageId: newMessage.id })
  } catch (error) {
    console.error("Erreur API contact:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
