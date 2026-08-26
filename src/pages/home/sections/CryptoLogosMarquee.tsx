import React from 'react';

// Import all 19 extracted crypto wallet and exchange logos
import logo01 from '../../../assets/crypto_logos/logo_01.webp';
import logo02 from '../../../assets/crypto_logos/logo_02.webp';
import logo03 from '../../../assets/crypto_logos/logo_03.webp';
import logo04 from '../../../assets/crypto_logos/logo_04.webp';
import logo05 from '../../../assets/crypto_logos/logo_05.webp';
import logo06 from '../../../assets/crypto_logos/logo_06.webp';
import logo07 from '../../../assets/crypto_logos/logo_07.webp';
import logo08 from '../../../assets/crypto_logos/logo_08.webp';
import logo09 from '../../../assets/crypto_logos/logo_09.webp';
import logo10 from '../../../assets/crypto_logos/logo_10.webp';
import logo11 from '../../../assets/crypto_logos/logo_11.webp';
import logo12 from '../../../assets/crypto_logos/logo_12.webp';
import logo13 from '../../../assets/crypto_logos/logo_13.webp';
import logo14 from '../../../assets/crypto_logos/logo_14.webp';
import logo15 from '../../../assets/crypto_logos/logo_15.webp';
import logo16 from '../../../assets/crypto_logos/logo_16.webp';
import logo17 from '../../../assets/crypto_logos/logo_17.webp';
import logo18 from '../../../assets/crypto_logos/logo_18.webp';
import logo19 from '../../../assets/crypto_logos/logo_19.webp';

const ROW_1_LOGOS = [
  { id: 'r1-1', src: logo02, alt: 'MetaMask' },
  { id: 'r1-2', src: logo03, alt: 'Phantom' },
  { id: 'r1-3', src: logo04, alt: 'Trust Wallet' },
  { id: 'r1-4', src: logo05, alt: 'OKX' },
  { id: 'r1-5', src: logo06, alt: 'Uniswap' },
  { id: 'r1-6', src: logo07, alt: 'Exodus' },
  { id: 'r1-7', src: logo08, alt: 'Ledger' },
  { id: 'r1-8', src: logo09, alt: 'Trezor' },
  { id: 'r1-9', src: logo14, alt: 'Polygon' },
  { id: 'r1-10', src: logo01, alt: 'Crypto Wallet' },
];

const ROW_2_LOGOS = [
  { id: 'r2-1', src: logo10, alt: 'Binance' },
  { id: 'r2-2', src: logo11, alt: 'Coinbase' },
  { id: 'r2-3', src: logo12, alt: 'Bybit' },
  { id: 'r2-4', src: logo13, alt: 'Gate.io' },
  { id: 'r2-5', src: logo15, alt: 'Bitget' },
  { id: 'r2-6', src: logo16, alt: 'Bybit Platform' },
  { id: 'r2-7', src: logo17, alt: 'KuCoin' },
  { id: 'r2-8', src: logo18, alt: 'Crypto.com' },
  { id: 'r2-9', src: logo19, alt: 'Gemini' },
  { id: 'r2-10', src: logo05, alt: 'OKX Exchange' },
];

export const CryptoLogosMarquee: React.FC = () => {
  return (
    <div className="w-full py-2 sm:py-4 overflow-hidden relative select-none space-y-3 sm:space-y-4">
      
      {/* Subtle Category Eyebrow */}
      <div className="text-center mb-3 sm:mb-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8e4d5] border border-[#d6cfbe] text-[11px] font-mono tracking-widest text-[#3d4a3a] uppercase font-semibold">
          SUPPORTED WALLETS &amp; EXCHANGES
        </span>
      </div>

      {/* Main Dual-Row Marquee Track Wrapper with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden space-y-3 sm:space-y-4">
        
        {/* Left Gradient Fade (Covers Both Rows) */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-r from-[#f3f2e6] to-transparent z-20" />

        {/* Right Gradient Fade (Covers Both Rows) */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-l from-[#f3f2e6] to-transparent z-20" />

        {/* ── ROW 1: Moving to the LEFT ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            
            {/* First sequence */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-a-${logo.id}`}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-10 sm:h-12 lg:h-13 px-2.5 py-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto max-w-[120px] sm:max-w-[145px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}

            {/* Duplicated sequence for seamless wrap */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-b-${logo.id}`}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-10 sm:h-12 lg:h-13 px-2.5 py-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto max-w-[120px] sm:max-w-[145px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}

          </div>
        </div>

        {/* ── ROW 2: Moving to the RIGHT ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max items-center animate-crypto-marquee-right group-hover:[animation-play-state:paused]">
            
            {/* First sequence */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-a-${logo.id}`}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-10 sm:h-12 lg:h-13 px-2.5 py-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto max-w-[120px] sm:max-w-[145px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}

            {/* Duplicated sequence for seamless wrap */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-b-${logo.id}`}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-10 sm:h-12 lg:h-13 px-2.5 py-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto max-w-[120px] sm:max-w-[145px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
};
