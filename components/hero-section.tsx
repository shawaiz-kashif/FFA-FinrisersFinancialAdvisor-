"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, CheckCircle } from "lucide-react"

export function HeroSection() {
  const [formData, setFormData] = useState({ firstName: "", email: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-card">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Business Advisor & Management Consultant
            </h1>
            <p className="mt-6 text-lg md:text-xl text-card/90 leading-relaxed max-w-xl">
              Get your business on track with expert guidance in tax, accounting, and strategic management. 
              Serving Hamilton, Ontario and the Greater Toronto Area.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-card text-card hover:bg-card hover:text-foreground">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Lead Capture Form */}
          <div className="bg-card rounded-xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Free Guide Download</h2>
                <p className="text-sm text-muted-foreground">Top 10 Considerations When Choosing a Consultancy</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Make an informed decision when choosing a financial and business consultancy. 
              Download our free guide to get started.
            </p>

            {isSubmitted ? (
              <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Check your email for the guide.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Download Free Guide
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
