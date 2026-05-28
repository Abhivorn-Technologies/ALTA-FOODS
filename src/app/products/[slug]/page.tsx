"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const PageHeader = dynamic(
  () => import("@/components/site/PageHeader").then((mod) => mod.PageHeader),
  { ssr: false },
);

const ProductDetails = dynamic(
  () => import("@/components/site/ProductDetails").then((mod) => mod.ProductDetails),
  { ssr: false },
);

const Process = dynamic(() => import("@/components/site/Process").then((mod) => mod.Process), {
  ssr: false,
});

interface BackendProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  second_image_url: string | null;
  features: string[];
  benefits: string;
  sizes: string;
  material: string;
  color: string;
  style: string;
  gsm: string;
}

// Fallback high-quality advantages & descriptions for the 5 initial fruits
const initialFruitsData: Record<
  string,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    overview: string;
    advantages: string[];
    stageImage: string;
    resultImage: string;
  }
> = {
  mango: {
    eyebrow: "Mango Protection",
    title: "Premium Mango Protection Bags",
    subtitle:
      "Ensure blemish-free, high-yield mango harvests with our specialized double-layer paper bags.",
    overview:
      "ALTA FOODS offers premium mango protection bags with effective & timely delivery. Our mango protection bag is a specialized double-layer bag where the outer brown paper is 50-55 GSM and the inner black paper is 30-35 GSM. The standard size of the bag is 18cm X 30cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Mango Protection Bag helps maintain a constant temperature inside, which helps the fruit grow faster and healthier.",
    advantages: [
      "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
      "Fruits can breathe inside the bag & the bag paper is waterproof against rain.",
      "The bag avoids fruits being hurt by strong sunshine, germs, birds & flies.",
      "Helps fruits get uniform colour, increase sugar, promote maturity and weight.",
      "Avoids wastage caused by various unpredictable climatic conditions.",
      "Maintains a constant temperature inside which helps the fruit grow faster.",
      "Enables growing the fruit in a 100% organic way without pesticides.",
      "Bags can be reused in future seasons if handled with proper care.",
    ],
    stageImage: "/images/gallery/mango_bagging.png",
    resultImage: "/images/hero/mango.png",
  },
  apple: {
    eyebrow: "Apple Protection",
    title: "Premium Apple Protection Bags",
    subtitle: "Ensure blemish-free, high-yield apple harvests with our specialized paper bags.",
    overview:
      "ALTA FOODS offers premium apple protection bags with effective & timely delivery. Our apple protection bag is a specialized single or double-layer bag depending on your climatic needs. The standard size is optimized for apples at 15cm X 22cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Apple Protection Bag helps maintain a constant temperature inside, which helps the fruit grow faster, crispier, and healthier.",
    advantages: [
      "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
      "Fruits can breathe inside the bag & the bag paper is waterproof against rain.",
      "The bag avoids fruits being hurt by strong sunshine, germs, birds & flies.",
      "Helps apples get uniform colour, increase sugar, promote maturity and weight.",
      "Avoids wastage caused by various unpredictable climatic conditions.",
      "Maintains a constant temperature inside which helps the apple grow faster.",
      "Enables growing the fruit in a 100% organic way without pesticides.",
      "Bags can be reused in future seasons if handled with proper care.",
    ],
    stageImage: "/images/gallery/apple_bagging.png",
    resultImage: "/images/hero/apple.png",
  },
  banana: {
    eyebrow: "Banana Protection",
    title: "Premium Banana Protection Bags",
    subtitle: "Ensure flawless, high-yield banana harvests with our specialized bunch covers.",
    overview:
      "ALTA FOODS offers premium banana bunch protection bags engineered for large-scale plantations. Our banana covers are made from specialized breathable, water-resistant paper with a standard GSM of 35-45, and size dimensions of 85cm x 150cm to cover entire bunches.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. Using the ALTA FOODS Banana Protection Bag helps maintain a consistent micro-climate around the bunch, ensuring the bananas grow faster, heavier, and completely blemish-free.",
    advantages: [
      "Protects banana bunches from harsh sunlight, preventing sunburn and discoloration.",
      "Breathable material prevents moisture buildup and fungal diseases.",
      "Shields bananas from birds, bats, and harmful insects during the growth phase.",
      "Helps bananas achieve a uniform, premium skin colour.",
      "Accelerates the maturity process by maintaining a micro-climate around the bunch.",
      "Significantly reduces agricultural wastage caused by frost and wind.",
      "Enables 100% organic farming by eliminating the need for pesticide sprays.",
      "Highly durable and reusable for multiple harvesting cycles.",
    ],
    stageImage: "/images/gallery/banana_bagging.png",
    resultImage: "/images/hero/banana.png",
  },
  guava: {
    eyebrow: "Guava Protection",
    title: "Premium Guava Protection Bags",
    subtitle:
      "Protect against fruit flies and ensure blemish-free guava harvests with our specialized paper bags.",
    overview:
      "ALTA FOODS offers premium guava protection bags specifically engineered to defend against fruit flies. Our guava protection bag is a specialized paper bag with a GSM of 35-45. The standard size is optimized for guavas at 16cm X 22cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Guava Protection Bag helps maintain a constant temperature inside, which helps the fruit grow faster, sweeter, and 100% blemish-free.",
    advantages: [
      "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
      "Protects guava from fruit flies and borers, which are the primary pest threats.",
      "The bag avoids fruits being hurt by strong sunshine, germs, and birds.",
      "Helps guavas get uniform colour, increase sugar content, and promote maturity.",
      "Avoids wastage caused by various unpredictable climatic conditions.",
      "Maintains a constant temperature inside which helps the guava grow faster.",
      "Enables growing the fruit in a 100% organic way without pesticide sprays.",
      "Bags can be reused in future seasons if handled with proper care.",
    ],
    stageImage: "/images/gallery/guava_bagging.png",
    resultImage: "/images/hero/guava.png",
  },
  pomegranate: {
    eyebrow: "Pomegranate Protection",
    title: "Premium Pomegranate Protection Bags",
    subtitle:
      "Prevent fruit cracking and ensure blemish-free pomegranate harvests with our specialized bags.",
    overview:
      "ALTA FOODS offers premium pomegranate protection bags with effective & timely delivery. Our pomegranate protection bag is a specialized paper bag designed to prevent the common issue of fruit cracking. The standard size is optimized for pomegranates at 20cm X 25cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind. Using the ALTA FOODS Pomegranate Protection Bag protects the fruit from borers and helps maintain a constant temperature inside, resulting in healthier, blemish-free fruit.",
    advantages: [
      "The bag is sealed with iron wire, which strongly resists wind and keeps the bag secure.",
      "Prevents fruit cracking by regulating moisture and temperature fluctuations.",
      "The bag avoids fruits being hurt by strong sunshine, germs, birds & fruit borers.",
      "Helps pomegranates develop a deep, uniform red colour and increases aril juiciness.",
      "Avoids wastage caused by various unpredictable climatic conditions.",
      "Maintains a constant temperature inside which helps the pomegranate grow faster.",
      "Enables growing the fruit in a 100% organic way without chemical sprays.",
      "Bags can be reused in future seasons if handled with proper care.",
    ],
    stageImage: "/images/gallery/pomegranate_bagging.png",
    resultImage: "/images/hero/pomegranate.png",
  },
};

