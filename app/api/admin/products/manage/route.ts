import { type NextRequest, NextResponse } from "next/server"
import { initDatabase } from "@/lib/database"

export async function GET() {
  try {
    const db = await initDatabase()

    const products = await db.all(`
      SELECT * FROM products 
      WHERE type != 'configuration'
      ORDER BY type, name
    `)

    return NextResponse.json({ products })
  } catch (error) {
    console.error("Erreur récupération produits:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()
    const db = await initDatabase()

    const result = await db.run(
      `INSERT INTO products (type, name, length, width, height, price, description, image_url, is_active, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, datetime('now'), datetime('now'))`,
      [
        productData.type,
        productData.name,
        productData.length,
        productData.width,
        productData.height,
        productData.price,
        productData.description,
        productData.image_url || null,
      ],
    )

    return NextResponse.json({ success: true, id: result.lastInsertRowid })
  } catch (error) {
    console.error("Erreur création produit:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const productData = await request.json()
    const db = await initDatabase()

    await db.run(
      `UPDATE products 
       SET type = ?, name = ?, length = ?, width = ?, height = ?, price = ?, description = ?, image_url = ?, updated_at = datetime('now')
       WHERE id = ?`,
      [
        productData.type,
        productData.name,
        productData.length,
        productData.width,
        productData.height,
        productData.price,
        productData.description,
        productData.image_url || null,
        productData.id,
      ],
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur mise à jour produit:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()
    const db = await initDatabase()

    await db.run(`DELETE FROM products WHERE id = ?`, [id])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur suppression produit:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
