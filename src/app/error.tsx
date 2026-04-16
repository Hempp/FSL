"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-fsl-dark px-6 text-center text-white">
      <div className="font-barlow text-8xl font-bold leading-none tracking-tight text-fsl-coral">
        Oops
      </div>
      <p className="mt-6 font-barlow text-3xl font-semibold uppercase tracking-wide">
        Something went wrong
      </p>
      <p className="mt-3 max-w-md text-lg text-fsl-light-gray">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-10 inline-block cursor-pointer rounded-lg bg-fsl-coral px-8 py-3 font-barlow text-lg font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-fsl-coral/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fsl-coral"
      >
        Try Again
      </button>
    </main>
  );
}
