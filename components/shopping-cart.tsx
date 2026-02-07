"use client"

import { useState } from "react"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock cart data - in a real app, this would come from state management or database
const initialCartItems = [
  {
    id: 1,
    name: "Velvet Royal Basket",
    description: "Premium velvet-lined presentation box",
    price: 250,
    quantity: 1,
    image: "/basket-velvet-royal-gift-box.jpg",
    category: "Basket",
  },
  {
    id: 2,
    name: "Belgian Dark Truffles",
    description: "70% cocoa with sea salt",
    price: 45,
    quantity: 2,
    image: "/chocolate-belgian-dark-truffles.jpg",
    category: "Chocolate",
  },
  {
    id: 3,
    name: "Gold Bar 10g",
    description: "24k gold bullion bar",
    price: 750,
    quantity: 1,
    image: "/precious-gold-bar-10g.jpg",
    category: "Precious",
  },
]

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="font-heading text-4xl mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Start creating your bespoke luxury gift or explore our collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/customize">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  START CUSTOMIZING
                </Button>
              </Link>
              <Link href="/collections/chocolates">
                <Button size="lg" variant="outline" className="bg-transparent">
                  BROWSE COLLECTIONS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight">Shopping Cart</h1>
          <p className="text-primary-foreground/90 mt-2">{cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-sm p-6">
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="w-32 h-32 flex-shrink-0 rounded-sm overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.category}</p>
                        <h3 className="font-heading text-xl">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-5 w-5" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 bg-transparent"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 bg-transparent"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-heading text-2xl text-accent-gold">${item.price * item.quantity}</p>
                        {item.quantity > 1 && <p className="text-sm text-muted-foreground">${item.price} each</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4">
              <Link
                href="/collections/chocolates"
                className="text-primary hover:text-accent-gold inline-flex items-center gap-2 font-medium"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-sm p-6 sticky top-24">
              <h2 className="font-heading text-2xl mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="text-sm font-medium mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <Input
                    id="promo"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" className="bg-transparent">
                    APPLY
                  </Button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                {subtotal > 1000 && (
                  <div className="bg-accent-gold/10 text-accent-gold px-3 py-2 rounded-sm text-sm">
                    Free white-glove delivery applied
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-xl">Total</span>
                  <span className="font-heading text-3xl text-accent-gold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  PROCEED TO CHECKOUT
                </Button>
              </Link>

              {/* Security Note */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure checkout powered by industry-leading encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
