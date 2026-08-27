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

// ── ROW 1: 7 Unique Wallets & Hardware ──
const ROW_1_LOGOS = [
  { id: 'r1-1', src: logo02, alt: 'MetaMask' },
  { id: 'r1-2', src: logo03, alt: 'Phantom' },
  { id: 'r1-3', src: logo04, alt: 'Trust Wallet' },
  { id: 'r1-4', src: logo07, alt: 'Exodus' },
  { id: 'r1-5', src: logo08, alt: 'Ledger' },
  { id: 'r1-6', src: logo09, alt: 'Trezor' },
  { id: 'r1-7', src: logo01, alt: 'Coinbase Wallet' },
];

// ── ROW 2: 6 Unique Major Global Exchanges ──
const ROW_2_LOGOS = [
  { id: 'r2-1', src: logo10, alt: 'Binance' },
  { id: 'r2-2', src: logo11, alt: 'Coinbase' },
  { id: 'r2-3', src: logo05, alt: 'OKX' },
  { id: 'r2-4', src: logo12, alt: 'Kraken' },
  { id: 'r2-5', src: logo16, alt: 'Bybit' },
  { id: 'r2-6', src: logo17, alt: 'KuCoin' },
];

// ── ROW 3: 6 Unique DeFi, Protocols & Trading Platforms ──
const ROW_3_LOGOS = [
  { id: 'r3-1', src: logo06, alt: 'Uniswap' },
  { id: 'r3-2', src: logo14, alt: 'Polygon' },
  { id: 'r3-3', src: logo13, alt: 'Gate.io' },
  { id: 'r3-4', src: logo15, alt: 'Bitget' },
  { id: 'r3-5', src: logo18, alt: 'Crypto.com' },
  { id: 'r3-6', src: logo19, alt: 'Gemini' },
];

export const CryptoLogosMarquee: React.FC = () => {
  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 overflow-hidden relative select-none space-y-4 sm:space-y-6">
      
      {/* Category Eyebrow */}
      <div className="text-center mb-2 sm:mb-2.5">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8e4d5] border border-[#d6cfbe] text-[11px] font-mono tracking-widest text-[#3d4a3a] uppercase font-semibold">
          SUPPORTED WALLETS &amp; EXCHANGES
        </span>
      </div>

      {/* Editorial Headline: Any app. Any exchange. One Dope. */}
      <div className="text-center w-full max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-tight text-[#2d3e32] font-serif font-normal leading-[1.08]">
          Any app. Any exchange.{' '}
          <span className="font-serif italic font-bold text-[#253b2b]">
            One Dope.
          </span>
        </h2>
      </div>

      {/* Main 3-Row Marquee Track Wrapper with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
        
        {/* Left Gradient Fade (Covers all 3 Rows) */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/90 to-transparent z-20" />

        {/* Right Gradient Fade (Covers all 3 Rows) */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/90 to-transparent z-20" />

        {/* ── ROW 1: Moving to the LEFT (7 Unique Wallets) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-a-${logo.id}`}
                className="flex items-center justify-center mx-5 sm:mx-8 lg:mx-10 shrink-0 h-12 sm:h-14 lg:h-16 px-3 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 sm:max-h-9 lg:max-h-10 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-b-${logo.id}`}
                className="flex items-center justify-center mx-5 sm:mx-8 lg:mx-10 shrink-0 h-12 sm:h-14 lg:h-16 px-3 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 sm:max-h-9 lg:max-h-10 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 2: Moving to the RIGHT (6 Unique Global Exchanges) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max items-center animate-crypto-marquee-right group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-a-${logo.id}`}
                className="flex items-center justify-center mx-5 sm:mx-8 lg:mx-10 shrink-0 h-12 sm:h-14 lg:h-16 px-3 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 sm:max-h-9 lg:max-h-10 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-b-${logo.id}`}
                className="flex items-center justify-center mx-5 sm:mx-8 lg:mx-10 shrink-0 h-12 sm:h-14 lg:h-16 px-3 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 sm:max-h-9 lg:max-h-10 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 3: Moving to the LEFT (6 Unique DeFi & Protocols) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_3_LOGOS.map((logo) => (
              <div
                key={`r3-a-${logo.id}`}
                className="flex items-center justify-center mx-5 sm:mx-8 lg:mx-10 shrink-0 h-12 sm:h-14 lg:h-16 px-3 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 sm:max-h-9 lg:max-h-10 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {ROW_3_LOGOS.map((logo) => (
              <div
                key={`r3-b-${logo.id}`}
                className="flex items-center justify-center mx-5 sm:mx-8 lg:mx-10 shrink-0 h-12 sm:h-14 lg:h-16 px-3 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-7 sm:max-h-9 lg:max-h-10 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
