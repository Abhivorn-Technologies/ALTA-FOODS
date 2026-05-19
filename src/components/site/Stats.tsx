import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";

const stats = [
  { val: "50M+", lab: "Bags Manufactured" },
  { val: "500+", lab: "Satisfied Farmers" },
  { val: "100%", lab: "Biodegradable" },
  { val: "12+", lab: "Export Countries" },
];

export function Stats() {
  return (
    <section className="py-20 bg-bark text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <motion.div
              key={s.lab}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-6xl font-bold font-display text-primary-glow">{s.val}</div>
              <div className="text-sm uppercase tracking-widest opacity-70">{s.lab}</div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
