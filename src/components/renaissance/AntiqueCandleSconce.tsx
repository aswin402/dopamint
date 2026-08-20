import React from 'react';
import { motion } from 'framer-motion';

interface AntiqueCandleSconceProps {
  candlesCount?: 2 | 3;
  variant?: 'left' | 'right';
  className?: string;
}

export const AntiqueCandleSconce: React.FC<AntiqueCandleSconceProps> = ({
  candlesCount = 3,
  variant = 'left',
  className = '',
}) => {
  const isRight = variant === 'right';

  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto drop-shadow-[0_15px_30px_rgba(40,25,10,0.18)] ${
          isRight ? 'scale-x-[-1]' : ''
        }`}
      >
        <defs>
          {/* Flame Gradient */}
          <radialGradient id="flameCore" cx="50%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#fff3a1" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#ff9900" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ff4400" stopOpacity="0" />
          </radialGradient>

          {/* Flame Ambient Glow */}
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb700" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#ff8800" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
          </radialGradient>

          {/* Candle Wax Gradient */}
          <linearGradient id="waxGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ebe4d2" />
            <stop offset="35%" stopColor="#fffdf6" />
            <stop offset="75%" stopColor="#ede3cc" />
            <stop offset="100%" stopColor="#c5b597" />
          </linearGradient>

          {/* Antique Brass Gradient */}
          <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8d6e43" />
            <stop offset="25%" stopColor="#d8b26e" />
            <stop offset="50%" stopColor="#9c7a45" />
            <stop offset="75%" stopColor="#e2c27c" />
            <stop offset="100%" stopColor="#5c4323" />
          </linearGradient>

          {/* Brass Highlight */}
          <linearGradient id="brassHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5c4323" />
            <stop offset="45%" stopColor="#f3dd9b" />
            <stop offset="70%" stopColor="#c59f5b" />
            <stop offset="100%" stopColor="#432f17" />
          </linearGradient>

          {/* Shadow Filter */}
          <filter id="candleShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#2a1a08" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* =========================================================================
            1. ORNATE BAROQUE SCROLLS & ARMS (WROUGHT BRASS)
            ========================================================================= */}
        <g filter="url(#candleShadow)">
          {/* Main Central Wall Bracket / Base */}
          <path
            d="M 20 280 C 45 270, 75 285, 95 270 C 115 255, 120 220, 110 190 C 100 160, 70 150, 60 180 C 52 205, 75 225, 90 215 C 100 205, 100 185, 88 180"
            stroke="url(#brassGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lower Acanthus Leaf Curl */}
          <path
            d="M 15 295 C 40 310, 80 300, 95 275 C 105 255, 130 250, 145 265 C 160 280, 150 305, 130 310 C 105 315, 80 300, 65 305"
            stroke="url(#brassHighlight)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Branch Arm (to Candle 1: x=65, y=140) */}
          <path
            d="M 95 240 C 70 230, 50 200, 55 170 C 58 150, 65 142, 65 140"
            stroke="url(#brassGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Center Branch Arm (to Candle 2: x=125, y=110) */}
          <path
            d="M 105 220 C 120 200, 125 160, 125 110"
            stroke="url(#brassGradient)"
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right Branch Arm (to Candle 3: x=185, y=140) */}
          <path
            d="M 115 230 C 145 225, 175 190, 180 160 C 182 150, 185 142, 185 140"
            stroke="url(#brassGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Decorative Floral / Scrolled Accents on Arms */}
          <path
            d="M 50 190 C 35 180, 30 160, 42 150 C 52 142, 62 155, 55 168"
            stroke="url(#brassHighlight)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 155 195 C 175 190, 195 175, 190 155 C 185 142, 170 150, 172 165"
            stroke="url(#brassHighlight)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* =========================================================================
            2. CANDLE HOLDERS / CUPS (BOBÈCHES)
            ========================================================================= */}
        {/* Holder 1 (Left) */}
        <g>
          <ellipse cx="65" cy="140" rx="16" ry="5" fill="url(#brassGradient)" />
          <path d="M 52 140 C 54 152, 76 152, 78 140 Z" fill="url(#brassHighlight)" />
          <ellipse cx="65" cy="148" rx="8" ry="3" fill="url(#brassGradient)" />
        </g>

        {/* Holder 2 (Center) */}
        <g>
          <ellipse cx="125" cy="110" rx="18" ry="6" fill="url(#brassGradient)" />
          <path d="M 110 110 C 112 124, 138 124, 140 110 Z" fill="url(#brassHighlight)" />
          <ellipse cx="125" cy="120" rx="9" ry="3.5" fill="url(#brassGradient)" />
        </g>

        {/* Holder 3 (Right - if 3 candles) */}
        {candlesCount === 3 && (
          <g>
            <ellipse cx="185" cy="140" rx="16" ry="5" fill="url(#brassGradient)" />
            <path d="M 172 140 C 174 152, 196 152, 198 140 Z" fill="url(#brassHighlight)" />
            <ellipse cx="185" cy="148" rx="8" ry="3" fill="url(#brassGradient)" />
          </g>
        )}

        {/* =========================================================================
            3. IVORY CANDLE PILLARS & WAX DRIPS
            ========================================================================= */}
        {/* Candle 1 (Left) */}
        <g>
          <rect x="57" y="75" width="16" height="65" rx="2" fill="url(#waxGradient)" />
          <ellipse cx="65" cy="75" rx="8" ry="2.5" fill="#f8f4e8" />
          {/* Wax Drips */}
          <path d="M 59 75 Q 60 90 58 96 Q 56 102 59 100 Q 61 85 61 75 Z" fill="#fffef8" opacity="0.9" />
          <path d="M 70 75 Q 71 88 73 94 Q 74 98 72 96 Q 69 82 69 75 Z" fill="#fffef8" opacity="0.85" />
          {/* Wick */}
          <line x1="65" y1="75" x2="65" y2="65" stroke="#3d2817" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Candle 2 (Center - Taller) */}
        <g>
          <rect x="117" y="38" width="16" height="72" rx="2" fill="url(#waxGradient)" />
          <ellipse cx="125" cy="38" rx="8" ry="2.5" fill="#f8f4e8" />
          {/* Wax Drips */}
          <path d="M 119 38 Q 118 55 120 62 Q 121 66 119 64 Q 117 50 117 38 Z" fill="#fffef8" opacity="0.9" />
          <path d="M 129 38 Q 131 52 128 60 Q 127 65 129 63 Q 132 48 132 38 Z" fill="#fffef8" opacity="0.85" />
          {/* Wick */}
          <line x1="125" y1="38" x2="125" y2="28" stroke="#3d2817" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Candle 3 (Right) */}
        {candlesCount === 3 && (
          <g>
            <rect x="177" y="75" width="16" height="65" rx="2" fill="url(#waxGradient)" />
            <ellipse cx="185" cy="75" rx="8" ry="2.5" fill="#f8f4e8" />
            {/* Wax Drips */}
            <path d="M 179 75 Q 180 87 178 93 Q 176 97 179 95 Q 181 83 181 75 Z" fill="#fffef8" opacity="0.9" />
            {/* Wick */}
            <line x1="185" y1="75" x2="185" y2="65" stroke="#3d2817" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* =========================================================================
            4. ANIMATED FLICKERING FLAMES & RADIANT GLOWS
            ========================================================================= */}
        {/* Flame 1 (Left) */}
        <g>
          <circle cx="65" cy="54" r="28" fill="url(#flameGlow)" className="animate-pulse" />
          <motion.path
            d="M 65 65 C 60 62, 59 55, 62 48 C 64 42, 65 36, 65 36 C 65 36, 66 42, 68 48 C 71 55, 70 62, 65 65 Z"
            fill="url(#flameCore)"
            animate={{
              scaleY: [1, 1.12, 0.95, 1.08, 1],
              scaleX: [1, 0.92, 1.05, 0.96, 1],
              rotate: [-1, 2, -2, 1, -1],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '65px 65px' }}
          />
        </g>

        {/* Flame 2 (Center) */}
        <g>
          <circle cx="125" cy="18" r="32" fill="url(#flameGlow)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <motion.path
            d="M 125 28 C 120 25, 119 18, 122 11 C 124 5, 125 0, 125 0 C 125 0, 126 5, 128 11 C 131 18, 130 25, 125 28 Z"
            fill="url(#flameCore)"
            animate={{
              scaleY: [1.05, 0.96, 1.15, 0.98, 1.05],
              scaleX: [0.95, 1.04, 0.92, 1.02, 0.95],
              rotate: [1, -2, 1.5, -1, 1],
            }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            style={{ transformOrigin: '125px 28px' }}
          />
        </g>

        {/* Flame 3 (Right) */}
        {candlesCount === 3 && (
          <g>
            <circle cx="185" cy="54" r="28" fill="url(#flameGlow)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <motion.path
              d="M 185 65 C 180 62, 179 55, 182 48 C 184 42, 185 36, 185 36 C 185 36, 186 42, 188 48 C 191 55, 190 62, 185 65 Z"
              fill="url(#flameCore)"
              animate={{
                scaleY: [0.98, 1.1, 0.94, 1.06, 0.98],
                scaleX: [1.02, 0.94, 1.06, 0.97, 1.02],
                rotate: [2, -1.5, 2, -1, 2],
              }}
              transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              style={{ transformOrigin: '185px 65px' }}
            />
          </g>
        )}
      </svg>
    </div>
  );
};
