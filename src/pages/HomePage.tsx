import React from 'react';
import { RenaissanceNavbar } from '../components/renaissance/RenaissanceNavbar';
import { RenaissanceHero } from '../components/renaissance/RenaissanceHero';
import { RenaissanceRealAsks } from '../components/renaissance/RenaissanceRealAsks';
import { RenaissanceAgentRoster } from '../components/renaissance/RenaissanceAgentRoster';
import { RenaissanceAuthority } from '../components/renaissance/RenaissanceAuthority';
import { RenaissanceEvidence } from '../components/renaissance/RenaissanceEvidence';
import { RenaissanceMemoryWallet } from '../components/renaissance/RenaissanceMemoryWallet';
import { BurnTransition } from '../components/ui/BurnTransition';
import divBurnOutImg from '../assets/Div_Burn_out_image.png';

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f7f3ef] text-[#141820] font-sans antialiased overflow-x-hidden selection:bg-[#e5ddd4] selection:text-[#141820]">
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

        {/* 4. Authority: Trust Layer Sandbox */}
        <RenaissanceAuthority />

        {/* 5 & 6. Long Section with Div_Burn_out_image.png Background (Evidence + Memory Wallet / The Floor) */}
        <div className="relative w-full overflow-hidden bg-[#f7f3ef]">
          {/* Top Burn Transition Effect */}
          <div className="absolute top-0 inset-x-0 h-56 sm:h-72 md:h-96 lg:h-[420px] pointer-events-none z-20">
            <BurnTransition
              color="#f7f3ef"
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

          {/* Div_Burn_out_image.png Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <img
              src={divBurnOutImg}
              alt="Burn out background"
              className="w-full h-full object-cover object-top select-none"
            />
          </div>

          <div className="relative z-10">
            {/* Part 1: Cryptographic Evidence Log */}
            <RenaissanceEvidence />

            {/* Part 2: The Floor & Memory Wallet */}
            <RenaissanceMemoryWallet />
          </div>

          {/* Bottom Burn Transition Effect */}
          <div className="absolute bottom-0 inset-x-0 h-48 sm:h-64 md:h-80 pointer-events-none z-20">
            <BurnTransition
              color="#f7f3ef"
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
      </main>
    </div>
  );
}

export default HomePage;
