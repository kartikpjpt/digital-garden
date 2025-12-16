"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextTypeProps {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TextType = ({
  children,
  className = "",
  delay = 0,
  speed = 30,
}: TextTypeProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex <= children.length) {
          setDisplayedText(children.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [children, delay, speed, isVisible]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};
