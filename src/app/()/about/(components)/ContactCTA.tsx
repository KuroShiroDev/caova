import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export const ContactCTA = () => {
  return (
    <section className="py-16 ">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">¿Listo para comenzar tu journey de inversión?</h3>
              <p className="text-gray-600 text-lg">
                Únete a cientos de inversionistas que ya están construyendo su futuro financiero con CAOVA. Comienza con tan solo
                $100.000 COP.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline">
                <Link href="/projects">Ver proyectos</Link>
              </Button>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">contacto@caova.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Bogotá, Medellín, Cali, Barranquilla, Cartagena</span>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-primary">¿Tienes preguntas?</h4>
                <div className="bg-white p-4 rounded-lg flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Escríbenos directamente por WhatsApp y recibe atención personalizada.</span>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a
                    href="https://wa.me/573001234567" // Cambia este número por tu WhatsApp real
                    target="_blank"
                    rel="noopener noreferrer">
                    Chatear por WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
