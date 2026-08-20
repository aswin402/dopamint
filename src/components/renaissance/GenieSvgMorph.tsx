import React, { useEffect, useRef, useState } from 'react';
import { interpolate } from 'flubber';
import { motion, AnimatePresence } from 'framer-motion';
import { IMessageBubble } from './IMessageBubble';

interface GenieSvgMorphProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

// Exact SVG Paths from User Reference Snippet
const STEP_3 =
  'M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z';

const STEP_2 =
  'M270.136 122h237.356c2.758 0 4.36 2.15 3.577 4.8 0 0-23.333 86.246-92.842 174.822-69.51 88.575-66.458 185.37-66.458 185.37-.033 2.776-2.25 5.008-5.01 5.008H193.51c-2.76 0-4.977-2.232-5.01-5.008 0 0 3.05-96.795-66.458-185.37C52.534 213.046 29.202 126.8 29.202 126.8c-.783-2.65.82-4.8 3.578-4.8h237.356z';

const STEP_0 =
  'M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z';

// Precompute flubber interpolators for max performance
const interpStep3To2 = interpolate(STEP_3, STEP_2, { maxSegmentLength: 2 });
const interpStep2To0 = interpolate(STEP_2, STEP_0, { maxSegmentLength: 2 });

function getGeniePath(progress: number): string {
  const p = Math.max(0, Math.min(1, progress));
  if (p < 0.5) {
    return interpStep3To2(p * 2);
  } else {
    return interpStep2To0((p - 0.5) * 2);
  }
}

export const GenieSvgMorph: React.FC<GenieSvgMorphProps> = ({
  isOpen,
  onToggle,
  className = '',
}) => {
  const [currentD, setCurrentD] = useState<string>(isOpen ? STEP_0 : STEP_3);
  const [progressVal, setProgressVal] = useState<number>(isOpen ? 1 : 0);
  const animRef = useRef<number | null>(null);
  const stateRef = useRef({
    currentP: isOpen ? 1 : 0,
    targetP: isOpen ? 1 : 0,
  });

  useEffect(() => {
    stateRef.current.targetP = isOpen ? 1 : 0;

    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    let lastTime = performance.now();

    function update() {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const state = stateRef.current;
      const speed = state.targetP > state.currentP ? 2.4 : 3.2;
      const diff = state.targetP - state.currentP;

      if (Math.abs(diff) < 0.005) {
        state.currentP = state.targetP;
      } else {
        state.currentP += Math.sign(diff) * Math.min(Math.abs(diff), speed * dt);
      }

      const p = ease(state.currentP);
      setProgressVal(state.currentP);
      setCurrentD(getGeniePath(p));

      if (state.currentP !== state.targetP) {
        animRef.current = requestAnimationFrame(update);
      }
    }

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(update);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isOpen]);

  const showContent = progressVal > 0.85;

  return (
    <div className={`relative w-full max-w-[620px] mx-auto select-none ${className}`}>
      {/* SVG Canvas with Morphing Genie Path */}
      <svg
        viewBox="0 0 540 620"
        className="w-full h-auto drop-shadow-[0_25px_50px_rgba(40,30,20,0.12)] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="genieClip">
            <path d={currentD} />
          </clipPath>
        </defs>

        {/* Morphing Base Card Surface */}
        <path
          d={currentD}
          fill="#fdfbf7"
          stroke="#eedbc4"
          strokeWidth="2"
          className="transition-colors duration-200"
        />

        {/* Close Button at top-right (when open) */}
        {showContent && (
          <g
            onClick={onToggle}
            className="cursor-pointer transition-transform hover:scale-110"
            transform="translate(470, 38)"
          >
            <circle cx="10" cy="10" r="11" fill="#e8d5bf" className="hover:fill-[#dfc4a8] transition-colors" />
            <path
              d="M7 7 L13 13 M13 7 L7 13"
              stroke="#5a4128"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>

      {/* Embedded High-Resolution iMessage Card Content (Visible when fully morphed) */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="imsg-card absolute top-[8%] inset-x-8 bottom-[52%] flex flex-col justify-center px-4 sm:px-6 z-20 pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              <IMessageBubble
                text="why is BTC bid this morning, funding or spot?"
                side="left"
              />
              <IMessageBubble
                text="my ETH is up 34% scale."
                side="right"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
