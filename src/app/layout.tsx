import type { Metadata } from 'next';
import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';

import { geistAlmarai, geistPoppins } from '@/config/fonts';
import { Header } from '@/components/ui/header/Header';
import { Footer } from '@/components/ui/footer/Footer';

export const metadata: Metadata = {
  title: 'Cavoa',
  description: 'Inviersiones en proeyctos inmobiliarios a tu alcance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistAlmarai.variable} ${geistPoppins.variable}   antialiased`}>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
