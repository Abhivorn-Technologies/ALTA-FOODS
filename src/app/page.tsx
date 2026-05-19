
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Benefits } from "@/components/site/Benefits";
import { Applications } from "@/components/site/Applications";
import { Sustainability } from "@/components/site/Sustainability";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Applications />
      <Sustainability />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
