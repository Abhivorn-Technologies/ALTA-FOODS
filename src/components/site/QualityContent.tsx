"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  ThermometerSun,
  Layers,
  ArrowDownToDot,
  Sparkles,
} from "lucide-react";
import { Reveal, Stagger } from "./Reveal";

const parameters = [
  {
    icon: Shield,
    title: "Strength",
    description: "Built to withstand harsh environmental factors and handling.",
  },
  {
    icon: CheckCircle2,
    title: "Durability",
    description: "Long-lasting protection throughout the entire growing season.",
  },
  {
    icon: ThermometerSun,
    title: "Heat Resistance",
    description: "Regulates microclimates and prevents sunburn damage.",
  },
  {
    icon: Layers,
    title: "Thickness",
    description: "Optimal gauge paper for maximum protection without compromising breathability.",
  },
  {
    icon: ArrowDownToDot,
    title: "Puncture Resistance",
    description: "Resists tears from branches, wind, and bird attacks.",
  },
  {
    icon: Sparkles,
    title: "Smoothness",
    description: "Soft interior prevents physical abrasions and scarring on the fruit skin.",
  },
];

export function QualityContent() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Product Quality</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Quality is given the utmost importance at ALTA FOODS. We realize the value of
                quality in forming long-term relationships with our growers. To adhere to standard
                excellence, we have a dedicated quality control unit that checks our products at
                every stage of production.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our prime focus is to manufacture and deliver products of superior quality, which is
                why we use only prime-grade raw materials. Every product is rigorously examined by
                our experts to eliminate discrepancies in a timely manner.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4 shadow-elevated">
              <img
                src="/images/hero/products.png"
                alt="Quality Inspection"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">100% Guaranteed</p>
                  <p className="text-sm text-muted-foreground">Defect-free protection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Parameters Section */}
        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h3 className="text-3xl font-bold">Testing Parameters</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground text-lg">
                Our quality associates rigorously test all finished products against the following
                key metrics:
              </p>
            </Reveal>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parameters.map((param, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl transition-all shadow-soft hover:shadow-elevated group"
              >
                <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <param.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-6 text-xl font-semibold">{param.title}</h4>
                <p className="mt-3 text-muted-foreground leading-relaxed">{param.description}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Client Satisfaction Section */}
        <div className="mt-32 max-w-4xl mx-auto text-center glass rounded-[3rem] p-12 md:p-16 shadow-soft relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Client Satisfaction</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are dedicated towards achieving complete client satisfaction. We are assisted by a
              sophisticated manufacturing facility and a proficient workforce that enables us to
              fulfill the exact requirements of our clients.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Apart from supplying defectless products, we offer customized packaging solutions as
              per your requirements. Owing to our quality orientation and ethical business policies,
              we have carved a niche for ourselves in modern agriculture worldwide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
