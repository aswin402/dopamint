import React from 'react';
import { Search, CheckCircle2 } from 'lucide-react';

export const RenaissanceMessaging: React.FC = () => {
  const steps = [
    'Understand',
    'Plan',
    'Search',
    'Compare',
    'Ask',
    'Execute',
    'Verify',
    'Report'
  ];

  return (
    <section id="messaging" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER VIII // MESSAGING UBIQUITY</span>
        <span className="font-serif italic text-base text-black">VIII</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Talk to it like a person, <br />
          <span className="font-serif italic font-normal text-black">
            not an app.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          We run on messaging infra like Linq's iMessage API — so onboarding is just... texting. No app download, no forms, no BS.
        </p>
      </div>

      {/* 2-Column Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        
        {/* iOS iMessage Phone Container */}
        <div className="lg:col-span-6 rounded-[2.5rem] bg-black p-4 shadow-2xl">
          <div className="rounded-[2rem] bg-white overflow-hidden border border-neutral-200 flex flex-col justify-between min-h-[460px]">
            
            {/* Header */}
            <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-[10px]">
                  D
                </div>
                <div>
                  <div className="font-bold text-black">DopaMint</div>
                  <div className="text-[10px] text-neutral-400 font-mono">iMessage</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-black font-bold border border-neutral-200">
                Linq Verified
              </span>
            </div>

            {/* Chat Thread */}
            <div className="p-4 space-y-3 text-xs font-sans">
              <div className="flex justify-end">
                <div className="bg-black text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%]">
                  Can you book dinner for six this Friday?
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-neutral-100 text-black p-3 rounded-2xl rounded-tl-xs max-w-[85%]">
                  On it. Any preference?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-black text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%]">
                  Somewhere Italian, under $300.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 font-mono text-[11px] space-y-1 text-black">
                <div className="flex items-center gap-1.5 text-black font-bold">
                  <Search className="w-3 h-3 text-black" />
                  <span>Searching… 3 options found</span>
                </div>
                <div className="text-black font-bold">✓ Budget verified ($240 estimate)</div>
                <div className="text-black font-bold pt-0.5">Friday 8:00 PM · 6 guests · Trattoria SF</div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-300 text-black flex items-center justify-between font-mono text-xs">
                <div>
                  <div className="font-bold text-black">Booking confirmed ✓</div>
                  <div className="text-[10px] text-neutral-600">Reservation #8F72A</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-black" />
              </div>
            </div>

            <div className="p-3 bg-neutral-50 border-t border-neutral-200 text-center text-[10px] text-neutral-400 font-mono">
              Direct text interface · Zero app install required
            </div>

          </div>
        </div>

        {/* Narrative & Pipeline */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
              BEHIND THE INTERFACE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black mt-1">
              What actually happens behind one message.
            </h3>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
              It's not a scripted chatbot flow. Each reply is the visible edge of a task the agent is actually running in a secure, isolated runtime.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
            {steps.map((step, idx) => (
              <div key={idx} className="parchment-card p-3 rounded-xl text-center">
                <div className="text-[10px] text-black font-bold">0{idx + 1}</div>
                <div className="font-bold text-black mt-0.5">{step}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
