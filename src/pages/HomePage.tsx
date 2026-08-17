import React from 'react';
import { RenaissanceNavbar } from '../components/renaissance/RenaissanceNavbar';
import { RenaissanceHero } from '../components/renaissance/RenaissanceHero';
import { RenaissanceRealAsks } from '../components/renaissance/RenaissanceRealAsks';
import { RenaissanceAgentRoster } from '../components/renaissance/RenaissanceAgentRoster';
import { RenaissanceAuthority } from '../components/renaissance/RenaissanceAuthority';
import { RenaissanceEvidence } from '../components/renaissance/RenaissanceEvidence';
import { RenaissanceMemoryWallet } from '../components/renaissance/RenaissanceMemoryWallet';
import { RenaissanceOnchain } from '../components/renaissance/RenaissanceOnchain';
import { RenaissanceEcosystem } from '../components/renaissance/RenaissanceEcosystem';
import { RenaissanceEngineering } from '../components/renaissance/RenaissanceEngineering';
import { RenaissanceClosingCta } from '../components/renaissance/RenaissanceClosingCta';

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#ddddd1] text-[#141820] font-sans antialiased overflow-x-hidden selection:bg-[#c8c8ba] selection:text-[#141820]">
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

        {/* 5. Evidence: Ada Kiln Booking & Receipt Chain */}
        <RenaissanceEvidence />

        {/* 6. Memory + agency & Its wallet */}
        <RenaissanceMemoryWallet />

        {/* 7. Onchain actions: Swap, x402, Buy/Sell, Alerts */}
        <RenaissanceOnchain />

        {/* 8. Ecosystem: Any app, any exchange */}
        <RenaissanceEcosystem />

        {/* 9. Engineering: System stack */}
        <RenaissanceEngineering />

        {/* 10. Closing CTA & Footer */}
        <RenaissanceClosingCta />
      </main>
    </div>
  );
}

export default HomePage;
