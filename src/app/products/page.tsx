"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ChevronRight, CheckCircle2, Settings, ArrowLeft, Leaf, Ruler, ChevronLeft, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

const PageHeader = dynamic(
  () => import("@/components/site/PageHeader").then((mod) => mod.PageHeader),
  { ssr: false },
);

const Process = dynamic(() => import("@/components/site/Process").then((mod) => mod.Process), {
  ssr: false,
});

const Testimonials = dynamic(
  () => import("@/components/site/Testimonials").then((mod) => mod.Testimonials),
  { ssr: false },
);

/* ─── Types ─── */
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

interface MenuItem {
  name: string;
  slug: string;
}



/* ─── Fallback Data ─── */
const initialFruitsData: Record<string, {
  overview: string;
  advantages: string[];
  stageImage: string;
  resultImage: string;
}> = {
  mango: {
    overview: "ALTA FOODS offers premium mango protection bags with effective & timely delivery. Our mango protection bag is a specialized double-layer bag where the outer brown paper is 50-55 GSM and the inner black paper is 30-35 GSM. The standard size of the bag is 18cm X 30cm.\n\nThis bag is fully Waterproof, Moisture-proof, Breathable, and completely Bio-Degradable. It is sealed with integrated iron wire, which strongly resists wind.",
    advantages: [
      "The bag is sealed with iron wire, which strongly resists wind.",
      "Fruits can breathe inside & the paper is waterproof against rain.",
      "Avoids fruits being hurt by sunshine, germs, birds & flies.",
      "Helps fruits get uniform colour, increase sugar & promote maturity.",
      "Avoids wastage caused by unpredictable climatic conditions.",
      "Maintains a constant temperature for faster growth.",
      "Enables 100% organic farming without pesticides.",
      "Bags can be reused in future seasons.",
    ],
    stageImage: "/images/gallery/mango_bagging.png",
    resultImage: "/images/hero/mango.png",
  },
  apple: {
    overview: "ALTA FOODS offers premium apple protection bags optimized at 15cm X 22cm. Fully Waterproof, Moisture-proof, Breathable, and Bio-Degradable with integrated iron wire sealing.",
    advantages: [
      "Sealed with iron wire for wind resistance.",
      "Waterproof & breathable paper.",
      "Protects from sunshine, germs, birds & flies.",
      "Helps apples get uniform colour and crispness.",
      "Reduces climatic wastage.",
      "Maintains constant temperature for faster growth.",
      "Enables 100% organic farming.",
      "Reusable across seasons.",
    ],
    stageImage: "/images/gallery/apple_bagging.png",
    resultImage: "/images/hero/apple.png",
  },
  banana: {
    overview: "ALTA FOODS banana bunch covers are engineered for large-scale plantations. Made from specialized breathable, water-resistant paper (35-45 GSM) sized 85cm x 150cm to cover entire bunches.",
    advantages: [
      "Protects bunches from sunburn and discoloration.",
      "Prevents moisture buildup and fungal diseases.",
      "Shields from birds, bats, and harmful insects.",
      "Achieves uniform, premium skin colour.",
      "Accelerates maturity with micro-climate control.",
      "Reduces frost and wind wastage.",
      "Enables 100% organic farming.",
      "Durable and reusable for multiple cycles.",
    ],
    stageImage: "/images/gallery/banana_bagging.png",
    resultImage: "/images/hero/banana.png",
  },
  guava: {
    overview: "ALTA FOODS guava protection bags are engineered to defend against fruit flies. Made with 35-45 GSM paper, sized 16cm X 22cm. Fully Waterproof, Breathable, and Bio-Degradable.",
    advantages: [
      "Sealed with iron wire for wind resistance.",
      "Protects from fruit flies and borers.",
      "Guards against sunshine, germs, and birds.",
      "Helps guavas get uniform colour and sweetness.",
      "Reduces climatic wastage.",
      "Constant temperature for faster growth.",
      "Enables 100% organic farming.",
      "Reusable across seasons.",
    ],
    stageImage: "/images/gallery/guava_bagging.png",
    resultImage: "/images/hero/guava.png",
  },
  pomegranate: {
    overview: "ALTA FOODS pomegranate bags prevent fruit cracking. Sized 20cm X 25cm. Fully Waterproof, Moisture-proof, Breathable, and Bio-Degradable with iron wire sealing.",
    advantages: [
      "Sealed with iron wire for wind resistance.",
      "Prevents fruit cracking from temperature changes.",
      "Protects from sunshine, germs, birds & borers.",
      "Develops deep, uniform red colour.",
      "Reduces climatic wastage.",
      "Constant temperature for faster growth.",
      "Enables 100% organic farming.",
      "Reusable across seasons.",
    ],
    stageImage: "/images/gallery/pomegranate_bagging.png",
    resultImage: "/images/hero/pomegranate.png",
  },
};

