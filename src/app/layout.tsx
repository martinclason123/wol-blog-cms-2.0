import React from "react";
import { ModulesProvider } from "../context/ModulesContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wolverine Blog CMS",
  description: "Built to manage Wolverine blog posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ModulesProvider>
        <html lang="en">
          <UserProvider>
            <body>{children}</body>
          </UserProvider>
        </html>
      </ModulesProvider>
    </StyledComponentsRegistry>
  );
}
