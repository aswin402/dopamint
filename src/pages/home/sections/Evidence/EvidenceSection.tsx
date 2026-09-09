import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useInView } from 'framer-motion';
import { 
  Target, 
  Command, 
  Settings, 
  Zap, 
  RefreshCw, 
  Play, 
  Pause, 
  ChevronRight, 
  Infinity as InfinityIcon, 
  Brain, 
  CreditCard, 
  BarChart2 
} from 'lucide-react';
import iconDopeImg from '../../../../assets/Icondope.webp';
import { AgentNode } from './AgentNode';
import { PIPELINE_MILESTONES, PIPELINE_STEPS, CAPABILITY_PILLS } from '@/data/architecture';

const STEP_ICONS = [
  <Target key="target" className="w-4 h-4 text-[#141820]" />,
  <Command key="command" className="w-4 h-4 text-[#141820]" />,
  <Settings key="settings" className="w-4 h-4 text-[#141820]" />,
  <Zap key="zap" className="w-4 h-4 text-[#141820]" />,
];

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  infinity: <InfinityIcon className="w-full h-full stroke-[2.2]" />,
  brain: <Brain className="w-full h-full stroke-[2.2]" />,
  card: <CreditCard className="w-full h-full stroke-[2.2]" />,
  chart: <BarChart2 className="w-full h-full stroke-[2.2]" />,
};

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

  // Sync active step with scroll progress on mobile ONLY (< 768px)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      return;
    }
    if (!isManual) {
      const stepIndex = Math.min(3, Math.floor(latest * 4));
      setActiveStep(stepIndex);
    }
  });

  // Auto step progression if playing (Desktop or manual play)
  useEffect(() => {
    if (!isPlaying || !isInView || hoveredStep !== null) return;
    // On mobile devices, let scroll-driven pinning cleanly govern step progression
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPlaying, isInView, hoveredStep]);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = PIPELINE_STEPS.map((s, idx) => ({
    ...s,
    icon: STEP_ICONS[idx],
  }));

  return (
    <section ref={sectionRef} id="architecture" className="relative z-30 text-[#f3f2e6]">
      
      {/* =========================================================================
          1. MOBILE VIEW: SCROLL-DRIVEN PINNED ARCHITECTURE PIPELINE
          ========================================================================= */}
      {/* Mobile Section Header (Normal scroll flow before sticky container so it's fully visible and never cut off) */}
      <div className="md:hidden text-center px-4 pt-36 sm:pt-44 pb-6 space-y-2 max-w-sm mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[10px] font-mono tracking-widest text-[#37312c] uppercase font-bold shadow-md">
          <img src={iconDopeImg} alt="Dopamint" className="w-3 h-3 object-contain" />
          <span>ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl font-serif text-[#ffffff] tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          From intent to{' '}
          <span className="font-serif italic font-normal text-[#dfc28d]">
            execution.
          </span>
        </h2>
        <p className="text-xs text-[#f3f2e6]/90 font-serif italic max-w-xs mx-auto drop-shadow-sm">
          How Dopamint seamlessly translates your natural thoughts into verified autonomous action.
        </p>
      </div>

      <div ref={mobileContainerRef} className="md:hidden relative w-full h-[280vh]">
        {/* Pinned Screen Viewport: Pins cleanly below the fixed Navbar with generous bottom room */}
        <div className="sticky top-[58px] min-[390px]:top-[62px] h-[calc(100dvh-60px)] min-[390px]:h-[calc(100dvh-64px)] w-full flex flex-col justify-between pt-2 pb-2.5 sm:pb-4 px-3 min-[390px]:px-4 max-w-md min-[430px]:max-w-lg mx-auto overflow-hidden bg-transparent">
          
          {/* Continuous Loop Pill & Step Counter Header */}
          <div className="flex items-center justify-between gap-2 px-1 shrink-0 pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[#141820] shadow-md">
              <RefreshCw className="w-3 h-3 text-[#7a382e] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-sans font-bold uppercase tracking-[0.14em] text-[9.5px] min-[400px]:text-[10.5px] text-[#141820]">
                FEEDBACK LOOP
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#f3f2e6] px-2.5 py-1 rounded-full border border-[#c4a978]/60 font-mono text-[10px] min-[400px]:text-[11px] text-[#141820] font-bold tracking-wider shadow-md">
              <span>STEP 0{currentStep + 1} / 04</span>
            </div>
          </div>

          {/* Top 4 Step Pill Scrubber without bottom line - fully responsive for small to big mobile */}
          <div className="relative shrink-0 mt-1.5 min-[390px]:mt-2">
            <div className="grid grid-cols-4 gap-1.5 min-[390px]:gap-2 min-[430px]:gap-2.5 relative z-10">
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
                    aria-label={`Step ${idx + 1}: ${item.timelineLabel}`}
                    aria-current={isCur ? 'step' : undefined}
                    className={`py-1.5 min-[390px]:py-2 px-1 min-[390px]:px-1.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer min-h-[52px] min-[380px]:min-h-[56px] min-[420px]:min-h-[62px] ${
                      isCur
                        ? 'bg-[#ffffff] border-[#c4a978] text-[#25362a] shadow-[0_4px_16px_rgba(0,0,0,0.25)] ring-2 ring-[#c4a978]/60 scale-[1.02]'
                        : isDone
                        ? 'bg-[#f3f2e6] border-[#c4a978]/40 text-[#25362a]'
                        : 'bg-[#f3f2e6]/75 border-[#dcd6c8] text-[#7a746a]'
                    }`}
                  >
                    <div className="flex items-center gap-1 leading-none mb-0.5">
                      <span className="font-sans text-[10px] min-[380px]:text-[11px] min-[420px]:text-[12.5px] font-bold">0{idx + 1}</span>
                      {isCur && <span className="w-1.5 h-1.5 min-[400px]:w-2 min-[400px]:h-2 rounded-full bg-[#16a34a] animate-pulse" />}
                    </div>
                    <span className="text-[8px] min-[360px]:text-[8.5px] min-[390px]:text-[9.5px] min-[420px]:text-[10.5px] font-sans uppercase tracking-[0.05em] text-center leading-[1.15] font-semibold">
                      {idx === 2 ? (
                        <>
                          <span className="block">AGENT</span>
                          <span className="block">HARNESS</span>
                        </>
                      ) : (
                        item.timelineLabel
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Card Container with Smooth Slide Transitions */}
          <div className="relative flex-1 w-full my-auto flex flex-col justify-center py-0.5 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mob-card-${currentStep}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <AgentNode
                  title={steps[currentStep].title}
                  subtitle={steps[currentStep].subtitle}
                  tags={steps[currentStep].tags}
                  icon={steps[currentStep].icon}
                  isActive={true}
                  stepIndex={currentStep}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Pipeline State Console - Always fully visible at bottom without clipping */}
          <div 
            style={{ backgroundColor: '#dfc28d' }}
            className="p-2 min-[390px]:p-2.5 min-[430px]:p-3 rounded-xl border border-[#c4a978] shadow-[0_8px_24px_rgba(0,0,0,0.35)] text-left shrink-0 mb-1 min-[390px]:mb-1.5 relative z-20"
          >
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#1a140f]/15">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7a382e] shadow-[0_0_6px_rgba(122,56,46,0.6)]" />
                <span className="font-sans font-bold uppercase tracking-[0.14em] text-[#1a140f] text-[10px] min-[390px]:text-[10.5px] min-[420px]:text-[11.5px]">
                  PIPELINE STATE: <span className="font-mono font-bold text-[#7a382e] tracking-normal text-[9.5px] min-[390px]:text-[10px] min-[420px]:text-[11px]">[BUY NVDAc]</span>
                </span>
              </div>
              <div className="font-sans text-[9px] min-[390px]:text-[9.5px] min-[420px]:text-[10.5px] text-[#37312c]">
                Latency: <span className="text-[#15803d] font-bold font-mono">18ms</span> · <span className="font-mono font-bold text-[#1a140f]">Base</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-serif text-[10px] min-[390px]:text-[10.5px] min-[420px]:text-[11.5px] text-[#1a140f] leading-snug font-medium">
              {PIPELINE_MILESTONES.map((milestone, idx) => {
                const isCur = currentStep === idx;
                const isPassed = currentStep > idx;
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-[#7a382e]/60 font-mono text-[9px] select-none">→</span>}
                    <span
                      className={`transition-all duration-300 rounded px-1.5 py-0.5 ${
                        isCur
                          ? 'bg-[#7a382e] text-[#f3f2e6] font-bold shadow-xs scale-105'
                          : isPassed
                          ? 'text-[#1a140f] font-semibold'
                          : 'text-[#1a140f]/45 italic'
                      }`}
                    >
                      {milestone}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Capability Capsule Pills (Normal scroll flow after sticky animation) */}
      <div className="md:hidden px-3.5 min-[390px]:px-4 sm:px-6 pb-12 pt-6 max-w-lg min-[540px]:max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-2 min-[380px]:gap-2.5 min-[440px]:gap-3">
          {CAPABILITY_PILLS.map((pill) => (
            <div
              key={pill.id}
              className="rounded-2xl min-[420px]:rounded-full bg-[#fdfbf7]/95 hover:bg-[#ffffff] border border-[#c4a978]/60 hover:border-[#c4a978] py-2.5 min-[380px]:py-3 px-2.5 min-[380px]:px-3.5 min-[440px]:px-4 flex items-center gap-2 min-[380px]:gap-2.5 min-[440px]:gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              <div className="w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 min-[440px]:w-9 min-[440px]:h-9 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 p-1.5 min-[380px]:p-2 flex items-center justify-center text-[#7a382e] shrink-0 shadow-xs">
                {CAPABILITY_ICONS[pill.icon]}
              </div>
              <div className="flex flex-col text-left min-w-0 flex-1">
                <span className="font-bold text-[#141820] text-[11px] min-[375px]:text-[12px] min-[420px]:text-[13px] min-[480px]:text-sm leading-tight truncate">
                  {pill.title}
                </span>
                <span className="text-[#5a544b] font-serif italic text-[9px] min-[375px]:text-[10px] min-[420px]:text-[10.5px] min-[480px]:text-[11.5px] leading-tight mt-0.5 truncate">
                  {pill.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VIEW: HORIZONTAL 4-CARD PIPELINE & TIMELINE SCRUBBER
          ========================================================================= */}
      <div className="hidden md:block pt-36 sm:pt-44 lg:pt-52 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Section Header (Desktop) */}
        <div className="max-w-4xl mb-8 sm:mb-10 text-center mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[11px] font-mono tracking-widest text-[#37312c] uppercase font-bold shadow-md">
            <img src={iconDopeImg} alt="Dopamint" className="w-3.5 h-3.5 object-contain" />
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
          {/* Loop Status Pill & Controls */}
          <div className="mb-4 sm:mb-6 flex items-center justify-between gap-3 px-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f3f2e6] border border-[#c4a978]/60 text-[#141820] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <RefreshCw 
                className={`w-3.5 h-3.5 text-[#7a382e] ${isPlaying ? 'animate-spin' : ''}`} 
                style={{ animationDuration: '6s' }} 
              />
              <span className="font-sans font-bold uppercase text-xs tracking-[0.14em] text-[#141820]">
                CONTINUOUS LEARNING LOOP
              </span>
              <span className="text-[#c4a978]">·</span>
              <span className="font-serif italic text-xs sm:text-[13px] text-[#4e4e4e]">
                Every completed action refines long-term identity &amp; memory
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#f3f2e6] px-3.5 py-1.5 rounded-full border border-[#c4a978]/60 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-[#141820] hover:text-[#7a382e] transition-colors cursor-pointer pr-2.5 border-r border-[#dcd6c8]"
                title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
                aria-label={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#7a382e]" />
                    <span className="font-mono text-[10.5px] uppercase font-bold text-[#7a382e] tracking-wider">PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#16a34a] fill-[#16a34a]" />
                    <span className="font-mono text-[10.5px] uppercase font-bold text-[#16a34a] tracking-wider">PLAY</span>
                  </>
                )}
              </button>
              <span className="font-mono text-[10.5px] text-[#141820] font-bold tracking-wider">
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
                    title={item.title}
                    subtitle={item.subtitle}
                    tags={item.tags}
                    icon={item.icon}
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
                            ? 'bg-[#c4a978] border-[#c4a978] text-[#141820] shadow-[0_2px_10px_rgba(196,169,120,0.5)] scale-110 opacity-100' 
                            : 'bg-[#f3f2e6] border-[#c4a978]/60 text-[#37312c] scale-90 opacity-75'
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

          {/* ── Dynamic Pipeline State Console (Desktop) ── */}
          <div 
            style={{ backgroundColor: '#dfc28d' }}
            className="mt-4 p-3.5 sm:p-4 rounded-xl border border-[#c4a978] shadow-[0_12px_36px_rgba(0,0,0,0.35)] text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-[#1a140f]/15">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7a382e] shadow-[0_0_8px_rgba(122,56,46,0.6)]" />
                <span className="font-sans font-bold uppercase tracking-[0.16em] text-[#1a140f] text-[11.5px] sm:text-xs">
                  PIPELINE STATE: <span className="font-mono font-bold text-[#7a382e] tracking-normal text-xs">[BUY NVDAc]</span>
                </span>
              </div>
              <div className="font-sans text-[11.5px] sm:text-xs text-[#37312c]">
                Latency: <span className="text-[#15803d] font-bold font-mono">18ms</span> · <span className="font-sans font-medium">Network:</span> <span className="font-mono font-bold text-[#1a140f]">Base</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-serif text-xs sm:text-[13.5px] text-[#1a140f] leading-relaxed font-medium">
              {PIPELINE_MILESTONES.map((milestone, idx) => {
                const isCur = currentStep === idx;
                const isPassed = currentStep > idx;
                return (
                  <React.Fragment key={idx}>
                    <span className="text-[#7a382e]/60 font-mono text-xs select-none">→</span>
                    <span
                      className={`transition-all duration-300 rounded px-2 py-0.5 ${
                        isCur
                          ? 'bg-[#7a382e] text-[#f3f2e6] font-bold shadow-xs scale-105'
                          : isPassed
                          ? 'text-[#1a140f] font-semibold'
                          : 'text-[#1a140f]/45 italic'
                      }`}
                    >
                      {milestone}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
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
                      aria-label={`Step ${idx + 1}: ${item.timelineLabel}`}
                      aria-current={isCur ? 'step' : undefined}
                      className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden w-full"
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11.5px] sm:text-xs font-sans font-bold transition-all duration-300 shrink-0 ${
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
                        className={`text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.14em] mt-2.5 text-center transition-all duration-300 px-3 py-0.5 rounded-full ${
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
            {CAPABILITY_PILLS.map((pill) => (
              <div
                key={pill.id}
                className="rounded-full bg-[#fdfbf7]/95 hover:bg-[#ffffff] border border-[#c4a978]/60 hover:border-[#c4a978] py-2.5 px-4 sm:px-5 flex items-center gap-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(196,169,120,0.35)] hover:scale-105 transition-all duration-300"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4ece0] border border-[#c4a978]/40 p-2 sm:p-2.5 flex items-center justify-center text-[#7a382e] shrink-0 shadow-inner">
                  {CAPABILITY_ICONS[pill.icon]}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[#141820] text-sm sm:text-[14.5px] leading-tight">{pill.title}</span>
                  <span className="text-[#5a544b] font-serif italic text-[11px] sm:text-xs leading-tight mt-0.5">{pill.description}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
