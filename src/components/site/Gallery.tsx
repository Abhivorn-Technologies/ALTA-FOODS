import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import mango from "@/assets/product-mango.jpg";
import pom from "@/assets/product-pomegranate.jpg";

const imgs = [g1, g3, mango, g2, pom, g4];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="py-24">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Gallery</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-5xl font-bold">From our farms to our factory.</h2></Reveal>
        </div>
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setOpen(src)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group mb-4 block w-full overflow-hidden rounded-3xl shadow-soft break-inside-avoid"
            >
              <img src={src} alt="Gallery" loading="lazy" className="w-full group-hover:scale-110 transition-transform duration-700" />
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-bark/80 backdrop-blur-md grid place-items-center p-4"
            onClick={() => setOpen(null)}
          >
            <button className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full glass" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={open} alt="Preview" className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elevated"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
