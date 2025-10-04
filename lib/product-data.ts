export interface ProductData {
  name: string
  slug: string
  dimensions: string
  weight: string
  resistance: string
  description: string
  features: string[]
  usage: string
  variants?: string[]
  images: string[]
  technicalDetails: string[]
  applications: string[]
  category: "parpaings" | "paves" | "bordures"
  gamme?: string
}

// Helper function to generate SEO-friendly slugs
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

// Parpaings data
export const parpaingsData: ProductData[] = [
  {
    name: "Parpaing 15 Standard Premium",
    slug: "parpaing-15-standard-premium",
    dimensions: "50 x 20 x 15 cm",
    weight: "21,60 kg",
    resistance: "4 MPa",
    category: "parpaings",
    gamme: "Standard Premium",
    description:
      "Idéal pour les murs porteurs, fondations et structures principales. Les parpaings Standard Premium allient résistance, précision et durabilité avec une robustesse optimale et une finition régulière.",
    features: [
      "Résistance mécanique de 4 MPa",
      "Dimensions précises pour une pose facilitée",
      "Finition régulière et esthétique",
      "Adapté aux murs porteurs",
      "Excellent rapport qualité-prix",
    ],
    usage: "Murs porteurs, fondations, structures principales",
    images: [
      "/parpaings/parpaings-standard-premium-soliid-construction.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Classe de résistance : 4 MPa",
      "Absorption d'eau < 10%",
      "Résistance au gel-dégel",
      "Dimensions normalisées",
      "Conformité aux normes camerounaises",
    ],
    applications: [
      "Construction de maisons individuelles",
      "Immeubles résidentiels",
      "Bâtiments commerciaux",
      "Fondations et soubassements",
      "Murs de clôture",
    ],
  },
  {
    name: "Parpaing 20 Standard Premium",
    slug: "parpaing-20-standard-premium",
    dimensions: "50 x 20 x 20 cm",
    weight: "25,60 kg",
    resistance: "4 MPa",
    category: "parpaings",
    gamme: "Standard Premium",
    description:
      "Parpaing Standard Premium haute performance pour murs porteurs et cloisons intérieures. Robustesse optimale avec finition régulière pour un rendu professionnel.",
    features: [
      "Résistance mécanique de 4 MPa",
      "Épaisseur renforcée de 20 cm",
      "Isolation thermique améliorée",
      "Finition soignée",
      "Durabilité garantie",
    ],
    usage: "Murs porteurs épais, cloisons intérieures, structures renforcées",
    images: [
      "/parpaings/parpaings-standard-premium-soliid-construction.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Classe de résistance : 4 MPa",
      "Épaisseur : 20 cm",
      "Absorption d'eau < 10%",
      "Résistance thermique améliorée",
      "Conformité normes construction",
    ],
    applications: [
      "Murs porteurs principaux",
      "Cloisons intérieures épaisses",
      "Structures nécessitant isolation",
      "Bâtiments à étages",
      "Construction durable",
    ],
  },
  {
    name: "Hourdis Standard Premium",
    slug: "hourdis-standard-premium",
    dimensions: "50 x 20 x 20 cm",
    weight: "12,50 kg",
    resistance: "4 MPa",
    category: "parpaings",
    gamme: "Standard Premium",
    description:
      "Hourdis léger pour planchers et dalles. Solution économique et performante pour vos planchers avec une résistance de 4 MPa.",
    features: [
      "Léger : seulement 12,50 kg",
      "Résistance de 4 MPa",
      "Facilite la pose des planchers",
      "Économique",
      "Gain de temps de construction",
    ],
    usage: "Planchers, dalles, entre-poutres",
    images: [
      "/parpaings/parpaings-standard-premium-soliid-construction.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Poids réduit : 12,50 kg",
      "Résistance : 4 MPa",
      "Dimensions standardisées",
      "Facilité de manutention",
      "Compatible systèmes de plancher",
    ],
    applications: [
      "Planchers d'étages",
      "Dalles de compression",
      "Entre-poutres",
      "Construction rapide",
      "Rénovation de planchers",
    ],
  },
  {
    name: "Parpaing 15 Standard Hydro Premium",
    slug: "parpaing-15-standard-hydro-premium",
    dimensions: "50 x 20 x 15 cm",
    weight: "21,60 kg",
    resistance: "4 MPa",
    category: "parpaings",
    gamme: "Standard Hydro Premium",
    description:
      "Spécialement conçu pour offrir une résistance renforcée à l'humidité et aux intempéries. Protection hydrofuge intégrée pour les environnements exigeants.",
    features: [
      "Protection hydrofuge intégrée",
      "Résistance à l'humidité renforcée",
      "Résistance de 4 MPa",
      "Adapté aux zones humides",
      "Durabilité exceptionnelle",
    ],
    usage: "Zones humides, salles d'eau, fondations, murs extérieurs exposés",
    images: [
      "/parpaings/parpaings-hydro-premium-soliid-resistance-humidite.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Traitement hydrofuge intégré",
      "Résistance : 4 MPa",
      "Absorption d'eau réduite",
      "Protection contre l'humidité",
      "Durabilité en milieu humide",
    ],
    applications: [
      "Salles de bain et cuisines",
      "Fondations en zones humides",
      "Murs extérieurs exposés",
      "Sous-sols et caves",
      "Zones côtières",
    ],
  },
  {
    name: "Parpaing 20 Standard Hydro Premium",
    slug: "parpaing-20-standard-hydro-premium",
    dimensions: "50 x 20 x 20 cm",
    weight: "25,60 kg",
    resistance: "4 MPa",
    category: "parpaings",
    gamme: "Standard Hydro Premium",
    description:
      "Parpaing Hydro Premium haute performance avec protection hydrofuge. Parfait pour les cloisons intérieures et murs exposés aux conditions climatiques difficiles.",
    features: [
      "Protection hydrofuge renforcée",
      "Épaisseur 20 cm",
      "Résistance 4 MPa",
      "Isolation thermique",
      "Résistance aux intempéries",
    ],
    usage: "Murs épais en zones humides, cloisons salles d'eau, structures exposées",
    images: [
      "/parpaings/parpaings-hydro-premium-soliid-resistance-humidite.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Traitement hydrofuge avancé",
      "Épaisseur : 20 cm",
      "Résistance : 4 MPa",
      "Protection longue durée",
      "Conformité normes humidité",
    ],
    applications: [
      "Murs porteurs en zones humides",
      "Cloisons épaisses salles d'eau",
      "Structures exposées aux intempéries",
      "Bâtiments en milieu tropical",
      "Construction en zones pluvieuses",
    ],
  },
  {
    name: "Parpaing 15 Premium Haute Performance",
    slug: "parpaing-15-premium-haute-performance",
    dimensions: "50 x 20 x 15 cm",
    weight: "25,60 kg",
    resistance: "6 MPa",
    category: "parpaings",
    gamme: "Premium Haute Performance",
    description:
      "L'excellence en matière de construction. Résistance mécanique exceptionnelle avec haute performance thermique et acoustique pour les projets les plus exigeants.",
    features: [
      "Résistance exceptionnelle de 6 MPa",
      "Performance thermique supérieure",
      "Isolation acoustique renforcée",
      "Finition premium",
      "Durabilité maximale",
    ],
    usage: "Projets haut de gamme, bâtiments exigeants, structures de prestige",
    images: [
      "/parpaings/parpaings-premium-haute-performance-soliid-excellence.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Résistance : 6 MPa",
      "Performance thermique optimale",
      "Isolation acoustique supérieure",
      "Finition de prestige",
      "Contrôle qualité renforcé",
    ],
    applications: [
      "Immeubles de standing",
      "Bâtiments commerciaux premium",
      "Projets architecturaux exigeants",
      "Structures haute performance",
      "Construction de luxe",
    ],
  },
  {
    name: "Parpaing 20 Premium Haute Performance",
    slug: "parpaing-20-premium-haute-performance",
    dimensions: "50 x 20 x 20 cm",
    weight: "30,20 kg",
    resistance: "6 MPa",
    category: "parpaings",
    gamme: "Premium Haute Performance",
    description:
      "Parpaing Premium Haute Performance avec technologie avancée. Solidité supérieure et finition soignée pour un rendu esthétique et professionnel.",
    features: [
      "Résistance maximale de 6 MPa",
      "Épaisseur renforcée 20 cm",
      "Technologie avancée",
      "Finition esthétique soignée",
      "Performance globale optimale",
    ],
    usage: "Structures de prestige, bâtiments haute performance, projets d'excellence",
    images: [
      "/parpaings/parpaings-premium-haute-performance-soliid-excellence.jpg",
      "/parpaings/specifications-techniques-parpaings-soliid-qualite.jpg",
    ],
    technicalDetails: [
      "Résistance : 6 MPa",
      "Épaisseur : 20 cm",
      "Technologie de pointe",
      "Finition premium",
      "Certification haute performance",
    ],
    applications: [
      "Bâtiments de prestige",
      "Structures haute résistance",
      "Projets architecturaux premium",
      "Construction haut de gamme",
      "Immeubles d'exception",
    ],
  },
]

