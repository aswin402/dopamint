import React, { useRef, useEffect } from 'react';
import companionVideoWebm from '../../../assets/Companion_Video.webm';
import companionVideoMp4 from '../../../assets/Companion_Video.mp4';
import companionPosterWebp from '../../../assets/Companion_Video_poster.webp';

export const Authority: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce muted & playsinline directly on DOM to comply with iOS/Mac Safari autoplay policy
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playSafe = () => {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    // 1. Initial play attempt
    playSafe();

    // 2. IntersectionObserver: guarantees play trigger when user scrolls into section
    // (Crucial for iOS Safari & macOS Safari which pause off-screen videos on page load)
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playSafe();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
    }

    // 3. User interaction fallback: iOS Safari unblocks video on touch or scroll
    const handleInteraction = () => {
      playSafe();
    };

    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('pointerdown', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleInteraction, { passive: true });

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        playSafe();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer?.disconnect();
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('pointerdown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <section id="control" className="relative w-full bg-[#ffffff] pt-8 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        {/* =========================================================================
            1. LEFT — COMPANION VIDEO (BIGGER & SHIFTED LEFT ON MOBILE)
            ========================================================================= */}
        <div className="authority-video-col flex items-center justify-center lg:justify-start w-full lg:col-span-7 -ml-0 lg:-ml-4 xl:-ml-8 2xl:-ml-12 overflow-visible py-8 sm:py-0 mb-8 sm:mb-0">
          <video
            ref={videoRef}
            poster={companionPosterWebp}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            className="authority-video-el pointer-events-none w-full max-w-none sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto object-contain max-h-[840px] sm:max-h-[750px] lg:max-h-[860px] scale-[2.15] -translate-x-[135px] sm:scale-105 sm:translate-x-0 lg:translate-x-0 xl:-translate-x-6 2xl:-translate-x-12 origin-center lg:origin-left"
          >
            <source src={companionVideoMp4} type="video/mp4" />
            <source src={companionVideoWebm} type="video/webm" />
          </video>
        </div>

        {/* =========================================================================
            2. RIGHT — EDITORIAL HEADLINE + CTA (CENTER ALIGNED ON MOBILE)
            ========================================================================= */}
        <div className="authority-text-col flex flex-col items-center sm:items-start text-center sm:text-left gap-5 sm:gap-7 lg:col-span-5 -ml-0 lg:-ml-4 xl:-ml-6 2xl:-ml-7 pt-10 min-[390px]:pt-14 sm:pt-0">
          
          {/* Category Tag */}
          <div className="mt-2 min-[390px]:mt-3 sm:mt-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-[#3d4a3a]">
            <span className="w-2 h-2 rounded-full bg-[#3d4a3a]" />
            Virtual Agents
          </div>

          {/* Editorial Headline */}
          <h2 className="font-serif text-4xl min-[360px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] text-[#3d4a3a] tracking-tight leading-[1.02] text-center sm:text-left">
            The <span className="italic font-bold">Future</span>
            <br />
            of <span className="italic font-bold">Agents</span>
          </h2>

          {/* Subtitle & Key Points */}
          <div className="space-y-3.5 max-w-lg flex flex-col items-center sm:items-start">
            <p className="font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#4b5546] leading-snug">
              Dopamint powers a privacy-enabled infra layer for agents and AI companions built for live voice, persistent identity, long-term memory, and creator-driven experiences.
            </p>

            {/* Feature Points */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#3d4a3a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55604e]" />
                Privacy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#3d4a3a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55604e]" />
                Memory Portability
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#3d4a3a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55604e]" />
                Creator Economy
              </span>
            </div>
          </div>

          {/* Bottom Bar: Metadata */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 pt-3 sm:pt-6 w-full">
            <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] font-semibold text-[#55604e] text-center sm:text-left">
              Virtual Agents · In the Frame
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
