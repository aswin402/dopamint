import React from 'react';
import { Mic, PhoneCall, PhoneOff, ShieldCheck, CheckCircle2, Zap, Volume2 } from 'lucide-react';
import { useVoiceSynthesis } from '../hooks/useVoiceSynthesis';
import { AudioWaveform } from './AudioWaveform';

export const VoiceNative: React.FC = () => {
  const { speak, stopSpeaking, isSpeaking } = useVoiceSynthesis();
  const voiceQuote = "Moving $500 into ETH now — inside your policy limit.";

  const handleToggleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speak(voiceQuote, 'iris-voice', 1.0, 1.05);
    }
  };

  return (
    <section id="voice" className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5 text-emerald-600" />
            <span>VOICE NATIVE INTERACTION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Or, you know, <br />
            <span className="text-emerald-600">just talk to it.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Some agents you type to. Some you just talk to, like an actual person — and they're already moving before you finish your sentence.
          </p>
        </div>

        {/* 2-Column Voice Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center mb-16">
          
          {/* Left: Mobile Voice Call Simulator (5 cols) */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-slate-950 p-4 shadow-2xl border-4 border-slate-800">
            <div className="rounded-[2rem] bg-slate-900 text-white p-6 overflow-hidden flex flex-col justify-between min-h-[440px] text-center">
              
              {/* Call Status Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>9:41</span>
                <span>5G ●●●●</span>
              </div>

              {/* Agent Avatar & Live Call Timer */}
              <div className="py-6 space-y-3">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 mx-auto flex items-center justify-center font-black text-2xl shadow-xl">
                  I
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Iris</h3>
                  <div className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                    Live Call · 01:42
                  </div>
                </div>

                {/* Audio Waveform */}
                <div className="py-2">
                  <AudioWaveform isPlaying={isSpeaking} />
                </div>
              </div>

              {/* Quote Bubble */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-slate-800 text-xs font-mono text-emerald-300">
                "{voiceQuote}"
              </div>

              {/* Call Action Trigger */}
              <div className="pt-4 flex items-center justify-center gap-4">
                <button
                  onClick={handleToggleVoice}
                  className={`p-4 rounded-full shadow-lg transition-all ${
                    isSpeaking ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                  }`}
                >
                  {isSpeaking ? <PhoneOff className="w-6 h-6" /> : <PhoneCall className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>

          {/* Right: Architectural Voice Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                ZERO COMPROMISE SPEECH STACK
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                Same trust layer. Different voice.
              </h3>
              <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
                This isn't a chatbot with a text-to-speech bolt-on slapped over it. Same policy engine, same capability checks, same signed receipts as literally everything else on this page — it just sounds like someone instead of something.
              </p>
            </div>

            {/* 4 Voice Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-950">Low-latency voice</div>
                <div className="text-[11px] text-slate-500 mt-0.5">&lt; 80ms roundtrip audio</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-950">Live transcription</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Real-time intent parsing</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-950">Same policy engine</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Deterministic checks</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-950">Signed receipts</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Merkle verifiable record</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
