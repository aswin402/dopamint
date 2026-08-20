import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { AntiqueCandleSconce } from './AntiqueCandleSconce';
import { CarvedStonePedestal } from './CarvedStonePedestal';
import { IMessageBubble } from './IMessageBubble';

// =========================================================================
// AUTHENTIC macOS GENIE MAXIMIZE EFFECT — VISIBLE EMERGENCE
// =========================================================================
//
// 12-vertex clip-path polygon() morphs through 4 stages:
//
//   PINCHED  → small visible rectangle at bottom center (at the pedestal)
//   FUNNEL   → wide top, sides curving inward, narrow bottom (genie shape)
//   SETTLE   → slight overshoot wider than full
//   FULL     → complete rectangle
//
// Key fix: cards start at opacity 0.9 (NOT 0) so the emergence from the
// stone pedestal is clearly VISIBLE. The clip-path does the hiding/reveal,
// not opacity.
// =========================================================================

// Pinched: 24% wide × 12% tall rectangle at bottom-center — VISIBLE as a
// small shape emerging from the stone pedestal
const CLIP_PINCHED =
  'polygon(38% 88%, 43% 88%, 50% 88%, 57% 88%, 62% 88%, 62% 94%, 62% 100%, 54% 100%, 46% 100%, 38% 100%, 38% 94%, 38% 88%)';

// Funnel: wide at top, sides curve inward, narrow at bottom (the genie shape)
const CLIP_FUNNEL =
  'polygon(0% 0%, 33% 0%, 67% 0%, 100% 0%, 93% 32%, 75% 65%, 60% 100%, 55% 100%, 45% 100%, 40% 100%, 25% 65%, 7% 32%)';

// Settle: slightly wider than full (overshoot for elastic feel)
const CLIP_SETTLE =
  'polygon(0% 0%, 33% 0%, 67% 0%, 100% 0%, 100% 33%, 100% 67%, 100% 100%, 67% 100%, 33% 100%, 0% 100%, 0% 67%, 0% 33%)';

// Full: perfect rectangle
const CLIP_FULL =
  'polygon(0% 0%, 33% 0%, 67% 0%, 100% 0%, 100% 33%, 100% 67%, 100% 100%, 67% 100%, 33% 100%, 0% 100%, 0% 67%, 0% 33%)';

const GENIE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const RenaissanceRealAsks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isInView);
  }, [isInView]);

  const handleToggle = () => setIsOpen((p) => !p);

  // -----------------------------------------------------------------------
  // CARD 1: LEFT — curves up-left out of pedestal
  // -----------------------------------------------------------------------
  const card1: Variants = {
    closed: {
      clipPath: CLIP_PINCHED,
      y: 320,
      x: 180,
      opacity: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: GENIE_EASE },
    },
    open: {
      clipPath: [CLIP_PINCHED, CLIP_FUNNEL, CLIP_SETTLE, CLIP_FULL],
      y:        [320,          40,          -6,          0],
      x:        [180,          35,          -4,          0],
      opacity:  [0.9,          1,           1,           1],
      rotate:   [0,            -3,          -6,          -5],
      transition: {
        duration: 1.1,
        times: [0, 0.38, 0.78, 1],
        ease: GENIE_EASE,
        delay: 0.06,
      },
    },
  };

  // -----------------------------------------------------------------------
  // CARD 2: TOP-CENTER — shoots straight up out of pedestal
  // -----------------------------------------------------------------------
  const card2: Variants = {
    closed: {
      clipPath: CLIP_PINCHED,
      y: 360,
      x: 0,
      opacity: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: GENIE_EASE },
    },
    open: {
      clipPath: [CLIP_PINCHED, CLIP_FUNNEL, CLIP_SETTLE, CLIP_FULL],
      y:        [360,          30,          -5,          0],
      x:        [0,            0,           0,           0],
      opacity:  [0.9,          1,           1,           1],
      rotate:   [0,            3,           5,           4],
      transition: {
        duration: 1.1,
        times: [0, 0.38, 0.78, 1],
        ease: GENIE_EASE,
        delay: 0.22,
      },
    },
  };

  // -----------------------------------------------------------------------
  // CARD 3: RIGHT — curves up-right out of pedestal
  // -----------------------------------------------------------------------
  const card3: Variants = {
    closed: {
      clipPath: CLIP_PINCHED,
      y: 260,
      x: -180,
      opacity: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: GENIE_EASE },
    },
    open: {
      clipPath: [CLIP_PINCHED, CLIP_FUNNEL, CLIP_SETTLE, CLIP_FULL],
      y:        [260,          30,          -5,          0],
      x:        [-180,         -35,         4,           0],
      opacity:  [0.9,          1,           1,           1],
      rotate:   [0,            4,           7,           6],
      transition: {
        duration: 1.1,
        times: [0, 0.38, 0.78, 1],
        ease: GENIE_EASE,
        delay: 0.38,
      },
    },
  };

  // Chat text fades in after the card shape materializes
  const chatFade: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut', delay: 0.55 } },
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
            CARDS + PEDESTAL CANVAS
            ========================================================================= */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]">

          {/* ─── CARD 1: LEFT ─── */}
          <motion.div
            variants={card1}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{
              scale: 1.05,
              rotate: -1.5,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45,30,15,0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[8%] sm:top-[12%] left-0 sm:left-[4%] lg:left-[8%] w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 z-20 cursor-pointer"
          >
            <motion.div variants={chatFade} className="flex flex-col gap-3.5 sm:gap-4">
              <IMessageBubble text="why is BTC bid this morning, funding or spot?" side="left" />
              <IMessageBubble text="my ETH is up 34% scale." side="right" />
            </motion.div>
          </motion.div>

          {/* ─── CARD 2: TOP-CENTER ─── */}
          <motion.div
            variants={card2}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{
              scale: 1.07,
              rotate: 1.2,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45,30,15,0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[2%] sm:top-[4%] left-[44%] sm:left-[46%] lg:left-[48%] w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[310px] rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-5 sm:p-6 z-20 cursor-pointer hidden sm:block"
          >
            <motion.div variants={chatFade} className="flex flex-col">
              <IMessageBubble text="laddered. Stop trailing behind it." side="left" />
            </motion.div>
          </motion.div>

          {/* ─── CARD 3: RIGHT ─── */}
          <motion.div
            variants={card3}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{
              scale: 1.06,
              rotate: 1.8,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45,30,15,0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[38%] sm:top-[42%] right-0 sm:right-[4%] lg:right-[8%] w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[480px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 z-20 cursor-pointer"
          >
            <motion.div variants={chatFade} className="flex flex-col gap-3.5 sm:gap-4">
              <IMessageBubble text="what am I paying in gas this week?" side="left" />
              <IMessageBubble text="pay this invoice in USDC." side="right" />
            </motion.div>
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
