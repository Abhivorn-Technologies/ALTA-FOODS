import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ALTA FOODS" },
      { name: "description", content: "Talk to ALTA FOODS about bulk orders, custom sizes, and exports of paper fruit cover bags." },
      { property: "og:title", content: "Contact Us — ALTA FOODS" },
      { property: "og:description", content: "Talk to ALTA FOODS about bulk orders, custom sizes, and exports of paper fruit cover bags." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Say hello" title="Let'\''s grow better fruit together." subtitle="Tell us about your orchard, target sizes, and quantities — we respond within one business day." />
      <Contact />
    </>
  );
}
