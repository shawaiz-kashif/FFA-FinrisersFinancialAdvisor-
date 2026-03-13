"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+19055551234" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>(905) 555-1234</span>
            </a>
            <a href="mailto:info@finrisers.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>info@finrisers.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Hamilton, Ontario | Serving the Greater Toronto Area</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Finrisers</span>
              <span className="text-xs text-muted-foreground -mt-1">FINANCIAL SUCCESS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
