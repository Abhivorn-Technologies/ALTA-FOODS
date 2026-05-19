import { Reveal } from "./Reveal";
import { FloatingLeaves } from "./FloatingLeaves";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <FloatingLeaves />
      <div className="absolute inset-0 -z-10 bg-paper opacity-60" />
      <div className="container-px max-w-5xl mx-auto text-center">
        <Reveal>
          <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] glass text-primary font-semibold">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
