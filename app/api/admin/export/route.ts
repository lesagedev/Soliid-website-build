import { type NextRequest, NextResponse } from "next/server"
import { getLeads } from "@/lib/json-storage"

export async function POST(request: NextRequest) {
  try {
    const { type } = await request.json()

    if (type !== "leads") {
      return NextResponse.json({ error: "Type d'export non supporté" }, { status: 400 })
    }

    const leads = await getLeads()

    // Create CSV content
    const headers = [
      "Date",
      "Type",
      "Nom",
      "Email",
      "Téléphone",
      "Description Projet",
      "Quantité",
      "Surface (m²)",
      "Coût Estimé (FCFA)",
    ]

    const csvRows = [headers.join(",")]

    for (const lead of leads) {
      let calculationData = { quantity: "", surface: "", totalCost: "" }
      try {
        calculationData = JSON.parse(lead.calculation_data)
      } catch {
        // Keep default empty values
      }

      const row = [
        new Date(lead.created_at).toLocaleString("fr-FR", { timeZone: "Africa/Douala" }),
        lead.type === "parpaings" ? "Parpaings" : "Pavés",
        `"${lead.name}"`,
        lead.email,
        lead.phone,
        `"${lead.project_description || ""}"`,
        calculationData.quantity || "",
        calculationData.surface || "",
        calculationData.totalCost || "",
      ]
      csvRows.push(row.join(","))
    }

    const csvContent = csvRows.join("\n")

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error("Erreur export CSV:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
