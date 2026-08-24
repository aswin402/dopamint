import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
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
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
      className={`relative px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer text-center group overflow-hidden ${
        isPrimary
          ? 'bg-[#1e1a15]/90 backdrop-blur-xl border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.18)] hover:border-[#f0dcba]'
          : isAccent
          ? 'bg-[#1c1814]/85 backdrop-blur-xl border-[#dfc28d]/55 shadow-[0_0_24px_rgba(223,194,141,0.15)] hover:border-[#f0dcba]'
          : 'bg-[#171411]/80 backdrop-blur-xl border-[#c4a978]/30 hover:border-[#e5d4b5]/60 shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
      } ${className}`}
    >
      {/* Delicate candlelight top edge highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#f0dcba]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col items-center justify-center space-y-0.5">
        {badge && (
          <span className="text-[10px] font-bold tracking-[0.16em] text-[#dfc28d] uppercase mb-0.5">
            {badge}
          </span>
        )}
        
        <div className="flex items-center gap-1.5">
          {icon && <span className="text-[#dfc28d]">{icon}</span>}
          <h4 className="tracking-[0.08em] text-xs sm:text-[13px] text-[#f7f2ea] uppercase font-bold group-hover:text-[#dfc28d] transition-colors">
            {title}
          </h4>
        </div>

        <p className="text-[11px] sm:text-xs text-[#c7baa4] font-normal leading-tight max-w-[260px]">
          {subtitle}
        </p>
      </div>

      {/* Gentle candlelight pulse on primary */}
      {isPrimary && (
        <span className="absolute top-2 right-2.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfc28d] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dfc28d]" />
        </span>
      )}
    </motion.div>
  );
};

