import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-card">Marsers</span>
                <span className="text-xs text-card/70 -mt-1">CONSULTING</span>
              </div>
            </div>
            <p className="text-card/80 leading-relaxed">
              Your trusted partner for business advisory, management consulting, and financial services 
              in Hamilton, Ontario and the Greater Toronto Area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-card mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-card/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-card/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-card/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-card/80 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-card/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-card mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-card/80">Tax Management</li>
              <li className="text-card/80">Financial Consultancy</li>
              <li className="text-card/80">Business Planning</li>
              <li className="text-card/80">Management Advisory</li>
              <li className="text-card/80">Growth Strategy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-card mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-card/80">
                  123 Business Street<br />
                  Hamilton, Ontario L8P 1A1
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+19055551234" className="text-card/80 hover:text-primary transition-colors">
                  (905) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@finrisers.com" className="text-card/80 hover:text-primary transition-colors">
                  info@finrisers.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-card" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-card" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-card" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm">
              © {new Date().getFullYear()} Marsers Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-card/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-card/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
