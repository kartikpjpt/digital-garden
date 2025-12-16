"use client";
import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  animateBy?: "character" | "word";
}

export const SplitText = ({
  children,
  className = "",
  delay = 0,
  animateBy = "character",
}: SplitTextProps) => {
  const text = children;
  const elements = animateBy === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {elements.map((element, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.span>
  );
};
