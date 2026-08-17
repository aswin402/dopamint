import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Code2 } from 'lucide-react';

interface LayerItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  tags: string[];
}

const LAYERS: LayerItem[] = [
  {
    id: 'tools',
    name: 'Tools & Connectors',
    badge: 'Surface 01',
    description: 'Hundreds of connected apps and APIs, each one scoped to exactly what that agent needs and nothing more.',
    tags: ['scoped access', 'app connectors', 'x402 APIs'],
  },
  {
    id: 'trust',
    name: 'Authority & Policy Engine',
    badge: 'Core 02',
    description: 'Deterministic interceptor checking capability bounds, rate limits, and risk profiles before dispatching.',
    tags: ['policy verification', 'per-action caps', 'revocable access'],
  },
  {
    id: 'runtime',
    name: 'Isolated VM & Evidence Log',
    badge: 'Hardware 03',
    description: 'Sandboxed execution environment generating forward-secure Merkle receipts for every consequential action.',
    tags: ['isolated runtime', 'signed receipts', 'Merkle chain'],
  },
];

export const RenaissanceEngineering: React.FC = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string>('tools');

  return (
    <section id="engineering" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>SYSTEM ARCHITECTURE</span>
        <span className="font-serif italic text-base text-black">Engineering</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          What's actually <br />
          <span className="font-serif italic font-normal text-black">
            running underneath.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Hover a layer to pull it out of the stack.
        </p>
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
              <div className="space-y-2 max-w-2xl text-left">
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
                  isHovered ? 'text-neutral-300' : 'text-neutral-600'
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
