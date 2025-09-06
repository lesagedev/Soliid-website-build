import fs from "fs"
import path from "path"
import db from "./database"

export const exportLeadsToCSV = () => {
  const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all()

  if (leads.length === 0) {
    return null
  }

  const headers = [
    "ID",
    "Nom",
    "Email",
    "Téléphone",
    "Type de projet",
    "Calculateur",
    "Résultat",
    "Message",
    "Date de création",
  ]

  const csvContent = [
    headers.join(","),
    ...leads.map((lead: any) =>
      [
        lead.id,
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.phone}"`,
        `"${lead.project_type}"`,
        `"${lead.calculator_type || ""}"`,
        `"${lead.calculator_result || ""}"`,
        `"${lead.message || ""}"`,
        `"${lead.created_at}"`,
      ].join(","),
    ),
  ].join("\n")

  const exportDir = path.join(process.cwd(), "exports")
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true })
  }

  const filename = `leads_${new Date().toISOString().split("T")[0]}.csv`
  const filepath = path.join(exportDir, filename)

  fs.writeFileSync(filepath, csvContent, "utf8")

  return { filename, filepath, count: leads.length }
}

export const exportContactsToCSV = () => {
  const contacts = db.prepare("SELECT * FROM contact_messages ORDER BY created_at DESC").all()

  if (contacts.length === 0) {
    return null
  }

  const headers = ["ID", "Nom", "Email", "Téléphone", "Message", "Date de création"]

  const csvContent = [
    headers.join(","),
    ...contacts.map((contact: any) =>
      [
        contact.id,
        `"${contact.name}"`,
        `"${contact.email}"`,
        `"${contact.phone || ""}"`,
        `"${contact.message}"`,
        `"${contact.created_at}"`,
      ].join(","),
    ),
  ].join("\n")

  const exportDir = path.join(process.cwd(), "exports")
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true })
  }

  const filename = `contacts_${new Date().toISOString().split("T")[0]}.csv`
  const filepath = path.join(exportDir, filename)

  fs.writeFileSync(filepath, csvContent, "utf8")

  return { filename, filepath, count: contacts.length }
}
