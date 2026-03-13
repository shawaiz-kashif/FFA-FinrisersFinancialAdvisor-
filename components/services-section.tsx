import { Target, Users, TrendingUp, FileText, Calculator, Briefcase } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Tax Management",
    description: "Expert tax planning and compliance services to optimize your tax position and ensure regulatory adherence."
  },
  {
    icon: FileText,
    title: "Financial Consultancy",
    description: "Comprehensive financial advisory to help you make informed decisions and achieve your business objectives."
  },
  {
    icon: Briefcase,
    title: "Business Planning",
    description: "Strategic business plan development and refinement to set your business up for sustainable success."
  },
  {
    icon: Target,
    title: "Management Advisory",
    description: "Expert guidance on operational efficiency, organizational structure, and strategic management practices."
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to accelerate your business growth and expand your market presence."
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "Dedicated attention to your unique needs and goals, ensuring tailored solutions for your success."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Business Advisor and Management Consultant Assisting You to Get Your Business on Track
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Our team of experts has deep-rooted knowledge of tax, accounting, management advisory, 
            and the Canadian business environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-border group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
