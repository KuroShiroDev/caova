import type { Metadata } from 'next';
import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';

import { geistAlmarai, geistPoppins } from '@/config/fonts';
import { Footer } from '@/components/ui/footer/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Caova',
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
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
