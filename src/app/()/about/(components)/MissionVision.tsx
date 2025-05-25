import { Card, CardContent } from "@/components/ui/card"
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper"
import { Target, Eye, Lightbulb } from "lucide-react"

export const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra razón de ser</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los principios fundamentales que guían cada decisión y nos impulsan hacia el futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-shadow">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Democratizar el acceso a inversiones inmobiliarias de calidad, ofreciendo oportunidades transparentes y
                rentables que permitan a nuestros usuarios construir un futuro financiero sólido a través del sector
                inmobiliario colombiano.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-shadow">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-600 rounded-full">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ser la plataforma de inversión inmobiliaria más confiable y innovadora de Latinoamérica, transformando
                la manera en que las personas invierten en bienes raíces y generan riqueza a largo plazo.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-shadow">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-600 rounded-full">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Propósito</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Empoderar a cada persona para que pueda participar en el crecimiento del sector inmobiliario, sin
                importar el tamaño de su inversión inicial, creando oportunidades equitativas para todos.
              </p>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
