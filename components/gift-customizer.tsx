"use client"

import { useState } from "react"
import { StepIndicator } from "@/components/customizer/step-indicator"
import { BasketSelector } from "@/components/customizer/basket-selector"
import { ChocolateSelector } from "@/components/customizer/chocolate-selector"
import { DryFruitSelector } from "@/components/customizer/dry-fruit-selector"
import { PreciousSelector } from "@/components/customizer/precious-selector"
import { CustomizationSummary } from "@/components/customizer/customization-summary"
import { Button } from "@/components/ui/button"

export type CustomizationStep = "basket" | "chocolates" | "dry-fruits" | "precious" | "summary"

export interface CustomizationState {
  basket: any | null
  chocolates: any[]
  dryFruits: any[]
  precious: any[]
}

const steps: { id: CustomizationStep; label: string }[] = [
  { id: "basket", label: "Choose Basket" },
  { id: "chocolates", label: "Select Chocolates" },
  { id: "dry-fruits", label: "Add Dry Fruits" },
  { id: "precious", label: "Precious Items" },
  { id: "summary", label: "Review & Complete" },
]

export function GiftCustomizer() {
  const [currentStep, setCurrentStep] = useState<CustomizationStep>("basket")
  const [customization, setCustomization] = useState<CustomizationState>({
    basket: null,
    chocolates: [],
    dryFruits: [],
    precious: [],
  })

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep)

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id)
    }
  }

  const canProceed = () => {
    if (currentStep === "basket") return customization.basket !== null
    return true // Other steps are optional
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-gold text-sm tracking-[0.3em] mb-4 uppercase">BESPOKE CREATION</p>
            <h1 className="font-heading text-4xl md:text-6xl mb-4 tracking-tight">Customize Your Gift</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Create a one-of-a-kind luxury gift tailored to perfection. Select from our curated collections of premium
              items to craft something truly extraordinary.
            </p>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="bg-secondary py-6 border-b">
        <div className="container mx-auto px-6 lg:px-8">
          <StepIndicator steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customization Area */}
          <div className="lg:col-span-2">
            {currentStep === "basket" && (
              <BasketSelector
                selected={customization.basket}
                onSelect={(basket) => setCustomization({ ...customization, basket })}
              />
            )}
            {currentStep === "chocolates" && (
              <ChocolateSelector
                selected={customization.chocolates}
                onSelect={(chocolates) => setCustomization({ ...customization, chocolates })}
              />
            )}
            {currentStep === "dry-fruits" && (
              <DryFruitSelector
                selected={customization.dryFruits}
                onSelect={(dryFruits) => setCustomization({ ...customization, dryFruits })}
              />
            )}
            {currentStep === "precious" && (
              <PreciousSelector
                selected={customization.precious}
                onSelect={(precious) => setCustomization({ ...customization, precious })}
              />
            )}
            {currentStep === "summary" && <CustomizationSummary customization={customization} />}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevious}
                disabled={currentStepIndex === 0}
                className="tracking-wider bg-transparent"
              >
                PREVIOUS
              </Button>
              {currentStep !== "summary" ? (
                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider"
                >
                  CONTINUE
                </Button>
              ) : (
                <Button size="lg" className="bg-accent-gold text-primary hover:bg-accent-gold/90 tracking-wider">
                  ADD TO CART
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar - Live Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-sm p-6">
              <h3 className="font-heading text-xl mb-4">Your Creation</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Basket</p>
                  <p className="font-medium">{customization.basket?.name || "Not selected"}</p>
                  {customization.basket && <p className="text-sm text-accent-gold">${customization.basket.price}</p>}
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Chocolates</p>
                  <p className="font-medium">{customization.chocolates.length} items</p>
                  {customization.chocolates.length > 0 && (
                    <p className="text-sm text-accent-gold">
                      ${customization.chocolates.reduce((sum, item) => sum + item.price, 0)}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Dry Fruits</p>
                  <p className="font-medium">{customization.dryFruits.length} items</p>
                  {customization.dryFruits.length > 0 && (
                    <p className="text-sm text-accent-gold">
                      ${customization.dryFruits.reduce((sum, item) => sum + item.price, 0)}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Precious Items</p>
                  <p className="font-medium">{customization.precious.length} items</p>
                  {customization.precious.length > 0 && (
                    <p className="text-sm text-accent-gold">
                      ${customization.precious.reduce((sum, item) => sum + item.price, 0)}
                    </p>
                  )}
                </div>

                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-lg">Total</span>
                    <span className="font-heading text-2xl text-accent-gold">
                      $
                      {(customization.basket?.price || 0) +
                        customization.chocolates.reduce((sum, item) => sum + item.price, 0) +
                        customization.dryFruits.reduce((sum, item) => sum + item.price, 0) +
                        customization.precious.reduce((sum, item) => sum + item.price, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
