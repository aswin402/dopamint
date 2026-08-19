import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface LayerItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  tags: string[];
}

const LAYERS: LayerItem[] = [
  {
    id: 'verifiability',
    name: 'Verifiability layer',
    badge: 'Layer 01',
    description:
      'Every proposed action is evaluated against a declarative policy set — caller identity, agent scope, spend envelope, payee history — and the evaluation itself is recorded, not just its verdict. The decision plus the canonical action payload is signed by the platform key and hashed into an append-only chain where each entry commits to the previous hash. Because the chain is tamper-evident, editing any past step invalidates every hash after it, which is exactly what the Evidence demo above shows.',
    tags: ['policy evaluation', 'signed decisions', 'hash-chained log'],
  },
  {
    id: 'control',
    name: 'Control layer',
    badge: 'Layer 02',
    description:
      'Deterministic interceptor checking capability bounds, spend limits, and risk profiles before dispatching any payment, swap, or external API execution.',
    tags: ['per-action caps', 'spending envelope', 'revocable credentials'],
  },
  {
    id: 'runtime',
    name: 'Isolated Enclave & Runtime',
    badge: 'Layer 03',
    description:
      'Hardware-isolated execution environments with scoped access tokens that ensure no rogue process can leak private keys or bypass policy rules.',
    tags: ['isolated runtime', 'signed receipts', 'Merkle chain'],
  },
];

export const RenaissanceEngineering: React.FC = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string>('verifiability');

  return (
    <section id="engineering" className="w-full bg-[#151918] text-white py-24 px-4 sm:px-8 lg:px-12 select-none relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Chapter Marker */}
        <div className="flex items-center justify-between text-xs font-mono text-[#8fa394] mb-8 pb-3 border-b border-[#252c2a]">
          <span>SYSTEM ARCHITECTURE</span>
          <span className="font-serif italic text-base text-white">Engineering</span>
        </div>

        {/* Editorial Title */}
        <div className="max-w-3xl mb-12 space-y-4 text-left">
          <h2 className="text-4xl sm:text-6xl font-black text-display text-white tracking-tight leading-[0.96]">
            What's actually <br />
            <span className="font-serif italic font-normal text-[#b4cbba]">
              running underneath.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            Follow the path a request takes. Hover any node — or any layer — to pull it out of the stack. The trust layer isn't a box in this diagram — it's what the verifiability layer and the control layer add up to: a proof that something was allowed, plus a proof that it actually happened that way.
          </p>

          <div>
            <a
              href="#docs"
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Technical overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Interactive 3D Stack Showcase */}
        <div className="space-y-4 mb-16">
          {LAYERS.map((layer) => {
            const isHovered = hoveredLayer === layer.id;
            return (
              <div
                key={layer.id}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 border ${
                  isHovered
                    ? 'bg-[#1f2725] border-emerald-500/50 text-white shadow-2xl scale-[1.01] -translate-y-1'
                    : 'bg-[#181d1c]/90 border-[#283230] text-neutral-200 hover:border-[#384643]'
                }`}
              >
                <div className="space-y-3 max-w-2xl text-left">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      isHovered ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40' : 'bg-black/40 text-neutral-400 border border-neutral-700/50'
                    }`}>
                      {layer.badge}
                    </span>
                    <h3 className="text-2xl font-black font-sans tracking-tight text-white">
                      {layer.name}
                    </h3>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isHovered ? 'text-neutral-200' : 'text-neutral-400 font-normal'
                  }`}>
                    {layer.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap md:flex-col lg:flex-row gap-2 shrink-0 font-mono text-xs">
                  {layer.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-xl border ${
                        isHovered
                          ? 'bg-[#131716] border-emerald-500/30 text-emerald-300'
                          : 'bg-[#141817] border-[#2c3533] text-neutral-400'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