// Pavés data
export const pavesData: ProductData[] = [
  {
    name: "Soliid Benoue",
    slug: "soliid-benoue",
    dimensions: "6cm × 20cm × 10cm",
    weight: "3,3 kg",
    resistance: "3 MPa (B30)",
    category: "paves",
    gamme: "Standard Confort",
    description:
      "Pavé de grande dimension pour revêtement de sol (cours, trottoir). Format généreux idéal pour les particuliers.",
    features: ["Format généreux 10×20cm", "Résistance B30", "Idéal cours et trottoirs", "Pose rapide"],
    usage: "Cours de maisons, terrasses, cheminements piétons",
    images: ["/paves/couverture-paves-benoue.jpg"],
    technicalDetails: [
      "Classe de résistance B30",
      "Résistance à la compression 3 MPa",
      "Absorption d'eau < 6%",
      "Résistance au gel-dégel",
      "Dimensions précises ±2mm",
    ],
    applications: [
      "Cours de maisons individuelles",
      "Trottoirs et cheminements piétons",
      "Terrasses et patios",
      "Zones de stationnement léger",
    ],
  },
  {
    name: "Soliid Sanaga",
    slug: "soliid-sanaga",
    dimensions: "6cm × 23cm × 14cm",
    weight: "3,2 kg",
    resistance: "3 MPa (B30)",
    category: "paves",
    gamme: "Standard Confort",
    description: "Pavé compact pour revêtement de sol (cours, trottoir). Design moderne et pose facilitée.",
    features: ["Format compact 14×23cm", "Résistance B30", "Pose facilitée", "Design moderne"],
    usage: "Allées piétonnes, bordures décoratives, petites surfaces",
    images: ["/paves/couverture-paves-sanaga.jpg"],
    technicalDetails: [
      "Classe de résistance B30",
      "Résistance à la compression 3 MPa",
      "Format compact et maniable",
      "Excellent drainage",
      "Résistance aux intempéries",
    ],
    applications: ["Allées piétonnes", "Bordures décoratives", "Petites surfaces", "Aménagements paysagers"],
  },
  {
    name: "Soliid Nde",
    slug: "soliid-nde",
    dimensions: "6cm × 25cm × 22,7cm",
    weight: "3,8 kg",
    resistance: "3 MPa (B30)",
    category: "paves",
    gamme: "Standard Confort",
    description: "Pavé rectangulaire pour revêtement de sol (cours, trottoir). Esthétique soignée et polyvalent.",
    features: ["Format rectangulaire 22,7×25cm", "Résistance B30", "Polyvalent", "Esthétique soignée"],
    usage: "Terrasses résidentielles, espaces commerciaux, zones piétonnes",
    images: ["/paves/couverture-paves-nde.jpg"],
    technicalDetails: [
      "Classe de résistance B30",
      "Résistance à la compression 3 MPa",
      "Format rectangulaire optimisé",
      "Surface antidérapante",
      "Durabilité exceptionnelle",
    ],
    applications: ["Terrasses résidentielles", "Espaces commerciaux", "Zones piétonnes", "Aménagements urbains"],
  },
  {
    name: "Soliid Wouri",
    slug: "soliid-wouri",
    dimensions: "6cm × 20cm × 18,6cm",
    weight: "3,3 kg",
    resistance: "3 MPa (B30)",
    category: "paves",
    gamme: "Standard Confort",
    description: "Pavé carré pour revêtement de sol (cours, trottoir). Design équilibré et pose harmonieuse.",
    features: ["Format carré 18,6×20cm", "Résistance B30", "Design équilibré", "Pose harmonieuse"],
    usage: "Cours intérieures, jardins, cheminements piétons",
    images: ["/paves/couverture-paves-wouri.jpg"],
    technicalDetails: [
      "Classe de résistance B30",
      "Résistance à la compression 3 MPa",
      "Format carré équilibré",
      "Joints optimisés",
      "Facilité d'entretien",
    ],
    applications: ["Cours intérieures", "Jardins et espaces verts", "Cheminements piétons", "Zones de détente"],
  },
  {
    name: "Soliid SaWa P8",
    slug: "soliid-sawa-p8",
    dimensions: "8cm × 19cm × 18cm",
    weight: "3,5 kg",
    resistance: "3,6 MPa (B36)",
    category: "paves",
    gamme: "Routiers Haute Performance",
    description: "Pavé de route épaisseur 8cm pour revêtement routier et circulation modérée.",
    features: ["Épaisseur renforcée 8cm", "Résistance B36", "Usage routier", "Trafic modéré"],
    usage: "Routes secondaires, voies d'accès, parkings",
    images: ["/paves/couverture-paves-p8.png", "/paves/couverture-paves-p8-2.png"],
    technicalDetails: [
      "Classe de résistance B36",
      "Résistance à la compression 3,6 MPa",
      "Épaisseur routière 8cm",
      "Résistance à l'usure",
      "Stabilité dimensionnelle",
    ],
    applications: ["Routes secondaires", "Voies d'accès", "Parkings", "Zones de circulation légère"],
  },
  {
    name: "Soliid CMR P13",
    slug: "soliid-cmr-p13",
    dimensions: "13cm × 27,5cm × 25cm",
    weight: "17 kg",
    resistance: "3,6 MPa (B36)",
    category: "paves",
    gamme: "Routiers Haute Performance",
    description: "Pavé de route épaisseur 13cm pour revêtement routier intensif et trafic lourd.",
    features: ["Très haute résistance", "Format robuste 25×27,5cm", "Trafic intense", "Épaisseur 13cm"],
    usage: "Routes principales, zones industrielles, trafic lourd",
    images: ["/paves/couverture-paves-p13.jpg"],
    technicalDetails: [
      "Classe de résistance B36",
      "Résistance à la compression 3,6 MPa",
      "Épaisseur routière intensive 13cm",
      "Résistance au trafic lourd",
      "Longévité exceptionnelle",
    ],
    applications: [
      "Routes principales",
      "Zones industrielles",
      "Aires de stationnement poids lourds",
      "Infrastructures portuaires",
    ],
  },
]

