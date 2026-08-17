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
  xPercent: number; // Exact horizontal percentage of character across the uncropped painting
}

// Exactly 12 agents: First 6 on left (6,5,4,3,2,1), Center silhouette skipped, Second 6 on right (7,8,9,10,11,12)
const SUPPER_AGENTS: SupperAgent[] = [
  // --- FIRST 6 CHARACTERS (LEFT OF CROWNED FIGURE: 6, 5, 4, 3, 2, 1) ---
  {
    id: 1,
    name: 'Ada',
    role: 'BOOKING AGENT',
    description: 'Secures dinner reservations, flights, and hotels within policy.',
    avatar: profile6,
    xPercent: 5.5,
  },
  {
    id: 2,
    name: 'Kai',
    role: 'SUBSCRIPTION AGENT',
    description: 'Spots forgotten recurring charges and bundles 1-tap cancellations.',
    avatar: profile5,
    xPercent: 11.5,
  },
  {
    id: 3,
    name: 'Maya',
    role: 'TRAVEL AGENT',
    description: 'Builds tailored itineraries and manages delays with automatic rerouting.',
    avatar: profile4,
    xPercent: 18.5,
  },
  {
    id: 4,
    name: 'Leo',
    role: 'RESEARCH AGENT',
    description: 'Reads technical papers overnight and delivers concise 3-bullet briefings.',
    avatar: profile3,
    xPercent: 25.5,
  },
  {
    id: 5,
    name: 'Aria',
    role: 'CREATIVE AGENT',
    description: 'Generates UI themes, visual drafts, and brand assets on demand.',
    avatar: profile2,
    xPercent: 33.0,
  },
  {
    id: 6,
    name: 'Sol',
    role: 'PORTFOLIO AGENT',
    description: 'Catches dips under your budget cap and rebalances without asking.',
    avatar: profile1,
    xPercent: 41.0,
  },

  // --- [CENTER FIGURE (50%) - BLACK SILHOUETTE WITH CROWN - NO CARD] ---

  // --- SECOND 6 CHARACTERS (RIGHT OF CROWNED FIGURE: 7, 8, 9, 10, 11, 12) ---
  {
    id: 7,
    name: 'Eve',
    role: 'CALENDAR AGENT',
    description: 'Keeps your day together and reshuffles when it isn\'t.',
    avatar: profile7,
    xPercent: 59.0,
  },
  {
    id: 8,
    name: 'Rex',
    role: 'SECURITY AGENT',
    description: 'Enforces MPC cryptographic sandbox bounds and daily spending limits.',
    avatar: profile8,
    xPercent: 66.5,
  },
  {
    id: 9,
    name: 'Nora',
    role: 'INBOX AGENT',
    description: 'Triages 150+ daily emails, drafts replies, and filters noise.',
    avatar: profile9,
    xPercent: 74.0,
  },
  {
    id: 10,
    name: 'Iris',
    role: 'ONCHAIN AGENT',
    description: 'Settles per-call x402 endpoints and multi-hop DEX routes autonomously.',
    avatar: profile10,
    xPercent: 81.5,
  },
  {
    id: 11,
    name: 'Vance',
    role: 'ANALYTICS AGENT',
    description: 'Monitors real-time telemetry, order book depth, and market volatility.',
    avatar: profile11,
    xPercent: 88.5,
  },
  {
    id: 12,
    name: 'Cody',
    role: 'DEVELOPER AGENT',
    description: 'Runs automated test suites, triggers CI/CD builds, and checks PRs.',
    avatar: profile12,
    xPercent: 95.0,
  },
];

export const RenaissanceAgentRoster: React.FC = () => {
  // Default to Eve (id: 7)
  const [activeAgentId, setActiveAgentId] = useState<number | null>(7);

  const activeAgent = SUPPER_AGENTS.find((a) => a.id === activeAgentId) || SUPPER_AGENTS[6];

  return (
    <section id="agents" className="relative w-full overflow-hidden bg-neutral-950 select-none">
      
      {/* =========================================================================
          1. SUPPERS.PNG PANORAMIC PAINTING CANVAS (Natural Aspect Ratio Locked)
          ========================================================================= */}
      <div className="relative w-full overflow-hidden">
        
        {/* Background Painting - in normal flow so coordinates never get cropped */}
        <img
          src={suppersBg}
          alt="The Last Supper AI Agents"
          className="w-full h-auto min-h-[520px] object-cover sm:object-contain object-center select-none block pointer-events-none"
        />

        {/* Ambient Top & Bottom Shadow Gradients for Readability */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-48 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

        {/* =========================================================================
            2. TOP EDITORIAL HEADLINE
            ========================================================================= */}
        <div className="absolute top-6 sm:top-10 md:top-14 inset-x-0 z-20 px-4 sm:px-8 text-center max-w-5xl mx-auto space-y-2 sm:space-y-3 pointer-events-none">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white select-none font-serif font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            One app, a <span className="font-serif italic font-bold text-white">whole crew.</span>
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm font-mono tracking-widest uppercase text-white/90 font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            JUST ASK, AND WHICHEVER AGENT HANDLES THAT SHOWS UP.
          </p>
        </div>

        {/* =========================================================================
            3. 12 INTERACTIVE HOVER HOTSPOTS (Directly Over Character Coordinates)
            ========================================================================= */}
        <div className="absolute inset-0 z-30 pointer-events-auto">
          {SUPPER_AGENTS.map((agent) => (
            <div
              key={agent.id}
              onMouseEnter={() => setActiveAgentId(agent.id)}
              onClick={() => setActiveAgentId(agent.id)}
              style={{
                left: `${agent.xPercent}%`,
                top: '20%',
              }}
              className="absolute -translate-x-1/2 w-[7%] sm:w-[6.5%] h-[48%] sm:h-[50%] cursor-pointer bg-transparent"
            />
          ))}
        </div>

        {/* =========================================================================
            4. ACTIVE AGENT FLOATING CARD & CONNECTING DASHED LINE (Pure Fixed Center Anchor)
            ========================================================================= */}
        <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
          {activeAgent && (
            <div
              style={{
                position: 'absolute',
                left: `${activeAgent.xPercent}%`,
                bottom: '1.5rem',
                transform: 'translateX(-50%)',
              }}
              className="pointer-events-auto flex flex-col items-center"
            >
              {/* Dashed Connecting Line (From Table Surface Directly Down to Card) */}
              <div className="w-px h-8 sm:h-12 border-l border-dashed border-white/80 mb-1.5" />

              {/* Animate Card Content without overriding parent translateX(-50%) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAgent.id}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="w-[215px] sm:w-[250px] md:w-[260px] p-3.5 sm:p-5 rounded-2xl bg-black/65 backdrop-blur-xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-white space-y-2.5 sm:space-y-3"
                >
                  {/* Header: Circle Avatar + Name + Role */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/40 shrink-0 shadow-md bg-neutral-800">
                      <img
                        src={activeAgent.avatar}
                        alt={activeAgent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                        {activeAgent.name}
                      </h4>
                      <div className="text-[8.5px] sm:text-[9.5px] font-mono text-neutral-300 uppercase tracking-widest">
                        {activeAgent.role}
                      </div>
                    </div>
                  </div>

                  {/* Body: Left Gold Accent Bar + Description */}
                  <div className="border-l-2 border-[#c5a880] pl-2.5 py-0.5">
                    <p className="text-[11px] sm:text-xs text-neutral-200 font-sans leading-relaxed">
                      {activeAgent.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>

    </section>
  );
};
