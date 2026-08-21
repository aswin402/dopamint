import React, { useState, useEffect } from 'react';
import { Type1Button } from '../ui/Type1Button';
import { Menu, X } from 'lucide-react';
import logoDope from '../../assets/logo_dope.png';

export const RenaissanceNavbar: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 lg:px-16 text-xs font-sans transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#f7f3ef]/90 backdrop-blur-md border-b border-neutral-400/30 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        {/* Brand with logo_dope.png (Switches from White to Black on scroll) */}
        <a href="#hero" className="flex items-center group" aria-label="Home">
          <img
            src={logoDope}
            alt="Dope"
            className={`h-5 sm:h-6 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              isScrolled ? 'brightness-0 opacity-100' : 'brightness-100 drop-shadow-md'
            }`}
          />
        </a>

        {/* Nav Links: Agents, AIFI, RAILS */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
            isScrolled ? 'text-neutral-700' : 'text-white/90 drop-shadow-xs'
          }`}
        >
          <a
            href="#agents"
            className={`transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}
          >
            Agents
          </a>
          <a
            href="#manifesto"
            className={`transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}
          >
            AIFI
          </a>
          <a
            href="#authority"
            className={`transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}
          >
            RAILS
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <Type1Button
            href="#cta"
            variant={isScrolled ? 'dark' : 'light'}
            className={`!h-9 !w-36 hidden sm:inline-flex ${!isScrolled ? 'border-white/80 text-white hover:border-white shadow-md' : ''}`}
          >
            Get access
          </Type1Button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className={`md:hidden p-2 rounded-xl border transition-all cursor-pointer ${
              isScrolled
                ? 'bg-white border-neutral-300 text-black'
                : 'bg-black/40 backdrop-blur-md border-white/30 text-white'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-[#e6e6dc]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-neutral-300 text-sm space-y-4 text-black animate-in fade-in slide-in-from-top-2 duration-200">
          <a href="#agents" onClick={() => setMobileNavOpen(false)} className="block font-bold">
            Agents
          </a>
          <a href="#manifesto" onClick={() => setMobileNavOpen(false)} className="block font-bold">
            AIFI
          </a>
          <a href="#authority" onClick={() => setMobileNavOpen(false)} className="block font-bold">
            RAILS
          </a>
          <div className="pt-2">
            <Type1Button
              href="#cta"
              onClick={() => setMobileNavOpen(false)}
              className="!w-full !h-11"
            >
              Get access
            </Type1Button>
          </div>
        </div>
      )}
    </header>
  );
};
