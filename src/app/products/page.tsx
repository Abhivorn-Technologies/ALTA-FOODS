
import { PageHeader } from "@/components/site/PageHeader";
import { Products } from "@/components/site/Products";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";



export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Our catalogue" title="Premium fruit protection, crafted in paper." subtitle="Engineered for every fruit, every climate, and every farm size." />
      <Products />
      <Process />
      <Testimonials />
    </>
  );
}
