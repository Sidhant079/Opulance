"use client"

import { Check } from "lucide-react"

const baskets = [
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
    description: "Premium velvet-lined presentation box",
    price: 250,
    image: "/basket-velvet-royal-gift-box.jpg",
  },
  {
    id: 3,
    name: "Crystal Elite",
    description: "Hand-cut crystal display case",
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
    description: "Solid mahogany wood chest",
    price: 850,
    image: "/basket-mahogany-prestige-chest.jpg",
  },
  {
    id: 6,
    name: "Diamond Collection",
    description: "Exclusive diamond-studded case",
    price: 2500,
    image: "/basket-diamond-collection-case.jpg",
  },
]

interface BasketSelectorProps {
  selected: any | null
  onSelect: (basket: any) => void
}

export function BasketSelector({ selected, onSelect }: BasketSelectorProps) {
  return (
    <div>
      <h2 className="font-heading text-3xl mb-2">Choose Your Basket</h2>
      <p className="text-muted-foreground mb-8">Select the perfect foundation for your luxury gift</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {baskets.map((basket) => {
          const isSelected = selected?.id === basket.id

          return (
            <button
              key={basket.id}
              onClick={() => onSelect(basket)}
              className={`relative text-left rounded-sm overflow-hidden border-2 transition-all ${
                isSelected ? "border-accent-gold ring-2 ring-accent-gold/20" : "border-border hover:border-primary"
              }`}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={basket.image || "/placeholder.svg"}
                  alt={basket.name}
                  className="w-full h-full object-cover"
                />
                {isSelected && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">{basket.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{basket.description}</p>
                <p className="text-accent-gold font-medium text-lg">${basket.price}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
