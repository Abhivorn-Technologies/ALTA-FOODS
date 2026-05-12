import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Applications } from "@/components/site/Applications";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — ALTA FOODS" },
      { name: "description", content: "Mango farms, organic farming, commercial gardens, exporters and sustainable agriculture programs." },
      { property: "og:title", content: "Applications — ALTA FOODS" },
      { property: "og:description", content: "Mango farms, organic farming, commercial gardens, exporters and sustainable agriculture programs." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries we serve" title="From small orchards to global exports." subtitle="Trusted across diverse farming scales and crops worldwide." />
      <Applications />
    </>
  );
}
