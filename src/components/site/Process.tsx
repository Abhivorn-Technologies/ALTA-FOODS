"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";
import { CheckCircle2, Factory, Package, Ship } from "lucide-react";

const steps = [
  { icon: Factory, t: "Precision Manufacturing", d: "Using high-grade biodegradable kraft paper and specialized machines." },
  { icon: CheckCircle2, t: "Quality Inspection", d: "Every bag is tested for durability, breathability, and UV resistance." },
  { icon: Package, t: "Eco-Packaging", d: "Bulk orders are packed in recycled materials to minimize waste." },
  { icon: Ship, t: "Global Distribution", d: "Fast shipping to local farms and international export partners." },
];

export function Process() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-white text-primary font-semibold">Our Process</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold">How we deliver excellence.</h2></Reveal>
        </div>

        <Stagger className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border -z-10" />
              )}
              <div className="h-20 w-20 rounded-full bg-background shadow-soft border grid place-items-center mb-6 group-hover:scale-110 transition-transform bg-white">
                <s.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
