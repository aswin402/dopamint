import React, { useState } from 'react';
import { Search, ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

export const RenaissanceNavbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [editionsOpen, setEditionsOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3.5 px-4 sm:px-8 flex items-center justify-between text-xs font-sans select-none bg-transparent">
      
      {/* Left Edition Badge */}
      <div className="flex items-center gap-6">
        <a href="#hero" className="flex items-center gap-2 font-bold text-black">
          <div className="w-5 h-5 rounded bg-black text-white flex items-center justify-center font-mono text-[10px]">
            D
          </div>
          <span>DopaMint Editions <span className="font-normal text-neutral-500">Winter '26</span></span>
        </a>

        {/* Editions Dropdown */}
        <div className="relative hidden md:inline-block">
          <button
            onClick={() => setEditionsOpen(!editionsOpen)}
            className="flex items-center gap-1 text-neutral-700 hover:text-black font-medium py-1 px-2 rounded hover:bg-black/5 transition-colors cursor-pointer"
          >
            <span>Editions</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-700" />
          </button>

          {editionsOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-44 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-neutral-200 p-1.5 text-xs z-50">
              <a href="#hero" onClick={() => setEditionsOpen(false)} className="block px-3 py-2 rounded-lg bg-neutral-100 text-black font-bold">
                Winter '26 · Renaissance
              </a>
              <a href="#hero" onClick={() => setEditionsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-neutral-50 text-neutral-600">
                Summer '25 · Genesis
              </a>
            </div>
          )}
        </div>

        {/* Search Input Trigger */}
        <div className="relative hidden sm:flex items-center">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-black font-medium py-1 px-2 rounded hover:bg-black/5 transition-colors cursor-pointer"
          >
            <span>Search</span>
            <Search className="w-3.5 h-3.5 text-neutral-700" />
          </button>
        </div>
      </div>

      {/* Right Direct Action Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="#principles"
          className="hidden sm:inline-block text-neutral-700 hover:text-black font-medium px-3 py-1.5"
        >
          DopaMint.com
        </a>

        <a
          href="#cta"
          className="px-4 py-2 rounded-full bg-black text-white font-bold hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-1 group"
        >
          <span>Get DopaMint</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/80 border border-neutral-300 text-black"
        >
          {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200 text-sm space-y-3 text-black">
          <a href="#hero" onClick={() => setMobileNavOpen(false)} className="block font-bold">I. Agents</a>
          <a href="#why" onClick={() => setMobileNavOpen(false)} className="block font-bold">II. Why Agents</a>
          <a href="#roster" onClick={() => setMobileNavOpen(false)} className="block font-bold">III. Squad Roster</a>
          <a href="#trust" onClick={() => setMobileNavOpen(false)} className="block font-bold">IV. Authority</a>
          <a href="#execution" onClick={() => setMobileNavOpen(false)} className="block font-bold">V. Execution</a>
          <a href="#evidence" onClick={() => setMobileNavOpen(false)} className="block font-bold">VI. Evidence</a>
          <a href="#memory" onClick={() => setMobileNavOpen(false)} className="block font-bold">VII. Memory</a>
          <a href="#messaging" onClick={() => setMobileNavOpen(false)} className="block font-bold">VIII. Messaging</a>
          <a href="#voice" onClick={() => setMobileNavOpen(false)} className="block font-bold">IX. Voice Native</a>
          <a href="#payments" onClick={() => setMobileNavOpen(false)} className="block font-bold">X. Payments</a>
          <a href="#onchain" onClick={() => setMobileNavOpen(false)} className="block font-bold">XI. Onchain</a>
          <a href="#principles" onClick={() => setMobileNavOpen(false)} className="block font-bold">XII. Principles</a>
        </div>
      )}

    </header>
  );
};
