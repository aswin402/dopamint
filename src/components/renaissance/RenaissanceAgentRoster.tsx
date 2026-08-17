import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import suppersBg from '../../assets/Suppers.png';

import profile1 from '../../assets/Profiles/Profile_ (1).png';
import profile2 from '../../assets/Profiles/Profile_ (2).png';
import profile3 from '../../assets/Profiles/Profile_ (3).png';
import profile4 from '../../assets/Profiles/Profile_ (4).png';
import profile5 from '../../assets/Profiles/Profile_ (5).png';
import profile6 from '../../assets/Profiles/Profile_ (6).png';
import profile7 from '../../assets/Profiles/Profile_ (7).png';
import profile8 from '../../assets/Profiles/Profile_ (8).png';
import profile9 from '../../assets/Profiles/Profile_ (9).png';
import profile10 from '../../assets/Profiles/Profile_ (10).png';
import profile11 from '../../assets/Profiles/Profile_ (11).png';
import profile12 from '../../assets/Profiles/Profile_ (12).png';

interface SupperAgent {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
  xPercent: number; // Horizontal position % across the painting
}

const SUPPER_AGENTS: SupperAgent[] = [
  {
    id: 1,
    name: 'Sol',
    role: 'PORTFOLIO AGENT',
    description: 'Catches dips under your budget cap and rebalances without asking.',
    avatar: profile1,
    xPercent: 6,
  },
  {
    id: 2,
    name: 'Ada',
    role: 'BOOKING AGENT',
    description: 'Secures dinner reservations, flights, and hotels within policy.',
    avatar: profile2,
    xPercent: 13,
  },
  {
    id: 3,
    name: 'Kai',
    role: 'SUBSCRIPTION AGENT',
    description: 'Spots forgotten recurring charges and bundles 1-tap cancellations.',
    avatar: profile3,
    xPercent: 20,
  },
  {
    id: 4,
    name: 'Nora',
    role: 'INBOX AGENT',
    description: 'Triages 150+ daily emails, drafts replies, and filters noise.',
    avatar: profile4,
    xPercent: 27,
  },
  {
    id: 5,
    name: 'Leo',
    role: 'RESEARCH AGENT',
    description: 'Reads technical papers overnight and delivers concise 3-bullet briefings.',
    avatar: profile5,
    xPercent: 34,
  },
  {
    id: 6,
    name: 'Eve',
    role: 'CALENDAR AGENT',
    description: 'Keeps your day together and reshuffles when it isn\'t.',
    avatar: profile6,
    xPercent: 41,
  },
  // Center figure (48-52%) has no card
  {
    id: 7,
    name: 'Iris',
    role: 'ONCHAIN AGENT',
    description: 'Settles per-call x402 endpoints and multi-hop DEX routes autonomously.',
    avatar: profile7,
    xPercent: 59,
  },
  {
    id: 8,
    name: 'Rex',
    role: 'SECURITY AGENT',
    description: 'Enforces MPC cryptographic sandbox bounds and daily spending limits.',
    avatar: profile8,
    xPercent: 66,
  },
  {
    id: 9,
    name: 'Maya',
    role: 'TRAVEL AGENT',
    description: 'Builds tailored itineraries and manages delays with automatic rerouting.',
    avatar: profile9,
    xPercent: 73,
  },
  {
    id: 10,
    name: 'Aria',
    role: 'CREATIVE AGENT',
    description: 'Generates UI themes, visual drafts, and brand assets on demand.',
    avatar: profile10,
    xPercent: 80,
  },
  {
    id: 11,
    name: 'Vance',
    role: 'ANALYTICS AGENT',
    description: 'Monitors real-time telemetry, order book depth, and market volatility.',
    avatar: profile11,
    xPercent: 87,
  },
  {
    id: 12,
    name: 'Cody',
    role: 'DEVELOPER AGENT',
    description: 'Runs automated test suites, triggers CI/CD builds, and checks PRs.',
    avatar: profile12,
    xPercent: 94,
  },
];

