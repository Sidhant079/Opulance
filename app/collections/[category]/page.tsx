import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionGallery } from "@/components/collection-gallery"
import { notFound } from "next/navigation"

const collections = {
  chocolates: {
    title: "Premium Chocolates",
    subtitle: "ARTISAN CONFECTIONS",
    description:
      "Indulge in the finest handcrafted chocolates from renowned chocolatiers around the world. Each piece is a masterwork of flavor and artistry.",
    hero: "/collection-hero-chocolates.jpg",
  },
  "dry-fruits": {
    title: "Exotic Dry Fruits",
    subtitle: "NATURE'S FINEST",
    description:
      "Discover our curated selection of premium dried fruits and nuts, sourced from the world's most renowned orchards and groves.",
    hero: "/collection-hero-dry-fruits.jpg",
  },
  "precious-stones": {
    title: "Precious Stones",
    subtitle: "TIMELESS TREASURES",
    description:
      "Adorn your gifts with exquisite gemstones, each carefully selected for its exceptional quality, clarity, and brilliance.",
    hero: "/collection-hero-precious-stones.jpg",
  },
  gold: {
    title: "Gold Selection",
    subtitle: "THE ULTIMATE LUXURY",
    description:
      "Pure 24k gold coins, bars, and jewelry pieces that represent the pinnacle of luxury gifting. Investment-grade excellence.",
    hero: "/collection-hero-gold.jpg",
  },
  silver: {
    title: "Silver Collection",
    subtitle: "TIMELESS ELEGANCE",
    description:
      "Sterling silver and 999 pure silver items crafted to perfection. A sophisticated choice for memorable occasions.",
    hero: "/collection-hero-silver.jpg",
  },
  baskets: {
    title: "Artisan Baskets",
    subtitle: "THE FOUNDATION",
    description:
      "Choose from our exclusive range of handcrafted baskets and presentation boxes, each designed to showcase your gift beautifully.",
    hero: "/collection-hero-baskets.jpg",
  },
}

export function generateStaticParams() {
  return Object.keys(collections).map((category) => ({
    category,
  }))
}

export default function CollectionPage({ params }: { params: { category: string } }) {
  const collection = collections[params.category as keyof typeof collections]

  if (!collection) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <img
            src={collection.hero || "/placeholder.svg"}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-2xl">
                <p className="text-accent-gold text-sm tracking-[0.3em] mb-4 uppercase">{collection.subtitle}</p>
                <h1 className="font-heading text-5xl md:text-6xl text-white mb-6 tracking-tight">{collection.title}</h1>
                <p className="text-white/90 text-lg leading-relaxed">{collection.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <CollectionGallery category={params.category} />
      </div>
      <Footer />
    </main>
  )
}
