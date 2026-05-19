import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";

const cases = [
  { crop: "Mango", location: "Ratnagiri", result: "30% increase in export-grade fruit", d: "Reduced sun-scald and fruit fly damage effectively." },
  { crop: "Apple", location: "Himachal", result: "Minimized hail damage", d: "The single-layer kraft paper protected the skin from bruising." },
  { crop: "Pomegranate", location: "Solapur", result: "Eliminated cracking", d: "Maintained moisture balance during peak summer heat." },
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-white text-primary font-semibold">Success Stories</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold">Proven results in the field.</h2></Reveal>
        </div>

        <Stagger className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <motion.div
              key={c.crop}
              variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
              className="bg-white p-8 rounded-3xl shadow-soft border border-border"
            >
              <div className="text-primary font-bold text-sm uppercase tracking-widest">{c.crop} — {c.location}</div>
              <div className="text-2xl font-bold mt-2 mb-4 text-gradient">{c.result}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
