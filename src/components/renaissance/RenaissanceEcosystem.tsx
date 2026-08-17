import React from 'react';
import { ECOSYSTEM_ROW_1, ECOSYSTEM_ROW_2 } from '../../data/dopamint';

export const RenaissanceEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70 overflow-hidden">
      
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

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden py-2 mb-4 mask-radial">
        <div className="flex gap-3 animate-marquee whitespace-nowrap">
          {[...ECOSYSTEM_ROW_1, ...ECOSYSTEM_ROW_1].map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-3.5 rounded-2xl bg-white border border-neutral-200 shadow-xs font-mono text-xs font-bold text-black flex items-center gap-2 hover:bg-neutral-50 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-black" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse direction / offset) */}
      <div className="relative w-full overflow-hidden py-2 mask-radial">
        <div className="flex gap-3 animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {[...ECOSYSTEM_ROW_2, ...ECOSYSTEM_ROW_2].map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xs font-mono text-xs font-bold text-white flex items-center gap-2 hover:bg-neutral-800 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
