"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, PaintBucket, Recycle, CheckCircle2, Factory } from "lucide-react";
import { Reveal, Stagger } from "./Reveal";

const features = [
  {
    title: "100% Biodegradable",
    description: "Our kraft paper bags break down naturally, leaving zero harmful residue behind.",
    icon: Leaf,
    className: "md:col-span-2 md:row-span-2 bg-accent/20 border-accent/30",
    iconColor: "text-green-600",
  },
  {
    title: "Tear-Resistant Durability",
    description: "Engineered to carry heavy loads without compromising structural integrity.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1 bg-background border-border shadow-soft",
    iconColor: "text-blue-600",
  },
  {
    title: "Custom Brand Printing",
    description: "Vibrant, eco-friendly inks that make your logo stand out on the shelf.",
    icon: PaintBucket,
    className: "md:col-span-1 md:row-span-1 bg-background border-border shadow-soft",
    iconColor: "text-purple-600",
  },
  {
    title: "Sustainable Sourcing",
    description: "Made from FSC-certified paper, ensuring responsible forestry practices.",
    icon: Recycle,
    className: "md:col-span-1 md:row-span-1 bg-primary text-primary-foreground",
    iconColor: "text-white",
  },
  {
    title: "Food-Safe Materials",
    description: "Odorless and non-toxic, perfect for flour, grains, sugar, and more.",
    icon: CheckCircle2,
    className: "md:col-span-1 md:row-span-1 bg-background border-border shadow-soft",
    iconColor: "text-amber-500",
  },
  {
    title: "Bulk Manufacturing",
    description: "High-capacity production ready to fulfill orders of any scale globally.",
    icon: Factory,
    className: "md:col-span-2 md:row-span-1 bg-background border-border shadow-soft",
    iconColor: "text-gray-600",
  },
];

export function BentoFeatures() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-accent-foreground font-semibold">
              The Alta Standard
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Premium quality in every detail.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              We don't just make bags. We craft premium packaging solutions that protect your product and elevate your brand.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className={`relative overflow-hidden rounded-3xl border p-8 transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between group ${feature.className}`}
            >
              {/* Decorative background glow for some cards */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-opacity group-hover:bg-white/20" />
              
              <div className="relative z-10">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${feature.className.includes('bg-primary') ? 'text-white' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-base leading-relaxed ${feature.className.includes('bg-primary') ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
