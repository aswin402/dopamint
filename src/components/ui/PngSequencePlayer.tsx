import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, ShieldCheck, Sparkles, Layers, Sliders } from 'lucide-react';
import { BorderBeam } from './BorderBeam';

interface PngSequencePlayerProps {
  totalFrames?: number;
  framePrefix?: string;
  className?: string;
}

export const PngSequencePlayer: React.FC<PngSequencePlayerProps> = ({
  totalFrames = 60,
  framePrefix = '/sequence/frame_',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isWireframe, setIsWireframe] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startFrameRef = useRef(1);

  // Preload all frames into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `${framePrefix}${frameNum}.png`;

      img.onload = () => {
        loadCount++;
        setImagesLoaded(loadCount);
        if (i === 1) {
          drawFrame(img);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, [totalFrames, framePrefix]);

  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 720;
    canvas.height = canvas.parentElement?.clientHeight || 480;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Compute aspect-fit dimensions
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );

    // Optional Holographic Wireframe Grid Overlay
    if (isWireframe) {
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.lineWidth = 1;
      const step = 24;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  };

  // Render current frame whenever currentFrame or isWireframe changes
  useEffect(() => {
    if (imagesRef.current.length >= currentFrame) {
      const img = imagesRef.current[currentFrame - 1];
      if (img && img.complete) {
        drawFrame(img);
      }
    }
  }, [currentFrame, isWireframe]);

  // Auto-play loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= totalFrames ? 1 : prev + 1));
    }, 1000 / 24); // 24 FPS

    return () => clearInterval(interval);
  }, [isPlaying, totalFrames]);

  // Mouse drag scrubbing
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startFrameRef.current = currentFrame;
    setIsPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const frameOffset = Math.round(deltaX / 8); // 8px per frame
    let target = startFrameRef.current + frameOffset;
    while (target > totalFrames) target -= totalFrames;
    while (target < 1) target += totalFrames;
    setCurrentFrame(target);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch drag scrubbing
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    startFrameRef.current = currentFrame;
    setIsPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    const frameOffset = Math.round(deltaX / 8);
    let target = startFrameRef.current + frameOffset;
    while (target > totalFrames) target -= totalFrames;
    while (target < 1) target += totalFrames;
    setCurrentFrame(target);
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-[2.5rem] bg-slate-950 p-4 sm:p-6 border-2 border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between ${className}`}
    >
      <BorderBeam size={280} duration={12} colorFrom="#10B981" colorTo="#06B6D4" />

      {/* Top HUD Telemetry */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white uppercase">
            60-FRAME KINETIC PNG SEQUENCE
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
            {imagesLoaded === totalFrames ? '100% BUFFERED' : `BUFFERING ${imagesLoaded}/${totalFrames}`}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-colors flex items-center gap-1 cursor-pointer ${
              isWireframe
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isWireframe ? 'Mesh ON' : 'Mesh OFF'}</span>
          </button>

          <span className="font-bold text-emerald-400 font-mono">
            FRAME [{String(currentFrame).padStart(3, '0')}/{totalFrames}]
          </span>
        </div>
      </div>

      {/* Interactive Drag Canvas Canvas Viewport */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative my-4 rounded-2xl overflow-hidden bg-black/90 aspect-[16/10] sm:aspect-video flex items-center justify-center cursor-grab active:cursor-grabbing border border-slate-800"
      >
        <canvas ref={canvasRef} className="w-full h-full object-contain" />

        {/* Drag Instruction Floating Prompt */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-slate-300 flex items-center gap-1.5 pointer-events-none">
          <Sliders className="w-3 h-3 text-emerald-400" />
          <span>Click & Drag Horizontally to Scrub Frames</span>
        </div>
      </div>

      {/* Bottom Scrubber & Playback Controls */}
      <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        
        {/* Play / Reset Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isPlaying
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause Sequence' : 'Auto-Play Sequence'}</span>
          </button>

          <button
            onClick={() => {
              setCurrentFrame(1);
              setIsPlaying(false);
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer transition-colors"
            title="Reset to Frame 001"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Scrubbing Range Slider */}
        <div className="flex items-center gap-3 w-full sm:w-1/2">
          <span className="text-[10px] text-slate-400">001</span>
          <input
            type="range"
            min="1"
            max={totalFrames}
            value={currentFrame}
            onChange={(e) => {
              setCurrentFrame(parseInt(e.target.value));
              setIsPlaying(false);
            }}
            className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />
          <span className="text-[10px] text-slate-400">{String(totalFrames).padStart(3, '0')}</span>
        </div>

      </div>

    </div>
  );
};
