import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Applications } from "@/components/site/Applications";
import { CaseStudies } from "@/components/site/CaseStudies";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — ALTA FOODS" },
      { name: "description", content: "Trusted across diverse farming scales and crops worldwide. From small orchards to global exports." },
      { property: "og:title", content: "Applications — ALTA FOODS" },
      { property: "og:description", content: "Trusted across diverse farming scales and crops worldwide. From small orchards to global exports." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries we serve" title="From small orchards to global exports." subtitle="Trusted across diverse farming scales and crops worldwide." />
      <Applications />
      <CaseStudies />
    </>
  );
}
