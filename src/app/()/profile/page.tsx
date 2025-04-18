import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { UserInfoCard } from './(components)/UserInfoCard';
import { NavigationMenu } from './(components)/NavigationMenu';

export default function ProfilePage() {
  return (
    <MaxWidthWrapper className=" flex flex-col gap-4 items-center">
      <UserInfoCard />
      <NavigationMenu />
    </MaxWidthWrapper>
  );
}
