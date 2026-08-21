import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
  Zap,
  Workflow,
  Layers
} from 'lucide-react';

interface AgentNodeProps {
  title: string;
  subtitle: string;
  badge?: string;
  icon?: React.ReactNode;
  isPrimary?: boolean;
  isAccent?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const AgentNode: React.FC<AgentNodeProps> = ({
  title,
  subtitle,
  badge,
  icon,
  isPrimary = false,
  isAccent = false,
  isActive = false,
  onClick,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`relative px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl border transition-all duration-300 cursor-pointer text-center group overflow-hidden ${
        isPrimary
          ? 'bg-[#151f18]/95 border-[#4ade80]/60 shadow-[0_0_24px_rgba(74,222,128,0.18)] hover:border-[#4ade80]'
          : isAccent
          ? 'bg-[#18231c]/90 border-[#34d399]/50 shadow-[0_0_20px_rgba(52,211,153,0.12)] hover:border-[#34d399]'
          : 'bg-[#111713]/85 border-[#283b2e]/70 hover:border-[#4ade80]/50 shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
      } ${className}`}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4ade80]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col items-center justify-center space-y-1">
        {badge && (
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#4ade80]/80 uppercase mb-0.5">
            {badge}
          </span>
        )}
        
        <div className="flex items-center gap-2">
          {icon && <span className="text-[#4ade80]">{icon}</span>}
          <h4 className="font-mono font-bold text-xs sm:text-sm tracking-[0.18em] text-[#eef6f0] uppercase group-hover:text-[#4ade80] transition-colors">
            {title}
          </h4>
        </div>

        <p className="font-sans text-[11px] sm:text-xs text-[#9bb3a2] font-normal leading-tight max-w-[280px]">
          {subtitle}
        </p>
      </div>

      {/* Pulsing indicator on primary */}
      {isPrimary && (
        <span className="absolute top-2 right-2.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
        </span>
      )}
    </motion.div>
  );
};

