import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ALL_72_AGENTS, type AgentCardData } from '@/data/agents';
import iconDope from '@/assets/Icondope.webp';

// Split agents evenly into 2 horizontal marquee lanes
const half = Math.ceil(ALL_72_AGENTS.length / 2);
const LANE_1 = ALL_72_AGENTS.slice(0, half);
const LANE_2 = ALL_72_AGENTS.slice(half);

interface AgentCardProps {
  agent: AgentCardData;
  isFocused?: boolean;
  onHover?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onLeave?: () => void;
  onCardClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  isFocused,
  onHover,
  onLeave,
  onCardClick,
}) => {
  const parts = agent.role.split(' ');
  const mainRole = parts.slice(0, -1).join(' ');
  const suffix = parts[parts.length - 1];

  return (
    <div
      onClick={onCardClick}
      onMouseEnter={onHover}
      onMouseMove={onHover}
      onMouseLeave={onLeave}
      className={`w-[285px] min-[360px]:w-[310px] min-[390px]:w-[330px] sm:w-[395px] md:w-[415px] h-[188px] min-[390px]:h-[196px] sm:h-[225px] shrink-0 rounded-[24px] sm:rounded-[32px] p-4 min-[390px]:p-4.5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer relative hover:z-20 ${
        isFocused
          ? 'bg-[#e5ede0] border-2 border-[#1e2e22] shadow-[0_12px_32px_rgba(30,46,34,0.18)] scale-[1.02] ring-2 ring-[#3e4f42]/40 z-30'
          : 'bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/50 hover:border-[#3e4f42]/90 shadow-[0_4px_18px_rgba(40,48,40,0.04)] hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5'
      }`}
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
        <p className="text-[14.5px] min-[390px]:text-[15.5px] sm:text-[16px] text-[#3e5042] font-sans leading-snug sm:leading-relaxed mt-1.5 sm:mt-2.5 font-normal line-clamp-2">
          {agent.does}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-1.5 min-[390px]:gap-2 pt-1">
        {agent.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-0.5 min-[390px]:px-3 min-[390px]:py-1 sm:px-3 sm:py-0.5 rounded-full border border-[#445648]/35 bg-[#e0e8dc]/70 text-[11px] min-[390px]:text-[12px] sm:text-[11.5px] font-mono uppercase tracking-wider text-[#314234] font-medium"
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
  const [focusedCardKey, setFocusedCardKey] = useState<string | null>(null);
  const [focusedLane, setFocusedLane] = useState<1 | 2 | null>(null);
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

  const handleCardClick = (cardKey: string, lane: 1 | 2) => {
    if (focusedCardKey === cardKey) {
      // Toggle off / resume
      setFocusedCardKey(null);
      setFocusedLane(null);
    } else {
      setFocusedCardKey(cardKey);
      setFocusedLane(lane);
    }
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
          2. ARCHITECTURAL DISTRIBUTION RAIL / LINES (DASHED FLOW)
             - Mobile: Single centered vertical straight dashed line (like Image 2, no dots, no ticks)
             - Desktop: 5-column branching bus (pure dashed lines, no dots, no ticks)
          ========================================================================= */}
      <div className="w-full flex flex-col items-center relative z-10 -mt-[1px]">
        {/* MOBILE ONLY: Single Centered Straight Dashed Line */}
        <div className="flex sm:hidden flex-col items-center w-full my-0.5">
          <svg width="6" height="22" className="overflow-visible pointer-events-none">
            <line
              x1="3"
              y1="0"
              x2="3"
              y2="22"
              stroke={focusedCardKey ? '#1b2a1e' : '#3e4f42'}
              strokeWidth={focusedCardKey ? 2.5 : 2}
              className="animate-dash-down transition-branch"
            />
          </svg>
        </div>

        {/* DESKTOP ONLY: 5-Branching Distribution Bus (Pure dashed lines, no dots, no ticks) */}
        <div className="hidden sm:flex flex-col items-center w-full">
          {/* Vertical feeder stem: directly touches card bottom edge with zero gap */}
          <svg width="6" height="30" className="overflow-visible pointer-events-none">
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

          {/* Crisp Horizontal Bus & 5 Drops Structure */}
          <div
            ref={railRef}
            className="w-full max-w-[650px] sm:max-w-[720px] md:max-w-[780px] px-4 sm:px-0 relative h-[44px]"
          >
            {/* SVG Dashed Infrastructure: 4 Rail Segments + 5 Vertical Drops */}
            <svg
              className="w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 1000 44"
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
                    y2="44"
                    vectorEffect="non-scaling-stroke"
                    stroke={hoveredCol !== null && active ? '#1b2a1e' : '#3e4f42'}
                    strokeWidth={hoveredCol !== null && active ? 2.5 : 2}
                    opacity={active ? 1 : 0}
                    className="animate-dash-down transition-branch"
                  />
                );
              })}
            </svg>

            {/* Invisible interactive hover guides at drops */}
            {[0, 25, 50, 75, 100].map((pct, idx) => (
              <div
                key={`hit-${idx}`}
                style={{ left: `${pct}%` }}
                onMouseEnter={() => setHoveredCol(idx)}
                onMouseLeave={() => setHoveredCol(null)}
                className="absolute top-0 bottom-0 w-12 -translate-x-1/2 cursor-pointer z-10"
              />
            ))}
          </div>

          {/* Clearance spacing before marquee */}
          <div className="h-4 sm:h-5" />
        </div>
      </div>

      {/* =========================================================================
          3. TWO MARQUEE LANES (72 SPECIALIZED AGENTS)
          ========================================================================= */}
      <div className="relative w-full space-y-1.5 sm:space-y-3 overflow-hidden py-0.5 sm:py-2">
        
        {/* Soft edge gradient masks (hidden on mobile, visible on sm+) */}
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />

        {/* --- LANE 1: MOVES LEFT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-1 sm:py-4 sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            style={focusedLane === 1 ? { animationPlayState: 'paused' } : undefined}
            className="flex gap-3.5 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused] py-1"
          >
            {LANE_1.map((agent) => {
              const key = `lane1-${agent.id}`;
              return (
                <AgentCard
                  key={key}
                  agent={agent}
                  isFocused={focusedCardKey === key}
                  onHover={handleCardHover}
                  onLeave={handleCardLeave}
                  onCardClick={() => handleCardClick(key, 1)}
                />
              );
            })}
          </div>
          <div
            style={focusedLane === 1 ? { animationPlayState: 'paused' } : undefined}
            className="flex gap-3.5 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused] py-1"
            aria-hidden="true"
          >
            {LANE_1.map((agent) => {
              const key = `lane1-dup-${agent.id}`;
              return (
                <AgentCard
                  key={key}
                  agent={agent}
                  isFocused={focusedCardKey === key}
                  onHover={handleCardHover}
                  onLeave={handleCardLeave}
                  onCardClick={() => handleCardClick(key, 1)}
                />
              );
            })}
          </div>
        </div>

        {/* --- LANE 2: MOVES RIGHT (36 Agents) --- */}
        <div className="flex w-full overflow-hidden py-1 sm:py-4 sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            style={focusedLane === 2 ? { animationPlayState: 'paused' } : undefined}
            className="flex gap-3.5 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused] py-1"
          >
            {LANE_2.map((agent) => {
              const key = `lane2-${agent.id}`;
              return (
                <AgentCard
                  key={key}
                  agent={agent}
                  isFocused={focusedCardKey === key}
                  onHover={handleCardHover}
                  onLeave={handleCardLeave}
                  onCardClick={() => handleCardClick(key, 2)}
                />
              );
            })}
          </div>
          <div
            style={focusedLane === 2 ? { animationPlayState: 'paused' } : undefined}
            className="flex gap-3.5 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused] py-1"
            aria-hidden="true"
          >
            {LANE_2.map((agent) => {
              const key = `lane2-dup-${agent.id}`;
              return (
                <AgentCard
                  key={key}
                  agent={agent}
                  isFocused={focusedCardKey === key}
                  onHover={handleCardHover}
                  onLeave={handleCardLeave}
                  onCardClick={() => handleCardClick(key, 2)}
                />
              );
            })}
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

