import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ALTA FOODS" },
      { name: "description", content: "Photos from our farms, factories, and partner orchards using ALTA FOODS paper fruit cover bags." },
      { property: "og:title", content: "Gallery — ALTA FOODS" },
      { property: "og:description", content: "Photos from our farms, factories, and partner orchards using ALTA FOODS paper fruit cover bags." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="In the field" title="From our farms to our factory." subtitle="A look behind the scenes of premium fruit protection." />
      <Gallery />
    </>
  );
}
