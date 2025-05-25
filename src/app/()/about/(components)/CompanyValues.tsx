import { Card, CardContent } from "@/components/ui/card"
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper"
import { Shield, Heart, Target, Globe, Users, Zap } from "lucide-react"

export const CompanyValues = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Transparencia",
      description: "Información clara y detallada sobre cada proyecto e inversión. Sin letra pequeña ni sorpresas.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Heart className="h-10 w-10 text-red-600" />,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la honestidad, integridad y resultados consistentes.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: <Target className="h-10 w-10 text-green-600" />,
      title: "Excelencia",
      description: "Nos comprometemos con la calidad en cada proyecto que desarrollamos y cada servicio que ofrecemos.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-600" />,
      title: "Innovación",
      description: "Utilizamos tecnología de vanguardia para optimizar tus inversiones y mejorar tu experiencia.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-600" />,
      title: "Comunidad",
      description: "Creamos una red de inversores que se apoyan mutuamente en su crecimiento financiero.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-600" />,
      title: "Agilidad",
      description: "Respuesta rápida a las oportunidades del mercado y a las necesidades de nuestros inversores.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada decisión y acción en CAOVA, definiendo quiénes somos y cómo trabajamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${value.color}`}
            >
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  {value.icon}
                  <h4 className="text-xl font-semibold text-primary">{value.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
