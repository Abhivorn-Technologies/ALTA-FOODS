
import { PageHeader } from "@/components/site/PageHeader";
import { Gallery } from "@/components/site/Gallery";



export default function Page() {
  return (
    <>
      <PageHeader 
        eyebrow="Gallery" 
        title="See protection in action." 
        subtitle="Explore real-world applications of our products in orchards around the world." 
        backgroundImage="/images/hero/gallery.png"
      />
      <Gallery />
    </>
  );
}
