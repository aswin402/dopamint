import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const RenaissanceHero: React.FC = () => {
  const [promptText, setPromptText] = useState('Swap 500 USDC to ETH when it drops under 3,400.');
  const [executed, setExecuted] = useState(false);

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    setExecuted(true);
    setTimeout(() => setExecuted(false), 4000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-start select-none">
      
      {/* 1. Neoclassical Full-Bleed Hero Canvas */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-black min-h-[580px] sm:min-h-[680px] flex flex-col justify-between p-6 sm:p-12 shadow-xl border border-black/10">
        
        {/* Renaissance Painterly Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/avatars/hero-trio.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />

        {/* Top Header Tag */}
        <div className="relative z-10 flex items-center justify-between text-white text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white">DopaMint — built in SF, agents that actually go</span>
          </div>
          <span className="text-neutral-400 font-sans">Chapter I</span>
        </div>

        {/* Center Renaissance Title & Index Box */}
        <div className="relative z-10 max-w-xl mx-auto my-auto text-center text-white space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-display tracking-tight leading-tight text-white">
            Give your AI <br />
            some agency. <br />
            <span className="font-serif italic font-normal text-white">
              Not a blank check.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto font-normal leading-relaxed">
            A whole squad of autonomous agents boxed in by a cryptographic trust layer they can't sneak past.
          </p>

          {/* Floating Glassmorphic Prompt Pill */}
          <form
            onSubmit={handleSendPrompt}
            className="prompt-glass rounded-full p-2 pl-5 max-w-lg mx-auto flex items-center justify-between text-black shadow-2xl transition-all hover:scale-[1.01]"
          >
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none text-black placeholder:text-neutral-500"
              placeholder="Ask an agent to execute..."
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center shrink-0 shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </form>

          {/* Execution feedback toast */}
          {executed && (
            <div className="animate-fadeIn p-3 rounded-2xl bg-black/90 border border-white/20 text-white text-xs font-mono flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span className="text-white">Policy verified · Order routed to Sol (Trading) on Base L2</span>
            </div>
          )}
        </div>

        {/* Bottom Specs Ribbon */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-300">
          <div className="flex items-center gap-4 text-white">
            <span>Policy-scoped</span>
            <span className="text-neutral-500">·</span>
            <span>Signed receipts</span>
            <span className="text-neutral-500">·</span>
            <span>Revocable credentials</span>
          </div>
          <div className="text-white font-bold">
            Built in San Francisco
          </div>
        </div>

      </div>

      {/* 2. Renaissance Category Break Transition ("Agents") */}
      <div className="my-20 relative rounded-[2rem] overflow-hidden bg-black p-12 sm:p-20 text-white flex items-center justify-between shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('/avatars/portal.jpg')` }}
        />
        <div className="relative z-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            AUTONOMOUS OPERATING SQUAD
          </div>
          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter font-sans text-white">
            Agents
          </h2>
        </div>
        <div className="relative z-10 hidden md:block text-right font-serif italic text-2xl text-neutral-300">
          "Agents you can actually put to work. Today."
        </div>
      </div>

      {/* 3. 2-Column Renaissance Feature Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Left Feature Card with Painting & Floating Prompt */}
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-black/5">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
              style={{ backgroundImage: `url('/avatars/serina.jpg')` }}
            />
            <div className="relative z-10 flex justify-between text-[11px] font-mono text-white">
              <span>Sol · Trading Engine</span>
              <span>01. SWAP</span>
            </div>

            {/* Floating Prompt Pill */}
            <div className="relative z-10 prompt-glass rounded-2xl p-4 text-black shadow-xl space-y-2">
              <div className="text-xs font-bold flex items-center justify-between text-black">
                <span>"Swap 500 USDC to ETH when under 3,400"</span>
                <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  ↑
                </span>
              </div>
              <div className="text-[10px] font-mono text-neutral-800 font-bold">
                ✓ Policy-checked ($100/txn bound) · Verified onchain
              </div>
            </div>

            <div className="relative z-10 text-[10px] font-mono text-neutral-400">
              Threshold hit · 3,398.20 · Base L2
            </div>
          </div>

          <div className="space-y-1 text-left">
            <h3 className="text-base font-bold text-black">
              Policy-scoped execution
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Sol watches the market 24/7 and moves only inside the strict dollar bounds you have set in your personal policy file.
            </p>
            <a href="#roster" className="inline-flex items-center gap-1 text-xs font-bold text-black hover:underline pt-1">
              <span>Inspect Sol agent</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>

        {/* Right Feature Card with Painterly Sage Backdrop & Floating Prompt */}
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-black/5">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
              style={{ backgroundImage: `url('/avatars/aiko.jpg')` }}
            />
            <div className="relative z-10 flex justify-between text-[11px] font-mono text-white">
              <span>Iris · Onchain Native</span>
              <span>02. x402 SETTLE</span>
            </div>

            {/* Floating Prompt Pill */}
            <div className="relative z-10 prompt-glass rounded-2xl p-4 text-black shadow-xl space-y-2">
              <div className="text-xs font-bold flex items-center justify-between text-black">
                <span>"Settle 0.0021 ETH for API access via x402"</span>
                <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  ↑
                </span>
              </div>
              <div className="text-[10px] font-mono text-neutral-800 font-bold">
                ✓ HTTP 402 challenge settled · Machine payment
              </div>
            </div>

            <div className="relative z-10 text-[10px] font-mono text-neutral-400">
              No invoice · No checkout page · Zero human friction
            </div>
          </div>

          <div className="space-y-1 text-left">
            <h3 className="text-base font-bold text-black">
              HTTP x402 Machine Settlements
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Iris pays any machine endpoint speaking the HTTP-native x402 standard with signed cryptographic receipts.
            </p>
            <a href="#onchain" className="inline-flex items-center gap-1 text-xs font-bold text-black hover:underline pt-1">
              <span>Inspect Iris agent</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
