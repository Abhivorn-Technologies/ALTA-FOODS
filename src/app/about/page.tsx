import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { ProductFeatures } from "@/components/site/ProductFeatures";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="A team rooted in soil and science."
        subtitle="Committed to protecting every fruit naturally with eco-conscious packaging built for modern agriculture."
        backgroundImage="/images/hero/about.png"
      />
      <About />
      <ProductFeatures />
      <WhyChooseUs />
    </>
  );
}
