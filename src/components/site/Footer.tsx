"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-bark text-primary-foreground/90">
      <div className="container-px max-w-7xl mx-auto py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={typeof logo === 'object' ? logo.src : logo} alt="ALTA FOODS" className="h-10 w-10 bg-background/90 rounded-lg p-1" />
            <div>
              <div className="font-display font-bold text-lg text-background">ALTA FOODS</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Protecting Fruits Naturally</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Manufacturers of premium eco-friendly paper fruit cover bags for sustainable agriculture and export-quality harvests.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 grid place-items-center rounded-full bg-background/10 hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About", false],
              ["/products", "Products", false],
              ["/benefits", "Benefits", false],
              ["/applications", "Applications", false],
              ["/sustainability", "Sustainability", false],
              ["/gallery", "Gallery", false],
              ["/terms-and-conditions", "Terms & Conditions", true],
              ["/privacy-policy", "Privacy Policy", true]
            ].map(([to, label, external]) => (
              <li key={to as string}>
                <Link href={to as string} 
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { onClick: () => window.scrollTo(0, 0) })}
                  className="opacity-80 hover:opacity-100 hover:text-primary-glow transition"
                >
                  {label as string}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /> Industrial Area, Gujarat, India</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /> hello@altafoods.in</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-background mb-4">Newsletter</h4>
          <p className="text-sm opacity-80 mb-3">Sustainable farming tips & product updates.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input suppressHydrationWarning type="email" required placeholder="Email address" className="flex-1 rounded-full bg-background/10 px-4 py-2 text-sm placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-glow" />
            <button suppressHydrationWarning className="rounded-full bg-leaf px-4 py-2 text-sm font-semibold">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-px max-w-7xl mx-auto py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-[10px] md:text-xs opacity-70">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>© {new Date().getFullYear()} ALTA FOODS. All rights reserved.</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span>
              Developed by{" "}
              <a href="https://www.abhivorn.com/" target="_blank" rel="noreferrer" className="hover:text-primary-glow transition-colors">
                Abhivorn Technologies Pvt. Ltd
              </a>
            </span>
          </div>
          <button suppressHydrationWarning onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 hover:opacity-100 hover:text-primary-glow transition-all">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
