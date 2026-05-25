
import { PageHeader } from "@/components/site/PageHeader";
import { Sustainability } from "@/components/site/Sustainability";
import { Certifications } from "@/components/site/Certifications";



export default function Page() {
  return (
    <>
      <PageHeader 
        eyebrow="Sustainability" 
        title="Protecting the future." 
        subtitle="100% biodegradable, ethically sourced, and designed to leave no trace on our planet." 
        backgroundImage="/images/hero/sustainability.png"
      />
      <Sustainability />
      <Certifications />
    </>
  );
}
