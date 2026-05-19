import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";
import { ShieldCheck, Heart, Zap } from "lucide-react";

const values = [
  { icon: ShieldCheck, t: "Trust & Transparency", d: "We build lasting relationships with farmers through honest practices and reliable products." },
  { icon: Zap, t: "Innovation", d: "Constantly researching new materials to improve breathability and UV protection." },
  { icon: Heart, t: "Eco-Conscious", d: "Our heart is in the soil; we prioritize the planet in every decision we make." },
];

export function Values() {
  return (
    <section className="py-24">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Our Values</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold">The principles that guide us.</h2></Reveal>
        </div>

        <Stagger className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <motion.div
              key={v.t}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-leaf/20 shadow-soft transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-leaf text-primary-foreground grid place-items-center mb-6">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
