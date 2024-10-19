import { FeatureSectionSteps } from '@/components/home/FeatureSectionSteps';
import { HeroComponent } from '@/components/home/HeroComponent';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className=" min-h-screen flex flex-col md:flex-row items-start justify-between">
        <HeroComponent />
      </div>
      <FeatureSectionSteps />
      <div className="bg-yellow-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Proyectos Disponibles</h2>
        <p className="text-lg">Explora los proyectos que tenemos para ti.</p>
      </div>

      <div className="bg-red-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
        <p className="text-lg">Conoce más sobre nuestro equipo y misión.</p>
      </div>
    </MaxWidthWrapper>
  );
}
