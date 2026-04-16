export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-fsl-dark">
      {/* Hero skeleton */}
      <div className="h-[85vh] min-h-[600px] bg-black animate-pulse" />

      {/* Event list skeleton */}
      <div className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section heading skeleton */}
        <div className="mb-16">
          <div className="w-28 h-3 bg-fsl-coral/10 animate-pulse rounded mb-6" />
          <div className="w-64 h-10 bg-black/5 animate-pulse rounded mb-3" />
          <div className="w-48 h-10 bg-black/5 animate-pulse rounded" />
        </div>

        {/* Event row skeletons */}
        <div className="space-y-0">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-14 border-b border-black/[0.06]"
            >
              {/* Date */}
              <div className="lg:col-span-2">
                <div className="w-20 h-16 bg-black/5 animate-pulse rounded mb-2" />
                <div className="w-14 h-5 bg-black/[0.03] animate-pulse rounded" />
              </div>
              {/* Image */}
              <div className="lg:col-span-3 aspect-[16/10] bg-black/5 animate-pulse rounded" />
              {/* Content */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
                <div className="w-56 h-7 bg-black/5 animate-pulse rounded" />
                <div className="w-full max-w-[400px] h-4 bg-black/[0.03] animate-pulse rounded" />
                <div className="w-5/6 max-w-[360px] h-4 bg-black/[0.03] animate-pulse rounded" />
              </div>
              {/* CTA */}
              <div className="lg:col-span-2 flex items-center lg:justify-end">
                <div className="w-28 h-10 bg-black/5 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
