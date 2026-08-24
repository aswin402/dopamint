import React, { useState, useRef, useEffect } from 'react';
import roadmapBgVid from '../../assets/Roadmap_BG.webm';
import roadmapStaticImg from '../../assets/Roadmap_Static.png';
import { StaggeredGrid } from '../ui/staggered-grid';

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
          PART 1: DOPAMINT ROADMAP (VIDEO -> STATIC SCROLL IMAGE TRANSITION)
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
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
            />
          )}

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
