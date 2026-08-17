import React from 'react';
import { MessageSquare, CheckCircle2, Search, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const MessagingInterface: React.FC = () => {
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
    <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WHERE PEOPLE ALREADY ARE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Talk to it like a person, <br />
            <span className="text-blue-600">not an app.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            We run on messaging infra like Linq's iMessage API — so onboarding is just... texting. No app download, no forms, no BS.
          </p>
        </div>

        {/* 2-Column Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center mb-16">
          
          {/* iOS iMessage Phone UI (6 cols) */}
          <div className="lg:col-span-6 rounded-[2.5rem] bg-slate-950 p-4 shadow-2xl border-4 border-slate-800">
            <div className="rounded-[2rem] bg-white overflow-hidden border border-slate-100 flex flex-col justify-between min-h-[480px]">
              
              {/* iMessage Header */}
              <div className="p-4 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-950 text-white font-mono font-bold flex items-center justify-center text-[10px]">
                    D
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">DopaMint</div>
                    <div className="text-[10px] text-slate-400 font-mono">iMessage</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Verified Linq Node
                </span>
              </div>

              {/* Chat Thread */}
              <div className="p-4 space-y-3 text-xs font-sans">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%]">
                    Can you book dinner for six this Friday?
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-900 p-3 rounded-2xl rounded-tl-xs max-w-[85%]">
                    On it. Any preference?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%]">
                    Somewhere Italian, under $300.
                  </div>
                </div>

                {/* Agent Execution Box */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1 text-slate-600">
                  <div className="flex items-center gap-1.5 text-blue-600 font-bold">
                    <Search className="w-3 h-3" />
                    <span>Searching… 3 options found</span>
                  </div>
                  <div className="text-emerald-700 font-bold">✓ Budget verified ($240 estimated)</div>
                  <div className="text-slate-900 font-bold pt-1">Friday 8:00 PM · 6 guests · Trattoria SF</div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center justify-between font-mono text-xs">
                  <div>
                    <div className="font-bold">Booking confirmed ✓</div>
                    <div className="text-[10px] text-emerald-700">Reservation #8F72A</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-[10px] text-slate-400 font-mono">
                No app installation required · Standard SMS / RCS / iMessage
              </div>

            </div>
          </div>

          {/* Right Narrative & Behind-the-Scenes Pipeline (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                BEHIND THE INTERFACE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                What actually happens behind one message.
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                It's not a scripted chatbot flow. Each reply is the visible edge of a task the agent is actually running in a secure, isolated container.
              </p>
            </div>

            {/* Stepper Pipeline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              {steps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <div className="text-[10px] text-emerald-600 font-bold">0{idx + 1}</div>
                  <div className="font-bold text-slate-900 mt-0.5">{step}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-600 space-y-1">
              <span className="font-bold text-slate-900">Linq Enterprise Bridge:</span>
              <p className="text-slate-500">
                End-to-end encrypted protocol translation connecting user iMessage threads directly to DopaMint's deterministic policy runtime.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
