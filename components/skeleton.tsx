export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-card/50 rounded ${className}`}
      style={{
        backgroundImage: "linear-gradient(90deg, oklch(0.14 0 0) 0%, oklch(0.18 0 0) 50%, oklch(0.14 0 0) 100%)",
        backgroundSize: "200% 100%",
        animation: "skeleton-loading 1.5s ease-in-out infinite",
      }}
    />
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-card border border-border/50">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="mt-5 space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-1/4" />
          <div className="h-px flex-1 mx-4 bg-border/30" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6 max-w-6xl mx-auto space-y-8">
        <Skeleton className="h-4 w-48 mx-auto" />
        <div className="space-y-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-4 w-64 mx-auto" />
        <Skeleton className="h-14 w-64 mx-auto" />
      </div>
    </div>
  )
}
