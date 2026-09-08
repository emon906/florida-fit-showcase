"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  image: string;
  title: string;
  subtitle: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  className?: string;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

export function CircularGallery({
  items,
  className,
  autoRotate = true,
  autoRotateSpeed = 0.05,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const pausedRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  const [rotation, setRotation] = useState(0);
  const [dims, setDims] = useState({ radius: 520, cardW: 260, cardH: 340 });

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      if (w < 640) setDims({ radius: 260, cardW: 150, cardH: 210 });
      else if (w < 1024) setDims({ radius: 400, cardW: 200, cardH: 280 });
      else setDims({ radius: 560, cardW: 260, cardH: 360 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto rotation
  useEffect(() => {
    if (!autoRotate) return;
    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        rotationRef.current -= autoRotateSpeed;
        setRotation(rotationRef.current);
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [autoRotate, autoRotateSpeed]);

  // Scroll interaction: rotate as the section passes through the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let base = rotationRef.current;
    let startProgress: number | null = null;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      if (progress < -0.2 || progress > 1.2) return;
      if (startProgress === null) {
        startProgress = progress;
        base = rotationRef.current;
      }
      rotationRef.current = base + (progress - startProgress) * 180;
      setRotation(rotationRef.current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    rotationRef.current += delta * 0.25;
    setRotation(rotationRef.current);
  }, []);

  const endDrag = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const step = 360 / items.length;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing",
        className,
      )}
      style={{ height: dims.cardH + 180, perspective: "1400px" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        className="absolute top-1/2 left-1/2 h-0 w-0"
        style={{ transformStyle: "preserve-3d", transform: `rotateY(${rotation}deg)` }}
      >
        {items.map((item, i) => {
          const angle = step * i;
          const normalized = (((angle + rotation) % 360) + 360) % 360;
          const facing = Math.cos((normalized * Math.PI) / 180);
          const opacity = 0.25 + 0.75 * Math.max(0, facing);
          const isFront = normalized < 22 || normalized > 338;

          return (
            <div
              key={item.title}
              className="absolute"
              style={{
                width: dims.cardW,
                height: dims.cardH,
                left: -dims.cardW / 2,
                top: -dims.cardH / 2,
                transform: `rotateY(${angle}deg) translateZ(${dims.radius}px)`,
                transformStyle: "preserve-3d",
                opacity,
                transition: "opacity 0.35s ease",
              }}
            >
              <div
                className={cn(
                  "group relative h-full w-full overflow-hidden rounded-2xl border transition-all duration-500",
                  isFront
                    ? "border-primary/70 shadow-[0_30px_70px_-25px_rgba(219,26,26,0.6)]"
                    : "border-white/10 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)]",
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 p-4 transition-transform duration-500",
                    isFront ? "translate-y-0" : "translate-y-1",
                  )}
                >
                  <span className="inline-block h-0.5 w-8 bg-primary" />
                  <h3 className="mt-2 text-sm leading-tight font-bold tracking-wide text-white sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] tracking-wide text-white/70 uppercase sm:text-xs">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />
    </div>
  );
}

export default CircularGallery;
