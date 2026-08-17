import React, { useState } from 'react';
import { Trash2, CheckCircle2, XCircle, ShieldCheck, Brain, VolumeX, Sparkles, ShieldAlert, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveWalletCard } from '../ui/InteractiveWalletCard';

interface MemoryNode {
  id: string;
  type: 'remembers' | 'acts' | 'stops';
  title: string;
  detail: string;
  tag: string;
  timestamp: string;
  active: boolean;
  statusColor?: 'neutral' | 'green' | 'red';
}

export const RenaissanceMemoryWallet: React.FC = () => {
  const [memories, setMemories] = useState<MemoryNode[]>([
    {
      id: 'mem-1',
      type: 'remembers',
      title: "You're vegetarian.",
      detail: "Told it back in March · Verified explicit preference",
      tag: "USER PROFILE",
      timestamp: "MARCH 14",
      active: true,
      statusColor: 'neutral',
    },
    {
      id: 'mem-2',
      type: 'remembers',
      title: "You hate anywhere loud on a weeknight.",
      detail: "Inferred from prior booking feedback · Decibel < 65dB",
      tag: "CONTEXT VECTOR",
      timestamp: "MAY 02",
      active: true,
      statusColor: 'neutral',
    },
    {
      id: 'mem-3',
      type: 'acts',
      title: "Books Kiln, 7:30pm, veg tasting menu.",
      detail: "Matched vegetarian criteria + quiet weeknight acoustics",
      tag: "ACTION PROPOSAL",
      timestamp: "TODAY 6:04 PM",
      active: true,
      statusColor: 'green',
    },
    {
      id: 'mem-4',
      type: 'stops',
      title: "Deposit's $40 — fine. A $600 chef's table? Not without you.",
      detail: "$40 <= $100 cap (Approved ✓) · $600 > $100 cap (Blocked ✕)",
      tag: "ENCLAVE BOUNDARY",
      timestamp: "ENFORCED",
      active: true,
      statusColor: 'red',
    },
  ]);

  const toggleDelete = (id: string) => {
    setMemories(prev => prev.map(m => m.id === id ? { ...m, active: !m.active } : m));
  };

  const resetMemories = () => {
    setMemories(prev => prev.map(m => ({ ...m, active: true })));
  };

  return (
    <section id="memory" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>BOUNDED CONTEXT & WALLET</span>
        <span className="font-serif italic text-base text-black">Memory + agency</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          It remembers you. <br />
          <span className="font-serif italic font-normal text-black">
            It still can't go wild.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Small example: it knows you're vegetarian, so it picks the right spot — and it books the table without ever going past what you let it spend.
        </p>
      </div>

      {/* 2-Column Memory + Wallet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left: Interactive Memory-to-Policy Synthesis Flowchart */}
        <div className="lg:col-span-7 parchment-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-3 border-b border-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider">
                Cryptographic Memory Pipeline
              </span>
            </div>
            <button
              onClick={resetMemories}
              className="text-[11px] font-mono text-neutral-500 hover:text-black flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Context</span>
            </button>
          </div>

          {/* Sequential Animated Step Cards */}
          <div className="space-y-4 font-mono text-xs relative">
            
            {/* Step 1: Memory 1 */}
            <div className={`p-4 rounded-2xl border transition-all duration-300 ${
              memories[0].active
                ? 'bg-white border-neutral-300 shadow-xs'
                : 'bg-neutral-100 border-dashed border-neutral-300 opacity-50'
            }`}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="text-[10px] font-bold text-neutral-500 uppercase">
                    REMEMBERS · {memories[0].tag}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-neutral-400">{memories[0].timestamp}</span>
                  <button
                    onClick={() => toggleDelete('mem-1')}
                    className="text-neutral-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                    title="Delete Memory"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="font-bold text-black text-sm">{memories[0].title}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">{memories[0].detail}</div>
            </div>

            {/* Connecting Indicator Downward */}
            <div className="flex justify-center -my-2 relative z-10">
              <div className="w-0.5 h-4 bg-neutral-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-ping" />
              </div>
            </div>

            {/* Step 2: Memory 2 */}
            <div className={`p-4 rounded-2xl border transition-all duration-300 ${
              memories[1].active
                ? 'bg-white border-neutral-300 shadow-xs'
                : 'bg-neutral-100 border-dashed border-neutral-300 opacity-50'
            }`}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <VolumeX className="w-3.5 h-3.5 text-neutral-600" />
                  <span className="text-[10px] font-bold text-neutral-500 uppercase">
                    REMEMBERS · {memories[1].tag}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-neutral-400">{memories[1].timestamp}</span>
                  <button
                    onClick={() => toggleDelete('mem-2')}
                    className="text-neutral-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                    title="Delete Memory"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="font-bold text-black text-sm">{memories[1].title}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">{memories[1].detail}</div>
            </div>

            {/* Connecting Indicator Downward */}
            <div className="flex justify-center -my-2 relative z-10">
              <div className="w-0.5 h-4 bg-emerald-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Step 3: Action Proposal */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-300 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase">
                    ACTS · SYNTHESIZED PLAN
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[9px] border border-emerald-200">
                  AUTO-MATCHED ✓
                </span>
              </div>
              <div className="font-bold text-black text-sm">{memories[2].title}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">{memories[2].detail}</div>
            </div>

            {/* Connecting Indicator Downward */}
            <div className="flex justify-center -my-2 relative z-10">
              <div className="w-0.5 h-4 bg-neutral-800 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              </div>
            </div>

            {/* Step 4: Safety Enclave Cap */}
            <div className="p-4 rounded-2xl bg-black text-white border border-neutral-800 shadow-xl space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                    STOPS · HARD SPENDING LIMIT
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-500/50 text-[9px] font-bold">
                  ENFORCED
                </span>
              </div>
              <div className="font-bold text-white text-sm">
                Deposit's $40 — fine. A $600 chef's table? <span className="text-red-400 font-black">Not without you.</span>
              </div>
              <div className="text-[11px] text-neutral-400 pt-1 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$40 &lt;= $100 Cap (Approved ✓)</span>
                <span>·</span>
                <span className="text-red-400 font-bold">$600 &gt; $100 Cap (Blocked ✕)</span>
              </div>
            </div>

          </div>

          <p className="text-xs text-neutral-600 font-sans leading-relaxed pt-3 border-t border-neutral-300">
            Every memory came from somewhere, and you can delete any of it. Nothing gets treated as fact just because the model said it.
          </p>
        </div>

        {/* Right: Interactive MPC Wallet Card Enclave */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
          <InteractiveWalletCard
            balance="$1,240.00"
            className="!max-w-full shadow-2xl"
          />
          <div className="p-4 rounded-2xl bg-black text-white border border-neutral-800 text-xs font-mono text-neutral-300 w-full text-center shadow-lg flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Move the caps whenever. Pull the plug whenever. It's your money.</span>
          </div>
        </div>

      </div>

    </section>
  );
};
