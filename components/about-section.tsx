import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Deep-rooted knowledge of Canadian business environment",
  "Expert tax and accounting guidance",
  "Strategic management advisory",
  "Personalized client-focused approach",
  "Results-driven methodology"
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Marsers Consulting</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
              Your Partner in Business Success
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              At Marsers Consulting, we are experts in tax, accounting, financial planning, and 
              business strategy. As a financial and business consultancy incorporated under the 
              Canada Business Corporation Act, we have the experience and knowledge to provide 
              comprehensive support and real solutions for your business&apos;s success.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Contact us today to get started on your journey to business excellence.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule a Consultation
            </Button>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl text-center shadow-sm">
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div className="bg-card p-6 rounded-xl text-center shadow-sm">
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground mt-2">Clients Served</p>
                </div>
                <div className="bg-card p-6 rounded-xl text-center shadow-sm">
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="text-muted-foreground mt-2">Client Satisfaction</p>
                </div>
                <div className="bg-card p-6 rounded-xl text-center shadow-sm">
                  <p className="text-4xl font-bold text-primary">24/7</p>
                  <p className="text-muted-foreground mt-2">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
