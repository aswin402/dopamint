import React from 'react';
import { RenaissanceNavbar } from '../components/renaissance/RenaissanceNavbar';
import { RenaissanceHero } from '../components/renaissance/RenaissanceHero';
import { RenaissanceWhyWeBuilt } from '../components/renaissance/RenaissanceWhyWeBuilt';
import { RenaissanceAgentRoster } from '../components/renaissance/RenaissanceAgentRoster';
import { RenaissanceTrustSimulator } from '../components/renaissance/RenaissanceTrustSimulator';
import { RenaissanceExecution } from '../components/renaissance/RenaissanceExecution';
import { RenaissanceEvidence } from '../components/renaissance/RenaissanceEvidence';
import { RenaissanceMemory } from '../components/renaissance/RenaissanceMemory';
import { RenaissanceMessaging } from '../components/renaissance/RenaissanceMessaging';
import { RenaissanceVoice } from '../components/renaissance/RenaissanceVoice';
import { RenaissancePayments } from '../components/renaissance/RenaissancePayments';
import { RenaissanceOnchain } from '../components/renaissance/RenaissanceOnchain';
import { RenaissancePrinciples } from '../components/renaissance/RenaissancePrinciples';

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#EBEAE5] text-[#141820] font-sans antialiased overflow-x-hidden selection:bg-[#D3D0C3] selection:text-[#141820]">
      {/* Top Renaissance Editions Header */}
      <RenaissanceNavbar />

      {/* Main Chapter Content Area */}
      <main className="w-full">
        {/* Chapter I: Agents & Renaissance Portal */}
        <RenaissanceHero />

        {/* Chapter II: Why We Built This & Track Record */}
        <RenaissanceWhyWeBuilt />

        {/* Chapter III: The 8-Agent Squad Roster */}
        <RenaissanceAgentRoster />

        {/* Chapter IV: Authority & Policy Decision Sandbox */}
        <RenaissanceTrustSimulator />

        {/* Chapter V: Sandbox Isolation & Trust Boundary */}
        <RenaissanceExecution />

        {/* Chapter VI: Evidence & Action Receipts */}
        <RenaissanceEvidence />

        {/* Chapter VII: Memory Provenance & 6 Dimensions */}
        <RenaissanceMemory />

        {/* Chapter VIII: iMessage Messaging via Linq */}
        <RenaissanceMessaging />

        {/* Chapter IX: Voice Native & Low-Latency Audio */}
        <RenaissanceVoice />

        {/* Chapter X: Agency Payments & Wallet Bounds */}
        <RenaissancePayments />

        {/* Chapter XI: Onchain Actions, x402 & Ecosystem */}
        <RenaissanceOnchain />

        {/* Chapter XII: Principles, Dev Console & Closing Launchpad */}
        <RenaissancePrinciples />
      </main>
    </div>
  );
}

export default HomePage;
