import React from 'react';
import { Type1Button } from '../ui/Type1Button';

export const RenaissanceClosingCta: React.FC = () => {
  return (
    <section id="cta" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none">
      
      {/* Closing Card Container */}
      <div className="rounded-[2.5rem] bg-black text-white p-8 sm:p-16 text-center shadow-2xl space-y-8">
        
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-6xl font-black text-display tracking-tight text-white leading-tight">
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
            className="!w-56 !h-12"
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

        {/* Footer Navigation & Copyright */}
        <div className="pt-12 mt-12 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-white text-black font-bold flex items-center justify-center text-[10px]">
              D
            </div>
            <span className="text-white font-bold font-sans text-sm">DopaMint</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-300">
            <a href="#agents" className="hover:text-white transition-colors">Agents</a>
            <span>·</span>
            <a href="#evidence" className="hover:text-white transition-colors">Evidence</a>
            <span>·</span>
            <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
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

    </section>
  );
};
