import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { IsometricTowerLoader } from '../ui/IsometricTowerLoader';

interface ReceiptStep {
  step: string;
  detail: string;
  hash: string;
}

const INITIAL_STEPS: ReceiptStep[] = [
  { step: '01. Intent Parsed', detail: 'Dinner for 6 · Kiln · Fri 7:30pm', hash: '0x8f72…a19c' },
  { step: '02. Policy Check', detail: 'Deposit $40 <= $100 limit · Approved', hash: '0xb231…c409' },
  { step: '03. Booking Executed', detail: 'Reservation #KILN-8842 confirmed', hash: '0x994a…ee10' },
  { step: '04. Log Signed', detail: 'Receipt signed by agent enclave key', hash: '0xfa88…7712' },
];

export const RenaissanceEvidence: React.FC = () => {
  const [tamperedStep, setTamperedStep] = useState<number | null>(null);

  const toggleTamper = (idx: number) => {
    setTamperedStep(tamperedStep === idx ? null : idx);
  };

  return (
    <section id="evidence" className="pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CRYPTOGRAPHIC EVIDENCE LOG</span>
        <span className="font-serif italic text-base text-black">Evidence</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Everything has <br />
          <span className="font-serif italic font-normal text-black">
            receipts.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Watch it book a table, then look at exactly what it did. Change one thing in the log and the whole chain screams.
        </p>
      </div>

      {/* 2-Column Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Left: Dope iMessage Phone */}
        <div className="lg:col-span-6 rounded-[2.5rem] bg-black p-4 shadow-2xl">
          <div className="rounded-[2rem] bg-white overflow-hidden border border-neutral-200 flex flex-col justify-between min-h-[460px]">
            
            {/* Header */}
            <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-xs">
                  D
                </div>
                <div>
                  <div className="font-bold text-black text-sm">Dope</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Today 6:04 PM</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>iMessage · Active</span>
              </span>
            </div>

            {/* Chat Messages */}
            <div className="p-5 space-y-3.5 text-xs font-sans">
              <div className="flex justify-end">
                <div className="bg-black text-white p-3.5 rounded-2xl rounded-tr-xs max-w-[85%] font-medium">
                  Can you book dinner for six this Friday?
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-neutral-100 text-black p-3.5 rounded-2xl rounded-tl-xs max-w-[85%]">
                  Yep. 7:30 at Kiln? You liked it last time.
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-tr-xs text-xs font-medium">
                  perfect
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/10 border border-emerald-500/30 text-black font-mono text-[11px] space-y-1.5">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Booked — table for 6, Fri 7:30pm. Deposit $40, under your cap.</span>
                </div>
                <div className="text-emerald-700 font-bold pl-5.5">Receipt signed and added to your log ✓</div>
              </div>

              <div className="text-right text-[10px] font-mono text-neutral-400">
                Delivered
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-neutral-50 border-t border-neutral-200 text-center text-[10px] text-neutral-400 font-mono">
              + iMessage
            </div>

          </div>
        </div>

        {/* Right: Receipt for that booking & Merkle Chain */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-white font-bold uppercase">Receipt for that booking</span>
              <span className="text-neutral-400 text-[10px]">Interactive Log (Click to test tamper)</span>
            </div>

            <p className="text-xs text-neutral-400 font-mono my-3">
              Tap any step to simulate modifying the past log:
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              {INITIAL_STEPS.map((st, idx) => {
                const isBroken = tamperedStep !== null && idx >= tamperedStep;
                return (
                  <div
                    key={idx}
                    onClick={() => toggleTamper(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isBroken
                        ? 'bg-red-950/40 border-red-500/60 text-red-200 shadow-md shadow-red-950/30'
                        : 'bg-neutral-900 hover:bg-neutral-850 border-neutral-800 text-white'
                    }`}
                  >
                    <div>
                      <div className={`font-bold text-xs flex items-center gap-1.5 ${isBroken ? 'text-red-300' : 'text-white'}`}>
                        {isBroken && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />}
                        <span>{st.step}</span>
                      </div>
                      <div className={`text-[11px] ${isBroken ? 'text-red-400/90' : 'text-neutral-300'}`}>{st.detail}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold text-xs ${isBroken ? 'text-red-400 animate-pulse' : 'text-neutral-200'}`}>
                        {isBroken ? 'HASH MISMATCH ✕' : st.hash}
                      </div>
                      <div className={`text-[9px] font-bold ${isBroken ? 'text-red-400' : 'text-emerald-400'}`}>
                        {isBroken ? 'CHAIN BROKEN' : 'VALIDATED ✓'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verdict Status */}
          <div className={`p-4 rounded-2xl border font-mono text-xs flex items-center gap-2 transition-all ${
            tamperedStep === null
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
              : 'bg-red-950/30 border-red-500/40 text-red-300'
          }`}>
            {tamperedStep === null ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold">Chain checks out. Every step matches cryptographic signature.</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 animate-bounce" />
                <span className="font-bold">Tamper detected at Step {tamperedStep + 1}! Downstream cryptographic hashes invalidated.</span>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Cryptographic Block Mining / Merkle Tower Banner */}
      <div className="p-8 rounded-3xl parchment-card border border-neutral-300 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl text-left">
          <div className="text-[10px] font-mono uppercase font-bold text-emerald-700 tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>FORWARD-SECURE RECEIPT MINING</span>
          </div>
          <h3 className="text-2xl font-black text-black">
            Deterministic cryptographic proofs
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Every step hashes into the next block. Modifying past transactions invalidates the enclave root signature immediately.
          </p>
        </div>

        <div className="shrink-0 flex items-center justify-center p-4">
          <IsometricTowerLoader />
        </div>
      </div>

    </section>
  );
};