export const RenaissanceEvidence: React.FC = () => {
  return (
    <section id="architecture" className="pt-10 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#f3f2e6]">
      
      {/* =========================================================================
          1. SECTION HEADER (CENTER ALIGNED, SINGLE LINE TITLE)
          ========================================================================= */}
      <div className="max-w-4xl mb-6 sm:mb-8 text-center mx-auto space-y-2.5">
        
        {/* Crown & Classical Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#c4a978]/35 text-[11px] font-mono tracking-widest text-[#dfc28d] uppercase font-semibold">
          <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
          <span>ARCHITECTURE</span>
        </div>

        {/* Editorial Headline — Single Line */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-[#ffffff] tracking-tight leading-[1.08]">
          From intent to{' '}
          <span className="font-serif italic font-normal text-[#dfc28d]">
            execution.
          </span>
        </h2>
      </div>

      {/* =========================================================================
          2. THE RENAISSANCE FLOWCHART GRAPH (COMPACT SPACING & HELVETICA TYPOGRAPHY)
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="relative max-w-4xl mx-auto my-4 sm:my-6"
      >

        {/* --- RIGHT-SIDE CONTINUOUS FEEDBACK CONDUIT (GOLDEN DOTTED EMBERS) --- */}
        <div className="hidden lg:block absolute right-0 top-3 bottom-6 w-24 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 100 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="renaissanceLoop" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#dfc28d" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f0dcba" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#dfc28d" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Dotted path: starts at bottom left of conduit, goes right, up to top, then back left into DOPE */}
            <path
              d="M 0 380 H 75 V 15 H 0"
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
                path="M 0 380 H 75 V 15 H 0"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Main Vertical Graph Content */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-2.5 relative z-20">

          {/* STAGE 1: DOPE */}
          <div className="w-full max-w-sm sm:max-w-md">
            <AgentNode
              title="DOPE"
              subtitle="Continual harness / orchestration head"
              isPrimary
              icon={<Crown className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 1 */}
          <div className="h-4 sm:h-5 w-[1.5px] bg-gradient-to-b from-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 30] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              className="w-full h-3 bg-[#f0dcba] blur-[1px]"
            />
          </div>

          {/* STAGE 2: UNDERSTAND INTENT */}
          <div className="w-full max-w-sm sm:max-w-md">
            <AgentNode
              title="UNDERSTAND INTENT"
              subtitle="Loads memory, skills and boundaries"
              icon={<Brain className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 2 */}
          <div className="h-4 sm:h-5 w-[1.5px] bg-gradient-to-b from-[#4a3f33] via-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 30] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.3 }}
              className="w-full h-3 bg-[#f0dcba] blur-[1px]"
            />
          </div>

          {/* STAGE 3: PLAN + DELEGATE */}
          <div className="w-full max-w-sm sm:max-w-md">
            <AgentNode
              title="PLAN + DELEGATE"
              subtitle="Selects the right companion agents"
              icon={<Workflow className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 3 */}
          <div className="h-4 sm:h-5 w-[1.5px] bg-gradient-to-b from-[#4a3f33] via-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 30] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.6 }}
              className="w-full h-3 bg-[#f0dcba] blur-[1px]"
            />
          </div>

          {/* STAGE 4: COMPANION AGENT GRAPH */}
          <div className="w-full max-w-sm sm:max-w-md">
            <AgentNode
              title="COMPANION AGENT GRAPH"
              subtitle="Specialists collaborate in parallel"
              icon={<Layers className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Branching Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-6 sm:h-7 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 28" fill="none" preserveAspectRatio="none">
              {/* Center stem from top */}
              <path d="M 300 0 V 12" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* Horizontal crossbar */}
              <path d="M 75 12 H 525" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* 4 Drops to cards */}
              <path d="M 75 12 V 28" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 225 12 V 28" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 375 12 V 28" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 525 12 V 28" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
            </svg>
          </div>

          {/* --- 4 PARALLEL COMPANION AGENT CARDS --- */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            
            {/* 1. MEMORY AGENT */}
            <AgentNode
              title="MEMORY AGENT"
              subtitle="Knows what matters"
              icon={<Brain className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-2.5 px-3"
            />

            {/* 2. RESEARCH AGENT */}
            <AgentNode
              title="RESEARCH AGENT"
              subtitle="Finds useful context"
              icon={<Search className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-2.5 px-3"
            />

            {/* 3. CREATOR AGENT */}
            <AgentNode
              title="CREATOR AGENT"
              subtitle="Shapes the execution"
              icon={<Sparkles className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-2.5 px-3"
            />

            {/* 4. GUARDIAN AGENT */}
            <AgentNode
              title="GUARDIAN AGENT"
              subtitle="Protects every action"
              icon={<ShieldCheck className="w-3.5 h-3.5 text-[#dfc28d]" />}
              className="py-2.5 px-3"
            />

          </div>

          {/* Converging Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-6 sm:h-7 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 28" fill="none" preserveAspectRatio="none">
              {/* 4 lines up from cards */}
              <path d="M 75 0 V 16" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 225 0 V 16" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 375 0 V 16" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 525 0 V 16" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* Horizontal crossbar */}
              <path d="M 75 16 H 525" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              {/* Center stem down to next card */}
              <path d="M 300 16 V 28" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
            </svg>
          </div>

          {/* STAGE 5: EVALUATE OUTCOME */}
          <div className="w-full max-w-sm sm:max-w-md">
            <AgentNode
              title="EVALUATE OUTCOME"
              subtitle="Evaluation and completion gate"
              icon={<CheckCircle2 className="w-4 h-4 text-[#dfc28d]" />}
            />
          </div>

          {/* Split Connector to ADAPT & DELIVER (SVG) */}
          <div className="w-full max-w-sm sm:max-w-md h-5 sm:h-6 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 24" fill="none" preserveAspectRatio="none">
              <path d="M 150 0 V 12" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 75 12 H 225" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 75 12 V 24" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
              <path d="M 225 12 V 24" stroke="#c4a978" strokeOpacity="0.45" strokeWidth="1.5" />
            </svg>
          </div>

          {/* STAGE 6: ADAPT & DELIVER (2 Outcomes) */}
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            
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
          <div className="pt-3 pb-1 text-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f3f2e6] border border-[#c4a978]/40 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#37312c] animate-pulse" />
              <span className="text-[11px] sm:text-xs tracking-[0.14em] text-[#37312c] font-bold uppercase">
                EVERY LOOP MAKES THE COMPANION BETTER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#37312c] animate-pulse" />
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. CAPABILITY PILL BADGES (DARK COLOR #37312c ON LIGHT BEIGE PILLS)
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
      >
        
        <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#f3f2e6] backdrop-blur-md border border-[#c4a978]/40 hover:border-[#c4a978]/70 text-xs sm:text-[13px] text-[#37312c] shadow-xs transition-all flex items-center gap-2">
          <span className="font-bold text-[#37312c]">Agent Loop</span>
          <span className="text-[#37312c]/60">·</span>
          <span className="text-[#37312c]/90 font-medium">keeps the task running</span>
        </div>

        <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#f3f2e6] backdrop-blur-md border border-[#c4a978]/40 hover:border-[#c4a978]/70 text-xs sm:text-[13px] text-[#37312c] shadow-xs transition-all flex items-center gap-2">
          <span className="font-bold text-[#37312c]">Agent Harness</span>
          <span className="text-[#37312c]/60">·</span>
          <span className="text-[#37312c]/90 font-medium">tools &amp; environments</span>
        </div>

        <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#f3f2e6] backdrop-blur-md border border-[#c4a978]/40 hover:border-[#c4a978]/70 text-xs sm:text-[13px] text-[#37312c] shadow-xs transition-all flex items-center gap-2">
          <span className="font-bold text-[#37312c]">AiFi</span>
          <span className="text-[#37312c]/60">·</span>
          <span className="text-[#37312c]/90 font-medium">financial execution</span>
        </div>

        <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#f3f2e6] backdrop-blur-md border border-[#c4a978]/40 hover:border-[#c4a978]/70 text-xs sm:text-[13px] text-[#37312c] shadow-xs transition-all flex items-center gap-2">
          <span className="font-bold text-[#37312c]">x402</span>
          <span className="text-[#37312c]/60">·</span>
          <span className="text-[#37312c]/90 font-medium">autonomous payments</span>
        </div>

      </div>

    </section>
  );
};

