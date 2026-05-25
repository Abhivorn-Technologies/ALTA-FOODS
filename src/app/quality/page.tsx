import { PageHeader } from "@/components/site/PageHeader";
import { QualityContent } from "@/components/site/QualityContent";
import { Testimonials } from "@/components/site/Testimonials";

export default function Page() {
  return (
    <>
      <PageHeader 
        eyebrow="Quality Assurance" 
        title="Uncompromising Standards." 
        subtitle="Discover how we maintain extreme precision and defect-free protection from manufacturing to harvest." 
        backgroundImage="/images/hero/quality.png"
      />
      <QualityContent />
      <Testimonials />
    </>
  );
}
