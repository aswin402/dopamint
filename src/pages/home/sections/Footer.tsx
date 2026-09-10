import React from 'react';
import { Link } from 'react-router-dom';
import footerBgImg from '../../../assets/Footer.webp';
import footerMobImg from '../../../assets/Footer_mob.png';
import logoDope from '../../../assets/logo_dope.webp';
import { FaTwitter, FaDiscord, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { SITE_CONFIG } from '@/data/siteConfig';

const SOCIAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'Twitter/X': FaTwitter,
  Discord: FaDiscord,
  Instagram: FaInstagram,
  Telegram: FaTelegramPlane,
};

export const FooterSection: React.FC = () => {
  return (
    <footer
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1.5rem)',
      }}
      className="relative w-full min-h-[600px] min-[390px]:min-h-[700px] sm:min-h-[850px] lg:min-h-[960px] bg-black text-white flex flex-col justify-between overflow-hidden px-4 min-[390px]:px-6 sm:px-10 lg:px-16"
    >
      
      {/* =========================================================================
          BACKGROUND ARTWORK (FOOTER.PNG - RENAISSANCE PAINTING)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <picture className="w-full h-full block">
          <source media="(max-width: 1023px)" srcSet={footerMobImg} />
          <img
            src={footerBgImg}
            alt="Dopamint Renaissance The Last Supper"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center select-none"
          />
        </picture>
        {/* Subtle dark gradient overlay for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* =========================================================================
          TOP / CENTER: HEADLINE & GET ACCESS CTA
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-6 sm:pt-10 lg:pt-14 text-center flex flex-col items-center space-y-4 sm:space-y-6">
        
        {/* Brand Logo above headline */}
        <div className="flex justify-center items-center pb-1">
          <img
            src={logoDope}
            alt="Dopamint"
            className="h-9 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] select-none"
          />
        </div>

        {/* Headline: Your last App */}
        <h2 className="font-serif text-3xl min-[360px]:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          Your last App.
        </h2>

        {/* Action Button: Join Waitlist */}
        <div className="pt-2">
          <Link
            to="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-[#ffffff] text-[#141820] px-8 sm:px-10 py-3.5 sm:py-4 min-h-[44px] text-xs sm:text-[13px] font-sans font-bold uppercase tracking-[0.2em] shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-[#f3f2e6] hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Join Waitlist
          </Link>
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

          {/* Socials Container */}
          <div className="w-full sm:w-auto">
            {/* Social Icons with text labels */}
            <div className="flex flex-wrap items-center justify-start sm:justify-end gap-x-3.5 min-[375px]:gap-x-4.5 min-[430px]:gap-x-6 sm:gap-x-7 gap-y-2 text-white/90 text-xs min-[380px]:text-[12.5px] sm:text-[13px] font-medium tracking-wide">
              {SITE_CONFIG.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.name] || FaTwitter;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1 px-0.5 hover:text-white transition-colors select-none"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Sub-Footer Legal & Disclaimer Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/70">
          <div>
            <span>© {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}. All rights reserved.</span>
            <span className="mx-2 text-white/40">|</span>
            <span className="font-serif italic text-white/90">Powered by $DOPE.</span>
          </div>

          <div className="flex items-center gap-6 font-serif italic text-white/80">
            {SITE_CONFIG.legal.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
};
