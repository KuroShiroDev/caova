import { Card, CardContent } from "@/components/ui/card"
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper"
import { Star, Quote } from "lucide-react"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Andrea Gómez",
      role: "Inversionista desde 2022",
      content:
        "CAOVA me permitió diversificar mi portafolio de inversión de manera segura. En 2 años he visto retornos consistentes y el equipo siempre está disponible para resolver mis dudas.",
      rating: 5,
      investment: "$2.5M COP invertidos",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Miguel Torres",
      role: "Empresario",
      content:
        "Como empresario, valoro la transparencia y profesionalismo. CAOVA supera mis expectativas en ambos aspectos. Recomiendo la plataforma sin dudarlo.",
      rating: 5,
      investment: "$8M COP invertidos",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Carolina Ruiz",
      role: "Profesional independiente",
      content:
        "Empecé con una inversión pequeña y gracias a los retornos he podido reinvertir. El proceso es muy fácil y la información siempre está clara.",
      rating: 5,
      investment: "$1.2M COP invertidos",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Lo que dicen nuestros inversores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de personas que han confiado en CAOVA para hacer crecer su patrimonio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-blue-600" />

                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-blue-600 font-medium">{testimonial.investment}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
