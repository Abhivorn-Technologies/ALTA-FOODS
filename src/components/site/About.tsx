"use client";

import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem]" />
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[2.5rem] glass p-3 shadow-elevated relative z-10">
              <img
                src="/images/hero/about.png"
                alt="ALTA FOODS facilities"
                className="w-full h-full object-cover rounded-[2rem]"
                loading="lazy"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-soft hidden md:block z-20"
            >
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground mt-1">
                Years of Excellence
              </div>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">
              About ALTA FOODS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              A legacy of <span className="text-primary/70">premium quality.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 text-lg font-medium text-foreground/80 italic border-l-4 border-primary pl-4">
              "ALTA FOODS was established in [Year] with a vision to redefine global agriculture
              through eco-conscious innovation."
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              We are a well-known Manufacturer, Exporter, and Wholesaler of a premium quality gamut
              of Fruit Protection Paper Bags. Our products are in exceptionally high demand due to
              their uncompromising quality and affordable pricing.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Under the excellent guidance and rich experience of our CEO,{" "}
              <strong>[CEO Name]</strong>, we have scaled new heights of success in the
              international market. All our products are manufactured in accordance with strict
              international norms to perfectly meet our clients' requirements.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <ul className="mt-8 space-y-3">
              {[
                "Renowned for excellent finishing and abrasion resistance",
                "Wide range of sizes and custom packaging solutions",
                "Timely completion and delivery of all orders",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
