"use client";

import { useEffect } from "react";

/**
 * Fires onEnter each time the target element scrolls into view.
 * Unlike useReveal, this does NOT disconnect after the first trigger —
 * scrolling away and back replays the callback.
 *
 * @param {React.RefObject} ref - ref attached to the element to observe
 * @param {() => void} onEnter - callback fired on each enter
 * @param {{ threshold?: number }} options
 */
export default function useScrollPlay(ref, onEnter, { threshold = 0.3 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onEnter();
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, onEnter, threshold]);
}
