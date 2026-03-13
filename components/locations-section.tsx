import { MapPin } from "lucide-react"

const locations = [
  "Mississauga",
  "Hamilton",
  "Toronto",
  "Markham",
  "Vaughan",
  "Brampton",
  "Kitchener",
  "Guelph",
  "St. Catharines",
  "Niagara Falls",
  "Oakville",
  "Burlington",
  "Grimsby",
  "Waterloo"
]

export function LocationsSection() {
  return (
    <section className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Areas</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Serving Clients Across Southern Ontario
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-card rounded-full text-muted-foreground text-sm border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {location}
            </span>
          ))}
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            & surrounding areas
          </span>
        </div>
      </div>
    </section>
  )
}
