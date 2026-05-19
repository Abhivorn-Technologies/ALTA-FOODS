
import { PageHeader } from "@/components/site/PageHeader";
import { Applications } from "@/components/site/Applications";
import { CaseStudies } from "@/components/site/CaseStudies";



export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries we serve" title="From small orchards to global exports." subtitle="Trusted across diverse farming scales and crops worldwide." />
      <Applications />
      <CaseStudies />
    </>
  );
}
