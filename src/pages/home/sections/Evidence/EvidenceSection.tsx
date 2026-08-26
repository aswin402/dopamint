import { AgentNode } from './AgentNode';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Crown, 
  Layers, 
  Zap, 
  ArrowRight, 
  RefreshCw,
  Play,
  Pause,
  ChevronRight
} from 'lucide-react';
import crownImg from '../../../../assets/Crown.webp';

export const EvidenceSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto step progression every 2.6s if playing & not hovering
  useEffect(() => {
    if (!isPlaying || hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPlaying, hoveredStep]);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = [
    {
      step: '01 · INTENT',
      title: 'USER INTENT',
      subtitle: 'Natural voice, text, or scheduled trigger with deep context awareness.',
      tags: ['Live Voice', 'iMessage', 'Context'],
      icon: <Sparkles className="w-4 h-4" />,
      isPrimary: false,
      payload: 'Capturing multimodal intent: "Find best APY on Base and deposit 500 USDC with risk limit under 5%"',
    },
    {
      step: '02 · ORCHESTRATE',
      title: 'DOPE HARNESS',
      subtitle: 'Analyzes intent, loads long-term memory & constructs execution plan.',
      tags: ['Memory Sync', 'Reasoning', 'Routing'],
      icon: <Crown className="w-4 h-4" />,
      isPrimary: true,
      payload: 'Querying vector memory: user preferences loaded. Constructing DAG workflow & gas estimation.',
    },
    {
      step: '03 · COLLABORATE',
      title: 'SPECIALIST AGENTS',
      subtitle: 'Dispatches tasks to parallel specialist agents for trading, research & protection.',
      tags: ['AiFi Trading', 'Research', 'Guardian'],
      icon: <Layers className="w-4 h-4" />,
      isPrimary: false,
      payload: 'Dispatching: AiFi agent finds 14.2% Aerodrome pool · Guardian agent verifies smart contract safety.',
    },
    {
      step: '04 · EXECUTE',
      title: 'AUTONOMOUS ACTION',
      subtitle: 'Completes on-chain transactions, invokes APIs, pays via x402 & delivers outcome.',
      tags: ['x402 Pay', 'On-Chain Tx', 'Outcome'],
      icon: <Zap className="w-4 h-4" />,
      isPrimary: false,
      payload: 'Executed tx #0x9a8f... on Base via x402 micropayment. Position opened. Memory updated.',
    },
  ];

  return (
    <section id="architecture" className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#f3f2e6]">
      
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
          2. HORIZONTAL ARCHITECTURE FLOW CONTAINER
          ========================================================================= */}
      <div 
        style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="relative max-w-6xl mx-auto my-4 sm:my-6"
      >
        {/* Continuous Feedback Loop Top Conduit */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
          
          {/* Continuous Loop Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1b1712]/90 backdrop-blur-md border border-[#c4a978]/40 text-[#dfc28d] text-xs font-mono tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <RefreshCw 
              className={`w-3.5 h-3.5 text-[#dfc28d] ${isPlaying ? 'animate-spin' : ''}`} 
              style={{ animationDuration: '6s' }} 
            />
            <span className="font-bold uppercase text-[11px] sm:text-xs tracking-wider">
              Continuous Learning Loop
            </span>
            <span className="text-white/30 hidden md:inline">·</span>
            <span className="text-[#f6edd9]/85 text-[11px] sm:text-xs hidden md:inline">
              Every completed action refines long-term identity &amp; memory
            </span>
          </div>

          {/* Interactive Play/Pause & Step Controls */}
          <div className="flex items-center gap-2 bg-[#171411]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#c4a978]/25 text-xs font-mono">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1 text-[#dfc28d] hover:text-[#f0dcba] transition-colors cursor-pointer pr-2 border-r border-white/10"
              title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#dfc28d]" />
                  <span className="text-[10px] uppercase font-bold">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#4ade80]" />
                  <span className="text-[10px] uppercase font-bold text-[#4ade80]">Play</span>
                </>
              )}
            </button>
            <span className="text-[10px] text-[#b8aa94] tracking-wider">
              STEP 0{currentStep + 1} / 04
            </span>
          </div>
        </div>

        {/* ── Horizontal Cards Grid with Integrated Laser Flow ── */}
        <div className="relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 relative z-20 items-stretch">
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
                          ? 'bg-[#f0dcba] border-[#f0dcba] text-[#1a140f] shadow-[0_0_12px_#f0dcba] scale-110' 
                          : 'bg-[#1e1a15] border-[#c4a978]/30 text-[#dfc28d]/60 scale-90'
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
        <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-[#14110e]/90 backdrop-blur-xl border border-[#c4a978]/30 shadow-lg text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dfc28d] animate-ping" />
              <span className="text-[#dfc28d] font-bold uppercase tracking-wider">
                Pipeline Execution State: [{steps[currentStep].step}]
              </span>
            </div>
            <div className="text-[11px] text-[#b8aa94]/80">
              Latency: <span className="text-[#4ade80] font-bold font-mono">18ms</span> · Base Network (Sepolia / Mainnet)
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.28 }}
              className="text-xs sm:text-[13px] font-mono text-[#f6edd9] leading-relaxed"
            >
              <span className="text-[#dfc28d] font-bold mr-1.5">➜</span>
              {steps[currentStep].payload}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ── Interactive Progress Timeline Scrubber ── */}
        <div className="mt-5 px-3 sm:px-6">
          <div className="flex justify-between items-center relative">
            
            {/* Background connecting rail */}
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-2 h-[2px] bg-[#3a3228] z-0" />
            
            {/* Animated active fill beam */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 left-2 h-[2px] bg-gradient-to-r from-[#dfc28d] to-[#f0dcba] shadow-[0_0_10px_#f0dcba] z-0 transition-all duration-500"
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
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                    currentStep === idx
                      ? 'bg-[#f0dcba] text-[#1c1611] scale-125 shadow-[0_0_16px_#f0dcba] ring-2 ring-[#f0dcba]/50'
                      : idx < currentStep
                      ? 'bg-[#dfc28d] text-[#1c1611] shadow-sm'
                      : 'bg-[#221c16] text-[#a69680] border border-[#c4a978]/30 group-hover:border-[#dfc28d]'
                  }`}
                >
                  0{idx + 1}
                </div>
                <span 
                  className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mt-1.5 transition-colors hidden sm:block ${
                    currentStep === idx ? 'text-[#f0dcba] font-bold' : 'text-[#8c7f6e] group-hover:text-[#dfc28d]'
                  }`}
                >
                  {item.title.split(' ')[0]}
                </span>
              </button>
            ))}

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