export const RenaissanceAgentRoster: React.FC = () => {
  // Default to Eve (id: 6) as shown in reference mockup
  const [activeAgentId, setActiveAgentId] = useState<number | null>(6);

  const activeAgent = SUPPER_AGENTS.find((a) => a.id === activeAgentId) || SUPPER_AGENTS[5];

  // Helper to clamp card positioning within left/right viewport boundaries
  const getCardLeftOffset = (xPercent: number) => {
    if (xPercent < 20) return '15%';
    if (xPercent > 80) return '82%';
    return `${xPercent}%`;
  };

  return (
    <section id="agents" className="relative w-full overflow-hidden bg-neutral-950 select-none">
      
      {/* =========================================================================
          1. SUPPERS.PNG PANORAMIC PAINTING CANVAS WITH HOVER HOTSPOTS
          ========================================================================= */}
      <div className="relative w-full min-h-[580px] sm:min-h-[700px] lg:min-h-[860px] flex flex-col justify-between items-center overflow-hidden">
        
        {/* Background Painting */}
        <img
          src={suppersBg}
          alt="The Last Supper AI Agents"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Ambient Top & Bottom Shadow Gradients for Readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10" />

        {/* =========================================================================
            2. TOP EDITORIAL HEADLINE
            ========================================================================= */}
        <div className="relative z-20 pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-8 text-center max-w-5xl mx-auto space-y-3 pointer-events-none">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white select-none font-serif font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            One app, a <span className="font-serif italic font-bold text-white">whole crew.</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/90 font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            JUST ASK, AND WHICHEVER AGENT HANDLES THAT SHOWS UP.
          </p>
        </div>

        {/* =========================================================================
            3. 12 INTERACTIVE HOVER HOTSPOTS (Spread Across the Feast Table)
            ========================================================================= */}
        <div className="absolute inset-0 z-30 pointer-events-auto">
          {SUPPER_AGENTS.map((agent) => {
            const isActive = activeAgentId === agent.id;

            return (
              <div
                key={agent.id}
                onMouseEnter={() => setActiveAgentId(agent.id)}
                onClick={() => setActiveAgentId(agent.id)}
                style={{ left: `${agent.xPercent}%` }}
                className="absolute top-[32%] sm:top-[30%] -translate-x-1/2 w-[7.5%] sm:w-[6.5%] h-[38%] sm:h-[42%] cursor-pointer group"
              >
                {/* Subtle Hover Pulse Halo */}
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 ring-2 ring-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                      : 'group-hover:bg-white/5'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            4. ACTIVE AGENT FLOATING CARD & CONNECTING DASHED LINE
            ========================================================================= */}
        <div className="relative z-40 w-full max-w-7xl mx-auto px-4 pb-12 sm:pb-16 lg:pb-20 flex justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {activeAgent && (
              <motion.div
                key={activeAgent.id}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  left: getCardLeftOffset(activeAgent.xPercent),
                  transform: 'translateX(-50%)',
                  bottom: '3rem',
                }}
                className="pointer-events-auto"
              >
                {/* Dashed Connecting Line (From Character/Table Down to Card) */}
                <div className="w-px h-10 sm:h-14 border-l border-dashed border-white/70 mx-auto mb-1" />

                {/* Frosted Glass Floating Card */}
                <div className="w-[230px] sm:w-[260px] p-4 sm:p-5 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white space-y-3">
                  
                  {/* Header: Circle Avatar + Name + Role */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/40 shrink-0 shadow-md bg-neutral-800">
                      <img
                        src={activeAgent.avatar}
                        alt={activeAgent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                        {activeAgent.name}
                      </h4>
                      <div className="text-[9px] sm:text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                        {activeAgent.role}
                      </div>
                    </div>
                  </div>

                  {/* Body: Left Gold Accent Bar + Description */}
                  <div className="border-l-2 border-[#c5a880] pl-2.5 py-0.5">
                    <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                      {activeAgent.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
