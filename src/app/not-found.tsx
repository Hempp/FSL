import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-fsl-dark px-6 text-center text-white">
      <h1 className="font-barlow text-[10rem] font-bold leading-none tracking-tight text-fsl-coral">
        404
      </h1>
      <p className="mt-4 font-barlow text-3xl font-semibold uppercase tracking-wide">
        Page not found
      </p>
      <p className="mt-3 max-w-md text-lg text-fsl-light-gray">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-lg bg-fsl-coral px-8 py-3 font-barlow text-lg font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-fsl-coral/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fsl-coral"
      >
        Back to Home
      </Link>
    </main>
  );
}
