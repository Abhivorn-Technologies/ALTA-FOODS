import { PageHeader } from "@/components/site/PageHeader";
import { ProductDetails } from "@/components/site/ProductDetails";
import { Process } from "@/components/site/Process";

export default function Page() {
  const specs = [
    { label: "Color", value: "Brown / White" },
    { label: "Material", value: "Eco-friendly Paper" },
    { label: "Speciality", value: "Guava Protection Bags" },
    { label: "Style", value: "With Wire / Without Wire" },
    { label: "GSM", value: "35-45" },
    { label: "Size", value: "16cm x 22cm" },
  ];

  const advantages = [
    "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
    "Protects guava from fruit flies and borers, which are the primary pest threats.",
    "The bag avoids fruits being hurt by strong sunshine, germs, and birds.",
    "Helps guavas get uniform colour, increase sugar content, and promote maturity.",
    "Avoids wastage caused by various unpredictable climatic conditions.",
    "Maintains a constant temperature inside which helps the guava grow faster.",
    "Enables growing the fruit in a 100% organic way without pesticide sprays.",
    "Bags can be reused in future seasons if handled with proper care."
  ];

  const overview = "ALTA FOODS offers premium guava protection bags specifically engineered to defend against fruit flies. Our guava protection bag is a specialized paper bag with a GSM of 35-45. The standard size is optimized for guavas at 16cm X 22cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Guava Protection Bag helps maintain a constant temperature inside, which helps the fruit grow faster, sweeter, and 100% blemish-free.";

  const images = {
    stage: "/images/hero/gallery.png", // Placeholder until generation quota resets
    result: "/images/hero/guava.png" // Reusing hero image for now
  };

  return (
    <>
      <PageHeader 
        eyebrow="Guava Protection" 
        title="Premium Guava Protection Bags" 
        subtitle="Protect against fruit flies and ensure blemish-free guava harvests with our specialized paper bags." 
        backgroundImage="/images/hero/guava.png"
      />
      <ProductDetails overview={overview} specs={specs} advantages={advantages} images={images} />
      <Process />
    </>
  );
}
