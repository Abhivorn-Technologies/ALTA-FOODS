import { Reveal } from "./Reveal";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Biodegradability", paper: true, plastic: false },
  { feature: "Breathability", paper: true, plastic: false },
  { feature: "Pesticide Reduction", paper: true, plastic: false },
  { feature: "UV Protection", paper: true, plastic: true },
  { feature: "Cost-Effectiveness", paper: true, plastic: true },
  { feature: "Color Enhancement", paper: true, plastic: false },
];

export function Comparison() {
  return (
    <section className="py-24">
      <div className="container-px max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">
              The Difference
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Paper vs. Plastic</h2>
          </Reveal>
        </div>

        <div className="glass rounded-3xl overflow-hidden shadow-elevated">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-leaf text-primary-foreground">
                <th className="p-6 font-semibold">Feature</th>
                <th className="p-6 font-semibold text-center">ALTA Paper Bags</th>
                <th className="p-6 font-semibold text-center opacity-70">Plastic Covers</th>
              </tr>
            </thead>
            <tbody className="divide-y border-border">
              {rows.map((r) => (
                <tr key={r.feature} className="hover:bg-accent/20 transition-colors">
                  <td className="p-6 font-medium">{r.feature}</td>
                  <td className="p-6 text-center">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center mx-auto">
                      <Check className="h-5 w-5" />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div
                      className={`h-8 w-8 rounded-full grid place-items-center mx-auto ${r.plastic ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}
                    >
                      {r.plastic ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
