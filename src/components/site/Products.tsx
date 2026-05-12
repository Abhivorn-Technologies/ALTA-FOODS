import { motion } from "framer-motion";
import { Leaf, Ruler } from "lucide-react";
import { Reveal, Stagger } from "./Reveal";
import mango from "@/assets/product-mango.jpg";
import apple from "@/assets/product-apple.jpg";
import banana from "@/assets/product-banana.jpg";
import guava from "@/assets/product-guava.jpg";
import pomegranate from "@/assets/product-pomegranate.jpg";
import custom from "@/assets/product-custom.jpg";

const products = [
  { img: mango, name: "Mango Paper Cover Bags", features: ["UV resistant", "Breathable kraft", "Insect proof"], sizes: "8×12 / 10×14 / 12×16 in" },
  { img: apple, name: "Apple Protection Bags", features: ["Color enhancement", "Bird & hail proof", "Single-layer"], sizes: "6×8 / 7×9 in" },
  { img: banana, name: "Banana Fruit Cover Bags", features: ["Dust shield", "Ventilated weave", "Long durability"], sizes: "Up to 36×48 in" },
  { img: guava, name: "Guava Paper Bags", features: ["Fruit fly barrier", "Soft texture", "Compostable"], sizes: "6×8 / 8×10 in" },
  { img: pomegranate, name: "Pomegranate Covers", features: ["Sun-stress reduction", "Crack prevention", "Natural fiber"], sizes: "6×8 / 7×9 in" },
  { img: custom, name: "Custom Fruit Bags", features: ["Branded prints", "Bespoke sizing", "Bulk orders"], sizes: "Made to order" },
];

export function Products() {
  return (
    <section className="py-24 relative">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Our Products</span>
          </Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-5xl font-bold">Premium fruit protection, crafted in paper.</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-4 text-muted-foreground">Engineered for every fruit, every climate, every farm size.</p></Reveal>
        </div>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <motion.article
              key={p.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-leaf text-primary-foreground text-xs font-semibold">
                  <Leaf className="h-3 w-3" /> Eco-Friendly
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {p.features.map((f) => (<li key={f} className="flex gap-2"><span className="text-primary">●</span>{f}</li>))}
                </ul>
                <div className="mt-4 flex items-center gap-2 text-xs text-foreground/70">
                  <Ruler className="h-3.5 w-3.5 text-primary" />
                  <span>Sizes: {p.sizes}</span>
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">Material: Kraft / Butter Paper</div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
