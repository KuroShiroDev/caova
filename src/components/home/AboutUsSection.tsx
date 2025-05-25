import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Award, TrendingUp, Shield, Heart, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const AboutUsSection = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Transparencia',
      description: 'Información clara y detallada sobre cada proyecto e inversión.',
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la honestidad y resultados.',
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Excelencia',
      description: 'Nos comprometemos con la calidad en cada proyecto que desarrollamos.',
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: 'Innovación',
      description: 'Utilizamos tecnología de vanguardia para optimizar tus inversiones.',
    },
  ];

  const teamMembers = [
    {
      name: 'María González',
      role: 'CEO & Fundadora',
      experience: '15+ años en desarrollo inmobiliario',
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Inversiones',
      experience: '12+ años en mercados financieros',
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de Proyectos',
      experience: '10+ años en construcción',
      image: '/placeholder.svg?height=300&width=300',
    },
  ];

  const achievements = [
    'Empresa certificada por la Superintendencia Financiera',
    'Reconocimiento como mejor plataforma de inversión inmobiliaria 2024',
    'Más de 1000 familias han logrado sus sueños de inversión',
    'Presencia en las principales ciudades de Colombia',
  ];

  return (
    <section className="py-16">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Sobre CAOVA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Quiénes Somos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una plataforma líder en inversiones inmobiliarias que conecta a inversionistas con oportunidades de alto
            rendimiento en el sector de la construcción.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white shadow-lg">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-primary">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Democratizar el acceso a inversiones inmobiliarias de calidad, ofreciendo oportunidades transparentes y rentables
                que permitan a nuestros usuarios construir un futuro financiero sólido a través del sector inmobiliario.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-lg">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-primary">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser la plataforma de inversión inmobiliaria más confiable y innovadora de Latinoamérica, transformando la manera
                en que las personas invierten en bienes raíces y generan riqueza a largo plazo.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Nuestros Valores</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Los principios que guían cada decisión y acción en CAOVA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-primary">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Nuestro Equipo</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Profesionales experimentados comprometidos con tu éxito financiero</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 relative">
                  <Image
                    width={300}
                    height={300}
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-primary mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Logros */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Nuestros Logros</h3>
              <p className="text-blue-100">
                Reconocimientos que respaldan nuestro compromiso con la excelencia y la satisfacción de nuestros inversionistas.
              </p>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-800 rounded-xl p-6 space-y-4">
                <Award className="h-12 w-12 text-yellow-400" />
                <h4 className="text-xl font-semibold">Certificación de Excelencia</h4>
                <p className="text-blue-200 text-sm">
                  Reconocidos por nuestros altos estándares de calidad y transparencia en el manejo de inversiones inmobiliarias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-primary">¿Listo para comenzar tu journey de inversión?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a cientos de inversionistas que ya están construyendo su futuro financiero con CAOVA. Comienza con tan solo
            $100.000 COP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              <Link href="/projects">Ver proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
