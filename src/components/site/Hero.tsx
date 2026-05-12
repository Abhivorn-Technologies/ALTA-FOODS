import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Leaf, Recycle, ShieldCheck, Sparkles } from "lucide-react";
import hero from "@/assets/hero-orchard.jpg";
import { FloatingLeaves } from "./FloatingLeaves";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="Mango orchard with paper cover bags" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-bark/85 via-bark/55 to-primary/40" />
      </div>
      <FloatingLeaves />

      <div className="container-px max-w-7xl mx-auto py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 text-primary-foreground">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" /> Export-Quality Eco Packaging
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Eco-Friendly Paper Fruit Cover Bags for{" "}
            <span className="text-gradient">Better Protection</span> & Healthier Harvests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl max-w-2xl opacity-90"
          >
            ALTA FOODS delivers sustainable fruit protection solutions that improve crop quality,
            reduce chemical exposure, and elevate farming efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:shadow-soft transition">
              Explore Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass-dark text-primary-foreground px-6 py-3 font-semibold border border-primary-foreground/20 hover:bg-primary-foreground/10 transition">
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            {[
              { icon: ShieldCheck, label: "ISO Certified" },
              { icon: Leaf, label: "100% Biodegradable" },
              { icon: Recycle, label: "Eco Material" },
              { icon: Award, label: "Export Grade" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass-dark rounded-xl px-3 py-2.5 flex items-center gap-2 border border-primary-foreground/10">
                <Icon className="h-4 w-4 text-primary-glow" />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
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
                className="glass rounded-2xl p-5 shadow-soft"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-xs flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px bg-primary-foreground/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
