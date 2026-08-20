import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { interpolate } from 'flubber';
import { motion } from 'framer-motion';
import { IMessageBubble } from './IMessageBubble';

interface GenieMorphCardProps {
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

// Pre-create flubber interpolators for high 60fps performance
const interpStep3To2 = interpolate(STEP_3, STEP_2, { maxSegmentLength: 2 });
const interpStep2To0 = interpolate(STEP_2, STEP_0, { maxSegmentLength: 2 });

export const GenieMorphCard: React.FC<GenieMorphCardProps> = ({
  isOpen,
  onToggle,
  className = '',
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const elementRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(isOpen);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!pathRef.current || !elementRef.current) return;

    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline();
    tlRef.current = tl;

    const proxy = { stage1: isOpen ? 1 : 0, stage2: isOpen ? 1 : 0 };

    if (isOpen) {
      // EXACT OPEN TIMELINE FROM USER SNIPPET:
      // tl.to(element, .3, { delay: .15, y: "10px" })
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
            duration: 0.38,
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
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              setContentVisible(true);
            },
          },
          '-=0.25'
        );
    } else {
      // EXACT CLOSE TIMELINE FROM USER SNIPPET:
      // tl.to(element, .3, { delay: .1, y: "-15px", scaleY: .9 })
      //   .to(element, .3, { morphSVG: step2 })
      //   .to(element, .3, { morphSVG: step3 }, "-=.15")
      //   .to(element, .3, { y: "0", scaleY: 1 }, "-=.15")
      setContentVisible(false);

      tl.to(elementRef.current, {
        y: -15,
        scaleY: 0.9,
        transformOrigin: '50% 100%',
        duration: 0.25,
        ease: 'power2.in',
      })
        .to(
          proxy,
          {
            stage2: 0,
            duration: 0.32,
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
            duration: 0.32,
            ease: 'power2.in',
            onUpdate: () => {
              if (pathRef.current) {
                pathRef.current.setAttribute('d', interpStep3To2(proxy.stage1));
              }
            },
          },
          '-=0.15'
        )
        .to(
          elementRef.current,
          {
            y: 0,
            scaleY: 1,
            duration: 0.25,
            ease: 'power2.out',
          },
          '-=0.15'
        );
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <div className={`relative w-full max-w-[560px] mx-auto select-none ${className}`}>
      {/* SVG Canvas with Exact Morphing Path */}
      <svg
        viewBox="0 0 540 620"
        className="w-full h-auto drop-shadow-[0_20px_45px_rgba(50,35,20,0.08)] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="modal-with-genie-effect" ref={elementRef}>
            {/* The Morphing Card Surface (#element) */}
            <path
              id="element"
              ref={pathRef}
              d={isOpen ? STEP_0 : STEP_3}
              fill="#fdfbf7"
              stroke="#eedbc4"
              strokeWidth="2"
            />

            {/* Close Button Top-Right (when open) */}
            {contentVisible && (
              <g
                id="close"
                onClick={onToggle}
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(476, 38)"
              >
                <circle cx="10" cy="10" r="10" fill="#eedbc4" className="hover:fill-[#e2ccb3] transition-colors" />
                <path
                  id="Shape"
                  stroke="#5a4128"
                  strokeWidth="1.8"
                  d="M6 6.023l7.99 7.945M13.99 6.023L6 13.968"
                  strokeLinecap="round"
                />
              </g>
            )}
          </g>
        </g>
      </svg>

      {/* Real iMessage Chat Content Displayed Inside the Open Card */}
      {contentVisible && (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="imsg-card absolute top-[6%] inset-x-6 sm:inset-x-8 bottom-[52%] flex flex-col justify-center px-3 sm:px-6 z-20 pointer-events-auto"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
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
    </div>
  );
};
