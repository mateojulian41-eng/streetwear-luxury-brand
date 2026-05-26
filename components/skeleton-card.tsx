export function SkeletonCard() {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[3/4] bg-card/50 animate-pulse" />
      <div className="space-y-2">
        <div className="h-3 w-20 bg-card/50 animate-pulse rounded" />
        <div className="h-6 w-3/4 bg-card/50 animate-pulse rounded" />
        <div className="h-4 w-1/3 bg-card/50 animate-pulse rounded" />
      </div>
    </div>
  );
}
