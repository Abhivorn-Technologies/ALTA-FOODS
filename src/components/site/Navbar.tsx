"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { auto: false, to: "/about", label: "About" },
  { 
    to: "/products", 
    label: "Products",
    subLinks: [
      { to: "/products/mango", label: "Mango Protection Bags" },
      { to: "/products/apple", label: "Apple Protection Bags" },
      { to: "/products/banana", label: "Banana Protection Bags" },
      { to: "/products/pomegranate", label: "Pomegranate Protection Bags" },
      { to: "/products/guava", label: "Guava Protection Bags" },
    ]
  },
  // { to: "/applications", label: "Applications" },
  { to: "/quality", label: "Quality" },
  // { to: "/sustainability", label: "Sustainability" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { 
    setOpen(false); 
    setOpenMobileDropdown(null);
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
          <Link href="/" className="flex items-center group">
            <img src="/images/logo.png" alt="ALTA FOODS logo" className="h-10 md:h-12 w-auto object-contain scale-110 origin-left" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
              <li key={l.to} className="group relative">
                <Link href={l.to}
                  onClick={() => window.scrollTo(0, 0)}
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
                {l.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="glass rounded-2xl p-2 w-48 shadow-soft flex flex-col gap-1 border border-border/50">
                      {l.subLinks.map(sub => (
                        <Link 
                          key={sub.to} 
                          href={sub.to} 
                          className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <Link href={l.to}
                          onClick={() => window.scrollTo(0, 0)}
                          className={`block flex-1 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent ${isActive ? "bg-accent text-primary" : ""}`}
                        >
                          {l.label}
                        </Link>
                        {l.subLinks && (
                          <button 
                            className="p-2 mr-1"
                            onClick={() => setOpenMobileDropdown(openMobileDropdown === l.label ? null : l.label)}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${openMobileDropdown === l.label ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {l.subLinks && openMobileDropdown === l.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-border/50 ml-4 mb-2">
                              {l.subLinks.map((sub) => (
                                <Link
                                  key={sub.to}
                                  href={sub.to}
                                  onClick={() => window.scrollTo(0, 0)}
                                  className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:bg-accent hover:text-foreground"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
