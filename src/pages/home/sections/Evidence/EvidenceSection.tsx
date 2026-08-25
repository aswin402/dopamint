import { AgentNode } from './AgentNode';
import React, { useState, useEffect } from 'react';
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
import crownImg from '../../../../assets/Crown.webp';

export const EvidenceSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7);
    }, 1450);
    return () => clearInterval(interval);
  }, [hoveredStep]);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section id="architecture" className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#f3f2e6]">
      
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
        className="relative max-w-4xl mx-auto my-3 sm:my-5"
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
              strokeWidth={currentStep === 6 ? '2.4' : '1.6'}
              strokeDasharray="4 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-opacity duration-500 ${currentStep === 6 ? 'opacity-100' : 'opacity-50'}`}
            />

            {/* Glowing animated candlelight ember traveling along the loop */}
            <circle r={currentStep === 6 ? '4.5' : '3.5'} fill="#f0dcba" filter="drop-shadow(0 0 8px #f0dcba)">
              <animateMotion
                path="M 0 380 H 75 V 15 H 0"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Main Vertical Graph Content */}
        <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 relative z-20">

          {/* STAGE 1: DOPE (Step 0) */}
          <div className="w-full max-w-md sm:max-w-lg">
            <AgentNode
              title="DOPE"
              subtitle="Continual harness / orchestration head"
              isPrimary
              isActive={currentStep === 0}
              onMouseEnter={() => setHoveredStep(0)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Crown className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 1 */}
          <div className="h-3 sm:h-3.5 w-[1.5px] bg-gradient-to-b from-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 25] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              className={`w-full h-2.5 blur-[1px] ${
                currentStep === 0 || currentStep === 1 ? 'bg-[#f0dcba] shadow-[0_0_6px_#f0dcba]' : 'bg-[#dfc28d]'
              }`}
            />
          </div>

          {/* STAGE 2: UNDERSTAND INTENT (Step 1) */}
          <div className="w-full max-w-md sm:max-w-lg">
            <AgentNode
              title="UNDERSTAND INTENT"
              subtitle="Loads memory, skills and boundaries"
              isActive={currentStep === 1}
              onMouseEnter={() => setHoveredStep(1)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Brain className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 2 */}
          <div className="h-3 sm:h-3.5 w-[1.5px] bg-gradient-to-b from-[#4a3f33] via-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 25] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: 0.2 }}
              className={`w-full h-2.5 blur-[1px] ${
                currentStep === 1 || currentStep === 2 ? 'bg-[#f0dcba] shadow-[0_0_6px_#f0dcba]' : 'bg-[#dfc28d]'
              }`}
            />
          </div>

          {/* STAGE 3: PLAN + DELEGATE (Step 2) */}
          <div className="w-full max-w-md sm:max-w-lg">
            <AgentNode
              title="PLAN + DELEGATE"
              subtitle="Selects the right companion agents"
              isActive={currentStep === 2}
              onMouseEnter={() => setHoveredStep(2)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Workflow className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />
          </div>

          {/* Animated Connecting Line 3 */}
          <div className="h-3 sm:h-3.5 w-[1.5px] bg-gradient-to-b from-[#4a3f33] via-[#dfc28d] to-[#4a3f33] relative overflow-hidden">
            <motion.div
              animate={{ y: [-15, 25] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: 0.4 }}
              className={`w-full h-2.5 blur-[1px] ${
                currentStep === 2 || currentStep === 3 ? 'bg-[#f0dcba] shadow-[0_0_6px_#f0dcba]' : 'bg-[#dfc28d]'
              }`}
            />
          </div>

          {/* STAGE 4: COMPANION AGENT GRAPH (Step 3) */}
          <div className="w-full max-w-md sm:max-w-lg">
            <AgentNode
              title="COMPANION AGENT GRAPH"
              subtitle="Specialists collaborate in parallel"
              isActive={currentStep === 3}
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Layers className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />
          </div>

          {/* Branching Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-5 sm:h-5.5 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 22" fill="none" preserveAspectRatio="none">
              {/* Center stem from top */}
              <path
                d="M 300 0 V 10"
                stroke={currentStep === 3 || currentStep === 4 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 3 || currentStep === 4 ? 0.9 : 0.45}
                strokeWidth={currentStep === 3 || currentStep === 4 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              {/* Horizontal crossbar */}
              <path
                d="M 75 10 H 525"
                stroke={currentStep === 3 || currentStep === 4 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 3 || currentStep === 4 ? 0.9 : 0.45}
                strokeWidth={currentStep === 3 || currentStep === 4 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              {/* 4 Drops to cards */}
              <path
                d="M 75 10 V 22"
                stroke={currentStep === 3 || currentStep === 4 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 3 || currentStep === 4 ? 0.9 : 0.45}
                strokeWidth={currentStep === 3 || currentStep === 4 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 225 10 V 22"
                stroke={currentStep === 3 || currentStep === 4 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 3 || currentStep === 4 ? 0.9 : 0.45}
                strokeWidth={currentStep === 3 || currentStep === 4 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 375 10 V 22"
                stroke={currentStep === 3 || currentStep === 4 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 3 || currentStep === 4 ? 0.9 : 0.45}
                strokeWidth={currentStep === 3 || currentStep === 4 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 525 10 V 22"
                stroke={currentStep === 3 || currentStep === 4 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 3 || currentStep === 4 ? 0.9 : 0.45}
                strokeWidth={currentStep === 3 || currentStep === 4 ? 2 : 1.5}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* --- 4 PARALLEL COMPANION AGENT CARDS (Step 4) --- */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
            
            {/* 1. MEMORY AGENT */}
            <AgentNode
              title="MEMORY AGENT"
              subtitle="Knows what matters"
              isActive={currentStep === 4}
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Brain className="w-4 h-4 text-[#dfc28d]" />}
              className="py-3 px-3.5 sm:px-4"
            />

            {/* 2. RESEARCH AGENT */}
            <AgentNode
              title="RESEARCH AGENT"
              subtitle="Finds useful context"
              isActive={currentStep === 4}
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Search className="w-4 h-4 text-[#dfc28d]" />}
              className="py-3 px-3.5 sm:px-4"
            />

            {/* 3. CREATOR AGENT */}
            <AgentNode
              title="CREATOR AGENT"
              subtitle="Shapes the execution"
              isActive={currentStep === 4}
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<Sparkles className="w-4 h-4 text-[#dfc28d]" />}
              className="py-3 px-3.5 sm:px-4"
            />

            {/* 4. GUARDIAN AGENT */}
            <AgentNode
              title="GUARDIAN AGENT"
              subtitle="Protects every action"
              isActive={currentStep === 4}
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<ShieldCheck className="w-4 h-4 text-[#dfc28d]" />}
              className="py-3 px-3.5 sm:px-4"
            />

          </div>

          {/* Converging Tree Connector (SVG) */}
          <div className="w-full max-w-3xl h-5 sm:h-5.5 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 22" fill="none" preserveAspectRatio="none">
              {/* 4 lines up from cards */}
              <path
                d="M 75 0 V 12"
                stroke={currentStep === 4 || currentStep === 5 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 4 || currentStep === 5 ? 0.9 : 0.45}
                strokeWidth={currentStep === 4 || currentStep === 5 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 225 0 V 12"
                stroke={currentStep === 4 || currentStep === 5 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 4 || currentStep === 5 ? 0.9 : 0.45}
                strokeWidth={currentStep === 4 || currentStep === 5 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 375 0 V 12"
                stroke={currentStep === 4 || currentStep === 5 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 4 || currentStep === 5 ? 0.9 : 0.45}
                strokeWidth={currentStep === 4 || currentStep === 5 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 525 0 V 12"
                stroke={currentStep === 4 || currentStep === 5 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 4 || currentStep === 5 ? 0.9 : 0.45}
                strokeWidth={currentStep === 4 || currentStep === 5 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              {/* Horizontal crossbar */}
              <path
                d="M 75 12 H 525"
                stroke={currentStep === 4 || currentStep === 5 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 4 || currentStep === 5 ? 0.9 : 0.45}
                strokeWidth={currentStep === 4 || currentStep === 5 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              {/* Center stem down to next card */}
              <path
                d="M 300 12 V 22"
                stroke={currentStep === 4 || currentStep === 5 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 4 || currentStep === 5 ? 0.9 : 0.45}
                strokeWidth={currentStep === 4 || currentStep === 5 ? 2 : 1.5}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* STAGE 5: EVALUATE OUTCOME (Step 5) */}
          <div className="w-full max-w-md sm:max-w-lg">
            <AgentNode
              title="EVALUATE OUTCOME"
              subtitle="Evaluation and completion gate"
              isActive={currentStep === 5}
              onMouseEnter={() => setHoveredStep(5)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />
          </div>

          {/* Split Connector to ADAPT & DELIVER (SVG) */}
          <div className="w-full max-w-md sm:max-w-lg h-4 sm:h-4.5 relative flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 18" fill="none" preserveAspectRatio="none">
              <path
                d="M 150 0 V 9"
                stroke={currentStep === 5 || currentStep === 6 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 5 || currentStep === 6 ? 0.9 : 0.45}
                strokeWidth={currentStep === 5 || currentStep === 6 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 75 9 H 225"
                stroke={currentStep === 5 || currentStep === 6 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 5 || currentStep === 6 ? 0.9 : 0.45}
                strokeWidth={currentStep === 5 || currentStep === 6 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 75 9 V 18"
                stroke={currentStep === 5 || currentStep === 6 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 5 || currentStep === 6 ? 0.9 : 0.45}
                strokeWidth={currentStep === 5 || currentStep === 6 ? 2 : 1.5}
                className="transition-all duration-300"
              />
              <path
                d="M 225 9 V 18"
                stroke={currentStep === 5 || currentStep === 6 ? '#f0dcba' : '#c4a978'}
                strokeOpacity={currentStep === 5 || currentStep === 6 ? 0.9 : 0.45}
                strokeWidth={currentStep === 5 || currentStep === 6 ? 2 : 1.5}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* STAGE 6: ADAPT & DELIVER (Step 6) */}
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            
            {/* ADAPT */}
            <AgentNode
              title="ADAPT"
              subtitle="Learn and loop again"
              isActive={currentStep === 6}
              onMouseEnter={() => setHoveredStep(6)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<RefreshCw className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />

            {/* DELIVER */}
            <AgentNode
              title="DELIVER"
              subtitle="Respond, create or act"
              isAccent
              isActive={currentStep === 6}
              onMouseEnter={() => setHoveredStep(6)}
              onMouseLeave={() => setHoveredStep(null)}
              icon={<CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#dfc28d]" />}
            />

          </div>

          {/* Sub-caption: EVERY LOOP MAKES THE COMPANION BETTER */}
          <div className="pt-2.5 pb-1 text-center">
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

