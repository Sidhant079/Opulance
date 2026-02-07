"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "COLLECTIONS", href: "/collections/chocolates" },
    { label: "CUSTOMIZE", href: "/customize" },
    { label: "PRECIOUS", href: "/collections/precious-stones" },
    { label: "OUR STORY", href: "/story" },
    { label: "CONTACT", href: "/contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-xl">O</span>
              </div>
              <span className="text-white font-heading text-xl tracking-wider hidden sm:inline">OPULENCE</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-sm tracking-widest hover:text-accent-gold transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="text-white hover:text-accent-gold hover:bg-white/10">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Shopping cart</span>
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:text-accent-gold hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary pt-20 lg:hidden">
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-xl tracking-widest hover:text-accent-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
