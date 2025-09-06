import { type NextRequest, NextResponse } from "next/server"
import { getAdminFromRequest, verifyAdminCredentials, updateAdminPassword } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const admin = await getAdminFromRequest(request)

    if (!admin) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { currentPassword, newPassword } = await request.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Mots de passe requis" }, { status: 400 })
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "Le nouveau mot de passe doit contenir au moins 8 caractères" },
        { status: 400 },
      )
    }

    // Verify current password
    const isCurrentPasswordValid = await verifyAdminCredentials(admin.email, currentPassword)

    if (!isCurrentPasswordValid) {
      return NextResponse.json({ error: "Mot de passe actuel incorrect" }, { status: 400 })
    }

    // Update password
    const success = await updateAdminPassword(admin.email, newPassword)

    if (!success) {
      return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Change password error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
