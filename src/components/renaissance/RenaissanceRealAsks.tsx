import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { interpolate as flubberInterpolate } from 'flubber';
import { AntiqueCandleSconce } from './AntiqueCandleSconce';
import { CarvedStonePedestal } from './CarvedStonePedestal';
import { IMessageBubble } from './IMessageBubble';

// =========================================================================
// EXACT CODEPEN macOS GENIE EFFECT — SVG PATH MORPHING
// =========================================================================
//
// Reproduces the exact CodePen animation:
//   #element morphSVG: step3 → step2 → step0
//
// Using flubber to smoothly morph between 3 SVG path shapes applied as
// clip-path on each card div (clipPathUnits="objectBoundingBox", 0-1 coords).
//
// Step 3: tiny rectangle at bottom center (the "dock icon" at pedestal)
// Step 2: hourglass funnel with curved sides (wide top, narrow bottom)
// Step 0: full rectangle (card fully open)
//
// Original CodePen GSAP timeline (open):
//   .to(element, .3, { delay: .45, y: "10px" })
//   .to(element, .3, { morphSVG: step2 })
//   .to(element, .3, { morphSVG: step0 }, "-=.15")
//   .to(element, .3, { y: "0" }, "-=.3")
// =========================================================================

// SVG path shapes in objectBoundingBox coordinates (0-1)

// Step 3: tiny bar at bottom center (~24% wide, 10% tall)
const STEP3 = 'M 0.38 0.90 L 0.62 0.90 L 0.62 1.00 L 0.38 1.00 Z';

// Step 2: hourglass funnel — wide at top, curved sides, narrow at bottom
const STEP2 =
  'M 0.00 0.00 L 1.00 0.00 C 0.96 0.18 0.88 0.36 0.80 0.52 C 0.74 0.64 0.68 0.78 0.62 1.00 L 0.38 1.00 C 0.32 0.78 0.26 0.64 0.20 0.52 C 0.12 0.36 0.04 0.18 0.00 0.00 Z';

// Step 0: full rectangle
const STEP0 = 'M 0.00 0.00 L 1.00 0.00 L 1.00 1.00 L 0.00 1.00 Z';

// Pre-compute flubber interpolators (expensive, do once)
const morph3to2 = flubberInterpolate(STEP3, STEP2, { maxSegmentLength: 0.05 });
const morph2to0 = flubberInterpolate(STEP2, STEP0, { maxSegmentLength: 0.05 });

// =========================================================================
// GenieCard — wraps a card div with the exact CodePen SVG morph clip-path
// =========================================================================
interface GenieCardProps {
  isOpen: boolean;
  delayMs: number;
  clipId: string;
  children: React.ReactNode;
  className?: string;
}

