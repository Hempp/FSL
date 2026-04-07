"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export function NikeHero() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => { setTimeout(() => setLoaded(true), 400); }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-[#0040cc] cursor-default">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 animate-[gradientShift_8s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, #0052FE 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #003ad6 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #0046e0 0%, transparent 50%)",
          }}
        />
        {/* Warm accent blob */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[200px] opacity-20 transition-transform duration-[2s] ease-out"
          style={{
            background: "radial-gradient(circle, #F4767C 0%, transparent 70%)",
            left: "10%",
            bottom: "-10%",
            transform: `translate(${mouse.x * 30}px, ${mouse.y * 20}px)`,
          }}
        />
      </div>

      {/* Hero image — real urban basketball court, parallax layer */}
      <div
        className="absolute inset-0 z-[1] transition-transform duration-[2s] ease-out"
        style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -5}px) scale(1.05)` }}
      >
        <Image
          src="/images/urban/hero-streetball.jpg"
          alt="Urban youth playing streetball"
          fill
          className={`object-cover transition-all duration-[1.5s] ${loaded ? "opacity-50" : "opacity-0"}`}
          style={{ filter: "contrast(1.2) brightness(0.5) saturate(0.6)", transitionDelay: "0.3s" }}
          priority
        />
      </div>

      {/* Floating sport elements — parallax depth layers */}
      {/* Basketball — foreground, moves fast */}
      <div
        className={`absolute z-[3] transition-all duration-[2s] ease-out ${loaded ? "opacity-70" : "opacity-0"}`}
        style={{
          right: "15%",
          top: "15%",
          transform: `translate(${mouse.x * 40}px, ${mouse.y * 30}px) rotate(${mouse.x * 10}deg)`,
          transitionDelay: "1s",
        }}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-[0_10px_40px_rgba(255,120,0,0.3)] animate-[float_6s_ease-in-out_infinite]" />
      </div>

      {/* Football — mid layer */}
      <div
        className={`absolute z-[3] transition-all duration-[2s] ease-out ${loaded ? "opacity-60" : "opacity-0"}`}
        style={{
          right: "8%",
          top: "55%",
          transform: `translate(${mouse.x * 25}px, ${mouse.y * 20}px) rotate(${mouse.x * -15 + 30}deg)`,
          transitionDelay: "1.3s",
        }}
      >
        <div className="w-14 h-9 md:w-16 md:h-10 rounded-[50%] bg-gradient-to-br from-amber-700 to-amber-900 shadow-[0_10px_30px_rgba(120,80,0,0.3)] animate-[float_7s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Soccer ball — background layer, moves slow */}
      <div
        className={`absolute z-[1] transition-all duration-[2s] ease-out ${loaded ? "opacity-30" : "opacity-0"}`}
        style={{
          left: "60%",
          top: "10%",
          transform: `translate(${mouse.x * 10}px, ${mouse.y * 8}px) rotate(${mouse.x * 5}deg)`,
          transitionDelay: "1.5s",
        }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/20 animate-[float_8s_ease-in-out_infinite_1s]" />
      </div>

      {/* Golf ball — small accent */}
      <div
        className={`absolute z-[3] transition-all duration-[2s] ease-out ${loaded ? "opacity-50" : "opacity-0"}`}
        style={{
          right: "30%",
          bottom: "25%",
          transform: `translate(${mouse.x * 35}px, ${mouse.y * 25}px)`,
          transitionDelay: "1.7s",
        }}
      >
        <div className="w-6 h-6 rounded-full bg-white shadow-[0_5px_20px_rgba(255,255,255,0.2)] animate-[float_5s_ease-in-out_infinite_0.3s]" />
      </div>

      {/* Cloud animation — from original */}
      <div
        className="absolute bottom-0 left-0 w-full h-[150px] z-[4]"
        style={{
          backgroundImage: "url(/images/cloud-1.png)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0 bottom",
          backgroundSize: "auto 100%",
          animation: "moveClouds 60s linear infinite",
        }}
      />

      {/* Content — parallax text layer */}
      <div
        className="absolute inset-0 z-[5] flex flex-col justify-center px-6 md:px-16 lg:px-24 pb-20"
        style={{ transform: `translate(${mouse.x * -5}px, ${mouse.y * -3}px)` }}
      >
        <div className="max-w-[800px]">
          {/* Script label */}
          <div className="overflow-hidden mb-3">
            <p className={`font-bonvivant text-[20px] md:text-[28px] text-fsl-coral transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
              Empowering the Future
            </p>
          </div>

          {/* Main headline — letter stagger animation */}
          <div className="overflow-hidden">
            <h1
              className={`font-barlow text-[52px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[170px] font-bold text-white uppercase leading-[0.87] tracking-[-0.025em] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-[105%] opacity-0"}`}
              style={{ textShadow: "0 4px 60px rgba(0,0,0,0.3), 0 0 120px rgba(0,82,254,0.3)" }}
            >
              Leaders<br />of Tomorrow
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`font-redhat text-[14px] md:text-[16px] text-white/50 font-light mt-6 max-w-[400px] leading-[1.8] transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Through sports, wellness, and technology — building fundamental skills, structure, and discipline for life.
          </p>

          {/* CTAs */}
          <div className={`flex gap-3 mt-10 transition-all duration-1000 delay-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <Link href="/join" className="group relative bg-white text-black px-9 py-[14px] rounded-full font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.3)]">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Join Now</span>
              <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
            </Link>
            <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257" target="_blank" rel="noopener noreferrer" className="border border-white/25 text-white/70 px-9 py-[14px] rounded-full font-redhat text-[12px] font-medium uppercase tracking-[0.15em] hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-500">
              Donate
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-3 transition-opacity duration-1000 delay-[1.5s] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <span className="font-redhat text-[9px] uppercase tracking-[0.4em] text-white/20">Scroll</span>
        <div className="w-[1px] h-10 relative overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-b from-white/40 to-transparent animate-[slideDown_2.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
