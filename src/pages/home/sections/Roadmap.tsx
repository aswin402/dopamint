import React from 'react';
import { CryptoLogosMarquee } from './CryptoLogosMarquee';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="supported-networks" className="relative w-full bg-[#f3f2e6] text-[#141820] overflow-hidden select-none py-8 sm:py-12 lg:py-14">
      <div className="w-full relative z-10 max-w-7xl mx-auto">
        <CryptoLogosMarquee />
      </div>
    </section>
  );
};