const GenieCard: React.FC<GenieCardProps> = ({
  isOpen,
  delayMs,
  clipId,
  children,
  className,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Compute path from progress (0 = step3, 0.5 = step2, 1 = step0)
  const getPath = useCallback((progress: number): string => {
    if (progress <= 0.5) {
      return morph3to2(progress * 2);
    }
    return morph2to0((progress - 0.5) * 2);
  }, []);

  useEffect(() => {
    // Cleanup previous animation
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    if (isOpen) {
      // ── OPEN: step3 → step2 → step0 (matching CodePen timing) ──
      timeoutRef.current = setTimeout(() => {
        let start: number | null = null;
        const duration = 750; // ms — matches ~0.3+0.3 with overlap

        const animate = (ts: number) => {
          if (!start) start = ts;
          const elapsed = ts - start;
          const rawT = Math.min(elapsed / duration, 1);
          // Ease out cubic (power2.out equivalent)
          const t = 1 - Math.pow(1 - rawT, 3);

          // Update clip path
          if (pathRef.current) {
            pathRef.current.setAttribute('d', getPath(t));
          }

          // Fade in content after 55% morph progress
          if (contentRef.current) {
            const contentOpacity = t > 0.55 ? Math.min((t - 0.55) / 0.35, 1) : 0;
            contentRef.current.style.opacity = String(contentOpacity);
          }

          if (rawT < 1) {
            rafRef.current = requestAnimationFrame(animate);
          }
        };

        rafRef.current = requestAnimationFrame(animate);
      }, delayMs);
    } else {
      // ── CLOSE: step0 → step2 → step3 (reverse of open) ──
      let start: number | null = null;
      const duration = 550;

      const animate = (ts: number) => {
        if (!start) start = ts;
        const elapsed = ts - start;
        const rawT = Math.min(elapsed / duration, 1);
        // Ease in-out for close
        const eased = rawT < 0.5
          ? 2 * rawT * rawT
          : 1 - Math.pow(-2 * rawT + 2, 2) / 2;

        // Reverse: progress goes from 1 → 0
        const progress = 1 - eased;

        if (pathRef.current) {
          pathRef.current.setAttribute('d', getPath(progress));
        }

        if (contentRef.current) {
          contentRef.current.style.opacity = String(Math.min(progress, 1) > 0.6 ? 1 : 0);
        }

        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isOpen, delayMs, getPath]);

  return (
    <>
      {/* Hidden SVG: defines the morphing clipPath */}
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', pointerEvents: 'none' }}
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path ref={pathRef} d={STEP3} />
          </clipPath>
        </defs>
      </svg>

      {/* Card div clipped by the morphing path */}
      <div
        style={{ clipPath: `url(#${clipId})` }}
        className={className}
      >
        <div ref={contentRef} style={{ opacity: 0 }}>
          {children}
        </div>
      </div>
    </>
  );
};

// =========================================================================
// Position animation ease (for framer-motion x/y translation)
// =========================================================================
const GENIE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// =========================================================================
// MAIN SECTION COMPONENT
// =========================================================================
export const RenaissanceRealAsks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isInView);
  }, [isInView]);

  const handleToggle = () => setIsOpen((p) => !p);

  // Position variants — cards translate from pedestal to final spot
  const pos1: Variants = {
    closed: { y: 320, x: 180, transition: { duration: 0.55, ease: GENIE_EASE } },
    open: { y: 0, x: 0, transition: { duration: 0.8, ease: GENIE_EASE, delay: 0.06 } },
  };
  const pos2: Variants = {
    closed: { y: 360, x: 0, transition: { duration: 0.55, ease: GENIE_EASE } },
    open: { y: 0, x: 0, transition: { duration: 0.8, ease: GENIE_EASE, delay: 0.22 } },
  };
  const pos3: Variants = {
    closed: { y: 260, x: -180, transition: { duration: 0.55, ease: GENIE_EASE } },
    open: { y: 0, x: 0, transition: { duration: 0.8, ease: GENIE_EASE, delay: 0.38 } },
  };

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-16 sm:pt-24 pb-20 sm:pb-32 relative z-20 overflow-x-clip select-none"
    >
      {/* =========================================================================
          ANTIQUE CANDLE SCONCES
          ========================================================================= */}
      <motion.div
        animate={{ y: [-3, 3, -3], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 sm:top-6 -right-3 sm:right-2 md:right-6 lg:right-10 w-28 sm:w-36 md:w-44 lg:w-52 pointer-events-none z-20"
      >
        <AntiqueCandleSconce candlesCount={2} variant="right" />
      </motion.div>

      <motion.div
        animate={{ y: [3, -3, 3], rotate: [0, -0.4, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute bottom-4 sm:bottom-8 -left-3 sm:left-2 md:left-6 lg:left-10 w-28 sm:w-36 md:w-44 lg:w-52 pointer-events-none z-20"
      >
        <AntiqueCandleSconce candlesCount={3} variant="left" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">

        {/* =========================================================================
            TITLE: "Talk Markets. It Trades"
            ========================================================================= */}
        <div className="text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#2d3e32] font-serif font-normal">
            Talk{' '}
            <span className="font-serif italic font-bold text-[#142218]">Markets.</span>{' '}
            It{' '}
            <span className="font-serif italic font-normal text-[#142218]">Trades</span>
          </h2>
        </div>

        {/* =========================================================================
            CARDS + PEDESTAL — each card emerges from the stone pedestal
            with exact CodePen SVG morphing genie clip-path
            ========================================================================= */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]">

          {/* ─── CARD 1: LEFT ─── */}
          <motion.div
            variants={pos1}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="absolute top-[8%] sm:top-[12%] left-0 sm:left-[4%] lg:left-[8%] w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] z-20"
          >
            <GenieCard
              isOpen={isOpen}
              delayMs={60}
              clipId="genie-clip-1"
              className="rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 cursor-pointer"
            >
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="why is BTC bid this morning, funding or spot?" side="left" />
                <IMessageBubble text="my ETH is up 34% scale." side="right" />
              </div>
            </GenieCard>
          </motion.div>

          {/* ─── CARD 2: TOP-CENTER ─── */}
          <motion.div
            variants={pos2}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="absolute top-[2%] sm:top-[4%] left-[44%] sm:left-[46%] lg:left-[48%] w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[310px] z-20 hidden sm:block"
          >
            <GenieCard
              isOpen={isOpen}
              delayMs={220}
              clipId="genie-clip-2"
              className="rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-5 sm:p-6 cursor-pointer"
            >
              <div className="flex flex-col">
                <IMessageBubble text="laddered. Stop trailing behind it." side="left" />
              </div>
            </GenieCard>
          </motion.div>

          {/* ─── CARD 3: RIGHT ─── */}
          <motion.div
            variants={pos3}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="absolute top-[38%] sm:top-[42%] right-0 sm:right-[4%] lg:right-[8%] w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[480px] z-20"
          >
            <GenieCard
              isOpen={isOpen}
              delayMs={380}
              clipId="genie-clip-3"
              className="rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 cursor-pointer"
            >
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="what am I paying in gas this week?" side="left" />
                <IMessageBubble text="pay this invoice in USDC." side="right" />
              </div>
            </GenieCard>
          </motion.div>

          {/* ─── BOTTOM CENTER: STONE PEDESTAL ─── */}
          <div
            onClick={handleToggle}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 sm:w-52 md:w-60 lg:w-64 z-30 flex flex-col items-center cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={isOpen ? { scale: [1, 1.06, 0.98, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full"
            >
              <CarvedStonePedestal />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
