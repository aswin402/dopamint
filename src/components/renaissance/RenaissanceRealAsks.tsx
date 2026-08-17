import React from 'react';
import { motion } from 'framer-motion';

import divImg from '../../assets/div_img.png';

import profile1 from '../../assets/Profiles/Profile_ (1).png';
import profile2 from '../../assets/Profiles/Profile_ (2).png';
import profile3 from '../../assets/Profiles/Profile_ (3).png';
import profile4 from '../../assets/Profiles/Profile_ (4).png';
import profile5 from '../../assets/Profiles/Profile_ (5).png';
import profile6 from '../../assets/Profiles/Profile_ (6).png';
import profile7 from '../../assets/Profiles/Profile_ (7).png';

import avatarAiko from '../../assets/avatars/aiko.jpg';
import avatarAria from '../../assets/avatars/aria.jpg';
import avatarCody from '../../assets/avatars/cody.jpg';
import avatarLuna from '../../assets/avatars/luna.jpg';

export const RenaissanceRealAsks: React.FC = () => {
  return (
    <section id="asks" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none relative z-20 bg-[#f7f3ef] overflow-hidden">
      
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#334638] select-none font-serif font-normal">
          What <span className="font-serif italic font-normal text-[#405445]">people</span> actually ask for.
        </h2>
      </div>

      {/* 2-Column Content Grid: Woman Artwork on Left + Floating Cards Canvas on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        
        {/* Left Column: Renaissance Woman Artwork looking to the right */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]">
            <img
              src={divImg}
              alt="What people actually ask for"
              className="w-full h-auto object-contain select-none drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01] block"
            />
          </div>
        </div>

        {/* Right Column: Floating Interactive Thoughts & Preview Cards */}
        <div className="lg:col-span-7 relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center">
          
          {/* Card 1: Top Center */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 sm:top-2 left-4 sm:left-12 max-w-[280px] sm:max-w-[320px] p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl flex items-start gap-3 z-20 hover:scale-105 transition-transform"
          >
            <img
              src={profile1}
              alt="User"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover bg-neutral-100 shrink-0"
            />
            <div className="space-y-2">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                The text was tiny so I had to zoom in, and then buttons were hard to press accurately
              </p>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px]">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Current theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-bold border border-purple-200">
                  Mobile experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mid-Left */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="absolute top-28 sm:top-32 left-0 sm:left-4 max-w-[240px] sm:max-w-[280px] p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-lg flex items-start gap-2.5 z-10 hover:scale-105 transition-transform"
          >
            <img
              src={profile2}
              alt="User"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover bg-neutral-100 shrink-0"
            />
            <div className="space-y-1.5">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                Moving around the site was much easier than
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[9px]">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Current theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-bold border border-purple-200">
                  Navigation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center Visual Preview Cards Pair (Cards 3 & 4) */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="absolute top-44 sm:top-48 left-16 sm:left-24 lg:left-28 flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 z-20"
          >
            {/* Visual Card A */}
            <div className="w-[150px] sm:w-[175px] rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden hover:scale-105 transition-transform">
              <div className="h-20 sm:h-24 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
                <img
                  src={avatarAiko}
                  alt="Pushing Boundaries"
                  className="w-full h-full object-cover opacity-80"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[9px] font-bold text-white font-mono uppercase tracking-wider">
                  PUSHING BOUNDARIES
                </span>
              </div>
              <div className="p-2 sm:p-2.5 space-y-1 font-mono text-[9px]">
                <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 inline-block text-[8px]">
                  Current theme
                </span>
                <div className="font-bold text-black text-[10px]">Pushing Boundaries Hero</div>
                <div className="text-neutral-400 text-[8px]">Horizon 3.0.0</div>
              </div>
            </div>

            {/* Visual Card B */}
            <div className="w-[150px] sm:w-[175px] rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden hover:scale-105 transition-transform">
              <div className="h-20 sm:h-24 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
                <img
                  src={avatarLuna}
                  alt="Art In Motion"
                  className="w-full h-full object-cover opacity-80"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[9px] font-bold text-white font-mono uppercase tracking-wider">
                  DECKS OF VIRTUE
                </span>
              </div>
              <div className="p-2 sm:p-2.5 space-y-1 font-mono text-[9px]">
                <span className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200 inline-block text-[8px]">
                  Unpublished theme
                </span>
                <div className="font-bold text-black text-[10px]">Art in Motion Hero</div>
                <div className="text-neutral-400 text-[8px]">Horizon 3.1.0</div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Mid-Right */}
          <motion.div
            animate={{ y: [7, -7, 7] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute top-36 sm:top-40 right-0 sm:right-4 max-w-[220px] sm:max-w-[260px] p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-lg flex items-start gap-2.5 z-10 hover:scale-105 transition-transform"
          >
            <img
              src={profile4}
              alt="User"
              className="w-8 h-8 rounded-xl object-cover bg-neutral-100 shrink-0"
            />
            <div className="space-y-1.5">
              <p className="text-[10px] sm:text-[11px] text-neutral-800 font-sans leading-snug">
                I found exactly what I was looking for within seconds using search
              </p>
              <div className="flex items-center gap-1 font-mono text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200">
                  Unpublished
                </span>
                <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  Discovery
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Lower Left */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 max-w-[260px] sm:max-w-[300px] p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-lg flex items-start gap-2.5 z-20 hover:scale-105 transition-transform"
          >
            <img
              src={profile5}
              alt="User"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover bg-neutral-100 shrink-0"
            />
            <div className="space-y-1.5">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                I loved seeing actual customer photos in the reviews section
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[9px]">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Current theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-bold border border-purple-200">
                  Trust signals
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 7: Bottom Right */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
            className="absolute bottom-4 sm:bottom-6 right-2 sm:right-10 max-w-[270px] sm:max-w-[310px] p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-lg flex items-start gap-2.5 z-20 hover:scale-105 transition-transform"
          >
            <img
              src={profile6}
              alt="User"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover bg-neutral-100 shrink-0"
            />
            <div className="space-y-1.5">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                Finding the "About us" page was difficult, consider making it easier to find
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[9px]">
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-bold border border-purple-200">
                  Unpublished theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  Navigation
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
