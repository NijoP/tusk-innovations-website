'use client';

import React, { useEffect, useRef } from 'react';

export function HeroEngineeringBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      if (prefersReducedMotion) {
        drawStaticFrame();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / width - 0.5;
      targetMouseY = (e.clientY - rect.top) / height - 0.5;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleResize();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const drawStaticFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // Base background
      ctx.fillStyle = isDark ? '#0a0c0f' : '#faf9f5';
      ctx.fillRect(0, 0, width, height);

      // Subtle engineering grid
      const gridSize = 40;
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(20, 20, 19, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      time += 0.008;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // Adaptive background gradient
      const gradient = ctx.createRadialGradient(
        width * 0.5 + mouseX * 80,
        height * 0.4 + mouseY * 80,
        40,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      if (isDark) {
        gradient.addColorStop(0, '#13161c');
        gradient.addColorStop(0.5, '#0d0f14');
        gradient.addColorStop(1, '#0a0c0f');
      } else {
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.5, '#faf9f5');
        gradient.addColorStop(1, '#f5f3ec');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Engineering grid lines with faint ink
      const gridSize = 44;
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(20, 20, 19, 0.03)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Procedural waveform curves (representing circuit signals & neural activations)
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const baseHeight = height * (0.65 + i * 0.08);
        const amplitude = 32 + i * 16;
        const frequency = 0.0018 + i * 0.0006;
        const speed = time * (0.8 + i * 0.2);

        for (let x = 0; x <= width; x += 6) {
          const y =
            baseHeight +
            Math.sin(x * frequency + speed + i) * amplitude +
            Math.cos(x * 0.003 - speed * 0.5) * (amplitude * 0.3) +
            mouseY * 40;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        if (i === 0) {
          ctx.strokeStyle = isDark ? 'rgba(255, 85, 0, 0.35)' : 'rgba(218, 85, 47, 0.25)';
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(20, 20, 19, 0.06)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }

      // Circuit intersection nodes
      const nodeCols = Math.floor(width / gridSize);
      const nodeRows = Math.floor(height / gridSize);
      for (let c = 1; c < nodeCols; c += 3) {
        for (let r = 1; r < nodeRows; r += 3) {
          const nx = c * gridSize;
          const ny = r * gridSize;
          const distToMouse = Math.hypot(nx - (width * 0.5 + mouseX * width), ny - (height * 0.5 + mouseY * height));
          const influence = Math.max(0, 1 - distToMouse / 220);

          if (influence > 0.05) {
            ctx.beginPath();
            ctx.arc(nx, ny, 1.5 + influence * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = isDark
              ? `rgba(255, 85, 0, ${0.25 + influence * 0.6})`
              : `rgba(218, 85, 47, ${0.15 + influence * 0.5})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion) {
      animate();
    } else {
      drawStaticFrame();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
