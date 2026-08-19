import React from 'react';
import { ECOSYSTEM_ROW_1, ECOSYSTEM_ROW_2 } from '../../data/dopamint';
import { CentralHubConnectedDiagram } from '../ui/CentralHubConnectedDiagram';
import { BurnTransition } from '../ui/BurnTransition';

export const RenaissanceEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="w-full bg-[#D9D6CA] text-[#141820] py-24 select-none relative overflow-hidden">
      
      {/* =========================================================================
          1. TOP BURN TRANSITION (STARTING EDGE)
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

      {/* Top Container: Chapter Header & Connected Hub Diagram */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        {/* Chapter Marker */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
          <span>INTEROPERABILITY & APIS</span>
          <span className="font-serif italic text-base text-black">Ecosystem</span>
        </div>

        {/* Editorial Title */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
            Any app. <br />
            <span className="font-serif italic font-normal text-black">
              Any exchange. One agent.
            </span>
          </h2>
        </div>

        {/* Central Hub Connected Node Network */}
        <div className="mb-14">
          <CentralHubConnectedDiagram />
        </div>
      </div>

      {/* FULL-WIDTH EDGE-TO-EDGE MARQUEE TICKERS */}
      <div className="w-full space-y-4 pt-4 pb-8 overflow-hidden relative z-20">
        
        {/* Marquee Row 1 */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform">
            {[...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1].map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-3.5 rounded-2xl bg-white border border-neutral-200 shadow-xs font-mono text-xs font-bold text-black flex items-center gap-2.5 hover:bg-neutral-50 transition-colors shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Reverse direction) */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform" style={{ animationDirection: 'reverse' }}>
            {[...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2].map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-3.5 rounded-2xl bg-[#141820] border border-neutral-800 shadow-xs font-mono text-xs font-bold text-white flex items-center gap-2.5 hover:bg-neutral-800 transition-colors shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================================
          2. BOTTOM BURN TRANSITION (ENDING EDGE)
          ========================================================================= */}
      <div className="absolute bottom-0 inset-x-0 h-64 sm:h-80 md:h-96 pointer-events-none z-30 opacity-95">
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
          inverted={true}
          movement={{ horizontal: 'center', vertical: 0.5 }}
          className="h-full w-full"
        />
      </div>

    </section>
  );
};
