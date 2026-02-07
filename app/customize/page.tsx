import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GiftCustomizer } from "@/components/gift-customizer"

export default function CustomizePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GiftCustomizer />
      <Footer />
    </main>
  )
}
