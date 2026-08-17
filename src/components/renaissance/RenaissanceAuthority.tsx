import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { MacCodeCard } from '../ui/MacCodeCard';
import { IsometricCubeLoader } from '../ui/IsometricCubeLoader';

export const RenaissanceAuthority: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'blocked' | 'approved'>('blocked');

  return (
    <section id="control" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>AUTHORITY & CONTROL LAYER</span>
        <span className="font-serif italic text-base text-black">Authority</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Your agent can run in a sandbox — <br />
          <span className="font-serif italic font-normal text-black">
            so can you actually trust it?
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Here's what happens the second it tries to do something you didn't approve.
        </p>
      </div>

      {/* Interactive Control Layer Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
        
        {/* Controls Card */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">Try it</span>
              <span className="text-black font-bold">payments.send</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
              It cycles through both on its own — or pick one and watch the call get made.
            </p>

            {/* Selector Buttons */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCase('blocked')}
                  className={`px-4 py-2.5 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                    selectedCase === 'blocked'
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-white text-black border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  Blocked Call ($25,000.00 USDC)
                </button>
                <button
                  onClick={() => setSelectedCase('approved')}
                  className={`px-4 py-2.5 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                    selectedCase === 'approved'
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-white text-black border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  Approved Call ($5.00 USDC)
                </button>
              </div>
            </div>
          </div>

          {/* Runtime Context */}
          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs space-y-2.5 text-black">
            <div className="flex justify-between">
              <span className="text-neutral-500">Control layer:</span>
              <span className="font-bold">payments.send</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">who's asking:</span>
              <span className="font-bold">Iris · onchain agent</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">your cap:</span>
              <span className="font-bold">$100 per action / $250 a day</span>
            </div>
          </div>
        </div>

        {/* Verdict Live Card */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-neutral-400">DECISION RECORD</span>
              <span className="text-white font-bold">
                {selectedCase === 'blocked' ? 'STATUS: BLOCKED' : 'STATUS: APPROVED'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 font-mono text-xs space-y-2.5">
              <div className="flex justify-between text-neutral-400">
                <span>amount:</span>
                <span className="text-white font-bold">
                  {selectedCase === 'blocked' ? '$25,000.00 USDC' : '$5.00 USDC'}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>your cap:</span>
                <span className="text-white">$100 per action / $250 a day</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>risk check:</span>
                <span className="text-white">
                  {selectedCase === 'blocked' ? 'brand new payee' : 'known payee, seen 14 times'}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>receipt:</span>
                <span className="text-white font-bold">
                  {selectedCase === 'blocked' ? 'attempt logged, nothing sent' : 'signed + logged onchain ✓'}
                </span>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-2xl border border-white/20 bg-neutral-900 flex items-center justify-between font-mono text-xs font-bold text-white">
              <div className="flex items-center gap-2">
                {selectedCase === 'blocked' ? (
                  <>
                    <XCircle className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span>Blocked — way past your limit. Nothing moved.</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                    <span>Approved — inside your daily cap. Receipt signed.</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 font-sans">
            Every call is intercepted by the deterministic policy layer prior to dispatch.
          </p>
        </div>

      </div>

      {/* SECTION: Transparency */}
      <div id="transparency" className="pt-16 border-t border-neutral-300">
        <div className="max-w-3xl mb-12 space-y-3 text-left">
          <div className="text-xs font-mono uppercase font-bold text-neutral-500">Transparency</div>
          <h3 className="text-3xl sm:text-5xl font-black text-display text-black tracking-tight leading-[0.98]">
            Every agent is transparent <br />
            <span className="font-serif italic font-normal text-black">
              by default.
            </span>
          </h3>
          <p className="text-base text-neutral-700 font-normal leading-relaxed">
            Not a system-prompt promise. An explicit policy file the runtime checks on every call.
          </p>
        </div>

        {/* Code Card and 3D Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <MacCodeCard
              title="policy.payments-v2.ts"
              description="This is the exact policy the payments demo above checks against — not illustrative copy."
              tags={["EXPLICIT-POLICY", "RUNTIME-ENFORCED", "DECLARATIVE"]}
              code={`export const policy = definePolicy({
  capability: "payments.send",
  version: "payments-v2",
  limits: {
    perTransaction: { amount: 100, currency: "USDC" },
    perDay: { amount: 250, currency: "USDC" },
    maxPendingActions: 3,
  },
  payees: {
    allow: ["seen>=3", "contacts:*"],
    block: ["firstSeen<24h", "sanctioned:*"],
  },
  requireHumanApproval: (a) => a.amount > 100,
  onViolation: "block", // log attempt, sign verdict, notify user
});`}
            />
            <p className="mt-3 text-xs font-mono text-neutral-600">
              This is the exact policy the payments demo above checks against — not illustrative copy.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-center p-8 sm:p-10 rounded-3xl bg-[#141820] border border-neutral-800 text-white shadow-2xl min-h-[520px] relative overflow-hidden">
            <div className="w-full text-center">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                ISOMETRIC ENCLAVE RUNTIME
              </div>
            </div>

            <div className="w-full flex items-center justify-center my-auto py-4">
              <IsometricCubeLoader />
            </div>

            <div className="w-full text-center pt-3 border-t border-neutral-800/80">
              <p className="text-xs text-neutral-400 font-mono">
                Isolated memory sandboxes with zero shared access
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
