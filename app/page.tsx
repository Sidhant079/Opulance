import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { ExploreGrid } from "@/components/explore-grid"
import { BrandStory } from "@/components/brand-story"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ExploreGrid />
      <BrandStory />
      <Footer />
    </main>
  )
}
