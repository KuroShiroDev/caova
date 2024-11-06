import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { navigationMenuProfile } from '../(data)/data';
import { ProyectInfoCard } from './ProyectInfoCard';

export const NavigationMenu = () => {
  return (
    <Card className="w-full shadow-lg ">
      <Tabs defaultValue="projects" className="w-full">
        <CardHeader>
          <TabsList className="w-full h-full font-poppins justify-start md:justify-center bg-transparent overflow-x-auto whitespace-nowrap scrollbar ">
            {navigationMenuProfile.map((item, index) => (
              <TabsTrigger
                key={index}
                value={item.value}
                className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 rounded-none data-[state=active]:border-primary text-xl p-4">
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="projects" className="w-full">
            <ProyectInfoCard />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};
