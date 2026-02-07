"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    subtitle: "SIGNATURE COLLECTION",
    title: "Bespoke Luxury Awaits",
    description: "Craft your perfect gift from our curated selection",
    image: "/luxury-gift-basket-with-gold-accents.jpg",
    cta: "BEGIN CUSTOMIZATION",
  },
  {
    id: 2,
    subtitle: "PRECIOUS TREASURES",
    title: "Gold & Gemstones",
    description: "Elevate your gift with precious metals and stones",
    image: "/luxury-gold-jewelry-gift-box.jpg",
    cta: "EXPLORE COLLECTION",
  },
  {
    id: 3,
    subtitle: "ARTISAN CHOCOLATES",
    title: "Handcrafted Excellence",
    description: "Premium Belgian chocolates & gourmet selections",
    image: "/luxury-chocolate-gift-box-premium.jpg",
    cta: "DISCOVER MORE",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 animate-in zoom-in duration-[7000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-accent-gold text-sm tracking-[0.3em] mb-4 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  {slide.subtitle}
                </p>
                <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6 text-sm tracking-widest animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-accent-gold transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-accent-gold transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? "w-12 bg-accent-gold" : "w-8 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
