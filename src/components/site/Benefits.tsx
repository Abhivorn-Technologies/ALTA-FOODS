import { Bug, ShieldCheck, Bird, Sparkles, Recycle, Wallet, Palette, CloudSun } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger } from "./Reveal";

const benefits = [
  { icon: Bug, t: "Insect Protection", d: "Physical barrier against fruit flies & pests." },
  { icon: ShieldCheck, t: "Less Pesticide", d: "Reduce chemical exposure significantly." },
  { icon: Bird, t: "Bird & Bat Defense", d: "Stop peck damage on ripening fruit." },
  { icon: Sparkles, t: "Better Quality", d: "Cleaner skin, uniform shape, premium grade." },
  { icon: Recycle, t: "Biodegradable", d: "100% compostable kraft paper." },
  { icon: Wallet, t: "Cost-Effective", d: "Higher market value per harvest." },
  { icon: Palette, t: "Natural Color", d: "Maintains true fruit hue & shine." },
  { icon: CloudSun, t: "Weather Shield", d: "Sun, rain, dust & wind resistance." },
];

export function Benefits() {
  return (
    <section className="py-24 relative bg-paper/40">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-card text-primary font-semibold">Why Farmers Choose Us</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-5xl font-bold">Eight reasons paper beats chemicals.</h2></Reveal>
        </div>
        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map(({ icon: Icon, t, d }) => (
            <motion.div
              key={t}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 shadow-soft overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-leaf opacity-0 group-hover:opacity-30 blur-2xl transition" />
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-leaf text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
