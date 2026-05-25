import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Are the bags fully biodegradable?",
    a: "Yes. Our paper fruit cover bags are made of 100% biodegradable kraft fibers and decompose within months.",
  },
  {
    q: "Which fruits can be covered?",
    a: "Mangoes, apples, bananas, guavas, pomegranates, pears, peaches, and many more. Custom sizes available.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we export to 8+ countries with full documentation and export-grade packaging.",
  },
  {
    q: "Can the bags be branded?",
    a: "Absolutely — we offer custom printing for FPOs, exporters, and brand owners.",
  },
  {
    q: "When should bags be applied?",
    a: "Typically 30–45 days before harvest, when fruits reach marble or pea size depending on the crop.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container-px max-w-3xl mx-auto">
        <div className="text-center">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Questions, answered.</h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="mt-10 glass rounded-3xl p-2 shadow-soft">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`i-${i}`}
                className="border-b border-border/60 last:border-0 px-4"
              >
                <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
