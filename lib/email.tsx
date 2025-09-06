import nodemailer from "nodemailer"

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export const sendEmail = async ({ to, subject, html, from }: EmailOptions) => {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
    }

    const result = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", result.messageId)
    return result
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

// Email templates
export const emailTemplates = {
  leadConfirmation: (name: string, leadType: string) => ({
    subject: `Confirmation de votre demande de devis - ${leadType === "parpaings" ? "Parpaings" : "Pavés"}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #F20505; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { padding: 20px; text-align: center; color: #666; }
          .button { display: inline-block; padding: 12px 24px; background-color: #F20505; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Soliid</h1>
            <p>Construire facile</p>
          </div>
          <div class="content">
            <h2>Merci pour votre demande de devis !</h2>
            <p>Bonjour ${name},</p>
            <p>Nous avons bien reçu votre demande de devis pour ${leadType === "parpaings" ? "des parpaings" : "des pavés"}.</p>
            <p>Notre équipe va étudier votre projet et vous contacter dans les plus brefs délais.</p>
            <p>En attendant, n'hésitez pas à :</p>
            <ul>
              <li>Consulter nos guides de construction gratuits</li>
              <li>Utiliser nos autres calculateurs</li>
              <li>Nous contacter directement pour toute question</li>
            </ul>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://soliid.cm"}/telechargements" class="button">Télécharger nos guides</a>
          </div>
          <div class="footer">
            <p>Soliid - Matériaux de construction de qualité</p>
            <p>Zone Industrielle Bonabéri, Douala, Cameroun</p>
            <p>Tél: +237 123 456 789 | Email: contact@soliid.cm</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  downloadConfirmation: (name: string, documentTitle: string) => ({
    subject: "Votre téléchargement Soliid - Confirmation",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #F20505; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { padding: 20px; text-align: center; color: #666; }
          .button { display: inline-block; padding: 12px 24px; background-color: #F20505; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Soliid</h1>
            <p>Construire facile</p>
          </div>
          <div class="content">
            <h2>Merci pour votre téléchargement !</h2>
            <p>Bonjour ${name},</p>
            <p>Nous vous confirmons le téléchargement de : <strong>${documentTitle}</strong></p>
            <p>Ce document contient des informations précieuses pour réussir vos projets de construction.</p>
            <p>Si vous avez des questions ou besoin d'assistance pour votre projet, n'hésitez pas à nous contacter.</p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://soliid.cm"}/contact" class="button">Nous contacter</a>
          </div>
          <div class="footer">
            <p>Soliid - Matériaux de construction de qualité</p>
            <p>Zone Industrielle Bonabéri, Douala, Cameroun</p>
            <p>Tél: +237 123 456 789 | Email: contact@soliid.cm</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  contactConfirmation: (name: string, subject?: string) => ({
    subject: "Confirmation de réception - Soliid",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #F20505; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { padding: 20px; text-align: center; color: #666; }
          .button { display: inline-block; padding: 12px 24px; background-color: #F20505; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Soliid</h1>
            <p>Construire facile</p>
          </div>
          <div class="content">
            <h2>Merci pour votre message !</h2>
            <p>Bonjour ${name},</p>
            <p>Nous avons bien reçu votre message${subject ? ` concernant "${subject}"` : ""} et nous vous remercions de votre intérêt pour Soliid.</p>
            <p>Notre équipe va étudier votre demande et vous contacter dans les plus brefs délais.</p>
            <p>En attendant, découvrez nos ressources gratuites :</p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://soliid.cm"}/telechargements" class="button">Nos guides gratuits</a>
          </div>
          <div class="footer">
            <p>Soliid - Matériaux de construction de qualité</p>
            <p>Zone Industrielle Bonabéri, Douala, Cameroun</p>
            <p>Tél: +237 123 456 789 | Email: contact@soliid.cm</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  adminNotification: (type: string, data: any) => {
    const getSubject = () => {
      switch (type) {
        case "lead":
          return `Nouvelle demande de devis - ${data.type === "parpaings" ? "Parpaings" : "Pavés"}`
        case "contact":
          return `Nouveau message de contact${data.subject ? ` - ${data.subject}` : ""}`
        case "download":
          return `Nouveau téléchargement - ${data.downloadId}`
        default:
          return "Nouvelle notification Soliid"
      }
    }

    const getContent = () => {
      switch (type) {
        case "lead":
          return `
            <h2>Nouvelle demande de devis</h2>
            <p><strong>Type:</strong> ${data.type === "parpaings" ? "Parpaings" : "Pavés"}</p>
            <p><strong>Nom:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Téléphone:</strong> ${data.phone}</p>
            ${data.projectDescription ? `<p><strong>Description du projet:</strong> ${data.projectDescription}</p>` : ""}
            
            ${
              data.calculationData
                ? `
              <h3>Détails du calcul:</h3>
              <ul>
                <li><strong>Type de produit:</strong> ${data.calculationData.parpaingType || data.calculationData.paveType}</li>
                <li><strong>Quantité calculée:</strong> ${data.calculationData.quantity}</li>
                <li><strong>Surface:</strong> ${data.calculationData.surface} m²</li>
                <li><strong>Coût estimé:</strong> ${data.calculationData.totalCost?.toLocaleString()} FCFA</li>
              </ul>
            `
                : ""
            }
          `
        case "contact":
          return `
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Téléphone:</strong> ${data.phone || "Non renseigné"}</p>
            <p><strong>Entreprise:</strong> ${data.company || "Non renseignée"}</p>
            <p><strong>Type de projet:</strong> ${data.projectType || "Non spécifié"}</p>
            ${data.subject ? `<p><strong>Sujet:</strong> ${data.subject}</p>` : ""}
            
            <h3>Message:</h3>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          `
        case "download":
          return `
            <h2>Nouveau téléchargement</h2>
            <p><strong>Document:</strong> ${data.downloadId}</p>
            <p><strong>Nom:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Téléphone:</strong> ${data.phone || "Non renseigné"}</p>
            <p><strong>Entreprise:</strong> ${data.company || "Non renseignée"}</p>
          `
        default:
          return "<p>Nouvelle notification</p>"
      }
    }

    return {
      subject: getSubject(),
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #F20505; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .footer { padding: 20px; text-align: center; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Soliid Admin</h1>
              <p>Notification</p>
            </div>
            <div class="content">
              ${getContent()}
              <p><em>Notification reçue le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Douala" })}</em></p>
            </div>
            <div class="footer">
              <p>Système de notification Soliid</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }
  },
}

// Helper function to send templated emails
export const sendTemplatedEmail = async (
  to: string,
  template: "leadConfirmation" | "downloadConfirmation" | "contactConfirmation" | "adminNotification",
  data: any,
) => {
  let emailContent

  switch (template) {
    case "leadConfirmation":
      emailContent = emailTemplates.leadConfirmation(data.name, data.type)
      break
    case "downloadConfirmation":
      emailContent = emailTemplates.downloadConfirmation(data.name, data.documentTitle)
      break
    case "contactConfirmation":
      emailContent = emailTemplates.contactConfirmation(data.name, data.subject)
      break
    case "adminNotification":
      emailContent = emailTemplates.adminNotification(data.type, data)
      break
    default:
      throw new Error("Unknown email template")
  }

  return sendEmail({
    to,
    subject: emailContent.subject,
    html: emailContent.html,
  })
}
