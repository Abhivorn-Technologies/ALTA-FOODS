"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";
import { Droplets, Sun, Leaf, ShieldCheck, Award } from "lucide-react";

const features = [
  { icon: Leaf, title: "Paper Material", desc: "Organic, biodegradable, and eco-friendly composition." },
  { icon: Sun, title: "UV Resistance", desc: "Blocks harmful UV rays while allowing essential sunlight." },
  { icon: Droplets, title: "Water Resistance", desc: "Repels moisture to prevent fungal growth and rot." },
  { icon: ShieldCheck, title: "Breathable", desc: "Maintains an optimal microclimate for fruit development." },
  { icon: Award, title: "Standard Quality", desc: "Ensures long performance and consistent, premium results." },
];

export function ProductFeatures() {
  return (
    <section className="py-24">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1">
          <Stagger className="space-y-4">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{f.title}</h4>
                  <p className="text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Core Features</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Advanced protection built into every bag.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our extensive product range includes Guava Protection Bags, Pear Fruit Protection Bags, Dragon Fruit Protection Bags, and Pomegranate Protection Bags. We are deeply engaged in providing the highest quality physical protection for your harvests.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
             <div className="mt-10 aspect-[4/3] rounded-[2rem] overflow-hidden glass p-2 shadow-elevated">
               <img src="/images/hero/gallery.png" alt="Premium Fruit Protection" className="w-full h-full object-cover rounded-[1.5rem]" />
             </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