export const RenaissanceEvidence: React.FC = () => {
  return (
    <section id="architecture" className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#eef2ea]">
      
      {/* =========================================================================
          1. SECTION HEADER
          ========================================================================= */}
      <div className="max-w-4xl mb-14 sm:mb-18 text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18231c] border border-[#2e4033] text-[11px] font-mono tracking-widest text-[#4ade80] uppercase font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          <span>AUTONOMOUS EXECUTION HARNESS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f3f2e6] tracking-tight leading-[1.02]">
          From intent to <br />
          <span className="font-serif italic font-normal text-[#4ade80]">
            execution.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#a4b8a8] max-w-2xl font-sans leading-relaxed pt-1">
          A continuous loop of sovereign companion agents that parse intent, coordinate specialized workflows, evaluate outputs, and self-improve on every cycle.
        </p>
      </div>

      {/* =========================================================================
          2. THE INTERACTIVE FLOWCHART GRAPH
          ========================================================================= */}
      <div className="relative max-w-4xl mx-auto my-8">

        {/* --- RIGHT-SIDE CONTINUOUS FEEDBACK CONDUIT (DOTTED EMERALD LOOP) --- */}
        <div className="hidden lg:block absolute right-0 top-6 bottom-14 w-28 pointer-events-none z-10">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dotted path: starts at bottom left of conduit, goes right, up to top, then back left into DOPE */}
            <path
              d="M 0 540 H 80 V 24 H 0"
              stroke="#34d399"
              strokeWidth="1.8"
              strokeDasharray="4 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70"
            />

            {/* Glowing animated particle traveling along the loop */}
            <circle r="3.5" fill="#4ade80">
              <animateMotion
                path="M 0 540 H 80 V 24 H 0"
                dur="6s"
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
              icon={<Zap className="w-4 h-4 text-[#4ade80]" />}
            />
          </div>

          {/* Animated Connecting Line 1 */}
          <div className="h-6 sm:h-8 w-[1.5px] bg-gradient-to-b from-[#4ade80] to-[#283b2e] relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="w-full h-4 bg-[#4ade80] blur-[1px]"
            />
          </div>

          {/* STAGE 2: UNDERSTAND INTENT */}
          <div className="w-full max-w-md">
            <AgentNode
              title="UNDERSTAND INTENT"
              subtitle="Loads memory, skills and boundaries"
              icon={<Brain className="w-4 h-4 text-[#4ade80]" />}
            />
          </div>

          {/* Animated Connecting Line 2 */}
          <div className="h-6 sm:h-8 w-[1.5px] bg-gradient-to-b from-[#283b2e] via-[#4ade80] to-[#283b2e] relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.3 }}
              className="w-full h-4 bg-[#4ade80] blur-[1px]"
            />
          </div>

          {/* STAGE 3: PLAN + DELEGATE */}
          <div className="w-full max-w-md">
            <AgentNode
              title="PLAN + DELEGATE"
              subtitle="Selects the right companion agents"
              icon={<Workflow className="w-4 h-4 text-[#4ade80]" />}
            />
          </div>

          {/* Animated Connecting Line 3 */}
          <div className="h-6 sm:h-8 w-[1.5px] bg-gradient-to-b from-[#283b2e] via-[#4ade80] to-[#283b2e] relative overflow-hidden">
            <motion.div
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.6 }}
              className="w-full h-4 bg-[#4ade80] blur-[1px]"
            />
          </div>

          {/* STAGE 4: COMPANION AGENT GRAPH */}
          <div className="w-full max-w-md">
            <AgentNode
              title="COMPANION AGENT GRAPH"
              subtitle="Specialists collaborate in parallel"
              icon={<Layers className="w-4 h-4 text-[#4ade80]" />}
            />
          </div>

          {/* Branching Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-8 sm:h-10 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 40" fill="none" preserveAspectRatio="none">
              {/* Center stem from top */}
              <path d="M 300 0 V 18" stroke="#3e5244" strokeWidth="1.5" />
              {/* Horizontal crossbar */}
              <path d="M 75 18 H 525" stroke="#3e5244" strokeWidth="1.5" />
              {/* 4 Drops to cards */}
              <path d="M 75 18 V 40" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 225 18 V 40" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 375 18 V 40" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 525 18 V 40" stroke="#3e5244" strokeWidth="1.5" />
            </svg>
          </div>

          {/* --- 4 PARALLEL COMPANION AGENT CARDS --- */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* 1. MEMORY AGENT */}
            <AgentNode
              title="MEMORY AGENT"
              subtitle="Knows what matters"
              icon={<Brain className="w-3.5 h-3.5 text-[#34d399]" />}
              className="py-3 px-3.5"
            />

            {/* 2. RESEARCH AGENT */}
            <AgentNode
              title="RESEARCH AGENT"
              subtitle="Finds useful context"
              icon={<Search className="w-3.5 h-3.5 text-[#34d399]" />}
              className="py-3 px-3.5"
            />

            {/* 3. CREATOR AGENT */}
            <AgentNode
              title="CREATOR AGENT"
              subtitle="Shapes the execution"
              icon={<Sparkles className="w-3.5 h-3.5 text-[#34d399]" />}
              className="py-3 px-3.5"
            />

            {/* 4. GUARDIAN AGENT */}
            <AgentNode
              title="GUARDIAN AGENT"
              subtitle="Protects every action"
              icon={<ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />}
              className="py-3 px-3.5"
            />

          </div>

          {/* Converging Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-8 sm:h-10 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 40" fill="none" preserveAspectRatio="none">
              {/* 4 lines up from cards */}
              <path d="M 75 0 V 22" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 225 0 V 22" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 375 0 V 22" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 525 0 V 22" stroke="#3e5244" strokeWidth="1.5" />
              {/* Horizontal crossbar */}
              <path d="M 75 22 H 525" stroke="#3e5244" strokeWidth="1.5" />
              {/* Center stem down to next card */}
              <path d="M 300 22 V 40" stroke="#3e5244" strokeWidth="1.5" />
            </svg>
          </div>

          {/* STAGE 5: EVALUATE OUTCOME */}
          <div className="w-full max-w-md">
            <AgentNode
              title="EVALUATE OUTCOME"
              subtitle="Evaluation and completion gate"
              icon={<CheckCircle2 className="w-4 h-4 text-[#4ade80]" />}
            />
          </div>

          {/* Split Connector to ADAPT & DELIVER (SVG) */}
          <div className="w-full max-w-md h-6 sm:h-8 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 30" fill="none" preserveAspectRatio="none">
              <path d="M 150 0 V 15" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 75 15 H 225" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 75 15 V 30" stroke="#3e5244" strokeWidth="1.5" />
              <path d="M 225 15 V 30" stroke="#3e5244" strokeWidth="1.5" />
            </svg>
          </div>

          {/* STAGE 6: ADAPT & DELIVER (2 Outcomes) */}
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* ADAPT */}
            <AgentNode
              title="ADAPT"
              subtitle="Learn and loop again"
              icon={<RefreshCw className="w-4 h-4 text-[#34d399]" />}
              className="border-[#2e4033] hover:border-[#34d399]"
            />

            {/* DELIVER */}
            <AgentNode
              title="DELIVER"
              subtitle="Respond, create or act"
              isAccent
              icon={<CheckCircle2 className="w-4 h-4 text-[#4ade80]" />}
              className="border-[#34d399]/60 hover:border-[#4ade80]"
            />

          </div>

          {/* Sub-caption: EVERY LOOP MAKES THE COMPANION BETTER */}
          <div className="pt-6 pb-2 text-center">
            <p className="font-mono text-xs sm:text-[13px] tracking-[0.24em] text-[#4ade80] uppercase font-bold flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span>EVERY LOOP MAKES THE COMPANION BETTER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            </p>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. CAPABILITY PILL BADGES
          ========================================================================= */}
      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto">
        
        <div className="px-4 py-2 rounded-full bg-[#131b15]/90 border border-[#2a3c2f] text-xs font-mono text-[#b5cbba] shadow-sm hover:border-[#4ade80]/50 transition-colors flex items-center gap-2">
          <span className="font-bold text-[#eef6f0]">Agent Loop</span>
          <span className="text-[#4ade80]">·</span>
          <span>keeps the task running</span>
        </div>

        <div className="px-4 py-2 rounded-full bg-[#131b15]/90 border border-[#2a3c2f] text-xs font-mono text-[#b5cbba] shadow-sm hover:border-[#4ade80]/50 transition-colors flex items-center gap-2">
          <span className="font-bold text-[#eef6f0]">Agent Harness</span>
          <span className="text-[#4ade80]">·</span>
          <span>tools &amp; environments</span>
        </div>

        <div className="px-4 py-2 rounded-full bg-[#131b15]/90 border border-[#2a3c2f] text-xs font-mono text-[#b5cbba] shadow-sm hover:border-[#4ade80]/50 transition-colors flex items-center gap-2">
          <span className="font-bold text-[#eef6f0]">AiFi</span>
          <span className="text-[#4ade80]">·</span>
          <span>financial execution</span>
        </div>

        <div className="px-4 py-2 rounded-full bg-[#131b15]/90 border border-[#2a3c2f] text-xs font-mono text-[#b5cbba] shadow-sm hover:border-[#4ade80]/50 transition-colors flex items-center gap-2">
          <span className="font-bold text-[#eef6f0]">x402</span>
          <span className="text-[#4ade80]">·</span>
          <span>autonomous payments</span>
        </div>

      </div>

    </section>
  );
};
