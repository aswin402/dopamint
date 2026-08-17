import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ConnectedNode {
  id: string;
  name: string;
  label: string;
  status: string;
  side: 'left' | 'right';
  iconBg: string;
  pathId: string;
  icon: React.ReactNode;
}

export const CentralHubConnectedDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Official Brand SVG Icons
  const BrandIcons = {
    gdrive: (
      <svg viewBox="0 0 87.3 78" className="w-5 h-5">
        <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
        <path d="M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A8.9 8.9 0 0 0 0 53h27.5z" fill="#00ac47"/>
        <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 10.15z" fill="#ea4335"/>
        <path d="M43.65 25h27.5c0-1.55-.4-3.1-1.2-4.5l-7.65-13.25c-.8-1.4-1.95-2.5-3.3-3.3z" fill="#00832d"/>
        <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2z" fill="#2684fc"/>
        <path d="M73.4 25H43.65l13.75 23.8h29.9c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-black">
        <path d="M6.3 12.8c4.1 3.2 5.5 3.8 14 3.3l57.7-4.2c2.1-.2 1.4-2.1 1-2.6l-5.7-7.9c-1.8-2.5-4.3-3.4-7.5-3.2L12.5 2.1C8.3 2.4 6 4.3 3.9 7.4L.7 12.1c-.9 1.4-.2 2.6 1.4 2.8 1.4.2 3-.7 4.2-2.1zm84.4 7.6l-59 4.2c-4.2.3-5.2 2-5.2 5.3v58.2c0 4.1 2.2 6.5 6.7 6.2l59.3-4.2c4.5-.3 5.4-3.2 5.4-6.8V25.7c0-3.6-2.5-5.6-7.2-5.3zm-10.4 63.8l-12.7.9-18.7-30.8v28.9l-8.6.6V30.9l13.7-1 18.2 29.8V32.4l8.1-.6v51.8z"/>
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84a8.19 8.19 0 0 1-5.83 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.39c0-4.55 3.7-8.24 8.22-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31"/>
      </svg>
    ),
    gdocs: (
      <svg viewBox="0 0 192 192" className="w-5 h-5">
        <path d="M142 0H50C39 0 30 9 30 20v152c0 11 9 20 20 20h92c11 0 20-9 20-20V20c0-11-9-20-20-20z" fill="#4285F4"/>
        <path d="M142 0l20 20h-20V0z" fill="#A1C2FA"/>
        <path d="M162 48V20h-20v28h20z" fill="#70A0F8"/>
        <path d="M58 84h76v12H58zm0 24h76v12H58zm0 24h52v12H58z" fill="#FFF"/>
      </svg>
    ),
    zapier: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF4F00]">
        <path d="M13.2 0H10.8v8.4H2.4v2.4h8.4V24h2.4v-8.4h8.4v-2.4h-8.4V0z"/>
      </svg>
    ),
    slack: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
      </svg>
    ),
  };

  const leftNodes: ConnectedNode[] = [
    {
      id: 'gdrive',
      name: 'Google Drive',
      label: 'Files & Storage',
      status: 'OAUTH2 · READ/WRITE',
      side: 'left',
      iconBg: '#ffffff',
      pathId: 'path-left-top',
      icon: BrandIcons.gdrive,
    },
    {
      id: 'notion',
      name: 'Notion',
      label: 'Workspace Docs',
      status: 'WEBHOOK · REALTIME',
      side: 'left',
      iconBg: '#ffffff',
      pathId: 'path-left-mid',
      icon: BrandIcons.notion,
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      label: 'Client Chat',
      status: 'E2E VERIFIED · BOT',
      side: 'left',
      iconBg: '#ffffff',
      pathId: 'path-left-bot',
      icon: BrandIcons.whatsapp,
    },
  ];

  const rightNodes: ConnectedNode[] = [
    {
      id: 'gdocs',
      name: 'Google Docs',
      label: 'Auto Drafting',
      status: 'STREAMING · 14ms',
      side: 'right',
      iconBg: '#ffffff',
      pathId: 'path-right-top',
      icon: BrandIcons.gdocs,
    },
    {
      id: 'zapier',
      name: 'Zapier',
      label: '5,000+ Triggers',
      status: 'MCP PROTOCOL · LIVE',
      side: 'right',
      iconBg: '#ffffff',
      pathId: 'path-right-mid',
      icon: BrandIcons.zapier,
    },
    {
      id: 'slack',
      name: 'Slack',
      label: 'Team Dispatch',
      status: 'EVENTS API · READY',
      side: 'right',
      iconBg: '#ffffff',
      pathId: 'path-right-bot',
      icon: BrandIcons.slack,
    },
  ];

  return (
    <div className={`relative w-full max-w-5xl mx-auto rounded-[2.5rem] bg-[#0c0e12] p-6 sm:p-12 overflow-hidden shadow-2xl border border-neutral-800/90 select-none ${className}`}>
      
      {/* Background Architectural Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d_1px,transparent_1px),linear-gradient(to_bottom,#1f242d_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
      
      {/* Subtle Central Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* SVG Connecting Bezier Pathways */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 900 420"
      >
        <defs>
          {/* Active Gradient for Left Pathways */}
          <linearGradient id="glowLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Active Gradient for Right Pathways */}
          <linearGradient id="glowRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* --- LEFT PATHS to Center (450, 210) --- */}
        
        {/* 1. Top Left: Google Drive (140, 80) -> (450, 210) */}
        <path
          id="path-left-top"
          d="M 140 80 C 280 80, 310 210, 450 210"
          fill="none"
          stroke={hoveredNode === 'gdrive' ? 'url(#glowLeft)' : '#ffffff'}
          strokeOpacity={hoveredNode === 'gdrive' ? 1 : 0.28}
          strokeWidth={hoveredNode === 'gdrive' ? '2.5' : '1.5'}
          strokeDasharray={hoveredNode === 'gdrive' ? 'none' : '4 6'}
          className="transition-all duration-300"
        />

        {/* 2. Mid Left: Notion (160, 210) -> (450, 210) */}
        <path
          id="path-left-mid"
          d="M 160 210 L 450 210"
          fill="none"
          stroke={hoveredNode === 'notion' ? 'url(#glowLeft)' : '#ffffff'}
          strokeOpacity={hoveredNode === 'notion' ? 1 : 0.28}
          strokeWidth={hoveredNode === 'notion' ? '2.5' : '1.5'}
          strokeDasharray={hoveredNode === 'notion' ? 'none' : '4 6'}
          className="transition-all duration-300"
        />

        {/* 3. Bot Left: WhatsApp (140, 340) -> (450, 210) */}
        <path
          id="path-left-bot"
          d="M 140 340 C 280 340, 310 210, 450 210"
          fill="none"
          stroke={hoveredNode === 'whatsapp' ? 'url(#glowLeft)' : '#ffffff'}
          strokeOpacity={hoveredNode === 'whatsapp' ? 1 : 0.28}
          strokeWidth={hoveredNode === 'whatsapp' ? '2.5' : '1.5'}
          strokeDasharray={hoveredNode === 'whatsapp' ? 'none' : '4 6'}
          className="transition-all duration-300"
        />

        {/* --- RIGHT PATHS from Center (450, 210) --- */}
        
        {/* 4. Top Right: Google Docs (450, 210) -> (760, 80) */}
        <path
          id="path-right-top"
          d="M 450 210 C 590 210, 620 80, 760 80"
          fill="none"
          stroke={hoveredNode === 'gdocs' ? 'url(#glowRight)' : '#ffffff'}
          strokeOpacity={hoveredNode === 'gdocs' ? 1 : 0.28}
          strokeWidth={hoveredNode === 'gdocs' ? '2.5' : '1.5'}
          strokeDasharray={hoveredNode === 'gdocs' ? 'none' : '4 6'}
          className="transition-all duration-300"
        />

        {/* 5. Mid Right: Zapier (450, 210) -> (740, 210) */}
        <path
          id="path-right-mid"
          d="M 450 210 L 740 210"
          fill="none"
          stroke={hoveredNode === 'zapier' ? 'url(#glowRight)' : '#ffffff'}
          strokeOpacity={hoveredNode === 'zapier' ? 1 : 0.28}
          strokeWidth={hoveredNode === 'zapier' ? '2.5' : '1.5'}
          strokeDasharray={hoveredNode === 'zapier' ? 'none' : '4 6'}
          className="transition-all duration-300"
        />

        {/* 6. Bot Right: Slack (450, 210) -> (760, 340) */}
        <path
          id="path-right-bot"
          d="M 450 210 C 590 210, 620 340, 760 340"
          fill="none"
          stroke={hoveredNode === 'slack' ? 'url(#glowRight)' : '#ffffff'}
          strokeOpacity={hoveredNode === 'slack' ? 1 : 0.28}
          strokeWidth={hoveredNode === 'slack' ? '2.5' : '1.5'}
          strokeDasharray={hoveredNode === 'slack' ? 'none' : '4 6'}
          className="transition-all duration-300"
        />

        {/* Animated Traveling Data Pulses Across All 6 Paths */}
        <circle r="3.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M 140 80 C 280 80, 310 210, 450 210"
          />
        </circle>
        
        <circle r="3.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
          <animateMotion
            dur="2.8s"
            repeatCount="indefinite"
            path="M 160 210 L 450 210"
          />
        </circle>
        
        <circle r="3.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M 140 340 C 280 340, 310 210, 450 210"
          />
        </circle>
        
        <circle r="3.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
          <animateMotion
            dur="3.0s"
            repeatCount="indefinite"
            path="M 450 210 C 590 210, 620 80, 760 80"
          />
        </circle>
        
        <circle r="3.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
          <animateMotion
            dur="2.6s"
            repeatCount="indefinite"
            path="M 450 210 L 740 210"
          />
        </circle>
        
        <circle r="3.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
          <animateMotion
            dur="3.4s"
            repeatCount="indefinite"
            path="M 450 210 C 590 210, 620 340, 760 340"
          />
        </circle>
      </svg>

      {/* Main Grid: Left Nodes - Center Hub - Right Nodes */}
      <div className="relative z-10 grid grid-cols-12 items-center min-h-[380px] gap-2">
        
        {/* Left Column: 3 Nodes */}
        <div className="col-span-4 flex flex-col justify-between h-full py-2 space-y-8 sm:space-y-12">
          {leftNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="flex items-center gap-3.5 cursor-pointer group w-fit"
              >
                {/* Node Icon Circle */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-neutral-300 flex items-center justify-center shadow-lg transition-all duration-300 shrink-0 ${
                    isHovered
                      ? 'scale-115 ring-4 ring-white/40 shadow-[0_0_24px_rgba(255,255,255,0.4)]'
                      : 'group-hover:scale-105 group-hover:border-white'
                  }`}
                >
                  {node.icon}
                </div>

                {/* Node Text & Telemetry Badge */}
                <div className="text-left">
                  <div className="text-white text-xs sm:text-sm font-bold font-sans tracking-tight group-hover:text-white transition-colors">
                    {node.name}
                  </div>
                  <div className="text-neutral-400 text-[10px] font-mono flex items-center gap-1.5 mt-0.5">
                    <span>{node.label}</span>
                    {isHovered && (
                      <span className="hidden md:inline px-1.5 py-0.2 rounded bg-neutral-800 text-white font-mono text-[8px] font-bold animate-pulse">
                        {node.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Column: DopaMint Core Hub */}
        <div className="col-span-4 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            
            {/* Concentric Radar Beacon Rings */}
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-white/10 animate-ping opacity-20 pointer-events-none" />
            <div className="absolute w-28 h-28 sm:w-34 sm:h-34 rounded-full border border-dashed border-white/20 animate-spin [animation-duration:24s] pointer-events-none" />
            
            {/* Central Solid Hub Badge */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.25)] ring-4 ring-white/20 cursor-pointer"
            >
              <div className="text-center">
                <div className="font-serif italic font-black text-3xl sm:text-4xl text-black leading-none">
                  D
                </div>
                <div className="text-[8px] font-mono font-black tracking-widest uppercase text-neutral-600 mt-0.5">
                  HUB
                </div>
              </div>
            </motion.div>

          </div>

          {/* Central Live Badge */}
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono font-bold text-white shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>DopaMint Core · Router</span>
            </span>
          </div>
        </div>

        {/* Right Column: 3 Nodes */}
        <div className="col-span-4 flex flex-col justify-between h-full py-2 space-y-8 sm:space-y-12 items-end">
          {rightNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="flex items-center justify-end gap-3.5 cursor-pointer group w-fit ml-auto"
              >
                {/* Node Text & Telemetry Badge */}
                <div className="text-right">
                  <div className="text-white text-xs sm:text-sm font-bold font-sans tracking-tight group-hover:text-white transition-colors">
                    {node.name}
                  </div>
                  <div className="text-neutral-400 text-[10px] font-mono flex items-center justify-end gap-1.5 mt-0.5">
                    {isHovered && (
                      <span className="hidden md:inline px-1.5 py-0.2 rounded bg-neutral-800 text-white font-mono text-[8px] font-bold animate-pulse">
                        {node.status}
                      </span>
                    )}
                    <span>{node.label}</span>
                  </div>
                </div>

                {/* Node Icon Circle */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-neutral-300 flex items-center justify-center shadow-lg transition-all duration-300 shrink-0 ${
                    isHovered
                      ? 'scale-115 ring-4 ring-white/40 shadow-[0_0_24px_rgba(255,255,255,0.4)]'
                      : 'group-hover:scale-105 group-hover:border-white'
                  }`}
                >
                  {node.icon}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
