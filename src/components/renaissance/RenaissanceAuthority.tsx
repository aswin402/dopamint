import React, { useState, useEffect } from 'react';
import crownImg from '../../assets/Crown.png';

export const RenaissanceAuthority: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'blocked' | 'approved'>('blocked');

  // Auto-cycle through both cases every 6 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCase((prev) => (prev === 'blocked' ? 'approved' : 'blocked'));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="control" className="relative w-full bg-[#f7f3ef] py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-neutral-300/70">
      
      {/* =========================================================================
          1. TILTED RENAISSANCE CROWNS (LEFT & RIGHT)
          ========================================================================= */}
      
      {/* Left Crown - with swapped angle */}
      <img
        src={crownImg}
        alt="Royal Crown Left"
        className="absolute -left-20 sm:-left-24 lg:-left-28 top-[42%] sm:top-[38%] w-52 sm:w-64 lg:w-80 h-auto rotate-[38deg] opacity-95 pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)] z-0"
      />

      {/* Right Crown - with swapped angle */}
      <img
        src={crownImg}
        alt="Royal Crown Right"
        className="absolute -right-16 sm:-right-20 lg:-right-24 -top-12 sm:-top-16 lg:-top-20 w-56 sm:w-72 lg:w-96 h-auto -rotate-45 opacity-95 pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.22)] z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            2. SECTION EDITORIAL HEADLINE
            ========================================================================= */}
        <div className="space-y-4 text-left max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#141820] tracking-tight leading-[1.04]">
            Your agent can run in a <span className="font-serif italic font-bold text-[#141820]">sandbox</span>
            <br />
            so can you actually trust it?
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed pt-2">
            Here's what happens the second it tries to do something you didn't approve.
          </p>
        </div>

        {/* =========================================================================
            3. TWO-COLUMN INTERACTIVE CONTROL PLAYGROUND
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Try it Selectors */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <h3 className="text-lg font-bold text-neutral-950 font-sans">Try it</h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-1 leading-relaxed">
                It cycles through both on its own — or pick one and watch the call get made.
              </p>
            </div>

            {/* Option 1: Propose Send $5 */}
            <button
              type="button"
              onClick={() => setSelectedCase('approved')}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                selectedCase === 'approved'
                  ? 'bg-[#e7e1d8] border-neutral-900 shadow-sm'
                  : 'bg-white/70 border-neutral-300 hover:bg-neutral-100/80'
              }`}
            >
              <div className="font-bold text-sm sm:text-base text-neutral-950">
                Propose: Send $5
              </div>
              <div className="text-xs text-neutral-600 font-sans mt-0.5">
                normal payment, inside your rules
              </div>
            </button>

            {/* Option 2: Propose Send $25,000 */}
            <button
              type="button"
              onClick={() => setSelectedCase('blocked')}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                selectedCase === 'blocked'
                  ? 'bg-[#e7e1d8] border-neutral-900 shadow-sm'
                  : 'bg-white/70 border-neutral-300 hover:bg-neutral-100/80'
              }`}
            >
              <div className="font-bold text-sm sm:text-base text-neutral-950">
                Propose: Send $25,000
              </div>
              <div className="text-xs text-neutral-600 font-sans mt-0.5">
                way over what the agent's allowed
              </div>
            </button>
          </div>

          {/* Right Column: Control Layer Live Audit Table */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-300 bg-[#ede8e1]/80 backdrop-blur-md overflow-hidden shadow-sm">
              
              {/* Header Bar */}
              <div className="px-5 py-3 flex justify-between items-center font-mono text-[11px] uppercase tracking-wider text-neutral-600 bg-neutral-200/50 border-b border-neutral-300">
                <span>CONTROL LAYER</span>
                <span className="text-[#1a365d] font-bold">payments.send</span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-neutral-300/80 font-mono text-xs text-neutral-800">
                
                {/* Row 1: who's asking */}
                <div className="px-5 py-3.5 flex justify-between items-center">
                  <span className="text-neutral-600">who's asking</span>
                  <span className="font-bold text-neutral-950">Iris · onchain agent</span>
                </div>

                {/* Row 2: amount */}
                <div className="px-5 py-3.5 flex justify-between items-center">
                  <span className="text-neutral-600">amount</span>
                  <span className="font-bold text-neutral-950">
                    {selectedCase === 'blocked' ? '$25,000.00 USDC' : '$5.00 USDC'}
                  </span>
                </div>

                {/* Row 3: your cap */}
                <div className="px-5 py-3.5 flex justify-between items-center">
                  <span className="text-neutral-600">your cap</span>
                  <span className="font-bold text-red-700">
                    $100 per action / $250 a day
                  </span>
                </div>

                {/* Row 4: risk check */}
                <div className="px-5 py-3.5 flex justify-between items-center">
                  <span className="text-neutral-600">risk check</span>
                  <span className={`font-bold ${selectedCase === 'blocked' ? 'text-red-700' : 'text-emerald-700'}`}>
                    {selectedCase === 'blocked' ? 'brand new payee' : 'known payee, seen 14 times'}
                  </span>
                </div>

                {/* Row 5: receipt */}
                <div className="px-5 py-3.5 flex justify-between items-center">
                  <span className="text-neutral-600">receipt</span>
                  <span className="text-neutral-900 font-medium">
                    {selectedCase === 'blocked' ? 'attempt logged, nothing sent' : 'signed + logged onchain ✓'}
                  </span>
                </div>

              </div>

              {/* Bottom Notification Banner */}
              <div className={`px-5 py-3 text-xs font-mono font-medium transition-colors duration-200 ${
                selectedCase === 'blocked'
                  ? 'bg-[#f4c7c7] text-[#841919]'
                  : 'bg-[#c5eed4] text-[#135d33]'
              }`}>
                {selectedCase === 'blocked'
                  ? 'Blocked — way past your limit. Nothing moved.'
                  : 'Approved — inside your daily cap. Receipt signed.'}
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
