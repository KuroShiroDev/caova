import { getPrincipalProjects } from '@/actions/projects';
import { AboutUsSection } from '@/components/home/AboutUsSection';
import { FeatureSectionSteps } from '@/components/home/FeatureSectionSteps';
import { HeroComponent } from '@/components/home/HeroComponent';
import { ProjectsInfoCard } from '@/components/projects/ProjectsInfoCard';
import { Button } from '@/components/ui/button';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import Link from 'next/link';

export default async function Home() {
  const projects = await getPrincipalProjects();
  return (
    <MaxWidthWrapper>
      <div className=" min-h-screen flex flex-col md:flex-row items-start justify-between">
        <HeroComponent />
      </div>

      <FeatureSectionSteps />
      <h2 className="mb-4 text-5xl tracking-tight font-bold text-primary">Proyectos Disponibles</h2>
      <p className="text-gray-600 sm:text-xl mb-12">Explora nuestros proyectos y descubre oportunidades de inversión únicas.</p>

      <ProjectsInfoCard basePath="profile" projects={projects} />

      <Button className=" mx-auto  flex  my-8" variant="default">
        <Link href="/projects">Ver todos los proyectos</Link>
      </Button>

      <AboutUsSection />
    </MaxWidthWrapper>
  );
}
