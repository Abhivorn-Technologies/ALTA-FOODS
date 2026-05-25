import { PageHeader } from "@/components/site/PageHeader";
import { ProductDetails } from "@/components/site/ProductDetails";
import { Process } from "@/components/site/Process";

export default function Page() {
  const specs = [
    { label: "Color", value: "Brown / White" },
    { label: "Material", value: "Eco-friendly Paper" },
    { label: "Speciality", value: "Banana Protection Bags" },
    { label: "Style", value: "Open Ended / With Tie" },
    { label: "GSM", value: "35-45" },
    { label: "Size", value: "85cm x 150cm (Customizable)" },
  ];

  const advantages = [
    "Protects banana bunches from harsh sunlight, preventing sunburn and discoloration.",
    "Breathable material prevents moisture buildup and fungal diseases.",
    "Shields bananas from birds, bats, and harmful insects during the growth phase.",
    "Helps bananas achieve a uniform, premium skin colour.",
    "Accelerates the maturity process by maintaining a micro-climate around the bunch.",
    "Significantly reduces agricultural wastage caused by frost and wind.",
    "Enables 100% organic farming by eliminating the need for pesticide sprays.",
    "Highly durable and reusable for multiple harvesting cycles."
  ];

  const overview = "ALTA FOODS offers premium banana bunch protection bags engineered for large-scale plantations. Our banana covers are made from specialized breathable, water-resistant paper with a standard GSM of 35-45, and size dimensions of 85cm x 150cm to cover entire bunches.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. Using the ALTA FOODS Banana Protection Bag helps maintain a consistent micro-climate around the bunch, ensuring the bananas grow faster, heavier, and completely blemish-free.";

  const images = {
    stage: "/images/hero/gallery.png", // Placeholder until generation quota resets
    result: "/images/hero/banana.png" // Reusing hero image for now
  };

  return (
    <>
      <PageHeader 
        eyebrow="Banana Protection" 
        title="Premium Banana Protection Bags" 
        subtitle="Ensure flawless, high-yield banana harvests with our specialized bunch covers." 
        backgroundImage="/images/hero/banana.png"
      />
      <ProductDetails overview={overview} specs={specs} advantages={advantages} images={images} />
      <Process />
    </>
  );
}
