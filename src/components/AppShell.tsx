"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ScrollProgress } from "@/components/site/ScrollProgress";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute ? <ScrollProgress /> : null}
      {!isAdminRoute ? <Navbar /> : null}
      <main className="flex-grow">{children}</main>
      {!isAdminRoute ? <Footer /> : null}
      {!isAdminRoute ? <FloatingActions /> : null}
    </>
  );
}
