"use client";

import { motion } from "framer-motion";
import { Leaf, Ruler } from "lucide-react";
import { Reveal, Stagger } from "./Reveal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts, type Product } from "@/lib/admin";

export function Products({ layout = "grid" }: { layout?: "grid" | "marquee" }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data ?? []);
      })
      .catch((error) => {
        console.error("Error fetching products from Firebase:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderFeatures = (product: Product) => {
    const features = product.features_text?.split("\n").map((feature) => feature.trim()).filter(Boolean) ?? [];
    if (features.length === 0) {
      return <li>No specific features listed.</li>;
    }
    return features.map((feature, index) => (
      <li key={index} className="flex gap-2">
        <span className="text-primary">●</span>
        {feature}
      </li>
    ));
  };

  return (
    <section className="py-24 relative">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Our Products</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Premium fruit protection, crafted in paper.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted-foreground">Engineered for every fruit, every climate, every farm size.</p>
          </Reveal>
        </div>

        {loading ? (
          <div className="mt-12 text-center text-muted-foreground">Loading latest products...</div>
        ) : products.length === 0 ? (
          <div className="mt-12 text-center text-muted-foreground">No products are available yet. Add items from the admin dashboard.</div>
        ) : layout === "marquee" ? (
          <div className="mt-12 overflow-hidden flex relative w-full group py-8 -my-8">
            <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
              {[...products, ...products].map((p, idx) => (
                <article
                  key={`${p.id ?? p.name}-${idx}`}
                  className="w-[280px] sm:w-[340px] shrink-0 glass rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all flex flex-col group/card hover:-translate-y-2 duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                    <img
                      src={p.image_url ?? "/images/placeholder.png"}
                      alt={p.name ?? "Product"}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-leaf text-primary-foreground text-xs font-semibold">
                      <Leaf className="h-3 w-3" /> Eco-Friendly
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground flex-grow">{renderFeatures(p)}</ul>
                    <div className="mt-4 flex items-center gap-2 text-xs text-foreground/70">
                      <Ruler className="h-3.5 w-3.5 text-primary" />
                      <span>Sizes: {p.sizes ?? "—"}</span>
                    </div>
                    <div className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">Material: {p.material ?? "—"}</div>
                    <div className="mt-5 pt-4 border-t border-border/50 mt-auto">
                      <Link
                        href={`/products/${String(p.name ?? "product").toLowerCase().split(" ")[0]}`}
                        className="inline-flex w-full items-center justify-center rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <motion.article
                key={p.id ?? p.name}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -6 }}
                className="group glass rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <img
                    src={p.image_url ?? "/images/placeholder.png"}
                    alt={p.name ?? "Product"}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-leaf text-primary-foreground text-xs font-semibold">
                    <Leaf className="h-3 w-3" /> Eco-Friendly
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground flex-grow">{renderFeatures(p)}</ul>
                  <div className="mt-4 flex items-center gap-2 text-xs text-foreground/70">
                    <Ruler className="h-3.5 w-3.5 text-primary" />
                    <span>Sizes: {p.sizes ?? "—"}</span>
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">Material: {p.material ?? "—"}</div>
                  <div className="mt-5 pt-4 border-t border-border/50 mt-auto">
                    <Link
                      href={`/products/${String(p.name ?? "product").toLowerCase().split(" ")[0]}`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
