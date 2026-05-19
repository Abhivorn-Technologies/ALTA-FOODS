
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Values } from "@/components/site/Values";



export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Who we are" title="A team rooted in soil and science." subtitle="Committed to protecting every fruit naturally with eco-conscious packaging built for modern agriculture." />
      <About />
      <Stats />
      <Values />
    </>
  );
}
