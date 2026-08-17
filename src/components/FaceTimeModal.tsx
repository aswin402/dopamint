import React, { useState, useEffect, useRef } from 'react';
import { PhoneOff, Mic, MicOff, Video, VideoOff, MessageSquare, Volume2, Sparkles, CheckCircle2, ShieldAlert, Send } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { useVoiceSynthesis } from '../hooks/useVoiceSynthesis';
import { AudioWaveform } from './AudioWaveform';

export const FaceTimeModal: React.FC = () => {
  const { isFaceTimeOpen, closeFaceTimeCall, selectedTwinForCall, activeTwin } = useAppStore();
  const twin = selectedTwinForCall || activeTwin;

  const [callDuration, setCallDuration] = useState(0);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'twin'; text: string; time: string }[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTwinThinking, setIsTwinThinking] = useState(false);

  const { speak, stopSpeaking, isSpeaking } = useVoiceSynthesis();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Call timer effect
  useEffect(() => {
    if (!isFaceTimeOpen) {
      setCallDuration(0);
      setChatMessages([]);
      stopSpeaking();
      return;
    }

    // Initial greeting from twin
    const initialGreeting = twin.greeting || `Hey! Great to connect with you directly. What's on your mind?`;
    setChatMessages([
      {
        sender: 'twin',
        text: initialGreeting,
        time: 'Just now'
      }
    ]);
    speak(initialGreeting, twin.id, 1.0, 1.0);

    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      stopSpeaking();
    };
  }, [isFaceTimeOpen, twin, speak, stopSpeaking]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTwinThinking]);

  if (!isFaceTimeOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const question = textToSend || inputText;
    if (!question.trim()) return;

    // Append user message
    const userMsg = {
      sender: 'user' as const,
      text: question,
      time: formatTime(callDuration)
    };
    setChatMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTwinThinking(true);

    // Find matched answer or generate dynamic contextual answer
    const matchedQa = twin.sampleQas.find(qa => 
      question.toLowerCase().includes(qa.question.toLowerCase().slice(0, 15))
    );

    setTimeout(() => {
      setIsTwinThinking(false);
      const answerText = matchedQa 
        ? matchedQa.answer 
        : `That's a fascinating point regarding ${twin.role.toLowerCase()}. In my cognitive framework, balancing high execution with disciplined boundary control gives you unfair leverage.`;

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'twin',
          text: answerText,
          time: formatTime(callDuration + 2)
        }
      ]);

      speak(answerText, twin.id, 1.0, 1.0);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      {/* FaceTime Container Window */}
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/15 grid grid-cols-1 lg:grid-cols-12 min-h-[600px] max-h-[92vh]">
        
        {/* Left Column: Video & Telemetry Feed (7 cols) */}
        <div className="lg:col-span-7 relative flex flex-col justify-between bg-black overflow-hidden min-h-[360px] lg:min-h-full">
          {/* Twin Video Stream */}
          <video
            ref={videoRef}
            src={twin.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark scrim gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

          {/* Top Header Bar */}
          <div className="relative z-10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                WEBRTC ENCRYPTED // {formatTime(callDuration)}
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-white/10">
              <span>{twin.latencyMs}ms LATENCY</span>
            </div>
          </div>

          {/* User Self Camera Thumbnail (PIP) */}
          <div className="absolute top-16 right-4 z-20 w-24 sm:w-28 aspect-[3/4] rounded-xl bg-slate-800 border-2 border-white/30 shadow-lg overflow-hidden flex flex-col items-center justify-center text-white">
            {isCameraOff ? (
              <div className="flex flex-col items-center gap-1 p-2 text-center text-slate-400">
                <VideoOff className="w-4 h-4" />
                <span className="text-[9px] font-mono">Camera Off</span>
              </div>
            ) : (
              <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-2 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs mb-1">
                  YOU
                </div>
                <span className="text-[9px] font-mono text-slate-300">Live Video</span>
              </div>
            )}
          </div>

          {/* Bottom Telemetry & Controls */}
          <div className="relative z-10 p-4 sm:p-6 space-y-4">
            
            {/* Twin Name & Vocal Waveform Indicator */}
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow">
                    {twin.name} AI
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs text-slate-300 font-medium">{twin.role}</div>
              </div>

              {/* Dynamic Sound Wave */}
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                  {isSpeaking ? 'Speaking' : 'Listening'}
                </span>
                <AudioWaveform
                  isPlaying={isSpeaking}
                  barsCount={12}
                  height={16}
                  barWidth={2}
                  gap={2}
                  color="#10B981"
                />
              </div>
            </div>

            {/* In-Call Action Triggers */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsMicMuted(!isMicMuted)}
                className={`p-3.5 rounded-full transition-all cursor-pointer ${
                  isMicMuted
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
                }`}
                title={isMicMuted ? 'Unmute microphone' : 'Mute microphone'}
              >
                {isMicMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsCameraOff(!isCameraOff)}
                className={`p-3.5 rounded-full transition-all cursor-pointer ${
                  isCameraOff
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
                }`}
                title={isCameraOff ? 'Turn on camera' : 'Turn off camera'}
              >
                {isCameraOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </button>

              <button
                onClick={closeFaceTimeCall}
                className="p-3.5 px-6 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <PhoneOff className="w-5 h-5" />
                <span className="hidden sm:inline">End Call</span>
              </button>
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Real-Time Q&A Console (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white p-4 sm:p-5 border-t lg:border-t-0 lg:border-l border-slate-200">
          
          {/* Header */}
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-slate-500 tracking-wider">
                Live Subtitles & Ingestion
              </div>
              <div className="text-sm font-bold text-slate-900">
                Cognitive Transcript
              </div>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
              {twin.fidelityScore} Fidelity
            </span>
          </div>

          {/* Quick Scenario Starter Prompts */}
          <div className="my-2 py-1">
            <div className="text-[11px] font-semibold text-slate-500 mb-1.5 uppercase font-mono">
              Suggested Question Prompts:
            </div>
            <div className="flex flex-col gap-1.5">
              {twin.sampleQas.map((qa, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(qa.question)}
                  className="text-left text-xs p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-slate-800 font-medium transition-all"
                >
                  "{qa.question}"
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto max-h-[220px] lg:max-h-[240px] space-y-3 pr-1 my-2">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono mb-0.5">
                  <span>{msg.sender === 'user' ? 'You' : twin.name}</span>
                  <span>·</span>
                  <span>{msg.time}</span>
                </div>
                <div
                  className={`p-3 rounded-2xl text-xs sm:text-sm max-w-[88%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-slate-900 text-white rounded-br-xs'
                      : 'bg-emerald-50 text-slate-900 border border-emerald-200/80 rounded-bl-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTwinThinking && (
              <div className="flex items-center gap-1.5 text-xs text-slate-500 italic p-2 bg-slate-50 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                <span>{twin.name} is formulating response...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Bottom Chat / Audio Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="pt-2 border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Ask ${twin.name} anything in real-time...`}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white shadow-xs transition-all cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
