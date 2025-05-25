import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

export const FAQContent = () => {
  const faqCategories = [
    {
      title: 'Primeros pasos',
      count: 8,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Inversiones',
      count: 12,
      color: 'bg-green-100 text-green-800',
    },
    {
      title: 'Pagos y retiros',
      count: 6,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'Seguridad',
      count: 5,
      color: 'bg-red-100 text-red-800',
    },
    {
      title: 'Cuenta',
      count: 7,
      color: 'bg-orange-100 text-orange-800',
    },
  ];

  const faqs = [
    {
      category: 'Primeros pasos',
      question: '¿Qué es CAOVA y cómo funciona?',
      answer:
        'CAOVA es una plataforma de inversión inmobiliaria que te permite invertir en proyectos de construcción y desarrollo inmobiliario con montos desde $100.000 COP. Funcionamos como intermediarios entre inversores y desarrolladores, ofreciendo transparencia total en cada proyecto.',
    },
    {
      category: 'Primeros pasos',
      question: '¿Cuál es la inversión mínima para empezar?',
      answer:
        'La inversión mínima en CAOVA es de $100.000 COP. Este monto accesible permite que cualquier persona pueda comenzar a construir un portafolio de inversión inmobiliaria.',
    },
    {
      category: 'Primeros pasos',
      question: '¿Necesito experiencia previa en inversiones inmobiliarias?',
      answer:
        'No necesitas experiencia previa. Nuestra plataforma está diseñada para ser intuitiva y proporcionamos toda la información necesaria sobre cada proyecto, incluyendo análisis de riesgo, proyecciones de rentabilidad y documentación completa.',
    },
    {
      category: 'Inversiones',
      question: '¿Qué tipos de proyectos inmobiliarios puedo encontrar?',
      answer:
        'Ofrecemos diversos tipos de proyectos: residenciales (apartamentos, casas), comerciales (oficinas, locales), y mixtos. Cada proyecto incluye información detallada sobre ubicación, desarrollador, cronograma y rentabilidad esperada.',
    },
    {
      category: 'Inversiones',
      question: '¿Cuánto tiempo duran las inversiones?',
      answer:
        'La duración varía según el proyecto, típicamente entre 12 y 36 meses. En la descripción de cada proyecto encontrarás el cronograma detallado con fechas estimadas de inicio, construcción y entrega.',
    },
    {
      category: 'Inversiones',
      question: '¿Puedo invertir en múltiples proyectos?',
      answer:
        'Sí, recomendamos diversificar tu portafolio invirtiendo en múltiples proyectos para reducir riesgos. Puedes distribuir tu capital entre diferentes tipos de proyectos, ubicaciones y plazos.',
    },
    {
      category: 'Pagos y retiros',
      question: '¿Cómo puedo recargar saldo en mi cuenta?',
      answer:
        'Puedes recargar saldo mediante PSE (transferencia bancaria), tarjetas de crédito/débito, o pagos en efectivo a través de Efecty y Baloto. Todas las recargas se reflejan inmediatamente en tu cuenta.',
    },
    {
      category: 'Pagos y retiros',
      question: '¿Cuándo y cómo recibo mis ganancias?',
      answer:
        'Las ganancias se distribuyen según el cronograma de cada proyecto. Puedes recibirlas directamente en tu cuenta bancaria o reinvertirlas en nuevos proyectos. El proceso de retiro toma entre 1-3 días hábiles.',
    },
    {
      category: 'Pagos y retiros',
      question: '¿Hay comisiones por retiros?',
      answer:
        'Los retiros tienen una comisión mínima del 0.5% para cubrir costos bancarios. No cobramos comisiones por recargas ni por mantener saldo en tu cuenta.',
    },
    {
      category: 'Seguridad',
      question: '¿Qué tan seguras son mis inversiones?',
      answer:
        'Todas las inversiones conllevan riesgos, pero trabajamos solo con desarrolladores verificados y proyectos con licencias completas. Además, proporcionamos análisis detallados de riesgo para cada proyecto.',
    },
    {
      category: 'Seguridad',
      question: '¿Cómo protegen mi información personal y financiera?',
      answer:
        'Utilizamos encriptación de grado bancario, autenticación de dos factores y cumplimos con todas las regulaciones de protección de datos. Tus fondos están segregados y protegidos.',
    },
    {
      category: 'Cuenta',
      question: '¿Qué documentos necesito para verificar mi cuenta?',
      answer:
        'Necesitas cédula de ciudadanía vigente, comprobante de ingresos (últimos 3 meses) y certificación bancaria. El proceso de verificación toma entre 24-48 horas.',
    },
    {
      category: 'Cuenta',
      question: '¿Puedo cambiar mi información personal?',
      answer:
        'Sí, puedes actualizar tu información de contacto desde tu perfil. Para cambios en datos de identificación, debes contactar a nuestro equipo de soporte con la documentación correspondiente.',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">Preguntas Frecuentes</h1>
        <p className="text-gray-600">
          Encuentra respuestas rápidas a las preguntas más comunes sobre CAOVA y las inversiones inmobiliarias.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {faqCategories.map((category, index) => (
          <Badge key={index} className={category.color}>
            {category.title} ({category.count})
          </Badge>
        ))}
      </div>

      {/* FAQ Accordion */}
      <Card>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      {faq.category}
                    </Badge>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-gray-600 leading-relaxed ml-16">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <HelpCircle className="h-12 w-12 text-blue-600 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">¿No encontraste lo que buscabas?</h3>
              <p className="text-blue-700">
                Nuestro equipo de soporte está disponible para ayudarte con cualquier pregunta específica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-blue-700">
                <MessageCircle className="h-5 w-5" />
                <span>Chat en vivo</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <Mail className="h-5 w-5" />
                <span>soporte@caova.co</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <Phone className="h-5 w-5" />
                <span>+57 (1) 234-5678</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
