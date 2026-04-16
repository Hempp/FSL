"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Self-contained count-up hook with its own visibility detection.
 * Returns { ref, display } where ref is a callback ref to attach to the counter element.
 * Starts counting when the element enters the viewport.
 * Fallback: if IntersectionObserver hasn't triggered within 3 seconds of mount, starts anyway.
 */
export function useCountUp(
  end: number,
  duration: number = 2000,
  suffix: string = ""
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedRef = useRef(false);

  // Callback ref for the DOM element
  const ref = useCallback((el: HTMLElement | null) => {
    setNode(el);
  }, []);

  // Stable trigger that only fires once
  const triggerStart = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    setHasStarted(true);
  }, []);

  // Set up IntersectionObserver + fallback timer
  useEffect(() => {
    if (hasStartedRef.current) return;

    // Fallback: start counting after 3 seconds regardless
    fallbackTimerRef.current = setTimeout(() => {
      triggerStart();
    }, 3000);

    if (!node) {
      return () => {
        if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerStart();
          observer.disconnect();
          if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [node, triggerStart]);

  // Run the count-up animation
  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, hasStarted, duration]);

  return { ref, display: `${count.toLocaleString()}${suffix}` };
}
