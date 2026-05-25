import { PageHeader } from "@/components/site/PageHeader";
import { ProductDetails } from "@/components/site/ProductDetails";
import { Process } from "@/components/site/Process";

export default function Page() {
  const specs = [
    { label: "Color", value: "Brown & Black" },
    { label: "Material", value: "Eco-friendly Paper" },
    { label: "Speciality", value: "Mango Protection Bags" },
    { label: "Style", value: "With Wire / Without Wire" },
    { label: "GSM", value: "Outer 50-55, Inner 30-35" },
    { label: "Size", value: "18cm x 30cm" },
  ];

  const advantages = [
    "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
    "Fruits can breathe inside the bag & the bag paper is waterproof against rain.",
    "The bag avoids fruits being hurt by strong sunshine, germs, birds & flies.",
    "Helps fruits get uniform colour, increase sugar, promote maturity and weight.",
    "Avoids wastage caused by various unpredictable climatic conditions.",
    "Maintains a constant temperature inside which helps the fruit grow faster.",
    "Enables growing the fruit in a 100% organic way without pesticides.",
    "Bags can be reused in future seasons if handled with proper care."
  ];

  const overview = "ALTA FOODS offers premium mango protection bags with effective & timely delivery. Our mango protection bag is a specialized double-layer bag where the outer brown paper is 50-55 GSM and the inner black paper is 30-35 GSM. The standard size of the bag is 18cm X 30cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Mango Protection Bag helps maintain a constant temperature inside, which helps the fruit grow faster and healthier.";

  const images = {
    stage: "/images/gallery/mango_bagging.png",
    result: "/images/hero/mango.png" // Reusing hero image for now
  };

  return (
    <>
      <PageHeader 
        eyebrow="Mango Protection" 
        title="Premium Mango Protection Bags" 
        subtitle="Ensure blemish-free, high-yield mango harvests with our specialized double-layer paper bags." 
        backgroundImage="/images/hero/mango.png"
      />
      <ProductDetails overview={overview} specs={specs} advantages={advantages} images={images} />
      <Process />
    </>
  );
}
