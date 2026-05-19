"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Leaf, Recycle, ShieldCheck, Sparkles } from "lucide-react";
import hero from "@/assets/hero-orchard-vibrant.png";
import { FloatingLeaves } from "./FloatingLeaves";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[720px] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={typeof hero === 'object' ? hero.src : hero} alt="Mango orchard with paper cover bags" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/95 via-bark/50 to-primary/10" />
      </div>
      <FloatingLeaves />

      <div className="container-px max-w-7xl mx-auto pt-4 pb-4 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-primary-foreground">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" /> Export-Quality Eco Packaging
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Eco-Friendly Paper Fruit Cover Bags for{" "}
            <span className="text-gradient">Better Protection</span> & Healthier Harvests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-4 text-base md:text-lg max-w-xl opacity-90 leading-relaxed"
          >
            ALTA FOODS delivers sustainable fruit protection solutions that improve crop quality,
            reduce chemical exposure, and elevate farming efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="/products" className="group inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:shadow-soft transition">
              Explore Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full glass-dark text-primary-foreground px-5 py-2.5 text-sm font-semibold border border-primary-foreground/20 hover:bg-primary-foreground/10 transition">
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl"
          >
            {[
              { icon: ShieldCheck, label: "ISO Certified" },
              { icon: Leaf, label: "100% Biodegradable" },
              { icon: Recycle, label: "Eco Material" },
              { icon: Award, label: "Export Grade" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass-dark rounded-xl px-2.5 py-1.5 flex items-center gap-2 border border-primary-foreground/10">
                <Icon className="h-4 w-4 text-primary-glow shrink-0" />
                <span className="text-[11px] font-medium leading-none">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { v: "12+", l: "Years Experience" },
              { v: "50M+", l: "Bags Manufactured" },
              { v: "1,200+", l: "Happy Farmers" },
              { v: "8", l: "Countries Served" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-xl p-4 shadow-soft"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest mt-1 text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
