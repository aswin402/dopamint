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
    <div className="w-[340px] sm:w-[380px] md:w-[410px] h-[200px] sm:h-[215px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/50 hover:border-[#3e4f42]/85 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_18px_rgba(40,48,40,0.04)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5 select-none cursor-pointer">
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
    <section id="agents" className="w-full bg-[#f3f2e6] pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden relative z-20">
      
      {/* =========================================================================
          1. CENTER TOP DOPE CARD
          ========================================================================= */}
      <div className="px-4 sm:px-8 max-w-2xl mx-auto mb-2 relative z-20">
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full rounded-[32px] sm:rounded-[36px] bg-[#eef2ea] border-[2px] border-[#3e4f42]/60 hover:border-[#3e4f42]/90 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_12px_36px_rgba(40,48,40,0.08)] relative overflow-hidden group"
        >
          {/* Subtle top light line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#3e4f42]/40 to-transparent" />

          {/* Title: DOPE runs the House */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2d3e32] font-serif leading-[1.1] mb-3 sm:mb-4">
            <span className="font-serif italic font-bold text-[#1e2e22]">DOPE</span>{' '}
            <span className="font-serif font-normal text-[#2d3e32]">runs the House</span>
          </h2>

          {/* Centered DOPE Icon with Gentle Floating Animation */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            className="my-1 sm:my-2 flex items-center justify-center"
          >
            <img
              src={iconDope}
              alt="DOPE Head of Agents Icon"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)] select-none transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#3e5042] font-serif italic max-w-lg leading-relaxed mt-2 sm:mt-3 mb-4">
            The Head of Agents turning your intent into action across a network of specialized agents running in TEE environment.
          </p>

          {/* Capabilities Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="px-3 py-1 rounded-full border border-[#445648]/40 bg-[#e0e8dc]/80 text-[10.5px] sm:text-xs font-mono uppercase tracking-wider text-[#263725] font-semibold">
              Orchestrator
            </span>
            <span className="px-3 py-1 rounded-full border border-[#445648]/40 bg-[#e0e8dc]/80 text-[10.5px] sm:text-xs font-mono uppercase tracking-wider text-[#263725] font-semibold">
              Confidential TEE
            </span>
            <span className="px-3 py-1 rounded-full border border-[#445648]/40 bg-[#e0e8dc]/80 text-[10.5px] sm:text-xs font-mono uppercase tracking-wider text-[#263725] font-semibold">
              Agent Harness
            </span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          2. ANIMATED CONNECTING LINE (DOPE CARD -> 2 MARQUEE ROWS)
          ========================================================================= */}
      <div className="flex flex-col items-center justify-center my-3 sm:my-4 relative z-10">
        <div className="w-[2px] h-10 sm:h-14 bg-gradient-to-b from-[#3e4f42]/70 via-[#2d3e32] to-[#3e4f42]/40 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [-15, 60] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-6 bg-gradient-to-b from-transparent via-[#3e4f42] to-transparent shadow-[0_0_8px_rgba(62,79,66,0.6)]"
          />
        </div>
        {/* Pulsing hub node */}
        <div className="relative flex items-center justify-center -mt-0.5">
          <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#3e4f42] opacity-35" />
          <div className="w-3 h-3 rounded-full bg-[#2d3e32] border border-[#3e4f42] shadow-[0_0_6px_rgba(62,79,66,0.4)]" />
        </div>
      </div>

      {/* =========================================================================
          3. TWO MARQUEE LANES (72 SPECIALIZED AGENTS)
          ========================================================================= */}
      <div className="relative w-full space-y-3 sm:space-y-4 overflow-hidden pt-1">
        
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />

        {/* --- LANE 1: MOVES LEFT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused]">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

        {/* --- LANE 2: MOVES RIGHT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused]">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Subtitle / Monospace Caption */}
      <div className="w-full text-center pt-8 sm:pt-10 px-4">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#4a5c4e] font-bold">
          ONE INTERFACE · 72+ SPECIALIZED AGENTS
        </p>
      </div>

    </section>
  );
};
