"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Reveal";
import heroOrchardVibrant from "@/assets/hero-orchard-vibrant.png";

const showcaseItems = [
  {
    id: "01",
    title: "Unmatched Durability",
    description:
      "Crafted from multiple layers of high-grade kraft paper, our bags can withstand extreme conditions without tearing. They ensure your product arrives safely, every time.",
  },
  {
    id: "02",
    title: "Breathable & Protective",
    description:
      "Our proprietary material blend allows agricultural products to breathe, preventing moisture buildup while keeping pests and UV rays out.",
  },
  {
    id: "03",
    title: "Custom Tailored for You",
    description:
      "From specific dimensions to vibrant, non-toxic brand printing, we customize every batch to match your precise requirements and brand identity.",
  },
  {
    id: "04",
    title: "Eco-Conscious Core",
    description:
      "Sustainability isn't an afterthought. Every bag is 100% biodegradable, recyclable, and sourced from responsibly managed forests.",
  },
];

export function StickyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacity for the image based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <section ref={containerRef} className="relative py-24 bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
          {/* Left Side: Sticky Image */}
          <div className="lg:w-1/2 w-full lg:sticky top-24 lg:h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden rounded-3xl">
            <motion.div
              style={{ opacity, scale }}
              className="relative w-full h-[60vh] lg:h-full rounded-3xl overflow-hidden shadow-2xl glass"
            >
              <Image
                src={heroOrchardVibrant}
                alt="Alta Foods Premium Quality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 md:p-12">
                <h3 className="text-white text-3xl font-bold max-w-sm">
                  Protecting your harvest, beautifully.
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Scrolling Content */}
          <div className="lg:w-1/2 w-full py-12 lg:py-48 flex flex-col gap-32">
            {showcaseItems.map((item, index) => (
              <div key={item.id} className="relative">
                <Reveal>
                  <span className="text-8xl md:text-[10rem] font-bold text-accent/30 absolute -top-16 -left-8 md:-top-24 md:-left-12 -z-10 select-none">
                    {item.id}
                  </span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 mt-4">{item.title}</h3>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>

                {/* Decorative separator line */}
                {index !== showcaseItems.length - 1 && (
                  <Reveal delay={0.3}>
                    <div className="w-full h-px bg-border mt-16" />
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
