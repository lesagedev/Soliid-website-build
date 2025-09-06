import { type NextRequest, NextResponse } from "next/server"
import { verifyAdminCredentials, generateAdminToken, createDefaultAdmin } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 })
    }

    // Ensure default admin exists
    await createDefaultAdmin()

    // Verify credentials
    const admin = await verifyAdminCredentials(email, password)

    if (!admin) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 })
    }

    // Generate token
    const token = generateAdminToken(admin)

    // Create response with cookie
    const response = NextResponse.json({
      success: true,
      admin: { id: admin.id, email: admin.email },
    })

    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
