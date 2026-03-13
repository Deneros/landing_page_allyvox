'use client';

import { useRef, useEffect, useId } from 'react';
import type { CSSProperties } from 'react';

interface DotPatternProps {
  className?: string;
  /** Primary dot color */
  color?: string;
  /** Accent color used for the cursor highlight glow */
  accentColor?: string;
  /** Dot radius in px */
  size?: number;
  /** Grid spacing between dots in px */
  spacing?: number;
  style?: CSSProperties;
  /** Enable mouse + scroll interactivity (default true) */
  interactive?: boolean;
  /** Base opacity of the dot layer (0–1) */
  opacity?: number;
}

export function DotPattern({
  className = '',
  color = '#9138d5',
  accentColor = '#76f6f5',
  size = 1.8,
  spacing = 18,
  style,
  interactive = true,
  opacity = 0.55,
}: DotPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskGradRef = useRef<SVGRadialGradientElement>(null);
  const highlightGradRef = useRef<SVGRadialGradientElement>(null);

  // Stable unique IDs per instance — avoids SVG def collisions across sections
  const rawId = useId();
  const uid = rawId.replace(/:/g, 'x');
  const patternId = `${uid}-dots`;
  const maskGradId = `${uid}-mg`;
  const highlightGradId = `${uid}-hl`;
  const maskId = `${uid}-m`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const parent = container.parentElement;
    if (!parent) return;

    // ── Mouse interaction: shift mask gradient + highlight to cursor ──
    let rafId = 0;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;
    let isInside = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Smooth follow — lerp toward target
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);

      maskGradRef.current?.setAttribute('cx', `${currentX}%`);
      maskGradRef.current?.setAttribute('cy', `${currentY}%`);
      highlightGradRef.current?.setAttribute('cx', `${currentX}%`);
      highlightGradRef.current?.setAttribute('cy', `${currentY}%`);

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!isInside) {
        isInside = true;
        // Instantly jump near the cursor on first entry to avoid long chase
        currentX = targetX;
        currentY = targetY;
      }
    };

    const handleMouseLeave = () => {
      targetX = 50;
      targetY = 50;
      isInside = false;
    };

    // ── Scroll interaction: subtle parallax translate ──
    const handleScroll = () => {
      const rect = parent.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Map element center position in viewport to -15…15 px vertical offset
      const center = rect.top + rect.height / 2;
      const progress = (center - viewH / 2) / (viewH / 2); // -1…1
      const offset = progress * 15;
      container.style.transform = `translateY(${offset}px)`;
    };

    if (interactive) {
      rafId = requestAnimationFrame(animate);
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      cancelAnimationFrame(rafId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Dot grid pattern */}
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={size + 1} cy={size + 1} r={size} fill={color} />
          </pattern>

          {/* Radial gradient mask — center follows cursor */}
          <radialGradient
            id={maskGradId}
            cx="50%"
            cy="50%"
            r="55%"
            ref={maskGradRef}
          >
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="45%"  stopColor="white" stopOpacity="0.75" />
            <stop offset="80%"  stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id={maskId}>
            <rect width="100%" height="100%" fill={`url(#${maskGradId})`} />
          </mask>

          {/* Cursor highlight glow */}
          <radialGradient
            id={highlightGradId}
            cx="50%"
            cy="50%"
            r="18%"
            ref={highlightGradRef}
          >
            <stop offset="0%"   stopColor={accentColor} stopOpacity="0.35" />
            <stop offset="60%"  stopColor={accentColor} stopOpacity="0.1" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dot layer with soft radial mask */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          mask={`url(#${maskId})`}
          opacity={opacity}
        />

        {/* Cursor glow overlay */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#${highlightGradId})`}
        />
      </svg>
    </div>
  );
}
