import { type NextRequest, NextResponse } from "next/server"
import { getProducts, saveProducts } from "@/lib/json-storage"

export async function POST(request: NextRequest) {
  try {
    const config = await request.json()

    const products = await getProducts()
    const configProduct = products.find((p) => p.type === "configuration")

    if (configProduct) {
      configProduct.config = JSON.stringify(config)
      configProduct.updated_at = new Date().toISOString()
    } else {
      products.push({
        id: "config-1",
        type: "configuration",
        name: "Product Configuration",
        config: JSON.stringify(config),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
    }

    await saveProducts(products)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur sauvegarde produits:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const products = await getProducts()
    const configProduct = products.find((p) => p.type === "configuration")

    if (configProduct && configProduct.config) {
      return NextResponse.json({ config: JSON.parse(configProduct.config) })
    } else {
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
