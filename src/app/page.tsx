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

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products layout="marquee" />
      <Gallery />
      <CTA />
    </>
  );
}
