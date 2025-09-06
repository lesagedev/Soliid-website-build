import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/database"
import { getAdminFromCookies } from "@/lib/auth"

export async function GET() {
  try {
    const admin = await getAdminFromCookies()
    if (!admin) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const db = await getDatabase()
    const configs = await db.all(`
      SELECT * FROM calculator_configs 
      ORDER BY type, name
    `)

    return NextResponse.json(configs)
  } catch (error) {
    console.error("Erreur lors de la récupération des configurations:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await getAdminFromCookies()
    if (!admin) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { type, name, dimensions, price, coverage, description } = await request.json()

    if (!type || !name || !dimensions || !price || !coverage) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
    }

    const db = await getDatabase()
    const result = await db.run(
      `
      INSERT INTO calculator_configs (type, name, dimensions, price, coverage, description, created_at)
      VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
    `,
      [type, name, dimensions, price, coverage, description || ""],
    )

    return NextResponse.json({
      id: result.lastID,
      message: "Configuration ajoutée avec succès",
    })
  } catch (error) {
    console.error("Erreur lors de l'ajout de la configuration:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const admin = await getAdminFromCookies()
    if (!admin) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { id, type, name, dimensions, price, coverage, description } = await request.json()

    if (!id || !type || !name || !dimensions || !price || !coverage) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
    }

    const db = await getDatabase()
    await db.run(
      `
      UPDATE calculator_configs 
      SET type = ?, name = ?, dimensions = ?, price = ?, coverage = ?, description = ?, updated_at = datetime('now')
      WHERE id = ?
    `,
      [type, name, dimensions, price, coverage, description || "", id],
    )

    return NextResponse.json({ message: "Configuration mise à jour avec succès" })
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la configuration:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const admin = await getAdminFromCookies()
    if (!admin) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 })
    }

    const db = await getDatabase()
    await db.run("DELETE FROM calculator_configs WHERE id = ?", [id])

    return NextResponse.json({ message: "Configuration supprimée avec succès" })
  } catch (error) {
    console.error("Erreur lors de la suppression de la configuration:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
