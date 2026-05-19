"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const items = [
  { t: "Mango Farms", d: "Premium Alphonso, Kesar & Banganapalli protection.", c: "from-amber-500/40 to-primary/40" },
  { t: "Organic Farming", d: "Chemical-free certification support.", c: "from-primary/50 to-emerald-500/40" },
  { t: "Commercial Gardens", d: "Bulk packaging for large-scale orchards.", c: "from-orange-500/40 to-bark/50" },
  { t: "Export Protection", d: "Cosmetic-grade fruit for global markets.", c: "from-primary/40 to-blue-500/30" },
  { t: "Sustainable Agri", d: "Government and FPO partnerships.", c: "from-lime-500/40 to-primary/50" },
];

export function Applications() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <motion.div style={{ y }} aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-leaf opacity-20 blur-3xl" />
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Applications</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-5xl font-bold">From small orchards to global exports.</h2></Reveal>
        </div>
        <div className="mt-12 flex flex-nowrap gap-4 overflow-x-auto pb-8 scrollbar-hide -mx-4 px-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:mx-0 lg:px-0">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="min-w-[280px] lg:min-w-0 glass rounded-3xl p-6 border-white/5 hover:border-leaf/20 shadow-soft hover:shadow-glow transition-all group flex flex-col justify-between h-full"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-leaf/10 text-primary grid place-items-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-sm font-bold">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-3">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${it.c} opacity-40`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
