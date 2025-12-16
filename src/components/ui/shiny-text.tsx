"use client";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface ShinyTextProps {
  children: string;
  className?: string;
  shimmerWidth?: number;
}

export const ShinyText = ({
  children,
  className = "",
  shimmerWidth = 100,
}: ShinyTextProps) => {
  return (
    <motion.span
      initial={{ backgroundPosition: "200% center" }}
      whileInView={{ backgroundPosition: "-200% center" }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.2,
      }}
      style={
        {
          backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)`,
          backgroundSize: "200% auto",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "inherit",
        } as CSSProperties
      }
      className={className}
    >
      {children}
    </motion.span>
  );
};
