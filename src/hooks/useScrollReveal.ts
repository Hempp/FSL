"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const [node, setNode] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Stable ref values to avoid effect re-runs on every render
  const thresholdRef = useRef(threshold);
  const rootMarginRef = useRef(rootMargin);
  const onceRef = useRef(once);
  thresholdRef.current = threshold;
  rootMarginRef.current = rootMargin;
  onceRef.current = once;

  // Use callback ref so we know exactly when the DOM node is attached
  const ref = useCallback((el: T | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (onceRef.current) observer.unobserve(node);
        } else if (!onceRef.current) {
          setIsVisible(false);
        }
      },
      { threshold: thresholdRef.current, rootMargin: rootMarginRef.current }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return { ref, isVisible };
}
