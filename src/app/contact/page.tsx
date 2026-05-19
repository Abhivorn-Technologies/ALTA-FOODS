
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";



export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Say hello" title="Let's grow better fruit together." subtitle="Tell us about your orchard, target sizes, and quantities — we respond within one business day." />
      <Contact />
    </>
  );
}
