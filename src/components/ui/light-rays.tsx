"use client";
import React, { useEffect, useRef } from "react";

const LightRays = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawRays = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const numRays = 12;
      const rayLength = Math.max(canvas.width, canvas.height) * 1.5;

      for (let i = 0; i < numRays; i++) {
        const rayAngle = (Math.PI * 2 * i) / numRays + angle;

        // Create gradient for each ray
        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(rayAngle) * rayLength,
          centerY + Math.sin(rayAngle) * rayLength
        );

        gradient.addColorStop(0, "rgba(255, 255, 255, 0.03)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.01)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rayAngle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(rayLength, -20);
        ctx.lineTo(rayLength, 20);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
      }

      // Slow rotation
      angle += 0.001;

      animationFrameId = requestAnimationFrame(drawRays);
    };

    drawRays();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        opacity: 0.4,
        zIndex: 0,
      }}
    />
  );
};

export default LightRays;
