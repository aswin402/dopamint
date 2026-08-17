import React, { useState } from 'react';
import { Cpu, Mic, Video, Database, Globe, Zap, ShieldCheck, Activity, Layers } from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../data/twins';

export const Architecture: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = ARCHITECTURE_LAYERS[activeLayerIndex];

  return (
    <section id="architecture" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BIG BOLD SECTION HEADLINE & CONCISE COPY */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>DEEP NEURAL ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            SUB-80MS LATENCY. <br />
            <span className="text-blue-600">ZERO COMPROMISE.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            4 proprietary neural pipelines synchronized into a global WebRTC edge mesh for human conversational cadence.
          </p>
        </div>

        {/* 4-Layer Interactive Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Layer Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {ARCHITECTURE_LAYERS.map((layer, idx) => {
              const isSelected = activeLayerIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-lg ring-1 ring-emerald-400/30 -translate-x-1'
                      : 'bg-white/80 hover:bg-white border-slate-200/90 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-black text-emerald-700">
                      LAYER {layer.step}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold">
                      {layer.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950 mb-1 font-sans">
                    {layer.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Technical Canvas Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Top Spec Header */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                    PIPELINE TELEMETRY // {activeLayer.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  {activeLayer.badge}
                </span>
              </div>

              {/* Technical Schematic Box */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white font-mono text-xs space-y-4 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                  <span>EDGE NODE: US-EAST-01</span>
                  <span>STATUS: WEBRTC_ACTIVE</span>
                </div>

                {/* Animated Pipeline Diagram */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-bold">INPUT</div>
                    <div className="font-black text-white text-xs mt-1">Audio / Viseme</div>
                    <div className="text-[9px] text-emerald-400 mt-1 font-bold">48kHz Opus</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/50">
                    <div className="text-[10px] text-emerald-300 font-bold">NEURAL CORE</div>
                    <div className="font-black text-emerald-400 text-xs mt-1">RAG Inference</div>
                    <div className="text-[9px] text-emerald-300 mt-1 font-bold">128 Dim Tensor</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-bold">OUTPUT</div>
                    <div className="font-black text-white text-xs mt-1">60 FPS Video</div>
                    <div className="text-[9px] text-emerald-400 mt-1 font-bold">&lt; 82ms Edge</div>
                  </div>
                </div>

                {/* Code / Vector Spec */}
                <div className="p-3 rounded-xl bg-black/60 text-slate-300 text-[11px] font-mono leading-relaxed space-y-1">
                  <p className="text-emerald-400">{"// Neural Viseme Synthesizer Configuration"}</p>
                  <p>{"{"}</p>
                  <p className="pl-4">"blendshapes": 52,</p>
                  <p className="pl-4">"sample_rate": 48000,</p>
                  <p className="pl-4">"deterministic_guardrails": true,</p>
                  <p className="pl-4">"latency_target_ms": 78</p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Explanatory Text */}
              <div className="mt-6 space-y-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Architectural Guarantee:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeLayer.description} Every communication packet is signed with biometric cryptographic keys to ensure zero deepfake spoofing and 100% intellectual property sovereignty.
                </p>
              </div>
            </div>

            {/* Bottom Security Assurance */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>End-to-End Encrypted WebRTC</span>
              </div>
              <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded font-bold">
                SOC2 Type II
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
