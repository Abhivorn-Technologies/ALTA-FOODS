"use client";

import sus from "@/assets/sustainable-bag.png";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function Sustainability() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Sustainability</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">Sustainable farming <span className="text-gradient">starts here.</span></h2></Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our biodegradable paper fruit cover bags help reduce plastic usage and support
              eco-conscious farming practices. ALTA FOODS is committed to creating environmentally
              responsible agricultural solutions that benefit both farmers and nature.
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[["0%", "Plastic"], ["100%", "Compostable"], ["-40%", "Pesticide use"]].map(([v, l]) => (
              <Reveal key={l}>
                <div className="glass rounded-2xl p-5 shadow-soft text-center">
                  <div className="text-3xl font-display font-bold text-gradient">{v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-leaf opacity-20 blur-3xl rounded-3xl" />
            <img src={typeof sus === 'object' ? sus.src : sus} alt="Compostable paper fruit bag on fertile soil" loading="lazy" className="relative rounded-3xl shadow-elevated w-full aspect-[4/3] object-cover" />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-6 -left-4 glass rounded-2xl p-3 shadow-soft flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" /> <span className="text-sm font-semibold">Carbon-conscious</span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
