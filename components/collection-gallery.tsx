"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const collectionItems = {
  chocolates: [
    {
      id: 1,
      name: "Belgian Dark Truffles",
      description: "70% cocoa with sea salt",
      price: 45,
      image: "/chocolate-belgian-dark-truffles.jpg",
    },
    {
      id: 2,
      name: "Swiss Pralines",
      description: "Hazelnut and caramel",
      price: 55,
      image: "/chocolate-swiss-pralines-hazelnut.jpg",
    },
    {
      id: 3,
      name: "French Macarons",
      description: "Assorted flavors",
      price: 65,
      image: "/chocolate-french-macarons-assorted.jpg",
    },
    {
      id: 4,
      name: "Italian Gianduja",
      description: "Piedmont hazelnut chocolate",
      price: 75,
      image: "/chocolate-italian-gianduja.jpg",
    },
    {
      id: 5,
      name: "Gold-Leaf Bonbons",
      description: "24k gold-dusted chocolates",
      price: 125,
      image: "/chocolate-gold-leaf-bonbons.jpg",
    },
    {
      id: 6,
      name: "Champagne Truffles",
      description: "Infused with Dom Pérignon",
      price: 150,
      image: "/chocolate-champagne-truffles.jpg",
    },
  ],
  "dry-fruits": [
    {
      id: 1,
      name: "Premium Almonds",
      description: "California-grown, organic",
      price: 35,
      image: "/dry-fruit-premium-almonds.jpg",
    },
    {
      id: 2,
      name: "Persian Pistachios",
      description: "Salted and roasted",
      price: 45,
      image: "/dry-fruit-persian-pistachios.jpg",
    },
    {
      id: 3,
      name: "Turkish Apricots",
      description: "Sun-dried, no sugar added",
      price: 30,
      image: "/dry-fruit-turkish-apricots.jpg",
    },
    {
      id: 4,
      name: "Medjool Dates",
      description: "Premium grade, hand-selected",
      price: 40,
      image: "/dry-fruit-medjool-dates.jpg",
    },
    {
      id: 5,
      name: "Mixed Berry Blend",
      description: "Cranberries, blueberries, goji",
      price: 50,
      image: "/dry-fruit-mixed-berry-blend.jpg",
    },
    {
      id: 6,
      name: "Exotic Trail Mix",
      description: "Cashews, macadamia, brazil nuts",
      price: 65,
      image: "/dry-fruit-exotic-trail-mix.jpg",
    },
  ],
  "precious-stones": [
    {
      id: 1,
      name: "Rose Quartz Stone",
      description: "Polished heart-shaped crystal",
      price: 85,
      image: "/precious-rose-quartz-stone.jpg",
    },
    {
      id: 2,
      name: "Amethyst Cluster",
      description: "Natural purple crystal formation",
      price: 125,
      image: "/precious-amethyst-cluster.jpg",
    },
    {
      id: 3,
      name: "Citrine Geode",
      description: "Brazilian golden citrine",
      price: 150,
      image: "/precious-citrine-geode.jpg",
    },
    {
      id: 4,
      name: "Emerald Pendant",
      description: "Colombian emerald in gold",
      price: 1800,
      image: "/precious-emerald-pendant.jpg",
    },
    {
      id: 5,
      name: "Ruby Ring",
      description: "Burmese ruby in platinum",
      price: 2200,
      image: "/precious-ruby-ring.jpg",
    },
    {
      id: 6,
      name: "Sapphire Necklace",
      description: "Ceylon sapphire masterpiece",
      price: 3500,
      image: "/precious-sapphire-necklace.jpg",
    },
  ],
  gold: [
    {
      id: 1,
      name: "Gold Coin 5g",
      description: "24k gold commemorative coin",
      price: 350,
      image: "/gold-coin-5g.jpg",
    },
    {
      id: 2,
      name: "Gold Bar 10g",
      description: "Investment-grade bullion",
      price: 750,
      image: "/precious-gold-bar-10g.jpg",
    },
    {
      id: 3,
      name: "Gold Bar 50g",
      description: "Certified 24k gold bar",
      price: 3500,
      image: "/gold-bar-50g.jpg",
    },
    {
      id: 4,
      name: "Gold Bracelet",
      description: "18k gold chain bracelet",
      price: 1200,
      image: "/gold-bracelet-chain.jpg",
    },
    {
      id: 5,
      name: "Gold Earrings",
      description: "24k gold stud earrings",
      price: 800,
      image: "/gold-earrings-studs.jpg",
    },
    {
      id: 6,
      name: "Gold Pendant",
      description: "Custom-designed gold pendant",
      price: 1500,
      image: "/gold-pendant-custom.jpg",
    },
  ],
  silver: [
    {
      id: 1,
      name: "Silver Coin Set",
      description: "999 pure silver coins",
      price: 350,
      image: "/precious-silver-coin-set.jpg",
    },
    {
      id: 2,
      name: "Silver Bar 100g",
      description: "Investment-grade silver",
      price: 150,
      image: "/silver-bar-100g.jpg",
    },
    {
      id: 3,
      name: "Sterling Silver Bracelet",
      description: "Handcrafted 925 silver",
      price: 250,
      image: "/silver-bracelet-sterling.jpg",
    },
    {
      id: 4,
      name: "Silver Necklace",
      description: "Elegant chain necklace",
      price: 300,
      image: "/silver-necklace-chain.jpg",
    },
    {
      id: 5,
      name: "Silver Ring Set",
      description: "Three-piece silver rings",
      price: 200,
      image: "/silver-ring-set.jpg",
    },
    {
      id: 6,
      name: "Silver Cufflinks",
      description: "Premium silver cufflinks",
      price: 180,
      image: "/silver-cufflinks.jpg",
    },
  ],
  baskets: [
    {
      id: 1,
      name: "Classic Wicker",
      description: "Traditional handwoven basket",
      price: 150,
      image: "/basket-classic-wicker-luxury.jpg",
    },
    {
      id: 2,
      name: "Velvet Royal",
      description: "Premium velvet-lined box",
      price: 250,
      image: "/basket-velvet-royal-gift-box.jpg",
    },
    {
      id: 3,
      name: "Crystal Elite",
      description: "Hand-cut crystal case",
      price: 450,
      image: "/basket-crystal-elite-case.jpg",
    },
    {
      id: 4,
      name: "Gold Heritage",
      description: "Gold-plated ornate basket",
      price: 650,
      image: "/basket-gold-heritage-ornate.jpg",
    },
    {
      id: 5,
      name: "Mahogany Prestige",
      description: "Solid mahogany chest",
      price: 850,
      image: "/basket-mahogany-prestige-chest.jpg",
    },
    {
      id: 6,
      name: "Diamond Collection",
      description: "Diamond-studded case",
      price: 2500,
      image: "/basket-diamond-collection-case.jpg",
    },
  ],
}

