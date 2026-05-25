import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const metadata = {
  title: "ALTA FOODS — Eco-Friendly Paper Fruit Cover Bags",
  description:
    "ALTA FOODS manufactures premium biodegradable paper fruit cover bags that protect fruits from insects, birds, dust, and pesticides — for healthier harvests and export-quality yields.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
