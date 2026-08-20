import React from 'react';
import { motion } from 'framer-motion';
import { AntiqueCandleSconce } from './AntiqueCandleSconce';
import { CarvedStonePedestal } from './CarvedStonePedestal';
import { IMessageBubble } from './IMessageBubble';

export const RenaissanceRealAsks: React.FC = () => {
  return (
    <section id="asks" className="w-full bg-[#ffffff] pt-16 sm:pt-24 pb-20 sm:pb-32 relative z-20 overflow-hidden select-none">
      
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
            3. PURE CODE CANVAS WITH 3 CONVERSATION CARDS & STONE PEDESTAL
            ========================================================================= */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]">
          
          {/* -----------------------------------------------------------------------
              CARD 1: LEFT CONVERSATION CARD
              Initial: -5deg tilt -> Hover: zoom in (1.06x) & partially straighten to -1.5deg
              ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true }}
            animate={{ y: [-5, 5, -5] }}
            whileHover={{
              scale: 1.06,
              rotate: -1.5,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45, 30, 15, 0.14)',
            }}
            transition={{
              y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut' },
              scale: { type: 'spring', stiffness: 280, damping: 20 },
              rotate: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[8%] sm:top-[12%] left-0 sm:left-[4%] lg:left-[8%] w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 z-20 cursor-pointer origin-center"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4">
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

          {/* -----------------------------------------------------------------------
              CARD 2: TOP-CENTER CONVERSATION CARD
              Initial: +4deg tilt -> Hover: zoom in (1.07x) & partially straighten to +1.2deg
              ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            viewport={{ once: true }}
            animate={{ y: [4, -4, 4] }}
            whileHover={{
              scale: 1.07,
              rotate: 1.2,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45, 30, 15, 0.14)',
            }}
            transition={{
              y: { duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
              scale: { type: 'spring', stiffness: 280, damping: 20 },
              rotate: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[2%] sm:top-[4%] left-[44%] sm:left-[46%] lg:left-[48%] w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[310px] rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-5 sm:p-6 z-20 cursor-pointer hidden sm:block origin-center"
          >
            <div className="flex flex-col">
              <IMessageBubble
                text="laddered. Stop trailing behind it."
                side="left"
              />
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              CARD 3: RIGHT CONVERSATION CARD
              Initial: +6deg tilt -> Hover: zoom in (1.06x) & partially straighten to +1.8deg
              ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            animate={{ y: [-4, 4, -4] }}
            whileHover={{
              scale: 1.06,
              rotate: 1.8,
              zIndex: 40,
              boxShadow: '0 30px 65px -12px rgba(45, 30, 15, 0.14)',
            }}
            transition={{
              y: { duration: 5.3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
              scale: { type: 'spring', stiffness: 280, damping: 20 },
              rotate: { type: 'spring', stiffness: 280, damping: 20 },
            }}
            className="imsg-card absolute top-[38%] sm:top-[42%] right-0 sm:right-[4%] lg:right-[8%] w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[480px] rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] shadow-[0_20px_50px_rgba(50,35,20,0.06)] p-6 sm:p-9 z-20 cursor-pointer origin-center"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <IMessageBubble
                text="what am I paying in gas this week?"
                side="left"
              />
              <IMessageBubble
                text="pay this invoice in USDC."
                side="right"
              />
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BOTTOM CENTER: PURE CODE CARVED STONE iMESSAGE PEDESTAL
              ----------------------------------------------------------------------- */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 sm:w-52 md:w-60 lg:w-64 pointer-events-none z-20 flex flex-col items-center">
            <CarvedStonePedestal />
          </div>

        </div>

      </div>

    </section>
  );
};
