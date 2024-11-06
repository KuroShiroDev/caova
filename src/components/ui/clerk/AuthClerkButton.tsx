'use client';

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from '@clerk/nextjs';
import { Button } from '../button';
import { Loader, LogOut, User } from 'lucide-react';
import { useEffect } from 'react';
import { handleUserLogin } from '@/actions/auth';
import Link from 'next/link';

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
          <div className="flex gap-6 items-center">
            <Link href="/profile">
              <User className="h-8 w-8" />
            </Link>
            <SignOutButton>
              <LogOut className="h-6 w-6 cursor-pointer " />
            </SignOutButton>
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton signUpForceRedirectUrl="/" mode="modal">
            <Button
              size="lg"
              className=" block text-secondary-foreground text-lg border-none"
              variant="outline">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
