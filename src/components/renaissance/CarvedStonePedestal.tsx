import React from 'react';
import { motion } from 'framer-motion';

interface CarvedStonePedestalProps {
  className?: string;
}

export const CarvedStonePedestal: React.FC<CarvedStonePedestalProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-end select-none pointer-events-none ${className}`}>
      <motion.svg
        viewBox="0 0 280 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full h-auto drop-shadow-[0_20px_35px_rgba(40,30,20,0.14)]"
      >
        <defs>
          {/* Light Travertine Marble Surface */}
          <linearGradient id="marbleFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f0e6" />
            <stop offset="30%" stopColor="#ede5d5" />
            <stop offset="70%" stopColor="#e2d8c3" />
            <stop offset="100%" stopColor="#d5c8af" />
          </linearGradient>

          {/* Stone Tile Bevel Highlight */}
          <linearGradient id="tileBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#d8ccb6" />
            <stop offset="100%" stopColor="#9e8e75" />
          </linearGradient>

          {/* Chiseled Embossed Bubble Light */}
          <linearGradient id="chiseledBubble" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#fefcf8" />
            <stop offset="40%" stopColor="#eee5d6" />
            <stop offset="85%" stopColor="#d6c9b0" />
            <stop offset="100%" stopColor="#b4a387" />
          </linearGradient>

          {/* Classical Pedestal Stepped Molding Gradient */}
          <linearGradient id="pedestalCap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8a78e" />
            <stop offset="15%" stopColor="#e9e0cf" />
            <stop offset="50%" stopColor="#fbf7ee" />
            <stop offset="85%" stopColor="#e2d7c4" />
            <stop offset="100%" stopColor="#a3927a" />
          </linearGradient>

          {/* Classical Pedestal Shaft Gradient */}
          <linearGradient id="pedestalShaft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a8967e" />
            <stop offset="20%" stopColor="#ded3be" />
            <stop offset="50%" stopColor="#f4ede0" />
            <stop offset="80%" stopColor="#d4c7b0" />
            <stop offset="100%" stopColor="#96856c" />
          </linearGradient>

          {/* Drop Shadows & Inner Relief Filter */}
          <filter id="chiseledDepth" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3d2e1c" floodOpacity="0.25" />
            <feDropShadow dx="-1" dy="-1" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.8" />
          </filter>

          <filter id="tileShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#2a1f14" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* =========================================================================
            1. CLASSICAL STONE CAPITAL & SHAFT (PEDESTAL BASE)
            ========================================================================= */}
        <g id="pedestalBase">
          {/* Main Column Pillar Shaft */}
          <rect x="52" y="202" width="176" height="38" fill="url(#pedestalShaft)" />
          {/* Vertical fluting / stone texture lines */}
          <line x1="72" y1="202" x2="72" y2="240" stroke="#c0b19a" strokeWidth="1.5" opacity="0.6" />
          <line x1="96" y1="202" x2="96" y2="240" stroke="#c0b19a" strokeWidth="1.5" opacity="0.6" />
          <line x1="120" y1="202" x2="120" y2="240" stroke="#c0b19a" strokeWidth="1.5" opacity="0.6" />
          <line x1="140" y1="202" x2="140" y2="240" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
          <line x1="160" y1="202" x2="160" y2="240" stroke="#c0b19a" strokeWidth="1.5" opacity="0.6" />
          <line x1="184" y1="202" x2="184" y2="240" stroke="#c0b19a" strokeWidth="1.5" opacity="0.6" />
          <line x1="208" y1="202" x2="208" y2="240" stroke="#c0b19a" strokeWidth="1.5" opacity="0.6" />

          {/* Stepped Astragal / Necking Ring */}
          <rect x="44" y="196" width="192" height="6" rx="2" fill="url(#pedestalCap)" stroke="#8e7b64" strokeWidth="0.5" />
          
          {/* Curved Echinus Molding */}
          <path
            d="M 38 186 C 40 196, 44 196, 44 196 L 236 196 C 236 196, 240 196, 242 186 Z"
            fill="url(#pedestalCap)"
            stroke="#7e6c56"
            strokeWidth="0.5"
          />

          {/* Main Abacus Table Block */}
          <rect x="30" y="174" width="220" height="12" rx="3" fill="url(#pedestalCap)" stroke="#9c8971" strokeWidth="0.8" />
          <line x1="30" y1="175" x2="250" y2="175" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
          <line x1="30" y1="185" x2="250" y2="185" stroke="#68553e" strokeWidth="1" opacity="0.5" />
        </g>

        {/* =========================================================================
            2. ROUNDED CARVED MARBLE TABLET / TILE
            ========================================================================= */}
        <g id="marbleTablet" filter="url(#tileShadow)">
          {/* Outer Bevel Rim */}
          <rect
            x="58"
            y="12"
            width="164"
            height="164"
            rx="36"
            fill="url(#tileBevel)"
            stroke="#b0a086"
            strokeWidth="1.5"
          />
          
          {/* Recessed Inner Marble Bed */}
          <rect
            x="64"
            y="18"
            width="152"
            height="152"
            rx="30"
            fill="url(#marbleFace)"
            stroke="#918067"
            strokeWidth="1"
          />

          {/* Subtle Marble Surface Veins */}
          <path
            d="M 80 40 Q 110 55 130 50 Q 160 45 190 65"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
          />
          <path
            d="M 75 120 Q 100 135 140 125 Q 180 115 205 140"
            stroke="#c8baa4"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </g>

        {/* =========================================================================
            3. RELIEF-CARVED STONE iMESSAGE SPEECH BUBBLE
            ========================================================================= */}
        <g id="carvedSpeechBubble" filter="url(#chiseledDepth)">
          {/* Outer Relief Shadow Perimeter */}
          <path
            d="M 140 46 C 104 46, 76 72, 76 104 C 76 118, 82 131, 92 141 C 88 152, 82 158, 81 159 C 80 160, 81 162, 83 162 C 95 162, 107 155, 114 150 C 122 153, 131 155, 140 155 C 176 155, 204 129, 204 97 C 204 65, 176 46, 140 46 Z"
            fill="#7a6952"
            opacity="0.35"
          />

          {/* Main 3D Carved Stone Bubble Shape */}
          <path
            d="M 140 44 C 105 44, 78 69, 78 100 C 78 114, 84 127, 94 137 C 90 148, 84 154, 83 155 C 82 156, 83 158, 85 158 C 97 158, 109 151, 116 146 C 124 149, 132 151, 140 151 C 175 151, 202 126, 202 95 C 202 64, 175 44, 140 44 Z"
            fill="url(#chiseledBubble)"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* Inner Chiseled Highlight Rim */}
          <path
            d="M 140 48 C 108 48, 84 71, 84 99 C 84 111, 89 122, 98 131"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Bottom Chiseled Cast Shadow Accent */}
          <path
            d="M 118 144 C 125 146, 132 147, 140 147 C 171 147, 196 124, 196 97"
            stroke="#8c7a62"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>
      </motion.svg>
    </div>
  );
};
