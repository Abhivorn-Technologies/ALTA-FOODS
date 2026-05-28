import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata = {
  title: "ALTA FOODS — Eco-Friendly Paper Fruit Cover Bags",
  description: "ALTA FOODS manufactures premium biodegradable paper fruit cover bags that protect fruits from insects, birds, dust, and pesticides — for healthier harvests and export-quality yields.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}