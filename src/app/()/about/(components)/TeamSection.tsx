import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export const TeamSection = () => {
  const teamMembers = [
    {
      name: 'María González',
      role: 'CEO & Fundadora',
      experience: '15+ años en desarrollo inmobiliario',
      description: 'Arquitecta de profesión con MBA en Finanzas. Lideró proyectos por más de $100B COP.',
      image: '/placeholder.svg?height=400&width=400',
      specialties: ['Estrategia', 'Liderazgo', 'Desarrollo'],
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Inversiones',
      experience: '12+ años en mercados financieros',
      description: 'Ex-director de inversiones en fondo de pensiones. Especialista en análisis de riesgo.',
      image: '/placeholder.svg?height=400&width=400',
      specialties: ['Análisis', 'Riesgo', 'Portafolios'],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesionales experimentados y apasionados, comprometidos con tu éxito financiero y el crecimiento sostenible de la
            industria inmobiliaria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-1">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.experience}</p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
