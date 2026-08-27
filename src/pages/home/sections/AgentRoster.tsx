import React from 'react';
import { motion } from 'framer-motion';
import { ALL_72_AGENTS, type AgentCardData } from '@/data/agents';
import iconDope from '@/assets/Icondope.png';

// Split 72 agents evenly into 2 horizontal marquee lanes (36 in each)
const LANE_1 = ALL_72_AGENTS.slice(0, 36);
const LANE_2 = ALL_72_AGENTS.slice(36, 72);

interface AgentCardProps {
  agent: AgentCardData;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const parts = agent.role.split(' ');
  const mainRole = parts.slice(0, -1).join(' ');
  const suffix = parts[parts.length - 1];

  return (
    <div className="w-[340px] sm:w-[380px] md:w-[410px] h-[200px] sm:h-[215px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/50 hover:border-[#3e4f42]/90 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_18px_rgba(40,48,40,0.04)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5 select-none cursor-pointer relative hover:z-20">
      {/* Top Header */}
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-2xl sm:text-[26px] font-serif text-[#25362a] tracking-tight leading-tight">
            <span className="font-serif italic font-bold">{mainRole}</span>{' '}
            <span className="font-serif italic font-normal text-[#38493d]">{suffix}</span>
          </h3>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4a5c4e] font-semibold shrink-0">
            {agent.name}
          </span>
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
      <div className="px-4 sm:px-6 w-full max-w-[700px] sm:max-w-[780px] md:max-w-[840px] mx-auto mb-1 relative z-20">
        <motion.div
          whileHover={{ y: -3, scale: 1.01 }}
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
          2. MULTI-POINT ANIMATED BRANCHING CONNECTOR TO BOTTOM CARDS
          ========================================================================= */}
      <div className="w-full max-w-4xl mx-auto px-4 my-1 sm:my-2 relative z-10 flex flex-col items-center">
        {/* Top center stem */}
        <div className="w-[1.5px] h-4 sm:h-5 bg-[#3e4f42]/60 relative overflow-hidden">
          <motion.div
            animate={{ y: [-15, 25] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            className="w-full h-3.5 bg-gradient-to-b from-transparent via-[#25362a] to-transparent shadow-[0_0_6px_rgba(37,54,42,0.8)]"
          />
        </div>

        {/* SVG Multi-Point Branching Tree (5 Drop Lines pointing down across width) */}
        <div className="w-full h-7 sm:h-9 relative">
          <svg className="w-full h-full" viewBox="0 0 800 36" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="branchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3e4f42" stopOpacity="0.2" />
                <stop offset="20%" stopColor="#3e4f42" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#25362a" stopOpacity="1" />
                <stop offset="80%" stopColor="#3e4f42" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3e4f42" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Horizontal Distribution Rail */}
            <path
              d="M 80 10 H 720"
              stroke="url(#branchGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Center drop from stem */}
            <path
              d="M 400 0 V 10"
              stroke="#25362a"
              strokeWidth="1.5"
            />

            {/* 5 Vertical Drop Lines pointing down */}
            <path d="M 80 10 V 28" stroke="#3e4f42" strokeWidth="1.5" strokeOpacity="0.7" />
            <path d="M 240 10 V 28" stroke="#3e4f42" strokeWidth="1.5" strokeOpacity="0.85" />
            <path d="M 400 10 V 28" stroke="#25362a" strokeWidth="1.5" strokeOpacity="1" />
            <path d="M 560 10 V 28" stroke="#3e4f42" strokeWidth="1.5" strokeOpacity="0.85" />
            <path d="M 720 10 V 28" stroke="#3e4f42" strokeWidth="1.5" strokeOpacity="0.7" />

            {/* 5 Arrowheads pointing to cards */}
            <path d="M 77 24 L 80 30 L 83 24" stroke="#3e4f42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 237 24 L 240 30 L 243 24" stroke="#3e4f42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 397 24 L 400 30 L 403 24" stroke="#25362a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 557 24 L 560 30 L 563 24" stroke="#3e4f42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 717 24 L 720 30 L 723 24" stroke="#3e4f42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Animated Traveling Pulses along branches */}
            <circle r="2" fill="#25362a">
              <animateMotion
                path="M 400 0 V 10 H 80 V 30"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#25362a">
              <animateMotion
                path="M 400 0 V 10 H 240 V 30"
                dur="1.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#25362a">
              <animateMotion
                path="M 400 0 V 30"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#25362a">
              <animateMotion
                path="M 400 0 V 10 H 560 V 30"
                dur="1.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#25362a">
              <animateMotion
                path="M 400 0 V 10 H 720 V 30"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
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