interface CollectionGalleryProps {
  category: string
}

export function CollectionGallery({ category }: CollectionGalleryProps) {
  const items = collectionItems[category as keyof typeof collectionItems] || []
  const [filter, setFilter] = useState<"all" | "low" | "mid" | "high">("all")

  const getFilteredItems = () => {
    if (filter === "all") return items
    if (filter === "low") return items.filter((item) => item.price < 100)
    if (filter === "mid") return items.filter((item) => item.price >= 100 && item.price < 500)
    if (filter === "high") return items.filter((item) => item.price >= 500)
    return items
  }

  const filteredItems = getFilteredItems()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-primary text-primary-foreground" : "bg-transparent"}
          >
            ALL ITEMS
          </Button>
          <Button
            variant={filter === "low" ? "default" : "outline"}
            onClick={() => setFilter("low")}
            className={filter === "low" ? "bg-primary text-primary-foreground" : "bg-transparent"}
          >
            UNDER $100
          </Button>
          <Button
            variant={filter === "mid" ? "default" : "outline"}
            onClick={() => setFilter("mid")}
            className={filter === "mid" ? "bg-primary text-primary-foreground" : "bg-transparent"}
          >
            $100 - $500
          </Button>
          <Button
            variant={filter === "high" ? "default" : "outline"}
            onClick={() => setFilter("high")}
            className={filter === "high" ? "bg-primary text-primary-foreground" : "bg-transparent"}
          >
            $500+
          </Button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent-gold font-medium text-xl">${item.price}</span>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    ADD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary text-primary-foreground rounded-sm p-8">
            <h3 className="font-heading text-2xl mb-4">Create Your Bespoke Gift</h3>
            <p className="mb-6 max-w-md">Combine items from all our collections to create something truly unique</p>
            <Link href="/customize">
              <Button size="lg" className="bg-accent-gold text-primary hover:bg-accent-gold/90">
                START CUSTOMIZING
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
