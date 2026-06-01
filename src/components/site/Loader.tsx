"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-background">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="h-16 w-16 mx-auto rounded-full bg-leaf grid place-items-center shadow-glow"
        >
          <Leaf className="h-7 w-7 text-primary-foreground" />
        </motion.div>
        <div className="mt-4 font-display font-bold tracking-widest">ALTA FOODS</div>
      </motion.div>
    </div>
  );
}
