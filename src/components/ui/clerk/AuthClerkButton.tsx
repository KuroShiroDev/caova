import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../button";
import { Loader } from "lucide-react";

export const AuthClerkButton = () => {
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
            <Button
              className="hidden md:block text-secondary-foreground text-xl border-none"
              variant="outline"
            >
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
