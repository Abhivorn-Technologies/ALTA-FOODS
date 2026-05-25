import { PageHeader } from "@/components/site/PageHeader";
import { ProductDetails } from "@/components/site/ProductDetails";
import { Process } from "@/components/site/Process";

export default function Page() {
  const specs = [
    { label: "Color", value: "Brown / White" },
    { label: "Material", value: "Eco-friendly Paper" },
    { label: "Speciality", value: "Pomegranate Protection Bags" },
    { label: "Style", value: "With Wire / Without Wire" },
    { label: "GSM", value: "40-50" },
    { label: "Size", value: "20cm x 25cm" },
  ];

  const advantages = [
    "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
    "Prevents fruit cracking by regulating moisture and temperature fluctuations.",
    "The bag avoids fruits being hurt by strong sunshine, germs, birds & fruit borers.",
    "Helps pomegranates develop a deep, uniform red colour and increases aril juiciness.",
    "Avoids wastage caused by various unpredictable climatic conditions.",
    "Maintains a constant temperature inside which helps the pomegranate grow faster.",
    "Enables growing the fruit in a 100% organic way without chemical sprays.",
    "Bags can be reused in future seasons if handled with proper care."
  ];

  const overview = "ALTA FOODS offers premium pomegranate protection bags with effective & timely delivery. Our pomegranate protection bag is a specialized paper bag designed to prevent the common issue of fruit cracking. The standard size is optimized for pomegranates at 20cm X 25cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Pomegranate Protection Bag protects the fruit from borers and helps maintain a constant temperature inside, resulting in healthier, blemish-free fruit.";

  const images = {
    stage: "/images/hero/gallery.png", // Placeholder until generation quota resets
    result: "/images/hero/pomegranate.png" // Reusing hero image for now
  };

  return (
    <>
      <PageHeader 
        eyebrow="Pomegranate Protection" 
        title="Premium Pomegranate Protection Bags" 
        subtitle="Prevent fruit cracking and ensure blemish-free pomegranate harvests with our specialized bags." 
        backgroundImage="/images/hero/pomegranate.png"
      />
      <ProductDetails overview={overview} specs={specs} advantages={advantages} images={images} />
      <Process />
    </>
  );
}
