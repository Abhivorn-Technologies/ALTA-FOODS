import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Sustainability } from "@/components/site/Sustainability";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — ALTA FOODS" },
      { name: "description", content: "Biodegradable, plastic-free fruit protection — building a greener future for global agriculture." },
      { property: "og:title", content: "Sustainability — ALTA FOODS" },
      { property: "og:description", content: "Biodegradable, plastic-free fruit protection — building a greener future for global agriculture." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Our planet pledge" title="Sustainable farming starts here." subtitle="Reducing plastic, chemicals, and carbon — one orchard at a time." />
      <Sustainability />
    </>
  );
}
