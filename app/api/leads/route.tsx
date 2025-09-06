import { type NextRequest, NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, name, email, phone, projectDescription, calculationData } = body

    // Validate required fields
    if (!type || !name || !email || !phone) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 })
    }

    // Initialize database
    const db = await initDatabase()

    // Insert lead into database
    const leadId = await db.run(
      `INSERT INTO leads (type, name, email, phone, project_description, calculation_data, created_at)
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
      [type, name, email, phone, projectDescription || "", JSON.stringify(calculationData)],
    )

    // Prepare email content
    const emailSubject = `Nouvelle demande de devis - ${type === "parpaings" ? "Parpaings" : "Pavés"}`
    const emailContent = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Type:</strong> ${type === "parpaings" ? "Parpaings" : "Pavés"}</p>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      ${projectDescription ? `<p><strong>Description du projet:</strong> ${projectDescription}</p>` : ""}
      
      <h3>Détails du calcul:</h3>
      ${
        calculationData
          ? `
        <ul>
          <li><strong>Type de produit:</strong> ${calculationData.parpaingType || calculationData.paveType}</li>
          <li><strong>Quantité calculée:</strong> ${calculationData.quantity}</li>
          <li><strong>Surface:</strong> ${calculationData.surface} m²</li>
          <li><strong>Coût estimé:</strong> ${calculationData.totalCost?.toLocaleString()} FCFA</li>
        </ul>
      `
          : ""
      }
      
      <p><em>Demande reçue le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Douala" })}</em></p>
    `

    // Send notification email
    try {
      await sendEmail({
        to: process.env.NOTIFICATION_EMAIL || "contact@soliid.cm",
        subject: emailSubject,
        html: emailContent,
      })

      // Send confirmation email to customer
      await sendEmail({
        to: email,
        subject: "Confirmation de votre demande de devis - Soliid",
        html: `
          <h2>Merci pour votre demande de devis !</h2>
          <p>Bonjour ${name},</p>
          <p>Nous avons bien reçu votre demande de devis pour ${
            type === "parpaings" ? "des parpaings" : "des pavés"
          }.</p>
          <p>Notre équipe va étudier votre projet et vous contacter dans les plus brefs délais au ${phone}.</p>
          
          <h3>Récapitulatif de votre demande:</h3>
          ${
            calculationData
              ? `
            <ul>
              <li><strong>Quantité estimée:</strong> ${calculationData.quantity} ${
                type === "parpaings" ? "parpaings" : "pavés"
              }</li>
              <li><strong>Surface:</strong> ${calculationData.surface} m²</li>
              <li><strong>Estimation:</strong> ${calculationData.totalCost?.toLocaleString()} FCFA</li>
            </ul>
          `
              : ""
          }
          
          <p>À bientôt,<br>L'équipe Soliid</p>
          <p><em>Construire facile</em></p>
        `,
      })
    } catch (emailError) {
      console.error("Erreur envoi email:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json({ success: true, leadId: leadId.lastID })
  } catch (error) {
    console.error("Erreur API leads:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
