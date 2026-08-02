"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

type HeadingRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

/** Word-level stagger reveal for a short h1 headline (plain fade fallback under reduced motion). */
export function HeadingReveal({ text, className, delay = 0 }: HeadingRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-1 align-top">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: shouldReduceMotion ? 0 : "110%", opacity: shouldReduceMotion ? 0 : 1 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.h1>
  );
}
