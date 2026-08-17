import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Zap, Maximize2, Radio } from 'lucide-react';
import { BorderBeam } from './BorderBeam';

interface VideoHeroFrameProps {
  className?: string;
}

const AGENT_VIDEOS = [
  { id: 'sol', label: 'Sol · Trading', src: '/videos/video.mp4', badge: 'Limit Order Engine' },
  { id: 'banner', label: 'DopaMint Squad', src: '/videos/Banner video.mp4', badge: 'Multi-Agent Mesh' },
  { id: 'iris', label: 'Iris · Onchain', src: '/videos/Aiko.mp4', badge: 'Base x402 Rail' },
  { id: 'ada', label: 'Ada · Travel', src: '/videos/Serena.mp4', badge: 'Autonomous Booking' },
];

export const VideoHeroFrame: React.FC<VideoHeroFrameProps> = ({ className = '' }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = AGENT_VIDEOS[activeVideoIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={`relative rounded-[2.5rem] bg-slate-950 p-3 sm:p-4 border-2 border-slate-800 shadow-2xl overflow-hidden ${className}`}>
      
      {/* 21st.dev Animated Border Beam */}
      <BorderBeam size={300} duration={14} colorFrom="#10B981" colorTo="#06B6D4" />

      {/* Video Viewport Container */}
      <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-video flex items-center justify-center group">
        
        {/* Real Video Element */}
        <video
          ref={videoRef}
          src={activeVideo.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover select-none"
        />

        {/* Biometric Scanning Reticle Keyframe Line */}
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan pointer-events-none opacity-70" />

        {/* HUD Top Left Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono font-bold text-white shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{activeVideo.label}</span>
          <span className="text-[10px] text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/20">
            {activeVideo.badge}
          </span>
        </div>

        {/* HUD Top Right Telemetry */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-mono font-bold text-slate-300 shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>78MS · WEBRTC V3</span>
        </div>

        {/* Video Overlay Controls (Hover visible) */}
        <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-black/70 backdrop-blur-md p-2.5 rounded-2xl border border-white/20 text-white opacity-90 transition-opacity">
          
          {/* Agent Switcher Pills */}
          <div className="flex items-center gap-1 sm:gap-2">
            {AGENT_VIDEOS.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => {
                  setActiveVideoIndex(idx);
                  setIsPlaying(true);
                }}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer ${
                  activeVideoIndex === idx
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300'
                }`}
              >
                {v.id.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Media Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={handleTogglePlay}
              className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors font-bold"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
