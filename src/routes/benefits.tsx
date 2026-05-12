import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Benefits } from "@/components/site/Benefits";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits — ALTA FOODS" },
      { name: "description", content: "Discover how ALTA FOODS bags improve fruit quality, reduce pesticide use, and increase farm profitability." },
      { property: "og:title", content: "Benefits — ALTA FOODS" },
      { property: "og:description", content: "Discover how ALTA FOODS bags improve fruit quality, reduce pesticide use, and increase farm profitability." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Why paper, why us" title="Eight reasons paper beats chemicals." subtitle="From fewer pesticides to premium pricing — see what our growers gain." />
      <Benefits />
    </>
  );
}
