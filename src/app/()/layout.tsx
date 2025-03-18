import type { Metadata } from 'next';
import '../globals.css';

import { Header } from '@/components/ui/header/Header';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cavoa',
  description: 'Inviersiones en proeyctos inmobiliarios a tu alcance',
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
