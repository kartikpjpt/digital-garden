"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  gradient?: boolean;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className = "",
  as: Component = "p",
  delay = 0,
  staggerDelay = 0.02,
  gradient = false,
}) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = text.split("");
    textRef.current.innerHTML = chars
      .map(
        (char) =>
          `<span class="char inline-block" style="display: inline-block; transform-origin: 50% 100%;">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    const spans = textRef.current.querySelectorAll(".char");

    gsap.fromTo(
      spans,
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        stagger: staggerDelay,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    if (gradient) {
      gsap.to(spans, {
        color: "#ffffff",
        opacity: 1,
        stagger: staggerDelay,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }
  }, [text, delay, staggerDelay, gradient]);

  return (
    <Component
      ref={textRef as any}
      className={className}
      style={{ perspective: "1000px" }}
    >
      {text}
    </Component>
  );
};

export default ScrollRevealText;
