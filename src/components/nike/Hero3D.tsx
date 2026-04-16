"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sportColors = ["#0052FE", "#FF7900", "#00D17E", "#E9BB00", "#F4767C", "#CC2222"];
const sportNames = ["Basketball", "Football", "Soccer", "Golf", "Track", "Baseball"];

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [activeSport, setActiveSport] = useState(0);
  const isMobileRef = useRef(false);
  const lastMoveRef = useRef<number>(0);

  /* ── Mouse tracking (throttled ~100ms, disabled on mobile) ── */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobileRef.current) return;
    const now = performance.now();
    if (now - lastMoveRef.current < 100) return;
    lastMoveRef.current = now;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const updateMobile = () => { isMobileRef.current = mql.matches; };
    updateMobile();
    mql.addEventListener("change", updateMobile);
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => {
      mql.removeEventListener("change", updateMobile);
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSport((p) => (p + 1) % sportNames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tiltX = -mouse.y * 15;
  const tiltY = mouse.x * 15;

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] sm:h-screen min-h-[550px] overflow-hidden bg-[#060610] cursor-crosshair select-none"
    >
      {/* ── Background image with parallax ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-20px] transition-transform duration-[1.5s] ease-out"
          style={{ transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)` }}
        >
          <Image
            src="/images/urban/hero-streetball.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: "contrast(1.15) brightness(0.2) saturate(0.35)" }}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
          />
        </div>
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* ── Ambient glow (shifts with active sport, follows logo position) ── */}
      <div
        className="absolute top-[40%] left-1/2 lg:left-auto lg:right-[15%] -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-20 blur-[150px] transition-all duration-[2s]"
        style={{
          background: `radial-gradient(circle, ${sportColors[activeSport]}50, transparent 65%)`,
          transform: `translateY(-50%) translate(${mouse.x * 25}px, ${mouse.y * 25}px)`,
        }}
      />

      {/* ═══════════════════════════════════════════════
          ══  MAIN CONTENT LAYOUT  ══
          Mobile: logo top-center, text below
          Desktop: logo right, text left-bottom
          ═══════════════════════════════════════════════ */}

      {/* ── 3D LOGO STAGE ── */}
      <div
        className="absolute inset-0 flex items-start sm:items-center justify-center lg:justify-end lg:pr-[10%] xl:pr-[12%] pt-[15vh] sm:pt-0 sm:pb-20"
        style={{ perspective: "1000px" }}
      >
        <div
          className={`relative transition-all ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: loaded
              ? "transform 0.12s ease-out, opacity 1.2s cubic-bezier(0.16,1,0.3,1), scale 1.2s cubic-bezier(0.16,1,0.3,1)"
              : "opacity 1.2s, scale 1.2s",
            transitionDelay: loaded ? "0s, 0.3s, 0.3s" : "0s",
          }}
        >
          {/* ── Drop shadow on ground plane ── */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[200px] h-[40px] rounded-full bg-black/50 blur-[25px]"
            style={{
              bottom: "-40px",
              transform: `translateX(calc(-50% + ${mouse.x * -8}px)) translateZ(-50px)`,
            }}
          />

          {/* ── Back glow ring ── */}
          <div
            className="absolute inset-[-60px] rounded-full transition-all duration-[2s]"
            style={{
              transform: "translateZ(-20px)",
              background: `radial-gradient(circle, ${sportColors[activeSport]}12, transparent 55%)`,
            }}
          />

          {/* ── Outer ring / orbit track (hidden on mobile) ── */}
          <div
            className="absolute inset-[-50px] rounded-full border border-white/[0.04] hidden sm:block"
            style={{ transform: "translateZ(-10px)" }}
          />
          <div
            className="absolute inset-[-80px] rounded-full border border-white/[0.02] hidden sm:block"
            style={{ transform: "translateZ(-15px)" }}
          />

          {/* ── THE LOGO ── */}
          <div
            className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] xl:w-[360px] xl:h-[360px]"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Glass platform behind logo */}
            <div
              className="absolute inset-[-15px] rounded-[32px] border border-white/[0.08] backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                transform: "translateZ(-20px)",
              }}
            />

            {/* Logo image */}
            <Image
              src="/images/ft-logo-4x-v2.png"
              alt="Fundamental Sports Labs"
              fill
              sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, (max-width: 1024px) 320px, 360px"
              className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              style={{
                filter: "contrast(1.08) saturate(1.1) brightness(1.1)",
              }}
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
            />

            {/* Highlight reflection on top */}
            <div
              className="absolute inset-0 rounded-[24px] pointer-events-none"
              style={{
                background: "linear-gradient(170deg, rgba(255,255,255,0.12) 0%, transparent 40%)",
                transform: "translateZ(5px)",
              }}
            />
          </div>

          {/* ── Orbiting sport dots (hidden on small mobile) ── */}
          {sportColors.map((color, idx) => {
            const angle = (idx / sportColors.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 180;
            const baseX = Math.cos(angle) * radius;
            const baseY = Math.sin(angle) * radius;
            const isActive = activeSport === idx;

            return (
              <div
                key={sportNames[idx]}
                className="absolute top-1/2 left-1/2 pointer-events-none hidden sm:block"
                style={{
                  transform: `translate(-50%, -50%) translateZ(${30 + idx * 6}px) translate(${
                    baseX + mouse.x * (12 + idx * 4)
                  }px, ${baseY + mouse.y * (12 + idx * 4)}px)`,
                  transition: "transform 0.25s ease-out",
                }}
              >
                <div
                  className={`rounded-full transition-all duration-700 ${
                    isActive ? "w-4 h-4 md:w-5 md:h-5" : "w-2.5 h-2.5 md:w-3 md:h-3"
                  }`}
                  style={{
                    backgroundColor: color,
                    boxShadow: isActive
                      ? `0 0 25px ${color}90, 0 0 50px ${color}40`
                      : `0 0 10px ${color}40`,
                    opacity: isActive ? 1 : 0.4,
                  }}
                />
                {/* Sport label */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 mt-2.5 font-redhat text-[9px] md:text-[10px] uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-500 font-semibold ${
                    isActive ? "opacity-90" : "opacity-0"
                  }`}
                  style={{ color }}
                >
                  {sportNames[idx]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          ══  TEXT & CTA (bottom layer)  ══
          ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-4 sm:px-6 md:px-16 lg:px-24 pb-28 sm:pb-36 md:pb-44 pointer-events-none">
        <div className="max-w-[900px]">
          <p
            className={`font-redhat text-[11px] uppercase tracking-[0.4em] text-fsl-coral/80 font-medium flex items-center gap-3 mb-4 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-10 h-[1px] bg-fsl-coral/60" />
            Fundamental Sports Labs
          </p>
          <h1
            className={`font-barlow text-[36px] sm:text-[52px] md:text-[80px] lg:text-[110px] xl:text-[140px] font-bold text-white uppercase leading-[0.92] sm:leading-[0.88] tracking-[-0.025em] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ textShadow: "0 4px 80px rgba(0,0,0,0.5)" }}
          >
            Leaders<br />of Tomorrow
          </h1>
          <p
            className={`font-redhat text-[14px] md:text-[15px] text-white/30 font-normal mt-5 max-w-[400px] leading-[1.8] transition-all duration-1000 delay-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Six sports. Four pillars. Zero cost. Free youth sports
            and life skills programming in Los Angeles.
          </p>
        </div>
      </div>

      {/* ── Now Playing badge (below headline, left-aligned) ── */}
      <div className="absolute left-4 sm:left-6 md:left-16 lg:left-24 bottom-[72px] sm:bottom-[90px] md:bottom-[135px] z-10 pointer-events-none">
        {sportNames.map((name, idx) => (
          <div
            key={name}
            className={`absolute left-0 bottom-0 transition-all duration-700 ${
              activeSport === idx
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: sportColors[idx],
                  boxShadow: `0 0 12px ${sportColors[idx]}80`,
                }}
              />
              <p className="font-redhat text-[10px] font-semibold uppercase tracking-[0.35em] text-white/25">
                Now Playing
              </p>
              <p
                className="font-barlow text-[22px] md:text-[28px] font-bold uppercase tracking-[-0.01em]"
                style={{ color: sportColors[idx] }}
              >
                {name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA buttons ── */}
      <div className="absolute bottom-10 sm:bottom-12 left-4 right-4 sm:left-6 sm:right-auto md:left-16 lg:left-24 z-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/join"
          className="group relative bg-white text-black px-9 py-4 rounded-full font-redhat text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.3)] text-center"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            Join Now
          </span>
          <div className="absolute inset-0 bg-fsl-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-full" />
        </Link>
        <a
          href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/25 text-white/70 px-9 py-4 rounded-full font-redhat text-[12px] font-medium uppercase tracking-[0.15em] hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-500 text-center"
        >
          Donate
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 transition-all duration-1000 delay-[1.5s] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-redhat text-[9px] uppercase tracking-[0.4em] text-white/15">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
          <div className="w-full h-3 bg-fsl-coral/50 absolute animate-[slideDown_2s_infinite]" />
        </div>
      </div>

      {/* ── Sport progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.03] z-10">
        <div
          className="h-full transition-all duration-700"
          style={{
            width: `${((activeSport + 1) / sportNames.length) * 100}%`,
            backgroundColor: sportColors[activeSport],
          }}
        />
      </div>
    </section>
  );
}
