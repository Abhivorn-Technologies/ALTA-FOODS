import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Products } from "@/components/site/Products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ALTA FOODS" },
      { name: "description", content: "Explore our range of paper fruit cover bags for mango, apple, banana, guava, pomegranate and custom orders." },
      { property: "og:title", content: "Products — ALTA FOODS" },
      { property: "og:description", content: "Explore our range of paper fruit cover bags for mango, apple, banana, guava, pomegranate and custom orders." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Our catalogue" title="Premium fruit protection, crafted in paper." subtitle="Engineered for every fruit, every climate, and every farm size." />
      <Products />
    </>
  );
}
