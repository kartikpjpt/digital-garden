"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicCard = ({ children, className }: MagicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn("relative group h-full", className)}
    >
      {/* Animated gradient border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(161, 161, 170, 0.5), transparent 40%)`,
        }}
      />

      {/* Static gradient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-zinc-400/20 via-zinc-300/20 to-zinc-400/20 blur-xl" />

      {/* Card content */}
      <div className="relative h-full rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 group-hover:border-zinc-600 transition-colors">
        {children}
      </div>
    </div>
  );
};
