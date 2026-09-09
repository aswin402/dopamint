import React, { useState, useRef } from 'react';
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
  onHover?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onLeave?: () => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onHover, onLeave }) => {
  const parts = agent.role.split(' ');
  const mainRole = parts.slice(0, -1).join(' ');
  const suffix = parts[parts.length - 1];

  return (
    <div
      onMouseEnter={onHover}
      onMouseMove={onHover}
      onMouseLeave={onLeave}
      className="w-[365px] min-[390px]:w-[385px] sm:w-[395px] md:w-[415px] h-[218px] min-[390px]:h-[226px] sm:h-[225px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/50 hover:border-[#3e4f42]/90 p-5.5 sm:p-6 flex flex-col justify-between shadow-[0_4px_18px_rgba(40,48,40,0.04)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5 cursor-pointer relative hover:z-20"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[25px] min-[390px]:text-[27px] sm:text-[28px] font-serif text-[#25362a] tracking-tight leading-tight">
            <span className="font-serif italic font-bold">{mainRole}</span>{' '}
            <span className="font-serif italic font-normal text-[#38493d]">{suffix}</span>
          </h3>
        </div>

        {/* Description / One-liner */}
        <p className="text-[14.5px] min-[390px]:text-[15.5px] sm:text-[16px] text-[#3e5042] font-sans leading-relaxed mt-2 sm:mt-2.5 font-normal line-clamp-2">
          {agent.does}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-1.5 min-[390px]:gap-2 pt-1">
        {agent.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 sm:px-3 sm:py-0.5 rounded-full border border-[#445648]/35 bg-[#e0e8dc]/70 text-[11px] min-[390px]:text-[12px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#314234] font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AgentRoster: React.FC = () => {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!railRef.current) return;
    const railRect = railRef.current.getBoundingClientRect();
    const cardRect = e.currentTarget.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const rel = (cardCenterX - railRect.left) / railRect.width;
    const closestIndex = Math.min(4, Math.max(0, Math.round(rel * 4)));
    setHoveredCol(closestIndex);
  };

  const handleCardLeave = () => {
    setHoveredCol(null);
  };

  const isSegActive = (seg: 'A' | 'B' | 'C' | 'D') => {
    if (hoveredCol === null) return true;
    if (seg === 'A') return hoveredCol === 0;
    if (seg === 'B') return hoveredCol === 0 || hoveredCol === 1;
    if (seg === 'C') return hoveredCol === 3 || hoveredCol === 4;
    if (seg === 'D') return hoveredCol === 4;
    return false;
  };

  const isDropActive = (colIndex: number) => {
    if (hoveredCol === null) return true;
    return hoveredCol === colIndex;
  };

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
          2. ARCHITECTURAL BRANCHING DISTRIBUTION RAIL (ANIMATED DASHED LINES)
          ========================================================================= */}
      <div className="w-full flex flex-col items-center relative z-10 -mt-[1px]">
        {/* Vertical feeder stem: directly touches card bottom edge with zero gap */}
        <div className="flex flex-col items-center w-full">
          <svg width="6" height="30" className="overflow-visible">
            <line
              x1="3"
              y1="0"
              x2="3"
              y2="30"
              stroke={hoveredCol !== null ? '#1b2a1e' : '#3e4f42'}
              strokeWidth={hoveredCol !== null ? 2.5 : 2}
              className="animate-dash-down transition-branch"
            />
          </svg>
        </div>

        {/* Crisp Horizontal Bus & 5 Drops Structure */}
        <div
          ref={railRef}
          className="w-full max-w-[650px] sm:max-w-[720px] md:max-w-[780px] px-4 sm:px-0 relative h-[58px]"
        >
          {/* SVG Dashed Infrastructure: 4 Rail Segments + 5 Vertical Drops */}
          <svg
            className="w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 1000 58"
            preserveAspectRatio="none"
          >
            {/* Segment A: 0 to 250 (Leftmost to Col 1, flows left) */}
            <line
              x1="0"
              y1="2"
              x2="250"
              y2="2"
              vectorEffect="non-scaling-stroke"
              stroke={hoveredCol !== null && isSegActive('A') ? '#1b2a1e' : '#3e4f42'}
              strokeWidth={hoveredCol !== null && isSegActive('A') ? 2.5 : 2}
              opacity={isSegActive('A') ? 1 : 0}
              className="animate-dash-left transition-branch"
            />

            {/* Segment B: 250 to 500 (Col 1 to Center, flows left) */}
            <line
              x1="250"
              y1="2"
              x2="500"
              y2="2"
              vectorEffect="non-scaling-stroke"
              stroke={hoveredCol !== null && isSegActive('B') ? '#1b2a1e' : '#3e4f42'}
              strokeWidth={hoveredCol !== null && isSegActive('B') ? 2.5 : 2}
              opacity={isSegActive('B') ? 1 : 0}
              className="animate-dash-left transition-branch"
            />

            {/* Segment C: 500 to 750 (Center to Col 3, flows right) */}
            <line
              x1="500"
              y1="2"
              x2="750"
              y2="2"
              vectorEffect="non-scaling-stroke"
              stroke={hoveredCol !== null && isSegActive('C') ? '#1b2a1e' : '#3e4f42'}
              strokeWidth={hoveredCol !== null && isSegActive('C') ? 2.5 : 2}
              opacity={isSegActive('C') ? 1 : 0}
              className="animate-dash-right transition-branch"
            />

            {/* Segment D: 750 to 1000 (Col 3 to Col 4, flows right) */}
            <line
              x1="750"
              y1="2"
              x2="1000"
              y2="2"
              vectorEffect="non-scaling-stroke"
              stroke={hoveredCol !== null && isSegActive('D') ? '#1b2a1e' : '#3e4f42'}
              strokeWidth={hoveredCol !== null && isSegActive('D') ? 2.5 : 2}
              opacity={isSegActive('D') ? 1 : 0}
              className="animate-dash-right transition-branch"
            />

            {/* 5 Vertical Drop Lines (0%, 25%, 50%, 75%, 100%) */}
            {[0, 250, 500, 750, 1000].map((x, idx) => {
              const active = isDropActive(idx);
              return (
                <line
                  key={`drop-${idx}`}
                  x1={x}
                  y1="2"
                  x2={x}
                  y2="34"
                  vectorEffect="non-scaling-stroke"
                  stroke={hoveredCol !== null && active ? '#1b2a1e' : '#3e4f42'}
                  strokeWidth={hoveredCol !== null && active ? 2.5 : 2}
                  opacity={active ? 1 : 0}
                  className="animate-dash-down transition-branch"
                />
              );
            })}
          </svg>

          {/* 5 Drops: Rail Junction Dots & Directional Medallions */}
          {[0, 25, 50, 75, 100].map((pct, idx) => {
            const active = isDropActive(idx);
            const isHovered = hoveredCol === idx;

            return (
              <div
                key={`col-node-${idx}`}
                style={{ left: `${pct}%` }}
                onMouseEnter={() => setHoveredCol(idx)}
                onMouseLeave={() => setHoveredCol(null)}
                className={`absolute top-0 -translate-x-1/2 flex flex-col items-center cursor-pointer transition-branch ${
                  active ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } ${isHovered ? 'scale-110' : 'scale-100'}`}
              >
                {/* Rail Junction Dot */}
                <div
                  className={`rounded-full bg-[#f3f2e6] shadow-xs z-10 transition-transform ${
                    pct === 50
                      ? 'w-3.5 h-3.5 border-2 border-[#c4a978] shadow-[0_0_10px_rgba(196,169,120,0.8)] -mt-[5px] flex items-center justify-center'
                      : 'w-2.5 h-2.5 border-[1.5px] border-[#3e4f42] -mt-[3.5px]'
                  } ${isHovered ? 'ring-2 ring-[#c4a978]/60' : ''}`}
                >
                  {pct === 50 && <span className="w-1.5 h-1.5 rounded-full bg-[#25362a]" />}
                </div>

                {/* Drop line conduit spacer */}
                <div className="h-[27px]" />

                {/* Directional Jewelry Medallion with Chevron */}
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ffffff] border-[1.5px] transition-all shadow-[0_4px_12px_rgba(45,62,50,0.14)] flex items-center justify-center text-[#2d3e32] relative z-10 ${
                    isHovered
                      ? 'border-[#7a382e] shadow-[0_0_16px_rgba(223,194,141,0.9)] text-[#7a382e]'
                      : 'border-[#c4a978]'
                  }`}
                >
                  <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clearance spacing before marquee */}
        <div className="h-4 sm:h-5" />
      </div>

      {/* =========================================================================
          3. TWO MARQUEE LANES (72 SPECIALIZED AGENTS)
          ========================================================================= */}
      <div className="relative w-full space-y-2 sm:space-y-3 overflow-hidden py-2">
        
        {/* Soft edge gradient masks (hidden on mobile, visible on sm+) */}
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />

        {/* --- LANE 1: MOVES LEFT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused] py-1">
            {LANE_1.map((agent) => (
              <AgentCard
                key={`lane1-${agent.id}`}
                agent={agent}
                onHover={handleCardHover}
                onLeave={handleCardLeave}
              />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused] py-1" aria-hidden="true">
            {LANE_1.map((agent) => (
              <AgentCard
                key={`lane1-dup-${agent.id}`}
                agent={agent}
                onHover={handleCardHover}
                onLeave={handleCardLeave}
              />
            ))}
          </div>
        </div>

        {/* --- LANE 2: MOVES RIGHT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused] py-1">
            {LANE_2.map((agent) => (
              <AgentCard
                key={`lane2-${agent.id}`}
                agent={agent}
                onHover={handleCardHover}
                onLeave={handleCardLeave}
              />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused] py-1" aria-hidden="true">
            {LANE_2.map((agent) => (
              <AgentCard
                key={`lane2-dup-${agent.id}`}
                agent={agent}
                onHover={handleCardHover}
                onLeave={handleCardLeave}
              />
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