const defaultAdvantages = [
  "Sealed with secure ties for wind resistance.",
  "Waterproof & breathable paper.",
  "Protects from sunshine, germs, birds & insects.",
  "Helps fruits get uniform colour & maturity.",
  "Reduces climatic wastage.",
  "Maintains constant temperature for growth.",
  "Enables 100% organic farming.",
  "Reusable across seasons.",
];

/* ─── Parse benefits helper ─── */
const parseBenefits = (str: string | undefined): string[] => {
  if (!str) return [];
  const t = str.trim();
  if (!t || t === "[]" || t === "null") return [];
  if (t.startsWith("[") && t.endsWith("]")) {
    try { const p = JSON.parse(t); if (Array.isArray(p)) return p.map(String).filter(Boolean); } catch {}
  }
  if (t.includes("\n")) return t.split("\n").map(s => s.trim()).filter(Boolean);
  if (t.includes(",")) return t.split(",").map(s => s.trim()).filter(Boolean);
  return [t];
};

/* ─── Product Detail Panel (right side) ─── */
function ProductDetailPanel({ slug, onBack }: { slug: string; onBack: () => void }) {
  const [product, setProduct] = useState<BackendProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageIdx, setImageIdx] = useState(0);

  const norm = slug.toLowerCase();
  let fruitKey = "";
  if (norm.includes("mango")) fruitKey = "mango";
  else if (norm.includes("apple")) fruitKey = "apple";
  else if (norm.includes("banana")) fruitKey = "banana";
  else if (norm.includes("guava")) fruitKey = "guava";
  else if (norm.includes("pomegranate")) fruitKey = "pomegranate";

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    setProduct(null);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    fetch(`${apiUrl}/api/products/${slug}/`)
      .then((res) => { if (!res.ok) throw new Error("Not found"); return res.json(); })
      .then((data) => { setProduct(data); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, [slug]);

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col gap-8">
        <div className="h-4 w-32 bg-muted rounded-full mb-6"></div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="h-10 w-3/4 bg-muted rounded-xl mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-5/6 bg-muted rounded"></div>
              <div className="h-4 w-4/6 bg-muted rounded"></div>
            </div>
          </div>
          <div className="rounded-3xl aspect-[4/3] bg-muted"></div>
        </div>
      </div>
    );
  }

  const fallback = fruitKey ? initialFruitsData[fruitKey] : null;
  const name = product?.name || slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const overview = product?.description || fallback?.overview || "Premium protection bags engineered for this fruit.";
  const backendBenefits = parseBenefits(product?.benefits);
  const advantages = backendBenefits.length > 0
    ? backendBenefits
    : product?.features?.length ? product.features
    : fallback?.advantages || defaultAdvantages;

  const specs = [
    { label: "Color", value: product?.color || "Brown / White" },
    { label: "Material", value: product?.material || "Eco-friendly Paper" },
    { label: "Style", value: product?.style || "With Wire / Open Ended" },
    { label: "GSM", value: product?.gsm || "35-55" },
    { label: "Size", value: product?.sizes || "Standard" },
  ];

  const stageImg = product?.second_image_url || fallback?.stageImage || "/images/hero/gallery.png";
  const resultImg = product?.image_url || fallback?.resultImage || "/images/hero/quality.png";

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to all products
      </button>

      {/* Product Title & Image */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight text-foreground mt-1">
            {name}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
            {overview}
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3] bg-muted relative group">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={[resultImg, stageImg][imageIdx]}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </AnimatePresence>
          
          {/* Carousel Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => setImageIdx(i => (i === 0 ? 1 : 0))}
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center shadow-lg hover:bg-background hover:scale-110 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setImageIdx(i => (i === 0 ? 1 : 0))}
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center shadow-lg hover:bg-background hover:scale-110 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {[resultImg, stageImg].map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 rounded-full transition-all duration-300 ${imageIdx === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="glass rounded-3xl p-6 md:p-8 border border-border shadow-soft bg-background/50 mb-12">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Settings className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Specifications</h3>
            <p className="text-xs text-muted-foreground">Technical details</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
          {specs.map((spec, idx) => (
            <div key={idx}>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</div>
              <div className="font-semibold text-foreground text-sm">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold font-display mb-6 text-foreground">
          Key <span className="text-gradient">Benefits</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="glass p-5 rounded-2xl border border-border shadow-soft flex items-start gap-3 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
            >
              <CheckCircle2 className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
              <p className="text-foreground/90 text-sm leading-relaxed">{adv}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Social Media */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <h3 className="text-xl md:text-2xl font-bold font-display mb-6 text-foreground text-center">
          Follow Our <span className="text-gradient">Social Channels</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              name: "Instagram",
              icon: Instagram,
              color: "hover:bg-pink-600 hover:border-pink-600",
            },
            { name: "YouTube", icon: Youtube, color: "hover:bg-red-600 hover:border-red-600" },
            {
              name: "Facebook",
              icon: Facebook,
              color: "hover:bg-blue-600 hover:border-blue-600",
            },
            {
              name: "WhatsApp",
              icon: MessageCircle,
              color: "hover:bg-green-600 hover:border-green-600",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href="#"
              className={`flex-1 min-w-[140px] max-w-[200px] flex items-center gap-3 p-3 rounded-2xl glass hover:text-white transition-all duration-300 border border-border shadow-soft group ${social.color}`}
            >
              <div className="h-10 w-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground group-hover:text-white group-hover:bg-white/20 transition-colors">
                <social.icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">{social.name}</div>
                <div className="text-[10px] uppercase tracking-wider opacity-70">
                  Follow Us
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── All Products Grid (default right panel) ─── */
function AllProductsGrid({ products, onSelect }: { products: BackendProduct[]; onSelect: (slug: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
        All <span className="text-gradient">Products</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <motion.article
            key={p.id || p.slug}
            whileHover={{ y: -4 }}
            className="group glass rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all flex flex-col cursor-pointer"
            onClick={() => onSelect(p.slug)}
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <img
                src={p.image_url}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-leaf text-primary-foreground text-xs font-semibold">
                <Leaf className="h-3 w-3" /> Eco-Friendly
              </span>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground flex-grow">
                {p.features?.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">●</span>{f}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2 text-xs text-foreground/70">
                <Ruler className="h-3.5 w-3.5 text-primary" />
                <span>Sizes: {p.sizes}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="inline-flex w-full items-center justify-center rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Products Page ─── */
export default function Page() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [allProducts, setAllProducts] = useState<BackendProduct[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    Promise.all([
      fetch(`${apiUrl}/api/products/menu/`).then(r => r.json()).catch(() => []),
      fetch(`${apiUrl}/api/products/`).then(r => r.json()).catch(() => []),
    ]).then(([menu, products]) => {
      if (Array.isArray(menu)) setMenuItems(menu);
      if (Array.isArray(products)) setAllProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Our catalogue"
        title="Premium fruit protection, crafted in paper."
        subtitle="Engineered for every fruit, every climate, and every farm size."
        backgroundImage="/images/hero/products.png"
      />

      <section className="py-12">
        <div className="container-px max-w-7xl mx-auto">
          {/* ─── Horizontal Nav ─── */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 overflow-x-auto pb-4 scrollbar-hide"
          >
            <div className="flex items-center gap-3 w-max mx-auto px-4">
              {/* "All Products" option */}
              <button
                suppressHydrationWarning
                onClick={() => setSelectedSlug(null)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-200 border ${
                  selectedSlug === null
                    ? "bg-accent/80 text-foreground border-border/60 font-semibold shadow-sm"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/60 border-transparent hover:border-border/40"
                }`}
              >
                <span className="font-medium whitespace-nowrap">All Products</span>
              </button>

              {menuItems.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.06 }}
                >
                  <button
                    suppressHydrationWarning
                    onClick={() => setSelectedSlug(item.slug)}
                    className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-200 border ${
                      selectedSlug === item.slug
                        ? "bg-accent/80 text-foreground border-border/60 font-semibold shadow-sm"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/60 border-transparent hover:border-border/40"
                    }`}
                  >
                    <span className="font-medium whitespace-nowrap">{item.name}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.nav>

          {/* ─── Content Area ─── */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {selectedSlug ? (
                <ProductDetailPanel
                  key={selectedSlug}
                  slug={selectedSlug}
                  onBack={() => setSelectedSlug(null)}
                />
              ) : (
                loading ? (
                  <div className="animate-pulse">
                    <div className="h-10 w-48 bg-muted rounded-xl mb-8"></div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="glass rounded-3xl overflow-hidden shadow-soft flex flex-col h-[350px]">
                          <div className="aspect-[4/3] bg-muted"></div>
                          <div className="p-5 flex flex-col flex-grow gap-4">
                            <div className="h-6 w-2/3 bg-muted rounded-md"></div>
                            <div className="space-y-2">
                              <div className="h-4 w-full bg-muted rounded"></div>
                              <div className="h-4 w-5/6 bg-muted rounded"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <AllProductsGrid
                    key="all"
                    products={allProducts}
                    onSelect={(slug) => setSelectedSlug(slug)}
                  />
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />
    </>
  );
}
