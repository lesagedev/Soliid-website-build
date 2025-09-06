import { NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"

export async function GET() {
  try {
    const db = await initDatabase()

    const leads = await db.all(`
      SELECT * FROM leads 
      ORDER BY created_at DESC
    `)

    return NextResponse.json({ leads })
  } catch (error) {
    console.error("Erreur récupération leads:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
