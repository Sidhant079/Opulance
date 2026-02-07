"use client"

import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const preciousItems = [
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
    name: "Silver Coin Set",
    description: "999 pure silver commemorative coins",
    price: 350,
    image: "/precious-silver-coin-set.jpg",
  },
  {
    id: 4,
    name: "Gold Bar 10g",
    description: "24k gold bullion bar",
    price: 750,
    image: "/precious-gold-bar-10g.jpg",
  },
  {
    id: 5,
    name: "Sapphire Pendant",
    description: "Blue sapphire in silver setting",
    price: 1200,
    image: "/precious-sapphire-pendant.jpg",
  },
  {
    id: 6,
    name: "Diamond Stud",
    description: "0.5ct diamond earring",
    price: 2500,
    image: "/precious-diamond-stud.jpg",
  },
]

interface PreciousSelectorProps {
  selected: any[]
  onSelect: (precious: any[]) => void
}

export function PreciousSelector({ selected, onSelect }: PreciousSelectorProps) {
  const addItem = (item: any) => {
    onSelect([...selected, item])
  }

  const removeItem = (itemId: number) => {
    const index = selected.findIndex((item) => item.id === itemId)
    if (index > -1) {
      const newSelected = [...selected]
      newSelected.splice(index, 1)
      onSelect(newSelected)
    }
  }

  const getQuantity = (itemId: number) => {
    return selected.filter((item) => item.id === itemId).length
  }

  return (
    <div>
      <h2 className="font-heading text-3xl mb-2">Add Precious Items</h2>
      <p className="text-muted-foreground mb-8">Elevate your gift with precious stones, gold, and silver treasures.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {preciousItems.map((item) => {
          const quantity = getQuantity(item.id)

          return (
            <div
              key={item.id}
              className="relative rounded-sm overflow-hidden border border-border hover:border-primary transition-all"
            >
              <div className="aspect-[4/3] relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-accent-gold text-primary px-3 py-1 text-xs font-medium tracking-wider">
                  PRECIOUS
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <p className="text-accent-gold font-medium text-lg mb-4">${item.price}</p>

                {quantity > 0 ? (
                  <div className="flex items-center justify-between bg-secondary rounded-sm p-2">
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="h-8 w-8">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium px-4">{quantity} added</span>
                    <Button variant="ghost" size="icon" onClick={() => addItem(item)} className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => addItem(item)}>
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
