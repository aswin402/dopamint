import React from 'react';
import { CryptoLogosMarquee } from './CryptoLogosMarquee';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="ecosystem" className="relative w-full bg-[#f3f2e6] text-[#141820] overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="w-full relative z-10">
        <CryptoLogosMarquee />
      </div>
    </section>
  );
};
