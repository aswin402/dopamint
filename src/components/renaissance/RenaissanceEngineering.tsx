import React, { useState } from 'react';
import { Layers, ShieldCheck, ArrowRight, FileCode } from 'lucide-react';

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
    <section id="engineering" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>SYSTEM ARCHITECTURE</span>
        <span className="font-serif italic text-base text-black">Engineering</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-12 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          What's actually <br />
          <span className="font-serif italic font-normal text-black">
            running underneath.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
          Follow the path a request takes. Hover any node — or any layer — to pull it out of the stack. The trust layer isn't a box in this diagram — it's what the verifiability layer and the control layer add up to: a proof that something was allowed, plus a proof that it actually happened that way.
        </p>

        <div>
          <a
            href="#docs"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-black hover:underline"
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
              className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                isHovered
                  ? 'bg-black text-white shadow-2xl scale-[1.01] -translate-y-1'
                  : 'parchment-card hover:bg-white text-black'
              }`}
            >
              <div className="space-y-3 max-w-2xl text-left">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    isHovered ? 'bg-neutral-800 text-white' : 'bg-black/5 text-neutral-600'
                  }`}>
                    {layer.badge}
                  </span>
                  <h3 className="text-2xl font-black font-sans tracking-tight">
                    {layer.name}
                  </h3>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isHovered ? 'text-neutral-300' : 'text-neutral-700 font-normal'
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
                        ? 'bg-neutral-900 border-neutral-800 text-white'
                        : 'bg-white border-neutral-200 text-black'
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

    </section>
  );
};
