import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import logoDope from '@/assets/logo_dope.webp';
import { SITE_CONFIG } from '@/data/siteConfig';

const SOCIAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'Twitter/X': FaTwitter,
  Discord: FaDiscord,
  Instagram: FaInstagram,
  Telegram: FaTelegramPlane,
};

export const LegalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#141820] text-[#f3f2e6] border-t border-white/10 mt-20 pt-12 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/15">
          
          <div className="flex flex-col gap-2">
            <Link to="/" className="inline-block">
              <img
                src={logoDope}
                alt="DopaMint"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm">
              House of Intent-Based Agents built on Base. Autonomous agency guarded by deterministic trust layers.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 font-mono">
            {SITE_CONFIG.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.name] || FaTwitter;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <span>© {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}. All rights reserved.</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="font-serif italic text-white/80">Powered by $DOPE.</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
