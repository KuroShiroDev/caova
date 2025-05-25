import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { Award, CheckCircle } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    'Empresa certificada por la Superintendencia Financiera de Colombia',
    'Reconocimiento como mejor plataforma de inversión inmobiliaria 2024',
    'Más de 1000 familias han logrado sus sueños de inversión con nosotros',
    'Presencia consolidada en las 5 principales ciudades de Colombia',
    'Calificación AAA en transparencia y manejo de fondos',
    'Miembro activo de la Cámara Colombiana de la Construcción',
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Logros</h3>
              <p className="text-blue-100 text-lg">
                Reconocimientos que respaldan nuestro compromiso con la excelencia y la satisfacción de nuestros inversionistas.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-800 rounded-2xl p-8">
              <Award className="h-16 w-16 text-yellow-400 mb-6" />
              <h4 className="text-2xl font-semibold mb-4">Certificación de Excelencia</h4>
              <p className="text-blue-200">
                Reconocidos por nuestros altos estándares de calidad y transparencia en el manejo de inversiones inmobiliarias.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
