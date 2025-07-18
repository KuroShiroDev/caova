import { getUser } from '@/actions/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { currencyFormat } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

export const UserInfoCard = async () => {
  const user = await getUser();

  const clerkUser = await currentUser();

  return (
    <Card className="w-full h-full p-6 shadow-lg">
      <CardContent className="flex flex-col md:flex-row p-0 h-full w-full items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={clerkUser?.imageUrl} alt={user?.name} />
          <AvatarFallback>{user?.name || ''}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <CardTitle>{user?.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>

        <div className="flex flex-col items-end gap-2 mt-4 ml-0 md:mt-0 md:ml-auto">
          <Button>
            <Link href="profile/recharge">Recargar saldo</Link>
          </Button>

          <span className="font-bold text-4xl text-primary font-poppins">
            {currencyFormat(Number(user?.Wallet?.balance ?? 0), 0, 0, 'code')}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
