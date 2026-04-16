"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Disable smooth scroll on mobile — saves battery, less useful on touch
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;
    const abortController = new AbortController();

    // Defer initialization until after first paint
    const initId = typeof requestIdleCallback !== "undefined"
      ? requestIdleCallback(init)
      : (setTimeout(init, 0) as unknown as number);

    function init() {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      // Handle anchor link clicks
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
          if (!href) return;
          const target = document.querySelector(href);
          if (target) {
            lenis?.scrollTo(target as HTMLElement, { offset: -80 });
          }
        }, { signal: abortController.signal });
      });
    }

    return () => {
      if (typeof cancelIdleCallback !== "undefined") {
        cancelIdleCallback(initId);
      } else {
        clearTimeout(initId as unknown as ReturnType<typeof setTimeout>);
      }
      abortController.abort();
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
