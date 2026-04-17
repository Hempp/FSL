"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sportColors = ["#0052FE", "#FF7900", "#00D17E", "#E9BB00", "#F4767C", "#CC2222"];
const sportNames = ["Basketball", "Football", "Soccer", "Golf", "Track", "Baseball"];
const sportEmoji = ["\u{1F3C0}", "\u{1F3C8}", "\u26BD", "\u26F3", "\u{1F3C3}", "\u26BE"];

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [activeSport, setActiveSport] = useState(0);
  const [pulsePhase, setPulsePhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobileRef = useRef(false);
  const lastMoveRef = useRef<number>(0);
  const scrollRafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobileRef.current) return;
    const now = performance.now();
    if (now - lastMoveRef.current < 80) return;
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
    if (el) el.addEventListener("mousemove", handleMouseMove, { passive: true });
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

  // Pulse animation for rings
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((p) => (p + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Scroll-driven parallax — shield reacts to scroll position
  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 at top, 1 when hero has scrolled fully out
        const p = Math.max(0, Math.min(1, -rect.top / vh));
        setScrollProgress(p);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(scrollRafRef.current);
    };
  }, []);

  const tiltX = -mouse.y * 12 + scrollProgress * 15;
  const tiltY = mouse.x * 12 + scrollProgress * -10;
  const pulseScale = 1 + Math.sin(pulsePhase * 0.05) * 0.03;
  const scrollScale = 1 + scrollProgress * 0.15;
  const scrollOpacity = 1 - scrollProgress * 0.8;

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] sm:h-screen min-h-[550px] overflow-hidden bg-[#040408] cursor-crosshair select-none"
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
            style={{ filter: "contrast(1.15) brightness(0.15) saturate(0.3)" }}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDQwNDA4Ii8+PC9zdmc+"
          />
        </div>
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* ── Animated grid that pulses with sport color ── */}
      <div
        className="absolute inset-0 opacity-[0.02] transition-opacity duration-[2s]"
        style={{
          backgroundImage: `linear-gradient(${sportColors[activeSport]}60 1px, transparent 1px), linear-gradient(90deg, ${sportColors[activeSport]}60 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Multi-layer ambient glow ── */}
      <div
        className="absolute top-[35%] left-1/2 lg:left-auto lg:right-[18%] -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-15 blur-[120px] transition-all duration-[2s]"
        style={{
          background: `radial-gradient(circle, ${sportColors[activeSport]}60, transparent 60%)`,
          transform: `translateY(-50%) translate(${mouse.x * 30}px, ${mouse.y * 30}px)`,
        }}
      />
      {/* Secondary glow — opposite color */}
      <div
        className="absolute top-[60%] left-[20%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full opacity-10 blur-[100px] transition-all duration-[3s] hidden sm:block"
        style={{
          background: `radial-gradient(circle, ${sportColors[(activeSport + 3) % 6]}50, transparent 65%)`,
        }}
      />

      {/* ═══════════════════════════════════════════════
          ══  3D LOGO STAGE — PREMIUM ANIMATION  ══
          ═══════════════════════════════════════════════ */}
      <div
        className="absolute top-0 left-0 right-0 h-[45vh] sm:h-auto sm:inset-0 flex items-center justify-center lg:justify-end lg:pr-[8%] xl:pr-[12%] sm:pb-16 pointer-events-none"
        style={{ perspective: "1200px" }}
      >
        <div
          className={`relative transition-all ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scrollScale})`,
            opacity: scrollOpacity,
            transition: loaded
              ? "transform 0.15s ease-out, opacity 0.15s ease-out"
              : "opacity 1.5s, scale 1.5s",
            transitionDelay: loaded ? "0s" : "0.2s",
          }}
        >
          {/* ── Animated pulsing rings ── */}
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute inset-0 rounded-full border hidden sm:block"
              style={{
                inset: `${-40 * ring}px`,
                borderColor: `${sportColors[activeSport]}${ring === 1 ? "15" : ring === 2 ? "08" : "04"}`,
                transform: `translateZ(${-10 * ring}px) scale(${pulseScale + ring * 0.01})`,
                transition: "border-color 2s",
              }}
            />
          ))}

          {/* ── Rotating orbit ring with dash pattern ── */}
          <div
            className="absolute rounded-full border border-dashed hidden md:block"
            style={{
              inset: "-70px",
              borderColor: `${sportColors[activeSport]}12`,
              transform: `translateZ(-5px) rotate(${pulsePhase * 0.3}deg)`,
              transition: "border-color 2s",
            }}
          />

          {/* ── Floating ground shadow ── */}
          <div
            className="absolute left-1/2 w-[60%] h-[20px] rounded-full bg-black/40 blur-[20px] hidden sm:block"
            style={{
              bottom: "-50px",
              transform: `translateX(calc(-50% + ${mouse.x * -10}px)) translateZ(-60px) scaleX(${pulseScale})`,
            }}
          />

          {/* ── THE 3D SHIELD — Main logo with floating animation ── */}
          <div
            className="relative w-[260px] h-[290px] max-h-[38vh] sm:max-h-none sm:w-[320px] sm:h-[355px] md:w-[380px] md:h-[425px] lg:w-[440px] lg:h-[490px] xl:w-[500px] xl:h-[560px]"
            style={{
              transform: `translateZ(60px) translateY(${Math.sin(pulsePhase * 0.03) * 6}px)`,
              transition: "width 0.3s, height 0.3s",
            }}
          >
            {/* Multi-layer glow behind shield */}
            <div
              className="absolute inset-[-40px] rounded-full opacity-50 blur-[80px] transition-all duration-[2s]"
              style={{
                background: `radial-gradient(circle, ${sportColors[activeSport]}35, transparent 65%)`,
                transform: `translateZ(-40px) scale(${pulseScale})`,
              }}
            />
            {/* Inner bright glow */}
            <div
              className="absolute inset-[-15px] rounded-full opacity-30 blur-[30px] transition-all duration-[2s]"
              style={{
                background: `radial-gradient(circle, ${sportColors[activeSport]}50, transparent 60%)`,
                transform: "translateZ(-20px)",
              }}
            />

            {/* Shield image */}
            <Image
              src="/images/sports-hero-3d.png"
              alt="Fundamental Sports Labs — Basketball, Football, Soccer, Golf, Baseball, and Science"
              fill
              sizes="(max-width: 640px) 130px, (max-width: 768px) 210px, (max-width: 1024px) 300px, 420px"
              className="object-contain"
              style={{
                filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 30px ${sportColors[activeSport]}20)`,
                transition: "filter 2s",
              }}
              priority
            />

            {/* Animated light sweep across shield */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]"
              style={{ transform: "translateZ(5px)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${105 + pulsePhase * 0.5}deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)`,
                }}
              />
            </div>
          </div>

          {/* ── ORBITING SPORT ICONS (emoji + glow trails) ── */}
          {sportColors.map((color, idx) => {
            const time = pulsePhase * 0.008;
            const angle = (idx / sportColors.length) * Math.PI * 2 - Math.PI / 2 + time;
            const radiusX = 200;
            const radiusY = 180;
            const baseX = Math.cos(angle) * radiusX;
            const baseY = Math.sin(angle) * radiusY;
            const isActive = activeSport === idx;
            const z = Math.sin(angle) * 40;

            return (
              <div
                key={sportNames[idx]}
                className="absolute top-1/2 left-1/2 pointer-events-none hidden sm:block"
                style={{
                  transform: `translate(-50%, -50%) translateZ(${z + 30}px) translate(${
                    baseX + mouse.x * 8
                  }px, ${baseY + mouse.y * 8}px)`,
                  transition: "opacity 0.5s",
                  zIndex: z > 0 ? 2 : 0,
                }}
              >
                {/* Glow trail */}
                <div
                  className="absolute inset-[-8px] rounded-full blur-[12px] transition-all duration-700"
                  style={{
                    backgroundColor: `${color}${isActive ? "50" : "15"}`,
                  }}
                />
                {/* Sport dot */}
                <div
                  className={`rounded-full transition-all duration-700 flex items-center justify-center ${
                    isActive
                      ? "w-8 h-8 md:w-10 md:h-10"
                      : "w-4 h-4 md:w-5 md:h-5"
                  }`}
                  style={{
                    backgroundColor: isActive ? `${color}30` : `${color}20`,
                    border: `2px solid ${color}${isActive ? "80" : "30"}`,
                    boxShadow: isActive
                      ? `0 0 20px ${color}60, 0 0 40px ${color}25, inset 0 0 10px ${color}20`
                      : `0 0 8px ${color}20`,
                  }}
                >
                  <span
                    className={`transition-all duration-500 ${
                      isActive ? "text-[16px] md:text-[20px] opacity-100" : "text-[8px] opacity-0"
                    }`}
                  >
                    {sportEmoji[idx]}
                  </span>
                </div>
                {/* Sport label */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 mt-3 font-barlow text-[9px] md:text-[10px] uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500 font-bold ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ color, textShadow: `0 0 20px ${color}60` }}
                >
                  {sportNames[idx]}
                </span>
              </div>
            );
          })}

          {/* ── Floating particles ── */}
          {loaded && [0, 1, 2, 3, 4].map((i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full hidden md:block"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                backgroundColor: `${sportColors[(activeSport + i) % 6]}40`,
                boxShadow: `0 0 6px ${sportColors[(activeSport + i) % 6]}30`,
                transform: `translateZ(${20 + i * 10}px) translateY(${Math.sin((pulsePhase + i * 72) * 0.04) * 15}px)`,
                transition: "background-color 2s, box-shadow 2s",
              }}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          ══  TEXT & CTA  ══
          ═══════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55vh] sm:h-auto sm:inset-0 z-10 flex flex-col justify-end px-4 sm:px-6 md:px-16 lg:px-24 pb-20 sm:pb-36 md:pb-44 pointer-events-none"
        style={{
          transform: `translateY(${scrollProgress * -60}px)`,
          opacity: 1 - scrollProgress * 1.5,
        }}
      >
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

      {/* ── Now Playing badge ── */}
      <div
        className="absolute left-4 sm:left-6 md:left-16 lg:left-24 bottom-[56px] sm:bottom-[70px] md:bottom-[135px] z-10 pointer-events-none hidden sm:block"
        style={{
          transform: `translateY(${scrollProgress * -40}px)`,
          opacity: 1 - scrollProgress * 2,
        }}
      >
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
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{
                  backgroundColor: sportColors[idx],
                  boxShadow: `0 0 15px ${sportColors[idx]}80`,
                }}
              />
              <p className="font-redhat text-[10px] font-semibold uppercase tracking-[0.35em] text-white/25">
                Now Playing
              </p>
              <p
                className="font-barlow text-[22px] md:text-[28px] font-bold uppercase tracking-[-0.01em]"
                style={{
                  color: sportColors[idx],
                  textShadow: `0 0 30px ${sportColors[idx]}40`,
                }}
              >
                {name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA buttons ── */}
      <div
        className="absolute bottom-10 sm:bottom-12 left-4 sm:left-6 md:left-16 lg:left-24 z-10 flex flex-row gap-3"
        style={{
          transform: `translateY(${scrollProgress * -30}px)`,
          opacity: 1 - scrollProgress * 2,
        }}
      >
        <Link
          href="/join"
          className="group relative bg-white text-black px-6 sm:px-9 py-3 sm:py-4 rounded-full font-redhat text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.15em] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(244,118,124,0.3)]"
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
          className="border border-white/25 text-white/70 px-6 sm:px-9 py-3 sm:py-4 rounded-full font-redhat text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.15em] hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-500"
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
            boxShadow: `0 0 20px ${sportColors[activeSport]}60`,
          }}
        />
      </div>
    </section>
  );
}
