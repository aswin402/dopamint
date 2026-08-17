import React from 'react';
import { PhoneCall, PhoneOff } from 'lucide-react';
import { useVoiceSynthesis } from '../../hooks/useVoiceSynthesis';
import { AudioWaveform } from '../AudioWaveform';

export const RenaissanceVoice: React.FC = () => {
  const { speak, stopSpeaking, isSpeaking } = useVoiceSynthesis();
  const voiceQuote = "Moving $500 into ETH now — inside your policy limit.";

  const handleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speak(voiceQuote, 'iris-voice', 1.0, 1.05);
    }
  };

  return (
    <section id="voice" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER IX // VOICE NATIVE</span>
        <span className="font-serif italic text-base text-black">IX</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Or, you know, <br />
          <span className="font-serif italic font-normal text-black">
            just talk to it.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Some agents you type to. Some you just talk to, like an actual person — and they're already moving before you finish your sentence.
        </p>
      </div>

      {/* 2-Column Voice Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        
        {/* Left iPhone Voice Call Mockup */}
        <div className="lg:col-span-5 rounded-[2.5rem] bg-black p-4 shadow-2xl">
          <div className="rounded-[2rem] bg-neutral-900 text-white p-6 flex flex-col justify-between min-h-[420px] text-center">
            
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>9:41</span>
              <span>5G ●●●●</span>
            </div>

            <div className="py-4 space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 text-white mx-auto flex items-center justify-center font-serif italic text-2xl shadow-md">
                I
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Iris</h3>
                <div className="text-xs font-mono text-neutral-300 font-bold">
                  Live · 01:42
                </div>
              </div>

              <div className="py-2">
                <AudioWaveform isPlaying={isSpeaking} />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-black/60 border border-neutral-800 text-xs font-mono text-white">
              "{voiceQuote}"
            </div>

            <div className="pt-3 flex justify-center">
              <button
                onClick={handleVoice}
                className={`p-3.5 rounded-full shadow-lg transition-all cursor-pointer ${
                  isSpeaking ? 'bg-neutral-800 text-white animate-pulse border border-white/30' : 'bg-white hover:bg-neutral-200 text-black'
                }`}
              >
                {isSpeaking ? <PhoneOff className="w-5 h-5 text-white" /> : <PhoneCall className="w-5 h-5 text-black" />}
              </button>
            </div>

          </div>
        </div>

        {/* Right Voice Stack Narrative */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div>
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
              SAME TRUST LAYER. DIFFERENT VOICE.
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black mt-1">
              Zero bolt-on synthesis.
            </h3>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
              This isn't a chatbot with a text-to-speech bolt-on slapped over it. Same policy engine, same capability checks, same signed receipts as literally everything else on this page — it just sounds like someone instead of something.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
            <div className="parchment-card p-4 rounded-2xl">
              <div className="font-bold text-black">Low-latency voice</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">&lt; 80ms roundtrip audio</div>
            </div>
            <div className="parchment-card p-4 rounded-2xl">
              <div className="font-bold text-black">Live transcription</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">Real-time intent parsing</div>
            </div>
            <div className="parchment-card p-4 rounded-2xl">
              <div className="font-bold text-black">Same policy engine</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">Deterministic checks</div>
            </div>
            <div className="parchment-card p-4 rounded-2xl">
              <div className="font-bold text-black">Signed receipts</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">Merkle verifiable record</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
