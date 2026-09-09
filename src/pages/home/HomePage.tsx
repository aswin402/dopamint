import React, { lazy, Suspense } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { RealAsks } from './sections/RealAsks';
import { BurnTransition } from '../../components/ui/burn-transition';
import divBurnImg from '../../assets/div_burn.webp';

// Lazy load below-the-fold sections to optimize initial JavaScript execution
const AgentRoster = lazy(() => import('./sections/AgentRoster').then((m) => ({ default: m.AgentRoster })));
const Authority = lazy(() => import('./sections/Authority').then((m) => ({ default: m.Authority })));
const AiFiSection = lazy(() => import('./sections/AiFiSection').then((m) => ({ default: m.AiFiSection })));
const EvidenceSection = lazy(() => import('./sections/Evidence/EvidenceSection').then((m) => ({ default: m.EvidenceSection })));
const MemoryWalletSection = lazy(() => import('./sections/MemoryWallet/MemoryWalletSection').then((m) => ({ default: m.MemoryWalletSection })));
const EcosystemSection = lazy(() => import('./sections/EcosystemSection').then((m) => ({ default: m.EcosystemSection })));
const FooterSection = lazy(() => import('./sections/Footer').then((m) => ({ default: m.FooterSection })));


export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f3f2e6] text-[#141820] font-sans antialiased overflow-x-clip selection:bg-[#e5ddd4] selection:text-[#141820]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 1. Hero: The Age of AI & Sol iMessage Demo */}
        <Hero />

        {/* 2. Real asks, real people */}
        <RealAsks />

        {/* 3. The Future of Agents */}
        <Suspense fallback={null}>
          <Authority />
        </Suspense>

        {/* 4. AiFi Powered Agents That Act With Trust */}
        <Suspense fallback={null}>
          <AiFiSection />
        </Suspense>

        {/* 5. the Dope App: 8 Agent Crew */}
        <Suspense fallback={null}>
          <AgentRoster />
        </Suspense>

        {/* 6. Long Section with div_burn.webp Background (Evidence + Memory Wallet / The Floor) */}
        <div className="relative w-full overflow-x-clip bg-[#282a2d]">
          {/* Top Burn Transition Effect */}
          <div className="absolute top-0 inset-x-0 h-28 sm:h-36 md:h-44 lg:h-48 pointer-events-none z-20">
            <BurnTransition
              color="#f3f2e6"
              transitionColor="#f3f2e6"
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

          {/* div_burn.webp Background (Darkened background for high-contrast light theme components) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <img
              loading="lazy"
              decoding="async"
              src={divBurnImg}
              alt="Burn out background"
              className="w-full h-full object-cover object-top select-none brightness-[0.70] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-black/55 pointer-events-none" />
          </div>

          <div className="relative z-10">
            <Suspense fallback={null}>
              {/* Part 1: Cryptographic Evidence Log */}
              <EvidenceSection />

              {/* Part 2: The Floor & Memory Wallet */}
              <MemoryWalletSection />
            </Suspense>
          </div>

          {/* Bottom Burn Transition Effect */}
          <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none z-20">
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

        {/* 7. Ecosystem (Everyday Apps, Markets, Exchanges & Wallets Marquee) */}
        <Suspense fallback={null}>
          <EcosystemSection />
        </Suspense>

        {/* 8. Footer Section (Give your AI some agency + The Last Supper background) */}
        <Suspense fallback={null}>
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}

export default HomePage;
