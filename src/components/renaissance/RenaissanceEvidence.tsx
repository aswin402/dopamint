import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
  Zap,
  Workflow,
  Layers,
  Crown
} from 'lucide-react';
import crownImg from '../../assets/Crown.png';

interface AgentNodeProps {
  title: string;
  subtitle: string;
  badge?: string;
  icon?: React.ReactNode;
  isPrimary?: boolean;
  isAccent?: boolean;
  className?: string;
}

const AgentNode: React.FC<AgentNodeProps> = ({
  title,
  subtitle,
  badge,
  icon,
  isPrimary = false,
  isAccent = false,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.99 }}
      className={`relative px-5 py-3.5 sm:px-7 sm:py-4 rounded-2xl border transition-all duration-300 cursor-pointer text-center group overflow-hidden ${
        isPrimary
          ? 'bg-[#1e1a15]/90 backdrop-blur-xl border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.18)] hover:border-[#f0dcba]'
          : isAccent
          ? 'bg-[#1c1814]/85 backdrop-blur-xl border-[#dfc28d]/55 shadow-[0_0_24px_rgba(223,194,141,0.15)] hover:border-[#f0dcba]'
          : 'bg-[#171411]/80 backdrop-blur-xl border-[#c4a978]/30 hover:border-[#e5d4b5]/60 shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
      } ${className}`}
    >
      {/* Delicate candlelight top edge highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#f0dcba]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col items-center justify-center space-y-1">
        {badge && (
          <span className="text-[10px] font-mono font-bold tracking-[0.24em] text-[#dfc28d] uppercase mb-0.5">
            {badge}
          </span>
        )}
        
        <div className="flex items-center gap-2">
          {icon && <span className="text-[#dfc28d]">{icon}</span>}
          <h4 className="font-serif tracking-[0.14em] text-xs sm:text-[14px] text-[#f7f2ea] uppercase font-bold group-hover:text-[#dfc28d] transition-colors">
            {title}
          </h4>
        </div>

        <p className="font-serif italic text-xs sm:text-[13px] text-[#c7baa4] font-normal leading-tight max-w-[280px]">
          {subtitle}
        </p>
      </div>

      {/* Gentle candlelight pulse on primary */}
      {isPrimary && (
        <span className="absolute top-2.5 right-3 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfc28d] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dfc28d]" />
        </span>
      )}
    </motion.div>
  );
};

