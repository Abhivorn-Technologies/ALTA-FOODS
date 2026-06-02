"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/quality", label: "Quality" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 rounded-2xl md:rounded-full border ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-border shadow-elevated py-0.5"
          : "bg-background/80 backdrop-blur-xl border-white/20 py-1 shadow-soft"
      }`}
    >
      <div className="container-px mx-auto">
        <nav className="flex items-center justify-between transition-all">
          <Link href="/" prefetch={false} className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="ALTA FOODS logo"
              className="h-14 md:h-16 w-auto object-contain scale-110 origin-left"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    prefetch={false}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
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
            <Link
              href="/contact"
              prefetch={false}
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-leaf text-primary-foreground px-6 py-2.5 text-sm font-semibold shadow-soft hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Leaf className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Get a Quote</span>
            </Link>
          </div>

          <button
            suppressHydrationWarning
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
                      <Link
                        href={l.to}
                        prefetch={false}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent ${isActive ? "bg-accent text-primary" : ""}`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
                <Link
                  href="/contact"
                  prefetch={false}
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
