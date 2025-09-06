import { type NextRequest, NextResponse } from "next/server"
import { getMessages, saveMessages } from "@/lib/json-storage"

export async function GET() {
  try {
    const messages = await getMessages()

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

    const messages = await getMessages()
    const messageIndex = messages.findIndex((m) => m.id === messageId)

    if (messageIndex === -1) {
      return NextResponse.json({ error: "Message non trouvé" }, { status: 404 })
    }

    messages[messageIndex].status = status
    await saveMessages(messages)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur mise à jour message:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
