"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Lock, CreditCard, Truck, Gift } from "lucide-react"

export function CheckoutForm() {
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")

  // Mock cart total
  const total = 1135.0

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight">Secure Checkout</h1>
          <p className="text-primary-foreground/90 mt-2">Complete your luxury gift order</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setStep("shipping")}
                className={`flex items-center gap-3 ${step === "shipping" ? "text-foreground" : "text-muted-foreground"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === "shipping" ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  <Truck className="w-5 h-5" />
                </div>
                <span className="font-medium hidden sm:inline">Shipping</span>
              </button>

              <div className="flex-1 h-[2px] bg-border mx-4" />

              <button
                onClick={() => setStep("payment")}
                disabled={step === "shipping"}
                className={`flex items-center gap-3 ${step === "payment" ? "text-foreground" : "text-muted-foreground"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === "payment" ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-medium hidden sm:inline">Payment</span>
              </button>

              <div className="flex-1 h-[2px] bg-border mx-4" />

              <button
                disabled
                className={`flex items-center gap-3 ${step === "review" ? "text-foreground" : "text-muted-foreground"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === "review" ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  <Gift className="w-5 h-5" />
                </div>
                <span className="font-medium hidden sm:inline">Review</span>
              </button>
            </div>

            {/* Shipping Information */}
            {step === "shipping" && (
              <div className="bg-card border border-border rounded-sm p-8">
                <h2 className="font-heading text-2xl mb-6">Shipping Information</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Luxury Lane" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" placeholder="NY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP/Postal Code</Label>
                      <Input id="zip" placeholder="10001" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Gift Message (Optional)</Label>
                    <Textarea id="notes" placeholder="Add a personalized message for your gift..." rows={4} />
                  </div>

                  <Button
                    size="lg"
                    onClick={() => setStep("payment")}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    CONTINUE TO PAYMENT
                  </Button>
                </div>
              </div>
            )}

            {/* Payment Information */}
            {step === "payment" && (
              <div className="bg-card border border-border rounded-sm p-8">
                <h2 className="font-heading text-2xl mb-6">Payment Information</h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="Name on card" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" type="password" />
                    </div>
                  </div>

                  <div className="bg-secondary rounded-sm p-4 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Secure Payment</p>
                      <p className="text-sm text-muted-foreground">
                        Your payment information is encrypted and secure. We never store your card details.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep("shipping")} className="flex-1 bg-transparent">
                      BACK
                    </Button>
                    <Button
                      size="lg"
                      onClick={() => setStep("review")}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      REVIEW ORDER
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Order Review */}
            {step === "review" && (
              <div className="bg-card border border-border rounded-sm p-8">
                <h2 className="font-heading text-2xl mb-6">Review Your Order</h2>

                <div className="space-y-6">
                  {/* Items Summary */}
                  <div>
                    <h3 className="font-medium mb-4">Order Items</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Velvet Royal Basket × 1</span>
                        <span>$250</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Belgian Dark Truffles × 2</span>
                        <span>$90</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Gold Bar 10g × 1</span>
                        <span>$750</span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="border-t border-border pt-4">
                    <h3 className="font-medium mb-2">Shipping To</h3>
                    <p className="text-sm text-muted-foreground">
                      John Doe
                      <br />
                      123 Luxury Lane
                      <br />
                      New York, NY 10001
                    </p>
                  </div>

                  {/* Payment Method */}
                  <div className="border-t border-border pt-4">
                    <h3 className="font-medium mb-2">Payment Method</h3>
                    <p className="text-sm text-muted-foreground">Card ending in 3456</p>
                  </div>

                  <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-sm p-4">
                    <p className="text-sm">
                      By placing this order, you agree to our terms and conditions. Your luxury gift will be
                      meticulously prepared and delivered with white-glove service.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep("payment")} className="flex-1 bg-transparent">
                      BACK
                    </Button>
                    <Button size="lg" className="flex-1 bg-accent-gold text-primary hover:bg-accent-gold/90">
                      PLACE ORDER - ${total.toFixed(2)}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-sm p-6 sticky top-24">
              <h2 className="font-heading text-xl mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$1,090</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-accent-gold">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$109.00</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-lg">Total</span>
                  <span className="font-heading text-2xl text-accent-gold">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Gift className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Complimentary gift wrapping included</span>
                </div>
                <div className="flex items-start gap-2">
                  <Truck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>White-glove delivery service</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>100% secure encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
