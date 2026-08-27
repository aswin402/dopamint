import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Network, 
  Boxes, 
  Zap, 
  RefreshCw,
  Play,
  Pause,
  ChevronRight,
  Infinity,
  Settings,
  CreditCard,
  BarChart2
} from 'lucide-react';
import crownImg from '../../../../assets/Crown.webp';
import { AgentNode } from './AgentNode';

export const EvidenceSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Step 3 (Agent Network) as in reference
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto step progression every 3.0s if playing & not hovering
  useEffect(() => {
    if (!isPlaying || hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, hoveredStep]);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = [
    {
      step: '01 · INTENT',
      title: 'USER INTENT',
      subtitle: 'Natural voice, text, or scheduled trigger with deep context awareness.',
      tags: ['Live Voice', 'iMessage', 'Context'],
      icon: <Target className="w-4 h-4" />,
      isPrimary: false,
      timelineLabel: 'INTENT',
      payload: 'Natural intent received: "Find best APY on Base and deposit 500 USDC with risk limit under 5%"',
    },
    {
      step: '02 · ORCHESTRATE',
      title: 'DOPE HARNESS',
      subtitle: 'Analyzes intent, loads long-term memory & initializes execution plan.',
      tags: ['Memory Sync', 'Reasoning', 'Routing'],
      icon: <Network className="w-4 h-4" />,
      isPrimary: false,
      timelineLabel: 'ORCHESTRATE',
      payload: 'Loading persistent memory, evaluating security guardrails & initializing DAG execution plan.',
    },
    {
      step: '03 · AGENT HARNESS',
      title: 'AGENT HARNESS',
      subtitle: 'Coordinates multiple agents across trading, research & protection.',
      tags: ['Parallel Agents', 'Specialized Roles', 'Context Share'],
      icon: <Boxes className="w-4 h-4" />,
      isPrimary: true,
      timelineLabel: 'AGENT IN ACTION',
      payload: 'Coordinating: AiFi agent scans Aerodrome pool · Guardian agent verifies smart contract safety · x402 agent prepares payment.',
    },
    {
      step: '04 · ACTION LAYER',
      title: 'AGENT EXECUTION',
      subtitle: 'Executes on-chain transactions, invokes APIs, pays via x402 & delivers outcomes.',
      tags: ['x402 Pay', 'On-Chain Tx', 'Outcome'],
      icon: <Zap className="w-4 h-4" />,
      isPrimary: false,
      timelineLabel: 'AGENT EXECUTION',
      payload: 'Executing on-chain transaction via x402 · Verifying receipt in TEE · Writing proof to ledger.',
    },
  ];

  return (
    <section id="architecture" className="pt-36 sm:pt-44 md:pt-48 lg:pt-56 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#f3f2e6] relative z-30 select-none">
      
      {/* =========================================================================
          1. SECTION HEADER (CENTER ALIGNED)
          ========================================================================= */}
      <div className="max-w-4xl mb-8 sm:mb-10 text-center mx-auto space-y-2.5">
        
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
          How Dopamint seamlessly translates your natural thoughts into verified autonomous action.
        </p>
      </div>

      {/* =========================================================================
          2. ARCHITECTURE FLOW CONTAINER
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="relative max-w-6xl mx-auto my-4 sm:my-6"
      >
        {/* Continuous Feedback Loop Top Conduit */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-1 sm:px-2">
          
          {/* Continuous Loop Pill Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1b1712]/90 backdrop-blur-md border border-[#c4a978]/40 text-[#dfc28d] text-xs font-mono tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <RefreshCw 
              className={`w-3.5 h-3.5 text-[#dfc28d] ${isPlaying ? 'animate-spin' : ''}`} 
              style={{ animationDuration: '6s' }} 
            />
            <span className="font-bold uppercase text-[10.5px] sm:text-xs tracking-wider text-[#dfc28d]">
              CONTINUOUS LEARNING LOOP
            </span>
            <span className="text-white/30 hidden md:inline">·</span>
            <span className="text-[#f6edd9]/85 text-[11px] sm:text-xs hidden md:inline font-mono">
              Every completed action refines long-term identity &amp; memory
            </span>
          </div>

          {/* Interactive Play/Pause & Step Controls */}
          <div className="flex items-center gap-2 bg-[#171411]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#c4a978]/30 text-xs font-mono">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 text-[#dfc28d] hover:text-[#f0dcba] transition-colors cursor-pointer pr-2.5 border-r border-white/10"
              title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#dfc28d]" />
                  <span className="text-[10px] uppercase font-bold text-[#dfc28d]">PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#4ade80] fill-[#4ade80]" />
                  <span className="text-[10px] uppercase font-bold text-[#4ade80]">PLAY</span>
                </>
              )}
            </button>
            <span className="text-[10px] text-[#dfc28d] font-bold tracking-wider">
              STEP 0{currentStep + 1} / 04
            </span>
          </div>
        </div>

        {/* ── MOBILE VIEW: INTERACTIVE STEP STAGE WITH STEP NAV ── */}
        <div className="md:hidden relative w-full mb-4">
          
          {/* Top 4 Step Pill Scrubber */}
          <div className="grid grid-cols-4 gap-1.5 mb-3.5">
            {steps.map((item, idx) => {
              const isCur = currentStep === idx;
              const isDone = idx < currentStep;
              return (
                <button
                  key={`mob-step-${idx}`}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all duration-300 cursor-pointer ${
                    isCur
                      ? 'bg-[#2a2218] border-[#f0dcba] text-[#f0dcba] shadow-[0_0_16px_rgba(240,220,186,0.3)] ring-1 ring-[#f0dcba]/60 scale-[1.02]'
                      : isDone
                      ? 'bg-[#1a1612] border-[#c4a978]/40 text-[#dfc28d]'
                      : 'bg-[#12100d]/70 border-white/10 text-white/40'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[10px] font-bold">0{idx + 1}</span>
                    {isCur && <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />}
                  </div>
                  <span className="text-[8.5px] font-mono uppercase tracking-tight truncate max-w-[62px] leading-tight">
                    {item.timelineLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Card Container with smooth animation */}
          <div className="relative min-h-[290px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mob-card-${currentStep}`}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <AgentNode
                  step={steps[currentStep].step}
                  title={steps[currentStep].title}
                  subtitle={steps[currentStep].subtitle}
                  tags={steps[currentStep].tags}
                  icon={steps[currentStep].icon}
                  isPrimary={steps[currentStep].isPrimary}
                  isActive={true}
                  stepIndex={currentStep}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Prev / Next Navigation Bar */}
          <div className="flex items-center justify-between gap-3 mt-3 px-1">
            <button
              onClick={() => {
                setActiveStep((prev) => (prev > 0 ? prev - 1 : 3));
                setIsPlaying(false);
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1813] border border-[#c4a978]/30 text-[#dfc28d] text-xs font-mono hover:border-[#dfc28d] active:scale-95 transition-all cursor-pointer"
            >
              <span>←</span>
              <span>PREV</span>
            </button>

            {/* Step Dots indicator */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentStep === idx
                      ? 'w-6 bg-[#dfc28d] shadow-[0_0_8px_#dfc28d]'
                      : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setActiveStep((prev) => (prev + 1) % 4);
                setIsPlaying(false);
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1813] border border-[#c4a978]/30 text-[#dfc28d] text-xs font-mono hover:border-[#dfc28d] active:scale-95 transition-all cursor-pointer"
            >
              <span>NEXT</span>
              <span>→</span>
            </button>
          </div>

        </div>

        {/* ── DESKTOP VIEW: Horizontal 4 Cards Grid with Integrated Chevron Connectors ── */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 relative z-20 items-stretch">
            {steps.map((item, idx) => (
              <div key={idx} className="relative flex flex-col h-full">
                <AgentNode
                  step={item.step}
                  title={item.title}
                  subtitle={item.subtitle}
                  tags={item.tags}
                  icon={item.icon}
                  isPrimary={item.isPrimary}
                  isActive={currentStep === idx}
                  stepIndex={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                />

                {/* Right directional arrow indicator on desktop between cards */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-500 ${
                        currentStep === idx 
                          ? 'bg-[#dfc28d] border-[#dfc28d] text-[#1a140f] shadow-[0_0_12px_#dfc28d] scale-110' 
                          : 'bg-[#1e1a15] border-[#c4a978]/40 text-[#dfc28d]/70 scale-90'
                      }`}
                    >
                      <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Live Step Pipeline Payload Console ── */}
        <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-[#14110e]/95 backdrop-blur-xl border border-[#c4a978]/35 shadow-xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dfc28d] shadow-[0_0_8px_#dfc28d]" />
              <span className="text-[#dfc28d] font-bold uppercase tracking-wider text-[11.5px] sm:text-xs">
                PIPELINE STATE: [{steps[currentStep].step}]
              </span>
            </div>
            <div className="text-[11px] text-[#b8aa94]">
              Latency: <span className="text-[#4ade80] font-bold font-mono">18ms</span> · Base Network (Sepolia / Mainnet)
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className="text-xs sm:text-[13px] font-mono text-[#f6edd9] leading-relaxed flex items-start gap-2"
            >
              <span className="text-[#dfc28d] font-bold shrink-0">→</span>
              <span>{steps[currentStep].payload}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ── Interactive Progress Timeline Scrubber (Desktop) ── */}
        <div className="hidden md:block mt-8 sm:mt-10 md:mt-12 px-3 sm:px-6">
          <div className="flex justify-between items-start relative">
            
            {/* Background connecting golden rail (positioned at exact vertical center of circles) */}
            <div className="absolute top-3.5 sm:top-4 -translate-y-1/2 inset-x-3 h-[2px] bg-[#3a3228] z-0" />
            
            {/* Animated active fill beam */}
            <div 
              className="absolute top-3.5 sm:top-4 -translate-y-1/2 left-3 h-[2px] bg-gradient-to-r from-[#dfc28d] via-[#f0dcba] to-[#dfc28d] shadow-[0_0_10px_#dfc28d] z-0 transition-all duration-500"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />

            {/* 4 Interactive Step Beads */}
            {steps.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden"
              >
                <div 
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] font-mono font-bold transition-all duration-300 ${
                    currentStep === idx
                      ? 'bg-[#dfc28d] text-[#1c1611] scale-125 shadow-[0_0_18px_#dfc28d] ring-2 ring-[#dfc28d]/60'
                      : idx < currentStep
                      ? 'bg-[#dfc28d] text-[#1c1611] shadow-sm'
                      : 'bg-[#1c1712] text-[#dfc28d] border border-[#c4a978]/40 group-hover:border-[#dfc28d]'
                  }`}
                >
                  0{idx + 1}
                </div>
                <span 
                  className={`text-[9.5px] sm:text-[10.5px] font-mono uppercase tracking-wider mt-2 transition-colors ${
                    currentStep === idx ? 'text-[#dfc28d] font-bold' : 'text-[#8c7f6e] group-hover:text-[#dfc28d]'
                  }`}
                >
                  {item.timelineLabel}
                </span>
              </button>
            ))}

          </div>
        </div>

      </div>

      {/* =========================================================================
          3. CAPABILITY PILL CARDS (EXACT MATCHING IMAGE 2 UI)
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto"
      >
        {/* Card 1: Agent Loop */}
        <div className="rounded-2xl sm:rounded-full bg-[#f3f2e6] border border-[#dcd6c8] py-2.5 px-3 sm:px-5 flex items-center gap-2.5 sm:gap-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-300 select-none">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#dfdbd0] flex items-center justify-center text-[#1a1a1a] shrink-0 shadow-inner">
            <Infinity className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#141820] text-xs sm:text-[14.5px] leading-tight">
              Agent Loop
            </span>
            <span className="text-[#5a544b] text-[10px] sm:text-xs font-normal leading-tight mt-0.5">
              keeps task running
            </span>
          </div>
        </div>

        {/* Card 2: Agent Harness */}
        <div className="rounded-2xl sm:rounded-full bg-[#f3f2e6] border border-[#dcd6c8] py-2.5 px-3 sm:px-5 flex items-center gap-2.5 sm:gap-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-300 select-none">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#dfdbd0] flex items-center justify-center text-[#1a1a1a] shrink-0 shadow-inner">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#141820] text-xs sm:text-[14.5px] leading-tight">
              Agent Harness
            </span>
            <span className="text-[#5a544b] text-[10px] sm:text-xs font-normal leading-tight mt-0.5">
              tools &amp; envs
            </span>
          </div>
        </div>

        {/* Card 3: x402 */}
        <div className="rounded-2xl sm:rounded-full bg-[#f3f2e6] border border-[#dcd6c8] py-2.5 px-3 sm:px-5 flex items-center gap-2.5 sm:gap-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-300 select-none">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#dfdbd0] flex items-center justify-center text-[#1a1a1a] shrink-0 shadow-inner">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#141820] text-xs sm:text-[14.5px] leading-tight">
              x402
            </span>
            <span className="text-[#5a544b] text-[10px] sm:text-xs font-normal leading-tight mt-0.5">
              auto payments
            </span>
          </div>
        </div>

        {/* Card 4: AiFi */}
        <div className="rounded-2xl sm:rounded-full bg-[#f3f2e6] border border-[#dcd6c8] py-2.5 px-3 sm:px-5 flex items-center gap-2.5 sm:gap-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-300 select-none">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#dfdbd0] flex items-center justify-center text-[#1a1a1a] shrink-0 shadow-inner">
            <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#141820] text-xs sm:text-[14.5px] leading-tight">
              AiFi
            </span>
            <span className="text-[#5a544b] text-[10px] sm:text-xs font-normal leading-tight mt-0.5">
              financial execution
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};
