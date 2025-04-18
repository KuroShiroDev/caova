import type { Metadata } from 'next';
import '../globals.css';

import { Header } from '@/components/ui/header/Header';
import React from 'react';
import { verifyAdmin } from '@/actions/auth';

export const metadata: Metadata = {
  title: 'Cavoa',
  description: 'Inviersiones en proeyctos inmobiliarios a tu alcance',
};

export default async function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin = await verifyAdmin();
  return (
    <React.Fragment>
      <Header isAdmin={isAdmin} />
      {children}
    </React.Fragment>
  );
}
