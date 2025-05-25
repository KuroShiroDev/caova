import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, HelpCircle, Home } from 'lucide-react';
import Link from 'next/link';

interface BlogSidebarProps {
  activeSection?: string;
}

export const BlogSidebar = ({ activeSection }: BlogSidebarProps) => {
  const navigationItems = [
    {
      id: 'inicio',
      label: 'Inicio',
      href: '/blog',
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: 'aprende',
      label: 'Aprende',
      href: '/blog/learn',
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: 'faqs',
      label: 'FAQs',
      href: '/blog/faqs',
      icon: <HelpCircle className="h-4 w-4" />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                  activeSection === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-700'
                }`}>
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* Help Widget */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">¿Necesitas ayuda?</h4>
              <p className="text-sm text-blue-700">Nuestro equipo está aquí para ayudarte</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Contactar soporte
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
