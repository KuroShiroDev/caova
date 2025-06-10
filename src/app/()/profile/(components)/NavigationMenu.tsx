import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { navigationMenuProfile } from '../(data)/data';
import { ProjectsInfoCard } from '../../../../components/projects/ProjectsInfoCard';
import { getProjectsByUser } from '@/actions/projects';
import { BalanceMovementsCard } from './BalanceMovementsCard';
import { getTransactionsWithInvestment } from '@/actions/transactions';
import { getUser } from '@/actions/auth';

export const NavigationMenu = async () => {
  const projects = await getProjectsByUser();

  const transactions = await getTransactionsWithInvestment();

  const user = await getUser();

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
            <ProjectsInfoCard basePath="profile" projects={projects} />
          </TabsContent>
          <TabsContent value="balance" className="w-full">
            <BalanceMovementsCard transactions={transactions} currentBalance={user?.Wallet?.balance ?? 0} />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};
