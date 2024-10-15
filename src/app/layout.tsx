import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { geistAlmarai } from "@/config/fonts"
import { Footer } from "@/components/ui/footer/Footer";

export const metadata: Metadata = {
    title: "Cavoa",
    description: "Inviersiones en proeyctos inmobiliarios a tu alcance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistAlmarai.variable}  antialiased`}>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}