import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform, useInView } from 'framer-motion';
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isManual, setIsManual] = useState<boolean>(false);

  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  });

  // Sync active step with scroll progress on mobile (0% -> 25% -> 50% -> 75% -> 100%)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!isManual) {
      const stepIndex = Math.min(3, Math.floor(latest * 4));
      setActiveStep(stepIndex);
    }
  });

  const smoothProgressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Auto step progression if playing (Desktop or manual play)
  useEffect(() => {
    if (!isPlaying || !isInView || hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPlaying, isInView, hoveredStep]);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = [
    {
      step: '01 · INTENT',
      title: 'USER INTENT',
      subtitle: 'Natural voice or text.',
      tags: ['Live Voice', 'iMessage', 'Context'],
      icon: <Target className="w-4 h-4 text-[#141820]" />,
      isPrimary: false,
      timelineLabel: 'INTENT',
    },
    {
      step: '02 · ORCHESTRATE',
      title: 'DOPE HARNESS',
      subtitle: 'Understands intent and prepares execution.',
      tags: ['Memory Sync', 'Reasoning', 'Routing'],
      icon: <Network className="w-4 h-4 text-[#141820]" />,
      isPrimary: false,
      timelineLabel: 'ORCHESTRATE',
    },
    {
      step: '03 · AGENT HARNESS',
      title: 'AGENT HARNESS',
      subtitle: 'Coordinates execution.',
      tags: ['Parallel Agents', 'Routing', 'Safety'],
      icon: <Boxes className="w-4 h-4 text-[#141820]" />,
      isPrimary: true,
      timelineLabel: 'AGENT HARNESS',
    },
    {
      step: '04 · ACTION LAYER',
      title: 'AGENT EXECUTION',
      subtitle: 'Executes on Base.',
      tags: ['x402 Pay', 'On-Chain Tx', 'Outcome'],
      icon: <Zap className="w-4 h-4 text-[#141820]" />,
      isPrimary: false,
      timelineLabel: 'ACTION LAYER',
    },
  ];

  return (
    <section ref={sectionRef} id="architecture" className="relative z-30 text-[#f3f2e6]">
      
      {/* =========================================================================
          1. MOBILE VIEW: SCROLL-DRIVEN PINNED ARCHITECTURE PIPELINE
          ========================================================================= */}
      <div ref={mobileContainerRef} className="md:hidden relative w-full h-[250vh]">
        
        {/* Pinned Screen Viewport: Pins cleanly while user scrolls through 4 steps */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-12 pb-3 px-3 overflow-hidden bg-transparent">
          
          {/* Header */}
          <div className="text-center mx-auto space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[10px] font-mono tracking-widest text-[#37312c] uppercase font-bold shadow-md">
              <img src={crownImg} alt="Crown" className="w-3 h-3 object-contain" />
              <span>ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#ffffff] tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              From intent to{' '}
              <span className="font-serif italic font-normal text-[#dfc28d]">
                execution.
              </span>
            </h2>
          </div>

          {/* Continuous Loop Pill & Step Counter Header */}
          <div className="flex items-center justify-between gap-2 px-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[#25362a] text-[9.5px] font-mono tracking-wide shadow-md">
              <RefreshCw className="w-3 h-3 text-[#7a382e] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-bold uppercase tracking-wider text-[#25362a]">
                FEEDBACK LOOP
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#f3f2e6] px-2.5 py-1 rounded-full border border-[#c4a978]/60 text-[10px] font-mono text-[#25362a] font-bold shadow-md">
              <span>STEP 0{currentStep + 1} / 04</span>
            </div>
          </div>

          {/* Top 4 Step Pill Scrubber with Animated Progress Underline */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-1.5 relative z-10">
              {steps.map((item, idx) => {
                const isCur = currentStep === idx;
                const isDone = idx <= currentStep;
                return (
                  <button
                    key={`mob-step-${idx}`}
                    onClick={() => {
                      setIsManual(true);
                      setActiveStep(idx);
                      setIsPlaying(false);
                      setTimeout(() => setIsManual(false), 4000);
                    }}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-0.5 transition-all duration-300 cursor-pointer ${
                      isCur
                        ? 'bg-[#ffffff] border-[#c4a978] text-[#25362a] shadow-[0_4px_16px_rgba(0,0,0,0.25)] ring-2 ring-[#c4a978]/60 scale-[1.03]'
                        : isDone
                        ? 'bg-[#f3f2e6] border-[#c4a978]/40 text-[#25362a]'
                        : 'bg-[#f3f2e6]/75 border-[#dcd6c8] text-[#7a746a]'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[9.5px] font-bold">0{idx + 1}</span>
                      {isCur && <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />}
                    </div>
                    <span className="text-[8px] font-mono uppercase tracking-tight truncate max-w-[58px] leading-tight font-semibold">
                      {item.timelineLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Glowing Scroll-driven progress underline bar */}
            <div className="w-full h-[2.5px] bg-[#dcd6c8]/40 rounded-full mt-1.5 relative overflow-hidden">
              <motion.div
                style={{ width: smoothProgressPercent }}
                className="h-full bg-gradient-to-r from-[#7a382e] via-[#c4a978] to-[#7a382e] shadow-[0_0_8px_rgba(196,169,120,0.8)]"
              />
            </div>
          </div>

          {/* Active Card Container with Smooth Slide Transitions */}
          <div className="relative flex-1 min-h-[240px] max-h-[285px] my-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mob-card-${currentStep}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Static Pipeline State Console */}
          <div 
            style={{ backgroundColor: '#dfc28d' }}
            className="p-3 rounded-xl border border-[#c4a978] shadow-[0_8px_24px_rgba(0,0,0,0.35)] text-left font-mono"
          >
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#1a140f]/15 text-[10px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a382e] shadow-[0_0_6px_rgba(122,56,46,0.6)]" />
                <span className="text-[#1a140f] font-bold uppercase tracking-wider text-[10.5px]">
                  PIPELINE STATE: [BUY NVDAc]
                </span>
              </div>
              <div className="text-[9.5px] text-[#37312c]">
                Latency: <span className="text-[#15803d] font-bold font-mono">18ms</span> · Network: Base
              </div>
            </div>
            
            <p className="text-[10.5px] font-mono text-[#1a140f] leading-relaxed font-medium">
              → Intent recognized → Route found → Trade executed → Confirmed
            </p>
          </div>

          {/* 4 Bottom Capability Capsule Pills (Mobile 2x2 grid) */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-xl bg-[#fdfbf7]/95 border border-[#c4a978]/50 py-1.5 px-2 flex items-center gap-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0">
                <Infinity className="w-3 h-3 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-[10px] leading-tight">Agent Loop</span>
                <span className="text-[#5a544b] font-serif italic text-[8px] leading-tight">continuous</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#fdfbf7]/95 border border-[#c4a978]/50 py-1.5 px-2 flex items-center gap-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0">
                <Settings className="w-3 h-3 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-[10px] leading-tight">Agent Harness</span>
                <span className="text-[#5a544b] font-serif italic text-[8px] leading-tight">tools &amp; envs</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#fdfbf7]/95 border border-[#c4a978]/50 py-1.5 px-2 flex items-center gap-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0">
                <CreditCard className="w-3 h-3 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-[10px] leading-tight">x402</span>
                <span className="text-[#5a544b] font-serif italic text-[8px] leading-tight">auto payments</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#fdfbf7]/95 border border-[#c4a978]/50 py-1.5 px-2 flex items-center gap-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0">
                <BarChart2 className="w-3 h-3 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-[10px] leading-tight">AiFi</span>
                <span className="text-[#5a544b] font-serif italic text-[8px] leading-tight">financial execution</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VIEW: HORIZONTAL 4-CARD PIPELINE & TIMELINE SCRUBBER
          ========================================================================= */}
      <div className="hidden md:block pt-36 sm:pt-44 lg:pt-52 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Section Header (Desktop) */}
        <div className="max-w-4xl mb-8 sm:mb-10 text-center mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[11px] font-mono tracking-widest text-[#37312c] uppercase font-bold shadow-md">
            <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
            <span>ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-[#ffffff] tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            From intent to{' '}
            <span className="font-serif italic font-normal text-[#dfc28d]">
              execution.
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f3f2e6]/90 font-serif italic max-w-5xl mx-auto drop-shadow-sm">
            How Dopamint seamlessly translates your natural thoughts into verified autonomous action.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto my-4 sm:my-6">
          {/* Continuous Feedback Loop Top Conduit */}
          <div className="mb-4 sm:mb-6 flex items-center justify-between gap-3 px-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[#25362a] text-xs font-mono tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <RefreshCw 
                className={`w-3.5 h-3.5 text-[#7a382e] ${isPlaying ? 'animate-spin' : ''}`} 
                style={{ animationDuration: '6s' }} 
              />
              <span className="font-bold uppercase text-xs tracking-wider text-[#25362a]">
                CONTINUOUS LEARNING LOOP
              </span>
              <span className="text-[#37312c]/40">·</span>
              <span className="text-[#5a544b] text-xs font-mono">
                Every completed action refines long-term identity &amp; memory
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#f3f2e6] px-3.5 py-1.5 rounded-full border border-[#c4a978]/60 text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-[#25362a] hover:text-[#7a382e] transition-colors cursor-pointer pr-2.5 border-r border-[#dcd6c8]"
                title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#7a382e]" />
                    <span className="text-[10px] uppercase font-bold text-[#7a382e]">PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#16a34a] fill-[#16a34a]" />
                    <span className="text-[10px] uppercase font-bold text-[#16a34a]">PLAY</span>
                  </>
                )}
              </button>
              <span className="text-[10px] text-[#25362a] font-bold tracking-wider">
                STEP 0{currentStep + 1} / 04
              </span>
            </div>
          </div>

          {/* ── Horizontal 4 Cards Grid with Integrated Chevron Connectors ── */}
          <div className="relative">
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
                            ? 'bg-[#c4a978] border-[#c4a978] text-[#141820] shadow-[0_2px_10px_rgba(196,169,120,0.5)] scale-110' 
                            : 'bg-[#f3f2e6] border-[#c4a978]/60 text-[#37312c] scale-90'
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

          {/* ── Static Pipeline State Console (Desktop) ── */}
          <div 
            style={{ backgroundColor: '#dfc28d' }}
            className="mt-4 p-3.5 sm:p-4 rounded-xl border border-[#c4a978] shadow-[0_12px_36px_rgba(0,0,0,0.35)] text-left font-mono"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-[#1a140f]/15 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a382e] shadow-[0_0_8px_rgba(122,56,46,0.6)]" />
                <span className="text-[#1a140f] font-bold uppercase tracking-wider text-[11.5px] sm:text-xs">
                  PIPELINE STATE: [BUY NVDAc]
                </span>
              </div>
              <div className="text-[11.5px] text-[#37312c]">
                Latency: <span className="text-[#15803d] font-bold font-mono">18ms</span> · <span className="font-semibold">Network: Base</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-[13px] font-mono text-[#1a140f] leading-relaxed flex items-center gap-2 font-medium">
              <span>→ Intent recognized → Route found → Trade executed → Confirmed</span>
            </p>
          </div>

          {/* ── Interactive Progress Timeline Scrubber (Desktop) ── */}
          <div className="mt-8 sm:mt-10 md:mt-12 px-2 sm:px-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-4 relative">
              {steps.map((item, idx) => {
                const isCur = currentStep === idx;
                const isPassed = currentStep > idx;

                return (
                  <div key={idx} className="relative flex flex-col items-center">
                    {/* Background Track Line Segments */}
                    {/* Segment going to the left (for beads 2, 3, 4) */}
                    {idx > 0 && (
                      <div className="absolute top-3.5 sm:top-4 -translate-y-1/2 right-1/2 left-0 h-[2px] bg-[#dcd6c8]/40 z-0 pointer-events-none" />
                    )}
                    {/* Segment going to the right (for beads 1, 2, 3 - NEVER for bead 4) */}
                    {idx < 3 && (
                      <div className="absolute top-3.5 sm:top-4 -translate-y-1/2 left-1/2 right-0 h-[2px] bg-[#dcd6c8]/40 z-0 pointer-events-none" />
                    )}

                    {/* Active Highlight Line Segments */}
                    {idx > 0 && (
                      <div className="absolute top-3.5 sm:top-4 -translate-y-1/2 right-1/2 left-0 h-[2px] overflow-hidden z-0 pointer-events-none">
                        <div
                          className={`h-full bg-gradient-to-r from-[#7a382e] via-[#c4a978] to-[#7a382e] shadow-[0_0_8px_rgba(196,169,120,0.8)] transition-all duration-500 ${
                            isPassed || isCur ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    )}
                    {idx < 3 && (
                      <div className="absolute top-3.5 sm:top-4 -translate-y-1/2 left-1/2 right-0 h-[2px] overflow-hidden z-0 pointer-events-none">
                        <div
                          className={`h-full bg-gradient-to-r from-[#7a382e] via-[#c4a978] to-[#7a382e] shadow-[0_0_8px_rgba(196,169,120,0.8)] transition-all duration-500 ${
                            isPassed ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    )}

                    {/* Step Bead Button */}
                    <button
                      onClick={() => {
                        setActiveStep(idx);
                      }}
                      className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden w-full"
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] font-mono font-bold transition-all duration-300 shrink-0 ${
                          isCur
                            ? 'bg-[#ffffff] text-[#141820] border-2 border-[#c4a978] scale-125 shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-2 ring-[#c4a978]/60'
                            : isPassed
                            ? 'bg-[#c4a978] text-[#141820] shadow-sm'
                            : 'bg-[#f3f2e6] text-[#55604e] border border-[#c4a978]/60 group-hover:border-[#c4a978]'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <span
                        className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider mt-2.5 text-center transition-all duration-300 px-2.5 py-0.5 rounded-full ${
                          isCur
                            ? 'text-[#141820] bg-[#dfc28d] font-bold shadow-[0_2px_10px_rgba(223,194,141,0.5)]'
                            : 'text-[#f3f2e6] bg-[#141820]/75 backdrop-blur-md border border-[#c4a978]/30 font-semibold drop-shadow-md group-hover:border-[#c4a978]'
                        }`}
                      >
                        {item.timelineLabel}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Capability Pill Cards (Desktop) ── */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
            <div className="rounded-full bg-[#fdfbf7]/95 hover:bg-[#ffffff] border border-[#c4a978]/60 hover:border-[#c4a978] py-2.5 px-4 sm:px-5 flex items-center gap-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(196,169,120,0.35)] hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0 shadow-inner">
                <Infinity className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-sm sm:text-[14.5px] leading-tight">Agent Loop</span>
                <span className="text-[#5a544b] font-serif italic text-[11px] sm:text-xs leading-tight mt-0.5">keeps the task running</span>
              </div>
            </div>

            <div className="rounded-full bg-[#fdfbf7]/95 hover:bg-[#ffffff] border border-[#c4a978]/60 hover:border-[#c4a978] py-2.5 px-4 sm:px-5 flex items-center gap-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(196,169,120,0.35)] hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0 shadow-inner">
                <Settings className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-sm sm:text-[14.5px] leading-tight">Agent Harness</span>
                <span className="text-[#5a544b] font-serif italic text-[11px] sm:text-xs leading-tight mt-0.5">tools &amp; environments</span>
              </div>
            </div>

            <div className="rounded-full bg-[#fdfbf7]/95 hover:bg-[#ffffff] border border-[#c4a978]/60 hover:border-[#c4a978] py-2.5 px-4 sm:px-5 flex items-center gap-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(196,169,120,0.35)] hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0 shadow-inner">
                <CreditCard className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-sm sm:text-[14.5px] leading-tight">x402</span>
                <span className="text-[#5a544b] font-serif italic text-[11px] sm:text-xs leading-tight mt-0.5">autonomous payments</span>
              </div>
            </div>

            <div className="rounded-full bg-[#fdfbf7]/95 hover:bg-[#ffffff] border border-[#c4a978]/60 hover:border-[#c4a978] py-2.5 px-4 sm:px-5 flex items-center gap-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(196,169,120,0.35)] hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 flex items-center justify-center text-[#7a382e] shrink-0 shadow-inner">
                <BarChart2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#141820] text-sm sm:text-[14.5px] leading-tight">AiFi</span>
                <span className="text-[#5a544b] font-serif italic text-[11px] sm:text-xs leading-tight mt-0.5">financial execution</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
