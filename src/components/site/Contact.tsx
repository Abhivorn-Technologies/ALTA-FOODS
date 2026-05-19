"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

type State = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { map[i.path[0] as string] = i.message; });
      setErrors(map);
      return;
    }
    setState("loading");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: parsed.data.message,
        company: parsed.data.company,
      }, PUBLIC_KEY);
      setState("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setState("idle"), 4000);
    } catch {
      setState("error");
    }
  }

  return (
    <section className="py-24">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:items-center">
        <div>
          <Reveal><span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-accent text-primary font-semibold">Contact</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-2xl md:text-4xl font-bold leading-tight">Let's grow <span className="text-gradient">better fruit</span> together.</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-4 text-muted-foreground">Tell us about your orchard, target sizes, and quantities. We respond within one business day.</p></Reveal>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Phone, t: "Call", d: "+91 98765 43210" },
              { icon: Mail, t: "Email", d: "hello@altafoods.in" },
              { icon: MapPin, t: "Visit", d: "Industrial Area, Gujarat, India" },
              { icon: WhatsAppIcon, t: "WhatsApp", d: "Chat with our team" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass rounded-2xl p-4 shadow-soft flex gap-3 items-start">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-leaf text-primary-foreground"><Icon className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                  <div className="font-semibold text-sm">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden shadow-soft border">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Gujarat+India&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 md:p-8 shadow-elevated">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Phone" name="phone" type="tel" error={errors.phone} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Company" name="company" error={errors.company} />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea name="message" rows={5} className="mt-1.5 w-full rounded-xl bg-background/60 border px-4 py-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Crop, sizes, quantity, timeline…" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <motion.button
              suppressHydrationWarning
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              disabled={state === "loading" || state === "success"}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-leaf text-primary-foreground px-6 py-3.5 font-semibold shadow-glow disabled:opacity-70"
            >
              {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {state === "success" && <CheckCircle2 className="h-4 w-4" />}
              {state === "idle" && <Send className="h-4 w-4" />}
              {state === "loading" ? "Sending…" : state === "success" ? "Message sent!" : state === "error" ? "Try again" : "Send message"}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input suppressHydrationWarning name={name} type={type} className="mt-1.5 w-full rounded-xl bg-background/60 border px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