const defaultAdvantages = [
  "The bag is sealed with secure ties, which strongly resists wind and keeps the bag secure.",
  "Fruits can breathe inside the bag & the bag paper is waterproof against rain.",
  "The bag avoids fruits being hurt by strong sunshine, germs, birds & insects.",
  "Helps fruits get uniform colour, increase sugar, promote maturity and weight.",
  "Avoids wastage caused by various unpredictable climatic conditions.",
  "Maintains a constant temperature inside which helps the crop grow faster.",
  "Enables growing the fruit in a 100% organic way without pesticide sprays.",
  "Bags can be reused in future seasons if handled with proper care.",
];

const parseBenefits = (benefitsStr: string | undefined): string[] => {
  if (!benefitsStr) return [];
  const trimmed = benefitsStr.trim();
  if (!trimmed || trimmed === "[]" || trimmed === "null") return [];

  // Try parsing as JSON array first (in case it is stored as serialized JSON)
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item).trim()).filter(Boolean);
      }
    } catch (e) {
      // Fallback
    }
  }

  // Split by newline if it contains newlines
  if (trimmed.includes("\n")) {
    return trimmed
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  // Split by comma if no newlines
  if (trimmed.includes(",")) {
    return trimmed
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Single benefit
  return [trimmed];
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<BackendProduct | null>(null);
  const [loading, setLoading] = useState(true);

  // Normalize slug to match hardcoded keys if it contains the fruit keyword
  let fruitKey = "";
  if (slug) {
    const norm = slug.toLowerCase();
    if (norm.includes("mango")) fruitKey = "mango";
    else if (norm.includes("apple")) fruitKey = "apple";
    else if (norm.includes("banana")) fruitKey = "banana";
    else if (norm.includes("guava")) fruitKey = "guava";
    else if (norm.includes("pomegranate")) fruitKey = "pomegranate";
  }

  useEffect(() => {
    if (!slug) return;

    // Fetch product details from Django backend
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    fetch(`${apiUrl}/api/products/${slug}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found in backend database");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn("Backend fetch failed, checking fallbacks:", error.message || error);

        // If it's one of our initial 5 fruits, we can allow rendering even without backend
        if (fruitKey) {
          setLoading(false);
        } else {
          // Redirect to catalog if product is not found and not a fallback fruit
          router.push("/products");
        }
      });
  }, [slug, fruitKey, router]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-background text-muted-foreground">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="font-semibold">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Determine fallback data if available
  const initialData = fruitKey ? initialFruitsData[fruitKey] : null;

  // Gather rendering values (using backend data, with fallback to premium pre-fills)
  const name = product?.name || (initialData ? initialData.title : "Premium Fruit Protection Bags");
  const eyebrow = initialData ? initialData.eyebrow : `${name} Protection`;
  const title = initialData ? initialData.title : name;
  const subtitle = initialData
    ? initialData.subtitle
    : `Ensure flawless, high-yield harvests with our specialized protective bags.`;

  const overview =
    product?.description ||
    (initialData
      ? initialData.overview
      : `ALTA FOODS offers premium protection bags specifically engineered for large-scale ${name} plantations. Our protection covers are made from specialized breathable, water-resistant paper with high durability.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. Using the ALTA FOODS Protection Bag helps maintain a constant temperature inside, ensuring the crop grows faster, heavier, and completely blemish-free.`);

  const specs = [
    { label: "Color", value: product?.color || "Brown / White" },
    { label: "Material", value: product?.material || "Eco-friendly Paper" },
    { label: "Speciality", value: initialData ? initialData.eyebrow : `${name} Protection` },
    { label: "Style", value: product?.style || "With Wire / Open Ended" },
    { label: "GSM", value: product?.gsm || "35-55" },
    { label: "Size", value: product?.sizes || "Standard" },
  ];

  // Parse backend benefits list if populated
  const backendBenefits = parseBenefits(product?.benefits);

  const advantages =
    backendBenefits.length > 0
      ? backendBenefits
      : product?.features && product.features.length > 0
        ? product.features
        : initialData
          ? initialData.advantages
          : defaultAdvantages;

  const images = {
    stage:
      product?.second_image_url ||
      (initialData ? initialData.stageImage : "/images/hero/gallery.png"),
    result:
      product?.image_url || (initialData ? initialData.resultImage : "/images/hero/quality.png"),
  };

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        backgroundImage={images.result}
      />
      <ProductDetails overview={overview} specs={specs} advantages={advantages} images={images} />
      <Process />
    </>
  );
}
