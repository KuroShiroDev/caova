import type { Metadata } from "next";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { geistAlmarai } from "../../config/fonts";
import { Header } from "@/components/ui/header/Header";
import { Footer } from "@/components/ui/footer/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Cavoa",
  description: "Inviersiones en proeyctos inmobiliarios a tu alcance",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment >
          <Header />
          {children}
    </React.Fragment>
  );
}
