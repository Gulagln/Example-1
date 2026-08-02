"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

/**
 * Subtle scroll parallax for a background layer only (never text/controls).
 * Falls back to a static layer when the user prefers reduced motion.
 */
export function ParallaxLayer({
  children,
  className,
  speed = 10,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let cleanup = () => {};

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.to(el, {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            scrub: 0.6,
          },
        });
      });

      cleanup = () => context.revert();
    })();

    return () => cleanup();
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
