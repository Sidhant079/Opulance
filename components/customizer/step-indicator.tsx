"use client"

import { Check } from "lucide-react"
import type { CustomizationStep } from "@/components/gift-customizer"

interface StepIndicatorProps {
  steps: { id: CustomizationStep; label: string }[]
  currentStep: CustomizationStep
  onStepClick: (step: CustomizationStep) => void
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentStep)

  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex
        const isCurrent = step.id === currentStep
        const isAccessible = index <= currentIndex

        return (
          <div key={step.id} className="flex items-center flex-1">
            <button
              onClick={() => isAccessible && onStepClick(step.id)}
              disabled={!isAccessible}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  isCompleted
                    ? "bg-accent-gold text-primary"
                    : isCurrent
                      ? "bg-primary text-primary-foreground border-2 border-accent-gold"
                      : "bg-muted text-muted-foreground"
                } ${isAccessible ? "cursor-pointer group-hover:scale-110" : "cursor-not-allowed"}`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <span className="text-sm">{index + 1}</span>}
              </div>
              <span
                className={`text-xs tracking-wider hidden sm:block ${
                  isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-2 transition-colors ${isCompleted ? "bg-accent-gold" : "bg-border"}`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
