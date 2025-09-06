import { type NextRequest, NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message, projectType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 })
    }

    // Initialize database
    const db = await initDatabase()

    // Insert contact message
    const messageId = await db.run(
      `INSERT INTO contact_messages (name, email, phone, company, subject, message, project_type, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
      [name, email, phone || "", company || "", subject || "", message, projectType || ""],
    )

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

    return NextResponse.json({ success: true, messageId: messageId.lastID })
  } catch (error) {
    console.error("Erreur API contact:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
