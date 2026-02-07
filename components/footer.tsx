import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Collections */}
          <div>
            <h3 className="font-heading text-lg mb-4 tracking-wider">COLLECTIONS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections/chocolates" className="text-sm hover:text-accent-gold transition-colors">
                  Premium Chocolates
                </Link>
              </li>
              <li>
                <Link href="/collections/dry-fruits" className="text-sm hover:text-accent-gold transition-colors">
                  Exotic Dry Fruits
                </Link>
              </li>
              <li>
                <Link href="/collections/precious-stones" className="text-sm hover:text-accent-gold transition-colors">
                  Precious Stones
                </Link>
              </li>
              <li>
                <Link href="/collections/gold" className="text-sm hover:text-accent-gold transition-colors">
                  Gold Selection
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg mb-4 tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/customize" className="text-sm hover:text-accent-gold transition-colors">
                  Customize Your Gift
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-sm hover:text-accent-gold transition-colors">
                  Corporate Gifting
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-sm hover:text-accent-gold transition-colors">
                  Private Consultation
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-sm hover:text-accent-gold transition-colors">
                  Delivery & Care
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading text-lg mb-4 tracking-wider">ABOUT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/story" className="text-sm hover:text-accent-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="text-sm hover:text-accent-gold transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm hover:text-accent-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4 tracking-wider">CONNECT</h3>
            <p className="text-sm mb-4">Subscribe to receive exclusive updates and special offers</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-gold transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© 2025 Opulence Gifts. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-accent-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
