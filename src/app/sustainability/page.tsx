
import { PageHeader } from "@/components/site/PageHeader";
import { Sustainability } from "@/components/site/Sustainability";
import { Certifications } from "@/components/site/Certifications";



export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Our planet pledge" title="Sustainable farming starts here." subtitle="Reducing plastic, chemicals, and carbon — one orchard at a time." />
      <Sustainability />
      <Certifications />
    </>
  );
}
