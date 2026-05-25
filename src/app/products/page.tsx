"use client";

import dynamic from "next/dynamic";

const PageHeader = dynamic(
  () => import("@/components/site/PageHeader").then((mod) => mod.PageHeader),
  { ssr: false },
);

const Products = dynamic(() => import("@/components/site/Products").then((mod) => mod.Products), {
  ssr: false,
});

const Process = dynamic(() => import("@/components/site/Process").then((mod) => mod.Process), {
  ssr: false,
});

const Testimonials = dynamic(
  () => import("@/components/site/Testimonials").then((mod) => mod.Testimonials),
  { ssr: false },
);

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Our catalogue"
        title="Premium fruit protection, crafted in paper."
        subtitle="Engineered for every fruit, every climate, and every farm size."
        backgroundImage="/images/hero/products.png"
      />
      <Products />
      <Process />
      <Testimonials />
    </>
  );
}
