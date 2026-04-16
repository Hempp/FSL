export default function ProgramsLoading() {
  return (
    <div className="min-h-screen bg-fsl-dark">
      {/* Hero skeleton */}
      <div className="h-[85vh] min-h-[600px] bg-black animate-pulse" />

      {/* Program cards skeleton */}
      <div className="bg-white py-20 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section heading skeleton */}
        <div className="mb-16">
          <div className="w-32 h-3 bg-fsl-coral/10 animate-pulse rounded mb-6" />
          <div className="w-72 h-10 bg-black/5 animate-pulse rounded mb-3" />
          <div className="w-56 h-10 bg-black/5 animate-pulse rounded" />
        </div>

        {/* Card skeletons */}
        <div className="space-y-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#fafafa] overflow-hidden"
            >
              <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px] bg-black/5 animate-pulse" />
              <div className="p-8 md:p-16 flex flex-col justify-center space-y-4">
                <div className="w-10 h-[3px] bg-black/5 animate-pulse rounded" />
                <div className="w-48 h-8 bg-black/5 animate-pulse rounded" />
                <div className="w-full max-w-[400px] h-4 bg-black/[0.03] animate-pulse rounded" />
                <div className="w-5/6 max-w-[360px] h-4 bg-black/[0.03] animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
