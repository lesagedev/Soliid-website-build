import { NextResponse } from "next/server"
import { getLeads } from "@/lib/json-storage"

export async function GET() {
  try {
    const leads = await getLeads()

    return NextResponse.json({ leads })
  } catch (error) {
    console.error("Erreur récupération leads:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
