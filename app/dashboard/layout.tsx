import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full h-screen">
        <div className="flex  w-full"></div>

        {children}
      </main>
    </SidebarProvider>
  );
}
