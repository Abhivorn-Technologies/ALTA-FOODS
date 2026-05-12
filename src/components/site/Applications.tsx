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
        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative aspect-[3/4] rounded-3xl overflow-hidden p-6 flex flex-col justify-end bg-gradient-to-br ${it.c} shadow-elevated`}
            >
              <div className="absolute inset-0 bg-bark/30" />
              <div className="relative text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.25em] opacity-80">0{i + 1}</div>
                <h3 className="mt-2 text-2xl font-display font-bold">{it.t}</h3>
                <p className="mt-2 text-sm opacity-90">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
