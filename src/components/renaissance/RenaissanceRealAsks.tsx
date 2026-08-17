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
import profile8 from '../../assets/Profiles/Profile_ (8).png';

export const RenaissanceRealAsks: React.FC = () => {
  return (
    <section id="asks" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none relative z-20 bg-[#f7f3ef] overflow-hidden">
      
      {/* Title */}
      <div className="text-center w-full max-w-6xl mx-auto mb-14 sm:mb-18">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#2d3e32] select-none font-serif font-normal">
          What <span className="font-serif italic font-bold text-[#142218]">people</span> actually ask for.
        </h2>
      </div>

      {/* 2-Column Content Grid: Woman Artwork on Left + Floating Cards Canvas on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
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

        {/* Right Column: Floating Interactive Thoughts & Preview Cards Canvas */}
        <div className="lg:col-span-7 relative w-full h-[580px] sm:h-[640px] lg:h-[700px] select-none">
          
          {/* Card 1: Top Center */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-[12%] sm:left-[18%] max-w-[280px] sm:max-w-[310px] flex items-start gap-2.5 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile1} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1.5">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                The text was tiny so I had to zoom in, and then buttons were hard to press accurately
              </p>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px]">
                <span className="px-2 py-0.5 rounded-md bg-[#eafaf1] text-[#22864f] font-bold border border-[#c4ebd3]">
                  Current theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#f4effe] text-[#6b38c2] font-bold border border-[#dfd0fb]">
                  Mobile experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Top Right (Subtle Faded Background Accent) */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-2 right-[2%] sm:right-[6%] max-w-[170px] opacity-35 blur-[0.4px] hidden sm:flex items-center gap-2 z-10 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-800 overflow-hidden shrink-0">
              <img src={profile7} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 rounded-xl bg-white/90 border border-neutral-200 shadow-sm space-y-1">
              <div className="h-2 w-16 bg-neutral-300 rounded" />
              <div className="flex gap-1">
                <span className="h-1.5 w-6 bg-emerald-200 rounded" />
                <span className="h-1.5 w-6 bg-purple-200 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Mid-Left */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-[22%] sm:top-[24%] left-0 max-w-[200px] sm:max-w-[230px] flex items-start gap-2 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile2} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1.5">
              <p className="text-[10px] sm:text-[11px] text-neutral-800 font-sans leading-snug">
                Moving around the site was much easier than
              </p>
              <div className="flex flex-wrap items-center gap-1 font-mono text-[8.5px]">
                <span className="px-1.5 py-0.5 rounded-md bg-[#eafaf1] text-[#22864f] font-bold border border-[#c4ebd3]">
                  Current theme
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-[#f4effe] text-[#6b38c2] font-bold border border-[#dfd0fb]">
                  Navigation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Center-Left Speech Card */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="absolute top-[21%] sm:top-[23%] left-[22%] sm:left-[26%] max-w-[200px] sm:max-w-[230px] flex items-start gap-2 z-30 hover:scale-105 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile3} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1.5">
              <p className="text-[10px] sm:text-[11px] text-neutral-800 font-sans leading-snug">
                Checkout flow and product grid loaded instantly
              </p>
              <div className="flex flex-wrap items-center gap-1 font-mono text-[8.5px]">
                <span className="px-1.5 py-0.5 rounded-md bg-[#eafaf1] text-[#22864f] font-bold border border-[#c4ebd3]">
                  Current theme
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-[#edf5ff] text-[#2463eb] font-bold border border-[#cbe0fc]">
                  Speed
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Center-Right Speech Card */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="absolute top-[21%] sm:top-[23%] left-[48%] sm:left-[52%] max-w-[200px] sm:max-w-[230px] flex items-start gap-2 z-30 hover:scale-105 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile8} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1.5">
              <p className="text-[10px] sm:text-[11px] text-neutral-800 font-sans leading-snug">
                Loved the smooth animation when filtering categories
              </p>
              <div className="flex flex-wrap items-center gap-1 font-mono text-[8.5px]">
                <span className="px-1.5 py-0.5 rounded-md bg-[#f4effe] text-[#6b38c2] font-bold border border-[#dfd0fb]">
                  Unpublished
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-[#edf5ff] text-[#2463eb] font-bold border border-[#cbe0fc]">
                  Interactions
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Mid-Right */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute top-[22%] sm:top-[24%] right-0 max-w-[190px] sm:max-w-[220px] flex items-start gap-2 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile4} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1">
              <p className="text-[10px] sm:text-[10.5px] text-neutral-800 font-sans leading-snug">
                I found exactly what I was looking for within seconds
              </p>
              <div className="flex flex-wrap items-center gap-1 font-mono text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-[#f4effe] text-[#6b38c2] font-bold border border-[#dfd0fb]">
                  Unpublished theme
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#edf5ff] text-[#2463eb] font-bold border border-[#cbe0fc]">
                  Product discovery
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 7: Lower Left */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4.0, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="absolute bottom-[20%] sm:bottom-[22%] left-[1%] sm:left-[3%] max-w-[240px] sm:max-w-[270px] flex items-start gap-2.5 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile5} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1.5">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                I loved seeing actual customer photos in the reviews section
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[8.5px]">
                <span className="px-2 py-0.5 rounded-md bg-[#eafaf1] text-[#22864f] font-bold border border-[#c4ebd3]">
                  Current theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#f4effe] text-[#6b38c2] font-bold border border-[#dfd0fb]">
                  Trust signals
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 8: Bottom Right (Subtle Faded Background Accent) */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="absolute bottom-[20%] right-[6%] sm:right-[10%] max-w-[140px] opacity-35 blur-[0.4px] hidden sm:flex items-center gap-2 z-10 pointer-events-none"
          >
            <div className="w-7 h-7 rounded-lg bg-neutral-800 overflow-hidden shrink-0">
              <img src={profile3} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-1.5 rounded-xl bg-white/90 border border-neutral-200 shadow-sm space-y-1">
              <div className="h-1.5 w-12 bg-neutral-300 rounded" />
              <div className="flex gap-1">
                <span className="h-1 w-4 bg-emerald-200 rounded" />
                <span className="h-1 w-4 bg-purple-200 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Card 9: Bottom Center */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
            className="absolute bottom-2 sm:bottom-4 left-[28%] sm:left-[34%] max-w-[270px] sm:max-w-[310px] flex items-start gap-2.5 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-900 overflow-hidden shadow-md shrink-0 border border-neutral-200">
              <img src={profile6} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg space-y-1.5">
              <p className="text-[11px] sm:text-xs text-neutral-800 font-sans leading-snug">
                Finding the "About us" page was difficult, consider making it easier to find
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[8.5px]">
                <span className="px-2 py-0.5 rounded-md bg-[#f4effe] text-[#6b38c2] font-bold border border-[#dfd0fb]">
                  Unpublished theme
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#edf5ff] text-[#2463eb] font-bold border border-[#cbe0fc]">
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
