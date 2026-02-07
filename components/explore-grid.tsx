import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Premium Chocolates",
    image: "/luxury-belgian-chocolate-assortment.jpg",
    href: "/collections/chocolates",
  },
  {
    title: "Exotic Dry Fruits",
    image: "/luxury-dried-fruits-nuts-gift-box.jpg",
    href: "/collections/dry-fruits",
  },
  {
    title: "Precious Stones",
    image: "/gemstones-jewelry-luxury-display.jpg",
    href: "/collections/precious-stones",
  },
  {
    title: "Gold Selection",
    image: "/gold-coins-bars-luxury-gift.jpg",
    href: "/collections/gold",
  },
  {
    title: "Silver Collection",
    image: "/silver-jewelry-luxury-gift-box.jpg",
    href: "/collections/silver",
  },
  {
    title: "Artisan Baskets",
    image: "/luxury-wicker-gift-basket-gourmet.jpg",
    href: "/collections/baskets",
  },
]

export function ExploreGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each piece carefully curated to create the perfect bespoke gift
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl text-white mb-2">{collection.title}</h3>
                <div className="flex items-center text-accent-gold text-sm tracking-wider group-hover:translate-x-2 transition-transform">
                  EXPLORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
