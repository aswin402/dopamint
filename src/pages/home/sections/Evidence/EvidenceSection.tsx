import { AgentNode } from './AgentNode';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Crown, 
  Layers, 
  Zap, 
  ArrowRight, 
  RefreshCw 
} from 'lucide-react';
import crownImg from '../../../../assets/Crown.webp';

export const EvidenceSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(interval);
  }, [hoveredStep]);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = [
    {
      step: '01 · INTENT',
      title: 'USER INTENT',
      subtitle: 'Natural voice, text, or scheduled trigger with deep context awareness.',
      tags: ['Live Voice', 'iMessage', 'Context'],
      icon: <Sparkles className="w-4 h-4" />,
      isPrimary: false,
    },
    {
      step: '02 · ORCHESTRATE',
      title: 'DOPE HARNESS',
      subtitle: 'Analyzes intent, loads long-term memory & constructs execution plan.',
      tags: ['Memory Sync', 'Reasoning', 'Routing'],
      icon: <Crown className="w-4 h-4" />,
      isPrimary: true,
    },
    {
      step: '03 · COLLABORATE',
      title: 'SPECIALIST AGENTS',
      subtitle: 'Dispatches tasks to parallel specialist agents for trading, research & protection.',
      tags: ['AiFi Trading', 'Research', 'Guardian'],
      icon: <Layers className="w-4 h-4" />,
      isPrimary: false,
    },
    {
      step: '04 · EXECUTE',
      title: 'AUTONOMOUS ACTION',
      subtitle: 'Completes on-chain transactions, invokes APIs, pays via x402 & delivers outcome.',
      tags: ['x402 Pay', 'On-Chain Tx', 'Outcome'],
      icon: <Zap className="w-4 h-4" />,
      isPrimary: false,
    },
  ];

  return (
    <section id="architecture" className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#f3f2e6]">
      
      {/* =========================================================================
          1. SECTION HEADER (CENTER ALIGNED)
          ========================================================================= */}
      <div className="max-w-4xl mb-8 sm:mb-12 text-center mx-auto space-y-2.5">
        
        {/* Crown & Classical Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#c4a978]/35 text-[11px] font-mono tracking-widest text-[#dfc28d] uppercase font-semibold">
          <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
          <span>ARCHITECTURE</span>
        </div>

        {/* Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-[#ffffff] tracking-tight leading-[1.08]">
          From intent to{' '}
          <span className="font-serif italic font-normal text-[#dfc28d]">
            execution.
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#dfc28d]/80 font-serif italic max-w-2xl mx-auto">
          How Dopamint seamlessly translates your thoughts into verified autonomous action.
        </p>
      </div>

      {/* =========================================================================
          2. HORIZONTAL ARCHITECTURE FLOW
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="relative max-w-6xl mx-auto my-4 sm:my-6"
      >
        {/* Top Continuous Loop Indicator */}
        <div className="mb-4 sm:mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1b1712]/90 border border-[#c4a978]/35 text-[#dfc28d] text-xs font-mono tracking-wide shadow-sm">
            <RefreshCw className="w-3.5 h-3.5 text-[#dfc28d] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-semibold uppercase text-[11px] sm:text-xs">Continuous Feedback Loop</span>
            <span className="text-white/40 hidden sm:inline">·</span>
            <span className="text-[#f6edd9]/85 text-[11px] sm:text-xs hidden sm:inline">Every loop adapts identity and refines long-term memory</span>
          </div>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 lg:gap-3 relative z-20 items-stretch">
          {steps.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="relative flex flex-col h-full">
                <AgentNode
                  step={item.step}
                  title={item.title}
                  subtitle={item.subtitle}
                  tags={item.tags}
                  icon={item.icon}
                  isPrimary={item.isPrimary}
                  isActive={currentStep === idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Horizontal Connecting Pulse Bar across steps on large screens */}
        <div className="hidden lg:block relative mt-4 px-6">
          <div className="h-[2px] w-full bg-gradient-to-r from-[#dfc28d]/20 via-[#dfc28d]/60 to-[#dfc28d]/20 relative overflow-hidden rounded-full">
            <motion.div
              animate={{ x: ['-20%', '120%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#f0dcba] to-transparent shadow-[0_0_10px_#f0dcba]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#dfc28d]/70 pt-2 px-2 uppercase tracking-wider">
            <span>01. Input</span>
            <span className="flex items-center gap-1">Planning <ArrowRight className="w-2.5 h-2.5" /></span>
            <span className="flex items-center gap-1">Parallel Dispatch <ArrowRight className="w-2.5 h-2.5" /></span>
            <span>04. Verified Delivery</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. CAPABILITY PILL BADGES
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
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
