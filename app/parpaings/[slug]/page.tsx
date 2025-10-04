import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductBySlug, parpaingsData } from "@/lib/product-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductDetailPage from "@/components/product-detail-page"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return parpaingsData.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Produit non trouvé | Soliid",
    }
  }

  const productTitle = `${product.name} | Parpaings Soliid - Construction au Cameroun`
  const productDescription = `${product.description.substring(0, 155)}...`

  return {
    title: productTitle,
    description: productDescription,
    keywords: `${product.name}, parpaing, construction Cameroun, ${product.gamme}, Soliid, Buildermats, ${product.dimensions}, ${product.resistance}`,
    openGraph: {
      title: `${product.name} | Soliid`,
      description: productDescription,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
      locale: "fr_FR",
      siteName: "Soliid by Buildermats",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Soliid`,
      description: productDescription,
      images: [product.images[0]],
    },
    alternates: {
      canonical: `/parpaings/${product.slug}`,
    },
  }
}

export default function ParpaingProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)

  if (!product || product.category !== "parpaings") {
    notFound()
  }

  return (
    <>
      <Navigation />
      <ProductDetailPage product={product} />
      <Footer />
    </>
  )
}
