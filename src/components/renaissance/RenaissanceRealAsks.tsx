import React, { useState } from 'react';
import { REAL_ASKS } from '../../data/dopamint';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { TestimonialsColumn } from '../ui/TestimonialsColumn';

export const RenaissanceRealAsks: React.FC = () => {
  const [selectedAsk, setSelectedAsk] = useState<string>(REAL_ASKS[3]);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70 relative z-20 bg-[#f7f3ef]">
      
      {/* Kicker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6 pb-2 border-b border-neutral-300">
        <span>REAL ASKS, REAL PEOPLE</span>
        <span className="font-serif italic text-base text-black">Proof of Agency</span>
      </div>

      {/* Title */}
      <div className="max-w-3xl mb-10 text-left">
        <h2 className="text-3xl sm:text-5xl font-black text-display text-black tracking-tight leading-[0.98]">
          This is what people <br />
          <span className="font-serif italic font-normal text-black">
            actually ask for.
          </span>
        </h2>
      </div>

      {/* Interactive Asks Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {REAL_ASKS.map((ask, idx) => {
          const isSelected = selectedAsk === ask;
          return (
            <button
              key={idx}
              onClick={() => setSelectedAsk(ask)}
              className={`p-4 rounded-2xl text-left text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'bg-black text-white shadow-lg ring-2 ring-black'
                  : 'parchment-card text-neutral-800 hover:bg-white'
              }`}
            >
              <span>“{ask}”</span>
              <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
            </button>
          );
        })}
      </div>

      {/* Featured Callout */}
      <div className="p-6 rounded-3xl bg-black text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Active Ask</div>
          <div className="text-lg sm:text-2xl font-black font-sans text-white">
            “{selectedAsk}”
          </div>
        </div>
        <div className="text-xs font-mono text-neutral-300 bg-white/10 px-4 py-2 rounded-xl border border-white/20">
          Eve + Iris + Ada standby ✓
        </div>
      </div>

      {/* Real Verified Agent Testimonials Columns */}
      <div className="mt-16 pt-12 border-t border-neutral-300">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono font-bold uppercase text-neutral-500 tracking-widest">
            LIVE EXECUTION LOGS & REVIEWS
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-black">
            What builders & teams say.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mask-radial overflow-hidden">
          <TestimonialsColumn
            testimonials={[
              {
                text: "Ada handled a 6-person dinner booking in Austin without exceeding our $250 team limit. Perfect table at Kiln with receipt signed in 4 seconds.",
                image: "/avatars/aiko.jpg",
                name: "Elena Rostova",
                role: "Founding Engineer @ Synapse",
              },
              {
                text: "Having Iris pay per-call x402 endpoints autonomously removed our checkout bottlenecks completely. Clean onchain receipts every time.",
                image: "/avatars/aria.jpg",
                name: "Marcus Vance",
                role: "Infrastructure Lead @ Base Labs",
              },
            ]}
            duration={14}
          />

          <TestimonialsColumn
            testimonials={[
              {
                text: "Sol caught the 3,398 ETH dip while I was completely asleep. Stayed inside my $250 cap, swapped on Base, and logged the receipt.",
                image: "/avatars/sarang.jpg",
                name: "David Kim",
                role: "DeFi Researcher & Angel",
              },
              {
                text: "Kai spotted 4 forgotten SaaS subscriptions quietly draining $680/mo and sent me a 1-tap cancellation bundle. Paid for itself on day 1.",
                image: "/avatars/cody.jpg",
                name: "Sophia Martinez",
                role: "COO @ HyperScale",
              },
            ]}
            duration={11}
          />

          <TestimonialsColumn
            testimonials={[
              {
                text: "Nora drafts all my vendor replies and triages 150+ daily emails. The sandbox guarantee means she never accidentally confirms a wire.",
                image: "/avatars/nora.jpg",
                name: "Julian Sterling",
                role: "Managing Director @ Apex Capital",
              },
              {
                text: "Leo read 20 whitepapers overnight and gave me a 3-bullet comparison for our architecture sprint. Incredible depth.",
                image: "/avatars/vale.jpg",
                name: "Amara Chen",
                role: "Head of AI @ Protocol Labs",
              },
            ]}
            duration={16}
          />
        </div>
      </div>

    </section>
  );
};
