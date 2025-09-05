import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PreferenceProvider } from "@/components/preference-provider";
import { MainLayout } from "@/components/layout/main-layout";
import { ToastProvider } from "@/components/ui/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GTS Shad/Cn Kit - Modern UI Component Library",
  description: "A comprehensive UI component library built with Next.js 15, TypeScript, and shadcn/ui. Created by Faheem Alvi for Geek Tech Sol. Showcase modern design patterns and reusable components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PreferenceProvider>
          <MainLayout>
            {children}
          </MainLayout>
          <ToastProvider />
        </PreferenceProvider>
      </body>
    </html>
  );
}
