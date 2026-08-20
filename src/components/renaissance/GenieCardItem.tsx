import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { interpolate } from 'flubber';
import { motion, AnimatePresence } from 'framer-motion';

interface GenieCardItemProps {
  isOpen: boolean;
  delay?: number;
  rotation: number;
  hoverRotation: number;
  hoverScale?: number;
  className?: string;
  children: React.ReactNode;
}

// Exact SVG Paths from User Reference Snippet
const STEP_3 =
  'M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z';

const STEP_2 =
  'M270.136 122h237.356c2.758 0 4.36 2.15 3.577 4.8 0 0-23.333 86.246-92.842 174.822-69.51 88.575-66.458 185.37-66.458 185.37-.033 2.776-2.25 5.008-5.01 5.008H193.51c-2.76 0-4.977-2.232-5.01-5.008 0 0 3.05-96.795-66.458-185.37C52.534 213.046 29.202 126.8 29.202 126.8c-.783-2.65.82-4.8 3.578-4.8h237.356z';

const STEP_0 =
  'M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z';

// Flubber Interpolators for Exact Genie Morphing
const interpStep3To2 = interpolate(STEP_3, STEP_2, { maxSegmentLength: 2 });
const interpStep2To0 = interpolate(STEP_2, STEP_0, { maxSegmentLength: 2 });

export const GenieCardItem: React.FC<GenieCardItemProps> = ({
  isOpen,
  delay = 0,
  rotation,
  hoverRotation,
  hoverScale = 1.06,
  className = '',
  children,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const elementRef = useRef<SVGGElement>(null);
  const [contentVisible, setContentVisible] = useState(isOpen);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!pathRef.current || !elementRef.current) return;

    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline({ delay });
    tlRef.current = tl;

    const proxy = { stage1: isOpen ? 1 : 0, stage2: isOpen ? 1 : 0 };

    if (isOpen) {
      // EXACT OPEN TAB GENIE EFFECT TIMELINE:
      // tl.to(element, .3, { delay: .45, y: "10px" })
      //   .to(element, .3, { morphSVG: step2 })
      //   .to(element, .3, { morphSVG: step0 }, "-=.15")
      //   .to(element, .3, { y: "0" }, "-=.3")
      tl.to(elementRef.current, {
        y: 10,
        duration: 0.25,
        ease: 'power2.out',
      })
        .to(
          proxy,
          {
            stage1: 1,
            duration: 0.35,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (pathRef.current) {
                pathRef.current.setAttribute('d', interpStep3To2(proxy.stage1));
              }
            },
          },
          '-=0.15'
        )
        .to(
          proxy,
          {
            stage2: 1,
            duration: 0.35,
            ease: 'power2.out',
            onUpdate: () => {
              if (pathRef.current) {
                pathRef.current.setAttribute('d', interpStep2To0(proxy.stage2));
              }
            },
          },
          '-=0.15'
        )
        .to(
          elementRef.current,
          {
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
            onComplete: () => {
              setContentVisible(true);
            },
          },
          '-=0.2'
        );
    } else {
      // CLOSE / MINIMIZE TIMELINE
      setContentVisible(false);

      tl.to(elementRef.current, {
        y: -12,
        scaleY: 0.92,
        transformOrigin: '50% 100%',
        duration: 0.2,
        ease: 'power2.in',
      })
        .to(
          proxy,
          {
            stage2: 0,
            duration: 0.28,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (pathRef.current) {
                pathRef.current.setAttribute('d', interpStep2To0(proxy.stage2));
              }
            },
          },
          '-=0.1'
        )
        .to(
          proxy,
          {
            stage1: 0,
            duration: 0.28,
            ease: 'power2.in',
            onUpdate: () => {
              if (pathRef.current) {
                pathRef.current.setAttribute('d', interpStep3To2(proxy.stage1));
              }
            },
          },
          '-=0.12'
        )
        .to(
          elementRef.current,
          {
            y: 0,
            scaleY: 1,
            duration: 0.2,
            ease: 'power2.out',
          },
          '-=0.1'
        );
    }

    return () => {
      tl.kill();
    };
  }, [isOpen, delay]);

  return (
    <motion.div
      style={{ rotate: rotation }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotation,
        zIndex: 45,
        boxShadow: '0 25px 60px -12px rgba(45, 30, 15, 0.15)',
        transition: { type: 'spring', stiffness: 280, damping: 20 },
      }}
      className={`relative select-none cursor-pointer ${className}`}
    >
      {/* Exact SVG Genie Morph Background */}
      <svg
        viewBox="0 0 540 620"
        className="w-full h-auto drop-shadow-[0_15px_35px_rgba(50,35,20,0.06)] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g ref={elementRef}>
          <path
            ref={pathRef}
            d={isOpen ? STEP_0 : STEP_3}
            fill="#fdfbf7"
            stroke="#eedbc4"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Embedded Real iMessage Conversation Content */}
      <AnimatePresence>
        {contentVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[6%] inset-x-4 sm:inset-x-6 bottom-[52%] flex flex-col justify-center px-2 sm:px-4 z-20 pointer-events-auto"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
