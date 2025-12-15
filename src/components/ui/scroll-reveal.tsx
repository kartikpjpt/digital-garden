"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 20, filter: "blur(10px)" }
        }
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className = "",
  wordDelay = 0.05,
  as: Component = "p",
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(" ");

  return (
    <Component ref={ref as any} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(8px)" }
          }
          transition={{
            duration: 0.8,
            delay: index * wordDelay,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};
