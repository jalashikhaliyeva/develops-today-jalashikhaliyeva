// app/layout.tsx - CORRECT ARCHITECTURE
"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import { SidebarMenu } from "@/components/ui";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { menuItems } from "@/mock/menuItems";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider position="bottom-right" maxToasts={5}>
          <div className="min-h-screen flex flex-col">
            <Header onMenuClick={() => setSidebarOpen(true)} />

            <main className="flex-1">{children}</main>

            <Footer />

            <SidebarMenu
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              items={menuItems}
              title="Navigation Menu"
              closeOnItemClick={true}
            />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
