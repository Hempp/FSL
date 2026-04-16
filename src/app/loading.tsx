export default function Loading() {
  return (
    <div className="min-h-screen bg-fsl-dark flex flex-col items-center justify-center px-6">
      {/* Pulsing logo placeholder */}
      <div className="w-24 h-24 rounded-full bg-white/5 animate-pulse mb-10" />

      {/* Skeleton heading bar */}
      <div className="w-64 h-6 bg-white/5 animate-pulse rounded mb-4" />

      {/* Skeleton subtitle bar */}
      <div className="w-48 h-4 bg-white/[0.03] animate-pulse rounded mb-8" />

      {/* Skeleton content blocks */}
      <div className="w-full max-w-xl space-y-3">
        <div className="h-3 bg-white/[0.03] animate-pulse rounded w-full" />
        <div className="h-3 bg-white/[0.03] animate-pulse rounded w-5/6" />
        <div className="h-3 bg-white/[0.03] animate-pulse rounded w-4/6" />
      </div>
    </div>
  );
}
