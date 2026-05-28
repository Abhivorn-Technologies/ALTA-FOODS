"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/site/Hero").then((mod) => mod.Hero), {
  ssr: false,
});

const About = dynamic(() => import("@/components/site/About").then((mod) => mod.About), {
  ssr: false,
});

const Products = dynamic(() => import("@/components/site/Products").then((mod) => mod.Products), {
  ssr: false,
});

const Gallery = dynamic(() => import("@/components/site/Gallery").then((mod) => mod.Gallery), {
  ssr: false,
});

const CTA = dynamic(() => import("@/components/site/CTA").then((mod) => mod.CTA), {
  ssr: false,
});

const BentoFeatures = dynamic(() => import("@/components/site/BentoFeatures").then((mod) => mod.BentoFeatures), {
  ssr: false,
});

const StickyShowcase = dynamic(() => import("@/components/site/StickyShowcase").then((mod) => mod.StickyShowcase), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <About />
      <StickyShowcase />
      <Products layout="marquee" />
      <Gallery limit={6} />
      <CTA />
    </>
  );
}
