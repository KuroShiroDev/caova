
import { AboutUsHero } from './(components)/AboutUsHero';
import { AchievementsSection } from './(components)/AchievementsSection';
import { CompanyValues } from './(components)/CompanyValues';
import { ContactCTA } from './(components)/ContactCTA';
import { MissionVision } from './(components)/MissionVision';
import { TeamSection } from './(components)/TeamSection';

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen">
      <AboutUsHero />
      <MissionVision />
      <CompanyValues />
      {/* 
      <CompanyHistory />
      */}
      <TeamSection />
      <AchievementsSection />
      <ContactCTA />
    </div>
  );
}
