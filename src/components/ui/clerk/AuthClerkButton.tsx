'use client';

import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { Button } from '../button';
import { Loader } from 'lucide-react';
import { useEffect } from 'react';
import { handleUserLogin } from '@/actions/auth';

export const AuthClerkButton = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      handleUserLogin();
    }
  }, [isLoaded, isSignedIn, user]);
  return (
    <>
      <ClerkLoading>
        <Loader size={24} className=" text-muted-foreground animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: 50,
                    height: 50,
                  },
                },
              }}
            />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton signUpForceRedirectUrl="/" mode="modal">
            <Button size="lg" className="hidden md:block text-secondary-foreground text-lg border-none" variant="outline">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
