import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-leaf z-[60]"
    />
  );
}
