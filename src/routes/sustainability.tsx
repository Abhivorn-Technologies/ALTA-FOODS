import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Sustainability } from "@/components/site/Sustainability";
import { Certifications } from "@/components/site/Certifications";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — ALTA FOODS" },
      { name: "description", content: "Sustainable farming starts here. Reducing plastic, chemicals, and carbon — one orchard at a time." },
      { property: "og:title", content: "Sustainability — ALTA FOODS" },
      { property: "og:description", content: "Sustainable farming starts here. Reducing plastic, chemicals, and carbon — one orchard at a time." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Our planet pledge" title="Sustainable farming starts here." subtitle="Reducing plastic, chemicals, and carbon — one orchard at a time." />
      <Sustainability />
      <Certifications />
    </>
  );
}
