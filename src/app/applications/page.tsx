import { PageHeader } from "@/components/site/PageHeader";
import { Applications } from "@/components/site/Applications";
import { CaseStudies } from "@/components/site/CaseStudies";

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Applications"
        title="Solutions for every orchard."
        subtitle="From small family farms to massive commercial orchards, our bags are designed to protect yields of all sizes."
        backgroundImage="/images/hero/applications.png"
      />
      <Applications />
      <CaseStudies />
    </>
  );
}
