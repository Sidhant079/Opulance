import type { CustomizationState } from "@/components/gift-customizer"
import { Package, Sparkles, Apple, Gem } from "lucide-react"

interface CustomizationSummaryProps {
  customization: CustomizationState
}

export function CustomizationSummary({ customization }: CustomizationSummaryProps) {
  const totalPrice =
    (customization.basket?.price || 0) +
    customization.chocolates.reduce((sum, item) => sum + item.price, 0) +
    customization.dryFruits.reduce((sum, item) => sum + item.price, 0) +
    customization.precious.reduce((sum, item) => sum + item.price, 0)

  const allItems = [
    ...(customization.basket ? [{ ...customization.basket, category: "Basket" }] : []),
    ...customization.chocolates.map((item) => ({ ...item, category: "Chocolate" })),
    ...customization.dryFruits.map((item) => ({ ...item, category: "Dry Fruit" })),
    ...customization.precious.map((item) => ({ ...item, category: "Precious" })),
  ]

  return (
    <div>
      <h2 className="font-heading text-3xl mb-2">Your Bespoke Creation</h2>
      <p className="text-muted-foreground mb-8">Review your customized luxury gift before adding to cart.</p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left - Items List */}
        <div className="space-y-6">
          {/* Basket */}
          {customization.basket && (
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">BASKET</p>
                  <h3 className="font-heading text-lg mb-1">{customization.basket.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{customization.basket.description}</p>
                  <p className="text-accent-gold font-medium">${customization.basket.price}</p>
                </div>
              </div>
            </div>
          )}

          {/* Chocolates */}
          {customization.chocolates.length > 0 && (
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">CHOCOLATES</p>
                  <h3 className="font-heading text-lg">{customization.chocolates.length} items selected</h3>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {customization.chocolates.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-accent-gold">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dry Fruits */}
          {customization.dryFruits.length > 0 && (
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Apple className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">DRY FRUITS & NUTS</p>
                  <h3 className="font-heading text-lg">{customization.dryFruits.length} items selected</h3>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {customization.dryFruits.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-accent-gold">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Precious */}
          {customization.precious.length > 0 && (
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Gem className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">PRECIOUS ITEMS</p>
                  <h3 className="font-heading text-lg">{customization.precious.length} items selected</h3>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {customization.precious.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-accent-gold">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right - Summary & Actions */}
        <div>
          <div className="bg-primary text-primary-foreground rounded-sm p-8 sticky top-24">
            <h3 className="font-heading text-2xl mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Gift Wrapping</span>
                <span className="text-accent-gold">Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Personalized Card</span>
                <span className="text-accent-gold">Included</span>
              </div>
              <div className="flex justify-between text-sm text-primary-foreground/70">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-heading text-xl">Total</span>
                <span className="font-heading text-3xl text-accent-gold">${totalPrice}</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/80 text-center">
                Free white-glove delivery for orders over $1,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
