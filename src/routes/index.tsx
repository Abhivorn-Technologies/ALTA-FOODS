import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Benefits } from "@/components/site/Benefits";
import { Applications } from "@/components/site/Applications";
import { Sustainability } from "@/components/site/Sustainability";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTA FOODS — Eco-Friendly Paper Fruit Cover Bags" },
      { name: "description", content: "Premium biodegradable paper fruit cover bags for mango, apple, banana, guava and more. Protect harvests naturally with ALTA FOODS." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Applications />
      <Sustainability />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
