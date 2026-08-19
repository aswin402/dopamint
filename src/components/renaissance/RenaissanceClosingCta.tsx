import React from 'react';
import footerImg from '../../assets/footer.png';
import { Type1Button } from '../ui/Type1Button';
import { BurnTransition } from '../ui/BurnTransition';

export const RenaissanceClosingCta: React.FC = () => {
  return (
    <section id="cta" className="w-full bg-[#D9D6CA] pt-24 pb-16 sm:pb-24 select-none relative overflow-hidden">
      
      {/* =========================================================================
          1. TOP BURN TRANSITION (STARTING EDGE FROM DARK SECTION 9)
          ========================================================================= */}
      <div className="absolute top-0 inset-x-0 h-64 sm:h-80 md:h-96 pointer-events-none z-30 opacity-95">
        <BurnTransition
          color="#D9D6CA"
          transitionColor="#FFFFFF"
          noiseScale={2.5}
          noiseIntensity={0.52}
          scrollSensitivity={0.015}
          baseAnimationSpeed={0.08}
          edgeSoftness={0.38}
          bloomIntensity={0.75}
          bloomRadius={0.35}
          parallaxEnabled={true}
          movement={{ horizontal: 'center', vertical: 0.5 }}
          className="h-full w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Closing Card Container with Character on Left */}
        <div className="relative rounded-[2.5rem] bg-[#0c1017] text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-neutral-800">
          
          {/* =========================================================================
              1. FOOTER CHARACTER ARTWORK (Standing on the Left Side)
              ========================================================================= */}
          <div className="absolute left-2 sm:left-6 lg:left-12 bottom-0 h-[340px] sm:h-[440px] lg:h-[500px] pointer-events-none z-10 opacity-35 sm:opacity-85 lg:opacity-100 flex items-end">
            <img
              src={footerImg}
              alt="Renaissance Scholar"
              className="h-full w-auto object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Ambient Gradient on Left for Smooth Blend */}
          <div className="absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-[#0c1017]/80 via-transparent to-transparent pointer-events-none z-10" />

          {/* =========================================================================
              2. CTA CONTENT AREA
              ========================================================================= */}
          <div className="relative z-20 max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 lg:pl-28">
            
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-display tracking-tight text-white leading-[1.05]">
                Stop prompting. <br />
                <span className="font-serif italic font-normal text-white">
                  Just ask for what you need.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto font-normal leading-relaxed">
                Your agents are already here. They just needed somewhere trustworthy to live.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Type1Button
                href="#hero"
                variant="light"
                className="!w-56 !h-12 shadow-lg"
              >
                Get early access
              </Type1Button>

              <Type1Button
                href="#control"
                variant="light"
                className="!w-56 !h-12 !border-white/40 opacity-90 hover:opacity-100"
              >
                Poke around first
              </Type1Button>
            </div>

          </div>

          {/* =========================================================================
              3. FOOTER NAVIGATION & COPYRIGHT
              ========================================================================= */}
          <div className="relative z-20 pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white text-black font-bold flex items-center justify-center text-[10px]">
                D
              </div>
              <span className="text-white font-bold font-sans text-sm">DopaMint</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-300">
              <a href="#agents" className="hover:text-white transition-colors">Agents</a>
              <span>·</span>
              <a href="#control" className="hover:text-white transition-colors">Authority</a>
              <span>·</span>
              <a href="#evidence" className="hover:text-white transition-colors">Evidence</a>
              <span>·</span>
              <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
              <span>·</span>
              <a href="#docs" className="hover:text-white transition-colors">For developers</a>
            </div>

            <div>
              © 2026 DopaMint · San Francisco
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
