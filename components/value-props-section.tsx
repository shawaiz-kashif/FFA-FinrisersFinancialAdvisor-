import { Eye, Heart, Award } from "lucide-react"

const valueProps = [
  {
    icon: Eye,
    title: "Attention to Detail for Individual Clients",
    description: "We understand that every client is unique, and we pay close attention to your individual needs and goals. Our personalized attention ensures that we provide the services you need to succeed."
  },
  {
    icon: Heart,
    title: "KPIs Linked to Client Success Rather Than Fees",
    description: "Our focus is on your success, not our fees. Our key performance indicators are linked to your success, ensuring that we provide the services you need to achieve your goals."
  },
  {
    icon: Award,
    title: "Experienced Canadian Business Experts",
    description: "As a financial and business consultancy incorporated under the Canada Business Corporation Act, we have the experience and knowledge to provide comprehensive support and real solutions for your business's success."
  }
]

export function ValuePropsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="text-center p-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <prop.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{prop.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
