import { Badge } from '@/components/ui/badge';

export const BlogHero = () => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <Badge variant="outline" className="text-blue-600 border-blue-200">
          Centro de Ayuda CAOVA
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Aprende a invertir en bienes raíces</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre cómo funciona nuestra plataforma, aprende sobre inversiones inmobiliarias y encuentra respuestas a todas tus
          preguntas.
        </p>
      </div>
    </div>
  );
};
