import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const BlogCategories = () => {
  const categories = [
    {
      title: 'Primeros pasos',
      description: 'Todo lo que necesitas saber para comenzar',
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      articleCount: 8,
      href: '/blog/learn',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Preguntas frecuentes',
      description: 'Respuestas a las dudas más comunes',
      icon: <HelpCircle className="h-8 w-8 text-green-600" />,
      articleCount: 15,
      href: '/blog/faqs',
      color: 'bg-green-50 border-green-200',
    },
  ];

  const gridCols =
    categories.length === 1
      ? 'grid-cols-1'
      : categories.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Explora por categorías</h2>
        <p className="text-gray-600">Encuentra la información que necesitas de manera rápida y organizada</p>
      </div>

      <div className={`grid gap-6 ${gridCols}`}>
        {categories.map((category, index) => (
          <Link key={index} href={category.href}>
            <Card className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${category.color}`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {category.icon}
                    <Badge variant="secondary">{category.articleCount} artículos</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
