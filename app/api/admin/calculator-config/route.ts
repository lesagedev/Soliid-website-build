import { type NextRequest, NextResponse } from "next/server"
import { getCalculatorConfigs, saveCalculatorConfigs } from "@/lib/json-storage"
import { getAdminFromCookies } from "@/lib/auth"

export async function GET() {
  try {
    const admin = await getAdminFromCookies()
    if (!admin) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const configs = await getCalculatorConfigs()

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

    const configs = await getCalculatorConfigs()
    const newConfig = {
      id: Date.now().toString(),
      type,
      name,
      dimensions,
      price,
      coverage,
      description: description || "",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    configs.push(newConfig)
    await saveCalculatorConfigs(configs)

    return NextResponse.json({
      id: newConfig.id,
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

    const configs = await getCalculatorConfigs()
    const configIndex = configs.findIndex((config) => config.id === id)

    if (configIndex === -1) {
      return NextResponse.json({ error: "Configuration non trouvée" }, { status: 404 })
    }

    configs[configIndex] = {
      ...configs[configIndex],
      type,
      name,
      dimensions,
      price,
      coverage,
      description: description || "",
      updated_at: new Date().toISOString(),
    }

    await saveCalculatorConfigs(configs)

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

    const configs = await getCalculatorConfigs()
    const filteredConfigs = configs.filter((config) => config.id !== id)

    if (filteredConfigs.length === configs.length) {
      return NextResponse.json({ error: "Configuration non trouvée" }, { status: 404 })
    }

    await saveCalculatorConfigs(filteredConfigs)

    return NextResponse.json({ message: "Configuration supprimée avec succès" })
  } catch (error) {
    console.error("Erreur lors de la suppression de la configuration:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
