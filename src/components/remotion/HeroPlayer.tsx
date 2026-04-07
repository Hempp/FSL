"use client";

import { Player } from "@remotion/player";
import { HeroComposition } from "./HeroComposition";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroPlayer() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Remotion Player — VISUAL BACKGROUND ONLY (no text) */}
      {mounted ? (
        <div className="absolute inset-0">
          <Player
            component={HeroComposition}
            compositionWidth={1440}
            compositionHeight={900}
            durationInFrames={360}
            fps={30}
            loop
            autoPlay
            style={{ width: "100%", height: "100%" }}
            controls={false}
            showVolumeControls={false}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[#0040cc]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50" />
        </div>
      )}

      {/* DOM text overlay — crisp, no rendering artifacts */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-32 md:pb-40 pointer-events-none">
        <div className="max-w-[800px]">
          <p
            className={`font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-10 h-[1px] bg-fsl-coral/60" />
            Fundamental Sports Labs
          </p>
          <h1
            className={`font-barlow text-[52px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[150px] font-bold text-white uppercase leading-[0.88] tracking-[-0.025em] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ textShadow: "0 4px 60px rgba(0,0,0,0.4)" }}
          >
            Leaders<br />of Tomorrow
          </h1>
          <p
            className={`font-redhat text-[14px] md:text-[15px] text-white/40 font-normal mt-5 max-w-[380px] leading-[1.8] transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Developing the fundamentals of sports, structure, and discipline that transition into every area of life.
          </p>
        </div>
      </div>

      {/* Interactive buttons */}
      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 z-10 flex gap-3">
        <Link
          href="/join"
          className="group relative bg-white text-black px-9 py-[14px] rounded-full font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.3)]"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Join Now</span>
          <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
        </Link>
        <a
          href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/25 text-white/70 px-9 py-[14px] rounded-full font-redhat text-[12px] font-medium uppercase tracking-[0.15em] hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-500"
        >
          Donate
        </a>
      </div>
    </section>
  );
}
