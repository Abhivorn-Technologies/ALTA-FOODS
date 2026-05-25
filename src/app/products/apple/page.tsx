import { PageHeader } from "@/components/site/PageHeader";
import { ProductDetails } from "@/components/site/ProductDetails";
import { Process } from "@/components/site/Process";

export default function Page() {
  const specs = [
    { label: "Color", value: "Brown / White" },
    { label: "Material", value: "Eco-friendly Paper" },
    { label: "Speciality", value: "Apple Protection Bags" },
    { label: "Style", value: "With Wire / Without Wire" },
    { label: "GSM", value: "40-45" },
    { label: "Size", value: "15cm x 22cm" },
  ];

  const advantages = [
    "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
    "Fruits can breathe inside the bag & the bag paper is waterproof against rain.",
    "The bag avoids fruits being hurt by strong sunshine, germs, birds & flies.",
    "Helps apples get uniform colour, increase sugar, promote maturity and weight.",
    "Avoids wastage caused by various unpredictable climatic conditions.",
    "Maintains a constant temperature inside which helps the apple grow faster.",
    "Enables growing the fruit in a 100% organic way without pesticides.",
    "Bags can be reused in future seasons if handled with proper care."
  ];

  const overview = "ALTA FOODS offers premium apple protection bags with effective & timely delivery. Our apple protection bag is a specialized single or double-layer bag depending on your climatic needs. The standard size is optimized for apples at 15cm X 22cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Apple Protection Bag helps maintain a constant temperature inside, which helps the fruit grow faster, crispier, and healthier.";

  const images = {
    stage: "/images/hero/gallery.png", // Placeholder until generation quota resets
    result: "/images/hero/apple.png" // Reusing hero image for now
  };

  return (
    <>
      <PageHeader 
        eyebrow="Apple Protection" 
        title="Premium Apple Protection Bags" 
        subtitle="Ensure blemish-free, high-yield apple harvests with our specialized paper bags." 
        backgroundImage="/images/hero/apple.png"
      />
      <ProductDetails overview={overview} specs={specs} advantages={advantages} images={images} />
      <Process />
    </>
  );
}
