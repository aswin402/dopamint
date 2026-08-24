import React from 'react';
import { RenaissanceNavbar } from '../components/renaissance/RenaissanceNavbar';
import { RenaissanceHero } from '../components/renaissance/RenaissanceHero';
import { RenaissanceRealAsks } from '../components/renaissance/RenaissanceRealAsks';
import { RenaissanceAgentRoster } from '../components/renaissance/RenaissanceAgentRoster';
import { RenaissanceAuthority } from '../components/renaissance/RenaissanceAuthority';
import { RenaissanceEvidence } from '../components/renaissance/RenaissanceEvidence';
import { RenaissanceMemoryWallet } from '../components/renaissance/RenaissanceMemoryWallet';
import { RenaissanceRoadmapSection } from '../components/renaissance/RenaissanceRoadmapSection';
import { RenaissanceFooter } from '../components/renaissance/RenaissanceFooter';
import { BurnTransition } from '../components/ui/BurnTransition';
import divBurnOutImg from '../assets/Div_Burn_out_image.png';

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f3f2e6] text-[#141820] font-sans antialiased overflow-x-hidden selection:bg-[#e5ddd4] selection:text-[#141820]">
      {/* Top Navigation */}
      <RenaissanceNavbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 1. Hero: The Age of AI & Sol iMessage Demo */}
        <RenaissanceHero />

        {/* 2. Real asks, real people */}
        <RenaissanceRealAsks />

        {/* 3. the Dope App: 8 Agent Crew */}
        <RenaissanceAgentRoster />

        {/* 4. The Future of Agents */}
        <RenaissanceAuthority />

        {/* 5 & 6. Long Section with Div_Burn_out_image.png Background (Evidence + Memory Wallet / The Floor) */}
        <div className="relative w-full overflow-hidden bg-[#282a2d]">
          {/* Top Burn Transition Effect */}
          <div className="absolute top-0 inset-x-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none z-20">
            <BurnTransition
              color="#ffffff"
              transitionColor="#FFFFFF"
              noiseScale={2.5}
              noiseIntensity={0.52}
              scrollSensitivity={0.015}
              baseAnimationSpeed={0.08}
              edgeSoftness={0.38}
              bloomIntensity={0.75}
              bloomRadius={0.35}
              parallaxEnabled={true}
              inverted={true}
              movement={{ horizontal: 'center', vertical: 0.5 }}
              className="h-full w-full"
            />
          </div>

          {/* Div_Burn_out_image.png Background — Darkened & Dulled */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src={divBurnOutImg}
              alt="Burn out background"
              className="w-full h-full object-cover object-top select-none brightness-[0.68] contrast-[0.95] saturate-[0.75]"
            />
            {/* Subtle dark tint overlay */}
            <div className="absolute inset-0 bg-[#0a0d0a]/30 pointer-events-none" />
          </div>

          <div className="relative z-10">
            {/* Part 1: Cryptographic Evidence Log */}
            <RenaissanceEvidence />

            {/* Part 2: The Floor & Memory Wallet */}
            <RenaissanceMemoryWallet />
          </div>

          {/* Bottom Burn Transition Effect */}
          <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 md:h-56 lg:h-68 pointer-events-none z-20">
            <BurnTransition
              color="#f3f2e6"
              transitionColor="#FFFFFF"
              noiseScale={2.5}
              noiseIntensity={0.52}
              scrollSensitivity={0.015}
              baseAnimationSpeed={0.08}
              edgeSoftness={0.38}
              bloomIntensity={0.75}
              bloomRadius={0.35}
              parallaxEnabled={true}
              movement={{ horizontal: 'center', vertical: 0.5 }}
              className="h-full w-full"
            />
          </div>
        </div>

        {/* 7. Dopamint Roadmap (Video/Static Transition + Staggered Grid Logo Animation) */}
        <RenaissanceRoadmapSection />

        {/* 8. Footer Section (Give your AI some agency + The Last Supper background) */}
        <RenaissanceFooter />
      </main>
    </div>
  );
}

export default HomePage;
