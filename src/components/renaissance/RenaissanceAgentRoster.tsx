import React, { useState } from 'react';
import { AGENTS_ROSTER } from '../../data/dopamint';
import type { AgentProfile } from '../../data/dopamint';
import { Play } from 'lucide-react';
import { useVoiceSynthesis } from '../../hooks/useVoiceSynthesis';

export const RenaissanceAgentRoster: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentProfile>(AGENTS_ROSTER[0]);
  const { speak, stopSpeaking, isSpeaking, activeSpeechId } = useVoiceSynthesis();

  const handleVoice = (agent: AgentProfile) => {
    if (isSpeaking && activeSpeechId === agent.id) {
      stopSpeaking();
    } else {
      speak(agent.voiceText, agent.id, 1.0, 1.0);
    }
  };

  return (
    <section id="roster" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER III // THE ROSTER</span>
        <span className="font-serif italic text-base text-black">III</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Agents you can actually put to work. <br />
          <span className="font-serif italic font-normal text-black">
            Today.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          We're not some infra kit you have to wire together yourself — it's a whole roster of agents, ready to go. You don't juggle a dozen apps. You just ask, and the right one shows up.
        </p>
      </div>

      {/* 8 Agent Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {AGENTS_ROSTER.map((agent) => {
          const isPlaying = isSpeaking && activeSpeechId === agent.id;
          const isSelected = selectedAgent.id === agent.id;

          return (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`p-6 rounded-3xl transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white shadow-xl ring-2 ring-black border border-transparent'
                  : 'parchment-card hover:bg-white'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-black text-white font-serif italic text-lg flex items-center justify-center shadow-xs">
                    {agent.initial}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-neutral-700">
                    {agent.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-black tracking-tight font-sans">
                    {agent.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-neutral-800 mt-0.5">
                    {agent.role}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {agent.description}
                </p>
              </div>

              {/* Sample Task & Voice Button */}
              <div className="pt-4 mt-4 border-t border-neutral-200 space-y-2">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">
                  Policy Bound
                </div>
                <div className="text-[11px] font-mono text-neutral-800 line-clamp-1 font-medium">
                  {agent.policyBound}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVoice(agent);
                  }}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isPlaying
                      ? 'bg-black text-white animate-pulse'
                      : 'bg-black/5 hover:bg-black/10 text-black'
                  }`}
                >
                  <Play className="w-3 h-3 text-black fill-current" />
                  <span>{isPlaying ? 'Speaking...' : 'Audition Voice'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* 3-Column Editorial Specs Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-300 text-left font-sans text-xs text-neutral-700">
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">500+ agents on deck</div>
          <p className="text-neutral-600">
            Specialized execution models tuned for distinct verticals from quant trading to travel logistics.
          </p>
        </div>
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">One chat, any specialist</div>
          <p className="text-neutral-600">
            Natural language routing instantly delivers the qualified agent for your specific objective.
          </p>
        </div>
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">Same trust layer, every time</div>
          <p className="text-neutral-600">
            Every agent operates under deterministic, revocable capability boundaries and signed receipts.
          </p>
        </div>
      </div>

    </section>
  );
};
