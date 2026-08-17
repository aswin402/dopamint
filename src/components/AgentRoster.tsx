import React, { useState } from 'react';
import { AGENTS_ROSTER } from '../data/dopamint';
import type { AgentProfile } from '../data/dopamint';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Zap, Play } from 'lucide-react';
import { useVoiceSynthesis } from '../hooks/useVoiceSynthesis';
import { SpotlightCard } from './ui/SpotlightCard';
import { BorderBeam } from './ui/BorderBeam';

export const AgentRoster: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentProfile>(AGENTS_ROSTER[0]);
  const { speak, stopSpeaking, isSpeaking, activeSpeechId } = useVoiceSynthesis();

  const handleVoiceTest = (agent: AgentProfile) => {
    if (isSpeaking && activeSpeechId === agent.id) {
      stopSpeaking();
    } else {
      speak(agent.voiceText, agent.id, 1.0, 1.0);
    }
  };

  return (
    <section id="agents" className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>THE DOPAMINT AGENT SQUAD</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            AGENTS READY TO GO. <br />
            <span className="text-emerald-600">TODAY.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            We're not some infra kit you have to wire together yourself — it's a whole roster of agents, ready to go. You don't juggle a dozen apps. You just ask, and the right one shows up.
          </p>
        </div>

        {/* 8 Agent Spotlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {AGENTS_ROSTER.map((agent) => {
            const isPlaying = isSpeaking && activeSpeechId === agent.id;
            const isSelected = selectedAgent.id === agent.id;

            return (
              <SpotlightCard
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                spotlightColor="rgba(16, 185, 129, 0.15)"
                className={`p-6 flex flex-col justify-between cursor-pointer relative ${
                  isSelected
                    ? 'border-emerald-500 shadow-xl ring-2 ring-emerald-400/30'
                    : 'hover:border-slate-300'
                }`}
              >
                {isSelected && (
                  <BorderBeam size={180} duration={8} colorFrom="#10B981" colorTo="#06B6D4" />
                )}

                {/* Agent Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${agent.color} text-white font-black text-lg flex items-center justify-center shadow-sm`}>
                      {agent.initial}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {agent.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight font-sans">
                      {agent.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-emerald-700">
                      {agent.role}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {agent.description}
                  </p>
                </div>

                {/* Sample Task Box & Voice Trigger */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                    Sample Task
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 line-clamp-2">
                    "{agent.sampleTask}"
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVoiceTest(agent);
                    }}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPlaying
                        ? 'bg-emerald-600 text-white animate-pulse'
                        : 'bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 shadow-xs'
                    }`}
                  >
                    <Play className="w-3 h-3 text-emerald-600 fill-current" />
                    <span>{isPlaying ? 'Speaking Voice...' : 'Listen to Voice'}</span>
                  </button>
                </div>

              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom Trust Highlights */}
        <div className="p-6 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>500+ agents on deck</span>
          </div>
          <div className="text-slate-300">
            One chat, any specialist
          </div>
          <div className="text-emerald-300 font-bold">
            Same trust layer, every time
          </div>
        </div>

      </div>
    </section>
  );
};
