import React, { useState, useRef, useEffect } from 'react';
import roadmapBgVid from '../../assets/Roadmap_BG.webm';
import roadmapStaticImg from '../../assets/Roadmap_Static.png';
import { StaggeredGrid } from '../ui/staggered-grid';

const ROADMAP_PHASES = [
  {
    title: 'AGENT FOUNDATION',
    points: [
      'AI Agent for Trading & x402 Payments',
      'Agent Harness & Agent Loop',
      'Specialized Trading, Payment & Lifestyle Agents',
      'Human-like Conversational AI Companion',
      'Onchain Identity & Portable Memory',
    ],
    tagline: 'From question to trusted financial intelligence.',
  },
  {
    title: 'TRUSTED AUTONOMY',
    points: [
      'Autonomous Task Execution',
      'Permission, Policy Controls & Guardrails',
      'Verifiable Execution & Receipts',
      'Human-like Executable AI Companion',
      'TEE-Powered AI Privacy & Security',
    ],
    tagline: 'From generic intelligence to a financial AI that understands you.',
  },
  {
    title: 'AGENT ECONOMY',
    points: [
      'Natural-Language Strategy Builder',
      'AI Backtesting Engine',
      'No-Code Workflow Builder',
      'AI-Assisted Execution',
      'Revenue Sharing & Incentive Models',
    ],
    tagline: 'From intelligence to execution.',
  },
  {
    title: 'FINANCIAL AGENT ECOSYSTEM',
    points: [
      'Multi-Agent Financial Team',
      'Advanced Autonomous Strategies',
      'Agent & Strategy Marketplace',
      'Developer Platform & APIs',
      'Institutional-Grade Platform',
    ],
    tagline: 'From a financial assistant to an AI-native financial operating system.',
  },
];

export const RenaissanceRoadmapSection: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            video.currentTime = 0;
            video.play().catch(() => {
              // Muted autoplay allowed
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <section id="roadmap" className="relative w-full bg-[#f3f2e6] text-[#141820] overflow-hidden select-none">
      
      {/* =========================================================================
          PART 1: DOPAMINT ROADMAP (VIDEO -> STATIC SCROLL IMAGE + OVERLAY TEXT)
          ========================================================================= */}
      <div className="max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-10 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16">
        
        {/* Title: Dopamint Roadmap. */}
        <div className="text-center w-full max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif font-normal">
            Dopamint <span className="font-serif italic font-bold text-[#253b2b]">Roadmap.</span>
          </h2>
        </div>

        {/* Scroll Media Container (Video & Static Image placed in the exact same spot) */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-[1720px] mx-auto aspect-[16/9] min-h-[460px] sm:min-h-[620px] md:min-h-[760px] lg:min-h-[880px] xl:min-h-[980px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center"
        >
          {/* Static Image (Sitting seamlessly as base layer) */}
          <img
            src={roadmapStaticImg}
            alt="Dopamint Roadmap Scroll"
            className="w-full h-full object-contain select-none block"
          />

          {/* Animated Scroll Video (Plays on scroll view, unmounts instantly on end with zero delay/fade) */}
          {!videoEnded && (
            <video
              ref={videoRef}
              src={roadmapBgVid}
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none z-20"
            />
          )}

          {/* Overlay Content on top of the 4 columns (Revealed smoothly when video ends) */}
          <div
            className={`absolute inset-0 z-10 transition-opacity duration-500 pointer-events-auto ${
              videoEnded ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* 4 Architectural Columns Container */}
            <div className="absolute left-[10.7%] right-[10.7%] inset-y-0 grid grid-cols-4 gap-[2.9%]">
              {ROADMAP_PHASES.map((phase, idx) => (
                <div key={idx} className="relative h-full w-full select-text">
                  
                  {/* 1. TOP ARCH: Phase Heading / Title (Moved down below top arch, centered before diamond divider) */}
                  <div className="absolute top-[33.5%] h-[8.0%] inset-x-0 flex items-center justify-center text-center px-1 sm:px-2">
                    <h3 className="font-serif font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] text-[#1a231b] tracking-tight leading-tight uppercase">
                      {phase.title}
                    </h3>
                  </div>

                  {/* 2. MIDDLE PARCHMENT: 5 Bullet Points (Tightened gaps, seated comfortably above pedestal) */}
                  <div className="absolute top-[45.0%] h-[32.0%] inset-x-0 flex flex-col justify-start space-y-[2.5%] sm:space-y-[3%] md:space-y-[3.5%] py-1 px-1.5 sm:px-3 md:px-4">
                    {phase.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1 sm:gap-1.5 md:gap-2">
                        <span className="text-[9px] sm:text-[11px] md:text-[13px] lg:text-[14.5px] xl:text-[16px] font-serif font-bold text-[#1a231b] shrink-0 mt-[0.5px]">
                          {pIdx + 1}.
                        </span>
                        <p className="text-[8.5px] sm:text-[10.5px] md:text-[12px] lg:text-[13.5px] xl:text-[15px] text-[#1e2720] font-medium leading-snug tracking-tight">
                          {pt}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 3. BOTTOM PEDESTAL: Summary Tagline Box (Positioned inside pedestal with increased font weight) */}
                  <div className="absolute top-[77.2%] h-[8.5%] inset-x-0 flex items-center justify-center text-center px-2 sm:px-3.5">
                    <p className="font-serif italic text-[9.5px] sm:text-[11.5px] md:text-[13.5px] lg:text-[15.5px] xl:text-[17px] font-semibold text-[#141f16] leading-snug tracking-tight">
                      {phase.tagline}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          PART 2: LOGO / STAGGERED GRID ANIMATION COMPONENT
          ========================================================================= */}
      <div className="w-full relative z-10">
        <StaggeredGrid 
          centerText="DOPAMINT"
          className="bg-[#171411] border-t border-[#c4a978]/30"
          showFooter={false}
        />
      </div>

    </section>
  );
};
