"use client"

import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const chocolates = [
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
]

interface ChocolateSelectorProps {
  selected: any[]
  onSelect: (chocolates: any[]) => void
}

export function ChocolateSelector({ selected, onSelect }: ChocolateSelectorProps) {
  const addItem = (chocolate: any) => {
    onSelect([...selected, chocolate])
  }

  const removeItem = (chocolateId: number) => {
    const index = selected.findIndex((item) => item.id === chocolateId)
    if (index > -1) {
      const newSelected = [...selected]
      newSelected.splice(index, 1)
      onSelect(newSelected)
    }
  }

  const getQuantity = (chocolateId: number) => {
    return selected.filter((item) => item.id === chocolateId).length
  }

  return (
    <div>
      <h2 className="font-heading text-3xl mb-2">Select Chocolates</h2>
      <p className="text-muted-foreground mb-8">
        Add premium chocolates to your gift. You can select multiple items and quantities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chocolates.map((chocolate) => {
          const quantity = getQuantity(chocolate.id)

          return (
            <div
              key={chocolate.id}
              className="relative rounded-sm overflow-hidden border border-border hover:border-primary transition-all"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={chocolate.image || "/placeholder.svg"}
                  alt={chocolate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">{chocolate.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{chocolate.description}</p>
                <p className="text-accent-gold font-medium text-lg mb-4">${chocolate.price}</p>

                {quantity > 0 ? (
                  <div className="flex items-center justify-between bg-secondary rounded-sm p-2">
                    <Button variant="ghost" size="icon" onClick={() => removeItem(chocolate.id)} className="h-8 w-8">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium px-4">{quantity} added</span>
                    <Button variant="ghost" size="icon" onClick={() => addItem(chocolate)} className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => addItem(chocolate)}>
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
