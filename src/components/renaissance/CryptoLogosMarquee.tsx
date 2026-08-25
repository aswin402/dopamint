import React from 'react';

// Import all 19 extracted crypto wallet and exchange logos
import logo01 from '../../assets/crypto_logos/logo_01.png';
import logo02 from '../../assets/crypto_logos/logo_02.png';
import logo03 from '../../assets/crypto_logos/logo_03.png';
import logo04 from '../../assets/crypto_logos/logo_04.png';
import logo05 from '../../assets/crypto_logos/logo_05.png';
import logo06 from '../../assets/crypto_logos/logo_06.png';
import logo07 from '../../assets/crypto_logos/logo_07.png';
import logo08 from '../../assets/crypto_logos/logo_08.png';
import logo09 from '../../assets/crypto_logos/logo_09.png';
import logo10 from '../../assets/crypto_logos/logo_10.png';
import logo11 from '../../assets/crypto_logos/logo_11.png';
import logo12 from '../../assets/crypto_logos/logo_12.png';
import logo13 from '../../assets/crypto_logos/logo_13.png';
import logo14 from '../../assets/crypto_logos/logo_14.png';
import logo15 from '../../assets/crypto_logos/logo_15.png';
import logo16 from '../../assets/crypto_logos/logo_16.png';
import logo17 from '../../assets/crypto_logos/logo_17.png';
import logo18 from '../../assets/crypto_logos/logo_18.png';
import logo19 from '../../assets/crypto_logos/logo_19.png';

const CRYPTO_LOGOS = [
  { id: 1, src: logo01, alt: 'Crypto Brand 1' },
  { id: 2, src: logo02, alt: 'MetaMask' },
  { id: 3, src: logo03, alt: 'Phantom' },
  { id: 4, src: logo04, alt: 'Trust Wallet' },
  { id: 5, src: logo05, alt: 'OKX' },
  { id: 6, src: logo06, alt: 'Uniswap / Kraken' },
  { id: 7, src: logo07, alt: 'Exodus' },
  { id: 8, src: logo08, alt: 'Ledger' },
  { id: 9, src: logo09, alt: 'Trezor' },
  { id: 10, src: logo10, alt: 'Binance' },
  { id: 11, src: logo11, alt: 'Coinbase' },
  { id: 12, src: logo12, alt: 'Bybit' },
  { id: 13, src: logo13, alt: 'Gate.io / Bitget' },
  { id: 14, src: logo14, alt: 'Polygon' },
  { id: 15, src: logo15, alt: 'Bitget' },
  { id: 16, src: logo16, alt: 'Bybit' },
  { id: 17, src: logo17, alt: 'KuCoin' },
  { id: 18, src: logo18, alt: 'Crypto.com' },
  { id: 19, src: logo19, alt: 'Gemini' },
];

export const CryptoLogosMarquee: React.FC = () => {
  return (
    <div className="w-full pt-6 pb-12 sm:pt-8 sm:pb-16 overflow-hidden relative select-none">
      
      {/* Subtle Category Eyebrow */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8e4d5] border border-[#d6cfbe] text-[11px] font-mono tracking-widest text-[#3d4a3a] uppercase font-semibold">
          SUPPORTED WALLETS &amp; EXCHANGES
        </span>
      </div>

      {/* Marquee Track Container with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden flex items-center group">
        
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#f3f2e6] to-transparent z-10" />

        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#f3f2e6] to-transparent z-10" />

        {/* CSS Keyframe Infinite Scroll Rail */}
        <div className="flex w-max items-center animate-crypto-marquee group-hover:[animation-play-state:paused]">
          
          {/* First loop of 19 logos */}
          {CRYPTO_LOGOS.map((logo) => (
            <div
              key={`first-${logo.id}`}
              className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-10 sm:h-12 lg:h-14 px-2 py-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto max-w-[120px] sm:max-w-[150px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0"
              />
            </div>
          ))}

          {/* Second loop of 19 logos (for continuous seamless wrap) */}
          {CRYPTO_LOGOS.map((logo) => (
            <div
              key={`second-${logo.id}`}
              className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-10 sm:h-12 lg:h-14 px-2 py-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto max-w-[120px] sm:max-w-[150px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0"
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};
