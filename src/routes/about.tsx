import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Values } from "@/components/site/Values";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ALTA FOODS" },
      { name: "description", content: "Learn about ALTA FOODS — manufacturers of biodegradable paper fruit cover bags for sustainable agriculture." },
      { property: "og:title", content: "About Us — ALTA FOODS" },
      { property: "og:description", content: "Learn about ALTA FOODS — manufacturers of biodegradable paper fruit cover bags for sustainable agriculture." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Who we are" title="A team rooted in soil and science." subtitle="Committed to protecting every fruit naturally with eco-conscious packaging built for modern agriculture." />
      <About />
      <Stats />
      <Values />
    </>
  );
}