// Bordures data
export const borduresData: ProductData[] = [
  {
    name: "Bordure P1 - SOLIID",
    slug: "bordure-p1-soliid",
    dimensions: "50 x 8 x 20 cm",
    weight: "23 kg",
    resistance: "6 MPa",
    category: "bordures",
    description:
      "Bordure de trottoir compacte et maniable, parfaite pour les espaces restreints et les aménagements délicats.",
    features: [
      "Format compact et maniable",
      "Résistance de 6 MPa maintenue",
      "Poids réduit de 23 kg",
      "Installation facilitée",
      "Classe B36 certifiée",
      "Polyvalence d'utilisation",
    ],
    usage: "Parfaite pour les bordures de trottoir, allées piétonnes et délimitation de jardins",
    images: ["/bordures/bordure-p1-allee-pietonne.jpg"],
    technicalDetails: [
      "Longueur : 50 cm pour manipulation aisée",
      "Largeur : 8 cm pour espaces restreints",
      "Hauteur : 20 cm pour délimitation claire",
      "Poids optimisé : 23 kg seulement",
      "Béton haute qualité classe B36",
      "Finition soignée et durable",
    ],
    applications: [
      "Bordures de trottoir en zones résidentielles",
      "Allées piétonnes et cheminements",
      "Délimitation d'espaces verts",
      "Aménagements paysagers",
      "Projets de rénovation urbaine",
    ],
  },
  {
    name: "Bordure T2 - SOLIID",
    slug: "bordure-t2-soliid",
    dimensions: "100 x 15 x 25 cm",
    weight: "70 kg",
    resistance: "6 MPa",
    category: "bordures",
    description: "Bordure de trottoir haute résistance spécialement conçue pour les aménagements urbains exigeants.",
    features: [
      "Résistance mécanique de 6 MPa",
      "Classe de béton B36 certifiée",
      "Poids de 70 kg pour stabilité maximale",
      "Dimensions optimisées 100x15x25 cm",
      "Finition lisse et esthétique",
      "Résistance aux intempéries",
    ],
    usage: "Idéale pour les bordures de trottoir, aménagements urbains et séparation de voirie",
    images: ["/bordures/bordure-t2-allee-pietonne.jpg"],
    technicalDetails: [
      "Longueur : 100 cm pour faciliter la pose",
      "Largeur : 15 cm pour une emprise optimale",
      "Hauteur : 25 cm pour une délimitation efficace",
      "Béton de classe B36 haute performance",
      "Résistance à la compression : 6 MPa",
      "Conformité aux normes camerounaises",
    ],
    applications: [
      "Bordures de trottoir en milieu urbain",
      "Délimitation des voies de circulation",
      "Aménagements d'espaces publics",
      "Séparation piétons/véhicules",
      "Projets d'infrastructure routière",
    ],
  },
  {
    name: "Bordure A2 - SOLIID",
    slug: "bordure-a2-soliid",
    dimensions: "100 x 15 x 25 cm",
    weight: "70 kg",
    resistance: "6 MPa",
    category: "bordures",
    description: "Bordure premium de classe B60 pour les aménagements de prestige.",
    features: [
      "Classe B60 premium",
      "Finition esthétique soignée",
      "Résistance maximale 6 MPa",
      "Durabilité garantie",
      "Stabilité optimale 70 kg",
      "Qualité supérieure",
    ],
    usage: "Idéale pour les aménagements de prestige, zones commerciales et espaces publics de qualité",
    images: ["/bordures/bordure-a2-allee-pietonne.jpg"],
    technicalDetails: [
      "Dimensions premium : 100x15x25 cm",
      "Béton classe B60 de prestige",
      "Finition lisse et esthétique",
      "Résistance garantie 6 MPa",
      "Contrôle qualité renforcé",
      "Durabilité exceptionnelle",
    ],
    applications: [
      "Aménagements de prestige",
      "Zones commerciales et centres-villes",
      "Espaces publics de qualité",
      "Projets architecturaux exigeants",
      "Rénovations urbaines haut de gamme",
    ],
  },
  {
    name: "Bordure CS2 - SOLIID",
    slug: "bordure-cs2-soliid",
    dimensions: "100 x 25 x 13.5 cm",
    weight: "70 kg",
    resistance: "6 MPa",
    category: "bordures",
    description: "Bordure haute performance de classe B60, conçue pour les infrastructures les plus exigeantes.",
    features: [
      "Classe B60 haute performance",
      "Résistance maximale de 6 MPa",
      "Durabilité exceptionnelle",
      "Format large 25 cm",
      "Stabilité renforcée 70 kg",
      "Résistance aux charges lourdes",
    ],
    usage: "Spécialement conçue pour les infrastructures routières, zones industrielles et aménagements lourds",
    images: ["/bordures/bordure-cs2-allee-pietonne.jpg"],
    technicalDetails: [
      "Longueur : 100 cm standard",
      "Largeur : 25 cm pour stabilité maximale",
      "Hauteur : 13.5 cm optimisée",
      "Béton classe B60 ultra-résistant",
      "Résistance aux charges exceptionnelles",
      "Certification qualité supérieure",
    ],
    applications: [
      "Infrastructures routières principales",
      "Zones industrielles et logistiques",
      "Aménagements portuaires",
      "Aires de stationnement poids lourds",
      "Projets d'infrastructure majeurs",
    ],
  },
]

// Helper functions to get products
export function getAllProducts(): ProductData[] {
  return [...parpaingsData, ...pavesData, ...borduresData]
}

export function getProductBySlug(slug: string): ProductData | undefined {
  return getAllProducts().find((product) => product.slug === slug)
}

export function getProductsByCategory(category: "parpaings" | "paves" | "bordures"): ProductData[] {
  return getAllProducts().filter((product) => product.category === category)
}

export function getRelatedProducts(product: ProductData, limit = 4): ProductData[] {
  return getAllProducts()
    .filter((p) => p.category === product.category && p.slug !== product.slug && p.gamme === product.gamme)
    .slice(0, limit)
}
