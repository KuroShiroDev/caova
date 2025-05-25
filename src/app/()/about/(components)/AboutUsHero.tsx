import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutUsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-800 text-white py-20 md:py-32">
      <div className="absolute inset-0  bg-cover bg-center opacity-10"></div>

      <MaxWidthWrapper>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="text-blue-200 border-blue-300 bg-blue-800/50">
              Sobre CAOVA
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Construyendo el futuro de las
                <span className="text-blue-300"> inversiones inmobiliarias</span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Desde 2020, hemos revolucionado la manera en que las personas invierten en bienes raíces, democratizando el acceso
                a oportunidades de alto rendimiento en el sector inmobiliario colombiano.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/projects" className="flex items-center">
                  Explorar proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-blue-700 rounded-2xl overflow-hidden">
              <Image width={1200} height={1200} src="/heroUs.jpg" alt="Equipo CAOVA" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
