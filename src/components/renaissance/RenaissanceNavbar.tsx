import React, { useState } from 'react';
import { Type1Button } from '../ui/Type1Button';
import { Menu, X } from 'lucide-react';

export const RenaissanceNavbar: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs font-sans select-none bg-[#ddddd1]/90 backdrop-blur-md border-b border-neutral-400/30">
      
      {/* Brand */}
      <a href="#hero" className="flex items-center gap-2.5 font-bold text-black group">
        <div className="w-6 h-6 rounded bg-black text-white flex items-center justify-center font-mono text-xs shadow-xs">
          D
        </div>
        <span className="text-base tracking-tight font-black font-sans">DopaMint</span>
      </a>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-neutral-700">
        <a href="#agents" className="hover:text-black transition-colors">Agents</a>
        <a href="#control" className="hover:text-black transition-colors">Control</a>
        <a href="#evidence" className="hover:text-black transition-colors">Evidence</a>
        <a href="#engineering" className="hover:text-black transition-colors">Engineering</a>
        <a href="#docs" className="hover:text-black transition-colors">Docs</a>
      </nav>

      {/* Right Action */}
      <div className="flex items-center gap-3">
        <Type1Button
          href="#cta"
          className="!h-9 !w-36 hidden sm:inline-flex"
        >
          Get access
        </Type1Button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden p-2 rounded-lg bg-white border border-neutral-300 text-black cursor-pointer"
        >
          {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-[#e6e6dc] backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-300 text-sm space-y-4 text-black">
          <a href="#agents" onClick={() => setMobileNavOpen(false)} className="block font-bold">Agents</a>
          <a href="#control" onClick={() => setMobileNavOpen(false)} className="block font-bold">Control</a>
          <a href="#evidence" onClick={() => setMobileNavOpen(false)} className="block font-bold">Evidence</a>
          <a href="#engineering" onClick={() => setMobileNavOpen(false)} className="block font-bold">Engineering</a>
          <a href="#docs" onClick={() => setMobileNavOpen(false)} className="block font-bold">Docs</a>
          <div className="pt-2">
            <Type1Button href="#cta" onClick={() => setMobileNavOpen(false)} className="!w-full !h-11">
              Get access
            </Type1Button>
          </div>
        </div>
      )}

    </header>
  );
};
