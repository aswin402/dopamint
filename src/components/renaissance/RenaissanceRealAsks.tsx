import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { AntiqueCandleSconce } from './AntiqueCandleSconce';
import { CarvedStonePedestal } from './CarvedStonePedestal';
import { IMessageBubble } from './IMessageBubble';

export const RenaissanceRealAsks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });
  const [isOpen, setIsOpen] = useState(false);

  // Trigger genie emergence when scrolling into section
  useEffect(() => {
    if (isInView) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isInView]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // =========================================================================
  // 3-CARD GENIE EMERGENCE ANIMATIONS FROM THE BOTTOM STONE PEDESTAL
  // Each card shoots out directly from the bottom-center stone image with:
  // 1. Point of origin: Stone Pedestal at bottom-center (scaleX: 0.05, scaleY: 0.05, opacity: 0)
  // 2. Genie Funnel Stretch: Shoots up like a fluid funnel (scaleY: 1.35, scaleX: 0.32, skewX, opacity: 0.95)
  // 3. Top Fan-Out Blossom: S-curve widening (scaleX: 1.07, scaleY: 0.94)
  // 4. Settles into full scale 1.0, crisp rendering, and resting tilt (-5°, +4°, +6°)
  // =========================================================================

  // CARD 1: LEFT CONVERSATION CARD (Curves up & left out of stone pedestal)
  const card1GenieVariants: Variants = {
    closed: {
      opacity: 0,
      scaleX: 0.05,
      scaleY: 0.05,
      x: 220,
      y: 340,
      rotate: 0,
      skewX: 0,
      filter: 'blur(8px)',
      pointerEvents: 'none',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: [0, 0.95, 1, 1],
      scaleX: [0.05, 0.32, 1.06, 1],
      scaleY: [0.05, 1.35, 0.95, 1],
      x: [220, 90, -8, 0],
      y: [340, 60, -8, 0],
      rotate: [0, 8, -7, -5],
      skewX: [0, -10, 3, 0],
      filter: ['blur(8px)', 'blur(2px)', 'blur(0px)', 'blur(0px)'],
      pointerEvents: 'auto',
      transition: {
        duration: 0.85,
        times: [0, 0.4, 0.8, 1],
        ease: ['easeInOut', 'easeOut', 'easeOut'],
        delay: 0.12,
      },
    },
  };

  // CARD 2: TOP-CENTER CONVERSATION CARD (Shoots straight up out of stone pedestal)
  const card2GenieVariants: Variants = {
    closed: {
      opacity: 0,
      scaleX: 0.05,
      scaleY: 0.05,
      x: 0,
      y: 380,
      rotate: 0,
      skewX: 0,
      filter: 'blur(8px)',
      pointerEvents: 'none',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: [0, 0.95, 1, 1],
      scaleX: [0.05, 0.28, 1.08, 1],
      scaleY: [0.05, 1.4, 0.94, 1],
      x: [0, 0, 0, 0],
      y: [380, 50, -10, 0],
      rotate: [0, -5, 6, 4],
      skewX: [0, 0, 0, 0],
      filter: ['blur(8px)', 'blur(2px)', 'blur(0px)', 'blur(0px)'],
      pointerEvents: 'auto',
      transition: {
        duration: 0.85,
        times: [0, 0.4, 0.8, 1],
        ease: ['easeInOut', 'easeOut', 'easeOut'],
        delay: 0.28,
      },
    },
  };

  // CARD 3: RIGHT CONVERSATION CARD (Curves up & right out of stone pedestal)
  const card3GenieVariants: Variants = {
    closed: {
      opacity: 0,
      scaleX: 0.05,
      scaleY: 0.05,
      x: -220,
      y: 280,
      rotate: 0,
      skewX: 0,
      filter: 'blur(8px)',
      pointerEvents: 'none',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: [0, 0.95, 1, 1],
      scaleX: [0.05, 0.32, 1.06, 1],
      scaleY: [0.05, 1.35, 0.95, 1],
      x: [-220, -90, 8, 0],
      y: [280, 50, -8, 0],
      rotate: [0, -8, 8, 6],
      skewX: [0, 10, -3, 0],
      filter: ['blur(8px)', 'blur(2px)', 'blur(0px)', 'blur(0px)'],
      pointerEvents: 'auto',
      transition: {
        duration: 0.85,
        times: [0, 0.4, 0.8, 1],
        ease: ['easeInOut', 'easeOut', 'easeOut'],
        delay: 0.44,
      },
    },
  };

  // Chat bubbles fade-in inside each card
  const chatFadeVariants: Variants = {
    closed: { opacity: 0, scale: 0.95 },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.35 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-16 sm:pt-24 pb-20 sm:pb-32 relative z-20 overflow-hidden select-none"
    >
      {/* =========================================================================
          1. PURE CODE ANTIQUE CANDLE SCONCES (TOP RIGHT & BOTTOM LEFT)
          ========================================================================= */}
      {/* Top Right Candle Sconce */}
      <motion.div
        animate={{ y: [-3, 3, -3], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 sm:top-6 -right-3 sm:right-2 md:right-6 lg:right-10 w-28 sm:w-36 md:w-44 lg:w-52 pointer-events-none z-20"
      >
        <AntiqueCandleSconce candlesCount={2} variant="right" />
      </motion.div>

      {/* Bottom Left Candle Sconce */}
      <motion.div
        animate={{ y: [3, -3, 3], rotate: [0, -0.4, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute bottom-4 sm:bottom-8 -left-3 sm:left-2 md:left-6 lg:left-10 w-28 sm:w-36 md:w-44 lg:w-52 pointer-events-none z-20"
      >
        <AntiqueCandleSconce candlesCount={3} variant="left" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* =========================================================================
            2. PURE CODE TITLE: "Talk Markets. It Trades"
            ========================================================================= */}
        <div className="text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#2d3e32] font-serif font-normal">
            Talk <span className="font-serif italic font-bold text-[#142218]">Markets.</span> It <span className="font-serif italic font-normal text-[#142218]">Trades</span>
          </h2>
        </div>

        {/* =========================================================================
            3. PURE CODE CANVAS: ALL 3 CARDS EMERGE FROM BOTTOM CENTER STONE PEDESTAL
            ========================================================================= */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]">
          
          {/* -----------------------------------------------------------------------
              CARD 1: LEFT CONVERSATION CARD
              Genie Funnel Emergence from Pedestal -> Land at -5° -> Hover Zoom
              ----------------------------------------------------------------------- */}
          <motion.div
            variants={card1GenieVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{
              scale: 1.06,
              rotate: -1.5,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45, 30, 15, 0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[8%] sm:top-[12%] left-0 sm:left-[4%] lg:left-[8%] w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 z-20 cursor-pointer origin-bottom"
          >
            <motion.div variants={chatFadeVariants} className="flex flex-col gap-3.5 sm:gap-4">
              <IMessageBubble
                text="why is BTC bid this morning, funding or spot?"
                side="left"
              />
              <IMessageBubble
                text="my ETH is up 34% scale."
                side="right"
              />
            </motion.div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              CARD 2: TOP-CENTER CONVERSATION CARD
              Genie Funnel Emergence from Pedestal -> Land at +4° -> Hover Zoom
              ----------------------------------------------------------------------- */}
          <motion.div
            variants={card2GenieVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{
              scale: 1.07,
              rotate: 1.2,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45, 30, 15, 0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[2%] sm:top-[4%] left-[44%] sm:left-[46%] lg:left-[48%] w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[310px] rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-5 sm:p-6 z-20 cursor-pointer hidden sm:block origin-bottom"
          >
            <motion.div variants={chatFadeVariants} className="flex flex-col">
              <IMessageBubble
                text="laddered. Stop trailing behind it."
                side="left"
              />
            </motion.div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              CARD 3: RIGHT CONVERSATION CARD
              Genie Funnel Emergence from Pedestal -> Land at +6° -> Hover Zoom
              ----------------------------------------------------------------------- */}
          <motion.div
            variants={card3GenieVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{
              scale: 1.06,
              rotate: 1.8,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45, 30, 15, 0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[38%] sm:top-[42%] right-0 sm:right-[4%] lg:right-[8%] w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[480px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 z-20 cursor-pointer origin-bottom"
          >
            <motion.div variants={chatFadeVariants} className="flex flex-col gap-3.5 sm:gap-4">
              <IMessageBubble
                text="what am I paying in gas this week?"
                side="left"
              />
              <IMessageBubble
                text="pay this invoice in USDC."
                side="right"
              />
            </motion.div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BOTTOM CENTER: CARVED STONE iMESSAGE PEDESTAL IMAGE
              Click to toggle Genie Emergence for all 3 cards
              ----------------------------------------------------------------------- */}
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
