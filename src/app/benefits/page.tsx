
import { PageHeader } from "@/components/site/PageHeader";
import { Benefits } from "@/components/site/Benefits";
import { Comparison } from "@/components/site/Comparison";



export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Why paper, why us" title="Eight reasons paper beats chemicals." subtitle="From fewer pesticides to premium pricing — see what our growers gain." />
      <Benefits />
      <Comparison />
    </>
  );
}
