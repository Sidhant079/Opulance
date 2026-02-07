"use client"

import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const dryFruits = [
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
]

interface DryFruitSelectorProps {
  selected: any[]
  onSelect: (dryFruits: any[]) => void
}

export function DryFruitSelector({ selected, onSelect }: DryFruitSelectorProps) {
  const addItem = (fruit: any) => {
    onSelect([...selected, fruit])
  }

  const removeItem = (fruitId: number) => {
    const index = selected.findIndex((item) => item.id === fruitId)
    if (index > -1) {
      const newSelected = [...selected]
      newSelected.splice(index, 1)
      onSelect(newSelected)
    }
  }

  const getQuantity = (fruitId: number) => {
    return selected.filter((item) => item.id === fruitId).length
  }

  return (
    <div>
      <h2 className="font-heading text-3xl mb-2">Add Dry Fruits</h2>
      <p className="text-muted-foreground mb-8">
        Enhance your gift with our selection of premium dried fruits and nuts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dryFruits.map((fruit) => {
          const quantity = getQuantity(fruit.id)

          return (
            <div
              key={fruit.id}
              className="relative rounded-sm overflow-hidden border border-border hover:border-primary transition-all"
            >
              <div className="aspect-[4/3] relative">
                <img src={fruit.image || "/placeholder.svg"} alt={fruit.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">{fruit.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{fruit.description}</p>
                <p className="text-accent-gold font-medium text-lg mb-4">${fruit.price}</p>

                {quantity > 0 ? (
                  <div className="flex items-center justify-between bg-secondary rounded-sm p-2">
                    <Button variant="ghost" size="icon" onClick={() => removeItem(fruit.id)} className="h-8 w-8">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium px-4">{quantity} added</span>
                    <Button variant="ghost" size="icon" onClick={() => addItem(fruit)} className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => addItem(fruit)}>
                    <Plus className="h-4 w-4 mr-2" />
                    ADD TO GIFT
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
