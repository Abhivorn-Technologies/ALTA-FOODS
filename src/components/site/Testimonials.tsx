"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { n: "Ramesh Patel", r: "Mango Orchardist, Gujarat", q: "After switching to ALTA FOODS bags, my Kesar mangoes fetch a 30% premium. Cleaner skin, no fly damage.", s: 5 },
  { n: "Anita Sharma", r: "Organic Farm, Maharashtra", q: "Truly biodegradable, easy to apply, and my pesticide bills dropped by half.", s: 5 },
  { n: "Joseph Mathew", r: "Exporter, Kerala", q: "Export-grade finish on every shipment. The team customizes sizes for our specific buyers.", s: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="py-24 bg-paper/40">
      <div className="container-px max-w-4xl mx-auto text-center">
        <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-card text-primary font-semibold">Testimonials</span></Reveal>
        <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-5xl font-bold">Trusted by growers worldwide.</h2></Reveal>
        <div className="mt-12 relative h-64">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-10 shadow-soft"
            >
              <Quote className="mx-auto h-8 w-8 text-primary opacity-60" />
              <p className="mt-4 text-lg md:text-xl leading-relaxed">"{items[i].q}"</p>
              <div className="mt-5 flex justify-center gap-1">
                {Array.from({ length: items[i].s }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <div className="mt-3 font-display font-semibold">{items[i].n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{items[i].r}</div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, k) => (
            <button suppressHydrationWarning key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-leaf" : "w-2 bg-muted-foreground/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
