import React, { useState, useEffect, useRef } from 'react';
import { Radio, Eye, Heart, MessageSquare, Volume2, VolumeX, Send, Sparkles, Trophy, ShieldCheck, Flame } from 'lucide-react';
import type { LiveChatMessage } from '../types';

const INITIAL_MESSAGES: LiveChatMessage[] = [
  { id: '1', user: 'cyber_kai', badge: 'VIP', message: 'Wait, is the AI Twin generating these synth chords completely live?!', timestamp: '12:01' },
  { id: '2', user: 'synth_queen', badge: 'SUB', message: 'The voice synthesis sounds 100% indistinguishable from Vale’s real voice 🔥', timestamp: '12:01' },
  { id: '3', user: 'tokyo_drift', badge: 'MOD', message: 'Welcome everyone! Twin is taking interactive music theory questions from chat.', timestamp: '12:02' },
  { id: '4', user: 'elena_sound', badge: 'SUB', message: 'Just tipped $20! Can you breakdown the FM bass synthesis again?', timestamp: '12:02', isTip: true, tipAmount: 20 },
  { id: '5', user: 'marcus_beats', message: 'This is genuinely the future of streaming 24/7.', timestamp: '12:03' },
];

export const LiveBroadcast: React.FC = () => {
  const [messages, setMessages] = useState<LiveChatMessage[]>(INITIAL_MESSAGES);
  const [inputComment, setInputComment] = useState('');
  const [viewersCount, setViewersCount] = useState(18492);
  const [isMuted, setIsMuted] = useState(true);
  const [tipSuccess, setTipSuccess] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);

  // Dynamic viewer counter & chat generator
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewersCount((prev) => prev + Math.floor(Math.random() * 9) - 4);
    }, 3500);

    const chatPool = [
      'That vocal latency was literally 70ms wtf!',
      'Subscribed for 6 months! Best creator AI on the market.',
      'Can the twin stream to Twitch and YouTube simultaneously?',
      'The WebRTC lip-sync is under 80ms, that is wild.',
      'Just sent a $25 superchat! Keep killing it!',
      'How do I create a twin like this in the Creator Studio?',
    ];

    const userPool = ['alex_99', 'solana_sam', 'dj_prism', 'luna_star', 'pixel_pete', 'beat_maker'];
    const badgePool: Array<'VIP' | 'SUB' | 'MOD' | undefined> = ['VIP', 'SUB', undefined, undefined];

    const chatInterval = setInterval(() => {
      const randomUser = userPool[Math.floor(Math.random() * userPool.length)];
      const randomText = chatPool[Math.floor(Math.random() * chatPool.length)];
      const randomBadge = badgePool[Math.floor(Math.random() * badgePool.length)];

      const newMsg: LiveChatMessage = {
        id: `msg-${Date.now()}`,
        user: randomUser,
        badge: randomBadge,
        message: randomText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev.slice(-20), newMsg]);
    }, 3000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(chatInterval);
    };
  }, []);

  useEffect(() => {
    chatScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputComment.trim()) return;

    const userMsg: LiveChatMessage = {
      id: `msg-user-${Date.now()}`,
      user: 'You',
      badge: 'VIP',
      message: inputComment,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputComment('');
  };

  const handleSendTip = (amount: number) => {
    const tipMsg: LiveChatMessage = {
      id: `tip-${Date.now()}`,
      user: 'You',
      badge: 'VIP',
      message: `Sent a $${amount} Superchat Tip to Vale AI! 💖⚡`,
      timestamp: 'Just now',
      isTip: true,
      tipAmount: amount,
    };

    setMessages((prev) => [...prev, tipMsg]);
    setTipSuccess(`Successfully sent $${amount} Superchat!`);
    setTimeout(() => setTipSuccess(null), 3000);
  };

  return (
    <section id="live" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BIG BOLD SECTION HEADLINE & CONCISE COPY */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>24/7 AUTONOMOUS BROADCAST THEATER</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            BROADCAST LIVE. <br />
            <span className="text-red-600">WHILE YOU SLEEP.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Autonomous streaming across Twitch, YouTube, and TikTok with real-time vocal chat reactions and instant fan tipping.
          </p>
        </div>

        {/* Live Theater Container */}
        <div className="rounded-3xl bg-slate-950 border-2 border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-white">
          
          {/* Main Video Stream Frame (8 cols) */}
          <div className="lg:col-span-8 relative bg-black flex flex-col justify-between aspect-video lg:aspect-auto min-h-[380px] sm:min-h-[480px]">
            <video
              ref={videoRef}
              src="/videos/Banner video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Subtle Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/60 pointer-events-none" />

            {/* Stream Header Info */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-red-600 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  LIVE NOW
                </span>

                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono border border-white/15">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold">{viewersCount.toLocaleString()} Viewers</span>
                </div>
              </div>

              {/* Sound Toggle */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
                aria-label="Toggle audio"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>

            {/* Stream Footer Info */}
            <div className="relative z-10 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-sans">
                  <span>Vale AI // Modular Jam & Q&A Stream</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                    60 FPS
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-mono mt-1">
                  Autonomous speech cadence & dynamic topic routing
                </div>
              </div>

              {/* Superchat Tips Trigger */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSendTip(5)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tip $5</span>
                </button>
                <button
                  onClick={() => handleSendTip(25)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Tip $25</span>
                </button>
              </div>
            </div>

          </div>

          {/* Chat Stream Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between h-[420px] lg:h-auto">
            
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-mono uppercase tracking-wider">Stream Chat</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                Live Poll Active
              </span>
            </div>

            {/* Tip Banner Toast */}
            {tipSuccess && (
              <div className="p-2.5 bg-emerald-600 text-white text-xs font-extrabold text-center animate-fadeIn">
                {tipSuccess}
              </div>
            )}

            {/* Chat Messages Feed */}
            <div className="flex-1 p-4 space-y-2.5 overflow-y-auto max-h-[300px] lg:max-h-[380px] text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`p-2.5 rounded-xl leading-relaxed transition-all ${
                    m.isTip
                      ? 'bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-transparent border border-amber-400/40 shadow-xs'
                      : 'hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {m.badge === 'VIP' && (
                      <span className="px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 text-[9px] font-mono font-bold border border-purple-400/30">
                        VIP
                      </span>
                    )}
                    {m.badge === 'SUB' && (
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-300 text-[9px] font-mono font-bold border border-emerald-400/30">
                        SUB
                      </span>
                    )}
                    {m.badge === 'MOD' && (
                      <span className="px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-300 text-[9px] font-mono font-bold border border-blue-400/30">
                        MOD
                      </span>
                    )}
                    <span className="font-bold text-slate-200">{m.user}:</span>
                    <span className="text-[10px] text-slate-500 ml-auto font-mono">{m.timestamp}</span>
                  </div>
                  <div className={m.isTip ? 'font-bold text-amber-200' : 'text-slate-300'}>
                    {m.message}
                  </div>
                </div>
              ))}
              <div ref={chatScrollRef} />
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendMessage} className="p-3.5 border-t border-slate-800 bg-slate-950 flex gap-2">
              <input
                type="text"
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}
                placeholder="Send a chat message..."
                className="flex-1 px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
