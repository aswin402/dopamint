import React from 'react';
import footerBgImg from '../../../assets/Footer.webp';
import logoDope from '../../../assets/logo_dope.webp';
import { FaTwitter, FaDiscord, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative w-full min-h-[700px] sm:min-h-[850px] lg:min-h-[960px] bg-black text-white flex flex-col justify-between overflow-hidden select-none px-6 sm:px-10 lg:px-16">
      
      {/* =========================================================================
          BACKGROUND ARTWORK (FOOTER.PNG - RENAISSANCE PAINTING)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={footerBgImg}
          alt="Dopamint Renaissance The Last Supper"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Subtle dark gradient overlay for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* =========================================================================
          TOP / CENTER: HEADLINE & GET ACCESS CTA
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-6 sm:pt-10 lg:pt-14 text-center space-y-4 sm:space-y-6">
        
        {/* Headline: Your last app */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          Your last <span className="font-serif italic font-bold">app.</span>
        </h2>

        {/* Action Button: Join Waitlist */}
        <div className="pt-2">
          <a
            href="#access"
            className="inline-flex items-center justify-center rounded-full bg-[#ffffff] text-[#141820] px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-[13px] font-sans font-bold uppercase tracking-[0.2em] shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-[#f3f2e6] hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Join Waitlist
          </a>
        </div>

      </div>

      {/* =========================================================================
          BOTTOM NAVIGATION, SOCIALS & COPYRIGHT BAR
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pb-6 sm:pb-8 pt-24 sm:pt-36">
        
        {/* Main Bottom Nav Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-6 border-b border-white/25 text-xs sm:text-sm">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoDope}
              alt="Dopamint"
              className="h-8 sm:h-10 w-auto object-contain brightness-0 invert drop-shadow-md"
            />
          </div>

          {/* Links & Socials Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            
            {/* Nav Pages */}
            <div className="flex items-center gap-6 text-white/90 text-xs sm:text-[13px] font-medium tracking-wider">
              <a href="#product" className="hover:text-white transition-colors">
                Product
              </a>
              <a href="#ecosystem" className="hover:text-white transition-colors">
                Ecosystem
              </a>
              <a href="#docs" className="hover:text-white transition-colors">
                Docs
              </a>
            </div>

            {/* Social Icons with text labels */}
            <div className="flex items-center gap-5 text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
              <a 
                href="https://x.com/dopamint" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaTwitter className="w-3.5 h-3.5" />
                <span>Twitter/X</span>
              </a>

              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaDiscord className="w-3.5 h-3.5" />
                <span>Discord</span>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaInstagram className="w-3.5 h-3.5" />
                <span>Insta</span>
              </a>

              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaTelegramPlane className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
            </div>

          </div>

        </div>

        {/* Sub-Footer Legal & Disclaimer Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/70">
          <div>
            <span>© 2026 Dopamint. All rights reserved.</span>
            <span className="mx-2 text-white/40">|</span>
            <span className="font-serif italic text-white/90">Powered by $DOPE.</span>
          </div>

          <div className="flex items-center gap-6 font-serif italic text-white/80">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
};
