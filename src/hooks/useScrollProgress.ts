"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/**
 * Tracks scroll progress of an element through the viewport.
 * Returns a value from 0 (element just entered bottom) to 1 (element left top).
 * Also returns the raw scroll Y for parallax effects.
 */
export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const rafRef = useRef<number>(0);

  const ref = useCallback((el: HTMLElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrollY(y);

        if (node) {
          const rect = node.getBoundingClientRect();
          const vh = window.innerHeight;
          // 0 when top of element is at bottom of viewport
          // 1 when bottom of element is at top of viewport
          const p = 1 - (rect.bottom / (vh + rect.height));
          setProgress(Math.max(0, Math.min(1, p)));
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [node]);

  return { ref, scrollY, progress };
}
