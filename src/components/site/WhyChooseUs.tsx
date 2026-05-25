"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";
import { Building2, IndianRupee, Users, Maximize } from "lucide-react";

const reasons = [
  { 
    icon: Building2, 
    title: "World Class Infrastructure", 
    desc: "We operate a state-of-the-art manufacturing facility equipped with the latest machinery to produce flawless fruit protection solutions." 
  },
  { 
    icon: IndianRupee, 
    title: "Realistic Price", 
    desc: "We provide our premium products at highly competitive and realistic costs, ensuring affordability for farmers of all scales." 
  },
  { 
    icon: Users, 
    title: "Skilled Workforce", 
    desc: "Our highly experienced and dedicated team ensures every product is crafted precisely to meet international quality standards." 
  },
  { 
    icon: Maximize, 
    title: "Wide Range", 
    desc: "We provide our protection bags in a massive variety of sizes, shapes, and color formats to perfectly fit any crop." 
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary/[0.02]">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Our Strengths</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Why choose ALTA FOODS?</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted-foreground text-lg">
              We combine cutting-edge technology with extensive agricultural expertise.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-3xl transition-all shadow-soft hover:shadow-elevated group"
            >
              <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-6">
                <r.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
