import { Card, CardContent } from "@/components/ui/card"
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper"
import { Calendar, Users, Building, Award } from "lucide-react"

export const CompanyHistory = () => {
  const timeline = [
    {
      year: "2020",
      title: "Fundación de CAOVA",
      description: "Nace la idea de democratizar las inversiones inmobiliarias en Colombia.",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      year: "2021",
      title: "Primeros 100 inversores",
      description: "Alcanzamos nuestros primeros 100 inversores y $5B COP en inversiones.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      year: "2022",
      title: "Primer proyecto completado",
      description: "Entregamos exitosamente nuestro primer desarrollo inmobiliario.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      year: "2023",
      title: "Expansión nacional",
      description: "Expandimos operaciones a 5 ciudades principales de Colombia.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-orange-500",
    },
    {
      year: "2024",
      title: "Reconocimiento sectorial",
      description: "Premiados como mejor plataforma de inversión inmobiliaria del año.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-red-500",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un recorrido por los momentos más importantes que han marcado el crecimiento y evolución de CAOVA.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 ${item.color} text-white rounded-full`}>{item.icon}</div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
