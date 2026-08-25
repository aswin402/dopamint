import React, { useState, useEffect } from 'react';
import { Type1Button } from '@/components/ui/Type1Button';
import { Menu, X } from 'lucide-react';
import logoDope from '../../../assets/logo_dope.webp';

export const Navbar: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroRevealed, setIsHeroRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleRevealChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ isRevealed: boolean }>;
      if (customEvent.detail !== undefined) {
        setIsHeroRevealed(customEvent.detail.isRevealed);
      }
    };

    // Check dataset attribute initially in case hero is already revealed
    if (document.documentElement.dataset.heroRevealed === 'true') {
      setIsHeroRevealed(true);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hero-reveal-change', handleRevealChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hero-reveal-change', handleRevealChange);
    };
  }, []);

  const isSolidNav = isScrolled || isHeroRevealed;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-10 lg:px-16 text-xs font-sans transition-all duration-500 ease-in-out ${
        isSolidNav
          ? 'bg-[#f3f2e6]/90 backdrop-blur-md border-b border-neutral-400/30 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full">
        {/* Brand with logo_dope.webp (Switches from White to Black on scroll or when hero dissolves) */}
        <a href="#hero" className="flex items-center group" aria-label="Home">
          <img
            src={logoDope}
            alt="Dope"
            className={`h-5 sm:h-6 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              isSolidNav ? 'brightness-0 opacity-100' : 'brightness-100 drop-shadow-md'
            }`}
          />
        </a>

        {/* Nav Links: About, Features, Docs */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
            isSolidNav ? 'text-neutral-700' : 'text-white/90 drop-shadow-xs'
          }`}
        >
          <a
            href="#manifesto"
            className={`transition-colors ${isSolidNav ? 'hover:text-black' : 'hover:text-white'}`}
          >
            About
          </a>
          <a
            href="#agents"
            className={`transition-colors ${isSolidNav ? 'hover:text-black' : 'hover:text-white'}`}
          >
            Features
          </a>
          <a
            href="#architecture"
            className={`transition-colors ${isSolidNav ? 'hover:text-black' : 'hover:text-white'}`}
          >
            Docs
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <Type1Button
            href="#manifesto"
            variant={isSolidNav ? 'dark' : 'light'}
            className={`!h-9 !w-36 hidden sm:inline-flex ${!isSolidNav ? 'border-white/80 text-white hover:border-white shadow-md' : ''}`}
          >
            {/* Brand casing preserved: .btn-txt CSS forces uppercase — opt out for "iMessage" */}
            <span className="normal-case tracking-[1px]">Try iMessage</span>
          </Type1Button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className={`md:hidden p-2 rounded-xl border transition-all cursor-pointer ${
              isSolidNav
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
          <a href="#manifesto" onClick={() => setMobileNavOpen(false)} className="block font-bold">
            About
          </a>
          <a href="#agents" onClick={() => setMobileNavOpen(false)} className="block font-bold">
            Features
          </a>
          <a href="#architecture" onClick={() => setMobileNavOpen(false)} className="block font-bold">
            Docs
          </a>
          <div className="pt-2">
            <Type1Button
              href="#manifesto"
              onClick={() => setMobileNavOpen(false)}
              className="!w-full !h-11"
            >
              <span className="normal-case tracking-[1px]">Try iMessage</span>
            </Type1Button>
          </div>
        </div>
      )}
    </header>
  );
};
