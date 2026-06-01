"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Settings, Instagram, Youtube, Facebook, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductDetailsProps {
  overview: string;
  specs: { label: string; value: string }[];
  advantages: string[];
  images?: {
    stage: string;
    result: string;
  };
}

export function ProductDetails({ overview, specs, advantages, images }: ProductDetailsProps) {
  const [imageIdx, setImageIdx] = useState(0);
  const defaultImages = {
    stage: "/images/hero/gallery.png",
    result: "/images/hero/quality.png",
  };
  const gallery = images || defaultImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIdx((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        {/* Top Section: Overview & Specs */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Column: Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground mb-6">
              Product <span className="text-gradient">Overview</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              {overview}
            </p>
          </motion.div>

          {/* Right Column: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3] bg-muted relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={[gallery.result, gallery.stage][imageIdx]}
                  alt="Product"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>
              
              {/* Carousel Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => setImageIdx(i => (i === 0 ? 1 : 0))}
                  className="h-10 w-10 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center shadow-lg hover:bg-background hover:scale-110 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setImageIdx(i => (i === 0 ? 1 : 0))}
                  className="h-10 w-10 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center shadow-lg hover:bg-background hover:scale-110 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {[gallery.result, gallery.stage].map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-2 rounded-full transition-all duration-300 ${imageIdx === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-6 md:p-8 border border-border shadow-soft bg-background/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Specifications</h3>
                  <p className="text-xs text-muted-foreground">Technical details of the bag</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
                {specs.map((spec, idx) => (
                  <div key={idx}>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</div>
                    <div className="font-semibold text-foreground text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits Grid */}
        <div className="mb-24 pt-12 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Key <span className="text-gradient">Benefits</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass p-6 md:p-8 rounded-3xl border border-border shadow-soft flex flex-col gap-4 hover:-translate-y-2 hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-glow shrink-0 group-hover:bg-primary-glow group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-foreground/90 leading-relaxed font-medium break-words [word-break:break-word]">
                  {adv}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery & Social Media Section */}
        <div className="mt-24 pt-20 border-t border-border/50 space-y-24">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-foreground">
              For More Information Follow Our <span className="text-gradient">Social Channels</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  name: "Instagram",
                  icon: Instagram,
                  color: "hover:bg-pink-600 hover:border-pink-600",
                },
                { name: "YouTube", icon: Youtube, color: "hover:bg-red-600 hover:border-red-600" },
                {
                  name: "Facebook",
                  icon: Facebook,
                  color: "hover:bg-blue-600 hover:border-blue-600",
                },
                {
                  name: "WhatsApp",
                  icon: MessageCircle,
                  color: "hover:bg-green-600 hover:border-green-600",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-48 flex items-center gap-3 p-3 rounded-2xl glass hover:text-white transition-all duration-300 border border-border shadow-soft group ${social.color}`}
                >
                  <div className="h-10 w-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground group-hover:text-white group-hover:bg-white/20 transition-colors">
                    <social.icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{social.name}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-70">
                      Click here
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