export const RenaissanceEvidence: React.FC = () => {
  return (
    <section id="architecture" className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#f3f2e6]">
      
      {/* =========================================================================
          1. SECTION HEADER (RENAISSANCE TYPOGRAPHY & CANDLELIGHT CHARM)
          ========================================================================= */}
      <div className="max-w-4xl mb-14 sm:mb-20 text-left space-y-4">
        
        {/* Crown & Classical Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#c4a978]/35 text-[11px] font-mono tracking-widest text-[#dfc28d] uppercase font-semibold">
          <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
          <span>AUTONOMOUS REASONING ARCHITECTURE</span>
        </div>

        {/* Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#ffffff] tracking-tight leading-[1.02]">
          From intent to <br />
          <span className="font-serif italic font-normal text-[#dfc28d]">
            execution.
          </span>
        </h2>

        {/* Italicized Sub-headline */}
        <p className="text-base sm:text-lg text-[#d4c8b6] max-w-2xl font-serif italic leading-relaxed pt-1">
          A continuous sovereign loop where companion agents collaborate, reason, evaluate outputs, and self-improve on every cycle.
        </p>
      </div>

      {/* =========================================================================
          2. THE RENAISSANCE FLOWCHART GRAPH
          ========================================================================= */}
      <div className="relative max-w-4xl mx-auto my-8">

        {/* --- RIGHT-SIDE CONTINUOUS FEEDBACK CONDUIT (GOLDEN DOTTED EMBERS) --- */}
        <div className="hidden lg:block absolute right-0 top-6 bottom-14 w-28 pointer-events-none z-10">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="renaissanceLoop" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#dfc28d" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f0dcba" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#dfc28d" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Dotted path: starts at bottom left of conduit, goes right, up to top, then back left into DOPE */}
            <path
              d="M 0 540 H 80 V 24 H 0"
              stroke="#dfc28d"
              strokeWidth="1.6"
              strokeDasharray="4 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            />

            {/* Glowing animated candlelight ember traveling along the loop */}
            <circle r="3.5" fill="#f0dcba" filter="drop-shadow(0 0 6px #dfc28d)">
              <animateMotion
                path="M 0 540 H 80 V 24 H 0"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Main Vertical Graph Content */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 relative z-20">

          {/* STAGE 1: DOPE */}
          <div className="w-full max-w-md">
            <AgentNode
              title="DOPE"
              subtitle="Continual harness / orchestration head"
              isPrimary
              icon={<Crown className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 1 */}
          <div className="h-6 sm:h-8 w-[1.5px] bg-gradient-to-b from-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              className="w-full h-4 bg-[#f0dcba] blur-[1px]"
            />
          </div>

          {/* STAGE 2: UNDERSTAND INTENT */}
          <div className="w-full max-w-md">
            <AgentNode
              title="UNDERSTAND INTENT"
              subtitle="Loads memory, skills and boundaries"
              icon={<Brain className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 2 */}
          <div className="h-6 sm:h-8 w-[1.5px] bg-gradient-to-b from-[#4a3f33] via-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.3 }}
              className="w-full h-4 bg-[#f0dcba] blur-[1px]"
            />
          </div>

          {/* STAGE 3: PLAN + DELEGATE */}
          <div className="w-full max-w-md">
            <AgentNode
              title="PLAN + DELEGATE"
              subtitle="Selects the right companion agents"
              icon={<Workflow className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 3 */}
          <div className="h-6 sm:h-8 w-[1.5px] bg-gradient-to-b from-[#4a3f33] via-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.6 }}
              className="w-full h-4 bg-[#f0dcba] blur-[1px]"
            />
          </div>

          {/* STAGE 4: COMPANION AGENT GRAPH */}
          <div className="w-full max-w-md">
            <AgentNode
              title="COMPANION AGENT GRAPH"
              subtitle="Specialists collaborate in parallel"
              icon={<Layers className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Branching Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-8 sm:h-10 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 40" fill="none" preserveAspectRatio="none">
              {/* Center stem from top */}
              <path d="M 300 0 V 18" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* Horizontal crossbar */}
              <path d="M 75 18 H 525" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* 4 Drops to cards */}
              <path d="M 75 18 V 40" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 225 18 V 40" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 375 18 V 40" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 525 18 V 40" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
            </svg>
          </div>

          {/* --- 4 PARALLEL COMPANION AGENT CARDS --- */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* 1. MEMORY AGENT */}
            <AgentNode
              title="MEMORY AGENT"
              subtitle="Knows what matters"
              icon={<Brain className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-3.5 px-3.5"
            />

            {/* 2. RESEARCH AGENT */}
            <AgentNode
              title="RESEARCH AGENT"
              subtitle="Finds useful context"
              icon={<Search className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-3.5 px-3.5"
            />

            {/* 3. CREATOR AGENT */}
            <AgentNode
              title="CREATOR AGENT"
              subtitle="Shapes the execution"
              icon={<Sparkles className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-3.5 px-3.5"
            />

            {/* 4. GUARDIAN AGENT */}
            <AgentNode
              title="GUARDIAN AGENT"
              subtitle="Protects every action"
              icon={<ShieldCheck className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-3.5 px-3.5"
            />

          </div>

          {/* Converging Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-8 sm:h-10 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 40" fill="none" preserveAspectRatio="none">
              {/* 4 lines up from cards */}
              <path d="M 75 0 V 22" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 225 0 V 22" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 375 0 V 22" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 525 0 V 22" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* Horizontal crossbar */}
              <path d="M 75 22 H 525" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* Center stem down to next card */}
              <path d="M 300 22 V 40" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
            </svg>
          </div>

          {/* STAGE 5: EVALUATE OUTCOME */}
          <div className="w-full max-w-md">
            <AgentNode
              title="EVALUATE OUTCOME"
              subtitle="Evaluation and completion gate"
              icon={<CheckCircle2 className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Split Connector to ADAPT & DELIVER (SVG) */}
          <div className="w-full max-w-md h-6 sm:h-8 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 30" fill="none" preserveAspectRatio="none">
              <path d="M 150 0 V 15" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 75 15 H 225" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 75 15 V 30" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 225 15 V 30" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
            </svg>
          </div>

          {/* STAGE 6: ADAPT & DELIVER (2 Outcomes) */}
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* ADAPT */}
            <AgentNode
              title="ADAPT"
              subtitle="Learn and loop again"
              icon={<RefreshCw className="w-4 h-4 text-[#dfc28d]" />}
            />

            {/* DELIVER */}
            <AgentNode
              title="DELIVER"
              subtitle="Respond, create or act"
              isAccent
              icon={<CheckCircle2 className="w-4 h-4 text-[#dfc28d]" />}
            />

          </div>

          {/* Sub-caption: EVERY LOOP MAKES THE COMPANION BETTER */}
          <div className="pt-6 pb-2 text-center">
            <p className="font-serif italic text-xs sm:text-[14px] tracking-[0.2em] text-[#dfc28d] font-medium flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfc28d] animate-pulse" />
              <span>EVERY LOOP MAKES THE COMPANION BETTER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfc28d] animate-pulse" />
            </p>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. CAPABILITY PILL BADGES (MATCHING HERO TRANSLUCENT GLASS PILLS)
          ========================================================================= */}
      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
        
        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 text-xs sm:text-[13px] font-serif text-[#f7f2ea] shadow-sm transition-all flex items-center gap-2">
          <span className="font-bold text-[#ffffff]">Agent Loop</span>
          <span className="text-[#dfc28d]">·</span>
          <span className="italic text-[#d6c9b6]">keeps the task running</span>
        </div>

        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 text-xs sm:text-[13px] font-serif text-[#f7f2ea] shadow-sm transition-all flex items-center gap-2">
          <span className="font-bold text-[#ffffff]">Agent Harness</span>
          <span className="text-[#dfc28d]">·</span>
          <span className="italic text-[#d6c9b6]">tools &amp; environments</span>
        </div>

        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 text-xs sm:text-[13px] font-serif text-[#f7f2ea] shadow-sm transition-all flex items-center gap-2">
          <span className="font-bold text-[#ffffff]">AiFi</span>
          <span className="text-[#dfc28d]">·</span>
          <span className="italic text-[#d6c9b6]">financial execution</span>
        </div>

        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 text-xs sm:text-[13px] font-serif text-[#f7f2ea] shadow-sm transition-all flex items-center gap-2">
          <span className="font-bold text-[#ffffff]">x402</span>
          <span className="text-[#dfc28d]">·</span>
          <span className="italic text-[#d6c9b6]">autonomous payments</span>
        </div>

      </div>

    </section>
  );
};
