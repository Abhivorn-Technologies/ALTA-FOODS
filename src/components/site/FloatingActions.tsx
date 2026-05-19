import { WhatsAppIcon } from "./WhatsAppIcon";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/919876543210?text=Hi%20ALTA%20FOODS%2C%20I'd%20like%20to%20know%20more%20about%20your%20paper%20fruit%20cover%20bags."
        target="_blank" rel="noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-elevated"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+919876543210"
        aria-label="Call"
        className="h-14 w-14 grid place-items-center rounded-full bg-leaf text-primary-foreground shadow-elevated"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
    </div>
  );
}
