import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShoppingCart } from "@/components/shopping-cart"

export default function CartPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ShoppingCart />
      <Footer />
    </main>
  )
}
