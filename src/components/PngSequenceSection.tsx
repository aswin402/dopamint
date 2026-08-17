import React from 'react';
import { PngSequencePlayer } from './ui/PngSequencePlayer';
import { Sparkles, Cpu, Eye, Layers, ShieldCheck, Zap } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const PngSequenceSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>KINETIC FRAME-BY-FRAME SCRUBBER</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            60-FRAME KINETIC <br />
            <span className="text-emerald-600">PNG SEQUENCE.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Interact directly with the agent's spatial presence. Scrub, drag, or auto-play through 60 high-resolution temporal frames.
          </p>
        </div>

        {/* The PNG Sequence Interactive Console */}
        <div className="max-w-5xl mx-auto mb-16">
          <PngSequencePlayer totalFrames={60} framePrefix="/sequence/frame_" />
        </div>

        {/* 3 Interactive Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto font-sans">
          
          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-mono font-bold text-xs uppercase">
              <Zap className="w-4 h-4" />
              <span>Zero Jitter Engine</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950">Preloaded Frame Buffer</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              All 60 frames are loaded asynchronously into memory for zero-lag, instant 60 FPS scrub performance.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-mono font-bold text-xs uppercase">
              <Layers className="w-4 h-4" />
              <span>Biometric Mesh</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950">Holographic Wireframe</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Toggle the dynamic 24px spatial mesh overlay to inspect neural blendshapes and facial tracking vectors.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-mono font-bold text-xs uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Attributable Pixels</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950">Cryptographic Signing</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every rendered frame sequence is tied to the agent's verified cryptographic identity key.
            </p>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
};
