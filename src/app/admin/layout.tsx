import { Header } from '@/components/ui/header/Header';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header isAdminPortal={true} />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </React.Fragment>
  );
}
