import { Reveal } from "./Reveal";
import { FloatingLeaves } from "./FloatingLeaves";

export function PageHeader({ eyebrow, title, subtitle, backgroundImage }: { eyebrow: string; title: string; subtitle?: string; backgroundImage?: string }) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {backgroundImage ? (
        <>
          <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover -z-20" />
          <div className="absolute inset-0 bg-zinc-950/70 -z-10" />
        </>
      ) : (
        <>
          <FloatingLeaves />
          <div className="absolute inset-0 -z-10 bg-paper opacity-60" />
        </>
      )}
      <div className="container-px max-w-5xl mx-auto text-center">
        <Reveal>
          <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] glass text-primary font-semibold border-white/10 text-white shadow-sm">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className={`mt-5 text-3xl md:text-5xl font-bold tracking-tight ${backgroundImage ? "text-white" : ""}`}>
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className={`mt-5 text-base md:text-lg max-w-2xl mx-auto ${backgroundImage ? "text-white/80" : "text-muted-foreground"}`}>{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
