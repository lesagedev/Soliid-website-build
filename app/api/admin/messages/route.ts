import { type NextRequest, NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"

export async function GET() {
  try {
    const db = await initDatabase()

    const messages = await db.all(`
      SELECT * FROM contact_messages 
      ORDER BY created_at DESC
    `)

    return NextResponse.json({ messages })
  } catch (error) {
    console.error("Erreur récupération messages:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { messageId, status } = await request.json()

    if (!messageId || !status) {
      return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 })
    }

    const db = await initDatabase()

    await db.run(`UPDATE contact_messages SET status = ? WHERE id = ?`, [status, messageId])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur mise à jour message:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
