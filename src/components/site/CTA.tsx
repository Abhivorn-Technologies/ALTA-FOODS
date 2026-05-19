import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Leaf, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-bark -z-10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      
      <div className="container-px max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-glow border border-primary/30 text-sm font-semibold mb-6">
            <Leaf className="h-4 w-4" /> Start protecting your harvest
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background leading-tight mb-6 lg:whitespace-nowrap">
            Ready to switch to <span className="text-primary-glow italic">sustainable</span> fruit protection?
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Join 500+ farmers worldwide who trust ALTA FOODS for premium quality, higher yields, and chemical-free protection.
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-6 py-3 text-base font-bold shadow-glow hover:scale-105 transition-all"
            >
              Request a Custom Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 rounded-full bg-background/10 text-background border border-background/20 px-6 py-3 text-base font-semibold hover:bg-background/20 transition-all"
            >
              View Catalogue
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-10 -right-10 h-40 w-40 bg-leaf/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary/20 rounded-full blur-3xl"
      />
    </section>
  );
}
