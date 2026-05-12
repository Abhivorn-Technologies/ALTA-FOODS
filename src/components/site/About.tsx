import { Reveal, Stagger } from "./Reveal";
import { motion } from "framer-motion";
import about from "@/assets/about.jpg";
import { Target, Eye, Sprout } from "lucide-react";

export function About() {
  return (
    <section className="py-24">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 bg-leaf opacity-20 blur-2xl rounded-3xl" />
            <img src={about} alt="ALTA FOODS team" className="relative rounded-3xl shadow-elevated w-full" loading="lazy" />
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-soft hidden md:block"
            >
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Biodegradable</div>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">About ALTA FOODS</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Crafted for farmers. <span className="text-gradient">Designed for nature.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At ALTA FOODS, we specialize in manufacturing high-quality paper fruit cover bags
              designed to protect fruits naturally while supporting sustainable farming practices.
              Our eco-friendly solutions help farmers improve fruit quality, reduce pesticide
              dependency, and protect crops from insects, dust, birds, and environmental damage.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We believe agriculture should be safe, sustainable, and environmentally responsible.
              Our products are engineered using biodegradable paper materials that support
              healthier harvests and better productivity.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Target, t: "Our Mission", d: "Protect every fruit naturally with sustainable paper packaging." },
              { icon: Eye, t: "Our Vision", d: "Redefine global agriculture through eco-conscious innovation." },
              { icon: Sprout, t: "Our Promise", d: "Quality that strengthens both farms and the planet." },
            ].map(({ icon: Icon, t, d }) => (
              <motion.div
                key={t}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 shadow-soft"
              >
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-leaf text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold">{t}</div>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
