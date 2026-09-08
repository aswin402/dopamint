import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ALL_72_AGENTS, type AgentCardData } from '@/data/agents';
import iconDope from '@/assets/Icondope.webp';

// Split agents evenly into 2 horizontal marquee lanes
const half = Math.ceil(ALL_72_AGENTS.length / 2);
const LANE_1 = ALL_72_AGENTS.slice(0, half);
const LANE_2 = ALL_72_AGENTS.slice(half);

interface AgentCardProps {
  agent: AgentCardData;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const parts = agent.role.split(' ');
  const mainRole = parts.slice(0, -1).join(' ');
  const suffix = parts[parts.length - 1];

  return (
    <div className="w-[340px] sm:w-[380px] md:w-[410px] h-[200px] sm:h-[215px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/50 hover:border-[#3e4f42]/90 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_18px_rgba(40,48,40,0.04)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5 cursor-pointer relative hover:z-20">
      {/* Top Header */}
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-2xl sm:text-[26px] font-serif text-[#25362a] tracking-tight leading-tight">
            <span className="font-serif italic font-bold">{mainRole}</span>{' '}
            <span className="font-serif italic font-normal text-[#38493d]">{suffix}</span>
          </h3>
        </div>

        {/* Description / One-liner */}
        <p className="text-sm sm:text-base md:text-[15px] text-[#3e5042] font-sans leading-relaxed mt-2 sm:mt-2.5 font-normal line-clamp-2">
          {agent.does}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {agent.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-0.5 rounded-full border border-[#445648]/35 bg-[#e0e8dc]/70 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#314234] font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AgentRoster: React.FC = () => {
  return (
    <section id="agents" className="w-full bg-[#f3f2e6] pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 overflow-hidden relative z-20">
      
      {/* =========================================================================
          1. 2-CARDS-WIDE CENTER TOP DOPE CARD
          ========================================================================= */}
      <div className="px-4 sm:px-6 w-full max-w-[700px] sm:max-w-[780px] md:max-w-[840px] mx-auto relative z-20 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.008 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full rounded-[28px] sm:rounded-[32px] bg-[#eef2ea] border-[1.5px] border-[#3e4f42]/60 hover:border-[#3e4f42]/90 px-6 py-5 sm:px-8 sm:py-6 flex flex-col items-center justify-center text-center shadow-[0_10px_28px_rgba(40,48,40,0.06)] relative overflow-hidden group"
        >
          {/* Subtle top edge highlight */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#3e4f42]/40 to-transparent" />

          {/* Title: DOPE runs the House */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#2d3e32] font-serif leading-tight mb-2 sm:mb-2.5">
            <span className="font-serif italic font-bold text-[#1e2e22]">DOPE</span>{' '}
            <span className="font-serif font-normal text-[#2d3e32]">runs the House</span>
          </h2>

          {/* Centered DOPE Icon */}
          <motion.div
            animate={{ y: [-2.5, 2.5, -2.5] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            className="my-1.5 flex items-center justify-center"
          >
            <img
              src={iconDope}
              alt="DOPE Head of Agents Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.16)] select-none transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>

          {/* Larger Capabilities Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-2 sm:mt-3">
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#445648]/40 bg-[#e0e8dc]/80 text-xs sm:text-[13px] md:text-sm font-mono uppercase tracking-wider text-[#263725] font-semibold">
              Orchestrator
            </span>
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#445648]/40 bg-[#e0e8dc]/80 text-xs sm:text-[13px] md:text-sm font-mono uppercase tracking-wider text-[#263725] font-semibold">
              TEE Security
            </span>
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#445648]/40 bg-[#e0e8dc]/80 text-xs sm:text-[13px] md:text-sm font-mono uppercase tracking-wider text-[#263725] font-semibold">
              Agent Harness
            </span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          2. ARCHITECTURAL BRANCHING DISTRIBUTION RAIL (BOUNDED EXACTLY BETWEEN DROPS)
          ========================================================================= */}
      <div className="w-full flex flex-col items-center relative z-10 -mt-[1px]">
        {/* Vertical feeder stem: directly touches card bottom edge with zero gap and no circle */}
        <div className="w-[2px] h-7 sm:h-8 bg-[#3e4f42]/85 relative overflow-hidden">
          {/* Top-to-down glow energy pulse originating from DOPE card */}
          <motion.div
            animate={{
              y: ['-100%', '-100%', '200%', '200%', '-100%'],
              opacity: [0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.04, 0.20, 0.24, 1],
            }}
            className="w-full h-5 bg-gradient-to-b from-transparent via-[#dfc28d] to-transparent shadow-[0_0_10px_#dfc28d]"
          />
        </div>

        {/* Crisp Horizontal Base Line: ONLY spans from 0% (Drop 1) to 100% (Drop 5) */}
        <div className="w-full max-w-[650px] sm:max-w-[720px] md:max-w-[780px] px-4 sm:px-0 relative -mt-0.5">
          <div className="relative w-full">
            {/* Horizontal Rail */}
            <div className="relative w-full h-[2px] bg-[#3e4f42]/80 rounded-full overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              {/* Ambient Gold Glow Underlay */}
              <div className="absolute inset-0 bg-[#c4a978]/25 blur-[0.5px]" />

              {/* LEFT BRANCH FLOW: Originates at center (50%), flows parallel to LEFT (0%) */}
              <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    x: ['0%', '0%', '-350%', '-350%', '0%'],
                    opacity: [0, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [0, 0.21, 0.49, 0.52, 1],
                  }}
                  className="absolute right-0 inset-y-0 w-28 sm:w-36 bg-gradient-to-l from-transparent via-[#dfc28d] to-transparent shadow-[0_0_12px_#dfc28d]"
                />
              </div>

              {/* RIGHT BRANCH FLOW: Originates at center (50%), flows parallel to RIGHT (100%) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    x: ['0%', '0%', '350%', '350%', '0%'],
                    opacity: [0, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [0, 0.21, 0.49, 0.52, 1],
                  }}
                  className="absolute left-0 inset-y-0 w-28 sm:w-36 bg-gradient-to-r from-transparent via-[#dfc28d] to-transparent shadow-[0_0_12px_#dfc28d]"
                />
              </div>
            </div>

            {/* 5 Distribution Drops - Exactly 0%, 25%, 50%, 75%, 100% (Zero overhangs) */}
            {[
              {
                pct: 0,
                dotTimes: [0, 0.47, 0.51, 0.57, 1],
                dropTimes: [0, 0.49, 0.64, 0.67, 1],
                medallionTimes: [0, 0.62, 0.66, 0.72, 1],
              },
              {
                pct: 25,
                dotTimes: [0, 0.33, 0.37, 0.43, 1],
                dropTimes: [0, 0.35, 0.50, 0.53, 1],
                medallionTimes: [0, 0.48, 0.52, 0.58, 1],
              },
              {
                pct: 50,
                dotTimes: [0, 0.18, 0.23, 0.30, 1],
                dropTimes: [0, 0.21, 0.36, 0.39, 1],
                medallionTimes: [0, 0.34, 0.38, 0.44, 1],
              },
              {
                pct: 75,
                dotTimes: [0, 0.33, 0.37, 0.43, 1],
                dropTimes: [0, 0.35, 0.50, 0.53, 1],
                medallionTimes: [0, 0.48, 0.52, 0.58, 1],
              },
              {
                pct: 100,
                dotTimes: [0, 0.47, 0.51, 0.57, 1],
                dropTimes: [0, 0.49, 0.64, 0.67, 1],
                medallionTimes: [0, 0.62, 0.66, 0.72, 1],
              },
            ].map(({ pct, dotTimes, dropTimes, medallionTimes }, idx) => (
              <div
                key={idx}
                style={{ left: `${pct}%` }}
                className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
              >
                {/* Rail Junction Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1, 1.3, 1, 1],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: dotTimes,
                  }}
                  className={`rounded-full bg-[#f3f2e6] shadow-xs z-10 ${
                    pct === 50
                      ? 'w-3.5 h-3.5 border-2 border-[#c4a978] shadow-[0_0_10px_rgba(196,169,120,0.8)] -mt-[5px] flex items-center justify-center'
                      : 'w-2.5 h-2.5 border-[1.5px] border-[#3e4f42] -mt-[3.5px]'
                  }`}
                >
                  {pct === 50 && <span className="w-1.5 h-1.5 rounded-full bg-[#25362a]" />}
                </motion.div>

                {/* Vertical Drop Conduit */}
                <div className="w-[1.5px] h-6 sm:h-7 bg-gradient-to-b from-[#3e4f42]/90 via-[#3e4f42]/60 to-[#c4a978] relative overflow-hidden">
                  <motion.div
                    animate={{
                      y: ['-100%', '-100%', '200%', '200%', '-100%'],
                      opacity: [0, 1, 1, 0, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      times: dropTimes,
                    }}
                    className="w-full h-3.5 bg-gradient-to-b from-transparent via-[#dfc28d] to-[#c4a978] shadow-[0_0_6px_#dfc28d]"
                  />
                </div>

                {/* Directional Jewelry Medallion with Animated Chevron */}
                <motion.div
                  animate={{
                    y: [0, 0, 2.5, 0, 0],
                    boxShadow: [
                      '0 4px 12px rgba(45,62,50,0.14)',
                      '0 4px 12px rgba(45,62,50,0.14)',
                      '0 0 16px rgba(223,194,141,0.9)',
                      '0 4px 12px rgba(45,62,50,0.14)',
                      '0 4px 12px rgba(45,62,50,0.14)',
                    ],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: medallionTimes,
                  }}
                  whileHover={{ scale: 1.15, y: 2 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ffffff] border-[1.5px] border-[#c4a978] shadow-[0_4px_12px_rgba(45,62,50,0.14)] flex items-center justify-center text-[#25362a] relative z-10 transition-transform cursor-pointer group"
                >
                  <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] text-[#2d3e32] group-hover:text-[#7a382e] transition-colors" />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Clearance spacing for the 24px medallions */}
          <div className="h-8 sm:h-9" />
        </div>
      </div>

      {/* =========================================================================
          3. TWO MARQUEE LANES (72 SPECIALIZED AGENTS)
          ========================================================================= */}
      <div className="relative w-full space-y-2 sm:space-y-3 overflow-hidden py-2">
        
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />

        {/* --- LANE 1: MOVES LEFT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused] py-1">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused] py-1" aria-hidden="true">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

        {/* --- LANE 2: MOVES RIGHT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused] py-1">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused] py-1" aria-hidden="true">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Subtitle / Monospace Caption */}
      <div className="w-full text-center pt-8 sm:pt-10 px-4">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#4a5c4e] font-bold">
          ONE INTERFACE · 250+ SPECIALIZED AGENTS
        </p>
      </div>

    </section>
  );
};
