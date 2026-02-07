import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CheckoutForm />
      <Footer />
    </main>
  )
}
