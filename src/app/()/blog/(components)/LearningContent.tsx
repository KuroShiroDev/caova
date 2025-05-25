'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  ChevronDown,
  Clock,
  User,
  Calendar,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Home,
  CreditCard,
  Shield,
  TrendingUp,
  Building2,
} from 'lucide-react';

export const LearningContent = () => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles = [
    {
      title: '¿Cómo funciona la plataforma de inversión inmobiliaria de CAOVA?',
      description:
        'Conoce paso a paso cómo nuestra plataforma te permite invertir en proyectos inmobiliarios de manera segura y transparente.',
      readTime: '5 min',
      category: 'Fundamentos',
      author: 'Equipo CAOVA',
      date: '24 May 2025',
      featured: true,
      content: {
        intro:
          'CAOVA es una plataforma digital que democratiza el acceso a inversiones inmobiliarias, permitiendo que cualquier persona pueda participar en proyectos de desarrollo inmobiliario con montos desde $100.000 COP.',
        sections: [
          {
            title: '¿Qué es CAOVA?',
            content:
              'CAOVA es una plataforma de inversión inmobiliaria que conecta a inversores con desarrolladores de proyectos inmobiliarios verificados. Actuamos como intermediarios, proporcionando transparencia total y facilitando el proceso de inversión.',
            icon: <Home className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Cómo funciona el proceso',
            content:
              '1. Regístrate y verifica tu identidad\n2. Recarga saldo en tu cuenta\n3. Explora proyectos disponibles\n4. Invierte en los proyectos que te interesen\n5. Recibe actualizaciones del progreso\n6. Obtén retornos según el cronograma',
            icon: <ArrowRight className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Seguridad y transparencia',
            content:
              'Todos nuestros proyectos pasan por un riguroso proceso de verificación. Trabajamos únicamente con desarrolladores certificados y proyectos con licencias completas. Además, proporcionamos informes regulares sobre el progreso de cada proyecto.',
            icon: <Shield className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Beneficios para inversores',
            content:
              '• Acceso a proyectos inmobiliarios con inversión mínima baja\n• Diversificación de portafolio\n• Transparencia total en cada proyecto\n• Retornos competitivos\n• Proceso 100% digital',
            icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: '¿Cómo empezar a invertir en proyectos inmobiliarios con CAOVA?',
      description: 'Guía completa para nuevos inversores: desde el registro hasta tu primera inversión.',
      readTime: '8 min',
      category: 'Primeros pasos',
      author: 'María González',
      date: '23 May 2025',
      featured: true,
      content: {
        intro:
          'Comenzar a invertir en CAOVA es un proceso sencillo y seguro. Esta guía te llevará paso a paso desde el registro hasta realizar tu primera inversión exitosa.',
        sections: [
          {
            title: 'Paso 1: Registro y verificación',
            content:
              'Crea tu cuenta proporcionando tu información básica. Luego, verifica tu identidad subiendo tu cédula de ciudadanía y comprobante de ingresos. Este proceso toma entre 24-48 horas.',
            icon: <User className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Paso 2: Recarga tu primera inversión',
            content:
              'Añade fondos a tu cuenta usando PSE, tarjeta de crédito/débito o pagos en efectivo. La inversión mínima es de $100.000 COP, pero puedes empezar con el monto que te sientas cómodo.',
            icon: <CreditCard className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Paso 3: Explora proyectos disponibles',
            content:
              'Revisa los proyectos disponibles en nuestra plataforma. Cada proyecto incluye información detallada sobre ubicación, desarrollador, cronograma, rentabilidad esperada y nivel de riesgo.',
            icon: <BookOpen className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Paso 4: Realiza tu primera inversión',
            content:
              'Selecciona el proyecto que más te convenga y el monto a invertir. Confirma tu inversión y comienza a recibir actualizaciones regulares sobre el progreso del proyecto.',
            icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: '¿Cómo recargar saldo en tu cuenta de CAOVA?',
      description: 'Aprende todos los métodos disponibles para añadir fondos a tu cuenta: PSE, tarjetas y efectivo.',
      readTime: '4 min',
      category: 'Pagos',
      author: 'Carlos Rodríguez',
      date: '22 May 2025',
      content: {
        intro:
          'CAOVA ofrece múltiples métodos de recarga para que puedas añadir fondos a tu cuenta de manera fácil y segura, adaptándose a tus preferencias de pago.',
        sections: [
          {
            title: 'PSE (Transferencia bancaria)',
            content:
              'El método más popular y seguro. Conecta directamente con tu banco para transferir fondos. Es instantáneo y no tiene comisiones adicionales. Compatible con todos los bancos principales de Colombia.',
            icon: <CreditCard className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Tarjetas de crédito y débito',
            content:
              'Acepta tarjetas Visa y Mastercard. Los fondos se reflejan inmediatamente en tu cuenta. Ideal para recargas rápidas y montos menores.',
            icon: <CreditCard className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Pagos en efectivo',
            content:
              'Puedes recargar en puntos Efecty y Baloto en todo el país. Genera un código de pago y dirígete al punto más cercano. Los fondos se reflejan en 1-2 horas después del pago.',
            icon: <Home className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Límites y comisiones',
            content:
              '• Recarga mínima: $50.000 COP\n• Recarga máxima: $50.000.000 COP por transacción\n• PSE: Sin comisión\n• Tarjetas: 2.9% + $900 COP\n• Efectivo: $3.000 COP por transacción',
            icon: <Shield className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: 'Tipos de proyectos inmobiliarios disponibles',
      description: 'Descubre las diferentes opciones de inversión: residencial, comercial y mixto.',
      readTime: '6 min',
      category: 'Proyectos',
      author: 'Ana Martínez',
      date: '21 May 2025',
      content: {
        intro:
          'En CAOVA ofrecemos una variedad de proyectos inmobiliarios para que puedas diversificar tu portafolio según tus objetivos de inversión y tolerancia al riesgo.',
        sections: [
          {
            title: 'Proyectos Residenciales',
            content:
              'Apartamentos, casas y condominios destinados a vivienda. Generalmente ofrecen retornos estables y son ideales para inversores conservadores. Incluyen proyectos de vivienda de interés social (VIS) y no VIS.',
            icon: <Home className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Proyectos Comerciales',
            content:
              'Oficinas, centros comerciales, locales comerciales y bodegas. Suelen ofrecer retornos más altos pero con mayor riesgo. Ideales para inversores con experiencia que buscan diversificar.',
            icon: <Building2 className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Proyectos Mixtos',
            content:
              'Combinan uso residencial y comercial en un mismo desarrollo. Ofrecen un balance entre riesgo y retorno, aprovechando las ventajas de ambos sectores.',
            icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Factores a considerar',
            content:
              '• Ubicación y conectividad\n• Experiencia del desarrollador\n• Cronograma de construcción\n• Rentabilidad esperada\n• Nivel de riesgo\n• Licencias y permisos',
            icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: '¿Cómo evaluar un proyecto inmobiliario?',
      description: 'Criterios clave para tomar decisiones de inversión informadas y minimizar riesgos.',
      readTime: '10 min',
      category: 'Estrategias',
      author: 'Luis Herrera',
      date: '20 May 2025',
      content: {
        intro:
          'Evaluar correctamente un proyecto inmobiliario es fundamental para tomar decisiones de inversión inteligentes. Aquí te enseñamos los criterios más importantes a considerar.',
        sections: [
          {
            title: 'Análisis de ubicación',
            content:
              'La ubicación es el factor más importante. Evalúa la conectividad, servicios cercanos, desarrollo urbano planificado, seguridad del sector y potencial de valorización a futuro.',
            icon: <Home className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Desarrollador y equipo',
            content:
              'Investiga la experiencia y trayectoria del desarrollador. Revisa proyectos anteriores, cumplimiento de cronogramas, calidad de construcción y solidez financiera de la empresa.',
            icon: <User className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Análisis financiero',
            content:
              'Evalúa la rentabilidad esperada, flujo de caja proyectado, tiempo de retorno de la inversión, y compara con otras opciones de inversión disponibles en el mercado.',
            icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Gestión de riesgos',
            content:
              'Identifica riesgos potenciales como retrasos en construcción, cambios regulatorios, condiciones de mercado y factores externos que puedan afectar el proyecto.',
            icon: <Shield className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: 'Retiros y ganancias en la plataforma de CAOVA',
      description: 'Todo sobre cómo y cuándo puedes retirar tus ganancias de las inversiones.',
      readTime: '7 min',
      category: 'Pagos',
      author: 'Patricia Vega',
      date: '19 May 2025',
      content: {
        intro:
          'Entender cómo y cuándo puedes acceder a tus ganancias es crucial para planificar tus inversiones. Te explicamos todo el proceso de retiros en CAOVA.',
        sections: [
          {
            title: 'Tipos de retornos',
            content:
              'Puedes recibir retornos periódicos durante el proyecto (rentas) y retornos al final del proyecto (ganancia de capital). Cada proyecto especifica su estructura de pagos.',
            icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Proceso de retiro',
            content:
              'Los retiros se procesan a tu cuenta bancaria registrada. Puedes solicitar retiros desde tu panel de control. El proceso toma entre 1-3 días hábiles.',
            icon: <CreditCard className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Comisiones y límites',
            content:
              '• Retiro mínimo: $50.000 COP\n• Comisión: 0.5% del monto retirado\n• Sin límite máximo de retiro\n• Hasta 3 retiros gratuitos por mes',
            icon: <Shield className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Reinversión automática',
            content:
              'Puedes configurar la reinversión automática de tus ganancias en nuevos proyectos para maximizar el efecto del interés compuesto.',
            icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: 'Seguridad y transparencia en las inversiones',
      description: 'Conoce las medidas de seguridad que protegen tu dinero y tus datos personales.',
      readTime: '5 min',
      category: 'Seguridad',
      author: 'Roberto Silva',
      date: '18 May 2025',
      content: {
        intro:
          'La seguridad de tus inversiones y datos personales es nuestra prioridad. Implementamos múltiples capas de protección para garantizar tu tranquilidad.',
        sections: [
          {
            title: 'Seguridad de datos',
            content:
              'Utilizamos encriptación SSL de 256 bits, autenticación de dos factores y cumplimos con estándares internacionales de seguridad como ISO 27001.',
            icon: <Shield className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Protección de fondos',
            content:
              'Tus fondos están segregados en cuentas bancarias independientes y están protegidos por seguros. No mezclamos tu dinero con los fondos operativos de la empresa.',
            icon: <CreditCard className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Transparencia en proyectos',
            content:
              'Proporcionamos informes regulares sobre el progreso de cada proyecto, incluyendo fotos, avances de construcción y estados financieros actualizados.',
            icon: <BookOpen className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Regulación y compliance',
            content:
              'Estamos registrados ante la Superintendencia Financiera y cumplimos con todas las regulaciones aplicables para plataformas de inversión.',
            icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: '¿Qué documentos necesito para invertir?',
      description: 'Lista completa de documentos requeridos para verificar tu identidad y comenzar a invertir.',
      readTime: '3 min',
      category: 'Primeros pasos',
      author: 'Equipo CAOVA',
      date: '17 May 2025',
      content: {
        intro:
          'Para cumplir con las regulaciones financieras y garantizar la seguridad de todos nuestros usuarios, necesitamos verificar tu identidad antes de que puedas comenzar a invertir.',
        sections: [
          {
            title: 'Documentos de identidad',
            content:
              '• Cédula de ciudadanía vigente (ambas caras)\n• Para extranjeros: Cédula de extranjería o pasaporte\n• Las imágenes deben ser claras y legibles',
            icon: <User className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Comprobante de ingresos',
            content:
              '• Certificado laboral (no mayor a 30 días)\n• Últimos 3 desprendibles de nómina\n• Para independientes: Declaración de renta o certificado de ingresos',
            icon: <CreditCard className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Información bancaria',
            content:
              '• Certificación bancaria (no mayor a 30 días)\n• Debe coincidir con el nombre del titular de la cuenta\n• Solo aceptamos cuentas de bancos colombianos',
            icon: <Shield className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Proceso de verificación',
            content:
              'Una vez subas todos los documentos, nuestro equipo los revisará en 24-48 horas. Te notificaremos por email cuando tu cuenta esté verificada.',
            icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
    {
      title: 'Diversificación de portafolio inmobiliario',
      description: 'Estrategias para distribuir tus inversiones y reducir riesgos en tu portafolio.',
      readTime: '12 min',
      category: 'Estrategias',
      author: 'María González',
      date: '16 May 2025',
      content: {
        intro:
          'La diversificación es una estrategia fundamental para reducir riesgos y maximizar retornos en tus inversiones inmobiliarias. Te enseñamos cómo aplicarla efectivamente.',
        sections: [
          {
            title: '¿Por qué diversificar?',
            content:
              'La diversificación reduce el riesgo al distribuir tus inversiones entre diferentes proyectos, ubicaciones y tipos de inmuebles. Si un proyecto tiene problemas, los otros pueden compensar las pérdidas.',
            icon: <Shield className="h-6 w-6 text-blue-600" />,
          },
          {
            title: 'Diversificación por tipo de proyecto',
            content:
              'Distribuye entre proyectos residenciales, comerciales y mixtos. Cada tipo tiene diferentes ciclos de mercado y factores de riesgo, lo que ayuda a estabilizar tu portafolio.',
            icon: <Building2 className="h-6 w-6 text-green-600" />,
          },
          {
            title: 'Diversificación geográfica',
            content:
              'Invierte en diferentes ciudades y sectores. Esto te protege contra riesgos locales como cambios en el desarrollo urbano o condiciones económicas específicas de una zona.',
            icon: <Home className="h-6 w-6 text-purple-600" />,
          },
          {
            title: 'Estrategias de implementación',
            content:
              '• Comienza con 3-5 proyectos diferentes\n• No inviertas más del 20% en un solo proyecto\n• Considera diferentes plazos de inversión\n• Rebalancea tu portafolio periódicamente',
            icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
          },
        ],
      },
    },
  ];

  const toggleArticle = (index: number) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">Aprende sobre inversiones inmobiliarias</h1>
        <p className="text-gray-600">
          Guías completas y tutoriales paso a paso para dominar la plataforma CAOVA y maximizar tus inversiones.
        </p>
      </div>

      {/* All Articles */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Todos los artículos</h2>
        <div className="space-y-4">
          {articles.map((article, index) => {
            const isExpanded = expandedArticle === index;

            return (
              <div key={index} className="space-y-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => toggleArticle(index)}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 text-sm">{article.description}</p>

                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                          <span>•</span>
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5 text-gray-400 ml-4" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400 ml-4" />
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Expanded Content */}
                {isExpanded && article.content && (
                  <Card className="border-l-4 border-l-blue-500 bg-blue-50/50">
                    <CardContent className="p-8">
                      <div className="space-y-8">
                        <div className="flex items-center space-x-3 mb-6">
                          <BookOpen className="h-6 w-6 text-blue-600" />
                          <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-200 pl-4 bg-white p-4 rounded-r-lg">
                          {article.content.intro}
                        </p>

                        <div className="space-y-6">
                          {article.content.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="bg-white rounded-lg p-6 shadow-sm border">
                              <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 mt-1">{section.icon}</div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center pt-6">
                          <Button
                            variant="outline"
                            onClick={() => setExpandedArticle(null)}
                            className="flex items-center space-x-2">
                            <ChevronDown className="h-4 w-4 rotate-180" />
                            <span>Cerrar artículo</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
