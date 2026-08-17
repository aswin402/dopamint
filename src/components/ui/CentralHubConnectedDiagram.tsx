import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ConnectedNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
  yOffset: number; // -1 (top), 0 (middle), 1 (bottom)
}

export const CentralHubConnectedDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const leftNodes = [
    {
      id: 'gdrive',
      name: 'Google Drive',
      label: 'Files & Storage',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.01 1.99l-6.5 11.26 3.75 6.5 6.5-11.26-3.75-6.5zm-1.02 11.75l-3.75-6.5h13.52l3.75 6.5H10.99zm-4.74 1.74l3.75 6.52H23.5l-3.75-6.52H6.25z" fill="#000" />
        </svg>
      ),
    },
    {
      id: 'notion',
      name: 'Notion',
      label: 'Workspace Docs',
      icon: (
        <span className="font-serif font-black text-black text-base">N</span>
      ),
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      label: 'Client Chat',
      icon: (
        <span className="font-mono font-bold text-black text-xs">WA</span>
      ),
    },
  ];

  const rightNodes = [
    {
      id: 'gdocs',
      name: 'Google Docs',
      label: 'Auto Drafting',
      icon: (
        <span className="font-mono font-bold text-black text-xs">DOC</span>
      ),
    },
    {
      id: 'zapier',
      name: 'Zapier',
      label: '5,000+ APIs',
      icon: (
        <span className="font-mono font-bold text-black text-xs">_zap</span>
      ),
    },
    {
      id: 'slack',
      name: 'Slack',
      label: 'Internal Comms',
      icon: (
        <span className="font-mono font-bold text-black text-xs">#SL</span>
      ),
    },
  ];

  return (
    <div className={`relative w-full max-w-4xl mx-auto rounded-[2.5rem] bg-black p-6 sm:p-12 overflow-hidden shadow-2xl border border-neutral-800 ${className}`}>
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Connecting Bezier Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 800 400"
      >
        <defs>
          <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="lineGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Left Bezier Connectors to Center (400, 200) */}
        {/* Top-Left: from (120, 80) -> (400, 200) */}
        <path
          d="M 120 80 C 260 80, 280 200, 400 200"
          fill="none"
          stroke="url(#lineGradLeft)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
        />
        {/* Mid-Left: from (120, 200) -> (400, 200) */}
        <path
          d="M 120 200 L 400 200"
          fill="none"
          stroke="url(#lineGradLeft)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Bottom-Left: from (120, 320) -> (400, 200) */}
        <path
          d="M 120 320 C 260 320, 280 200, 400 200"
          fill="none"
          stroke="url(#lineGradLeft)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
        />

        {/* Right Bezier Connectors from Center (400, 200) */}
        {/* Top-Right: from (400, 200) -> (680, 80) */}
        <path
          d="M 400 200 C 520 200, 540 80, 680 80"
          fill="none"
          stroke="url(#lineGradRight)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
        />
        {/* Mid-Right: from (400, 200) -> (680, 200) */}
        <path
          d="M 400 200 L 680 200"
          fill="none"
          stroke="url(#lineGradRight)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Bottom-Right: from (400, 200) -> (680, 320) */}
        <path
          d="M 400 200 C 520 200, 540 320, 680 320"
          fill="none"
          stroke="url(#lineGradRight)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
        />
      </svg>

      {/* Grid Layout: Left Nodes, Center Hub, Right Nodes */}
      <div className="relative z-10 grid grid-cols-3 items-center min-h-[360px]">
        
        {/* Left Nodes Column */}
        <div className="flex flex-col justify-between h-full py-4 space-y-12">
          {leftNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered ? 'scale-110 ring-4 ring-white/30' : 'group-hover:scale-105'
                  }`}
                >
                  {node.icon}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-white text-xs font-bold font-sans">{node.name}</div>
                  <div className="text-neutral-400 text-[10px] font-mono">{node.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center DopaMint Hub */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            {/* Outer animated ring */}
            <div className="absolute inset-0 -m-3 rounded-full border border-white/30 animate-ping opacity-25 pointer-events-none" />
            <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white text-black flex items-center justify-center shadow-2xl ring-4 ring-white/20">
              <div className="text-center">
                <div className="font-serif italic font-black text-2xl sm:text-3xl text-black">D</div>
                <div className="text-[8px] font-mono font-bold tracking-widest uppercase text-neutral-600">HUB</div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-xs font-mono font-bold text-white px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-700">
              DopaMint Core
            </span>
          </div>
        </div>

        {/* Right Nodes Column */}
        <div className="flex flex-col justify-between h-full py-4 space-y-12 items-end">
          {rightNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="flex items-center justify-end gap-3 cursor-pointer group"
              >
                <div className="hidden sm:block text-right">
                  <div className="text-white text-xs font-bold font-sans">{node.name}</div>
                  <div className="text-neutral-400 text-[10px] font-mono">{node.label}</div>
                </div>
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered ? 'scale-110 ring-4 ring-white/30' : 'group-hover:scale-105'
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
