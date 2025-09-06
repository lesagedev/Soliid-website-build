import { type NextRequest, NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const config = await request.json()
    const db = await initDatabase()

    // Store configuration in database
    await db.run(
      `INSERT OR REPLACE INTO products (id, type, config, updated_at)
       VALUES (1, 'configuration', ?, datetime('now'))`,
      [JSON.stringify(config)],
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur sauvegarde produits:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const db = await initDatabase()

    const result = await db.get(`
      SELECT config FROM products 
      WHERE type = 'configuration' 
      ORDER BY updated_at DESC 
      LIMIT 1
    `)

    if (result) {
      return NextResponse.json({ config: JSON.parse(result.config) })
    } else {
      // Return default configuration
      return NextResponse.json({
        config: {
          parpaings: {
            "20x20x40": { price: 350, description: "Idéal pour les murs porteurs et structures principales" },
            "15x20x40": { price: 300, description: "Parfait pour les cloisons intérieures et séparations" },
            "10x20x40": { price: 250, description: "Optimal pour les cloisons légères et aménagements" },
          },
          paves: {
            "20x10": { price: 450, description: "Classique et polyvalent pour allées et terrasses" },
            "20x20": { price: 800, description: "Élégant et moderne pour espaces décoratifs" },
            "20x17": { price: 650, description: "Design unique pour créer des motifs originaux" },
          },
        },
      })
    }
  } catch (error) {
    console.error("Erreur récupération config produits:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
