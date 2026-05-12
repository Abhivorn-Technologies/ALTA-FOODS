import { Leaf } from "lucide-react";
export function FloatingLeaves() {
  const leaves = Array.from({ length: 14 });
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((_, i) => {
        const left = (i * 73) % 100;
        const delay = (i * 1.3) % 12;
        const size = 14 + ((i * 7) % 28);
        return (
          <Leaf
            key={i}
            className="absolute text-primary-glow/40 animate-drift"
            style={{
              left: `${left}%`,
              bottom: `-${20 + (i % 5) * 10}px`,
              width: size, height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${10 + (i % 6) * 2}s`,
            }}
          />
        );
      })}
    </div>
  );
}
