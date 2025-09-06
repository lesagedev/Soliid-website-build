import { type NextRequest, NextResponse } from "next/server"
import { getProducts, saveProducts } from "@/lib/json-storage"

export async function GET() {
  try {
    const products = await getProducts()
    const filteredProducts = products.filter((p) => p.type !== "configuration")

    return NextResponse.json({ products: filteredProducts })
  } catch (error) {
    console.error("Erreur récupération produits:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()

    const products = await getProducts()
    const newProduct = {
      id: Date.now().toString(),
      type: productData.type,
      name: productData.name,
      length: productData.length,
      width: productData.width,
      height: productData.height,
      price: productData.price,
      description: productData.description,
      image_url: productData.image_url || null,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    products.push(newProduct)
    await saveProducts(products)

    return NextResponse.json({ success: true, id: newProduct.id })
  } catch (error) {
    console.error("Erreur création produit:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const productData = await request.json()

    const products = await getProducts()
    const productIndex = products.findIndex((p) => p.id === productData.id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Produit non trouvé" }, { status: 404 })
    }

    products[productIndex] = {
      ...products[productIndex],
      type: productData.type,
      name: productData.name,
      length: productData.length,
      width: productData.width,
      height: productData.height,
      price: productData.price,
      description: productData.description,
      image_url: productData.image_url || null,
      updated_at: new Date().toISOString(),
    }

    await saveProducts(products)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur mise à jour produit:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()

    const products = await getProducts()
    const filteredProducts = products.filter((p) => p.id !== id)

    if (filteredProducts.length === products.length) {
      return NextResponse.json({ error: "Produit non trouvé" }, { status: 404 })
    }

    await saveProducts(filteredProducts)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur suppression produit:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
