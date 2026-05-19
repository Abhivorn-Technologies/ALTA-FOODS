"use client";

import { Reveal, Stagger } from "./Reveal";
import { motion } from "framer-motion";
import { Leaf, Award, Globe } from "lucide-react";

const certs = [
  { icon: Leaf, t: "ISO 14001", d: "Certified for our environmental management systems and waste reduction." },
  { icon: Award, t: "Eco-Grade Kraft", d: "We only use FSC certified paper from sustainable forest sources." },
  { icon: Globe, t: "Zero Waste Goal", d: "Our factory aims for a 95% recycle rate on all production off-cuts." },
];

export function Certifications() {
  return (
    <section className="py-24">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Our Commitment</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold">Standardized for safety.</h2></Reveal>
        </div>

        <Stagger className="grid md:grid-cols-3 gap-12">
          {certs.map((c) => (
            <motion.div
              key={c.t}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-center"
            >
              <div className="h-16 w-16 rounded-full bg-leaf text-primary-foreground grid place-items-center mx-auto mb-6 shadow-glow">
                <c.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{c.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
