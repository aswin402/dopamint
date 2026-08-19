import React from 'react';
import { ShieldCheck, Zap, Lock, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'Policy-Scoped',
    'Onchain Verified',
    'Voice Native',
    'Always On',
    'Signed Receipts',
    'Revocable Access',
    'Multi-Agent',
    'x402 Payments',
    'Human-Like',
    'Production Ready'
  ];

  return (
    <div className="w-full bg-slate-950 py-3.5 border-y border-slate-800 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-4 text-xs font-mono font-bold text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
