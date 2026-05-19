"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/benefits", label: "Benefits" },
  { to: "/applications", label: "Applications" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 rounded-2xl md:rounded-full border ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-border shadow-elevated py-1" 
          : "bg-background/80 backdrop-blur-xl border-white/20 py-2 shadow-soft"
      }`}
    >
      <div className="container-px mx-auto">
        <nav className="flex items-center justify-between transition-all">
          <Link href="/" className="flex items-center gap-2 group">
            <img src={typeof logo === 'object' ? logo.src : logo} alt="ALTA FOODS logo" className="h-9 w-9 object-contain" />
            <div className="leading-tight">
              <div className="font-display font-bold tracking-tight text-foreground">ALTA FOODS</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Protecting Fruits Naturally</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
              <li key={l.to}>
                <Link href={l.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-leaf rounded-full"
                    />
                  )}
                </Link>
              </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex">
            <Link href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
            >
              <Leaf className="h-4 w-4" /> Get a Quote
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg glass"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4"
            >
              <ul className="grid gap-1">
                {links.map((l) => {
                  const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                  return (
                  <li key={l.to}>
                    <Link href={l.to}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent ${isActive ? "bg-accent text-primary" : ""}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                  );
                })}
                <Link href="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-leaf text-primary-foreground px-5 py-2.5 text-sm font-semibold"
                >
                  Get a Quote
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
