import { type NextRequest, NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { downloadId, name, email, phone, company } = body

    // Validate required fields
    if (!downloadId || !name || !email) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 })
    }

    // Initialize database
    const db = await initDatabase()

    // Insert download record
    await db.run(
      `INSERT INTO downloads (download_id, name, email, phone, company, created_at)
       VALUES (?, ?, ?, ?, ?, datetime('now'))`,
      [downloadId, name, email, phone || "", company || ""],
    )

    // Send confirmation email to user
    try {
      await sendEmail({
        to: email,
        subject: "Votre téléchargement Soliid - Confirmation",
        html: `
          <h2>Merci pour votre téléchargement !</h2>
          <p>Bonjour ${name},</p>
          <p>Nous vous confirmons le téléchargement de votre document.</p>
          <p>Si vous avez des questions ou besoin d'assistance pour votre projet, n'hésitez pas à nous contacter.</p>
          
          <p>À bientôt,<br>L'équipe Soliid</p>
          <p><em>Construire facile</em></p>
        `,
      })

      // Send notification to admin
      await sendEmail({
        to: process.env.NOTIFICATION_EMAIL || "contact@soliid.cm",
        subject: `Nouveau téléchargement - ${downloadId}`,
        html: `
          <h2>Nouveau téléchargement</h2>
          <p><strong>Document:</strong> ${downloadId}</p>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Entreprise:</strong> ${company || "Non renseignée"}</p>
          
          <p><em>Téléchargement effectué le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Douala" })}</em></p>
        `,
      })
    } catch (emailError) {
      console.error("Erreur envoi email téléchargement:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur API downloads:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
