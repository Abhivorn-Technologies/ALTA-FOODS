"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag } from "lucide-react";
import { Reveal } from "./Reveal";

// Existing images
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import mango from "@/assets/product-mango.jpg";
import pom from "@/assets/product-pomegranate.jpg";

// Additional images
import apple from "@/assets/product-apple.jpg";
import guava from "@/assets/product-guava.jpg";
import custom from "@/assets/product-custom-logo.jpg";
import heroOrchard from "@/assets/hero-orchard.jpg";
import heroOrchardVibrant from "@/assets/hero-orchard-vibrant.png";
import aboutImg from "@/assets/about.png";
import sustainability from "@/assets/sustainability.jpg";

const galleryData = [
  { src: g1, title: "Paper Roll Sourcing", category: "Factory & Process", tags: ["Raw Material"] },
  { src: mango, title: "Mango Paper Covers", category: "Products", tags: ["Fruit Cover", "Premium"] },
  { src: heroOrchard, title: "Partner Farms", category: "Farm & Sustainability", tags: ["Orchard"] },
  { src: g2, title: "Manufacturing Process", category: "Factory & Process", tags: ["Production"] },
  { src: pom, title: "Pomegranate Bags", category: "Products", tags: ["Fruit Cover"] },
  { src: sustainability, title: "Eco-friendly Materials", category: "Farm & Sustainability", tags: ["Recyclable"] },
  { src: g3, title: "Quality Check", category: "Factory & Process", tags: ["QA"] },
  { src: apple, title: "Apple Protection Bags", category: "Products", tags: ["Fruit Cover"] },
  { src: heroOrchardVibrant, title: "Harvest Protection", category: "Farm & Sustainability", tags: ["Yield"] },
  { src: g4, title: "Packaging Line", category: "Factory & Process", tags: ["Logistics"] },
  { src: guava, title: "Guava Covers", category: "Products", tags: ["Fruit Cover"] },
  { src: custom, title: "Custom Bags", category: "Products", tags: ["Custom Print"] },
  { src: aboutImg, title: "Our Facility", category: "Factory & Process", tags: ["Infrastructure"] },
];

const categories = ["All", "Products", "Factory & Process", "Farm & Sustainability"];

interface GalleryProps {
  showCategories?: boolean;
  limit?: number;
}

export function Gallery({ showCategories = false, limit }: GalleryProps) {
  const [open, setOpen] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData = galleryData
    .filter((item) => activeCategory === "All" || item.category === activeCategory)
    .slice(0, limit);

  return (
    <section className="py-24 relative bg-muted/20">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">
              Gallery
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold md:whitespace-nowrap">
              From our farms to our factory.
            </h2>
          </Reveal>
        </div>

        {showCategories && (
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-background hover:bg-accent text-foreground/80 hover:text-foreground shadow-soft"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <motion.div layout className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, i) => (
              <motion.article
                key={typeof item.src === "object" ? item.src.src : item.src}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="group w-full overflow-hidden rounded-3xl glass shadow-soft flex flex-col cursor-pointer hover:shadow-elevated transition-shadow duration-300 h-full"
                onClick={() => setOpen(typeof item.src === "object" ? item.src.src : item.src)}
              >
                <div className="overflow-hidden relative w-full aspect-[4/3] bg-muted/20">
                  <img
                    src={typeof item.src === "object" ? item.src.src : item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium border border-white/30">
                      View Image
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 bg-card/50 backdrop-blur-sm border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-accent/80 rounded-md text-[10px] uppercase font-bold text-primary tracking-wider inline-flex items-center gap-1.5">
                      <Tag className="h-3 w-3" /> {item.category}
                    </span>
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-muted/80 rounded-md text-[10px] uppercase font-bold text-foreground/70 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mt-auto">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-bark/80 backdrop-blur-md grid place-items-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={open}
              alt="Preview"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elevated border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
