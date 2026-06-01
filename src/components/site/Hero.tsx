"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { FloatingLeaves } from "./FloatingLeaves";

const slides = [
  {
    fruit: "All Fruits",
    image: "/images/hero/products.png",
    color: "from-green-400 to-yellow-400",
  },
  { fruit: "Mangoes", image: "/images/hero/mango.png", color: "from-yellow-300 to-orange-500" },
  { fruit: "Apples", image: "/images/hero/apple.png", color: "from-red-400 to-rose-600" },
  { fruit: "Bananas", image: "/images/hero/banana.png", color: "from-yellow-200 to-yellow-500" },
  {
    fruit: "Pomegranates",
    image: "/images/hero/pomegranate.png",
    color: "from-rose-400 to-red-600",
  },
  { fruit: "Guavas", image: "/images/hero/guava.png", color: "from-green-300 to-emerald-500" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 second interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] lg:min-h-[850px] flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 -z-20 bg-bark">
        <AnimatePresence>
          <motion.img
            key={current}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 10, ease: "linear" } }}
            src={slides[current].image}
            alt={`${slides[current].fruit} Protection`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/50 to-bark/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/20" />
      </div>

      <FloatingLeaves />

      {/* Main Content */}
      <div className="container-px max-w-5xl mx-auto text-center text-primary-foreground relative z-10 flex flex-col items-center mt-12">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs uppercase tracking-[0.2em] font-bold shadow-glow"
        >
          <Sparkles className="h-4 w-4 text-primary-glow" /> ALTA FOODS EXPORT QUALITY
        </motion.span>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Premium Protection for <br />
          <span className="inline-block min-w-[300px] mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`bg-clip-text text-transparent bg-gradient-to-r inline-block drop-shadow-sm ${slides[current].color}`}
              >
                {slides[current].fruit}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed font-medium">
          Sustainable, eco-friendly paper fruit cover bags engineered to improve crop quality,
          reduce chemical exposure, and elevate your farming efficiency.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-8 py-3.5 text-base font-bold shadow-glow hover:shadow-soft transition-all hover:-translate-y-1"
          >
            Explore Products <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full glass-dark text-primary-foreground px-8 py-3.5 text-base font-bold border border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>


      </div>
    </section>
  );
}
