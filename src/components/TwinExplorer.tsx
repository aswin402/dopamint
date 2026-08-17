import React, { useState } from 'react';
import { Search, PhoneCall, Volume2, VolumeX, CheckCircle2, Sparkles, Trash2, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { useVoiceSynthesis } from '../hooks/useVoiceSynthesis';
import { AudioWaveform } from './AudioWaveform';
import type { TwinProfile } from '../types';

const CATEGORIES = ['All', 'Musicians', 'Wellness', 'Streamers', 'Tech', 'Executive', 'Comedians', 'Creators'];

export const TwinExplorer: React.FC = () => {
  const {
    twins,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    openFaceTimeCall,
    deleteCustomTwin,
    toggleCreatorStudioModal,
  } = useAppStore();

  const { speak, stopSpeaking, isSpeaking, activeSpeechId } = useVoiceSynthesis();
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Filter twins
  const filteredTwins = twins.filter((twin) => {
    const matchesCategory = activeCategory === 'All' || twin.category === activeCategory;
    const matchesSearch =
      twin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      twin.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      twin.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleVoicePreview = (e: React.MouseEvent, twin: TwinProfile) => {
    e.stopPropagation();
    if (isSpeaking && activeSpeechId === twin.id) {
      stopSpeaking();
    } else {
      speak(twin.voiceReadingText || twin.greeting, twin.id, 1.0, 1.0);
    }
  };

  return (
    <section id="twins" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-emerald-50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BIG BOLD SECTION HEADLINE & MINIMAL COPY */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>THE DIGITAL TWIN DIRECTORY</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
              EXPLORE VERIFIED <br />
              <span className="text-emerald-600">DIGITAL TWINS.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal">
              Audition calibrated voice synthesizers, inspect cognitive specialties, or start an instant 1-on-1 FaceTime video call.
            </p>
          </div>

          {/* Quick Create Action */}
          <button
            onClick={() => toggleCreatorStudioModal(true)}
            className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-md shrink-0 flex items-center gap-2 group cursor-pointer"
          >
            <span>+ Deploy Custom Twin</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-100">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, tags, profession..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium transition-all"
            />
          </div>
        </div>

        {/* Dynamic Twin Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTwins.map((twin) => {
            const isVoicePlaying = isSpeaking && activeSpeechId === twin.id;
            const isHovered = hoveredCardId === twin.id;

            return (
              <div
                key={twin.id}
                onMouseEnter={() => setHoveredCardId(twin.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* 4:5 Portrait Image Media Frame */}
                <div className="relative aspect-[4/3.8] overflow-hidden bg-slate-100">
                  <img
                    src={twin.avatar}
                    alt={twin.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-mono font-bold border border-slate-200 shadow-xs">
                      {twin.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-emerald-400 text-[10px] font-mono font-bold border border-white/15">
                        {twin.latencyMs}MS RT
                      </span>

                      {!['vale', 'serena', 'aiko', 'cody', 'sarang', 'carlos', 'emma', 'ben', 'zara'].includes(twin.id) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteCustomTwin(twin.id);
                          }}
                          className="p-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs transition-colors"
                          title="Delete custom twin"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-sm font-sans">
                        {twin.name}
                      </h3>
                      {twin.verified && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-200 font-medium truncate">
                      {twin.role}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {twin.bio}
                  </p>

                  {/* Audio Synthesizer Audition Trigger */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={(e) => handleVoicePreview(e, twin)}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                          isVoicePlaying
                            ? 'bg-emerald-600 text-white shadow-md animate-pulse'
                            : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-xs'
                        }`}
                        aria-label="Audition Voice"
                      >
                        {isVoicePlaying ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                          Neural Voice
                        </div>
                        <div className="text-xs font-bold text-slate-900">
                          {isVoicePlaying ? 'Auditioning Voice...' : 'Audition Audio'}
                        </div>
                      </div>
                    </div>

                    <AudioWaveform
                      isPlaying={isVoicePlaying}
                      barsCount={14}
                      height={20}
                      barWidth={2}
                      gap={2}
                      color="#059669"
                    />
                  </div>

                  {/* Pricing & Call Trigger Action */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">ACCESS</div>
                      <div className="text-xs font-extrabold text-slate-900 font-mono">
                        {twin.price}
                      </div>
                    </div>

                    <button
                      onClick={() => openFaceTimeCall(twin)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-slate-950 hover:bg-emerald-600 active:bg-emerald-700 transition-all shadow-sm cursor-pointer group/btn"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white" />
                      <span>FaceTime Call</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
