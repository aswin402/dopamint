import React, { useState, useEffect, useCallback } from 'react';
import { Type1Button } from '@/components/ui/Type1Button';
import { Menu, X } from 'lucide-react';
import { getLenisInstance } from '@/lib/lenis';
import logoDope from '../../../assets/logo_dope.webp';

export const Navbar: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroRevealed, setIsHeroRevealed] = useState(false);

  useEffect(() => {
    const syncNavbarState = () => {
      setIsScrolled(window.scrollY > 40);
      setIsHeroRevealed(document.documentElement.dataset.heroRevealed === 'true');
    };

    // The dissolve engine changes this attribute at the exact transition
    // boundary. Observing it is reliable even when a custom event fires
    // before React has committed the hero's unlock state.
    const heroRevealObserver = new MutationObserver(syncNavbarState);
    heroRevealObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-hero-revealed'],
    });

    syncNavbarState();
    window.addEventListener('hero-reveal-change', syncNavbarState);
    window.addEventListener('scroll', syncNavbarState, { passive: true });

    return () => {
      window.removeEventListener('hero-reveal-change', syncNavbarState);
      heroRevealObserver.disconnect();
      window.removeEventListener('scroll', syncNavbarState);
    };
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    setMobileNavOpen(false);

    const lenis = getLenisInstance();

    if (targetId === 'hero') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.dispatchEvent(new CustomEvent('set-hero-progress', { detail: { target: 0 } }));
      return;
    }

    if (targetId === 'manifesto') {
      // Smoothly advance hero dissolve to show "what is dopamint"
      window.dispatchEvent(new CustomEvent('set-hero-progress', { detail: { target: 1 } }));
      if (window.scrollY > 10) {
        if (lenis) {
          lenis.scrollTo(0, { duration: 0.9 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    // For other sections: first ensure hero dissolve is complete / page unlocked
    window.dispatchEvent(new CustomEvent('set-hero-progress', { detail: { target: 1 } }));

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -24, duration: 1.3 });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
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
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center group cursor-pointer"
          aria-label="Home"
        >
          <img
            src={logoDope}
            alt="Dope"
            className={`h-5 sm:h-6 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              isSolidNav ? 'brightness-0 opacity-100' : 'brightness-100 drop-shadow-md'
            }`}
          />
        </a>

        {/* Nav Links: About, Agents, Ecosystem */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
            isSolidNav ? 'text-neutral-700' : 'text-white/90 drop-shadow-xs'
          }`}
        >
          <a
            href="#manifesto"
            onClick={(e) => handleNavClick(e, 'manifesto')}
            className={`transition-colors cursor-pointer ${isSolidNav ? 'hover:text-black' : 'hover:text-white'}`}
          >
            About
          </a>
          <a
            href="#agents"
            onClick={(e) => handleNavClick(e, 'agents')}
            className={`transition-colors cursor-pointer ${isSolidNav ? 'hover:text-black' : 'hover:text-white'}`}
          >
            Agents
          </a>
          <a
            href="#ecosystem"
            onClick={(e) => handleNavClick(e, 'ecosystem')}
            className={`transition-colors cursor-pointer ${isSolidNav ? 'hover:text-black' : 'hover:text-white'}`}
          >
            Ecosystem
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <Type1Button
            href="#manifesto"
            onClick={(e) => handleNavClick(e, 'manifesto')}
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
          <a
            href="#manifesto"
            onClick={(e) => handleNavClick(e, 'manifesto')}
            className="block font-bold cursor-pointer"
          >
            About
          </a>
          <a
            href="#agents"
            onClick={(e) => handleNavClick(e, 'agents')}
            className="block font-bold cursor-pointer"
          >
            Agents
          </a>
          <a
            href="#ecosystem"
            onClick={(e) => handleNavClick(e, 'ecosystem')}
            className="block font-bold cursor-pointer"
          >
            Ecosystem
          </a>
          <div className="pt-2">
            <Type1Button
              href="#manifesto"
              onClick={(e) => handleNavClick(e, 'manifesto')}
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

