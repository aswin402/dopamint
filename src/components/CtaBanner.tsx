import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { BorderBeam } from './ui/BorderBeam';

export const CtaBanner: React.FC = () => {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border-2 border-slate-800 text-center max-w-5xl mx-auto space-y-8">
          
          <BorderBeam size={320} duration={14} colorFrom="#10B981" colorTo="#06B6D4" />

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JUST ASK</span>
            </div>

            {/* Big Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-white tracking-tight leading-[0.95]">
              The next interface <br />
              <span className="text-emerald-400">isn't an app.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
              Just ask for what you need. One of our agents handles it — inside whatever limits you set. No cap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#agents">
                <MagneticButton className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm sm:text-base font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer">
                  <span>Get DopaMint</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </a>

              <a href="#trust">
                <MagneticButton className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>See how it works →</span>
                </MagneticButton>
              </a>
            </div>

            {/* Micro Details */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span>Policy-scoped execution</span>
              <span>·</span>
              <span>Signed receipts</span>
              <span>·</span>
              <span>Built in San Francisco</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
