import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { RealAsks } from './sections/RealAsks';
import { AgentRoster } from './sections/AgentRoster';
import { Authority } from './sections/Authority';
import { EvidenceSection } from './sections/Evidence/EvidenceSection';
import { MemoryWalletSection } from './sections/MemoryWallet/MemoryWalletSection';
import { RoadmapSection } from './sections/Roadmap';
import { FooterSection } from './sections/Footer';
import { BurnTransition } from '../../components/ui/burn-transition';
import divBurnOutImg from '../../assets/Div_Burn_out_image.webp';

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

        {/* 3. the Dope App: 8 Agent Crew */}
        <AgentRoster />

        {/* 4. Long Section with Div_Burn_out_image.webp Background (Evidence + Memory Wallet / The Floor) */}
        <div className="relative w-full overflow-clip bg-[#282a2d]">
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

          {/* Div_Burn_out_image.webp Background (Slightly Darkened for higher contrast) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <img
              loading="lazy"
              decoding="async"
              src={divBurnOutImg}
              alt="Burn out background"
              className="w-full h-full object-cover object-top select-none brightness-[0.72] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          </div>

          <div className="relative z-10">
            {/* Part 1: Cryptographic Evidence Log */}
            <EvidenceSection />

            {/* Part 2: The Floor & Memory Wallet */}
            <MemoryWalletSection />
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

        {/* 7. Dopamint Roadmap (Video/Static Transition + Staggered Grid Logo Animation) */}
        <RoadmapSection />

        {/* 8. Footer Section (Give your AI some agency + The Last Supper background) */}
        <FooterSection />
      </main>
    </div>
  );
}

export default HomePage;
