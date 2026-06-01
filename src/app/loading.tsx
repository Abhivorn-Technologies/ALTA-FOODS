export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-glow"></div>
        <p className="text-primary font-medium animate-pulse">Loading ALTA FOODS...</p>
      </div>
    </div>
  );
}
